"""
RAG (Retrieval-Augmented Generation) routes
"""
from fastapi import APIRouter, HTTPException, status
from groq import Groq
from typing import List
from sentence_transformers import SentenceTransformer

from models import RAGQueryRequest, RAGQueryResponse, SourceCitation, CourseType, LevelType
from database import db
from config import settings
from chromadb_client import chroma_client

router = APIRouter()

# Initialize AI clients
groq_client = Groq(api_key=settings.GROQ_API_KEY)
# Initialize embedding model (same as used in ChromaDB creation)
embedding_model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2')

# System prompts by course
SYSTEM_PROMPTS = {
    CourseType.SCHOOLING: """You are a patient and encouraging tutor for Tamil Nadu board students (grades 9-10).
- Explain concepts clearly with real-world examples
- Use simple language appropriate for the student's age
- Break down complex topics into smaller, manageable steps
- Encourage critical thinking with follow-up questions
- Reference NCERT and TN board syllabus when relevant
- Make learning engaging and fun""",
    
    CourseType.ENGINEERING: """You are an expert Computer Science educator specializing in Computer Organization and Operating Systems.
- Provide technically accurate explanations
- Include diagrams descriptions and pseudocode when helpful
- Reference standard textbooks (Stallings, Tanenbaum, Patterson & Hennessy)
- Connect theory to practical applications
- Prepare students for technical interviews and exams
- Use industry-standard terminology""",
    
    CourseType.GOVT: """You are an SSC CGL exam preparation expert.
- Focus on exam-relevant information and patterns
- Provide memory techniques and shortcuts
- Include previous year question patterns when applicable
- Emphasize time management strategies
- Cover all sections: Reasoning, Quantitative Aptitude, English, General Knowledge
- Give practical tips for exam day"""
}

# Level adjustments
LEVEL_ADJUSTMENTS = {
    LevelType.BEGINNER: "Use simple explanations. Avoid jargon. Provide step-by-step guidance with examples.",
    LevelType.INTERMEDIATE: "Balance theory and practice. Introduce advanced concepts gradually. Assume basic knowledge.",
    LevelType.EXPERT: "Provide in-depth analysis. Include edge cases and advanced topics. Challenge with complex scenarios."
}

async def generate_embedding(text: str) -> List[float]:
    """Generate embedding using HuggingFace SentenceTransformer (same as ChromaDB)"""
    try:
        # Generate embedding using the same model as ChromaDB creation
        embedding = embedding_model.encode(text, convert_to_numpy=True)
        return embedding.tolist()
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Embedding generation failed: {str(e)}"
        )

async def retrieve_context(query: str, course: str, level: str) -> List[dict]:
    """Retrieve relevant context from ChromaDB"""
    # Generate query embedding
    query_embedding = await generate_embedding(query)
    
    # Search for similar documents in ChromaDB
    results = await chroma_client.search_similar(
        query_embedding=query_embedding,
        course=course,
        query_text=query,
        limit=settings.MAX_CONTEXT_CHUNKS
    )
    
    return results

async def generate_response(query: str, context: str, course: CourseType, level: LevelType) -> str:
    """Generate response using Groq"""
    # Build concise system prompt to reduce token usage
    base_prompt = SYSTEM_PROMPTS.get(course, SYSTEM_PROMPTS[CourseType.SCHOOLING])
    level_adjustment = LEVEL_ADJUSTMENTS.get(level, LEVEL_ADJUSTMENTS[LevelType.BEGINNER])
    
    system_prompt = f"""{base_prompt}

Level: {level.value}. {level_adjustment}

Context from course materials:
{context}

Answer the question using the context. If context lacks info, use your knowledge but note it."""
    
    try:
        # Call Groq API
        completion = groq_client.chat.completions.create(
            model=settings.GROQ_MODEL,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": query}
            ],
            temperature=0.7,
            max_tokens=1500,
            top_p=1,
            stream=False
        )
        
        return completion.choices[0].message.content
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Response generation failed: {str(e)}"
        )

@router.post("/query", response_model=RAGQueryResponse)
async def rag_query(request: RAGQueryRequest):
    """
    Main RAG endpoint - retrieves context and generates AI response
    """
    try:
        # 1. Retrieve relevant context
        context_chunks = await retrieve_context(
            query=request.query,
            course=request.course.value,
            level=request.level.value
        )
        
        if not context_chunks:
            # No context found, but still generate response
            context_text = "No specific course materials found for this query."
        else:
            # Build context from chunks with truncation to prevent token overflow
            context_parts = []
            total_length = 0
            max_chunk_length = 1000  # Max characters per chunk
            
            for chunk in context_chunks:
                # Truncate individual chunk if too long
                content = chunk['content']
                if len(content) > max_chunk_length:
                    content = content[:max_chunk_length] + "..."
                
                chunk_text = f"[Source: {chunk.get('metadata', {}).get('filename', 'Unknown')}]\n{content}"
                
                # Check if adding this chunk would exceed total limit
                if total_length + len(chunk_text) > settings.MAX_CONTEXT_LENGTH:
                    break
                
                context_parts.append(chunk_text)
                total_length += len(chunk_text)
            
            context_text = "\n\n".join(context_parts)
        
        # 2. Generate response
        answer = await generate_response(
            query=request.query,
            context=context_text,
            course=request.course,
            level=request.level
        )
        
        # 3. Create or get session
        session_id = request.session_id
        if not session_id:
            session = await db.create_chat_session(
                user_id=request.user_id,
                course=request.course.value,
                level=request.level.value
            )
            session_id = str(session["_id"])
        
        # 4. Save messages
        await db.create_message(
            session_id=session_id,
            role="user",
            content=request.query
        )
        
        sources = [
            SourceCitation(
                source=chunk.get("metadata", {}).get("filename", "Unknown"),
                id=str(chunk["_id"]),
                score=chunk.get("score")
            )
            for chunk in context_chunks
        ]
        
        await db.create_message(
            session_id=session_id,
            role="assistant",
            content=answer,
            sources=[s.model_dump(by_alias=True) for s in sources]
        )
        
        # 5. Return response
        return RAGQueryResponse(
            answer=answer,
            sources=sources,
            session_id=session_id
        )
        
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Query processing failed: {str(e)}"
        )

@router.get("/sessions/{user_id}")
async def get_user_sessions(user_id: str):
    """Get user's chat sessions"""
    sessions = await db.get_user_sessions(user_id)
    
    # Convert ObjectId to string
    for session in sessions:
        session["_id"] = str(session["_id"])
        session["user_id"] = str(session["user_id"])
    
    return {"sessions": sessions}

@router.get("/sessions/{session_id}/messages")
async def get_session_messages(session_id: str):
    """Get messages for a session"""
    messages = await db.get_session_messages(session_id)
    
    # Convert ObjectId to string
    for message in messages:
        message["_id"] = str(message["_id"])
        message["session_id"] = str(message["session_id"])
    
    return {"messages": messages}
