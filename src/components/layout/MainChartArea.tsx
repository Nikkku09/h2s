import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SmartSliders } from '../SmartSliders';

interface MainChartAreaProps {
  healthHistory: { name: string; value: number }[];
  energy: number; setEnergy: (v: number) => void;
  hunger: number; setHunger: (v: number) => void;
  time: number; setTime: (v: number) => void;
}

export const MainChartArea: React.FC<MainChartAreaProps> = ({ healthHistory, energy, setEnergy, hunger, setHunger, time, setTime }) => {
  const latestScore = healthHistory[healthHistory.length - 1].value;

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-6 shrink-0">
      
      {/* Chart Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-slate-800 tracking-tight">Health Score Graph</h2>
          <p className="text-sm text-slate-400 mt-1">Lorem ipsum dolor</p>
        </div>
        <div className="text-right">
          <h2 className="text-2xl font-bold text-slate-800">{latestScore} / 100</h2>
          <p className="text-sm text-emerald-500 font-semibold">+ 1.5% <span className="text-slate-400 font-normal">than last week</span></p>
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="w-full h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={healthHistory} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} domain={[0, 100]} />
            <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
            <Area type="monotone" dataKey="value" stroke="#38bdf8" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Sliders strictly integrated here as an inline-tool retaining functionality */}
      <div className="pt-4 border-t border-slate-100 mt-2">
         <SmartSliders energy={energy} setEnergy={setEnergy} hunger={hunger} setHunger={setHunger} time={time} setTime={setTime} />
      </div>

    </div>
  );
};
