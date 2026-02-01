'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';

export default function NotFound() {
  const [crashed, setCrashed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCrashed(true);
    }, 2500); // Crash after 2.5s launch
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-full bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Stars Background */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full opacity-50"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2}px`,
              height: `${Math.random() * 2}px`,
            }}
          />
        ))}
      </div>

      <div className="z-10 text-center relative w-full h-full flex flex-col items-center justify-center">
        
        {/* Spaceship Animation */}
        {!crashed && (
          <motion.div
            initial={{ y: 200 }}
            animate={{ 
              y: -300, 
              x: [0, -5, 5, -5, 0], // Shake
              rotate: [0, 0, 0, 720] // Spin out
            }}
            transition={{ 
              y: { duration: 2.5, ease: "easeIn" },
              x: { repeat: Infinity, duration: 0.1 },
              rotate: { delay: 1.5, duration: 1 }
            }}
            className="mb-10 relative"
          >
            {/* Rocket Body */}
            <svg width="60" height="100" viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 0L50 30V80H10V30L30 0Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2"/>
              <circle cx="30" cy="40" r="10" fill="#3b82f6" />
              {/* Fins */}
              <path d="M10 70L0 90H10" fill="#ef4444" />
              <path d="M50 70L60 90H50" fill="#ef4444" />
              {/* Flame */}
              <motion.path 
                d="M20 80L30 100L40 80" 
                fill="#f59e0b"
                animate={{ d: ["M20 80L30 100L40 80", "M20 80L30 110L40 80", "M20 80L30 95L40 80"] }}
                transition={{ repeat: Infinity, duration: 0.1 }}
              />
            </svg>
          </motion.div>
        )}

        {/* Crash Explosion / 404 Reveal */}
        {crashed && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-9xl font-black font-heading text-red-500 mb-4 tracking-tighter">404</h1>
            <h2 className="text-2xl font-mono text-gray-300 mb-8 uppercase tracking-widest">
              MISSION FAILED: PAGE NOT FOUND
            </h2>
            <div className="w-full max-w-md h-1 bg-gray-800 rounded-full mb-8 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: "100%" }} 
                className="h-full bg-red-500" 
              />
            </div>
            
            <Link href="/">
              <MagneticButton className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform">
                RETURN TO BASE
              </MagneticButton>
            </Link>
          </motion.div>
        )}

      </div>
    </div>
  );
}
