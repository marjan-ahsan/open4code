
import React from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      className="fixed inset-0 bg-[#0F0F12] flex flex-col items-center justify-center z-[100]"
    >
      <div className="relative flex items-center justify-center">
        <motion.div
          className="w-10 h-10 border border-zinc-700 rounded-lg"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute w-6 h-6 border border-primary rounded"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3 } }}
        className="mt-6 text-[11px] font-medium tracking-[0.3em] uppercase text-zinc-500"
      >
        Open4Code
      </motion.p>
    </motion.div>
  );
};

export default Preloader;