import { useLocation, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Book, Globe, Calculator, FlaskConical } from "lucide-react";

type Subject = {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
};

export default function TenthStandard() {
  const [location, setLocation] = useLocation();

  const subjects: Subject[] = [
    {
      id: "mathematics",
      name: "Mathematics",
      description: "Algebra, Geometry, Trigonometry, and Statistics",
      icon: <Calculator className="h-8 w-8 text-blue-600" />,
    },
    {
      id: "english",
      name: "English",
      description: "Prose, Poetry, and Supplementary Reader",
      icon: <Book className="h-8 w-8 text-purple-600" />,
    },
    {
      id: "social",
      name: "Social Science",
      description: "History, Geography, Civics, and Economics",
      icon: <Globe className="h-8 w-8 text-orange-600" />,
    },
    {
      id: "science",
      name: "Science",
      description: "Physics, Chemistry, and Biology",
      icon: <FlaskConical className="h-8 w-8 text-green-600" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" onClick={() => setLocation("/")} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Courses
      </Button>

      <h1 className="text-3xl font-bold mb-2">TN Stateboard 10th Standard</h1>
      <p className="text-muted-foreground mb-8">Select a subject to continue</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {subjects.map((subject) => (
          <Link key={subject.id} href={`/tenth-standard/${subject.id}`}>
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-muted rounded-lg">
                  {subject.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{subject.name}</h3>
                  <p className="text-muted-foreground">{subject.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
