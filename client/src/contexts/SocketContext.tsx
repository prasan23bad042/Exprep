import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { io, Socket } from 'socket.io-client';
import { useAuth } from './AuthContext';

interface SocketContextType {
  socket: Socket | null;
  isConnected: boolean;
  onlineFriends: Set<string>;
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

export function SocketProvider({ children }: { children: ReactNode }) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [onlineFriends, setOnlineFriends] = useState<Set<string>>(new Set());
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated || !user || !user.id) return;

    // Connect to Socket.io server
    const newSocket = io('http://localhost:5000', {
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 5
    });

    newSocket.on('connect', () => {
      console.log('✅ Socket.io connected');
      console.log('User ID:', user.id, 'Username:', user.username);
      setIsConnected(true);
      
      // Notify server that user is online
      newSocket.emit('user_online', { userId: user.id });
    });

    newSocket.on('disconnect', () => {
      console.log('❌ Socket.io disconnected');
      setIsConnected(false);
    });

    newSocket.on('online_confirmed', (data) => {
      console.log('User online confirmed:', data);
    });

    // Friend status updates
    newSocket.on('friend_status_changed', (data: { friendId: string; isOnline: boolean }) => {
      console.log('Friend status changed:', data);
      setOnlineFriends(prev => {
        const updated = new Set(prev);
        if (data.isOnline) {
          updated.add(data.friendId);
        } else {
          updated.delete(data.friendId);
        }
        return updated;
      });
    });

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, [isAuthenticated, user]);

  return (
    <SocketContext.Provider value={{ socket, isConnected, onlineFriends }}>
      {children}
    </SocketContext.Provider>
  );
}

export function useSocket() {
  const context = useContext(SocketContext);
  if (context === undefined) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context;
}
