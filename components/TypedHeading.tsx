import React from 'react';
import { useTyped } from '../hooks/useTyped';

const TypedHeading: React.FC = () => {
  const strings = [
    'Learn to Code, Visually.',
    'Build Real-World Projects.',
    'Master In-Demand Skills.',
    'Start Your Journey Today.'
  ];
  const typedText = useTyped(strings);

  return (
    <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-gradient bg-gradient-to-b from-text-primary to-text-tertiary min-h-[100px] md:min-h-[190px] lg:min-h-[220px]">
      {typedText}
      <span className="animate-blink opacity-100 text-primary">|</span>
    </h1>
  );
};

export default TypedHeading;