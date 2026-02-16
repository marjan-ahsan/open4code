import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiPython } from 'react-icons/si';

const TechCube: React.FC = () => {
  const size = '--size';

  return (
    <div className="cube-scene w-44 h-44 md:w-56 md:h-56">
      <div className="cube-container">
        <div className="cube-face" style={{ transform: `rotateY(0deg) translateZ(var(${size}))` }}>
          <SiHtml5 className="text-5xl md:text-7xl text-zinc-400 dark:text-zinc-500" />
        </div>
        <div className="cube-face" style={{ transform: `rotateY(180deg) translateZ(var(${size}))` }}>
          <SiNodedotjs className="text-5xl md:text-7xl text-zinc-400 dark:text-zinc-500" />
        </div>
        <div className="cube-face" style={{ transform: `rotateY(90deg) translateZ(var(${size}))` }}>
          <SiCss3 className="text-5xl md:text-7xl text-zinc-400 dark:text-zinc-500" />
        </div>
        <div className="cube-face" style={{ transform: `rotateY(-90deg) translateZ(var(${size}))` }}>
          <SiReact className="text-5xl md:text-7xl text-zinc-400 dark:text-zinc-500" />
        </div>
        <div className="cube-face" style={{ transform: `rotateX(90deg) translateZ(var(${size}))` }}>
          <SiJavascript className="text-5xl md:text-7xl text-zinc-400 dark:text-zinc-500" />
        </div>
        <div className="cube-face" style={{ transform: `rotateX(-90deg) translateZ(var(${size}))` }}>
          <SiPython className="text-5xl md:text-7xl text-zinc-400 dark:text-zinc-500" />
        </div>
      </div>
      <style>{`
        .cube-scene .cube-face {
          --size: 5.5rem;
        }
        @media (min-width: 768px) {
          .cube-scene .cube-face {
            --size: 7rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TechCube;