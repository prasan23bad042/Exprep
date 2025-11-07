import { useParams, Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import EnglishSidebar from '@/components/course/EnglishSidebar';
import { english9Units } from '@/data/english9Topics';

interface TopicPageParams {
  unitId: string;
  topicId: string;
}

export default function EnglishTopicPage() {
  const params = useParams<TopicPageParams>();
  const { unitId, topicId } = params;

  if (!unitId || !topicId) {
    return <div className="p-8">Invalid URL parameters</div>;
  }

  const unit = english9Units.find(u => u.id === unitId);
  const topic = unit?.topics.find(t => t.id === topicId);
  const topicIndex = unit?.topics.findIndex(t => t.id === topicId) ?? -1;
  const unitIndex = english9Units.findIndex(u => u.id === unitId);
  
  // Get previous and next topics for navigation
  let previousTopic = null;
  let nextTopic = null;
  
  if (unit && topicIndex >= 0) {
    if (topicIndex > 0) {
      previousTopic = {
        ...unit.topics[topicIndex - 1],
        unitId: unit.id
      };
    } else if (unitIndex > 0) {
      // If it's the first topic, link to the last topic of the previous unit
      const prevUnit = english9Units[unitIndex - 1];
      if (prevUnit) {
        previousTopic = {
          ...prevUnit.topics[prevUnit.topics.length - 1],
          unitId: prevUnit.id
        };
      }
    }
    
    if (topicIndex < unit.topics.length - 1) {
      nextTopic = {
        ...unit.topics[topicIndex + 1],
        unitId: unit.id
      };
    } else if (unitIndex < english9Units.length - 1) {
      // If it's the last topic, link to the first topic of the next unit
      const nextUnit = english9Units[unitIndex + 1];
      if (nextUnit) {
        nextTopic = {
          ...nextUnit.topics[0],
          unitId: nextUnit.id
        };
      }
    }
  }

  if (!topic) {
    return (
      <div className="container mx-auto p-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/ninth-standard/english">
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
          <Link href="/ninth-standard/english">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to English
          </Link>
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold">9th Standard - English</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-180px)]">
        {/* Sidebar */}
        <div className="lg:w-80 flex-shrink-0">
          <div className="sticky top-24 h-[calc(100vh-200px)]">
            <div className="sidebar-container pr-2">
              <EnglishSidebar currentLessonId={unitId} currentTopicId={topicId} />
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
                    <Link href={`/ninth-standard/english/lessons/${previousTopic.unitId}/${previousTopic.id}`}>
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      {previousTopic.title}
                    </Link>
                  </Button>
                ) : <div />}
                
                {nextTopic ? (
                  <Button asChild>
                    <Link href={`/ninth-standard/english/lessons/${nextTopic.unitId}/${nextTopic.id}`}>
                      {nextTopic.title}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                ) : (
                  <Button asChild variant="outline">
                    <Link href="/ninth-standard/english">
                      Back to English
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style>{`
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
