import { useState } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import { Course, mockCourses } from '@/types/course';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { LogOut, MessageSquare, Star } from 'lucide-react';

export default function Home() {
  const [, setLocation] = useLocation();
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState<'all' | 'schooling' | 'engineering' | 'govt'>('all');

  const handleLogout = () => {
    logout();
    setLocation('/login');
  };

  const filteredCourses = mockCourses.filter(course => 
    activeTab === 'all' || course.category.toLowerCase() === activeTab
  );

  const coursesByCategory = {
    Schooling: mockCourses.filter(course => course.category === 'Schooling'),
    Engineering: mockCourses.filter(course => course.category === 'Engineering'),
    Govt: mockCourses.filter(course => course.category === 'Govt')
  };

  const handleStartChatting = () => {
    setLocation('/chat');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Explore Our Courses</h1>
          <p className="text-muted-foreground">Choose from a wide range of courses to enhance your knowledge and skills</p>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={handleLogout}
            title="Logout"
            className="text-muted-foreground hover:text-foreground"
          >
            <LogOut className="h-4 w-4" />
          </Button>
          <Button 
            onClick={handleStartChatting}
            className="gap-2"
          >
            <MessageSquare className="h-4 w-4" />
            Start Chatting
          </Button>
        </div>
      </div>

      <Tabs 
        defaultValue="all" 
        className="w-full"
        onValueChange={(value) => setActiveTab(value as any)}
      >
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="all">All Courses</TabsTrigger>
          <TabsTrigger value="schooling">Schooling</TabsTrigger>
          <TabsTrigger value="engineering">Engineering</TabsTrigger>
          <TabsTrigger value="govt">Government Exams</TabsTrigger>
        </TabsList>

        {activeTab === 'all' ? (
          Object.entries(coursesByCategory).map(([category, courses]) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">{category} Courses</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </Tabs>
    </div>
  );
}

function CourseCard({ course }: { course: Course }) {
  const navigate = useLocation()[1];
  
  const handleCourseClick = () => {
    if (course.id === 'os-course') {
      navigate('/operating-systems');
    } else if (course.id === '3') { // COA course
      navigate('/computer-architecture');
    } else if (course.title.includes('9th')) {
      navigate('/ninth-standard');
    } else if (course.title.includes('10th')) {
      navigate('/tenth-standard');
    } else if (course.id === '5') { // SSC-CGL course
      navigate('/ssc-preparation');
    }
  };

  return (
    <Card 
      className="h-full flex flex-col hover:shadow-lg transition-shadow cursor-pointer"
      onClick={handleCourseClick}
    >
      <CardHeader>
        <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
          <span className="text-muted-foreground">Course Image</span>
        </div>
        <CardTitle className="text-xl">{course.title}</CardTitle>
        <CardDescription>{course.subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {course.subjects.map((subject, i) => (
            <span 
              key={i}
              className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
            >
              {subject}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
          <span className="text-sm font-medium">
            {course.rating}
            <span className="text-muted-foreground text-xs ml-1">({course.studentsEnrolled})</span>
          </span>
        </div>
        <span className="text-sm font-medium text-primary">
          View Subjects
        </span>
      </CardFooter>
    </Card>
  );
}
