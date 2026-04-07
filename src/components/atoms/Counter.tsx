'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface CounterProps {
  value: string;
  className?: string;
  duration?: number;
}

export function Counter({ 
  value, 
  className,
  duration = 2.5
}: CounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);
  
  // Parse the number part and suffix (like '+')
  const numericValue = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;

    const obj = { val: 0 };
    
    gsap.to(obj, {
      scrollTrigger: {
        trigger: el,
        start: 'top 92%',
        toggleActions: 'play none none none',
      },
      val: numericValue,
      duration: duration,
      ease: "power3.out",
      onUpdate: () => {
        setDisplayValue(Math.floor(obj.val));
      },
    });
  }, [numericValue, duration]);

  return (
    <span ref={counterRef} className={cn("inline-block", className)}>
      {displayValue}{suffix}
    </span>
  );
}
