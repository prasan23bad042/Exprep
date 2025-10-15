import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import ChatHeader from '@/components/ChatHeader';
import ChatArea from '@/components/ChatArea';
import ChatInput from '@/components/ChatInput';
import { apiClient } from '@/lib/api';
import { useAuth } from '@/contexts/AuthContext';

interface Message {
  role: 'user' | 'assistant';
  text: string;
  meta?: Array<{ source?: string; id?: string }>;
  ts: number;
}

export default function ExamAssist() {
  const { user: authUser } = useAuth();
  
  const COURSES = [
    { id: 'schooling', title: 'Schooling (9th & 10th TN)', subtitle: 'Tamil Nadu Syllabus' },
    { id: 'engineering', title: 'Engineering (CSE)', subtitle: 'COA, OS' },
    { id: 'govt', title: 'Govt Exams (SSC CGL)', subtitle: 'SSC Exam Prep' },
  ];

  const user = { name: authUser?.username || 'User', loggedIn: true };
  const [selectedCourse, setSelectedCourse] = useState(COURSES[0]);
  const [level, setLevel] = useState<string | null>(null);
  const [chat, setChat] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSend() {
    if (!input.trim()) return;
    const userMsg: Message = { role: 'user', text: input, ts: Date.now() };
    setChat((c) => [...c, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const data = await apiClient.queryRAG({
        userId: authUser?.id || '000000000000000000000000',
        course: selectedCourse.id,
        level: level,
        query: userMsg.text,
      });
      
      const botMsg: Message = {
        role: 'assistant',
        text: data.answer || 'Sorry, no answer.',
        meta: data.sources || [],
        ts: Date.now(),
      };
      setChat((c) => [...c, botMsg]);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'Error: could not reach server.';
      setChat((c) => [
        ...c,
        { role: 'assistant', text: errorMessage, ts: Date.now() },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  const handleCourseSelect = (course: typeof COURSES[0]) => {
    setSelectedCourse(course);
    setLevel(null);
  };

  return (
    <div className="min-h-screen bg-[#0f1724] text-slate-100 p-6">
      <div className="max-w-7xl mx-auto flex gap-6 h-[calc(100vh-3rem)]">
        <Sidebar
          user={user}
          courses={COURSES}
          selectedCourse={selectedCourse}
          level={level}
          onCourseSelect={handleCourseSelect}
          onLevelChange={setLevel}
          onStudyPlan={() => console.log('Study Plan')}
          onAssessments={() => console.log('Assessments')}
        />

        <main className="flex-1 bg-gradient-to-b from-slate-900/40 to-slate-900/20 rounded-3xl p-6 flex flex-col">
          <ChatHeader course={selectedCourse} level={level} />
          <ChatArea messages={chat} />
          <ChatInput
            value={input}
            onChange={setInput}
            onSend={handleSend}
            disabled={!level}
            isLoading={isLoading}
            placeholder={level ? 'Ask anything about the topic...' : 'Choose a level to begin...'}
          />
        </main>
      </div>
    </div>
  );
}
