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
        
        # Friends (NEW)
        await self.db.friends.create_index([("user1_id", 1), ("user2_id", 1)])
        
        # Friend requests (NEW)
        await self.db.friend_requests.create_index([("to_user_id", 1), ("status", 1)])
        
        # Study sessions (NEW)
        await self.db.study_sessions.create_index([("status", 1), ("participants.user_id", 1)])
        
        # Session messages (NEW)
        await self.db.session_messages.create_index([("session_id", 1), ("timestamp", -1)])
        
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
    
    # FRIEND OPERATIONS (NEW)
    
    async def search_users(self, query: str, current_user_id: str, limit: int = 10) -> List[Dict[str, Any]]:
        """Search users by username"""
        cursor = self.db.users.find(
            {
                "username": {"$regex": query, "$options": "i"},
                "_id": {"$ne": ObjectId(current_user_id)}  # Exclude current user
            }
        ).limit(limit)
        return await cursor.to_list(length=limit)
    
    async def send_friend_request(self, from_user_id: str, to_user_id: str) -> Dict[str, Any]:
        """Send friend request"""
        # Check if already friends
        existing_friendship = await self.db.friends.find_one({
            "$or": [
                {"user1_id": ObjectId(from_user_id), "user2_id": ObjectId(to_user_id)},
                {"user1_id": ObjectId(to_user_id), "user2_id": ObjectId(from_user_id)}
            ]
        })
        
        if existing_friendship:
            raise ValueError("Already friends")
        
        # Check for existing pending request
        existing_request = await self.db.friend_requests.find_one({
            "from_user_id": ObjectId(from_user_id),
            "to_user_id": ObjectId(to_user_id),
            "status": "pending"
        })
        
        if existing_request:
            raise ValueError("Friend request already sent")
        
        # Create request
        request = {
            "from_user_id": ObjectId(from_user_id),
            "to_user_id": ObjectId(to_user_id),
            "status": "pending",
            "created_at": datetime.utcnow()
        }
        result = await self.db.friend_requests.insert_one(request)
        request["_id"] = result.inserted_id
        return request
    
    async def get_friend_requests(self, user_id: str) -> List[Dict[str, Any]]:
        """Get pending friend requests for user"""
        cursor = self.db.friend_requests.find({
            "to_user_id": ObjectId(user_id),
            "status": "pending"
        }).sort("created_at", -1)
        
        requests = await cursor.to_list(length=None)
        
        # Populate user details
        for req in requests:
            from_user = await self.db.users.find_one({"_id": req["from_user_id"]})
            req["from_user"] = {
                "id": str(from_user["_id"]),
                "username": from_user["username"]
            } if from_user else None
        
        return requests
    
    async def accept_friend_request(self, request_id: str, accept: bool) -> bool:
        """Accept or reject friend request"""
        request = await self.db.friend_requests.find_one({"_id": ObjectId(request_id)})
        
        if not request or request["status"] != "pending":
            return False
        
        if accept:
            # Create friendship
            await self.db.friends.insert_one({
                "user1_id": request["from_user_id"],
                "user2_id": request["to_user_id"],
                "created_at": datetime.utcnow()
            })
            
            # Update request status
            await self.db.friend_requests.update_one(
                {"_id": ObjectId(request_id)},
                {"$set": {"status": "accepted", "updated_at": datetime.utcnow()}}
            )
        else:
            await self.db.friend_requests.update_one(
                {"_id": ObjectId(request_id)},
                {"$set": {"status": "rejected", "updated_at": datetime.utcnow()}}
            )
        
        return True
    
    async def get_friends(self, user_id: str) -> List[Dict[str, Any]]:
        """Get user's friends list"""
        user_id_obj = ObjectId(user_id)
        
        cursor = self.db.friends.find({
            "$or": [
                {"user1_id": user_id_obj},
                {"user2_id": user_id_obj}
            ]
        })
        
        friendships = await cursor.to_list(length=None)
        friends = []
        
        for friendship in friendships:
            # Get the other user's ID
            friend_id = friendship["user2_id"] if friendship["user1_id"] == user_id_obj else friendship["user1_id"]
            
            # Get user details
            friend = await self.db.users.find_one({"_id": friend_id})
            if friend:
                friends.append({
                    "_id": str(friend["_id"]),
                    "username": friend["username"],
                    "is_online": False,  # Will be updated by Socket.io
                    "in_session": False  # Will be updated by checking active sessions
                })
        
        return friends
    
    async def remove_friend(self, user_id: str, friend_id: str) -> bool:
        """Remove friend"""
        result = await self.db.friends.delete_one({
            "$or": [
                {"user1_id": ObjectId(user_id), "user2_id": ObjectId(friend_id)},
                {"user1_id": ObjectId(friend_id), "user2_id": ObjectId(user_id)}
            ]
        })
        return result.deleted_count > 0
    
    # STUDY SESSION OPERATIONS (NEW)
    
    async def create_study_session(
        self, 
        host_id: str, 
        course: str, 
        session_name: str,
        invited_friends: List[str]
    ) -> Dict[str, Any]:
        """Create study session"""
        session = {
            "session_name": session_name,
            "course": course,
            "host_id": ObjectId(host_id),
            "status": "active",
            "participants": [{
                "user_id": ObjectId(host_id),
                "role": "host",
                "joined_at": datetime.utcnow(),
                "is_active": True
            }],
            "invited_users": [ObjectId(uid) for uid in invited_friends],
            "current_topic": None,
            "created_at": datetime.utcnow(),
            "ended_at": None
        }
        
        result = await self.db.study_sessions.insert_one(session)
        session["_id"] = result.inserted_id
        
        # Create invitations
        for friend_id in invited_friends:
            await self.db.session_invitations.insert_one({
                "session_id": result.inserted_id,
                "from_user_id": ObjectId(host_id),
                "to_user_id": ObjectId(friend_id),
                "status": "pending",
                "created_at": datetime.utcnow()
            })
        
        return session
    
    async def get_session_invitations(self, user_id: str) -> List[Dict[str, Any]]:
        """Get pending session invitations"""
        cursor = self.db.session_invitations.find({
            "to_user_id": ObjectId(user_id),
            "status": "pending"
        }).sort("created_at", -1)
        
        invitations = await cursor.to_list(length=None)
        
        # Populate details
        for inv in invitations:
            session = await self.db.study_sessions.find_one({"_id": inv["session_id"]})
            from_user = await self.db.users.find_one({"_id": inv["from_user_id"]})
            
            inv["session_name"] = session.get("session_name") if session else "Unknown"
            inv["course"] = session.get("course") if session else "Unknown"
            inv["from_user"] = {
                "id": str(from_user["_id"]),
                "username": from_user["username"]
            } if from_user else None
        
        return invitations
    
    async def join_study_session(self, session_id: str, user_id: str) -> Dict[str, Any]:
        """Join study session"""
        session = await self.db.study_sessions.find_one({"_id": ObjectId(session_id)})
        
        if not session or session["status"] != "active":
            raise ValueError("Session not available")
        
        # Check participant limit
        active_participants = len([p for p in session["participants"] if p["is_active"]])
        if active_participants >= 15:
            raise ValueError("Session is full")
        
        # Check if already in session
        user_id_obj = ObjectId(user_id)
        existing_participant = next((p for p in session["participants"] if p["user_id"] == user_id_obj), None)
        
        if existing_participant:
            # Rejoin - mark as active
            await self.db.study_sessions.update_one(
                {"_id": ObjectId(session_id), "participants.user_id": user_id_obj},
                {"$set": {"participants.$.is_active": True}}
            )
        else:
            # Add new participant
            await self.db.study_sessions.update_one(
                {"_id": ObjectId(session_id)},
                {"$push": {
                    "participants": {
                        "user_id": user_id_obj,
                        "role": "participant",
                        "joined_at": datetime.utcnow(),
                        "is_active": True
                    }
                }}
            )
        
        # Update invitation status
        await self.db.session_invitations.update_one(
            {"session_id": ObjectId(session_id), "to_user_id": user_id_obj},
            {"$set": {"status": "accepted"}}
        )
        
        return await self.get_study_session(session_id)
    
    async def leave_study_session(self, session_id: str, user_id: str) -> Dict[str, Any]:
        """Leave study session"""
        session = await self.db.study_sessions.find_one({"_id": ObjectId(session_id)})
        
        if not session:
            raise ValueError("Session not found")
        
        user_id_obj = ObjectId(user_id)
        
        # Mark participant as inactive
        await self.db.study_sessions.update_one(
            {"_id": ObjectId(session_id), "participants.user_id": user_id_obj},
            {"$set": {"participants.$.is_active": False}}
        )
        
        # If host left, transfer to another active participant
        if session["host_id"] == user_id_obj:
            active_participants = [
                p for p in session["participants"] 
                if p["is_active"] and p["user_id"] != user_id_obj
            ]
            
            if active_participants:
                new_host = active_participants[0]["user_id"]
                await self.db.study_sessions.update_one(
                    {"_id": ObjectId(session_id)},
                    {"$set": {"host_id": new_host}}
                )
                
                # Update new host's role
                await self.db.study_sessions.update_one(
                    {"_id": ObjectId(session_id), "participants.user_id": new_host},
                    {"$set": {"participants.$.role": "host"}}
                )
            else:
                # No active participants, end session
                await self.db.study_sessions.update_one(
                    {"_id": ObjectId(session_id)},
                    {"$set": {"status": "ended", "ended_at": datetime.utcnow()}}
                )
        
        return await self.get_study_session(session_id)
    
    async def get_study_session(self, session_id: str) -> Dict[str, Any]:
        """Get study session details"""
        session = await self.db.study_sessions.find_one({"_id": ObjectId(session_id)})
        
        if not session:
            return None
        
        # Populate participant usernames
        for participant in session["participants"]:
            user = await self.db.users.find_one({"_id": participant["user_id"]})
            participant["username"] = user["username"] if user else "Unknown"
        
        return session
    
    async def get_user_active_sessions(self, user_id: str) -> List[Dict[str, Any]]:
        """Get user's active sessions"""
        user_id_obj = ObjectId(user_id)
        
        cursor = self.db.study_sessions.find({
            "status": "active",
            "participants.user_id": user_id_obj,
            "participants.is_active": True
        })
        
        return await cursor.to_list(length=None)
    
    async def update_session_content(
        self, 
        session_id: str, 
        lesson_id: str, 
        topic_id: str,
        scroll_position: int = 0
    ) -> bool:
        """Update session's current topic"""
        result = await self.db.study_sessions.update_one(
            {"_id": ObjectId(session_id)},
            {"$set": {
                "current_topic": {
                    "lesson_id": lesson_id,
                    "topic_id": topic_id,
                    "scroll_position": scroll_position,
                    "updated_at": datetime.utcnow()
                }
            }}
        )
        return result.modified_count > 0
    
    async def save_session_message(
        self, 
        session_id: str, 
        user_id: str, 
        username: str,
        message: str
    ) -> Dict[str, Any]:
        """Save session chat message"""
        msg = {
            "session_id": ObjectId(session_id),
            "user_id": ObjectId(user_id),
            "username": username,
            "message": message,
            "timestamp": datetime.utcnow()
        }
        
        result = await self.db.session_messages.insert_one(msg)
        msg["_id"] = result.inserted_id
        return msg
    
    async def get_session_messages(self, session_id: str, limit: int = 100) -> List[Dict[str, Any]]:
        """Get session chat messages"""
        cursor = self.db.session_messages.find(
            {"session_id": ObjectId(session_id)}
        ).sort("timestamp", -1).limit(limit)
        
        messages = await cursor.to_list(length=limit)
        messages.reverse()  # Oldest first
        return messages

# Global database instance
db = Database()
