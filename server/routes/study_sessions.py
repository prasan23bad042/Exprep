"""
Study session management routes
"""
from fastapi import APIRouter, HTTPException, status
from typing import List

from models_friends import (
    CreateStudySession, StudySessionResponse, JoinSessionRequest,
    SessionInvitation, StudySessionParticipant, ContentStateUpdate,
    SessionMessage, SessionChatResponse
)
from database import db

router = APIRouter()

@router.post("/create", response_model=StudySessionResponse)
async def create_study_session(request: CreateStudySession):
    """Create new study session"""
    try:
        # Get host details
        host = await db.get_user_by_id(request.host_id)
        if not host:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="User not found"
            )
        
        session_name = request.session_name or f"{host['username']}'s {request.course} Study"
        
        session = await db.create_study_session(
            host_id=request.host_id,
            course=request.course,
            session_name=session_name,
            invited_friends=request.invited_friends
        )
        
        # Build response
        participants = []
        for p in session["participants"]:
            user = await db.get_user_by_id(str(p["user_id"]))
            participants.append(StudySessionParticipant(
                user_id=str(p["user_id"]),
                username=user["username"],
                role=p["role"],
                joined_at=p["joined_at"],
                is_active=p["is_active"]
            ))
        
        return StudySessionResponse(
            id=str(session["_id"]),
            session_name=session["session_name"],
            course=session["course"],
            host_id=str(session["host_id"]),
            status=session["status"],
            participants=participants,
            current_topic=session.get("current_topic"),
            created_at=session["created_at"],
            ended_at=session.get("ended_at")
        )
    except ValueError as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e)
        )

@router.get("/invitations/{user_id}")
async def get_session_invitations(user_id: str):
    """Get pending session invitations"""
    invitations = await db.get_session_invitations(user_id)
    
    invitation_responses = []
    for inv in invitations:
        if inv.get("from_user"):
            invitation_responses.append(SessionInvitation(
                id=str(inv["_id"]),
                session_id=str(inv["session_id"]),
                session_name=inv["session_name"],
                from_user=inv["from_user"],
                course=inv["course"],
                created_at=inv["created_at"]
            ))
    
    return {"invitations": invitation_responses}

@router.post("/join", response_model=StudySessionResponse)
async def join_study_session(request: JoinSessionRequest):
    """Join study session"""
    try:
        session = await db.join_study_session(request.session_id, request.user_id)
        
        if not session:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Session not found"
            )
        
        # Build response
        participants = []
        for p in session["participants"]:
            participants.append(StudySessionParticipant(
                user_id=str(p["user_id"]),
                username=p["username"],
                role=p["role"],
                joined_at=p["joined_at"],
                is_active=p["is_active"]
            ))
        
        return StudySessionResponse(
            id=str(session["_id"]),
            session_name=session["session_name"],
            course=session["course"],
            host_id=str(session["host_id"]),
            status=session["status"],
            participants=participants,
            current_topic=session.get("current_topic"),
            created_at=session["created_at"],
            ended_at=session.get("ended_at")
        )
    except ValueError as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e)
        )

@router.post("/leave")
async def leave_study_session(session_id: str, user_id: str):
    """Leave study session"""
    try:
        session = await db.leave_study_session(session_id, user_id)
        return {"success": True, "session": session}
    except ValueError as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e)
        )

@router.get("/{session_id}", response_model=StudySessionResponse)
async def get_study_session(session_id: str):
    """Get study session details"""
    session = await db.get_study_session(session_id)
    
    if not session:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Session not found"
        )
    
    participants = []
    for p in session["participants"]:
        participants.append(StudySessionParticipant(
            user_id=str(p["user_id"]),
            username=p["username"],
            role=p["role"],
            joined_at=p["joined_at"],
            is_active=p["is_active"]
        ))
    
    return StudySessionResponse(
        id=str(session["_id"]),
        session_name=session["session_name"],
        course=session["course"],
        host_id=str(session["host_id"]),
        status=session["status"],
        participants=participants,
        current_topic=session.get("current_topic"),
        created_at=session["created_at"],
        ended_at=session.get("ended_at")
    )

@router.get("/user/{user_id}/active")
async def get_user_active_sessions(user_id: str):
    """Get user's active sessions"""
    sessions = await db.get_user_active_sessions(user_id)
    
    session_responses = []
    for session in sessions:
        participants = []
        for p in session["participants"]:
            user = await db.get_user_by_id(str(p["user_id"]))
            participants.append(StudySessionParticipant(
                user_id=str(p["user_id"]),
                username=user["username"] if user else "Unknown",
                role=p["role"],
                joined_at=p["joined_at"],
                is_active=p["is_active"]
            ))
        
        session_responses.append(StudySessionResponse(
            id=str(session["_id"]),
            session_name=session["session_name"],
            course=session["course"],
            host_id=str(session["host_id"]),
            status=session["status"],
            participants=participants,
            current_topic=session.get("current_topic"),
            created_at=session["created_at"],
            ended_at=session.get("ended_at")
        ))
    
    return {"sessions": session_responses}

@router.get("/{session_id}/messages")
async def get_session_messages(session_id: str, limit: int = 100):
    """Get session chat messages"""
    messages = await db.get_session_messages(session_id, limit)
    
    message_responses = [
        SessionChatResponse(
            id=str(msg["_id"]),
            session_id=str(msg["session_id"]),
            user_id=str(msg["user_id"]),
            username=msg["username"],
            message=msg["message"],
            timestamp=msg["timestamp"]
        )
        for msg in messages
    ]
    
    return {"messages": message_responses}
