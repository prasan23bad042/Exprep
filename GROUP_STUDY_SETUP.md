# 🚀 Group Study Feature - Installation & Setup Guide

## Overview
This guide will help you set up the new **Group Study** feature with:
- ✅ Friend system (search, add, manage)
- ✅ Study session creation with invites
- ✅ Real-time synchronized content viewing
- ✅ Group chat with message history
- ✅ WebRTC video calling (peer-to-peer)
- ✅ Socket.io real-time communication

---

## 📋 What's Been Added

### Backend Files (Python)
- `server/models_friends.py` - Pydantic models for friends and sessions
- `server/socketio_handler.py` - Socket.io event handlers
- `server/routes/friends.py` - Friend management endpoints
- `server/routes/study_sessions.py` - Study session endpoints
- Updated `server/database.py` - Added friend & session database operations
- Updated `server/main.py` - Integrated Socket.io
- Updated `server/requirements.txt` - Added python-socketio & aiohttp

### Frontend Files (React/TypeScript)
- `client/src/contexts/SocketContext.tsx` - Socket.io integration
- `client/src/pages/Friends.tsx` - Friend management page
- `client/src/pages/StudyRoom.tsx` - Collaborative study room with WebRTC
- `client/src/components/CreateSessionDialog.tsx` - Session creation modal
- `client/src/components/SessionInvitations.tsx` - Real-time invite notifications
- Updated `client/src/App.tsx` - Added routes & Socket provider
- Updated `client/src/pages/Home.tsx` - Added friend & session buttons
- Updated `client/src/lib/api.ts` - Added friend & session API methods
- Updated `package.json` - Added socket.io-client

---

## 🔧 Installation Steps

### Step 1: Install Backend Dependencies

```bash
cd server
pip install python-socketio==5.11.0 aiohttp==3.9.1

# Or reinstall all requirements
pip install -r requirements.txt
```

### Step 2: Install Frontend Dependencies

```bash
# From project root
npm install socket.io-client@^4.7.2

# Or reinstall all
npm install
```

### Step 3: Database Setup

MongoDB will auto-create the new collections on first use:
- `friends` - Friend connections
- `friend_requests` - Pending friend requests
- `study_sessions` - Active/past study sessions
- `session_invitations` - Session invites
- `session_messages` - Chat message history

**Optional: Create indexes for better performance**

```javascript
// In MongoDB shell or Compass
use exprep_db  // or your database name

db.friends.createIndex({ "user1_id": 1, "user2_id": 1 })
db.friend_requests.createIndex({ "to_user_id": 1, "status": 1 })
db.study_sessions.createIndex({ "status": 1, "participants.user_id": 1 })
db.session_messages.createIndex({ "session_id": 1, "timestamp": -1 })
```

---

## 🚀 Running the Application

### Start Backend Server

```bash
cd server
python main.py
```

You should see:
```
✓ Connected to MongoDB
✓ Socket.io server initialized
✓ Server starting on port 5000
```

### Start Frontend

```bash
# From project root
npm run dev
```

Should start on `http://localhost:5173`

---

## 🧪 Testing the Features

### Test 1: Friend System

1. **Create two accounts:**
   - Open two browser windows (or use incognito mode)
   - Register/login as User A and User B

2. **Search and add friend:**
   - User A: Click "Friends" button → "Find Friends" tab
   - Search for User B's username
   - Click "Add Friend"

3. **Accept friend request:**
   - User B: Go to "Friends" → "Requests" tab
   - Click "Accept" on User A's request

4. **Verify friendship:**
   - Both users should see each other in "Friends" tab
   - Online status should show as "Online" (green badge)

### Test 2: Study Session

1. **Create session:**
   - User A: Click "Start Study Session" button
   - Enter session name (e.g., "OS Finals Prep")
   - Select course (e.g., "Engineering")
   - Check User B from friends list
   - Click "Create Session"

2. **Receive invitation:**
   - User B: Should see popup notification in bottom-right
   - Shows session name, host, and course
   - Click "Join Now"

3. **Study room features:**
   - Both users enter the study room
   - See participant count in header
   - Chat in the sidebar (messages sync in real-time)
   - Click "Start Sharing" to enable camera/mic

### Test 3: Video Chat (WebRTC)

1. **Enable media:**
   - In study room, click "Start Sharing" button
   - Allow camera/microphone permissions
   - Your video appears in the grid

