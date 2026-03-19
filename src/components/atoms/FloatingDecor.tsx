'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function FloatingDecor() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

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
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-multiply opacity-60">
      {/* Rose Petals */}
      {[...Array(8)].map((_, i) => (
        <div 
          key={`rose-${i}`} 
          className="decor-item absolute w-12 h-12 bg-accent-rose/40 rounded-full blur-[3px]" 
          data-speed={0.01 + Math.random() * 0.02}
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />
      ))}
      
      {/* Azure Sparkles */}
      {[...Array(8)].map((_, i) => (
        <div 
          key={`azure-${i}`} 
          className="decor-item absolute w-6 h-6 bg-accent-azure/30 rounded-full blur-[2px]" 
          data-speed={0.02 + Math.random() * 0.02}
        />
      ))}

      {/* Gold Dust */}
      {[...Array(12)].map((_, i) => (
        <div 
          key={`gold-${i}`} 
          className="decor-item absolute w-2 h-2 bg-burnished rounded-full opacity-10 blur-[1px]" 
          data-speed={0.005 + Math.random() * 0.01}
        />
      ))}
    </div>
  );
}
