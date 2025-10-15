"""
ChromaDB client for vector search
"""
import chromadb
from chromadb.config import Settings
from pathlib import Path
from typing import List, Dict, Optional
import logging

logger = logging.getLogger(__name__)

class ChromaDBClient:
    """Client for managing ChromaDB collections"""
    
    # Mapping of course/subject to ChromaDB collections
    COLLECTION_MAPPING = {
        "schooling": "edu_merged",
        "engineering_coa": "coa_merged",
        "engineering_os": "os_merged",
        "govt": "ssc_merged"
    }
    
    def __init__(self):
        """Initialize ChromaDB clients for each collection"""
        self.clients = {}
        self.collections = {}
        
        # Base path to ChromaDB folders
        base_path = Path(__file__).parent.parent / "chroma_dbs_merged"
        
        # Initialize each collection
        for key, folder_name in self.COLLECTION_MAPPING.items():
            folder_path = base_path / folder_name
            
            if folder_path.exists():
                try:
                    # Create persistent client for this collection
                    client = chromadb.PersistentClient(
                        path=str(folder_path),
                        settings=Settings(anonymized_telemetry=False)
                    )
                    
                    # Get the first collection (assuming one collection per folder)
                    collections = client.list_collections()
                    if collections:
                        self.clients[key] = client
                        self.collections[key] = collections[0]
                        logger.info(f"Loaded ChromaDB collection: {key} from {folder_name}")
                    else:
                        logger.warning(f"No collections found in {folder_name}")
                        
                except Exception as e:
                    logger.error(f"Error loading {folder_name}: {str(e)}")
            else:
                logger.warning(f"ChromaDB folder not found: {folder_path}")
    
    def get_collection_key(self, course: str, query: str = "") -> Optional[str]:
        """
        Determine which ChromaDB collection to use based on course and query
        
        Args:
            course: Course type (schooling, engineering, govt)
            query: User query (to detect COA vs OS for engineering)
        
        Returns:
            Collection key or None
        """
        if course == "schooling":
            return "schooling"
        
        elif course == "engineering":
            # Detect if query is about COA or OS
            query_lower = query.lower()
            
            # COA keywords
            coa_keywords = [
                "cpu", "alu", "cache", "memory", "register", "pipeline",
                "instruction", "architecture", "processor", "bus", "control unit"
            ]
            
            # OS keywords
            os_keywords = [
                "process", "thread", "deadlock", "semaphore", "scheduling",
                "mutex", "synchronization", "kernel", "system call", "virtual memory"
            ]
            
            coa_score = sum(1 for kw in coa_keywords if kw in query_lower)
            os_score = sum(1 for kw in os_keywords if kw in query_lower)
            
            if coa_score > os_score:
                return "engineering_coa"
            else:
                return "engineering_os"
        
        elif course == "govt":
            return "govt"
        
        return None
    
    async def search_similar(
        self,
        query_embedding: List[float],
        course: str,
        query_text: str = "",
        limit: int = 5
    ) -> List[Dict]:
        """
        Search for similar documents using ChromaDB
        
        Args:
            query_embedding: Query vector embedding
            course: Course type
            query_text: Original query text (for collection selection)
            limit: Number of results to return
        
        Returns:
            List of similar documents with metadata
        """
        collection_key = self.get_collection_key(course, query_text)
        
        if not collection_key or collection_key not in self.collections:
            logger.warning(f"No collection found for course: {course}")
            return []
        
        try:
            collection = self.collections[collection_key]
            
            # Query ChromaDB
            results = collection.query(
                query_embeddings=[query_embedding],
                n_results=limit,
                include=["documents", "metadatas", "distances"]
            )
            
            # Format results
            documents = []
            if results['ids'] and results['ids'][0]:
                for i, doc_id in enumerate(results['ids'][0]):
                    documents.append({
                        "_id": doc_id,
                        "content": results['documents'][0][i],
                        "metadata": results['metadatas'][0][i] if results['metadatas'][0] else {},
                        "score": 1 - results['distances'][0][i]  # Convert distance to similarity
                    })
            
            logger.info(f"Found {len(documents)} similar documents in {collection_key}")
            return documents
            
        except Exception as e:
            logger.error(f"Error searching ChromaDB: {str(e)}")
            return []
    
    def get_stats(self) -> Dict:
        """Get statistics about loaded collections"""
        stats = {}
        for key, collection in self.collections.items():
            try:
                count = collection.count()
                stats[key] = {
                    "name": collection.name,
                    "count": count
                }
            except Exception as e:
                stats[key] = {"error": str(e)}
        
        return stats

# Global ChromaDB client instance
chroma_client = ChromaDBClient()
