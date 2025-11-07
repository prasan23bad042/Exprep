"""
Socket.io event handlers for real-time features
"""
import socketio
from typing import Dict, Set
from database import db

# Create Socket.IO server
sio = socketio.AsyncServer(
    async_mode='asgi',
    cors_allowed_origins='*',
    logger=True,
    engineio_logger=True
)

# Track online users and their socket IDs
online_users: Dict[str, str] = {}  # user_id -> socket_id
user_sessions: Dict[str, str] = {}  # socket_id -> user_id

@sio.event
async def connect(sid, environ):
    """Handle client connection"""
    print(f"Client connected: {sid}")

@sio.event
async def disconnect(sid):
    """Handle client disconnection"""
    print(f"Client disconnected: {sid}")
    
    # Remove from online users
    user_id = user_sessions.pop(sid, None)
    if user_id:
        online_users.pop(user_id, None)
        
        # Notify friends
        await notify_friends_status(user_id, False)

@sio.event
async def user_online(sid, data):
    """User comes online"""
    user_id = data.get('userId')
    if user_id:
        online_users[user_id] = sid
        user_sessions[sid] = user_id
        
        # Notify friends
        await notify_friends_status(user_id, True)
        
        await sio.emit('online_confirmed', {'userId': user_id}, room=sid)

async def notify_friends_status(user_id: str, is_online: bool):
    """Notify user's friends of online status change"""
    friends = await db.get_friends(user_id)
    
    for friend in friends:
        friend_id = friend["_id"]
        if friend_id in online_users:
            friend_sid = online_users[friend_id]
            await sio.emit('friend_status_changed', {
                'friendId': user_id,
                'isOnline': is_online
            }, room=friend_sid)

# FRIEND REQUEST EVENTS

@sio.event
async def send_friend_request(sid, data):
    """Notify user of new friend request"""
    to_user_id = data.get('toUserId')
    from_user = data.get('fromUser')
    
    if to_user_id in online_users:
        to_sid = online_users[to_user_id]
        await sio.emit('friend_request_received', {
            'fromUser': from_user
        }, room=to_sid)

@sio.event
async def friend_request_accepted(sid, data):
    """Notify user their request was accepted"""
    from_user_id = data.get('fromUserId')
    accepted_by = data.get('acceptedBy')
    
    if from_user_id in online_users:
        from_sid = online_users[from_user_id]
        await sio.emit('friend_request_accepted_notification', {
            'acceptedBy': accepted_by
        }, room=from_sid)

# STUDY SESSION EVENTS

@sio.event
async def session_invitation(sid, data):
    """Send session invitation to users"""
    invited_users = data.get('invitedUsers', [])
    session_data = data.get('sessionData')
    
    for user_id in invited_users:
        if user_id in online_users:
            user_sid = online_users[user_id]
            await sio.emit('study_session_invite', session_data, room=user_sid)

@sio.event
async def join_session_room(sid, data):
    """User joins a session room"""
    session_id = data.get('sessionId')
    user_id = data.get('userId')
    username = data.get('username')
    
    # Join Socket.IO room
    await sio.enter_room(sid, session_id)
    
    # Notify others in the session
    await sio.emit('user_joined_session', {
        'userId': user_id,
        'username': username
    }, room=session_id, skip_sid=sid)
    
    print(f"User {username} joined session {session_id}")

@sio.event
async def leave_session_room(sid, data):
    """User leaves a session room"""
    session_id = data.get('sessionId')
    user_id = data.get('userId')
    username = data.get('username')
    
    # Leave Socket.IO room
    await sio.leave_room(sid, session_id)
    
    # Notify others
    await sio.emit('user_left_session', {
        'userId': user_id,
        'username': username
    }, room=session_id)
    
    print(f"User {username} left session {session_id}")

@sio.event
async def sync_content(sid, data):
    """Host syncs content to all participants"""
    session_id = data.get('sessionId')
    lesson_id = data.get('lessonId')
    topic_id = data.get('topicId')
    scroll_position = data.get('scrollPosition', 0)
    
    # Update in database
    await db.update_session_content(session_id, lesson_id, topic_id, scroll_position)
    
    # Broadcast to all in session except sender
    await sio.emit('content_synced', {
        'lessonId': lesson_id,
        'topicId': topic_id,
        'scrollPosition': scroll_position
    }, room=session_id, skip_sid=sid)

@sio.event
async def session_chat_message(sid, data):
    """Broadcast chat message to session"""
    session_id = data.get('sessionId')
    user_id = data.get('userId')
    username = data.get('username')
    message = data.get('message')
    
    # Save to database
    msg = await db.save_session_message(session_id, user_id, username, message)
    
    # Broadcast to all in session
    await sio.emit('chat_message', {
        'id': str(msg["_id"]),
        'userId': user_id,
        'username': username,
        'message': message,
        'timestamp': msg["timestamp"].isoformat()
    }, room=session_id)

# WEBRTC SIGNALING EVENTS

@sio.event
async def webrtc_offer(sid, data):
    """Forward WebRTC offer"""
    to_user_id = data.get('toUserId')
    offer = data.get('offer')
    from_user_id = data.get('fromUserId')
    
    if to_user_id in online_users:
        to_sid = online_users[to_user_id]
        await sio.emit('webrtc_offer', {
            'fromUserId': from_user_id,
            'offer': offer
        }, room=to_sid)

@sio.event
async def webrtc_answer(sid, data):
    """Forward WebRTC answer"""
    to_user_id = data.get('toUserId')
    answer = data.get('answer')
    from_user_id = data.get('fromUserId')
    
    if to_user_id in online_users:
        to_sid = online_users[to_user_id]
        await sio.emit('webrtc_answer', {
            'fromUserId': from_user_id,
            'answer': answer
        }, room=to_sid)

@sio.event
async def webrtc_ice_candidate(sid, data):
    """Forward ICE candidate"""
    to_user_id = data.get('toUserId')
    candidate = data.get('candidate')
    from_user_id = data.get('fromUserId')
    
    if to_user_id in online_users:
        to_sid = online_users[to_user_id]
        await sio.emit('webrtc_ice_candidate', {
            'fromUserId': from_user_id,
            'candidate': candidate
        }, room=to_sid)

@sio.event
async def toggle_video(sid, data):
    """User toggles video on/off"""
    session_id = data.get('sessionId')
    user_id = data.get('userId')
    video_enabled = data.get('videoEnabled')
    
    await sio.emit('user_video_toggled', {
        'userId': user_id,
        'videoEnabled': video_enabled
    }, room=session_id, skip_sid=sid)

@sio.event
async def toggle_audio(sid, data):
    """User toggles audio on/off"""
    session_id = data.get('sessionId')
    user_id = data.get('userId')
    audio_enabled = data.get('audioEnabled')
    
    await sio.emit('user_audio_toggled', {
        'userId': user_id,
        'audioEnabled': audio_enabled
    }, room=session_id, skip_sid=sid)

# Create ASGI app for Socket.io
socket_app = socketio.ASGIApp(sio)
