import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useSocket } from '@/contexts/SocketContext';
import { apiClient } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Video, X, Clock } from 'lucide-react';
import { useLocation } from 'wouter';

interface SessionInvite {
  id: string;
  sessionId: string;
  sessionName: string;
  fromUser: {
    id: string;
    username: string;
  };
  course: string;
  createdAt: string;
}

export default function SessionInvitations() {
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const { socket } = useSocket();
  const { toast } = useToast();
  
  const [invitations, setInvitations] = useState<SessionInvite[]>([]);
  const [realtimeInvite, setRealtimeInvite] = useState<SessionInvite | null>(null);

  // Fetch pending invitations
  useEffect(() => {
    if (!user || !user.id) return;
    fetchInvitations();
  }, [user]);

  // Listen for real-time invitations
  useEffect(() => {
    if (!socket) return;

    socket.on('study_session_invite', (data) => {
      const invite: SessionInvite = {
        id: Date.now().toString(),
        sessionId: data.sessionId,
        sessionName: data.sessionName,
        fromUser: data.fromUser,
        course: data.course,
        createdAt: new Date().toISOString()
      };

      setRealtimeInvite(invite);
      
      toast({
        title: 'Study Session Invitation',
        description: `${data.fromUser.username} invited you to "${data.sessionName}"`,
        duration: 10000
      });

      // Also refresh the full list
      fetchInvitations();
    });

    return () => {
      socket.off('study_session_invite');
    };
  }, [socket]);

  const fetchInvitations = async () => {
    if (!user || !user.id) return;
    
    try {
      const response = await apiClient.get(`/sessions/invitations/${user.id}`);
      setInvitations(response.invitations || []);
    } catch (error) {
      console.error('Failed to fetch invitations:', error);
    }
  };

  const joinSession = async (sessionId: string) => {
    if (!user) return;

    try {
      await apiClient.post('/sessions/join', {
        sessionId,
        userId: user.id
      });

      toast({
        title: 'Joined session',
        description: 'Connecting to study room...'
      });

      // Navigate to study room
      setLocation(`/study-room/${sessionId}`);
      
      // Clear the invitation
      setRealtimeInvite(null);
      fetchInvitations();
    } catch (error: any) {
      toast({
        title: 'Failed to join session',
        description: error.message || 'Could not join the study session',
        variant: 'destructive'
      });
    }
  };

  const dismissInvite = () => {
    setRealtimeInvite(null);
  };

  // Real-time popup invite
  if (realtimeInvite) {
    return (
      <div className="fixed bottom-4 right-4 z-50 w-96 animate-in slide-in-from-bottom-5">
        <Card className="shadow-2xl border-primary">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Study Session Invite</CardTitle>
              </div>
              <Button size="sm" variant="ghost" onClick={dismissInvite}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            <CardDescription>
              {realtimeInvite.fromUser.username} invited you to study together
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="font-semibold">{realtimeInvite.sessionName}</p>
              <div className="flex gap-2 mt-1">
                <Badge variant="secondary">{realtimeInvite.course}</Badge>
                <Badge variant="outline">
                  <Clock className="w-3 h-3 mr-1" />
                  Just now
                </Badge>
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                className="flex-1" 
                onClick={() => joinSession(realtimeInvite.sessionId)}
              >
                <Video className="w-4 h-4 mr-2" />
                Join Now
              </Button>
              <Button variant="outline" onClick={dismissInvite}>
                Dismiss
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show pending invitations badge
  if (invitations.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <Button
        size="lg"
        className="rounded-full shadow-lg"
        onClick={() => {
          // You can show a modal with all invitations
          // For now, just join the first one
          if (invitations.length > 0) {
            joinSession(invitations[0].sessionId);
          }
        }}
      >
        <Video className="w-5 h-5 mr-2" />
        {invitations.length} Pending Invite{invitations.length > 1 ? 's' : ''}
      </Button>
    </div>
  );
}
