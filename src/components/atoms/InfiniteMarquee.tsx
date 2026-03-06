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
    });
  }, [speed, direction, items]);

  return (
    <div className={cn("overflow-hidden whitespace-nowrap border-y border-border-gold/30 py-8 bg-bg-surface/20 backdrop-blur-sm", className)}>
      <div ref={marqueeRef} className="inline-block">
        <div className="inline-flex items-center">
          {/* First set */}
          {items.map((item, i) => (
            <div key={`first-${i}`} className="inline-flex items-center px-12">
              <span className="text-xl md:text-3xl font-serif italic text-secondary/40 hover:text-secondary/80 transition-colors duration-500 cursor-default uppercase tracking-widest font-light">
                {item}
              </span>
              <span className="mx-12 w-2 h-2 rounded-full bg-secondary/20" />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {items.map((item, i) => (
            <div key={`second-${i}`} className="inline-flex items-center px-12">
              <span className="text-xl md:text-3xl font-serif italic text-secondary/40 hover:text-secondary/80 transition-colors duration-500 cursor-default uppercase tracking-widest font-light">
                {item}
              </span>
              <span className="mx-12 w-2 h-2 rounded-full bg-secondary/20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
