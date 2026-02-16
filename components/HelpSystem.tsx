import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuestion, FaTimes } from 'react-icons/fa';
import { View } from '../App';

interface HelpSystemProps {
  currentView: View;
}

const helpContent: Record<View, { title: string; tips: string[] }> = {
  landing: {
    title: 'Welcome to Open4Code!',
    tips: [
      'Scroll down to explore all the features we offer.',
      'Click "Start Learning" to dive into our course catalog.',
      'The 3D cube showcases the technologies you can learn.',
    ],
  },
  explorer: {
    title: 'Course Explorer',
    tips: [
      'Use the search bar to filter courses by title or description.',
      'Click any course card to begin learning.',
      'Use filters to narrow by category and difficulty.',
    ],
  },
  course: {
    title: 'Learning Interface',
    tips: [
      'Use the sidebar to navigate between modules and lessons.',
      'Your progress is saved automatically in your browser.',
      'Click a lesson in the skill tree to view its content.',
    ],
  },
  about: {
    title: 'About Open4Code',
    tips: [
      'Learn about the mission that drives our platform.',
      'Discover the technologies we use.',
      'Find out how you can contribute.',
    ]
  },
  changelog: {
    title: 'Changelog',
    tips: [
      'A history of all new features, improvements, and bug fixes.',
      'Check back here to see what\'s new!',
    ]
  }
};

const HelpSystem: React.FC<HelpSystemProps> = ({ currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const content = helpContent[currentView];

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 bg-surface border border-border rounded-xl flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-text-tertiary transition-colors text-sm shadow-sm"
          aria-label="Toggle Help"
        >
          {isOpen ? <FaTimes /> : <FaQuestion />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="fixed bottom-[72px] right-5 z-50 w-72 bg-surface border border-border rounded-xl shadow-lg p-5"
          >
            <h3 className="font-heading text-sm font-bold text-text-primary mb-3">{content.title}</h3>
            <ul className="space-y-2">
              {content.tips.map((tip, index) => (
                <li key={index} className="text-xs text-text-secondary leading-relaxed flex items-start gap-2">
                  <span className="text-text-tertiary mt-1">·</span>
                  {tip}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HelpSystem;