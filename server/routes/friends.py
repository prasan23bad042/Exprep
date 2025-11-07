"""
Friend management routes
"""
from fastapi import APIRouter, HTTPException, status
from typing import List

from models_friends import (
    FriendRequest, FriendRequestResponse, AcceptFriendRequest,
    FriendResponse, SearchUserResponse
)
from database import db

router = APIRouter()

@router.get("/search/{query}")
async def search_users(query: str, current_user_id: str):
    """Search users by username"""
    if len(query) < 2:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Query must be at least 2 characters"
        )
    
    users = await db.search_users(query, current_user_id)
    
    # Check friendship status for each user
    results = []
    for user in users:
        user_id = str(user["_id"])
        
        # Check if already friends
        friends = await db.get_friends(current_user_id)
        is_friend = any(f["_id"] == user_id for f in friends)
        
        # Check for pending request
        pending_requests = await db.get_friend_requests(current_user_id)
        has_pending = any(
            str(req["from_user_id"]) == current_user_id and str(req["to_user_id"]) == user_id
            for req in pending_requests
        )
        
        results.append(SearchUserResponse(
            id=user_id,
            username=user["username"],
            is_friend=is_friend,
            has_pending_request=has_pending
        ))
    
    return {"users": results}

@router.post("/request")
async def send_friend_request(request: FriendRequest):
    """Send friend request"""
    try:
        req = await db.send_friend_request(request.from_user_id, request.to_user_id)
        
        # Get user details
        from_user = await db.get_user_by_id(request.from_user_id)
        to_user = await db.get_user_by_id(request.to_user_id)
        
        return FriendRequestResponse(
            id=str(req["_id"]),
            from_user={"id": str(from_user["_id"]), "username": from_user["username"]},
            to_user={"id": str(to_user["_id"]), "username": to_user["username"]},
            status=req["status"],
            created_at=req["created_at"]
        )
    except ValueError as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e)
        )

@router.get("/requests/{user_id}")
async def get_friend_requests(user_id: str):
    """Get pending friend requests"""
    requests = await db.get_friend_requests(user_id)
    
    responses = []
    for req in requests:
        if req.get("from_user"):
            to_user = await db.get_user_by_id(str(req["to_user_id"]))
            responses.append(FriendRequestResponse(
                id=str(req["_id"]),
                from_user=req["from_user"],
                to_user={"id": str(to_user["_id"]), "username": to_user["username"]},
                status=req["status"],
                created_at=req["created_at"]
            ))
    
    return {"requests": responses}

@router.post("/request/respond")
async def respond_to_friend_request(response: AcceptFriendRequest):
    """Accept or reject friend request"""
    success = await db.accept_friend_request(response.request_id, response.accept)
    
    if not success:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Request not found or already processed"
        )
    
    return {"success": True, "accepted": response.accept}

@router.get("/{user_id}")
async def get_friends(user_id: str):
    """Get user's friends list"""
    friends = await db.get_friends(user_id)
    
    # Check if friends are in active sessions
    for friend in friends:
        sessions = await db.get_user_active_sessions(friend["_id"])
        friend["in_session"] = len(sessions) > 0
    
    friend_responses = [
        FriendResponse(
            id=f["_id"],
            username=f["username"],
            is_online=f.get("is_online", False),
            in_session=f.get("in_session", False)
        )
        for f in friends
    ]
    
    return {"friends": friend_responses}

@router.delete("/{user_id}/{friend_id}")
async def remove_friend(user_id: str, friend_id: str):
    """Remove friend"""
    success = await db.remove_friend(user_id, friend_id)
    
    if not success:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Friendship not found"
        )
    
    return {"success": True}
