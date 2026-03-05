'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      setIsVisible(true);
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: 'none',
      });

      gsap.to(follower, {
        x: clientX,
        y: clientY,
        duration: 0.4,
        ease: 'power3.out',
      });
    };

    const onDocumentMouseLeave = () => setIsVisible(false);
    const onDocumentMouseEnter = () => setIsVisible(true);
    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', onMouseMove);
    document.documentElement.addEventListener('mouseleave', onDocumentMouseLeave);
    document.documentElement.addEventListener('mouseenter', onDocumentMouseEnter);

    const interactiveElements = document.querySelectorAll('button, a, input, .cursor-pointer');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseleave', onDocumentMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onDocumentMouseEnter);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, [isMobile, pathname]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className={cn(
          "fixed top-0 left-0 w-2 h-2 bg-secondary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      />
      <div
        ref={followerRef}
        className={cn(
          "fixed top-0 left-0 w-10 h-10 border border-secondary/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out",
          isHovering ? "w-16 h-16 bg-secondary/5 border-secondary scale-125" : "scale-100",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      />
    </>
  );
}
