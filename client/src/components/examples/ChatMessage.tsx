import ChatMessage from '../ChatMessage';

export default function ChatMessageExample() {
  const userMessage = {
    role: 'user' as const,
    text: 'Explain the concept of virtual memory in Operating Systems',
    ts: Date.now(),
  };

  const assistantMessage = {
    role: 'assistant' as const,
    text: 'Virtual memory is a memory management technique that provides an idealized abstraction of storage resources. It allows programs to use more memory than physically available by using disk space as an extension of RAM.',
    meta: [{ source: 'docs/os-basics.pdf' }, { id: 'ch4-vm' }],
    ts: Date.now(),
  };

  return (
    <div className="p-6 bg-background space-y-4">
      <ChatMessage message={userMessage} />
      <ChatMessage message={assistantMessage} />
    </div>
  );
}
