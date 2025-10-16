import { useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

export default function Courses() {
  const [, setLocation] = useLocation();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    setLocation('/login');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">All Courses</h1>
        <Button variant="outline" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
      
      <div className="grid gap-6">
        {/* Courses content will go here */}
      </div>
    </div>
  );
}
