import { useState } from 'react';
import LevelSelector from '../LevelSelector';

export default function LevelSelectorExample() {
  const [level, setLevel] = useState<string | null>('Intermediate');

  return (
    <div className="p-6 bg-background max-w-sm">
      <LevelSelector level={level} onLevelChange={setLevel} />
    </div>
  );
}
