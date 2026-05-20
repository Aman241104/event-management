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
  duration = 2
}: RollingCounterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parse the number part and suffix
  const numericStr = value.replace(/\D/g, "");
  const suffix = value.replace(/[0-9]/g, "");
  const digits = numericStr.split("");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const strips = container.querySelectorAll('.digit-strip');
    
    strips.forEach((strip, index) => {
      const targetDigit = parseInt(digits[index], 10);
      
      gsap.to(strip, {
        y: -(targetDigit * 10) + "%", // Move to the target digit (each digit is 10% height)
        duration: duration + (index * 0.2), // Stagger the speed slightly for natural feel
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: container,
          start: 'top 92%',
          toggleActions: 'play none none none',
        }
      });
    });
  }, [digits, duration]);

  return (
    <div ref={containerRef} className={cn("inline-flex items-baseline overflow-hidden", className)}>
      <div className="flex">
        {digits.map((_, i) => (
          <div key={i} className="relative h-[1em] w-[0.6em] overflow-hidden">
            <div className="digit-strip absolute top-0 left-0 w-full flex flex-col transition-none" style={{ height: '1000%' }}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                <div key={num} className="h-[10%] flex items-center justify-center">
                  {num}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {suffix && <span className="ml-1">{suffix}</span>}
    </div>
  );
}
