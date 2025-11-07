import { useParams, Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import English10Sidebar from '@/components/course/English10Sidebar';
import { english10Units } from '@/data/english10Topics';

interface TopicPageParams {
  unitId: string;
  topicId: string;
}

export default function English10TopicPage() {
  const params = useParams<TopicPageParams>();
  const { unitId, topicId } = params;

  if (!unitId || !topicId) {
    return (
      <div className="container mx-auto p-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/tenth-standard/english">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to English
          </Link>
        </Button>
        <div>Invalid URL parameters</div>
      </div>
    );
  }

  const unit = english10Units.find(u => u.id === unitId);
  const topic = unit?.topics.find(t => t.id === topicId);
  const topicIndex = unit?.topics.findIndex(t => t.id === topicId) ?? -1;
  const unitIndex = english10Units.findIndex(u => u.id === unitId);
  
  // Get previous and next topics for navigation (with cross-unit support)
  let previousTopic = null;
  let previousUnitId = unitId;
  let nextTopic = null;
  let nextUnitId = unitId;
  
  if (unit && topicIndex >= 0) {
    if (topicIndex > 0) {
      previousTopic = unit.topics[topicIndex - 1];
      previousUnitId = unit.id;
    } else if (unitIndex > 0) {
      const prevUnit = english10Units[unitIndex - 1];
      if (prevUnit && prevUnit.topics.length > 0) {
        previousTopic = prevUnit.topics[prevUnit.topics.length - 1];
        previousUnitId = prevUnit.id;
      }
    }
    
    if (topicIndex < unit.topics.length - 1) {
      nextTopic = unit.topics[topicIndex + 1];
      nextUnitId = unit.id;
    } else if (unitIndex < english10Units.length - 1) {
      const nextUnit = english10Units[unitIndex + 1];
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
          <Link href="/tenth-standard/english">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to English
          </Link>
        </Button>
        <div>Topic not found</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mb-6">
        <Button asChild variant="ghost" className="mb-2">
          <Link href="/tenth-standard/english">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to English
          </Link>
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold">10th Standard - English</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-180px)]">
        {/* Sidebar */}
        <div className="lg:w-80 flex-shrink-0">
          <div className="sticky top-24 h-[calc(100vh-200px)]">
            <div className="sidebar-container pr-2">
              <English10Sidebar currentLessonId={unitId} currentTopicId={topicId} />
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
                dangerouslySetInnerHTML={{ __html: topic.content }}
              />
              
              {/* Navigation Buttons */}
              <div className="mt-8 pt-4 border-t flex justify-between">
                {previousTopic ? (
                  <Button asChild variant="outline">
                    <Link href={`/tenth-standard/english/lessons/${previousUnitId}/${previousTopic.id}`}>
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      {previousTopic.title}
                    </Link>
                  </Button>
                ) : <div />}
                
                {nextTopic ? (
                  <Button asChild>
                    <Link href={`/tenth-standard/english/lessons/${nextUnitId}/${nextTopic.id}`}>
                      {nextTopic.title}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                ) : (
                  <Button asChild variant="outline">
                    <Link href="/tenth-standard/english">
                      Back to English
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
