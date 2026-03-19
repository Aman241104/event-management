'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export function FloatingDecor({ seed = 0 }: { seed?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [decorData, setDecorData] = useState<{
    roseSpeeds: number[];
    azureSpeeds: number[];
    goldSpeeds: number[];
  } | null>(null);

  useEffect(() => {
    // Simple pseudo-random helper using seed
    const pseudoRandom = (n: number) => {
      const x = Math.sin(seed + n) * 10000;
      return x - Math.floor(x);
    };

    const timer = setTimeout(() => {
      setDecorData({
        roseSpeeds: Array.from({ length: 8 }, (_, i) => 0.01 + pseudoRandom(i * 10) * 0.02),
        azureSpeeds: Array.from({ length: 8 }, (_, i) => 0.02 + pseudoRandom(i * 20) * 0.02),
        goldSpeeds: Array.from({ length: 12 }, (_, i) => 0.005 + pseudoRandom(i * 30) * 0.01),
      });
    }, 0);
    return () => clearTimeout(timer);
  }, [seed]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !decorData) return;

    const items = container.querySelectorAll('.decor-item');
    
    items.forEach((item) => {
      // Random initial position
      gsap.set(item, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotation: Math.random() * 360,
        scale: Math.random() * 0.3 + 0.3,
        opacity: 0,
      });

      // Initial fade in
      gsap.to(item, {
        opacity: Math.random() * 0.2 + 0.05,
        duration: 2,
        delay: Math.random() * 2,
      });

      // Floating animation
      gsap.to(item, {
        x: `+=${Math.random() * 150 - 75}`,
        y: `+=${Math.random() * 150 - 75}`,
        rotation: `+=${Math.random() * 180 - 90}`,
        duration: Math.random() * 10 + 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      items.forEach((item) => {
        const speed = parseFloat(item.getAttribute('data-speed') || '0.02');
        gsap.to(item, {
          x: `+=${(clientX - window.innerWidth / 2) * speed}`,
          y: `+=${(clientY - window.innerHeight / 2) * speed}`,
          duration: 3,
          ease: 'power1.out',
        });
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [decorData]);

  if (!decorData) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-multiply opacity-60">
      {/* Rose Petals */}
      {decorData.roseSpeeds.map((speed, i) => (
        <div 
          key={`rose-${i}`} 
          className="decor-item absolute w-12 h-12 bg-accent-rose/40 rounded-full blur-[3px]" 
          data-speed={speed}
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />
      ))}
      
      {/* Azure Sparkles */}
      {decorData.azureSpeeds.map((speed, i) => (
        <div 
          key={`azure-${i}`} 
          className="decor-item absolute w-6 h-6 bg-accent-azure/30 rounded-full blur-[2px]" 
          data-speed={speed}
        />
      ))}

      {/* Gold Dust */}
      {decorData.goldSpeeds.map((speed, i) => (
        <div 
          key={`gold-${i}`} 
          className="decor-item absolute w-2 h-2 bg-burnished rounded-full opacity-10 blur-[1px]" 
          data-speed={speed}
        />
      ))}
    </div>
  );
}