2. **Toggle controls:**
   - Click microphone icon to mute/unmute
   - Click video icon to turn camera on/off
   - Changes are visible to all participants

3. **Multiple participants:**
   - Invite more friends (up to 15 total)
   - Video grid automatically adjusts layout
   - Each participant can control their own media

### Test 4: Content Synchronization

**Note:** This requires implementing the sync logic in your topic pages.

In `StudyRoom.tsx`, when host changes content:
```typescript
socket.emit('sync_content', {
  sessionId,
  lessonId: 'lesson-1',
  topicId: 'topic-2',
  scrollPosition: 0
});
```

All participants receive the update and navigate to the same content.

---

## 🎯 Feature Highlights

### Friend Management
- **Search users** by username (minimum 2 characters)
- **Send/receive friend requests** with real-time notifications
- **Accept/decline requests** instantly
- **Remove friends** with confirmation
- **Online status** tracking via Socket.io

### Study Sessions
- **Host controls** - Only host can sync content
- **15 participant limit** (including host)
- **Host transfer** - If host leaves, automatically transfers to next participant
- **Rejoin capability** - Can leave and rejoin same session
- **Session history** - All messages stored in database

### Real-time Features
- **Instant notifications** for friend requests and session invites
- **Live chat** with message history
- **Online/offline status** updates
- **User join/leave** notifications
- **Content synchronization** (when implemented)

