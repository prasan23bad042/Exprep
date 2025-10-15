import { LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

interface UserAvatarProps {
  user: {
    name: string;
    loggedIn: boolean;
  };
}

export default function UserAvatar({ user }: UserAvatarProps) {
  const { logout } = useAuth();

  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold" data-testid="avatar-user">
          {user.name?.[0]?.toUpperCase() || 'G'}
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium" data-testid="text-username">
            {user.name}
          </div>
          <div className="text-xs opacity-70" data-testid="text-user-status">
            {user.loggedIn ? 'Signed in' : 'Guest'}
          </div>
        </div>
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={logout}
        className="w-full mt-3 text-slate-400 hover:text-white hover:bg-white/5"
      >
        <LogOut className="w-4 h-4 mr-2" />
        Logout
      </Button>
    </div>
  );
}
