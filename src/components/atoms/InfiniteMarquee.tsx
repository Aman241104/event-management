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
    <div className={cn("overflow-hidden whitespace-nowrap relative py-4", className)}>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-current/5 to-transparent z-10 pointer-events-none opacity-50" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-current/5 to-transparent z-10 pointer-events-none opacity-50" />
      <div ref={marqueeRef} className="inline-block">
        <div className="inline-flex items-center">
          {/* First set */}
          {items.map((item, i) => (
            <div key={`first-${i}`} className="inline-flex items-center px-12 md:px-20">
              <span className="text-sm md:text-base font-sans font-bold text-white/40 hover:text-[#D4B982] transition-colors duration-500 cursor-default uppercase tracking-[0.6em]">
                {item}
              </span>
              <span className="mx-12 md:mx-20 w-1 h-1 rounded-full bg-[#D4B982]/20" />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {items.map((item, i) => (
            <div key={`second-${i}`} className="inline-flex items-center px-12 md:px-20">
              <span className="text-sm md:text-base font-sans font-bold text-white/40 hover:text-[#D4B982] transition-colors duration-500 cursor-default uppercase tracking-[0.6em]">
                {item}
              </span>
              <span className="mx-12 md:mx-20 w-1 h-1 rounded-full bg-[#D4B982]/20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
