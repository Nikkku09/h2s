import React, { useState } from 'react';
import { Camera } from 'lucide-react';

interface ImageUploadProps {
  onLogResult: (scoreDelta: number, category: string) => void;
}

const MOCK_DB: Record<string, { label: string; calories: number; healthy: boolean; category: string }> = {
  'pizza': { label: 'Unhealthy', calories: 850, healthy: false, category: 'High Carb' },
  'salad': { label: 'Healthy', calories: 220, healthy: true, category: 'High Fiber' },
  'chicken': { label: 'Healthy', calories: 350, healthy: true, category: 'High Protein' },
  'burger': { label: 'Unhealthy', calories: 950, healthy: false, category: 'High Fat' },
};

export const ImageUpload: React.FC<ImageUploadProps> = ({ onLogResult }) => {
  const [fileName, setFileName] = useState('');
  const [result, setResult] = useState<{label: string, category: string} | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const name = file.name.toLowerCase();
      let foundKey = 'salad'; 
      for (const key of Object.keys(MOCK_DB)) {
        if (name.includes(key)) {
          foundKey = key;
          break;
        }
      }
      
      const data = MOCK_DB[foundKey];
      setFileName(file.name);
      setResult({ label: data.label, category: data.category });
      onLogResult(data.healthy ? 20 : -20, data.category);
    }
  };

  return (
    <div className="flex flex-col gap-2.5 mt-1">
      <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Image-to-Insight</h3>
      <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 focus-within:ring-2 focus-within:ring-sky-500 transition-all group">
        <Camera className="text-slate-300 group-hover:text-sky-500 mb-2 transition-colors" size={24} />
        <span className="text-[13px] text-slate-500 font-semibold">Tap to upload meal photo</span>
        <input type="file" accept="image/*" className="sr-only" onChange={handleUpload} aria-label="Upload meal photo" />
      </label>
      
      {result && (
        <div className="mt-1 p-3 bg-slate-50 rounded-xl flex justify-between items-center border border-slate-100" aria-live="polite">
          <span className="text-xs text-slate-700 font-bold truncate max-w-[120px]">{fileName}</span>
          <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md ${result.label === 'Healthy' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
            {result.label === 'Healthy' ? 'Healthy' : 'Unhealthy'}
          </span>
        </div>
      )}
    </div>
  );
}
