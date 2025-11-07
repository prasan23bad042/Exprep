"""
FastAPI backend for Exprep - Exam Preparation Assistant
WITH GROUP STUDY FEATURES
"""
from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from contextlib import asynccontextmanager
import os
from dotenv import load_dotenv

from database import Database, db
from routes import auth, rag, study_plans, assessments
from routes import friends, study_sessions  # NEW
from socketio_handler import sio, socket_app  # NEW
from config import settings

load_dotenv()

@asynccontextmanager
async def lifespan(app: FastAPI):
    """Startup and shutdown events"""
    # Startup
    await db.connect()
    print(f"✓ Connected to MongoDB")
    print(f"✓ Socket.io server initialized")
    print(f"✓ Server starting on port {settings.PORT}")
    yield
    # Shutdown
    await db.disconnect()
    print("✓ Disconnected from MongoDB")

# Initialize FastAPI app
app = FastAPI(
    title="Exprep API with Group Study",
    description="AI-powered exam preparation assistant with real-time collaboration",
    version="2.0.0",
    lifespan=lifespan
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/api/auth", tags=["Authentication"])
app.include_router(rag.router, prefix="/api/rag", tags=["RAG"])
app.include_router(study_plans.router, prefix="/api/study-plans", tags=["Study Plans"])
app.include_router(assessments.router, prefix="/api/assessments", tags=["Assessments"])

# NEW: Group study routers
app.include_router(friends.router, prefix="/api/friends", tags=["Friends"])
app.include_router(study_sessions.router, prefix="/api/sessions", tags=["Study Sessions"])

# Mount Socket.io app
app.mount("/socket.io", socket_app)

@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "status": "ok",
        "message": "Exprep API with Group Study is running",
        "version": "2.0.0",
        "features": ["RAG", "Study Plans", "Assessments", "Friends", "Group Study", "WebRTC"]
    }

@app.get("/api/health")
async def health_check():
    """Detailed health check"""
    from chromadb_client import chroma_client
    
    try:
        # Check database connection
        await db.client.admin.command('ping')
        db_status = "connected"
    except Exception as e:
        db_status = f"error: {str(e)}"
    
    # Get ChromaDB stats
    chroma_stats = chroma_client.get_stats()
    
    return {
        "status": "ok",
        "database": db_status,
        "groq_api": "configured" if settings.GROQ_API_KEY else "missing",
        "chromadb_collections": chroma_stats,
        "socketio": "active"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=settings.PORT,
        reload=settings.DEBUG
    )
