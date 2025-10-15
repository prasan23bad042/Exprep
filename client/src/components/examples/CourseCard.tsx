import { useState } from 'react';
import CourseCard from '../CourseCard';

export default function CourseCardExample() {
  const [selected, setSelected] = useState('engineering');
  
  const courses = [
    { id: 'schooling', title: 'Schooling (9th & 10th TN)', subtitle: 'Tamil Nadu Syllabus' },
    { id: 'engineering', title: 'Engineering (CSE)', subtitle: 'COA, OS' },
    { id: 'govt', title: 'Govt Exams (SSC CGL)', subtitle: 'SSC Exam Prep' },
  ];

  return (
    <div className="p-6 bg-background space-y-3 max-w-sm">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          active={selected === course.id}
          onClick={() => setSelected(course.id)}
        />
      ))}
    </div>
  );
}
