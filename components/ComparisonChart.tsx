import React from 'react';
import { motion } from 'framer-motion';
import { COMPARISON_FEATURES } from '../constants';
import { FaCheck, FaTimes } from 'react-icons/fa';

const ComparisonGrid: React.FC = () => {
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-[1fr_80px_80px] sm:grid-cols-[1fr_100px_100px] bg-muted px-4 sm:px-6 py-3 border-b border-border">
        <span className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">Feature</span>
        <span className="text-xs font-semibold uppercase tracking-wider text-text-tertiary text-center">Open4Code</span>
        <span className="text-xs font-semibold uppercase tracking-wider text-text-tertiary text-center">Others</span>
      </div>

      {/* Rows */}
      {COMPARISON_FEATURES.map((item, index) => (
        <motion.div
          key={item.feature}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          className={`grid grid-cols-[1fr_80px_80px] sm:grid-cols-[1fr_100px_100px] px-4 sm:px-6 py-4 items-center ${index < COMPARISON_FEATURES.length - 1 ? 'border-b border-border' : ''
            } ${index % 2 === 0 ? 'bg-surface' : 'bg-bg'}`}
        >
          <div>
            <p className="text-sm font-medium text-text-primary">{item.feature}</p>
            <p className="text-xs text-text-tertiary mt-0.5 hidden sm:block">{item.description}</p>
          </div>
          <div className="flex justify-center">
            {item.open4code ? (
              <span className="w-6 h-6 rounded-md bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <span className="text-xs text-emerald-600 dark:text-emerald-400"><FaCheck /></span>
              </span>
            ) : (
              <span className="w-6 h-6 rounded-md bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <span className="text-xs text-red-500 dark:text-red-400"><FaTimes /></span>
              </span>
            )}
          </div>
          <div className="flex justify-center">
            {item.others ? (
              <span className="w-6 h-6 rounded-md bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <span className="text-xs text-emerald-600 dark:text-emerald-400"><FaCheck /></span>
              </span>
            ) : (
              <span className="w-6 h-6 rounded-md bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                <span className="text-xs text-zinc-400 dark:text-zinc-600"><FaTimes /></span>
              </span>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ComparisonGrid;