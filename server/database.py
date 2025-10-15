"""
MongoDB database connection and operations
"""
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from typing import Optional, List, Dict, Any
from datetime import datetime
from bson import ObjectId
import numpy as np

from config import settings

class Database:
    client: Optional[AsyncIOMotorClient] = None
    db: Optional[AsyncIOMotorDatabase] = None
    
    async def connect(self):
        """Connect to MongoDB"""
        import certifi  # ✅ add this

        # Use certifi to fix SSL certificate validation issue
        self.client = AsyncIOMotorClient(
            settings.MONGODB_URI,
            tlsCAFile=certifi.where()
        )

        self.db = self.client[settings.DATABASE_NAME]
        
        # Create indexes
        await self._create_indexes()
        print("✓ Connected to MongoDB Atlas securely")

    
    async def disconnect(self):
        """Disconnect from MongoDB"""
        if self.client:
            self.client.close()
    
    async def _create_indexes(self):
        """Create database indexes for performance"""
        # Users
        await self.db.users.create_index("username", unique=True)
        
        # Chat sessions
        await self.db.chat_sessions.create_index([("user_id", 1), ("updated_at", -1)])
        
        # Messages
        await self.db.messages.create_index([("session_id", 1), ("created_at", 1)])
        
        # Study plans
        await self.db.study_plans.create_index([("user_id", 1), ("created_at", -1)])
        
        # Assessments
        await self.db.assessments.create_index([("user_id", 1), ("created_at", -1)])
        
        # Document embeddings - for metadata filtering
        await self.db.document_embeddings.create_index([("course", 1), ("level", 1)])
        
        print("✓ Database indexes created")
    
    # User operations
    async def get_user_by_id(self, user_id: str) -> Optional[Dict[str, Any]]:
        """Get user by ID"""
        return await self.db.users.find_one({"_id": ObjectId(user_id)})
    
    async def get_user_by_username(self, username: str) -> Optional[Dict[str, Any]]:
        """Get user by username"""
        return await self.db.users.find_one({"username": username})
    
    async def create_user(self, username: str, password_hash: str) -> Dict[str, Any]:
        """Create new user"""
        user = {
            "username": username,
            "password_hash": password_hash,
            "created_at": datetime.utcnow()
        }
        result = await self.db.users.insert_one(user)
        user["_id"] = result.inserted_id
        return user
    
    # Chat session operations
    async def create_chat_session(self, user_id: str, course: str, level: str, title: str = None) -> Dict[str, Any]:
        """Create new chat session"""
        # Handle both ObjectId and string user IDs
        try:
            user_id_obj = ObjectId(user_id) if ObjectId.is_valid(user_id) else user_id
        except:
            user_id_obj = user_id
            
        session = {
            "user_id": user_id_obj,
            "course": course,
            "level": level,
            "title": title or f"{course.title()} - {level}",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
        result = await self.db.chat_sessions.insert_one(session)
        session["_id"] = result.inserted_id
        return session
    
    async def get_user_sessions(self, user_id: str, limit: int = 20) -> List[Dict[str, Any]]:
        """Get user's chat sessions"""
        cursor = self.db.chat_sessions.find(
            {"user_id": ObjectId(user_id)}
        ).sort("updated_at", -1).limit(limit)
        return await cursor.to_list(length=limit)
    
    # Message operations
    async def create_message(self, session_id: str, role: str, content: str, sources: List[Dict] = None) -> Dict[str, Any]:
        """Create new message"""
        message = {
            "session_id": ObjectId(session_id),
            "role": role,
            "content": content,
            "sources": sources or [],
            "created_at": datetime.utcnow()
        }
        result = await self.db.messages.insert_one(message)
        message["_id"] = result.inserted_id
        
        # Update session timestamp
        await self.db.chat_sessions.update_one(
            {"_id": ObjectId(session_id)},
            {"$set": {"updated_at": datetime.utcnow()}}
        )
        
        return message
    
    async def get_session_messages(self, session_id: str, limit: int = 50) -> List[Dict[str, Any]]:
        """Get messages for a session"""
        cursor = self.db.messages.find(
            {"session_id": ObjectId(session_id)}
        ).sort("created_at", 1).limit(limit)
        return await cursor.to_list(length=limit)
    
    # Embedding operations
    async def insert_embedding(self, course: str, level: str, content: str, embedding: List[float], metadata: Dict) -> Dict[str, Any]:
        """Insert document embedding"""
        doc = {
            "course": course,
            "level": level,
            "content": content,
            "embedding": embedding,
            "metadata": metadata,
            "created_at": datetime.utcnow()
        }
        result = await self.db.document_embeddings.insert_one(doc)
        doc["_id"] = result.inserted_id
        return doc
    
    async def search_similar_documents(
        self, 
        query_embedding: List[float], 
        course: str, 
        level: str, 
        limit: int = 5
    ) -> List[Dict[str, Any]]:
        """
        Search for similar documents using MongoDB Atlas Vector Search
        Note: Requires Atlas search index on 'embedding' field
        
        If not using Atlas, falls back to cosine similarity calculation
        """
        try:
            # Try Atlas Vector Search first
            pipeline = [
                {
                    "$search": {
                        "index": "vector_index",
                        "knnBeta": {
                            "vector": query_embedding,
                            "path": "embedding",
                            "k": limit,
                            "filter": {
                                "course": course,
                                "level": level
                            }
                        }
                    }
                },
                {"$limit": limit},
                {
                    "$project": {
                        "content": 1,
                        "metadata": 1,
                        "course": 1,
                        "level": 1,
                        "score": {"$meta": "searchScore"}
                    }
                }
            ]
            
            results = await self.db.document_embeddings.aggregate(pipeline).to_list(length=limit)
            
            if results:
                return results
        except Exception as e:
            print(f"Atlas Vector Search not available, using fallback: {e}")
        
        # Fallback: Manual cosine similarity (slower, for development)
        return await self._fallback_similarity_search(query_embedding, course, level, limit)
    
    async def _fallback_similarity_search(
        self, 
        query_embedding: List[float], 
        course: str, 
        level: str, 
        limit: int
    ) -> List[Dict[str, Any]]:
        """Fallback similarity search using cosine similarity"""
        # Get all documents matching course and level
        cursor = self.db.document_embeddings.find({"course": course, "level": level})
        documents = await cursor.to_list(length=1000)
        
        if not documents:
            return []
        
        # Calculate cosine similarity
        query_vec = np.array(query_embedding)
        
        for doc in documents:
            doc_vec = np.array(doc["embedding"])
            similarity = np.dot(query_vec, doc_vec) / (np.linalg.norm(query_vec) * np.linalg.norm(doc_vec))
            doc["score"] = float(similarity)
        
        # Sort by similarity and return top results
        documents.sort(key=lambda x: x["score"], reverse=True)
        return documents[:limit]
    
    # Study plan operations
    async def create_study_plan(self, user_id: str, course: str, level: str, duration: int, plan_data: Dict) -> Dict[str, Any]:
        """Create study plan"""
        plan = {
            "user_id": ObjectId(user_id),
            "course": course,
            "level": level,
            "duration": duration,
            "plan_data": plan_data,
            "progress": {},
            "created_at": datetime.utcnow()
        }
        result = await self.db.study_plans.insert_one(plan)
        plan["_id"] = result.inserted_id
        return plan
    
    async def get_user_study_plans(self, user_id: str) -> List[Dict[str, Any]]:
        """Get user's study plans"""
        cursor = self.db.study_plans.find(
            {"user_id": ObjectId(user_id)}
        ).sort("created_at", -1)
        return await cursor.to_list(length=None)
    
    # Assessment operations
    async def create_assessment(self, user_id: str, course: str, level: str, topic: str, questions: List[Dict]) -> Dict[str, Any]:
        """Create assessment"""
        assessment = {
            "user_id": ObjectId(user_id),
            "course": course,
            "level": level,
            "topic": topic,
            "questions": questions,
            "answers": None,
            "score": None,
            "completed_at": None,
            "created_at": datetime.utcnow()
        }
        result = await self.db.assessments.insert_one(assessment)
        assessment["_id"] = result.inserted_id
        return assessment
    
    async def submit_assessment(self, assessment_id: str, answers: List[Dict], score: int) -> bool:
        """Submit assessment answers"""
        result = await self.db.assessments.update_one(
            {"_id": ObjectId(assessment_id)},
            {
                "$set": {
                    "answers": answers,
                    "score": score,
                    "completed_at": datetime.utcnow()
                }
            }
        )
        return result.modified_count > 0

# Global database instance
db = Database()
