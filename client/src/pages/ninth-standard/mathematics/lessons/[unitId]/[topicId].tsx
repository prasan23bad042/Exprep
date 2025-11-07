import { useParams, Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import MathsSidebar from '@/components/course/MathsSidebar';
import { maths9Units } from '@/data/maths9Topics';

interface TopicPageParams {
  unitId: string;
  topicId: string;
}

export default function MathsTopicPage() {
  const params = useParams<TopicPageParams>();
  const { unitId, topicId } = params;

  if (!unitId || !topicId) {
    return (
      <div className="container mx-auto p-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/ninth-standard/mathematics">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Mathematics
          </Link>
        </Button>
        <div>Invalid URL parameters</div>
      </div>
    );
  }

  const unit = maths9Units.find(u => u.id === unitId);
  const topic = unit?.topics.find(t => t.id === topicId);
  const topicIndex = unit?.topics.findIndex(t => t.id === topicId) ?? -1;
  const unitIndex = maths9Units.findIndex(u => u.id === unitId);
  
  // Get previous and next topics for navigation (with cross-unit support)
  let previousTopic = null;
  let previousUnitId = unitId;
  let nextTopic = null;
  let nextUnitId = unitId;
  
  if (unit && topicIndex >= 0) {
    if (topicIndex > 0) {
      // Previous topic in same unit
      previousTopic = unit.topics[topicIndex - 1];
      previousUnitId = unit.id;
    } else if (unitIndex > 0) {
      // First topic of current unit, go to last topic of previous unit
      const prevUnit = maths9Units[unitIndex - 1];
      if (prevUnit && prevUnit.topics.length > 0) {
        previousTopic = prevUnit.topics[prevUnit.topics.length - 1];
        previousUnitId = prevUnit.id;
      }
    }
    
    if (topicIndex < unit.topics.length - 1) {
      // Next topic in same unit
      nextTopic = unit.topics[topicIndex + 1];
      nextUnitId = unit.id;
    } else if (unitIndex < maths9Units.length - 1) {
      // Last topic of current unit, go to first topic of next unit
      const nextUnit = maths9Units[unitIndex + 1];
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
          <Link href="/ninth-standard/mathematics">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Mathematics
          </Link>
        </Button>
        <div>Topic not found</div>
      </div>
    );
  }

  // Get the content for the current topic
  const content = topic.content || `<h2>${topic.title}</h2><p>Content will be added from the document.</p>`;

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mb-6">
        <Button asChild variant="ghost" className="mb-2">
          <Link href="/ninth-standard/mathematics">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Mathematics
          </Link>
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold">9th Standard - Mathematics</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-180px)]">
        {/* Sidebar */}
        <div className="lg:w-80 flex-shrink-0">
          <div className="sticky top-24 h-[calc(100vh-200px)]">
            <div className="sidebar-container pr-2">
              <MathsSidebar currentLessonId={unitId} currentTopicId={topicId} />
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
                    <Link href={`/ninth-standard/mathematics/lessons/${previousUnitId}/${previousTopic.id}`}>
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      {previousTopic.title}
                    </Link>
                  </Button>
                ) : <div />}
                
                {nextTopic ? (
                  <Button asChild>
                    <Link href={`/ninth-standard/mathematics/lessons/${nextUnitId}/${nextTopic.id}`}>
                      {nextTopic.title}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                ) : (
                  <Button asChild variant="outline">
                    <Link href="/ninth-standard/mathematics">
                      Back to Mathematics
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx global>{`
        .sidebar-container {
          height: calc(100vh - 240px);
          overflow-y: auto;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .sidebar-container::-webkit-scrollbar {
          display: none;
        }
        
        .sidebar-container:hover::-webkit-scrollbar {
          display: block;
          width: 4px;
        }
        
        .sidebar-container:hover::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 2px;
        }
        
        .content-area {
          overflow-y: auto;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .content-area::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
