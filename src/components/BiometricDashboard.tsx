import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Flame } from 'lucide-react';

export const BiometricDashboard = () => {
  const metrics = useMemo(() => {
    return {
      calories: { current: 1450, total: 2000 },
      hydration: 65, 
      streak: 12
    };
  }, []);

  const calPercent = Math.min((metrics.calories.current / metrics.calories.total) * 100, 100);

  return (
    <section 
      className="w-full flex flex-col md:flex-row gap-6 p-8 md:p-10 rounded-3xl bg-white shadow-elegant inner-shadow-soft"
      aria-label="Biometric Summary"
    >
      {/* Daily Fuel */}
      <div className="flex-1 flex flex-col gap-3" role="group" aria-label="Daily Fuel Progress">
        <div className="flex justify-between items-center text-sm font-medium">
          <span className="flex items-center gap-2 text-zinc-600">
            <Leaf size={18} className="text-emerald-500" aria-hidden="true" /> Fuel
          </span>
          <span className="text-zinc-950 font-semibold" aria-live="polite">{metrics.calories.current} / {metrics.calories.total} kcal</span>
        </div>
        <div className="h-2.5 w-full bg-zinc-200 rounded-full overflow-hidden" aria-hidden="true">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${calPercent}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="h-full bg-emerald-500 rounded-full"
          />
        </div>
      </div>

      {/* Hydration */}
      <div className="flex-1 flex flex-col gap-3 relative" role="group" aria-label="Hydration Level">
        <div className="flex justify-between items-center text-sm font-medium">
          <span className="flex items-center gap-2 text-zinc-600">
            <Droplets size={18} className="text-sky-500" aria-hidden="true" /> Hydration
          </span>
          <span className="text-zinc-950 font-semibold" aria-live="polite">{metrics.hydration}%</span>
        </div>
        <div className="h-2.5 w-full bg-zinc-200 rounded-full overflow-hidden relative" aria-hidden="true">
          <motion.div 
            className="absolute top-0 bottom-0 left-0 bg-sky-400 opacity-80 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${metrics.hydration}%` }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
          <motion.div 
            className="absolute top-0 bottom-0 left-0 bg-sky-200 opacity-50 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${metrics.hydration + 2}%` }}
            transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.1 }}
          />
        </div>
      </div>

      {/* Streak */}
      <div className="flex-1 flex items-center justify-between md:justify-center px-5 py-4 rounded-2xl bg-zinc-50 inner-shadow-soft" role="group" aria-label="Habit Streak">
        <div className="flex items-center gap-3 text-zinc-700 font-semibold text-sm md:flex-col md:gap-2">
          <Flame size={20} className="text-orange-400" aria-hidden="true" />
          <span>{metrics.streak} Day Streak</span>
        </div>
      </div>
    </section>
  );
};
