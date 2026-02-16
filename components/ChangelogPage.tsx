import React from 'react';
import Footer from './Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CHANGELOG_DATA } from '../data/changelog';
import { Change } from '../types';
import HeroSection from './HeroSection';

const ChangeTag: React.FC<{ type: Change['type'] }> = ({ type }) => {
  const typeClasses = {
    Feature: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    Improvement: 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400',
    Fix: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  };

  return (
    <span className={`px-2 py-0.5 text-[11px] font-semibold rounded-md ${typeClasses[type]}`}>
      {type}
    </span>
  );
};

const ChangelogEntryCard: React.FC<{ entry: typeof CHANGELOG_DATA[0], index: number }> = ({ entry, index }) => {
  const ref = useScrollAnimation(index * 150);

  return (
    <div ref={ref} className="opacity-0 translate-y-5 transition-all duration-700 ease-out relative pl-6 border-l-2 border-border">
      {/* Timeline dot */}
      <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary"></div>

      <div className="flex items-center gap-3 mb-3">
        <span className="font-heading text-lg font-bold text-text-primary">v{entry.version}</span>
        <span className="text-xs text-text-tertiary">{entry.date}</span>
      </div>

      <div className="space-y-2.5">
        {entry.changes.map((change, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex-shrink-0 pt-0.5">
              <ChangeTag type={change.type} />
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              {change.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ChangelogPage: React.FC = () => {
  return (
    <div className="bg-bg text-text-primary pt-20">

      <HeroSection
        title="Changelog"
        subtitle="See the latest features, improvements, and bug fixes for the Open4Code platform."
      />

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto space-y-12">
          {CHANGELOG_DATA.map((entry, index) => (
            <ChangelogEntryCard key={entry.version} entry={entry} index={index} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChangelogPage;
