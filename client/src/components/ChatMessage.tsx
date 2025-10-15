interface ChatMessageProps {
  message: {
    role: 'user' | 'assistant';
    text: string;
    meta?: Array<{ source?: string; id?: string }>;
    ts?: number;
  };
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`${isUser ? 'text-right' : 'text-left'}`}>
      <div
        className={`inline-block max-w-[70%] p-3 rounded-2xl ${
          isUser
            ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white'
            : 'bg-white/6 text-foreground'
        }`}
        data-testid={`message-${message.role}`}
      >
        {message.text}
      </div>
      {message.meta && message.meta.length > 0 && (
        <div className="text-[11px] opacity-60 mt-1" data-testid="text-sources">
          Sources:{' '}
          {message.meta
            .map((s) => (s.source ? s.source.split('/').slice(-1)[0] : s.id))
            .join(', ')}
        </div>
      )}
    </div>
  );
}
