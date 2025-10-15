import { Send } from 'lucide-react';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  placeholder?: string;
}

export default function ChatInput({
  value,
  onChange,
  onSend,
  disabled = false,
  isLoading = false,
  placeholder = 'Ask anything about the topic...',
}: ChatInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !disabled) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="flex items-center gap-3">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        data-testid="input-chat"
        className="flex-1 py-3 px-4 rounded-2xl bg-slate-800/40 text-foreground outline-none border border-transparent focus:border-indigo-500/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        onClick={onSend}
        disabled={disabled || isLoading}
        data-testid="button-send"
        className="px-4 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed hover-elevate active-elevate-2 flex items-center gap-2"
      >
        {isLoading ? 'Thinking...' : (
          <>
            Send
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  );
}
