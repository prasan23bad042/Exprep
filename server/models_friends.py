"""
Pydantic models for Friends and Study Sessions
"""
from pydantic import BaseModel, Field, ConfigDict
from typing import Optional, List, Dict, Any
from datetime import datetime
from enum import Enum

# Enums
class FriendRequestStatus(str, Enum):
    PENDING = "pending"
    ACCEPTED = "accepted"
    REJECTED = "rejected"

class SessionStatus(str, Enum):
    ACTIVE = "active"
    ENDED = "ended"

class ParticipantRole(str, Enum):
    HOST = "host"
    PARTICIPANT = "participant"

# Friend Request Models
class FriendRequest(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    from_user_id: str = Field(..., alias="fromUserId")
    to_user_id: str = Field(..., alias="toUserId")

class FriendRequestResponse(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    id: str
    from_user: Dict[str, Any] = Field(..., alias="fromUser")  # {id, username}
    to_user: Dict[str, Any] = Field(..., alias="toUser")
    status: FriendRequestStatus
    created_at: datetime = Field(..., alias="createdAt")

class AcceptFriendRequest(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    request_id: str = Field(..., alias="requestId")
    accept: bool

# Friend Models
class FriendResponse(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    id: str
    username: str
    is_online: bool = Field(default=False, alias="isOnline")
    in_session: bool = Field(default=False, alias="inSession")

class SearchUserResponse(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    id: str
    username: str
    is_friend: bool = Field(..., alias="isFriend")
    has_pending_request: bool = Field(..., alias="hasPendingRequest")

# Study Session Models
class CreateStudySession(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    host_id: str = Field(..., alias="hostId")
    course: str
    invited_friends: List[str] = Field(..., alias="invitedFriends")  # List of user IDs
    session_name: Optional[str] = Field(None, alias="sessionName")

class StudySessionParticipant(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    user_id: str = Field(..., alias="userId")
    username: str
    role: ParticipantRole
    joined_at: datetime = Field(..., alias="joinedAt")
    is_active: bool = Field(default=True, alias="isActive")

class StudySessionResponse(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    id: str
    session_name: str = Field(..., alias="sessionName")
    course: str
    host_id: str = Field(..., alias="hostId")
    status: SessionStatus
    participants: List[StudySessionParticipant]
    current_topic: Optional[Dict[str, str]] = Field(None, alias="currentTopic")  # {lessonId, topicId}
    created_at: datetime = Field(..., alias="createdAt")
    ended_at: Optional[datetime] = Field(None, alias="endedAt")

class JoinSessionRequest(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    session_id: str = Field(..., alias="sessionId")
    user_id: str = Field(..., alias="userId")

class SessionInvitation(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    id: str
    session_id: str = Field(..., alias="sessionId")
    session_name: str = Field(..., alias="sessionName")
    from_user: Dict[str, str] = Field(..., alias="fromUser")  # {id, username}
    course: str
    created_at: datetime = Field(..., alias="createdAt")

# Content Synchronization
class ContentStateUpdate(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    session_id: str = Field(..., alias="sessionId")
    lesson_id: str = Field(..., alias="lessonId")
    topic_id: str = Field(..., alias="topicId")
    scroll_position: Optional[int] = Field(0, alias="scrollPosition")

# Session Chat
class SessionMessage(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    session_id: str = Field(..., alias="sessionId")
    user_id: str = Field(..., alias="userId")
    username: str
    message: str
    timestamp: datetime

class SessionChatResponse(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    id: str
    session_id: str = Field(..., alias="sessionId")
    user_id: str = Field(..., alias="userId")
    username: str
    message: str
    timestamp: datetime

# WebRTC Signaling
class WebRTCSignal(BaseModel):
    model_config = ConfigDict(populate_by_name=True, by_alias=True)
    
    session_id: str = Field(..., alias="sessionId")
    from_user_id: str = Field(..., alias="fromUserId")
    to_user_id: str = Field(..., alias="toUserId")
    signal_type: str = Field(..., alias="signalType")  # "offer", "answer", "ice-candidate"
    signal_data: Dict[str, Any] = Field(..., alias="signalData")
