import { useParams } from 'wouter';

export default function LessonPage() {
  const params = useParams();
  const { lessonId } = params;
  
  // In a real app, you would fetch the lesson data here
  // For now, we'll just redirect to the first topic
  return (
    <div>Loading first topic...</div>
  );
}
