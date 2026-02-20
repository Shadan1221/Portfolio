'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch devices and hide cursor
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches;
    setIsTouchDevice(isTouch);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;
    const cursor = cursorRef.current;
    if (!cursor) return;

    const updateMousePosition = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px) scale(${isHovering ? 4 : 1})`;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        !!target.closest('.cursor-hover')
      );
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isHovering, isTouchDevice]);

  // Don't render cursor on touch/mobile devices
  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75"
      style={{ willChange: 'transform' }}
    />
  );
}
