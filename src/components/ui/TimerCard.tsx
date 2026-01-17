import React from 'react';

interface TimerCardProps {
  value: number;
  label: string;
}

export const TimerCard: React.FC<TimerCardProps> = ({ value, label }) => {
  const formattedValue = value.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center justify-center 
                    bg-brand-surface border border-slate-700/50 
                    rounded-2xl shadow-xl backdrop-blur-sm 
                    w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40
                    transition-transform hover:scale-105 duration-300">
      
      <span className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono text-white tabular-nums tracking-tight">
        {formattedValue}
      </span>

      <span className="text-xs sm:text-sm md:text-base font-medium text-slate-400 uppercase tracking-widest mt-1">
        {label}
      </span>
      
    </div>
  );
};