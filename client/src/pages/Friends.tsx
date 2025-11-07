import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useSocket } from '@/contexts/SocketContext';
import { apiClient } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Search, UserPlus, Check, X, Video, Trash2, Users } from 'lucide-react';
import { useLocation } from 'wouter';

interface Friend {
  id: string;
  username: string;
  isOnline: boolean;
  inSession: boolean;
}

interface FriendRequest {
  id: string;
  fromUser: { id: string; username: string };
  toUser: { id: string; username: string };
  status: string;
  createdAt: string;
}

interface SearchResult {
  id: string;
  username: string;
  isFriend: boolean;
  hasPendingRequest: boolean;
}

export default function Friends() {
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const { socket, onlineFriends } = useSocket();
  const { toast } = useToast();

  const [friends, setFriends] = useState<Friend[]>([]);
  const [friendRequests, setFriendRequests] = useState<FriendRequest[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Show loading if user is not loaded yet
  if (!user || !user.id) {
    return (
      <div className="container mx-auto p-6 max-w-6xl">
        <div className="flex items-center justify-center h-64">
          <p className="text-muted-foreground">Loading user data...</p>
        </div>
      </div>
    );
  }

  // Fetch friends
  const fetchFriends = async () => {
    if (!user || !user.id) {
      console.warn('Cannot fetch friends: user or user.id is undefined');
      return;
    }
    try {
      const response = await apiClient.get(`/friends/${user.id}`);
      setFriends(response.friends || []);
    } catch (error) {
      console.error('Failed to fetch friends:', error);
    }
  };

  // Fetch friend requests
  const fetchFriendRequests = async () => {
    if (!user || !user.id) {
      console.warn('Cannot fetch friend requests: user or user.id is undefined');
      return;
    }
    try {
      const response = await apiClient.get(`/friends/requests/${user.id}`);
      setFriendRequests(response.requests || []);
    } catch (error) {
      console.error('Failed to fetch requests:', error);
    }
  };

  useEffect(() => {
    if (!user || !user.id) return;
    fetchFriends();
    fetchFriendRequests();
  }, [user]);

  // Update online status from socket
  useEffect(() => {
    setFriends(prev => prev.map(friend => ({
      ...friend,
      isOnline: onlineFriends.has(friend.id)
    })));
  }, [onlineFriends]);

  // Listen for friend request notifications
  useEffect(() => {
    if (!socket) return;

    socket.on('friend_request_received', (data) => {
      console.log('📨 Friend request received event:', data);
      toast({
        title: 'New Friend Request',
        description: `${data.fromUser.username} sent you a friend request`,
      });
      fetchFriendRequests();
    });

    socket.on('friend_request_accepted_notification', (data) => {
      console.log('✅ Friend request accepted event:', data);
      toast({
        title: 'Friend Request Accepted',
        description: `${data.acceptedBy.username} accepted your friend request`,
      });
      fetchFriends();
    });

    return () => {
      socket.off('friend_request_received');
      socket.off('friend_request_accepted_notification');
    };
  }, [socket]);

  // Search users
  const handleSearch = async () => {
    if (!user || !user.id) {
      toast({
        title: 'Error',
        description: 'Please log in to search for friends',
        variant: 'destructive'
      });
      return;
    }

    if (searchQuery.length < 2) {
      toast({
        title: 'Search query too short',
        description: 'Please enter at least 2 characters',
        variant: 'destructive'
      });
      return;
    }

    setIsSearching(true);
    try {
      const response = await apiClient.get(`/friends/search/${searchQuery}?current_user_id=${user.id}`);
      setSearchResults(response.users || []);
    } catch (error) {
      toast({
        title: 'Search failed',
        description: 'Could not search users',
        variant: 'destructive'
      });
    } finally {
      setIsSearching(false);
    }
  };

  // Send friend request
  const sendFriendRequest = async (toUserId: string, toUsername: string) => {
    if (!user) return;

    try {
      await apiClient.post('/friends/request', {
        fromUserId: user.id,
        toUserId
      });

      // Notify via socket
      if (socket && socket.connected) {
        console.log('Emitting friend request via Socket.io to:', toUserId);
        socket.emit('send_friend_request', {
          toUserId,
          fromUser: { id: user.id, username: user.username }
        });
      } else {
        console.warn('Socket not connected, notification not sent');
      }

      toast({
        title: 'Friend request sent',
        description: `Sent request to ${toUsername}` 
      });

      // Update search results
      setSearchResults(prev => prev.map(result => 
        result.id === toUserId ? { ...result, hasPendingRequest: true } : result
      ));
    } catch (error) {
      toast({
        title: 'Failed to send request',
        description: 'Could not send friend request',
        variant: 'destructive'
      });
    }
  };

  // Accept/Reject friend request
  const respondToRequest = async (requestId: string, accept: boolean) => {
    try {
      await apiClient.post('/friends/request/respond', {
        requestId,
        accept
      });

      if (accept && socket) {
        const request = friendRequests.find(r => r.id === requestId);
        if (request) {
          socket.emit('friend_request_accepted', {
            fromUserId: request.fromUser.id,
            acceptedBy: { id: user?.id, username: user?.username }
          });
        }
      }

      toast({
        title: accept ? 'Friend request accepted' : 'Friend request rejected',
        description: accept ? 'You are now friends!' : 'Request rejected'
      });

      fetchFriendRequests();
      if (accept) fetchFriends();
    } catch (error) {
      toast({
        title: 'Action failed',
        description: 'Could not process request',
        variant: 'destructive'
      });
    }
  };

  // Remove friend
  const removeFriend = async (friendId: string, friendName: string) => {
    if (!user) return;

    if (!confirm(`Remove ${friendName} from your friends?`)) return;

    try {
      await apiClient.delete(`/friends/${user.id}/${friendId}`);
      
      toast({
        title: 'Friend removed',
        description: `${friendName} has been removed from your friends` 
      });

      fetchFriends();
    } catch (error) {
      toast({
        title: 'Failed to remove friend',
        variant: 'destructive'
      });
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Friends</h1>
        <Button variant="outline" onClick={() => setLocation('/')}>
          Back to Home
        </Button>
      </div>

      <Tabs defaultValue="friends" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="friends">
            Friends ({friends.length})
          </TabsTrigger>
          <TabsTrigger value="requests">
            Requests ({friendRequests.length})
          </TabsTrigger>
          <TabsTrigger value="search">
            <Search className="w-4 h-4 mr-2" />
            Find Friends
          </TabsTrigger>
        </TabsList>

        {/* Friends List */}
        <TabsContent value="friends" className="space-y-4">
          {friends.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Users className="w-16 h-16 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No friends yet. Start searching!</p>
              </CardContent>
            </Card>
          ) : (
            friends.map(friend => (
              <Card key={friend.id}>
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-lg">
                      {friend.username[0].toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-semibold">{friend.username}</h3>
                      <div className="flex gap-2 mt-1">
                        <Badge variant={friend.isOnline ? 'default' : 'secondary'}>
                          {friend.isOnline ? 'Online' : 'Offline'}
                        </Badge>
                        {friend.inSession && (
                          <Badge variant="outline">In Study Session</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" disabled={!friend.isOnline}>
                      <Video className="w-4 h-4 mr-2" />
                      Invite to Study
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      onClick={() => removeFriend(friend.id, friend.username)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        {/* Friend Requests */}
        <TabsContent value="requests" className="space-y-4">
          {friendRequests.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <p className="text-muted-foreground">No pending friend requests</p>
              </CardContent>
            </Card>
          ) : (
            friendRequests.map(request => (
              <Card key={request.id}>
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-lg">
                      {request.fromUser.username[0].toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-semibold">{request.fromUser.username}</h3>
                      <p className="text-sm text-muted-foreground">
                        Sent {new Date(request.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      onClick={() => respondToRequest(request.id, true)}
                    >
                      <Check className="w-4 h-4 mr-2" />
                      Accept
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => respondToRequest(request.id, false)}
                    >
                      <X className="w-4 h-4 mr-2" />
                      Decline
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        {/* Search Users */}
        <TabsContent value="search" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Search for Friends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter username..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <Button onClick={handleSearch} disabled={isSearching}>
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          {searchResults.length > 0 && (
            <div className="space-y-4">
              {searchResults.map(result => (
                <Card key={result.id}>
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-lg">
                        {result.username[0].toUpperCase()}
                      </div>
                      <h3 className="font-semibold">{result.username}</h3>
                    </div>
                    <div>
                      {result.isFriend ? (
                        <Badge>Already Friends</Badge>
                      ) : result.hasPendingRequest ? (
                        <Badge variant="secondary">Request Sent</Badge>
                      ) : (
                        <Button 
                          size="sm"
                          onClick={() => sendFriendRequest(result.id, result.username)}
                        >
                          <UserPlus className="w-4 h-4 mr-2" />
                          Add Friend
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
