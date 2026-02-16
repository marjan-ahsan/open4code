
import React, { useState } from 'react';

type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';

const FlexboxDemo: React.FC = () => {
  const [justifyContent, setJustifyContent] = useState<JustifyContent>('flex-start');
  const [alignItems, setAlignItems] = useState<AlignItems>('stretch');

  const justifyOptions: JustifyContent[] = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'];
  const alignOptions: AlignItems[] = ['stretch', 'flex-start', 'flex-end', 'center'];

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300 mb-2">justify-content</label>
        <div className="flex flex-wrap gap-2">
          {justifyOptions.map(opt => (
            <button key={opt} onClick={() => setJustifyContent(opt)} className={`px-3 py-1 text-sm rounded-md transition-colors ${justifyContent === opt ? 'bg-[#36A18B] text-white' : 'bg-white/10 hover:bg-white/20'}`}>
              {opt}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-300 mb-2">align-items</label>
        <div className="flex flex-wrap gap-2">
          {alignOptions.map(opt => (
            <button key={opt} onClick={() => setAlignItems(opt)} className={`px-3 py-1 text-sm rounded-md transition-colors ${alignItems === opt ? 'bg-[#36A18B] text-white' : 'bg-white/10 hover:bg-white/20'}`}>
              {opt}
            </button>
          ))}
        </div>
      </div>
      
      <div className="w-full h-64 bg-white/5 rounded-lg p-2 transition-all" style={{ display: 'flex', justifyContent, alignItems }}>
        <div className="bg-[#E16A54] w-1/4 p-4 rounded text-white text-center font-bold">1</div>
        <div className="bg-[#F39E60] w-1/4 p-4 rounded text-white text-center font-bold">2</div>
        <div className="bg-[#F4D35E] w-1/4 p-4 rounded text-white text-center font-bold">3</div>
      </div>
    </div>
  );
};

export default FlexboxDemo;
