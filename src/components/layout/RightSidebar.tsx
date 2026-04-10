import React, { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { GoalSelector } from '../features/GoalSelector';
import { ImageUpload } from '../features/ImageUpload';
import { Plus, X } from 'lucide-react';

const miniData1 = [{ v: 10 }, { v: 25 }, { v: 15 }, { v: 40 }, { v: 30 }, { v: 60 }, { v: 90 }];
const miniData2 = [{ v: 40 }, { v: 30 }, { v: 50 }, { v: 25 }, { v: 60 }, { v: 45 }, { v: 80 }];

const MiniChartBase = ({ title, value, data, color }: any) => (
  <div className="flex items-center justify-between py-1 shrink-0">
    <div className="flex flex-col">
       <span className="text-[13px] font-semibold text-slate-500">{title}</span>
       <span className="text-2xl font-bold text-slate-800 tracking-tight">{value}</span>
    </div>
    <div className="w-[100px] h-[45px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <Area type="monotone" dataKey="v" stroke={color} strokeWidth={2.5} fill={color} fillOpacity={0.15} isAnimationActive={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export const RightSidebar: React.FC<{ goal: string, setGoal: any, onLogResult: any, eatList: {name:string, healthy:boolean}[], totalSpend: number }> = ({ goal, setGoal, onLogResult, eatList, totalSpend }) => {
  const [showModal, setShowModal] = useState(false);
  const [foodName, setFoodName] = useState('');
  const [isHealthy, setIsHealthy] = useState<'healthy' | 'unhealthy'>('healthy');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!foodName.trim()) return;
    onLogResult(isHealthy === 'healthy' ? 5 : -5, foodName, isHealthy === 'healthy');
    setFoodName('');
    setShowModal(false);
  };

  return (
    <aside className="flex flex-col gap-4 p-6 h-full border-l border-slate-100 bg-white relative">
      
      {/* Top Charts / Trackers */}
      <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 shrink-0">
        <MiniChartBase title="Total Spend on Food" value={`$${totalSpend.toFixed(2)}`} data={miniData1} color="#10b981" />
        <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">{eatList.length} total orders <span className="float-right text-sky-500 cursor-pointer normal-case tracking-normal">View Report</span></p>
        <div className="h-px w-full bg-slate-50 my-1" />
        <MiniChartBase title="Total Meals" value={eatList.length} data={miniData2} color="#3b82f6" />
        <div className="flex gap-2.5 mt-1">
           <span className="text-[10px] bg-sky-50 text-sky-600 px-3 py-1 rounded-full font-bold">Live</span>
           <span className="text-[10px] bg-purple-50 text-purple-600 px-3 py-1 rounded-full font-bold">4 Visitors</span>
           <span className="text-[10px] bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full font-bold">See Live View</span>
        </div>
      </div>

      <div className="px-1 mt-1 shrink-0">
        <GoalSelector goal={goal} setGoal={setGoal} />
      </div>
      
      <div className="px-1 -mt-1 shrink-0">
        <ImageUpload onLogResult={onLogResult} />
      </div>

      {/* Eat List + Add Button */}
      <div className="flex flex-col gap-3 mt-1 flex-1 min-h-0 overflow-hidden">
        <div className="flex items-center justify-between shrink-0">
          <h3 className="text-[15px] font-bold text-slate-800 tracking-tight">Eat List</h3>
          <button 
            onClick={() => setShowModal(true)}
            className="w-7 h-7 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all shadow-sm"
            aria-label="Add Food"
          >
            <Plus size={16} strokeWidth={3} />
          </button>
        </div>

        {/* Scrollable list constraint min-h-0 ensures it fits parent exactly */}
        <div className="flex flex-col border-l-2 border-slate-100 ml-2.5 pl-5 py-1 gap-6 relative overflow-y-auto min-h-0 pr-2 scrollbar-hide flex-1">
          
          {eatList.length === 0 && (
             <div className="text-sm text-slate-400 font-medium">No meals consumed yet. Add a meal!</div>
          )}

          {eatList.map((item, idx) => (
             <div key={idx} className="relative mt-1">
               <span className={`absolute -left-[27px] top-1 w-3 h-3 rounded-full border-2 border-white ring-1 ring-slate-100 shadow-sm ${item.healthy ? 'bg-emerald-500' : 'bg-red-500'}`} />
               <div className="flex items-start justify-between w-full">
                 <div className="flex flex-col">
                   <p className="text-[14px] text-slate-700 font-bold leading-snug">{item.name}</p>
                   <span className="text-[11px] text-slate-400 font-semibold mt-0.5">{item.healthy ? '+5 Score' : '-5 Score'}</span>
                 </div>
                 <span className="text-[10px] text-sky-600 font-bold bg-sky-50 px-2 py-1.5 rounded-md self-start uppercase tracking-wider">Consumed</span>
               </div>
             </div>
          ))}
        </div>
      </div>

      {/* Absolute Add Food Modal Native Overlay */}
      {showModal && (
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 rounded-3xl animate-in fade-in">
           <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-slate-100 w-full max-w-[280px]">
             <div className="flex justify-between items-center mb-5">
               <h4 className="text-[15px] font-bold text-slate-800">Add Meal</h4>
               <button type="button" onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600">
                 <X size={18} />
               </button>
             </div>

             <div className="flex flex-col gap-4">
               <div>
                 <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 block">Food Name</label>
                 <input 
                   type="text" 
                   value={foodName} 
                   onChange={(e) => setFoodName(e.target.value)}
                   className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-medium focus:outline-none focus:border-sky-300 focus:ring-1 focus:ring-sky-300" 
                   placeholder="e.g. Avocado Toast"
                   autoFocus
                 />
               </div>
               
               <div>
                 <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 block">Health Rating</label>
                 <div className="flex gap-2">
                   <button 
                     type="button" 
                     onClick={() => setIsHealthy('healthy')}
                     className={`flex-1 py-2 text-xs font-bold rounded-xl border ${isHealthy === 'healthy' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-white border-slate-200 text-slate-500'}`}
                   >
                     Healthy
                   </button>
                   <button 
                     type="button"
                     onClick={() => setIsHealthy('unhealthy')}
                     className={`flex-1 py-2 text-xs font-bold rounded-xl border ${isHealthy === 'unhealthy' ? 'bg-red-50 border-red-200 text-red-700' : 'bg-white border-slate-200 text-slate-500'}`}
                   >
                     Unhealthy
                   </button>
                 </div>
               </div>

               <button 
                 type="submit" 
                 disabled={!foodName.trim()}
                 className="w-full bg-sky-500 text-white font-bold text-[13px] py-3 rounded-xl mt-2 hover:bg-sky-600 disabled:opacity-50 transition-colors"
               >
                 Log Meal
               </button>
             </div>
           </form>
        </div>
      )}

    </aside>
  );
};
