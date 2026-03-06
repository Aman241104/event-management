'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  const [cursorText, setCursorText] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const label = labelRef.current;

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
        duration: 0.5,
        ease: 'power3.out',
      });
    };

    const onDocumentMouseLeave = () => setIsVisible(false);
    const onDocumentMouseEnter = () => setIsVisible(true);

    const onMouseEnterActive = (e: any) => {
      const target = e.currentTarget;
      const text = target.getAttribute('data-cursor');
      if (text) {
        setCursorText(text);
        gsap.to(follower, { scale: 3, backgroundColor: 'var(--color-secondary)', border: 'none', duration: 0.5 });
        gsap.to(label, { opacity: 1, duration: 0.3 });
      } else {
        gsap.to(follower, { scale: 1.5, borderColor: 'var(--color-secondary)', duration: 0.5 });
      }
    };

    const onMouseLeaveActive = () => {
      setCursorText('');
      gsap.to(follower, { scale: 1, backgroundColor: 'transparent', borderColor: 'rgba(212, 175, 55, 0.3)', border: '1px solid', duration: 0.5 });
      gsap.to(label, { opacity: 0, duration: 0.3 });
    };

    window.addEventListener('mousemove', onMouseMove);
    document.documentElement.addEventListener('mouseleave', onDocumentMouseLeave);
    document.documentElement.addEventListener('mouseenter', onDocumentMouseEnter);

    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, .cursor-pointer, [data-cursor]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterActive);
      el.addEventListener('mouseleave', onMouseLeaveActive);
    });

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseleave', onDocumentMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onDocumentMouseEnter);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterActive);
        el.removeEventListener('mouseleave', onMouseLeaveActive);
      });
    };
  }, [isMobile, pathname]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className={cn(
          "fixed top-0 left-0 w-1.5 h-1.5 bg-secondary rounded-full pointer-events-none z-[10002] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      />
      <div
        ref={followerRef}
        className={cn(
          "fixed top-0 left-0 w-8 h-8 border border-secondary/30 rounded-full pointer-events-none z-[10001] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      />
      <div
        ref={labelRef}
        className="fixed top-0 left-0 pointer-events-none z-[10003] -translate-x-1/2 -translate-y-1/2 opacity-0"
        style={{ left: 0, top: 0 }}
      >
        <div className="transform translate-x-6 translate-y-6">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white whitespace-nowrap">
            {cursorText}
          </span>
        </div>
      </div>
    </>
  );
}
