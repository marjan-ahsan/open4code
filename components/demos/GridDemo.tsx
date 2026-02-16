
import React, { useState } from 'react';

const GridDemo: React.FC = () => {
  const [columns, setColumns] = useState(3);
  const [gap, setGap] = useState(16);

  return (
    <div>
      <div className="flex flex-wrap gap-6 mb-6">
        <div className="space-y-2">
            <label htmlFor="columns" className="block text-sm font-medium text-gray-300">Columns: {columns}</label>
            <input type="range" id="columns" min="1" max="6" value={columns} onChange={(e) => setColumns(Number(e.target.value))} className="w-48 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" />
        </div>
        <div className="space-y-2">
            <label htmlFor="gap" className="block text-sm font-medium text-gray-300">Gap: {gap}px</label>
            <input type="range" id="gap" min="0" max="40" value={gap} onChange={(e) => setGap(Number(e.target.value))} className="w-48 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" />
        </div>
      </div>
      
      <div 
        className="w-full h-64 bg-white/5 rounded-lg p-4 transition-all" 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: `${gap}px`
        }}
      >
        {[...Array(6)].map((_, i) => (
           <div key={i} className="bg-[#2A4C7C] rounded text-white flex items-center justify-center font-bold text-xl">{i + 1}</div>
        ))}
      </div>
    </div>
  );
};

export default GridDemo;
