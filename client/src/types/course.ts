export interface Course {
  id: string;
  title: string;
  subtitle: string;
  category: 'Schooling' | 'Engineering' | 'Govt';
  subjects: string[];
  imageUrl?: string;
  rating?: number;
  studentsEnrolled?: number;
}

export const mockCourses: Course[] = [
  {
    id: 'os-course',
    title: 'Operating Systems',
    subtitle: 'Master the fundamentals of Operating Systems',
    category: 'Engineering',
    subjects: ['Process Management', 'Memory Management', 'File Systems', 'CPU Scheduling', 'I/O Systems'],
    rating: 4.9,
    studentsEnrolled: 2500
  },
  {
    id: '1',
    title: 'TN Stateboard 9th',
    subtitle: 'Comprehensive preparation for TN Stateboard 9th standard',
    category: 'Schooling',
    subjects: ['Mathematics', 'Science', 'Social Science', 'English', 'Tamil'],
    rating: 4.8,
    studentsEnrolled: 1250
  },
  {
    id: '2',
    title: 'TN Stateboard 10th',
    subtitle: 'Complete syllabus coverage for TN Stateboard 10th board exams',
    category: 'Schooling',
    subjects: ['Mathematics', 'Science', 'Social Science', 'English', 'Tamil'],
    rating: 4.7,
    studentsEnrolled: 1500
  },
  {
    id: '3',
    title: 'Computer Organization & Architecture',
    subtitle: 'Master COA with comprehensive study material',
    category: 'Engineering',
    subjects: ['COA'],
    rating: 4.9,
    studentsEnrolled: 1800
  },
  {
    id: '5',
    title: 'SSC - CGL',
    subtitle: 'Complete preparation for SSC Combined Graduate Level',
    category: 'Govt',
    subjects: ['SSC - CGL'],
    rating: 4.5,
    studentsEnrolled: 3200
  }
];
