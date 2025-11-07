import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import { useSocket } from '@/contexts/SocketContext';
import { apiClient } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Video, VideoOff, Mic, MicOff, PhoneOff, Send, Users, BookOpen } from 'lucide-react';

interface Participant {
  userId: string;
  username: string;
  role: string;
  isActive: boolean;
}

interface ChatMessage {
  id: string;
  userId: string;
  username: string;
  message: string;
  timestamp: string;
}

interface StudySession {
  id: string;
  sessionName: string;
  course: string;
  hostId: string;
  status: string;
  participants: Participant[];
  currentTopic: { lessonId: string; topicId: string } | null;
}

export default function StudyRoom() {
  const { sessionId } = useParams<{ sessionId: string }>();
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const { socket } = useSocket();
  const { toast } = useToast();

  const [session, setSession] = useState<StudySession | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [videoEnabled, setVideoEnabled] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);

  const localVideoRef = useRef<HTMLVideoElement>(null);
  const localStreamRef = useRef<MediaStream | null>(null);
  const peerConnectionsRef = useRef<Map<string, RTCPeerConnection>>(new Map());

  // Fetch session details
  useEffect(() => {
    if (!sessionId) return;
    
    const fetchSession = async () => {
      try {
        const data = await apiClient.get(`/sessions/${sessionId}`);
        setSession(data);
      } catch (error) {
        toast({
          title: 'Failed to load session',
          description: 'Could not fetch session details',
          variant: 'destructive'
        });
      }
    };

    fetchSession();
  }, [sessionId]);

  // Fetch chat messages
  useEffect(() => {
    if (!sessionId) return;

    const fetchMessages = async () => {
      try {
        const data = await apiClient.get(`/sessions/${sessionId}/messages?limit=100`);
        setMessages(data.messages || []);
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      }
    };

    fetchMessages();
  }, [sessionId]);

  // Join session room via Socket.io
  useEffect(() => {
    if (!socket || !sessionId || !user) return;

    socket.emit('join_session_room', {
      sessionId,
      userId: user.id,
      username: user.username
    });

    // Listen for new participants
    socket.on('user_joined_session', (data) => {
      toast({
        title: 'User joined',
        description: `${data.username} joined the session`
      });

      // Refresh session data
      apiClient.get(`/sessions/${sessionId}`).then(setSession);
    });

    socket.on('user_left_session', (data) => {
      toast({
        title: 'User left',
        description: `${data.username} left the session`
      });

      // Refresh session data
      apiClient.get(`/sessions/${sessionId}`).then(setSession);
    });

    // Listen for chat messages
    socket.on('chat_message', (data) => {
      setMessages(prev => [...prev, data]);
    });

    // Listen for content sync
    socket.on('content_synced', (data) => {
      toast({
        title: 'Content synced',
        description: 'Host changed the topic'
      });
      // Navigate to synced content
      // setLocation(`/path/to/${data.lessonId}/${data.topicId}`);
    });

    return () => {
      socket.emit('leave_session_room', {
        sessionId,
        userId: user.id,
        username: user.username
      });

      socket.off('user_joined_session');
      socket.off('user_left_session');
      socket.off('chat_message');
      socket.off('content_synced');
    };
  }, [socket, sessionId, user]);

  // WebRTC setup
  useEffect(() => {
    if (!socket || !user) return;

    // Listen for WebRTC signaling
    socket.on('webrtc_offer', async (data) => {
      await handleWebRTCOffer(data.fromUserId, data.offer);
    });

    socket.on('webrtc_answer', async (data) => {
      await handleWebRTCAnswer(data.fromUserId, data.answer);
    });

    socket.on('webrtc_ice_candidate', async (data) => {
      await handleICECandidate(data.fromUserId, data.candidate);
    });

    return () => {
      socket.off('webrtc_offer');
      socket.off('webrtc_answer');
      socket.off('webrtc_ice_candidate');
    };
  }, [socket, user]);

  // Initialize local media
  const initializeMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: videoEnabled,
        audio: audioEnabled
      });

      localStreamRef.current = stream;

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }

      // Create peer connections for all participants
      if (session) {
        session.participants.forEach(participant => {
          if (participant.userId !== user?.id) {
            createPeerConnection(participant.userId);
          }
        });
      }
    } catch (error) {
      toast({
        title: 'Media access denied',
        description: 'Could not access camera/microphone',
        variant: 'destructive'
      });
    }
  };

  // Create peer connection
  const createPeerConnection = (remoteUserId: string) => {
    const pc = new RTCPeerConnection({
      iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:stun1.l.google.com:19302' }
      ]
    });

    // Add local tracks
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach(track => {
        pc.addTrack(track, localStreamRef.current!);
      });
    }

    // Handle ICE candidates
    pc.onicecandidate = (event) => {
      if (event.candidate && socket) {
        socket.emit('webrtc_ice_candidate', {
          toUserId: remoteUserId,
          fromUserId: user?.id,
          candidate: event.candidate
        });
      }
    };

    // Handle remote stream
    pc.ontrack = (event) => {
      // Add remote video element dynamically
      const remoteVideo = document.createElement('video');
      remoteVideo.srcObject = event.streams[0];
      remoteVideo.autoplay = true;
      remoteVideo.className = 'w-full h-full object-cover rounded-lg';
      
      const container = document.getElementById('remote-videos');
      if (container) {
        container.appendChild(remoteVideo);
      }
    };

    peerConnectionsRef.current.set(remoteUserId, pc);

    // Create and send offer
    pc.createOffer().then(offer => {
      pc.setLocalDescription(offer);
      if (socket) {
        socket.emit('webrtc_offer', {
          toUserId: remoteUserId,
          fromUserId: user?.id,
          offer
        });
      }
    });
  };

  // Handle WebRTC offer
  const handleWebRTCOffer = async (fromUserId: string, offer: RTCSessionDescriptionInit) => {
    let pc = peerConnectionsRef.current.get(fromUserId);
    
    if (!pc) {
      pc = new RTCPeerConnection({
        iceServers: [
          { urls: 'stun:stun.l.google.com:19302' }
        ]
      });

      // Add local tracks
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach(track => {
          pc!.addTrack(track, localStreamRef.current!);
        });
      }

      pc.onicecandidate = (event) => {
        if (event.candidate && socket) {
          socket.emit('webrtc_ice_candidate', {
            toUserId: fromUserId,
            fromUserId: user?.id,
            candidate: event.candidate
          });
        }
      };

      pc.ontrack = (event) => {
        const remoteVideo = document.createElement('video');
        remoteVideo.srcObject = event.streams[0];
        remoteVideo.autoplay = true;
        remoteVideo.className = 'w-full h-full object-cover rounded-lg';
        
        const container = document.getElementById('remote-videos');
        if (container) {
          container.appendChild(remoteVideo);
        }
      };

      peerConnectionsRef.current.set(fromUserId, pc);
    }

    await pc.setRemoteDescription(new RTCSessionDescription(offer));
    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);

    if (socket) {
      socket.emit('webrtc_answer', {
        toUserId: fromUserId,
        fromUserId: user?.id,
        answer
      });
    }
  };

  // Handle WebRTC answer
  const handleWebRTCAnswer = async (fromUserId: string, answer: RTCSessionDescriptionInit) => {
    const pc = peerConnectionsRef.current.get(fromUserId);
    if (pc) {
      await pc.setRemoteDescription(new RTCSessionDescription(answer));
    }
  };

  // Handle ICE candidate
  const handleICECandidate = async (fromUserId: string, candidate: RTCIceCandidateInit) => {
    const pc = peerConnectionsRef.current.get(fromUserId);
    if (pc) {
      await pc.addIceCandidate(new RTCIceCandidate(candidate));
    }
  };

  // Toggle video
  const toggleVideo = () => {
    if (localStreamRef.current) {
      const videoTrack = localStreamRef.current.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        setVideoEnabled(videoTrack.enabled);

        if (socket && sessionId) {
          socket.emit('toggle_video', {
            sessionId,
            userId: user?.id,
            videoEnabled: videoTrack.enabled
          });
        }
      }
    }
  };

  // Toggle audio
  const toggleAudio = () => {
    if (localStreamRef.current) {
      const audioTrack = localStreamRef.current.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setAudioEnabled(audioTrack.enabled);

        if (socket && sessionId) {
          socket.emit('toggle_audio', {
            sessionId,
            userId: user?.id,
            audioEnabled: audioTrack.enabled
          });
        }
      }
    }
  };

  // Send chat message
  const sendMessage = () => {
    if (!newMessage.trim() || !socket || !sessionId || !user) return;

    socket.emit('session_chat_message', {
      sessionId,
      userId: user.id,
      username: user.username,
      message: newMessage
    });

    setNewMessage('');
  };

  // Leave session
  const leaveSession = async () => {
    if (!sessionId || !user) return;

    try {
      // Stop local media
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach(track => track.stop());
      }

      // Close peer connections
      peerConnectionsRef.current.forEach(pc => pc.close());
      peerConnectionsRef.current.clear();

      await apiClient.post(`/sessions/leave?session_id=${sessionId}&user_id=${user.id}`, {});
      
      setLocation('/');
    } catch (error) {
      toast({
        title: 'Failed to leave session',
        variant: 'destructive'
      });
    }
  };

  if (!session) {
    return <div className="flex items-center justify-center h-screen">Loading session...</div>;
  }

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <div className="border-b p-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{session.sessionName}</h1>
          <p className="text-sm text-muted-foreground">{session.course}</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline">
            <Users className="w-3 h-3 mr-1" />
            {session.participants.filter(p => p.isActive).length} participants
          </Badge>
          <Button variant="destructive" onClick={leaveSession}>
            <PhoneOff className="w-4 h-4 mr-2" />
            Leave Session
          </Button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Video Grid */}
          <div className="flex-1 p-4 bg-muted/20">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full">
              {/* Local Video */}
              <Card className="relative">
                <video
                  ref={localVideoRef}
                  autoPlay
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-white text-sm">
                  You
                </div>
              </Card>

              {/* Remote Videos */}
              <div id="remote-videos" className="contents"></div>
            </div>
          </div>

          {/* Controls */}
          <div className="border-t p-4 flex items-center justify-center gap-4">
            <Button
              variant={audioEnabled ? 'default' : 'destructive'}
              size="lg"
              onClick={toggleAudio}
            >
              {audioEnabled ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
            </Button>
            <Button
              variant={videoEnabled ? 'default' : 'destructive'}
              size="lg"
              onClick={toggleVideo}
            >
              {videoEnabled ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={initializeMedia}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Start Sharing
            </Button>
          </div>
        </div>

        {/* Chat Sidebar */}
        <Card className="w-80 border-l rounded-none flex flex-col">
          <CardHeader>
            <CardTitle>Chat</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col p-0">
            <ScrollArea className="flex-1 px-4">
              <div className="space-y-4 py-4">
                {messages.map((msg) => (
                  <div key={msg.id} className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-semibold text-sm">{msg.username}</span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(msg.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                    <p className="text-sm">{msg.message}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <Button onClick={sendMessage}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
