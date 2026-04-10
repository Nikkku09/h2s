import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Flame, Activity, Droplets } from 'lucide-react';

interface MetricCardsRowProps {
  healthScore: number;
  totalSpend: number;
  totalMeals: number;
  onMenuClick: () => void;
}

const StatCard: React.FC<{ label: string, value: string | number, icon: any, progress: number, colorClass: string, onClick?: () => void }> = ({ label, value, icon, progress, colorClass, onClick }) => {
  const dashArray = 120; // Approx circumference
  const dashOffset = dashArray - (dashArray * progress) / 100;
  
  return (
    <div onClick={onClick} className={`bg-white p-5 xl:p-6 rounded-2xl border border-slate-100 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow ${onClick ? 'cursor-pointer hover:border-sky-200' : ''}`}>
      <div className="flex flex-col gap-1.5">
        <span className="text-[13px] text-slate-500 font-semibold">{label}</span>
        <span className="text-2xl font-bold text-slate-800 tracking-tight">{value}</span>
      </div>
      
      {/* Circle Progress Visual matching screenshot */}
      <div className="relative w-[50px] h-[50px] flex items-center justify-center shrink-0">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 44 44">
          <circle cx="22" cy="22" r="19" className="stroke-orange-50" strokeWidth="4" fill="none" />
          <motion.circle 
            cx="22" cy="22" r="19" 
            className={colorClass} 
            strokeWidth="4" 
            fill="none" 
            strokeDasharray={dashArray}
            initial={{ strokeDashoffset: dashArray }}
            animate={{ strokeDashoffset: dashOffset }}
            transition={{ duration: 1, ease: 'easeOut' }}
            strokeLinecap="round"
          />
        </svg>
        <div className={`absolute ${colorClass.replace('stroke-', 'text-')} opacity-60`}>
           {icon}
        </div>
      </div>
    </div>
  );
}

export const MetricCardsRow: React.FC<MetricCardsRowProps> = ({ healthScore, totalSpend, totalMeals, onMenuClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 shrink-0">
       <StatCard label="Total Menu" value={healthScore} progress={healthScore} colorClass="stroke-orange-500" icon={<Activity size={14} />} onClick={onMenuClick} />
       <StatCard label="Total Spend on Food" value={`$${totalSpend.toFixed(2)}`} progress={Math.min(totalSpend, 100)} colorClass="stroke-orange-500" icon={<Leaf size={14} />} />
       <StatCard label="Total Meals" value={totalMeals} progress={Math.min(totalMeals * 10, 100)} colorClass="stroke-orange-500" icon={<Droplets size={14} />} />
       <StatCard label="Total Customers" value="985" progress={80} colorClass="stroke-orange-500" icon={<Flame size={14} />} />
    </div>
  );
}
