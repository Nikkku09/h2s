import React, { useMemo } from 'react';

export const TimeHeader: React.FC = () => {
  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  }, []);

  return (
    <div className="flex items-center gap-1">
      <span className="text-[13px] text-slate-500 font-medium hidden sm:inline">{greeting},</span>
      <span className="text-[13px] text-slate-800 font-bold hidden sm:inline">Allie</span>
    </div>
  );
};
