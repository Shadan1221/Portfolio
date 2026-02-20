'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import ResumeSection from '@/components/ResumeSection';
import MagneticButton from '@/components/ui/MagneticButton';
import { FloatingDock } from '@/components/ui/floating-dock';
import dynamic from 'next/dynamic';

// Lazy load heavy components
const SpaceBackground = dynamic(() => import('@/components/ui/SpaceBackground'), {
  ssr: false,
  loading: () => null,
});

const SpaceShooter = dynamic(() => import('@/components/ui/SpaceShooter'), {
  ssr: false,
  loading: () => null,
});

const SplineScene = dynamic(() => import('@/components/ui/SplineScene'), {
  ssr: false,
  loading: () => null,
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
  const [isLoaded, setIsLoaded] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  React.useEffect(() => {
    // Defer heavy components until after initial paint
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
    if (!isLoaded) return; // Skip expensive calculations until loaded
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX / width) - 0.5;
    const y = (clientY / height) - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY, isLoaded]);

  const titleX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-50, 50]), { stiffness: 150, damping: 15 });
  const titleY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-50, 50]), { stiffness: 150, damping: 15 });

  return (
    <>
      <main 
        id="home"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="min-h-screen w-full relative overflow-hidden flex flex-col md:flex-row bg-black"
      >
        
        {/* Left Split: Light Side (Personal Branding) */}
        <div 
          className="w-full md:w-5/12 bg-[#f4f4f4] text-black relative flex flex-col justify-between p-8 md:p-12 z-10"
        >
          
          {/* Logo / Personal Initial */}
          <div className="mb-12">
            <MagneticButton className="w-20 h-20 bg-black flex items-center justify-center text-white font-heading font-bold text-4xl rounded-full shadow-2xl shadow-black/20">
              S
            </MagneticButton>
          </div>

          {/* Space Shooter Game - Drawer - Only load when page is ready */}
          {isLoaded && <SpaceShooter />}

          <div className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-multiply" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
          </div>
        </div>

        {/* Right Split: Dark Side (Cosmic Video) */}
        <div 
          className="w-full md:w-7/12 bg-[#050505] relative flex flex-col justify-between p-8 md:p-12 overflow-hidden z-0"
        >
          {isLoaded && <SpaceBackground />}
          
          {/* Ambient Glows for Depth */}
          <div className="absolute top-1/4 right-0 w-[40rem] h-[40rem] bg-indigo-500/10 blur-[80px] rounded-full z-0 pointer-events-none mix-blend-screen" />

          {/* Header Actions */}
          

          {/* Intro Text */}
          
          
           {/* Bottom Details */}
           <div className="relative z-10 mt-auto flex flex-col items-end gap-2 text-right">
               <div className="flex items-center gap-2">
                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                 <span className="font-mono text-xs text-gray-400 uppercase tracking-[0.2em]">Status: Online</span>
               </div>
               <span className="font-mono text-sm text-white uppercase tracking-wider hover:text-indigo-400 transition-colors cursor-pointer border-b border-transparent hover:border-indigo-400">+91 6388599818</span>
           </div>
        </div>

        {/* Robot Scene - Left Side (Space Shooter) - already positioned inside Left Split logic or handled separately */}
        
        {/* Spline Robot - Right Side - Global Position - Deferred */}
        {isLoaded && (
          <div className="absolute bottom-0 right-0 z-40 pointer-events-none flex items-end justify-end pr-4 pb-4 md:pr-12 md:pb-12">
             {/* Glow Effect */}
             <div className="absolute inset-0 bg-indigo-500/10 blur-[60px] rounded-full transform translate-y-10 translate-x-10"></div>
             <div className="w-[450px] h-[450px] relative">
                <SplineScene />
             </div>
          </div>
        )}

        {/* Center Massive Typography - Bridging Name - Simplified animation */}
        <motion.div 
          style={isLoaded ? { x: titleX, y: titleY } : {}}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-full text-center pointer-events-none select-none mix-blend-difference"
        >
          <h1 className="text-[12vw] md:text-[18vw] font-black font-heading tracking-tighter leading-none text-white uppercase scale-y-110">
            Shadan
          </h1>
        </motion.div>

        {/* Bottom Subtext */}
         <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 z-30 text-center pointer-events-none mix-blend-difference">
           <p className="text-white text-xs md:text-sm font-bold uppercase tracking-[0.5em] leading-relaxed opacity-80">
             Ahmad Shadan Taiyabi
           </p>
         </div>

      </main>
      
      <ResumeSection />
      
      {isLoaded && (
        <div className="fixed bottom-8 inset-x-0 z-50 flex justify-center pointer-events-none">
          <div className="pointer-events-auto">
            <FloatingDock items={navItems} />
          </div>
        </div>
      )}
    </>
  );
}
