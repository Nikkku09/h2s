import React from 'react';
import type { MealOption } from '../../data/meals';
import { mealOptions } from '../../data/meals';
import { Star } from 'lucide-react';

export const FavouriteItems: React.FC<{ suggestion: MealOption }> = ({ suggestion }) => {
  // Show the suggested item first, then 2 others to fulfill 3-card layout identically
  const displayItems = [
    suggestion, 
    ...mealOptions.filter(m => m.id !== suggestion.id).slice(0, 2)
  ];

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-5 relative">
      <h2 className="text-xl font-bold text-slate-800 tracking-tight">Favourite Items <span className="text-xs text-sky-500 ml-2 font-semibold px-2 py-1 bg-sky-50 rounded-md">Smart Suggested</span></h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {displayItems.map((item, idx) => (
           <div key={item.id} className={`flex flex-col gap-3 group cursor-pointer ${idx === 0 ? 'ring-2 ring-sky-100 rounded-xl p-1 bg-sky-50/30' : ''}`}>
             <div className="w-full aspect-[4/3] rounded-xl overflow-hidden relative">
               <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               {idx === 0 && <span className="absolute top-2 left-2 bg-sky-500 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-md uppercase tracking-wide">Top Match</span>}
             </div>
             <div className="px-1">
               <h3 className="font-bold text-slate-800 text-[15px] leading-tight group-hover:text-sky-600 transition-colors">{item.name}</h3>
               <div className="flex items-center gap-1.5 mt-1.5">
                 <div className="flex text-amber-400">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="#e2e8f0" />
                 </div>
                 <span className="text-[11px] text-slate-400 font-semibold select-none">({item.reviews} Review)</span>
               </div>
             </div>
           </div>
        ))}
      </div>
    </div>
  );
};
