
import React from 'react';
import { Button } from '@/components/ui/button';

interface FrequencyPickerProps {
  frequency: string;
  onFrequencyChange: (frequency: string) => void;
}

const FrequencyPicker = ({ frequency, onFrequencyChange }: FrequencyPickerProps) => {
  const frequencies = [
    { value: 'daily', label: '1 Day' },
    { value: 'weekly', label: '1 Week' },
    { value: 'monthly', label: '1 Month' },
    { value: 'custom', label: 'Custom' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {frequencies.map((freq) => (
        <Button
          key={freq.value}
          variant={frequency === freq.value ? "default" : "outline"}
          className={`${
            frequency === freq.value
              ? 'bg-gradient-to-r from-indigo-500 to-emerald-500 text-white'
              : 'border-slate-600 text-slate-300 hover:bg-slate-700'
          }`}
          onClick={() => onFrequencyChange(freq.value)}
        >
          {freq.label}
        </Button>
      ))}
    </div>
  );
};

export default FrequencyPicker;
