import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type Subject = {
  id: string;
  name: string;
  description: string;
};

const tier1Subjects: Subject[] = [
  {
    id: "quantitative-aptitude",
    name: "Quantitative Aptitude",
    description: "Number systems, arithmetic, algebra, geometry, and mensuration"
  },
  {
    id: "general-intelligence",
    name: "General Intelligence & Reasoning",
    "description": "Verbal and non-verbal reasoning, analogies, and problem-solving"
  },
  {
    id: "english-language",
    name: "English Language",
    description: "Vocabulary, grammar, comprehension, and verbal ability"
  },
  {
    id: "general-awareness",
    name: "General Awareness",
    description: "Current affairs, history, geography, polity, and economy"
  }
];

const tier2Subjects: Subject[] = [
  {
    id: "quantitative-abilities",
    name: "Quantitative Abilities",
    description: "Advanced mathematics and data interpretation"
  },
  {
    id: "english-language-comprehension",
    name: "English Language & Comprehension",
    description: "Advanced grammar, vocabulary, and reading comprehension"
  },
  {
    id: "statistics",
    name: "Statistics",
    description: "Collection, analysis, and interpretation of data"
  },
  {
    id: "general-studies",
    name: "General Studies (Finance & Economics)",
    description: "Economics and financial awareness"
  }
];

export default function SSCPreparation() {
  const [, setLocation] = useLocation();

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        onClick={() => setLocation("/")} 
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Courses
      </Button>

      <h1 className="text-3xl font-bold mb-2">SSC CGL Preparation</h1>
      <p className="text-muted-foreground mb-8">Select a tier to continue</p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-6">Tier 1</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {tier1Subjects.map((subject) => (
              <div
                key={`t1-${subject.id}`}
                className="border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setLocation(`/course/ssc-cgl/tier1/${subject.id}`)}
              >
                <h3 className="text-xl font-semibold mb-2">{subject.name}</h3>
                <p className="text-muted-foreground">{subject.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Tier 2</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {tier2Subjects.map((subject) => (
              <div
                key={`t2-${subject.id}`}
                className="border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setLocation(`/course/ssc-cgl/tier2/${subject.id}`)}
              >
                <h3 className="text-xl font-semibold mb-2">{subject.name}</h3>
                <p className="text-muted-foreground">{subject.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
