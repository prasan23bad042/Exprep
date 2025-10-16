import { Link } from 'wouter';
import { coaUnits } from '@/data/coaTopics';

interface TopicSidebarProps {
  currentLessonId?: string;
  currentTopicId?: string;
}

export default function TopicSidebar({ currentLessonId, currentTopicId }: TopicSidebarProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Course Content</h2>
        <div className="space-y-1">
          {coaUnits.map((unit) => (
            <div key={unit.id} className="space-y-1">
              <h3 className="font-medium text-sm text-muted-foreground">{unit.title}</h3>
              <ul className="ml-2 space-y-1">
                {unit.topics.map((topic) => (
                  <li key={topic.id}>
                    <Link
                      href={`/computer-architecture/lessons/${unit.id}/${topic.id}`}
                      className={`block px-3 py-1.5 rounded text-sm transition-colors ${
                        currentLessonId === unit.id && currentTopicId === topic.id
                          ? 'bg-muted font-medium text-foreground'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                    >
                      {topic.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
