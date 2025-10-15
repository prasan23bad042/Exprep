import ChatHeader from '../ChatHeader';

export default function ChatHeaderExample() {
  const course = {
    title: 'Engineering (CSE)',
    subtitle: 'COA, OS',
  };

  return (
    <div className="p-6 bg-background">
      <ChatHeader course={course} level="Intermediate" />
      <div className="mt-4">
        <ChatHeader course={course} level={null} />
      </div>
    </div>
  );
}
