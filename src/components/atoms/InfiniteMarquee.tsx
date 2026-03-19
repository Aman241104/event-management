'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { cn } from '@/lib/utils';

interface InfiniteMarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

export function InfiniteMarquee({ items, direction = 'left', speed = 50, className }: InfiniteMarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    // Use GSAP to create a smooth, infinite loop
    const width = el.children[0].clientWidth;
    
    gsap.to(el, {
      x: direction === 'left' ? -width : 0,
      duration: speed,
      ease: 'none',
      repeat: -1,
      force3D: true,
    });
  }, [speed, direction, items]);

  return (
    <div className={cn("overflow-hidden whitespace-nowrap border-y border-linen/20 py-12 bg-canvas relative", className)}>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-canvas to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-canvas to-transparent z-10" />
      <div ref={marqueeRef} className="inline-block">
        <div className="inline-flex items-center">
          {/* First set */}
          {items.map((item, i) => (
            <div key={`first-${i}`} className="inline-flex items-center px-12">
              <span className="text-xl md:text-3xl font-serif italic text-heritage/40 hover:text-heritage/80 transition-colors duration-500 cursor-default uppercase tracking-widest font-light">
                {item}
              </span>
              <span className="mx-12 w-2 h-2 rounded-full bg-heritage/20" />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {items.map((item, i) => (
            <div key={`second-${i}`} className="inline-flex items-center px-12">
              <span className="text-xl md:text-3xl font-serif italic text-heritage/40 hover:text-heritage/80 transition-colors duration-500 cursor-default uppercase tracking-widest font-light">
                {item}
              </span>
              <span className="mx-12 w-2 h-2 rounded-full bg-heritage/20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
