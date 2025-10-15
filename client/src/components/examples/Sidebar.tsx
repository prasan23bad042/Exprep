import { useState } from 'react';
import Sidebar from '../Sidebar';

export default function SidebarExample() {
  const courses = [
    { id: 'schooling', title: 'Schooling (9th & 10th TN)', subtitle: 'Tamil Nadu Syllabus' },
    { id: 'engineering', title: 'Engineering (CSE)', subtitle: 'COA, OS' },
    { id: 'govt', title: 'Govt Exams (SSC CGL)', subtitle: 'SSC Exam Prep' },
  ];

  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [level, setLevel] = useState<string | null>('Intermediate');

  return (
    <div className="h-screen bg-background p-6">
      <Sidebar
        user={{ name: 'Priya Kumar', loggedIn: true }}
        courses={courses}
        selectedCourse={selectedCourse}
        level={level}
        onCourseSelect={setSelectedCourse}
        onLevelChange={setLevel}
        onStudyPlan={() => console.log('Study Plan')}
        onAssessments={() => console.log('Assessments')}
      />
    </div>
  );
}
