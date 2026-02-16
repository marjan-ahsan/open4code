
import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCheckCircle } from 'react-icons/fa';

interface CelebrationProps {
  title?: string;
  message?: string;
  onClose?: () => void;
}

const Celebration: React.FC<CelebrationProps> = ({ title = "Amazing Work!", message = "You've mastered this milestone.", onClose }) => {
  const particles = Array.from({ length: 20 });

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto"
        onClick={onClose}
      />

      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, scale: 0, rotate: 0 }}
          animate={{
            x: (Math.random() - 0.5) * 600,
            y: (Math.random() - 0.5) * 600 - 150,
            scale: [0, 1, 0.5],
            rotate: Math.random() * 360,
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 1.8, ease: "easeOut", delay: Math.random() * 0.2 }}
          className="absolute w-2 h-2 rounded-sm"
          style={{
            backgroundColor: ['#E16A54', '#36A18B', '#F4D35E', '#A1A1AA', '#3B82F6'][i % 5]
          }}
        />
      ))}

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ duration: 0.2 }}
        className="relative bg-surface border border-border p-8 rounded-xl text-center max-w-sm mx-4 pointer-events-auto"
      >
        <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-5">
          <FaTrophy className="text-white text-2xl" />
        </div>

        <h2 className="font-heading text-xl font-bold mb-2 text-text-primary">{title}</h2>
        <p className="text-sm text-text-secondary mb-6">{message}</p>

        <button
          onClick={onClose}
          className="w-full py-2.5 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <FaCheckCircle /> Continue
        </button>
      </motion.div>
    </div>
  );
};

export default Celebration;
