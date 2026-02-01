'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import SpaceBackground from '@/components/ui/SpaceBackground';
import ResumeSection from '@/components/ResumeSection';
import MagneticButton from '@/components/ui/MagneticButton';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX / width) - 0.5;
    const y = (clientY / height) - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const titleX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-50, 50]), { stiffness: 150, damping: 15 });
  const titleY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-50, 50]), { stiffness: 150, damping: 15 });

  return (
    <>
      <main 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="min-h-screen w-full relative overflow-hidden flex flex-col md:flex-row bg-black"
      >
        
        {/* Left Split: Light Side (Personal Branding) */}
        <motion.div 
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:w-5/12 bg-[#f4f4f4] text-black relative flex flex-col justify-between p-8 md:p-12 z-10"
        >
          
          {/* Logo / Personal Initial */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-12"
          >
            <MagneticButton className="w-20 h-20 bg-black flex items-center justify-center text-white font-heading font-bold text-4xl rounded-full shadow-2xl shadow-black/20">
              S
            </MagneticButton>
          </motion.div>

          {/* Core Focus Area - Refined Typography */}
          <div className="space-y-2 mb-24 md:mb-0 relative z-10">
             {['Cloud Infrastructure', 'Scalable Systems', 'Backend Engineering', 'Problem Solving'].map((item, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 1 + (i * 0.1), duration: 0.8 }}
                 className="flex items-center justify-between group cursor-pointer border-b border-black/10 py-6 hover:border-black transition-colors duration-500 hover:pl-4"
               >
                 <span className="font-heading font-bold text-xl tracking-tighter group-hover:text-black text-black transition-all uppercase">{item}</span>
                 <span className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity text-black">0{i+1}</span>
               </motion.div>
             ))}
          </div>

          <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
          </div>
        </motion.div>

        {/* Right Split: Dark Side (Cosmic Video) */}
        <motion.div 
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:w-7/12 bg-[#050505] relative flex flex-col justify-between p-8 md:p-12 overflow-hidden z-0"
        >
          <SpaceBackground />
          
          {/* Ambient Glows for Depth */}
          <div className="absolute top-1/4 right-0 w-[40rem] h-[40rem] bg-indigo-500/20 blur-[150px] rounded-full z-0 pointer-events-none mix-blend-screen animate-pulse-slow" />

          {/* Header Actions */}
          

          {/* Intro Text */}
          
          
           {/* Bottom Details */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1.4, duration: 0.8 }}
             className="relative z-10 mt-auto flex flex-col items-end gap-2 text-right"
           >
               <div className="flex items-center gap-2">
                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                 <span className="font-mono text-xs text-gray-400 uppercase tracking-[0.2em]">Status: Online</span>
               </div>
               <span className="font-mono text-sm text-white uppercase tracking-wider hover:text-indigo-400 transition-colors cursor-pointer border-b border-transparent hover:border-indigo-400">+91 6388599818</span>
           </motion.div>
        </motion.div>

        {/* Center Massive Typography - Bridging Name */}
        {/* Adjusted z-index to 30 to sit ON TOP of both left (z-10) and right (z-0) panels */}
        <motion.div 
          style={{ x: titleX, y: titleY }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-full text-center pointer-events-none select-none mix-blend-difference"
        >
          <h1 className="text-[18vw] md:text-[25vw] font-black font-heading tracking-tighter leading-none text-white uppercase scale-y-110">
            Shadan
          </h1>
        </motion.div>

        {/* Bottom Subtext */}
         <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.5, duration: 1 }}
           className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 z-30 text-center pointer-events-none mix-blend-difference"
         >
           <p className="text-white text-xs md:text-sm font-bold uppercase tracking-[0.5em] leading-relaxed opacity-80">
             Ahmad Shadan Taiyabi
           </p>
         </motion.div>

      </main>
      
      <ResumeSection />
    </>
  );
}
