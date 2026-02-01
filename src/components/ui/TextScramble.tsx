'use client';

import React, { useState, useEffect, useRef } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';

const TextScramble: React.FC<TextScrambleProps> = ({ text, className = '' }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = React.useCallback(() => {
    let iteration = 0;
    
    clearInterval(intervalRef.current as NodeJS.Timeout);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) => 
        text
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
      }

      iteration += 1 / 3;
    }, 30);
  }, [text]);

  useEffect(() => {
    // Initial scramble on mount
    scramble();
    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, [scramble]);

  return (
    <span 
      className={`inline-block cursor-default ${className}`}
      onMouseEnter={() => scramble()}
    >
      {displayText}
    </span>
  );
};

export default TextScramble;
