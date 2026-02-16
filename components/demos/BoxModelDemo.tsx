
import React, { useState } from 'react';

const BoxModelDemo: React.FC = () => {
  const [padding, setPadding] = useState(20);
  const [border, setBorder] = useState(10);
  const [margin, setMargin] = useState(30);

  return (
    <div className="flex flex-col md:flex-row items-center justify-around gap-8">
      {/* Controls */}
      <div className="w-full md:w-1/3 space-y-4">
        <div className="space-y-2">
          <label htmlFor="margin" className="block text-sm font-medium text-gray-300">Margin: {margin}px</label>
          <input type="range" id="margin" min="0" max="50" value={margin} onChange={(e) => setMargin(Number(e.target.value))} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" />
        </div>
        <div className="space-y-2">
          <label htmlFor="border" className="block text-sm font-medium text-gray-300">Border: {border}px</label>
          <input type="range" id="border" min="0" max="20" value={border} onChange={(e) => setBorder(Number(e.target.value))} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" />
        </div>
        <div className="space-y-2">
          <label htmlFor="padding" className="block text-sm font-medium text-gray-300">Padding: {padding}px</label>
          <input type="range" id="padding" min="0" max="50" value={padding} onChange={(e) => setPadding(Number(e.target.value))} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" />
        </div>
      </div>
      
      {/* Visualization */}
      <div className="w-full md:w-2/3 flex items-center justify-center p-4">
        <div className="bg-[#E16A54]/30" style={{ margin: `${margin}px`, transition: 'margin 0.2s' }}>
          <div className="bg-[#F39E60]/40" style={{ border: `${border}px solid #F39E60`, transition: 'border 0.2s' }}>
            <div className="bg-[#36A18B]/50" style={{ padding: `${padding}px`, transition: 'padding 0.2s' }}>
              <div className="bg-white/10 p-8 text-center text-white">
                Content
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxModelDemo;
