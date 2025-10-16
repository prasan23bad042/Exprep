import { useParams, Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import TopicSidebar from '@/components/course/TopicSidebar';
import { coaUnits, getTopicContent } from '@/data/coaTopics';

export default function TopicPage() {
  const params = useParams();
  const { lessonId, topicId } = params;

  if (!lessonId || !topicId) {
    return <div>Invalid URL parameters</div>;
  }

  const unit = coaUnits.find(u => u.id === lessonId);
  const topic = unit?.topics.find(t => t.id === topicId);
  const content = getTopicContent(lessonId, topicId);

  if (!topic || !content) {
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

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="lg:w-80 flex-shrink-0">
          <div className="sticky top-24">
            <TopicSidebar 
              currentLessonId={lessonId} 
              currentTopicId={topicId} 
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="space-y-6">
            <div>
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
                  <p>{content.summary}</p>
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
                  {content.qa?.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="font-medium">Q: {item.question}</h3>
                      <p className="text-muted-foreground">A: {item.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
