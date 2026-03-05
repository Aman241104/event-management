'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function SVGSpine() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();

    // Set initial stroke dash array and offset
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: svgRef.current,
        start: 'top 60%',
        end: 'bottom 40%',
        scrub: 1
      }
    });
  }, []);

  return (
    <svg 
      ref={svgRef} 
      className="absolute left-1/2 top-0 bottom-0 w-[20px] -translate-x-1/2 hidden md:block pointer-events-none z-0" 
      viewBox="0 0 20 1000" 
      preserveAspectRatio="none"
    >
      <path 
        ref={pathRef}
        d="M 10 0 L 10 1000" 
        stroke="var(--color-primary)" 
        strokeWidth="1" 
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
}
