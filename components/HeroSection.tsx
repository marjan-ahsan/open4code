
import React from 'react';

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="py-16 md:py-24 text-center relative overflow-hidden noise">
      <div className="container mx-auto px-6 relative z-10">
        {typeof title === 'string' ? (
          <h1 className="font-heading text-4xl md:text-5xl font-black tracking-tight mb-4 text-text-primary">
            {title}
          </h1>
        ) : (
          title
        )}
        <p className="text-base md:text-lg text-text-secondary max-w-xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
