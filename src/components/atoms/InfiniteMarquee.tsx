'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface InfiniteMarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

export function InfiniteMarquee({ items, direction = 'left', speed = 50, className }: InfiniteMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const width = el.offsetWidth / 2;
    
    gsap.to(el, {
      x: direction === 'left' ? -width : 0,
      initial: direction === 'left' ? 0 : -width,
      duration: speed,
      ease: 'none',
      repeat: -1,
    });
  }, [speed, direction]);

  const marqueeItems = [...items, ...items];

  return (
    <div ref={containerRef} className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div ref={marqueeRef} className="inline-block">
        {marqueeItems.map((item, i) => (
          <span key={i} className="inline-block px-6 md:px-12 text-sm md:text-lg font-serif italic text-text-light/40">
            {item} <span className="mx-4 md:mx-8 text-primary/30 ml-6 md:ml-12">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
