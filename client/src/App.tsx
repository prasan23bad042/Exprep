import { useEffect, useState } from 'react';
import { Switch, Route, Redirect, useLocation } from 'wouter';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { queryClient } from './lib/queryClient';
import ExamAssist from '@/pages/ExamAssist';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import OperatingSystems from '@/pages/OperatingSystems';
import ComputerArchitecture from '@/pages/ComputerArchitecture';
import TopicPage from '@/pages/computer-architecture/lessons/[lessonId]/[topicId]';
import OsTopicPage from '@/pages/operating-systems/lessons/[lessonId]/[topicId]';
import NinthStandard from '@/pages/NinthStandard';
import TenthStandard from '@/pages/TenthStandard';
import SSCPreparation from '@/pages/SSCPreparation';
import NotFound from '@/pages/not-found';

// Simple wrapper to show loading state
function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-muted-foreground">Loading...</div>
    </div>
  );
}

function AppRouter() {
  const { isAuthenticated, isLoading } = useAuth();
  const [location] = useLocation();

  // Show loading screen while checking auth status
  if (isLoading) {
    return <LoadingScreen />;
  }

  // If not authenticated, only allow access to login/signup pages
  if (!isAuthenticated) {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route>
          <Redirect to="/login" />
        </Route>
      </Switch>
    );
  }

  // If authenticated, show protected routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/chat" component={ExamAssist} />
      <Route path="/operating-systems" component={OperatingSystems} />
      <Route path="/operating-systems/lessons/:lessonId/:topicId" component={OsTopicPage} />
      <Route path="/computer-architecture" component={ComputerArchitecture} />
      <Route path="/computer-architecture/lessons/:lessonId/:topicId" component={TopicPage} />
      <Route path="/ninth-standard" component={NinthStandard} />
      <Route path="/tenth-standard" component={TenthStandard} />
      <Route path="/ssc-preparation" component={SSCPreparation} />
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
