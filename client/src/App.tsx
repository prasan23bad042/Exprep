import { useEffect, useState } from 'react';
import { Switch, Route, Redirect, useLocation } from 'wouter';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { SocketProvider } from '@/contexts/SocketContext';
import { queryClient } from './lib/queryClient';
import ExamAssist from '@/pages/ExamAssist';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import Friends from '@/pages/Friends';
import StudyRoom from '@/pages/StudyRoom';
import SessionInvitations from '@/components/SessionInvitations';
import OperatingSystems from '@/pages/OperatingSystems';
import ComputerArchitecture from '@/pages/ComputerArchitecture';
import TopicPage from '@/pages/computer-architecture/lessons/[lessonId]/[topicId]';
import OsTopicPage from '@/pages/operating-systems/lessons/[lessonId]/[topicId]';
import NinthStandard from '@/pages/NinthStandard';
import TenthStandard from '@/pages/TenthStandard';
import SSCPreparation from '@/pages/SSCPreparation';
import NotFound from '@/pages/not-found';
import English9Subject from '@/pages/ninth-standard/english/index';
import EnglishTopicPage from '@/pages/ninth-standard/english/lessons/[unitId]/[topicId]';
import Mathematics9Subject from '@/pages/ninth-standard/mathematics/index';
import MathsTopicPage from '@/pages/ninth-standard/mathematics/lessons/[unitId]/[topicId]';
import English10Subject from '@/pages/tenth-standard/english/index';
import English10TopicPage from '@/pages/tenth-standard/english/lessons/[unitId]/[topicId]';
import SocialSubject from '@/pages/tenth-standard/social/index';
import History from '@/pages/tenth-standard/social/history/index';
import HistoryTopicPage from '@/pages/tenth-standard/social/history/lessons/[lessonId]/[topicId]';
import Geography from '@/pages/tenth-standard/social/geography/index';
import GeographyTopicPage from '@/pages/tenth-standard/social/geography/lessons/[lessonId]/[topicId]';
import Civics from '@/pages/tenth-standard/social/civics/index';
import CivicsTopicPage from '@/pages/tenth-standard/social/civics/lessons/[lessonId]/[topicId]';
import Economics from '@/pages/tenth-standard/social/economics/index';
import EconomicsTopicPage from '@/pages/tenth-standard/social/economics/lessons/[lessonId]/[topicId]';

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
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/chat" component={ExamAssist} />
        <Route path="/friends" component={Friends} />
        <Route path="/study-room/:sessionId" component={StudyRoom} />
        <Route path="/operating-systems" component={OperatingSystems} />
      <Route path="/operating-systems/lessons/:lessonId/:topicId" component={OsTopicPage} />
      <Route path="/computer-architecture" component={ComputerArchitecture} />
      <Route path="/computer-architecture/lessons/:lessonId/:topicId" component={TopicPage} />
      <Route path="/ninth-standard" component={NinthStandard} />
      <Route path="/ninth-standard/english" component={English9Subject} />
      <Route path="/ninth-standard/english/lessons/:unitId/:topicId" component={EnglishTopicPage} />
      <Route path="/ninth-standard/mathematics" component={Mathematics9Subject} />
      <Route path="/ninth-standard/mathematics/lessons/:unitId/:topicId" component={MathsTopicPage} />
      <Route path="/tenth-standard" component={TenthStandard} />
      <Route path="/tenth-standard/english" component={English10Subject} />
      <Route path="/tenth-standard/english/lessons/:unitId/:topicId" component={English10TopicPage} />
      <Route path="/tenth-standard/social" component={SocialSubject} />
      <Route path="/tenth-standard/social/history" component={History} />
      <Route path="/tenth-standard/social/history/lessons/:lessonId/:topicId" component={HistoryTopicPage} />
      <Route path="/tenth-standard/social/geography" component={Geography} />
      <Route path="/tenth-standard/social/geography/lessons/:lessonId/:topicId" component={GeographyTopicPage} />
      <Route path="/tenth-standard/social/civics" component={Civics} />
      <Route path="/tenth-standard/social/civics/lessons/:lessonId/:topicId" component={CivicsTopicPage} />
      <Route path="/tenth-standard/social/economics" component={Economics} />
      <Route path="/tenth-standard/social/economics/lessons/:lessonId/:topicId" component={EconomicsTopicPage} />
        <Route path="/ssc-preparation" component={SSCPreparation} />
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
      
      {/* Show session invitations notification */}
      <SessionInvitations />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SocketProvider>
          <TooltipProvider>
            <Toaster />
            <AppRouter />
          </TooltipProvider>
        </SocketProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
