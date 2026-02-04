'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import SpaceBackground from '@/components/ui/SpaceBackground';
import ResumeSection from '@/components/ResumeSection';
import MagneticButton from '@/components/ui/MagneticButton';
import SpaceShooter from '@/components/ui/SpaceShooter';
import { FloatingDock } from '@/components/ui/floating-dock';
import BackgroundMusic from '@/components/ui/BackgroundMusic';
import dynamic from 'next/dynamic';

const SplineScene = dynamic(() => import('@/components/ui/SplineScene'), {
  ssr: false,
  loading: () => <div className="w-full h-full invisible"></div>,
});

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
  IconUser,
  IconBriefcase,
  IconRocket,
  IconCpu,
} from '@tabler/icons-react';

const navItems = [
  {
    title: "Home",
    icon: <IconHome className="h-full w-full text-neutral-300" />,
    href: "#home",
  },
  {
    title: "About",
    icon: <IconUser className="h-full w-full text-neutral-300" />,
    href: "#about",
  },
  {
    title: "Experience",
    icon: <IconBriefcase className="h-full w-full text-neutral-300" />,
    href: "#experience",
  },
  {
    title: "Projects",
    icon: <IconRocket className="h-full w-full text-neutral-300" />,
    href: "#projects",
  },
  {
    title: "Skills",
    icon: <IconCpu className="h-full w-full text-neutral-300" />,
    href: "#skills",
  },
  {
    title: "LinkedIn",
    icon: <IconBrandLinkedin className="h-full w-full text-neutral-300" />,
    href: "https://www.linkedin.com/in/shadan-taiyabi",
  },
  {
    title: "GitHub",
    icon: <IconBrandGithub className="h-full w-full text-neutral-300" />,
    href: "https://github.com/Shadan1221",
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX / width) - 0.5;
    const y = (clientY / height) - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  const titleX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-50, 50]), { stiffness: 150, damping: 15 });
  const titleY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-50, 50]), { stiffness: 150, damping: 15 });

  return (
    <>
      <main 
        id="home"
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

          {/* Space Shooter Game - Drawer */}
          <SpaceShooter />

          <div className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-multiply" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
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
          <div className="absolute top-1/4 right-0 w-[40rem] h-[40rem] bg-indigo-500/10 blur-[80px] rounded-full z-0 pointer-events-none mix-blend-screen" />

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

        {/* Robot Scene - Left Side (Space Shooter) - already positioned inside Left Split logic or handled separately */}
        
        {/* Spline Robot - Right Side - Global Position */}
        <div className="absolute bottom-0 right-0 z-40 pointer-events-none flex items-end justify-end pr-4 pb-4 md:pr-12 md:pb-12">
           {/* Glow Effect */}
           <div className="absolute inset-0 bg-indigo-500/10 blur-[60px] rounded-full transform translate-y-10 translate-x-10"></div>
           <div className="w-[450px] h-[450px] relative">
              <SplineScene />
           </div>
        </div>

        {/* Center Massive Typography - Bridging Name */}
        {/* Adjusted z-index to 30 to sit ON TOP of both left (z-10) and right (z-0) panels */}
        <motion.div 
          style={{ x: titleX, y: titleY }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-full text-center pointer-events-none select-none mix-blend-difference"
        >
          <h1 className="text-[12vw] md:text-[18vw] font-black font-heading tracking-tighter leading-none text-white uppercase scale-y-110">
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
      
      <div className="fixed bottom-8 inset-x-0 z-50 flex justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <FloatingDock items={navItems} />
        </div>
      </div>
      
      <BackgroundMusic />
    </>
  );
}
