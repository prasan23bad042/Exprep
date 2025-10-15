interface ChatHeaderProps {
  course: {
    title: string;
    subtitle: string;
  };
  level: string | null;
}

export default function ChatHeader({ course, level }: ChatHeaderProps) {
  return (
    <header className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
      <div>
        <div className="text-lg font-semibold" data-testid="text-course-name">
          {course.title}
        </div>
        <div className="text-xs opacity-70" data-testid="text-course-info">
          {course.subtitle} • {level || 'Select level'}
        </div>
      </div>
      <div className="text-xs opacity-60" data-testid="text-session-time">
        Session: {new Date().toLocaleTimeString()}
      </div>
    </header>
  );
}
