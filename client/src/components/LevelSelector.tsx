interface LevelSelectorProps {
  level: string | null;
  onLevelChange: (level: string) => void;
}

export default function LevelSelector({ level, onLevelChange }: LevelSelectorProps) {
  const levels = ['Beginner', 'Intermediate', 'Expert'];

  return (
    <div className="mt-6 border-t border-white/5 pt-4">
      <div className="text-xs opacity-90 mb-2">Choose level</div>
      <div className="flex gap-2">
        {levels.map((l) => (
          <button
            key={l}
            onClick={() => onLevelChange(l)}
            data-testid={`button-level-${l.toLowerCase()}`}
            className={`px-3 py-1 rounded-full text-xs transition-all ${
              level === l
                ? 'bg-white/10 text-white'
                : 'bg-white/5 text-white/70 hover-elevate active-elevate-2'
            }`}
          >
            {l}
          </button>
        ))}
      </div>
    </div>
  );
}
