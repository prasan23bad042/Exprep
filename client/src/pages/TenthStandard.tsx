import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type Subject = {
  id: string;
  name: string;
  description: string;
};

export default function TenthStandard() {
  const [location, setLocation] = useLocation();

  const subjects: Subject[] = [
    {
      id: "mathematics",
      name: "Mathematics",
      description: "Advanced Algebra, Geometry, and Trigonometry",
    },
    {
      id: "science",
      name: "Science",
      description: "Physics, Chemistry, and Biology for 10th grade",
    },
    {
      id: "social-science",
      name: "Social Science",
      description: "Indian History, Geography, and Political Science",
    },
    {
      id: "english",
      name: "English",
      description: "Language and Literature with focus on board exams",
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
          <div
            key={subject.id}
            className="border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setLocation(`/course/tn-board/10th/${subject.id}`)}
          >
            <h3 className="text-xl font-semibold mb-2">{subject.name}</h3>
            <p className="text-muted-foreground">{subject.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
