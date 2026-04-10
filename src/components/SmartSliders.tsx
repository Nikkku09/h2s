import React from 'react';
import { Battery, Utensils, Clock } from 'lucide-react';

interface SmartSlidersProps {
  energy: number;
  setEnergy: (val: number) => void;
  hunger: number;
  setHunger: (val: number) => void;
  time: number;
  setTime: (val: number) => void;
}

interface SliderRowProps {
  id: string;
  label: string;
  value: number;
  setValue: (val: number) => void;
  icon: React.ReactNode;
}

const SliderRow: React.FC<SliderRowProps> = ({ id, label, value, setValue, icon }) => {
  return (
    <div className="flex flex-col gap-3 w-full group">
      <div className="flex justify-between items-center text-sm font-medium">
        <label htmlFor={id} className="flex items-center gap-2.5 text-zinc-700 transition-colors group-focus-within:text-zinc-950">
          <span className="text-sky-500" aria-hidden="true">{icon}</span>
          <span>{label}</span>
        </label>
        <span className="text-zinc-950 font-semibold tabular-nums" aria-live="polite">{value}%</span>
      </div>
      <input 
        id={id}
        type="range" 
        min="0" 
        max="100" 
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-3 bg-zinc-200 rounded-full appearance-none cursor-pointer accent-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30 transition-all slider-thumb"
        aria-label={`${label} level from 0 to 100`}
        style={{
          background: `linear-gradient(to right, #e4e4e7 0%, #e4e4e7 ${value}%, #e4e4e7 ${value}%, #e4e4e7 100%)`
        }}
      />
    </div>
  );
};

export const SmartSliders: React.FC<SmartSlidersProps> = ({
  energy, setEnergy, hunger, setHunger, time, setTime
}) => {
  return (
    <section 
      className="w-full flex flex-col gap-8 p-8 md:p-10 rounded-3xl bg-white shadow-elegant inner-shadow-soft"
      aria-label="Biometric State Inputs"
    >
      <h2 className="text-xl font-semibold tracking-tight text-zinc-950">Current State</h2>
      
      <SliderRow id="energy-slider" label="Energy Level" value={energy} setValue={setEnergy} icon={<Battery size={18} />} />
      <SliderRow id="hunger-slider" label="Hunger Intensity" value={hunger} setValue={setHunger} icon={<Utensils size={18} />} />
      <SliderRow id="time-slider" label="Time Availability" value={time} setValue={setTime} icon={<Clock size={18} />} />
    </section>
  );
};
