import React from 'react';
import { 
  Home, 
  ClipboardList, 
  Utensils, 
  Users, 
  BarChart2, 
  Store, 
  Menu
} from 'lucide-react';

const NavItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean; onClick?: () => void }> = ({ icon, label, active, onClick }) => (
  <button onClick={onClick} className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all ${active ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20 font-medium' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'}`}>
    {icon}
    <span className="text-[14px]">{label}</span>
  </button>
);

export const SidebarNav: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
  return (
    <aside className="w-[260px] h-screen bg-white hidden md:flex flex-col border-r border-slate-100 overflow-y-auto scrollbar-hide py-6 px-4 shrink-0 z-10">
      {/* Brand Logo */}
      <div className="flex items-center gap-3 px-2 mb-8 select-none">
        <Menu className="text-slate-400" size={24} />
        <div className="bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/30">
          <Utensils className="text-white" size={20} />
        </div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Riday</h1>
      </div>

      {/* Main Nav */}
      <nav className="flex flex-col gap-1.5 flex-1">
        <NavItem icon={<Home size={20} />} label="Dashboard" active />
        <NavItem icon={<ClipboardList size={20} />} label="Eat List" />
        {/* On Menu Click => generate recommendations */}
        <NavItem onClick={onMenuClick} icon={<Utensils size={20} />} label="Menu" />
        <NavItem icon={<Users size={20} />} label="Customer" />
        <NavItem icon={<BarChart2 size={20} />} label="Analysis" />
        <NavItem icon={<Store size={20} />} label="Online Store" />
      </nav>
      
      {/* Bottom Profile Illustration */}
      <div className="mt-8 relative hidden lg:block">
         <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop" className="w-16 h-16 rounded-full border-4 border-white shadow-md mx-auto relative z-10 object-cover" alt="Chef avatar" />
         <div className="bg-sky-50 rounded-2xl p-4 pt-10 -mt-8 text-center border border-sky-100">
           <p className="text-xs font-semibold text-slate-700">Need Help?</p>
           <button className="text-[10px] text-sky-600 font-bold mt-1 uppercase tracking-wide">Contact Support</button>
         </div>
      </div>
    </aside>
  );
};
