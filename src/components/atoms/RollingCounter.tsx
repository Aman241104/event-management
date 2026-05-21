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

  // Create cycles of 0-9 to ensure a long roll effect
  const cycles = 5;
  const digitsArray = Array.from({ length: 10 }, (_, i) => i);
  const repeatedDigits = Array(cycles).fill(digitsArray).flat();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const strips = container.querySelectorAll('.digit-strip');
    
    strips.forEach((strip, index) => {
      const targetDigit = parseInt(digits[index], 10);
      // Land on the target digit in the last cycle
      const targetIndex = ((cycles - 1) * 10) + targetDigit;
      
      gsap.fromTo(strip, 
        { y: 0 },
        {
          y: `-${(targetIndex / repeatedDigits.length) * 100}%`,
          duration: duration + (index * 0.2),
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
    <div ref={containerRef} className={cn("inline-flex items-center leading-none", className)}>
      <div className="flex overflow-hidden h-[1em]">
        {digits.map((_, i) => (
          <div key={i} className="relative w-[0.6em] h-full">
            <div 
              className="digit-strip absolute top-0 left-0 w-full flex flex-col"
            >
              {repeatedDigits.map((num, idx) => (
                <div key={idx} className="h-[1em] flex-shrink-0 flex items-center justify-center">
                  {num}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {suffix && <span className="ml-1 self-center">{suffix}</span>}
    </div>
  );
}
