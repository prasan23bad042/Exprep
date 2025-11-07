import { Link } from 'wouter';
import { civicsUnits } from '@/data/civicsTopics';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const scrollbarStyles = {
  __html: `
    .sidebar-scroll {
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: transparent transparent;
      transition: scrollbar-color 0.3s ease, opacity 0.3s ease;
      -ms-overflow-style: none;
    }

    .sidebar-scroll::-webkit-scrollbar {
      width: 6px;
      transition: opacity 0.3s ease;
      opacity: 0;
    }

    .sidebar-scroll::-webkit-scrollbar-track {
      background: transparent;
    }

    .sidebar-scroll::-webkit-scrollbar-thumb {
      background: rgba(0,0,0,0.15);
      border-radius: 6px;
      transition: background 0.3s ease;
    }

    .sidebar-scroll:hover::-webkit-scrollbar {
      opacity: 1;
    }

    .sidebar-scroll:hover::-webkit-scrollbar-thumb {
      background: rgba(0,0,0,0.35);
    }

    .sidebar-scroll {
      scrollbar-gutter: stable;
    }
  `
};

interface CivicsSidebarProps {
  currentLessonId?: string;
  currentTopicId?: string;
}

export default function CivicsSidebar({ currentLessonId, currentTopicId }: CivicsSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div 
      className={`h-full flex flex-col transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-72'} bg-background border-r`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style dangerouslySetInnerHTML={scrollbarStyles} />
      <div className="p-4 border-b relative">
        {!isCollapsed ? (
          <h2 className="text-lg font-semibold">Civics Content</h2>
        ) : (
          <div className="h-6 flex items-center justify-center">
            <span className="text-xl font-bold text-primary">CI</span>
          </div>
        )}
        <button
          onClick={toggleCollapse}
          className={`absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full bg-background border shadow-sm transition-all ${isHovered ? 'opacity-100' : 'opacity-0'} hover:bg-accent`}
          aria-label={isCollapsed ? 'Expand' : 'Collapse'}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>
      </div>
      <div className="flex-1 sidebar-scroll">
        <div className="p-2">
          {civicsUnits.map((unit) => (
            <div key={unit.id} className="mb-4">
              {!isCollapsed && (
                <h3 className="px-3 py-2 text-sm font-medium text-muted-foreground bg-muted/30 rounded">
                  {unit.title}
                </h3>
              )}
              <ul className={`mt-1 space-y-0.5 ${isCollapsed ? 'flex flex-col items-center' : ''}`}>
                {unit.topics.map((topic) => (
                  <li key={topic.id} className={isCollapsed ? 'w-full' : ''}>
                    <Link
                      href={`/tenth-standard/social/civics/lessons/${unit.id}/${topic.id}`}
                      className={`block text-sm rounded-md transition-all ${
                        currentLessonId === unit.id && currentTopicId === topic.id
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                      } ${isCollapsed ? 'p-2 mx-1 my-0.5 flex items-center justify-center' : 'px-3 py-2'}`}
                      title={isCollapsed ? topic.title : ''}
                    >
                      {isCollapsed ? (
                        <span className="w-6 h-6 flex items-center justify-center text-xs font-medium rounded-full bg-muted/30">
                          {topic.title.split(' ').map(word => word[0]).join('').toUpperCase().substring(0, 2)}
                        </span>
                      ) : (
                        topic.title
                      )}
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
