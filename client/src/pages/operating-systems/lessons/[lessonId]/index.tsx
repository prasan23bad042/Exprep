import { useLocation } from 'wouter';
import { useEffect } from 'react';
import { osUnits } from '@/data/osTopics';

export default function OsLessonPage() {
  const [location, setLocation] = useLocation();
  const lessonId = location.split('/')[3];
  
  // Redirect to the first topic of the lesson if no topic is selected
  useEffect(() => {
    const unit = osUnits.find(u => u.id === lessonId);
    if (unit && unit.topics.length > 0) {
      setLocation(`/operating-systems/lessons/${lessonId}/${unit.topics[0].id}`, { replace: true });
    }
  }, [lessonId, setLocation]);

  return null; // This will redirect, so no need to render anything
}
