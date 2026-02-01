'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react';

interface GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  color: string;
  id: number;
  text?: string;
  vertices?: {x: number, y: number}[]; 
  rotation?: number;
  rotationSpeed?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
  text?: string;
  scale?: number;
}

const FACTS = [
  "Cloud Architect", "Full Stack", "Problem Solver", "React Pro", 
  "Next.js Expert", "Node.js", "Python", "System Design", "Scalable", "Secure",
  "UI/UX Lover", "Creative", "DevOps", "AWS Certified", "Leader"
];

const SpaceShooter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const requestRef = useRef<number>();
  
  // Game State Refs
  const playerRef = useRef({ x: 0, width: 24, height: 24 });
  const bulletsRef = useRef<GameObject[]>([]);
  const enemiesRef = useRef<GameObject[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const lastShotTime = useRef(0);
  const scoreRef = useRef(0);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50; // Threshold
      if (scrolled) {
        setIsVisible(false);
        setIsOpen(false); // Auto close
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const initGame = () => {
    setScore(0);
    scoreRef.current = 0;
    setGameOver(false);
    bulletsRef.current = [];
    enemiesRef.current = [];
    particlesRef.current = [];
    setIsPlaying(true);
  };

  const createAsteroidVertices = (radius: number) => {
    const vertices = [];
    const numPoints = 6 + Math.floor(Math.random() * 4);
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;
      const r = radius * (0.8 + Math.random() * 0.4);
      vertices.push({
        x: Math.cos(angle) * r,
        y: Math.sin(angle) * r
      });
    }
    return vertices;
  };

  const spawnEnemy = (width: number) => {
    const size = 20 + Math.random() * 15;
    const text = FACTS[Math.floor(Math.random() * FACTS.length)];
    enemiesRef.current.push({
      x: Math.random() * (width - size * 2) + size,
      y: -100,
      width: size * 2,
      height: size * 2,
      speed: 0.8 + Math.random() * 1.0 + (scoreRef.current * 0.01),
      color: '#333',
      id: Math.random(),
      text: text,
      vertices: createAsteroidVertices(size),
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.05
    });
  };

  // Sound Effects
  const playShootSound = () => {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.15);
    
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  };

  const playExplosionSound = () => {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    
    const bufferSize = ctx.sampleRate * 0.5; // 0.5 seconds
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1000, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.5);
    
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
    
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    noise.start();
  };

  const createExplosion = (x: number, y: number, color: string, text?: string) => {
    playExplosionSound();
    for (let i = 0; i < 8; i++) {
      particlesRef.current.push({
        x, y,
        vx: (Math.random() - 0.5) * 8,
        vy: (Math.random() - 0.5) * 8,
        life: 1.0,
        color
      });
    }
    if (text) {
      particlesRef.current.push({
        x: x, y: y, vx: 0, vy: -1.5, life: 2.0, color: '#000', text: text, scale: 1
      });
    }
  };

  const loop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Player
    const px = playerRef.current.x;
    const py = canvas.height - 60;
    
    // Engine Flame
    if (isPlaying) {
        const flicker = Math.random() * 5;
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.moveTo(px - 6, py + 25);
        ctx.lineTo(px, py + 40 + flicker);
        ctx.lineTo(px + 6, py + 25);
        ctx.closePath();
        ctx.fill();
        
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.moveTo(px - 3, py + 25);
        ctx.lineTo(px, py + 32 + flicker);
        ctx.lineTo(px + 3, py + 25);
        ctx.closePath();
        ctx.fill();
    }

    // Wings
    ctx.fillStyle = '#171717';
    ctx.beginPath();
    ctx.moveTo(px, py - 10);
    ctx.lineTo(px - 25, py + 25);
    ctx.lineTo(px - 15, py + 25);
    ctx.lineTo(px - 15, py + 15);
    ctx.lineTo(px + 15, py + 15);
    ctx.lineTo(px + 15, py + 25);
    ctx.lineTo(px + 25, py + 25);
    ctx.closePath();
    ctx.fill();

    // Fuselage
    ctx.fillStyle = '#262626';
    ctx.beginPath();
    ctx.moveTo(px, py - 25);
    ctx.lineTo(px - 8, py + 25);
    ctx.lineTo(px + 8, py + 25);
    ctx.closePath();
    ctx.fill();

    // Cockpit
    ctx.fillStyle = '#3b82f6';
    ctx.beginPath();
    ctx.ellipse(px, py, 4, 8, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Details
    ctx.strokeStyle = '#404040';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(px, py - 25);
    ctx.lineTo(px, py + 25);
    ctx.stroke();

    // Spawning
    if (Math.random() < 0.012 + (scoreRef.current * 0.0002)) {
      spawnEnemy(canvas.width);
    }

    // Bullets
    bulletsRef.current.forEach(b => {
      b.y -= b.speed;
      ctx.strokeStyle = '#6366f1';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(b.x, b.y);
      ctx.lineTo(b.x, b.y + 10);
      ctx.stroke();
    });

    // Enemies
    enemiesRef.current.forEach(e => {
      e.y += e.speed;
      if (e.rotation !== undefined && e.rotationSpeed !== undefined) {
        e.rotation += e.rotationSpeed;
      }
      ctx.save();
      ctx.translate(e.x, e.y);
      ctx.rotate(e.rotation || 0);
      ctx.fillStyle = '#1f2937';
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      if (e.vertices) {
        ctx.moveTo(e.vertices[0].x, e.vertices[0].y);
        for (let i = 1; i < e.vertices.length; i++) {
          ctx.lineTo(e.vertices[i].x, e.vertices[i].y);
        }
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    });

    // Particles
    particlesRef.current.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 0.02;
      ctx.save();
      if (p.text) {
        ctx.globalAlpha = Math.max(0, Math.min(1, p.life));
        ctx.fillStyle = '#000';
        ctx.font = 'bold 16px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(p.text, p.x, p.y);
      } else {
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, 4, 4);
      }
      ctx.restore();
    });

    // Cleanup
    bulletsRef.current = bulletsRef.current.filter(b => b.y > -50);
    enemiesRef.current = enemiesRef.current.filter(e => e.y < canvas.height + 50);
    particlesRef.current = particlesRef.current.filter(p => p.life > 0);

    // Collision
    for (let i = enemiesRef.current.length - 1; i >= 0; i--) {
      const enemy = enemiesRef.current[i];
      const radius = enemy.width / 2;
      const dx = playerRef.current.x - enemy.x;
      const dy = (canvas.height - 40) - enemy.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      
      if (dist < radius + 15) {
        setGameOver(true);
        setIsPlaying(false);
        return;
      }

      for (let j = bulletsRef.current.length - 1; j >= 0; j--) {
        const bullet = bulletsRef.current[j];
        const bdx = bullet.x - enemy.x;
        const bdy = bullet.y - enemy.y;
        const bdist = Math.sqrt(bdx*bdx + bdy*bdy);

        if (bdist < radius) {
          createExplosion(enemy.x, enemy.y, '#333', enemy.text);
          enemiesRef.current.splice(i, 1);
          bulletsRef.current.splice(j, 1);
          scoreRef.current += 10;
          setScore(scoreRef.current);
          break;
        }
      }
    }

    if (isPlaying && !gameOver) {
      requestRef.current = requestAnimationFrame(loop);
    }
  }, [isPlaying, gameOver]);

  // Resize Handler - Only active when open
  useEffect(() => {
    if (!isOpen) return;
    
    const handleResize = () => {
      if (containerRef.current && canvasRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        canvasRef.current.width = width;
        canvasRef.current.height = height;
        playerRef.current.x = width / 2;
      }
    };

    handleResize(); // Initial sizing
    window.addEventListener('resize', handleResize);
    // Slight delay to allow animation to settle for accurate sizing
    const timer = setTimeout(handleResize, 500); 
    
    if (isPlaying) {
      requestRef.current = requestAnimationFrame(loop);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
      cancelAnimationFrame(requestRef.current as number);
    };
  }, [isOpen, isPlaying, loop]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    playerRef.current.x = e.clientX - rect.left;
  };

  const handleShoot = () => {
    if (!isPlaying) return;
    const now = Date.now();
    if (now - lastShotTime.current > 150) {
      playShootSound();
      bulletsRef.current.push({
        x: playerRef.current.x,
        y: canvasRef.current?.height ? canvasRef.current.height - 60 : 0,
        width: 2,
        height: 15,
        speed: 12,
        color: '#6366f1',
        id: Math.random()
      });
      lastShotTime.current = now;
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Vertical Toggle Button */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            onClick={() => setIsOpen(!isOpen)}
            className="fixed top-1/2 left-0 transform -translate-y-1/2 z-50 cursor-pointer flex flex-col items-center gap-4 group"
          >
            <div className="vertical-text writing-mode-vertical py-6 px-2 bg-black text-white font-bold tracking-widest text-sm border-r border-white/20 hover:bg-indigo-600 transition-colors duration-300 rounded-r-lg shadow-lg">
              {isOpen ? "CLOSE TERMINAL" : "CLICK TO PLAY"}
            </div>
          </motion.div>

          {/* Sliding Drawer */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                className="fixed top-0 left-0 h-full w-[40%] bg-[#f4f4f4]/95 backdrop-blur-md z-40 border-r border-black/5 shadow-2xl"
              >
                <div 
                  ref={containerRef}
                  className="w-full h-full relative overflow-hidden select-none"
                  onMouseMove={handleMouseMove}
                  onClick={handleShoot}
                >
                  <canvas
                    ref={canvasRef}
                    className="w-full h-full block cursor-crosshair"
                  />

                  {/* Game UI */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                      {gameOver ? (
                        <div className="text-center bg-white/90 p-8 rounded-2xl shadow-xl">
                          <h3 className="text-4xl font-heading font-bold mb-4 text-black">TERMINATED</h3>
                          <p className="font-mono text-gray-600 mb-8">SCORE: {score}</p>
                          <MagneticButton onClick={initGame} className="px-8 py-4 bg-black text-white rounded-full font-bold">RETRY</MagneticButton>
                        </div>
                      ) : (
                        <div className="text-center">
                          <MagneticButton onClick={initGame} className="px-8 py-4 bg-black text-white rounded-full font-bold shadow-2xl">
                            START MISSION
                          </MagneticButton>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* Score HUD */}
                  {isPlaying && (
                    <div className="absolute top-4 right-4 font-mono text-xs font-bold text-black bg-white/50 px-3 py-1 rounded-full">
                      DATA: {score}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <style jsx global>{`
            .writing-mode-vertical {
              writing-mode: vertical-rl;
              text-orientation: mixed;
              transform: rotate(180deg);
            }
          `}</style>
        </>
      )}
    </AnimatePresence>
  );
};

export default SpaceShooter;
