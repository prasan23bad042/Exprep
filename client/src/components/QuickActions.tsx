interface QuickActionsProps {
  onStudyPlan?: () => void;
  onAssessments?: () => void;
}

export default function QuickActions({ onStudyPlan, onAssessments }: QuickActionsProps) {
  return (
    <div className="mt-6">
      <div className="text-xs opacity-80 mb-2">Quick actions</div>
      <div className="space-y-2">
        <button
          onClick={onStudyPlan}
          data-testid="button-study-plan"
          className="w-full py-2 px-3 rounded-xl bg-white/5 hover-elevate active-elevate-2 text-sm text-left"
        >
          Study Plan
        </button>
        <button
          onClick={onAssessments}
          data-testid="button-assessments"
          className="w-full py-2 px-3 rounded-xl bg-white/5 hover-elevate active-elevate-2 text-sm text-left"
        >
          Assessments
        </button>
      </div>
    </div>
  );
}
