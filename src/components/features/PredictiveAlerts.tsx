import React from 'react';
import { TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export const PredictiveAlerts: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex flex-col gap-3 p-6 bg-zinc-950 text-zinc-100 shadow-premium rounded-3xl mt-auto topographic-pattern relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.03) 2px, transparent 2px), radial-gradient(circle at 60% 70%, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px, 100px 100px'
      }} />
      <div className="relative z-10 flex items-center gap-2.5 text-sky-400 font-semibold text-xs uppercase tracking-wider">
        <TrendingUp size={18} /> Trend Alert
      </div>
      <p className="relative z-10 text-zinc-200 text-base font-medium leading-relaxed">
        You tend to choose higher calories in the evening. Try meal-prepping today to curb late cravings.
      </p>
    </motion.div>
  );
};
