'use client';

import React, { useRef, useEffect } from 'react';

const SpaceBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down slightly for majesty
    }
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        loading="lazy"
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover opacity-80 mix-blend-screen"
      >
        <source src="/space-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" /> {/* Overlay for text readability */}
    </div>
  );
};

export default SpaceBackground;
