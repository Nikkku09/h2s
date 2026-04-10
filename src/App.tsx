import { useState, useMemo, useCallback } from 'react';
import { SidebarNav } from './components/layout/SidebarNav';
import { TopNavbar } from './components/layout/TopNavbar';
import { MetricCardsRow } from './components/layout/MetricCardsRow';
import { MainChartArea } from './components/layout/MainChartArea';
import { FavouriteItems } from './components/layout/FavouriteItems';
import { RightSidebar } from './components/layout/RightSidebar';

import { mealOptions } from './data/meals';

function App() {
  // Existing Sliders & Variables
  const [energy, setEnergy] = useState<number>(50);
  const [hunger, setHunger] = useState<number>(50);
  const [time, setTime] = useState<number>(50);
  const [globalGoal, setGlobalGoal] = useState<string>('healthy-living');

  // New Food & Health specific tracking
  const [healthHistory, setHealthHistory] = useState([
    { name: 'Mon', value: 60 },
    { name: 'Tue', value: 62 },
    { name: 'Wed', value: 58 },
    { name: 'Thu', value: 65 }
  ]);
  const currentHealth = healthHistory[healthHistory.length - 1].value;
  
  const [eatList, setEatList] = useState<{name: string, healthy: boolean}[]>([
    { name: 'Salad', healthy: true },
    { name: 'Greek Yogurt', healthy: true }
  ]);
  const [totalSpend, setTotalSpend] = useState<number>(145.50);
  const [suggestionOverride, setSuggestionOverride] = useState<any>(null);

  // Recommendations Logic - rule based on input, or randomly shuffled on explicit "Menu" click
  const currentSuggestion = useMemo(() => {
    if (suggestionOverride) return suggestionOverride;
    // Fast O(n) proximity search simulation
    let best = mealOptions[0];
    let minD = Infinity;
    for (let m of mealOptions) {
      let d = Math.abs(m.energyTarget - energy) + Math.abs(m.hungerTarget - hunger);
      if (d < minD) { minD = d; best = m; }
    }
    return best;
  }, [energy, hunger, suggestionOverride]);

  const handleMenuClick = useCallback(() => {
    // Generate recommendation (rule based / random slice) on 'Menu' click
    const randomOption = mealOptions[Math.floor(Math.random() * mealOptions.length)];
    setSuggestionOverride(randomOption);
  }, []);

  // Update dynamic health bounds and list tracking
  const handleLogResult = useCallback((scoreDelta: number, foodName: string, isHealthy: boolean) => {
    setHealthHistory(prev => {
      const last = prev[prev.length - 1];
      return [...prev, { 
        name: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}), 
        value: Math.min(Math.max(last.value + scoreDelta, 0), 100) 
      }];
    });
    setEatList(prev => [{name: foodName, healthy: isHealthy}, ...prev]);
    setTotalSpend(prev => prev + (Math.random() * 15 + 5)); // Add mock $ spend
  }, []);

  return (
    <div className="h-screen w-full bg-[#f8f9fc] text-slate-800 selection:bg-orange-200 selection:text-orange-900 font-sans flex text-sm overflow-hidden">
      <SidebarNav onMenuClick={handleMenuClick} />
      
      <main className="flex-1 flex flex-col h-full relative overflow-hidden">
        <TopNavbar />
        
        <div className="flex-1 flex flex-col xl:flex-row w-full h-full overflow-hidden">
          <div className="flex-1 p-6 lg:p-8 flex flex-col gap-6 w-full lg:max-w-5xl mx-auto overflow-y-auto bg-[#f8f9fc]">
             <MetricCardsRow 
                healthScore={currentHealth} 
                totalSpend={totalSpend}
                totalMeals={eatList.length}
                onMenuClick={handleMenuClick} 
             />
             <MainChartArea 
                healthHistory={healthHistory}
                energy={energy} setEnergy={setEnergy}
                hunger={hunger} setHunger={setHunger}
                time={time} setTime={setTime}
             />
             <FavouriteItems suggestion={currentSuggestion} />
          </div>

          <div className="w-full xl:w-[320px] 2xl:w-[350px] shrink-0 border-l border-slate-100 bg-white flex flex-col h-full overflow-hidden">
             <RightSidebar 
                goal={globalGoal} 
                setGoal={setGlobalGoal}
                onLogResult={handleLogResult}
                eatList={eatList}
                totalSpend={totalSpend}
             />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
