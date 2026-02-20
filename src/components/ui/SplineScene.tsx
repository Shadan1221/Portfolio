'use client';

import Spline from '@splinetool/react-spline';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplineScene() {
  const [isMounted, setIsMounted] = useState(false);
  const [showDialogue, setShowDialogue] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Delay slightly for dramatic effect
    const timer = setTimeout(() => setShowDialogue(true), 1000);
    const hideTimer = setTimeout(() => setShowDialogue(false), 4000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isMounted) {
    return null; 
  }

  return (
    <div className="relative w-full h-full">
      <Spline scene="https://prod.spline.design/8BCVUmnphjWTmHbm/scene.splinecode" />
      
      <AnimatePresence>
        {showDialogue && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute -top-12 right-4 md:-top-16 md:right-10 bg-white text-black px-3 py-1.5 md:px-4 md:py-2 rounded-xl rounded-br-none border-2 border-black font-mono text-[10px] md:text-sm font-bold shadow-lg z-50 pointer-events-none"
          >
            HI... I AM SHADAN'S BOT
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
