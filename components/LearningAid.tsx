import React from 'react';
import { IconType } from 'react-icons';

interface LearningAidProps {
  Icon: IconType;
  title: string;
  items: string[];
  className?: string;
  iconClassName?: string;
}

const LearningAid: React.FC<LearningAidProps> = ({ Icon, title, items, className, iconClassName }) => {
  return (
    <div className={`p-5 rounded-xl border ${className}`}>
      <div className="flex items-center gap-2.5 mb-3">
        <span className={`text-base ${iconClassName}`}><Icon /></span>
        <h3 className="font-heading text-sm font-bold text-text-primary">{title}</h3>
      </div>
      <ul className="space-y-1.5">
        {items.map((item, index) => (
          <li key={index} className="text-xs text-text-secondary leading-relaxed flex items-start gap-2">
            <span className="text-text-tertiary mt-0.5">·</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearningAid;