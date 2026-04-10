import React from 'react';
import { motion } from 'framer-motion';

export const GamifiedScore: React.FC<{ score: number }> = ({ score }) => {
  const cappedScore = Math.min(Math.max(score, 0), 100);
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (cappedScore / 100) * circumference;

  return (
    <section 
      className="w-full p-8 md:p-10 bg-white shadow-elegant rounded-3xl inner-shadow-soft"
      aria-label="Gamified Health Progress"
    >
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Circular Gauge */}
        <div className="relative w-40 h-40">
          <svg
            className="absolute inset-0 transform -rotate-90"
            width="160"
            height="160"
            viewBox="0 0 160 160"
            aria-hidden="true"
          >
            {/* Background circle */}
            <circle
              cx="80"
              cy="80"
              r="45"
              fill="none"
              stroke="#e4e4e7"
              strokeWidth="8"
            />
            {/* Progress circle */}
            <motion.circle
              cx="80"
              cy="80"
              r="45"
              fill="none"
              stroke="url(#gaugeGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1, ease: 'easeOut' }}
              strokeDasharray={circumference}
            />
            <defs>
              <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-zinc-950">{cappedScore}</div>
              <div className="text-xs text-zinc-400 font-semibold tracking-wide uppercase">/ 100</div>
            </motion.div>
            <div className="text-xs text-zinc-500 font-semibold tracking-wide uppercase mt-2">Health Score</div>
          </div>
        </div>

        {/* Label */}
        <div className="text-center">
          <p className="text-sm text-zinc-600 font-medium">
            {cappedScore >= 80 && "Outstanding wellness journey"}
            {cappedScore >= 60 && cappedScore < 80 && "Strong progress keeps your momentum"}
            {cappedScore >= 40 && cappedScore < 60 && "Solid foundation to build upon"}
            {cappedScore < 40 && "Start logging to unlock your potential"}
          </p>
        </div>
      </div>
    </section>
  );
};
