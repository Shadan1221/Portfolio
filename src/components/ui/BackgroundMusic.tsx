'use client';

import React, { useState, useRef, useEffect } from 'react';
import { IconVolume, IconVolumeOff } from '@tabler/icons-react';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    // Attempt auto-play on load (might fail due to browser policy)
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      // We don't auto-play to respect user preference/browser policy, 
      // user must click to start usually.
    }
  }, []);

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <audio
        ref={audioRef}
        src="https://actions.google.com/sounds/v1/ambiences/space_shuttle_hum.ogg"
        loop
      />
      <button
        onClick={toggleMusic}
        className="bg-black/50 backdrop-blur-md border border-white/10 p-3 rounded-full text-white hover:bg-white/10 transition-colors"
      >
        {isPlaying ? <IconVolume size={24} /> : <IconVolumeOff size={24} />}
      </button>
    </div>
  );
};

export default BackgroundMusic;
