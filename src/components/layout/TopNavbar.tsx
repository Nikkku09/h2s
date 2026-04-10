import React, { useState, useMemo } from 'react';
import { Search, Bell, Mail, Settings, AlertTriangle } from 'lucide-react';
import { TimeHeader } from '../features/TimeHeader';

// O(n) mock mapping to fulfill ProductScanner logic inside top bar
const MOCK_PRODUCTS = [
  { keyword: 'maggi', warning: 'High Sodium', healthyAlt: 'Whole wheat noodles' },
  { keyword: 'coke', warning: 'High Sugar', healthyAlt: 'Sparkling water with lemon' },
  { keyword: 'chips', warning: 'High Saturated Fat', healthyAlt: 'Air-popped popcorn' },
];

export const TopNavbar: React.FC = () => {
  const [query, setQuery] = useState('');
  
  // Product scanner logic executing directly via the nav search
  const alertResult = useMemo(() => {
    if (query.trim().length < 3) return null;
    const lowerQuery = query.toLowerCase();
    for (let i = 0; i < MOCK_PRODUCTS.length; i++) {
        if (lowerQuery.includes(MOCK_PRODUCTS[i].keyword)) {
            return MOCK_PRODUCTS[i];
        }
    }
    return null;
  }, [query]);

  return (
    <header className="h-[80px] bg-[#f8f9fc] border-b border-slate-100 px-6 lg:px-8 flex items-center justify-between z-20 shrink-0">
      
      {/* Search mapped directly to Product Scanner functionality */}
      <div className="relative w-full max-w-[320px]">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Search product health..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-white border border-slate-100 placeholder:text-slate-400 text-slate-700 text-sm py-3 pl-11 pr-4 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all font-medium"
          aria-label="Search"
        />
        
        {/* Absolute positioned scanning alert */}
        {alertResult && (
          <div className="absolute top-14 left-0 w-full p-4 bg-white border border-red-100 shadow-[0_10px_40px_-10px_rgba(239,68,68,0.2)] rounded-2xl flex items-start gap-3 z-50 animate-in fade-in slide-in-from-top-2">
            <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={18} />
            <div className="flex flex-col gap-0.5">
              <span className="text-[13px] text-red-700 font-bold">Warning: {alertResult.warning}</span>
              <span className="text-[12px] text-slate-600 font-medium">Try: {alertResult.healthyAlt}</span>
            </div>
          </div>
        )}
      </div>

      {/* Right Icons & Profile */}
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-3">
          <button className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center hover:bg-purple-100 transition-colors">
            <ScanIcon size={18} />
          </button>
          <div className="relative">
            <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center hover:bg-blue-100 transition-colors">
              <Bell size={18} />
            </button>
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-[#f8f9fc]"></span>
          </div>
          <div className="relative">
            <button className="w-10 h-10 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center hover:bg-sky-100 transition-colors">
              <Mail size={18} />
            </button>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-sky-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-[#f8f9fc]">5</span>
          </div>
          <button className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center hover:bg-orange-100 transition-colors">
            <Settings size={18} />
          </button>
        </div>

        {/* Profile mapping TimeHeader greeting */}
        <div className="flex items-center gap-3 bg-white pl-4 pr-1.5 py-1.5 rounded-full shadow-sm border border-slate-100 cursor-pointer hover:shadow-md transition-shadow">
          <TimeHeader />
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop" alt="Profile" className="w-9 h-9 rounded-full object-cover" />
        </div>
      </div>

    </header>
  );
};

const ScanIcon = ({size}: {size: number}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
  </svg>
)
