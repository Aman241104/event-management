'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SVGSpineProps {
  className?: string;
  height?: string;
  viewBox?: string;
  pathD?: string;
  startTrigger?: string;
  endTrigger?: string;
  color?: string;
  opacity?: number;
}

export function SVGSpine({ 
  className, 
  height = "2000px", 
  viewBox = "0 0 20 2000", 
  pathD = "M 10 0 L 10 2000",
  startTrigger = "top 20%",
  endTrigger = "bottom 80%",
  color = "var(--color-heritage)",
  opacity = 0.2
}: SVGSpineProps) {
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
        start: startTrigger,
        end: endTrigger,
        scrub: 1
      }
    });
  }, [startTrigger, endTrigger]);

  return (
    <svg 
      ref={svgRef} 
      className={cn("absolute left-1/2 top-0 w-[20px] -translate-x-1/2 hidden md:block pointer-events-none z-0", className)} 
      style={{ height }}
      viewBox={viewBox} 
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path 
        ref={pathRef}
        d={pathD} 
        stroke={color} 
        strokeWidth="1.5" 
        fill="none"
        opacity={opacity}
        filter="url(#glow)"
      />
    </svg>
  );
}
