"""
Pydantic models for request/response validation
"""
from pydantic import BaseModel, Field, ConfigDict
from typing import Optional, List, Dict, Any
from datetime import datetime
from enum import Enum

# Enums
class CourseType(str, Enum):
    SCHOOLING = "schooling"
    ENGINEERING = "engineering"
    GOVT = "govt"

class LevelType(str, Enum):
    BEGINNER = "Beginner"
    INTERMEDIATE = "Intermediate"
    EXPERT = "Expert"

class MessageRole(str, Enum):
    USER = "user"
    ASSISTANT = "assistant"

# Authentication models
class UserRegister(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    username: str = Field(..., min_length=3, max_length=50)
    password: str = Field(..., min_length=8)  # No max length with argon2

class UserLogin(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    username: str
    password: str

class UserResponse(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    id: str
    username: str
    created_at: Optional[datetime] = Field(None, alias="createdAt")

class TokenResponse(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    access_token: str = Field(..., alias="accessToken")
    token_type: str = "bearer"
    user: UserResponse

# RAG models
class RAGQueryRequest(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    user_id: str = Field(..., alias="userId")
    course: CourseType
    level: LevelType
    query: str = Field(..., min_length=1, max_length=2000)
    session_id: Optional[str] = Field(None, alias="sessionId")

class SourceCitation(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    source: str
    id: str
    score: Optional[float] = None

class RAGQueryResponse(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    answer: str
    sources: List[SourceCitation]
    session_id: str = Field(..., alias="sessionId")

# Chat models
class ChatMessage(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    id: str
    role: MessageRole
    content: str
    sources: Optional[List[SourceCitation]] = []
    created_at: datetime = Field(..., alias="createdAt")

class ChatSession(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    id: str
    user_id: str = Field(..., alias="userId")
    course: CourseType
    level: LevelType
    title: str
    created_at: datetime = Field(..., alias="createdAt")
    updated_at: datetime = Field(..., alias="updatedAt")

# Study plan models
class StudyPlanRequest(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    user_id: str = Field(..., alias="userId")
    course: CourseType
    level: LevelType
    duration: int = Field(..., ge=1, le=52)  # 1-52 weeks
    hours_per_day: int = Field(default=2, ge=1, le=8, alias="hoursPerDay")
    topics: Optional[List[str]] = None

class DailyTask(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    day: int
    topic: str
    duration: int  # minutes
    resources: List[str]
    exercises: Optional[List[str]] = []

class WeekPlan(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    week_number: int = Field(..., alias="weekNumber")
    topics: List[str]
    daily_tasks: List[DailyTask] = Field(..., alias="dailyTasks")

class StudyPlanResponse(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    plan_id: str = Field(..., alias="planId")
    course: CourseType
    level: LevelType
    duration: int
    weeks: List[WeekPlan]
    created_at: datetime = Field(..., alias="createdAt")

# Assessment models
class AssessmentRequest(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    user_id: str = Field(..., alias="userId")
    course: CourseType
    level: LevelType
    topic: Optional[str] = None
    question_count: int = Field(default=10, ge=5, le=50, alias="questionCount")
    question_types: Optional[List[str]] = Field(["mcq", "descriptive"], alias="questionTypes")

class QuestionOption(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    option: str
    text: str

class Question(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    id: str
    type: str  # mcq, descriptive, true_false
    question: str
    options: Optional[List[QuestionOption]] = None
    correct_answer: Optional[str] = Field(None, alias="correctAnswer")
    explanation: Optional[str] = None
    marks: int = 1

class AssessmentResponse(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    assessment_id: str = Field(..., alias="assessmentId")
    course: CourseType
    level: LevelType
    topic: Optional[str]
    questions: List[Question]
    total_marks: int = Field(..., alias="totalMarks")
    created_at: datetime = Field(..., alias="createdAt")

class SubmitAssessmentRequest(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    assessment_id: str = Field(..., alias="assessmentId")
    answers: List[Dict[str, Any]]  # [{"question_id": "q1", "answer": "A"}]

class AssessmentResult(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    assessment_id: str = Field(..., alias="assessmentId")
    score: int
    total_marks: int = Field(..., alias="totalMarks")
    percentage: float
    correct_answers: int = Field(..., alias="correctAnswers")
    total_questions: int = Field(..., alias="totalQuestions")
    detailed_results: List[Dict[str, Any]] = Field(..., alias="detailedResults")

# Embedding models
class DocumentChunk(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    content: str
    course: CourseType
    level: LevelType
    metadata: Dict[str, Any]

class EmbeddingRequest(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    chunks: List[DocumentChunk]
