import { useParams, Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
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
              <TopicSidebar 
                currentLessonId={lessonId} 
                currentTopicId={topicId} 
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 content-area">
          <div className="space-y-6">
            <div className="sticky top-0 bg-background/80 backdrop-blur-sm z-10 pt-4 pb-2">
              <h2 className="text-2xl font-bold">{topic.title}</h2>
              <div className="text-muted-foreground text-sm">
                {unit?.title}
              </div>
            </div>

            {/* Summary Section */}
            <Card>
              <CardHeader>
                <CardTitle>Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  {/* Content will go here */}
                </div>
              </CardContent>
            </Card>

            {/* Q&A Section */}
            <Card>
              <CardHeader>
                <CardTitle>Q&A</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Q&A items will go here */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
