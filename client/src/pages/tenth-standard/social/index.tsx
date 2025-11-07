import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowLeft, History, Map, Scale, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type SocialSubject = {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

export default function SocialSubject() {
  const subjects: SocialSubject[] = [
    {
      id: 'history',
      name: 'History',
      description: 'World Wars, Indian Freedom Movement, and Social Reforms',
      icon: <History className="h-8 w-8" />,
      color: 'text-amber-600',
    },
    {
      id: 'geography',
      name: 'Geography',
      description: 'India\'s Physical Features, Climate, and Resources',
      icon: <Map className="h-8 w-8" />,
      color: 'text-emerald-600',
    },
    {
      id: 'civics',
      name: 'Civics',
      description: 'Indian Constitution, Government, and Foreign Policy',
      icon: <Scale className="h-8 w-8" />,
      color: 'text-indigo-600',
    },
    {
      id: 'economics',
      name: 'Economics',
      description: 'GDP, Globalization, Food Security, and Industries',
      icon: <TrendingUp className="h-8 w-8" />,
      color: 'text-rose-600',
    },
  ];

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mb-6">
        <Button asChild variant="ghost" className="mb-2">
          <Link href="/tenth-standard">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to 10th Standard
          </Link>
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold">10th Standard - Social Science</h1>
        <p className="text-muted-foreground mt-2">
          Select a subject to explore topics in History, Geography, Civics, and Economics
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {subjects.map((subject) => (
          <Link key={subject.id} href={`/tenth-standard/social/${subject.id}`}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-muted rounded-lg ${subject.color}`}>
                    {subject.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{subject.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {subject.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
