import { useParams, Link } from 'wouter';
import { useEffect, useState } from 'react';
import { osUnits } from '@/data/osTopics';
import OsSidebar from '@/components/course/OsSidebar';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

interface TopicPageParams {
  lessonId: string;
  topicId: string;
}

export default function OsTopicPage() {
  const params = useParams<TopicPageParams>();
  const { lessonId, topicId } = params;
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [, setLocation] = useParams();

  if (!lessonId || !topicId) {
    return <div className="p-8">Invalid URL parameters</div>;
  }

  const currentUnit = osUnits.find(unit => unit.id === lessonId);
  const currentTopic = currentUnit?.topics.find(topic => topic.id === topicId);
  const topicIndex = currentUnit?.topics.findIndex(t => t.id === topicId) ?? -1;

  // Get previous and next topics for navigation
  const previousTopic = topicIndex > 0 ? currentUnit?.topics[topicIndex - 1] : null;
  const nextTopic = topicIndex < (currentUnit?.topics.length ?? 0) - 1 ? currentUnit?.topics[topicIndex + 1] : null;

  // Load content
  useEffect(() => {
    const loadContent = async () => {
      if (!currentTopic) return;
      
      setIsLoading(true);
      try {
        // Simulate loading content
        await new Promise(resolve => setTimeout(resolve, 300));
        setContent(`# ${currentTopic.title}
        
This is the content for ${currentTopic.title}. In a real application, this would be fetched from a CMS or markdown files.

## Key Points
- Point 1
- Point 2
- Point 3

## Summary
This is a placeholder for the actual content.`);
      } catch (error) {
        console.error('Error loading topic:', error);
        setContent('# Error\n\nCould not load the requested topic. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, [currentTopic]);

  if (!currentUnit || !currentTopic) {
    return (
      <div className="flex h-[calc(100vh-4rem)]">
        <OsSidebar />
        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-destructive">Topic not found</h1>
            <p className="mt-2 text-muted-foreground">The requested topic could not be found.</p>
            <Button asChild variant="ghost" className="mt-4">
              <Link href="/operating-systems">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to OS Home
              </Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <OsSidebar currentLessonId={lessonId} currentTopicId={topicId} />
      
      <main className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{currentTopic.title}</h1>
            <p className="text-muted-foreground">{currentUnit.title}</p>
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            {isLoading ? (
              <div className="space-y-4">
                <div className="h-8 bg-muted/30 rounded w-3/4 animate-pulse"></div>
                <div className="h-4 bg-muted/30 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-muted/30 rounded w-5/6 animate-pulse"></div>
                <div className="h-4 bg-muted/30 rounded w-2/3 animate-pulse"></div>
              </div>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: content }} />
            )}
          </div>
          
          <div className="mt-12 pt-6 border-t flex justify-between">
            {previousTopic ? (
              <Button variant="outline" asChild>
                <Link href={`/operating-systems/lessons/${lessonId}/${previousTopic.id}`}>
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  {previousTopic.title}
                </Link>
              </Button>
            ) : (
              <div></div>
            )}
            
            {nextTopic ? (
              <Button variant="outline" asChild>
                <Link href={`/operating-systems/lessons/${lessonId}/${nextTopic.id}`}>
                  {nextTopic.title}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <Button variant="outline" asChild>
                <Link href="/operating-systems">
                  Back to OS Home
                </Link>
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
