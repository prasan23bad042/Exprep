import { useParams, Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import TopicSidebar from '@/components/course/TopicSidebar';
import { coaUnits } from '@/data/coaTopics';

interface TopicPageParams {
  lessonId: string;
  topicId: string;
}

export default function TopicPage() {
  const params = useParams<TopicPageParams>();
  const { lessonId, topicId } = params;

  if (!lessonId || !topicId) {
    return <div className="p-8">Invalid URL parameters</div>;
  }

  const unit = coaUnits.find(u => u.id === lessonId);
  const topic = unit?.topics.find(t => t.id === topicId);
  const topicIndex = unit?.topics.findIndex(t => t.id === topicId) ?? -1;
  const unitIndex = coaUnits.findIndex(u => u.id === lessonId);
  
  // Get previous and next topics for navigation (with cross-unit support)
  let previousTopic = null;
  let previousUnitId = lessonId;
  let nextTopic = null;
  let nextUnitId = lessonId;
  
  if (unit && topicIndex >= 0) {
    if (topicIndex > 0) {
      // Previous topic in same unit
      previousTopic = unit.topics[topicIndex - 1];
      previousUnitId = unit.id;
    } else if (unitIndex > 0) {
      // First topic of current unit, go to last topic of previous unit
      const prevUnit = coaUnits[unitIndex - 1];
      if (prevUnit && prevUnit.topics.length > 0) {
        previousTopic = prevUnit.topics[prevUnit.topics.length - 1];
        previousUnitId = prevUnit.id;
      }
    }
    
    if (topicIndex < unit.topics.length - 1) {
      // Next topic in same unit
      nextTopic = unit.topics[topicIndex + 1];
      nextUnitId = unit.id;
    } else if (unitIndex < coaUnits.length - 1) {
      // Last topic of current unit, go to first topic of next unit
      const nextUnit = coaUnits[unitIndex + 1];
      if (nextUnit && nextUnit.topics.length > 0) {
        nextTopic = nextUnit.topics[0];
        nextUnitId = nextUnit.id;
      }
    }
  }

  if (!topic) {
    return (
      <div className="container mx-auto p-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/computer-architecture">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Course
          </Link>
        </Button>
        <div>Topic not found</div>
      </div>
    );
  }

  // Get the content for the current topic
  const getTopicContent = (unitId: string, topicId: string) => {
    // In a real app, you would fetch this from an API or content source
    return `# ${topic.title}

## Definition
This is the definition for ${topic.title}.

## Key Points
- Point 1
- Point 2
- Point 3

## Summary
This is a summary of ${topic.title}.`;
  };

  const content = getTopicContent(lessonId, topicId);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mb-6">
        <Button asChild variant="ghost" className="mb-2">
          <Link href="/computer-architecture">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Course
          </Link>
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold">Computer Organization & Architecture</h1>
      </div>

      <style jsx global>{`
        /* Hide scrollbar by default */
        .sidebar-container {
          height: calc(100vh - 240px);
          overflow-y: auto;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .sidebar-container::-webkit-scrollbar {
          display: none;
        }
        
        /* Show scrollbar on hover */
        .sidebar-container:hover::-webkit-scrollbar {
          display: block;
          width: 4px;
        }
        
        .sidebar-container:hover::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 2px;
        }
        
        /* Main content area */
        .content-area {
          overflow-y: auto;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .content-area::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-180px)]">
        {/* Sidebar */}
        <div className="lg:w-80 flex-shrink-0">
          <div className="sticky top-24 h-[calc(100vh-200px)]">
            <div className="sidebar-container pr-2">
              <TopicSidebar currentLessonId={lessonId} currentTopicId={topicId} />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 content-area">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{topic.title}</CardTitle>
              <div className="text-muted-foreground text-sm">
                {unit?.title}
              </div>
            </CardHeader>
            <CardContent>
              <div 
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: content }}
              />
              
              {/* Navigation Buttons */}
              <div className="mt-8 pt-4 border-t flex justify-between">
                {previousTopic ? (
                  <Button asChild variant="outline">
                    <Link href={`/computer-architecture/lessons/${previousUnitId}/${previousTopic.id}`}>
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      {previousTopic.title}
                    </Link>
                  </Button>
                ) : <div />}
                
                {nextTopic ? (
                  <Button asChild>
                    <Link href={`/computer-architecture/lessons/${nextUnitId}/${nextTopic.id}`}>
                      {nextTopic.title}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                ) : (
                  <Button asChild variant="outline">
                    <Link href="/computer-architecture">
                      Back to Course
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
