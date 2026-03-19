'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface BackgroundFlourishProps {
  type?: 'floral' | 'geometric' | 'architectural';
  opacity?: number;
  className?: string;
  parallaxSpeed?: number;
}

export function BackgroundFlourish({ 
  type = 'floral', 
  opacity = 0.03, 
  className,
  parallaxSpeed = 0.1
}: BackgroundFlourishProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.to(containerRef.current, {
      y: (_index, _target) => -ScrollTrigger.maxScroll(window) * parallaxSpeed,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      }
    });
  }, [parallaxSpeed]);

  const renderPath = () => {
    switch (type) {
      case 'floral':
        return (
          <>
            <path 
              d="M10,190 C40,150 60,120 100,100 C140,80 160,50 190,10" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.2" 
            />
            <circle cx="100" cy="100" r="1.5" fill="currentColor" opacity="0.5" />
            <path 
              d="M50,150 Q100,50 150,150" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.1" 
              strokeDasharray="2 2"
            />
            <path 
              d="M20,50 Q80,150 180,50" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.1" 
              strokeDasharray="4 2"
            />
          </>
        );
      case 'geometric':
        return (
          <>
            <rect x="20" y="20" width="160" height="160" fill="none" stroke="currentColor" strokeWidth="0.1" />
            <rect x="40" y="40" width="120" height="120" fill="none" stroke="currentColor" strokeWidth="0.05" strokeDasharray="1 1" />
            <line x1="20" y1="20" x2="180" y2="180" stroke="currentColor" strokeWidth="0.05" />
            <line x1="180" y1="20" x2="20" y2="180" stroke="currentColor" strokeWidth="0.05" />
          </>
        );
      case 'architectural':
        return (
          <>
            <path d="M40,180 L40,60 Q40,20 100,20 Q160,20 160,60 L160,180" fill="none" stroke="currentColor" strokeWidth="0.15" />
            <line x1="40" y1="140" x2="160" y2="140" stroke="currentColor" strokeWidth="0.1" />
            <line x1="40" y1="100" x2="160" y2="100" stroke="currentColor" strokeWidth="0.1" />
            <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.05" strokeDasharray="2 2" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      ref={containerRef} 
      className={`absolute pointer-events-none select-none text-heritage ${className}`}
      style={{ opacity }}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {renderPath()}
      </svg>
    </div>
  );
}
