import { useState } from 'react';
import ChatInput from '../ChatInput';

export default function ChatInputExample() {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    console.log('Sending:', value);
    setIsLoading(true);
    setTimeout(() => {
      setValue('');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="p-6 bg-background">
      <ChatInput
        value={value}
        onChange={setValue}
        onSend={handleSend}
        isLoading={isLoading}
      />
    </div>
  );
}
