import QuickActions from '../QuickActions';

export default function QuickActionsExample() {
  return (
    <div className="p-6 bg-background max-w-sm">
      <QuickActions
        onStudyPlan={() => console.log('Study Plan clicked')}
        onAssessments={() => console.log('Assessments clicked')}
      />
    </div>
  );
}
