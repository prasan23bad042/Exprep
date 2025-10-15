interface CourseCardProps {
  course: {
    id: string;
    title: string;
    subtitle: string;
  };
  active: boolean;
  onClick: () => void;
}

export default function CourseCard({ course, active, onClick }: CourseCardProps) {
  return (
    <button
      onClick={onClick}
      data-testid={`button-course-${course.id}`}
      className={`w-full text-left p-4 rounded-2xl transition-all duration-200 ${
        active
          ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
          : 'bg-white/5 hover-elevate active-elevate-2'
      }`}
    >
      <div className="text-sm font-semibold" data-testid={`text-course-title-${course.id}`}>
        {course.title}
      </div>
      <div className={`text-xs mt-0.5 ${active ? 'opacity-90' : 'opacity-70'}`}>
        {course.subtitle}
      </div>
    </button>
  );
}
