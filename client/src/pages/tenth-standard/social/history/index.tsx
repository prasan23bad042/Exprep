import { useState } from 'react';
import { useLocation, Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronDown, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { historyUnits } from '@/data/historyTopics';

export default function History() {
  const [expandedUnit, setExpandedUnit] = useState<number | null>(0);
  const [location] = useLocation();

  const toggleUnit = (index: number) => {
    setExpandedUnit(expandedUnit === index ? null : index);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mb-6">
        <Button asChild variant="ghost" className="mb-2">
          <Link href="/tenth-standard/social">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Social Science
          </Link>
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold">10th Standard - History</h1>
        <p className="text-muted-foreground mt-2">
          Explore the major historical events and movements that shaped the modern world
        </p>
      </div>

      <div className="space-y-4">
        {historyUnits.map((unit, unitIndex) => (
          <Card key={unit.id}>
            <CardHeader 
              className="cursor-pointer hover:bg-muted/50 transition-colors rounded-t-lg"
              onClick={() => toggleUnit(unitIndex)}
            >
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{unit.title}</CardTitle>
                {expandedUnit === unitIndex ? (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            </CardHeader>
            {expandedUnit === unitIndex && (
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4">{unit.summary}</p>
                <ul className="space-y-2">
                  {unit.topics.map((topic) => (
                    <li key={topic.id} className="text-muted-foreground hover:text-foreground transition-colors">
                      <Link
                        href={`/tenth-standard/social/history/lessons/${unit.id}/${topic.id}`}
                        className="block py-1 hover:underline"
                      >
                        {topic.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
