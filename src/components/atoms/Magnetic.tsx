'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export function Magnetic({ children, strength = 0.5, className = "" }: MagneticProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let boundingRect: DOMRect | null = null;

    const onMouseEnter = () => {
      boundingRect = el.getBoundingClientRect();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!boundingRect) boundingRect = el.getBoundingClientRect();
      const { clientX, clientY } = e;
      const { left, top, width, height } = boundingRect;
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;

      gsap.to(el, {
        x: deltaX * strength,
        y: deltaY * strength,
        duration: 1.2,
        ease: 'power3.out',
        overwrite: 'auto',
        force3D: true
      });
    };

    const onMouseLeave = () => {
      boundingRect = null;
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        overwrite: 'auto',
        force3D: true
      });
    };

    el.addEventListener('mouseenter', onMouseEnter);
    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);

    return () => {
      el.removeEventListener('mouseenter', onMouseEnter);
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [strength]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
