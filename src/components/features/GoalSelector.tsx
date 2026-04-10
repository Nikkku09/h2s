import React from 'react';

interface GoalSelectorProps {
  goal: string;
  setGoal: (g: string) => void;
}

export const GoalSelector: React.FC<GoalSelectorProps> = ({ goal, setGoal }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="goal-select" className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Active Goal</label>
      <select 
        id="goal-select"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/50 appearance-none font-medium transition-all cursor-pointer"
        aria-label="Select your health goal"
      >
        <option value="weight-loss">Weight Loss</option>
        <option value="muscle-gain">Muscle Gain</option>
        <option value="healthy-living">Healthy Living</option>
      </select>
    </div>
  );
}
