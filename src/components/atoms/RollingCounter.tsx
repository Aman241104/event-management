'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface RollingCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

export function RollingCounter({ 
  value, 
  className,
  duration = 2.5
}: RollingCounterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parse the number part and suffix
  const numericStr = value.replace(/\D/g, "");
  const suffix = value.replace(/[0-9]/g, "");
  const digits = numericStr.split("");

  // Create 5 cycles of 0-9 to ensure a long roll effect even for '0'
  const cycles = 5;
  const digitsArray = Array.from({ length: 10 }, (_, i) => i);
  const repeatedDigits = Array(cycles).fill(digitsArray).flat();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const strips = container.querySelectorAll('.digit-strip');
    
    strips.forEach((strip, index) => {
      const targetDigit = parseInt(digits[index], 10);
      // We want to land on the LAST cycle to ensure maximum rolling
      const targetIndex = ((cycles - 1) * 10) + targetDigit;
      const totalItems = cycles * 10;
      const itemHeightPercentage = 100 / totalItems;
      
      gsap.fromTo(strip, 
        { y: "0%" },
        {
          y: -(targetIndex * itemHeightPercentage) + "%",
          duration: duration + (index * 0.3), // Stagger the speed for a more organic feel
          ease: "expo.out",
          scrollTrigger: {
            trigger: container,
            start: 'top 92%',
            toggleActions: 'play none none none',
          }
        }
      );
    });
  }, [digits, duration, cycles]);

  return (
    <div ref={containerRef} className={cn("inline-flex items-baseline overflow-hidden", className)}>
      <div className="flex">
        {digits.map((_, i) => (
          <div key={i} className="relative h-[1.1em] w-[0.65em] overflow-hidden">
            <div 
              className="digit-strip absolute top-0 left-0 w-full flex flex-col transition-none" 
              style={{ height: `${cycles * 10 * 100}%` }}
            >
              {repeatedDigits.map((num, idx) => (
                <div key={idx} className="h-[2%] flex items-center justify-center">
                  {num}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {suffix && <span className="ml-0.5">{suffix}</span>}
    </div>
  );
}