### WebRTC Video
- **Peer-to-peer** connections (no media server needed)
- **STUN servers** for NAT traversal (Google's public STUN)
- **Individual controls** - Each user controls their own media
- **Auto-layout** - Video grid adjusts based on participant count
- **Low latency** - Direct peer connections

---

## 🔒 Security Notes

1. **WebRTC Security:**
   - Uses STUN servers for connection establishment
   - Peer-to-peer connections (media doesn't go through server)
   - Consider adding TURN server for users behind strict firewalls

2. **Socket.io Security:**
   - Currently allows all origins (`cors_allowed_origins='*'`)
   - **Production:** Update to specific origins in `socketio_handler.py`

3. **Session Privacy:**
   - Only invited users can join sessions
   - Session IDs are UUIDs (hard to guess)
   - Consider adding session passwords for extra security

---

## 🐛 Troubleshooting

### Socket.io not connecting

**Check:**
- Backend server is running on port 5000
- Frontend is configured to connect to `http://localhost:5000`
- No CORS errors in browser console

**Fix:**
```typescript
// In SocketContext.tsx, verify URL matches your backend
const newSocket = io('http://localhost:5000', {
  transports: ['websocket', 'polling'],
});
```

### WebRTC video not working

**Check:**
- Browser permissions for camera/microphone
- HTTPS required for production (WebRTC security)
- Both users clicked "Start Sharing"

**Fix:**
- Grant permissions when prompted
- For production, use HTTPS and add TURN server

### Friend requests not appearing

**Check:**
- Both users are logged in
- Socket.io connection is active (check console logs)
- MongoDB is running and accessible

**Fix:**
- Refresh the Friends page
- Check browser console for errors
- Verify Socket.io connection status

### Session invitations not showing

**Check:**
- Invited user is online
- Socket.io connection established
- User is actually friends with host

**Fix:**
- Refresh page to reconnect Socket.io
- Check `session_invitations` collection in MongoDB

---

## 📊 MongoDB Collections Schema

### friends
```javascript
{
  _id: ObjectId,
  user1_id: ObjectId,
  user2_id: ObjectId,
  created_at: ISODate
}
```

### friend_requests
```javascript
{
  _id: ObjectId,
  from_user_id: ObjectId,
  to_user_id: ObjectId,
  status: "pending" | "accepted" | "rejected",
  created_at: ISODate,
  updated_at: ISODate
}
```

### study_sessions
```javascript
{
  _id: ObjectId,
  session_name: String,
  course: String,
  host_id: ObjectId,
  status: "active" | "ended",
  participants: [{
    user_id: ObjectId,
    role: "host" | "participant",
    joined_at: ISODate,
    is_active: Boolean
  }],
  invited_users: [ObjectId],
  current_topic: {
    lesson_id: String,
    topic_id: String,
    scroll_position: Number,
    updated_at: ISODate
  },
  created_at: ISODate,
  ended_at: ISODate
}
```

### session_messages
```javascript
{
  _id: ObjectId,
  session_id: ObjectId,
  user_id: ObjectId,
  username: String,
  message: String,
  timestamp: ISODate
}
```

---

## 🎨 UI Components

### Friends Page (`/friends`)
- **Friends Tab** - List of all friends with online status
- **Requests Tab** - Pending friend requests
- **Search Tab** - Find and add new friends

### Study Room (`/study-room/:sessionId`)
- **Video Grid** - Shows all participants' video feeds
- **Control Bar** - Mic, camera, leave buttons
- **Chat Sidebar** - Real-time group chat
- **Header** - Session name, participant count, leave button

### Home Page Updates
- **Friends Button** - Navigate to friends page
- **Start Study Session** - Opens session creation dialog
- **Chat Button** - Existing chat feature

---

## 🚀 Next Steps & Enhancements

### Content Synchronization
Implement in your topic pages (OS, COA, etc.):

```typescript
// In topic page component
const { socket } = useSocket();
const { sessionId } = useParams();

// When host changes topic
const syncContent = (lessonId: string, topicId: string) => {
  if (socket && sessionId) {
    socket.emit('sync_content', {
      sessionId,
      lessonId,
      topicId,
      scrollPosition: window.scrollY
    });
  }
};

// Listen for sync events
useEffect(() => {
  if (!socket) return;
  
  socket.on('content_synced', (data) => {
    // Navigate to synced content
    navigate(`/path/${data.lessonId}/${data.topicId}`);
    window.scrollTo(0, data.scrollPosition);
  });
  
  return () => socket.off('content_synced');
}, [socket]);
```

### Production Deployment
1. **Add TURN server** for WebRTC (e.g., Twilio, Xirsys)
2. **Use HTTPS** (required for WebRTC in production)
3. **Update Socket.io CORS** to specific origins
4. **Add rate limiting** for API endpoints
5. **Implement session passwords** for privacy
6. **Add screen sharing** capability

### Additional Features
- **Session recording** (requires media server)
- **Whiteboard** for collaborative drawing
- **File sharing** within sessions
- **Session scheduling** with calendar integration
- **Breakout rooms** for smaller group discussions

---

## 📝 API Endpoints Reference

### Friends
- `GET /api/friends/search/{query}?current_user_id={id}` - Search users
- `POST /api/friends/request` - Send friend request
- `GET /api/friends/requests/{user_id}` - Get pending requests
- `POST /api/friends/request/respond` - Accept/reject request
- `GET /api/friends/{user_id}` - Get friends list
- `DELETE /api/friends/{user_id}/{friend_id}` - Remove friend

### Study Sessions
- `POST /api/sessions/create` - Create new session
- `GET /api/sessions/invitations/{user_id}` - Get invitations
- `POST /api/sessions/join` - Join session
- `POST /api/sessions/leave` - Leave session
- `GET /api/sessions/{session_id}` - Get session details
- `GET /api/sessions/user/{user_id}/active` - Get active sessions
- `GET /api/sessions/{session_id}/messages` - Get chat history

### Socket.io Events

**Client → Server:**
- `user_online` - Notify server user is online
- `send_friend_request` - Send friend request notification
- `friend_request_accepted` - Notify request accepted
- `session_invitation` - Send session invites
- `join_session_room` - Join session Socket.io room
- `leave_session_room` - Leave session room
- `sync_content` - Sync content to all participants
- `session_chat_message` - Send chat message
- `webrtc_offer/answer/ice_candidate` - WebRTC signaling
- `toggle_video/audio` - Media control notifications

**Server → Client:**
- `online_confirmed` - Confirm user online status
- `friend_status_changed` - Friend online/offline update
- `friend_request_received` - New friend request
- `friend_request_accepted_notification` - Request accepted
- `study_session_invite` - Session invitation
- `user_joined_session` - User joined session
- `user_left_session` - User left session
- `content_synced` - Content synchronized
- `chat_message` - New chat message
- `webrtc_offer/answer/ice_candidate` - WebRTC signaling
- `user_video_toggled` - Video on/off
- `user_audio_toggled` - Audio on/off

---

## ✅ Success!

Your group study feature is now fully set up! Users can:
1. ✅ Search and add friends
2. ✅ Create study sessions
3. ✅ Invite friends to sessions
4. ✅ Video chat with up to 15 people
5. ✅ Chat in real-time
6. ✅ Sync content viewing (when implemented)

**Need help?** Check the troubleshooting section or review the code comments in the implementation files.

**Happy studying! 🎓**
