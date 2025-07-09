
import React from 'react';
import { Button } from '@/components/ui/button';

interface AllocationButtonsProps {
  onAllocationSelect: (percentage: number) => void;
}

const AllocationButtons = ({ onAllocationSelect }: AllocationButtonsProps) => {
  const percentages = [25, 50, 75, 100];

  return (
    <div className="flex flex-wrap gap-2">
      {percentages.map((percentage) => (
        <Button
          key={percentage}
          variant="outline"
          size="sm"
          className="border-slate-600 text-slate-300 hover:bg-slate-700"
          onClick={() => onAllocationSelect(percentage)}
        >
          {percentage}%
        </Button>
      ))}
    </div>
  );
};

export default AllocationButtons;
