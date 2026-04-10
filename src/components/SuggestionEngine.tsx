import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, UtensilsCrossed, CheckCircle } from 'lucide-react';
import type { MealOption } from '../data/meals';

interface SuggestionEngineProps {
  suggestion: MealOption;
}

export const SuggestionEngine: React.FC<SuggestionEngineProps> = ({ suggestion }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <section 
      className="w-full p-8 md:p-10 mt-2 rounded-3xl bg-white shadow-elegant inner-shadow-soft relative flex flex-col"
      aria-live="polite"
      aria-atomic="true"
    >
      <header className="flex justify-between items-center mb-8">
        <h2 className="text-xs text-sky-600 font-bold tracking-widest uppercase">Precision Recommendation</h2>
        
        <div className="relative">
          <button 
            className="text-zinc-400 hover:text-sky-600 hover:bg-sky-50 transition-colors p-1.5 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500/30"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onFocus={() => setShowTooltip(true)}
            onBlur={() => setShowTooltip(false)}
            aria-label="Why this recommendation?"
            aria-expanded={showTooltip}
          >
            <Info size={18} />
          </button>
          
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.2 }}
                className="absolute top-10 right-0 bg-zinc-950 text-zinc-100 text-sm p-4 rounded-2xl shadow-premium z-20 w-[260px] text-left border border-zinc-800"
                role="tooltip"
              >
                <strong className="block text-sky-400 font-semibold mb-1.5 text-xs uppercase tracking-wider">The Logic</strong>
                <span className="leading-relaxed text-zinc-300">{suggestion.whyThis}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={suggestion.id}
          initial={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="p-5 md:p-6 bg-sky-50 text-sky-600 rounded-3xl inner-shadow-soft" aria-hidden="true">
              <UtensilsCrossed size={36} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl md:text-4xl font-semibold text-zinc-950 tracking-tight leading-tight">{suggestion.name}</h3>
              <p className="text-zinc-600 font-medium text-lg">{suggestion.calories} kcal</p>
            </div>
          </div>
          
          <button 
            className="w-full py-4 px-6 text-base md:text-lg text-white font-semibold rounded-2xl gradient-sky-to-blue hover:shadow-lg hover:shadow-sky-500/20 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-sky-500/30 transition-all flex justify-center items-center gap-3"
            aria-label={`Log ${suggestion.name} as complete`}
          >
            <CheckCircle size={22} /> Log Recommendation
          </button>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
