'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  text: string;
  repeat?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ text, repeat = 4 }) => {
  return (
    <div className="relative flex overflow-hidden border-y border-white/20 py-6 bg-black">
      <div className="flex animate-marquee whitespace-nowrap">
        {Array.from({ length: repeat }).map((_, i) => (
          <span key={i} className="mx-8 text-8xl font-black tracking-tighter text-transparent stroke-text uppercase">
            {text}
          </span>
        ))}
      </div>
      <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
        {Array.from({ length: repeat }).map((_, i) => (
          <span key={i} className="mx-8 text-8xl font-black tracking-tighter text-transparent stroke-text uppercase">
             {text}
          </span>
        ))}
      </div>
      {/* Tailwind config needs to handle the stroke or we use standard CSS in global */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Marquee;
