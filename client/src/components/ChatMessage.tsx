import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';

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
        className={`inline-block max-w-[80%] p-4 rounded-2xl ${
          isUser
            ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white'
            : 'bg-white/6 text-foreground'
        }`}
        data-testid={`message-${message.role}`}
      >
        {isUser ? (
          <div className="whitespace-pre-wrap">{message.text}</div>
        ) : (
          <div className="prose prose-invert prose-sm max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                // Custom styling for markdown elements
                h2: ({ node, ...props }) => (
                  <h2 className="text-xl font-bold mt-4 mb-2 text-indigo-300" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="text-lg font-semibold mt-3 mb-2 text-indigo-200" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="mb-3 leading-relaxed" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc list-inside mb-3 space-y-1" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="list-decimal list-inside mb-3 space-y-1" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="ml-2" {...props} />
                ),
                code: ({ node, inline, ...props }: any) =>
                  inline ? (
                    <code className="bg-slate-700/50 px-1.5 py-0.5 rounded text-indigo-300 text-sm" {...props} />
                  ) : (
                    <code className="block bg-slate-800 p-3 rounded-lg overflow-x-auto text-sm" {...props} />
                  ),
                pre: ({ node, ...props }) => (
                  <pre className="bg-slate-800 p-3 rounded-lg overflow-x-auto mb-3" {...props} />
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote className="border-l-4 border-indigo-400 pl-4 italic my-3 text-slate-300" {...props} />
                ),
                strong: ({ node, ...props }) => (
                  <strong className="font-bold text-indigo-200" {...props} />
                ),
                a: ({ node, ...props }) => (
                  <a className="text-indigo-400 hover:text-indigo-300 underline" {...props} />
                ),
              }}
            >
              {message.text}
            </ReactMarkdown>
          </div>
        )}
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
