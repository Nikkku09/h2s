import React from 'react';
import { Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

export const SmartTipBox: React.FC<{ lastCategory: string | null }> = ({ lastCategory }) => {
  let tip = "Log a meal to receive real-time intelligence.";
  if (lastCategory === 'High Carb') tip = "Pair with protein for better glucose response.";
  if (lastCategory === 'High Fat') tip = "Balance it out with fiber-rich veggies on your next meal.";
  if (lastCategory === 'High Sodium') tip = "Drink extra water to help flush the sodium load.";
  if (lastCategory === 'High Protein') tip = "Great job! Make sure to get complex carbs if exercising.";
  if (lastCategory === 'High Fiber') tip = "Excellent choice for digestion and sustained energy.";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-3 p-6 bg-sky-50 shadow-elegant rounded-3xl inner-shadow-soft" 
      aria-live="polite"
    >
      <div className="flex items-center gap-2.5 text-sky-700 font-semibold text-xs uppercase tracking-wider">
        <Lightbulb size={18} className="text-sky-600" /> Smart Tip
      </div>
      <p className="text-sky-950 text-base font-medium leading-relaxed">{tip}</p>
    </motion.div>
  );
};
