import UserAvatar from './UserAvatar';
import CourseCard from './CourseCard';
import LevelSelector from './LevelSelector';
import QuickActions from './QuickActions';

interface SidebarProps {
  user: {
    name: string;
    loggedIn: boolean;
  };
  courses: Array<{
    id: string;
    title: string;
    subtitle: string;
  }>;
  selectedCourse: {
    id: string;
    title: string;
    subtitle: string;
  };
  level: string | null;
  onCourseSelect: (course: { id: string; title: string; subtitle: string }) => void;
  onLevelChange: (level: string) => void;
  onStudyPlan?: () => void;
  onAssessments?: () => void;
}

export default function Sidebar({
  user,
  courses,
  selectedCourse,
  level,
  onCourseSelect,
  onLevelChange,
  onStudyPlan,
  onAssessments,
}: SidebarProps) {
  return (
    <aside className="w-80 p-4 rounded-3xl bg-gradient-to-b from-white/3 to-white/2 flex-shrink-0">
      <UserAvatar user={user} />

      <div className="space-y-3">
        {courses.map((c) => (
          <CourseCard
            key={c.id}
            course={c}
            active={c.id === selectedCourse.id}
            onClick={() => onCourseSelect(c)}
          />
        ))}
      </div>

      <LevelSelector level={level} onLevelChange={onLevelChange} />
      <QuickActions onStudyPlan={onStudyPlan} onAssessments={onAssessments} />
    </aside>
  );
}
