"""
Configuration settings for the application
"""
from pydantic_settings import BaseSettings
from typing import List
import os

class Settings(BaseSettings):
    # Server
    PORT: int = 5000
    DEBUG: bool = True
    
    # Database
    MONGODB_URI: str = "mongodb://localhost:27017"
    DATABASE_NAME: str = "exprep"
    
    # AI APIs
    GROQ_API_KEY: str = ""
    # OPENAI_API_KEY: str = ""  # Optional: only if using OpenAI embeddings
    
    # Security
    JWT_SECRET: str = "your-secret-key-change-in-production"
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 43200  # 30 days
    
    # CORS
    ALLOWED_ORIGINS: List[str] = ["http://localhost:5000", "http://localhost:5173"]
    
    # RAG Settings
    EMBEDDING_MODEL: str = "sentence-transformers/all-MiniLM-L6-v2"  # HuggingFace model (matches ChromaDB)
    GROQ_MODEL: str = "openai/gpt-oss-120b"  # or mixtral-8x7b-32768
    MAX_CONTEXT_CHUNKS: int = 3  # Reduced to prevent token overflow
    MAX_CONTEXT_LENGTH: int = 3000  # Max characters for context (approx 750 tokens)
    CHUNK_SIZE: int = 500
    CHUNK_OVERLAP: int = 50
    
    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()
