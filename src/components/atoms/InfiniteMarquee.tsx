'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { cn } from '@/lib/utils';

interface MarqueeItem {
  label: string;
  logo?: string;
}

interface InfiniteMarqueeProps {
  items: (string | MarqueeItem)[];
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

  const renderItem = (item: string | MarqueeItem, i: number, prefix: string) => {
    const label = typeof item === 'string' ? item : item.label;
    const logo = typeof item === 'string' ? null : item.logo;

    return (
      <div key={`${prefix}-${i}`} className="inline-flex items-center px-10 md:px-14 group">
        <div className="flex items-center gap-6">
          {logo && (
            <div className="relative w-12 h-12 md:w-16 md:h-16 opacity-40 group-hover:opacity-100 transition-all duration-700 brightness-0 invert">
              <Image 
                src={logo} 
                alt={label} 
                fill 
                className="object-contain" 
              />
            </div>
          )}
          <span className="text-lg md:text-2xl font-sans font-bold text-white/40 group-hover:text-[#D4B982] transition-colors duration-500 cursor-default uppercase tracking-[0.6em]">
            {label}
          </span>
        </div>
        <span className="ml-10 md:ml-14 w-1.5 h-1.5 rounded-full bg-[#D4B982]/20" />
      </div>
    );
  };

  return (
    <div className={cn("overflow-hidden whitespace-nowrap relative py-2", className)}>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-heritage to-transparent z-10 pointer-events-none opacity-80" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-heritage to-transparent z-10 pointer-events-none opacity-80" />
      <div ref={marqueeRef} className="inline-block">
        <div className="inline-flex items-center">
          {/* First set */}
          {items.map((item, i) => renderItem(item, i, 'first'))}
          {/* Duplicate set for seamless loop */}
          {items.map((item, i) => renderItem(item, i, 'second'))}
        </div>
      </div>
    </div>
  );
}
