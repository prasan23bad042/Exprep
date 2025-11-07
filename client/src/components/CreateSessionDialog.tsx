import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/contexts/AuthContext';
import { useSocket } from '@/contexts/SocketContext';
import { apiClient } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

interface Friend {
  id: string;
  username: string;
  isOnline: boolean;
}

interface CreateSessionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSessionCreated: (sessionId: string) => void;
}

export default function CreateSessionDialog({ open, onOpenChange, onSessionCreated }: CreateSessionDialogProps) {
  const { user } = useAuth();
  const { socket } = useSocket();
  const { toast } = useToast();
  
  const [sessionName, setSessionName] = useState('');
  const [course, setCourse] = useState('engineering');
  const [friends, setFriends] = useState<Friend[]>([]);
  const [selectedFriends, setSelectedFriends] = useState<Set<string>>(new Set());
  const [isCreating, setIsCreating] = useState(false);

  // Fetch friends when dialog opens
  useEffect(() => {
    if (open && user) {
      fetchFriends();
    }
  }, [open, user]);

  const fetchFriends = async () => {
    if (!user) return;
    try {
      const response = await apiClient.get(`/friends/${user.id}`);
      setFriends(response.friends || []);
    } catch (error) {
      console.error('Failed to fetch friends:', error);
    }
  };

  const toggleFriend = (friendId: string) => {
    setSelectedFriends(prev => {
      const updated = new Set(prev);
      if (updated.has(friendId)) {
        updated.delete(friendId);
      } else {
        updated.add(friendId);
      }
      return updated;
    });
  };

  const handleCreate = async () => {
    if (!user) return;
    
    if (selectedFriends.size === 0) {
      toast({
        title: 'No friends selected',
        description: 'Please select at least one friend to invite',
        variant: 'destructive'
      });
      return;
    }

    if (selectedFriends.size > 14) {
      toast({
        title: 'Too many friends',
        description: 'Maximum 14 friends can be invited (15 total including you)',
        variant: 'destructive'
      });
      return;
    }

    setIsCreating(true);

    try {
      const response = await apiClient.post('/sessions/create', {
        hostId: user.id,
        course,
        invitedFriends: Array.from(selectedFriends),
        sessionName: sessionName || undefined
      });

      // Send invitations via socket
      if (socket) {
        socket.emit('session_invitation', {
          invitedUsers: Array.from(selectedFriends),
          sessionData: {
            sessionId: response.id,
            sessionName: response.sessionName,
            fromUser: {
              id: user.id,
              username: user.username
            },
            course: response.course
          }
        });
      }

      toast({
        title: 'Study session created',
        description: `Invited ${selectedFriends.size} friend${selectedFriends.size > 1 ? 's' : ''}` 
      });

      // Reset form
      setSessionName('');
      setSelectedFriends(new Set());
      
      onOpenChange(false);
      onSessionCreated(response.id);
    } catch (error) {
      toast({
        title: 'Failed to create session',
        description: 'Could not create study session',
        variant: 'destructive'
      });
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create Study Session</DialogTitle>
          <DialogDescription>
            Invite friends to study together with synchronized content and video chat
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="session-name">Session Name (Optional)</Label>
            <Input
              id="session-name"
              placeholder="e.g., OS Finals Prep"
              value={sessionName}
              onChange={(e) => setSessionName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="course">Course</Label>
            <Select value={course} onValueChange={setCourse}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="schooling">Schooling (9th & 10th TN)</SelectItem>
                <SelectItem value="engineering">Engineering (COA/OS)</SelectItem>
                <SelectItem value="govt">Govt Exams (SSC CGL)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Invite Friends ({selectedFriends.size}/14 selected)</Label>
            {friends.length === 0 ? (
              <p className="text-sm text-muted-foreground py-4 text-center">
                No friends to invite. Add friends first!
              </p>
            ) : (
              <div className="space-y-2 max-h-60 overflow-y-auto border rounded-md p-2">
                {friends.map(friend => (
                  <div key={friend.id} className="flex items-center space-x-2 p-2 hover:bg-muted rounded">
                    <Checkbox
                      id={`friend-${friend.id}`}
                      checked={selectedFriends.has(friend.id)}
                      onCheckedChange={() => toggleFriend(friend.id)}
                      disabled={!friend.isOnline}
                    />
                    <label
                      htmlFor={`friend-${friend.id}`}
                      className="flex-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <span>{friend.username}</span>
                        {friend.isOnline ? (
                          <span className="text-xs text-green-600 dark:text-green-400">Online</span>
                        ) : (
                          <span className="text-xs text-muted-foreground">Offline</span>
                        )}
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleCreate} disabled={isCreating || selectedFriends.size === 0}>
            {isCreating && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            Create Session
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
