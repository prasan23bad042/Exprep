import ChatArea from '../ChatArea';

export default function ChatAreaExample() {
  const messages = [
    {
      role: 'user' as const,
      text: 'What is the difference between process and thread?',
      ts: Date.now() - 120000,
    },
    {
      role: 'assistant' as const,
      text: 'A process is an independent program in execution with its own memory space, while a thread is a lightweight unit of execution within a process that shares memory with other threads.',
      meta: [{ source: 'os-concepts.pdf' }],
      ts: Date.now() - 100000,
    },
    {
      role: 'user' as const,
      text: 'Can you give me an example?',
      ts: Date.now() - 60000,
    },
    {
      role: 'assistant' as const,
      text: 'Sure! Think of a web browser as a process. Each tab you open can be a separate thread within that browser process, sharing resources like memory but executing independently.',
      ts: Date.now() - 30000,
    },
  ];

  return (
    <div className="h-96 bg-background p-6">
      <ChatArea messages={messages} />
    </div>
  );
}
