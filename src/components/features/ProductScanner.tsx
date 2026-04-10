import React, { useState, useMemo } from 'react';
import { Search, AlertTriangle } from 'lucide-react';

// O(n) filterable list
const MOCK_PRODUCTS = [
  { keyword: 'maggi', warning: 'High Sodium', healthyAlt: 'Whole wheat noodles' },
  { keyword: 'coke', warning: 'High Sugar', healthyAlt: 'Sparkling water with lemon' },
  { keyword: 'chips', warning: 'High Saturated Fat', healthyAlt: 'Air-popped popcorn' },
];

export const ProductScanner: React.FC = () => {
  const [query, setQuery] = useState('');

  // O(n) logic filter 
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
    <div className="flex flex-col gap-4 p-6 bg-white shadow-elegant rounded-3xl inner-shadow-soft">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-700">Product Scanner</h3>
      <div className="relative">
        <Search className="absolute left-4 top-4 text-zinc-400" size={18} />
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Keyword (e.g., Maggi)"
          className="w-full pl-12 pr-4 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/30 transition-all font-medium text-zinc-950"
          aria-label="Scan product by typing keyword"
        />
      </div>

      {alertResult && (
        <div className="mt-2 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3 inner-shadow-soft" aria-live="assertive">
           <AlertTriangle className="text-red-600 shrink-0 mt-0.5" size={18} />
           <div className="flex flex-col gap-1">
             <span className="text-sm text-red-800 font-bold">Warning: {alertResult.warning}</span>
             <span className="text-xs text-red-700 font-medium">Try: {alertResult.healthyAlt}</span>
           </div>
        </div>
      )}
    </div>
  );
};
