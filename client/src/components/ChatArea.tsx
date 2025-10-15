import { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';

interface Message {
  role: 'user' | 'assistant';
  text: string;
  meta?: Array<{ source?: string; id?: string }>;
  ts?: number;
}

interface ChatAreaProps {
  messages: Message[];
}

export default function ChatArea({ messages }: ChatAreaProps) {
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-auto mb-4 p-4 bg-slate-800/30 rounded-2xl">
      {messages.length === 0 && (
        <div className="text-center opacity-60 py-20 px-4" data-testid="text-empty-state">
          Start by asking a question — e.g. "Explain pointers in OS" or "Give me a 2-week
          study plan for SSC CGL (Beginner)".
        </div>
      )}

      <div className="space-y-4">
        {messages.map((m, i) => (
          <ChatMessage key={i} message={m} />
        ))}
        <div ref={chatEndRef} />
      </div>
    </div>
  );
}
