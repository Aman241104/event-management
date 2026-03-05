'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface TextRevealProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function TextReveal({ 
  text, 
  className, 
  as: Component = 'h2', 
  delay = 0, 
  duration = 1.5,
  once = true
}: TextRevealProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // Split text into words for animation
    const words = text.split(' ');
    el.innerHTML = words.map(word => 
      `<span class="inline-block overflow-hidden pb-[0.1em] mb-[-0.1em]">
        <span class="inline-block transform translate-y-full">${word}&nbsp;</span>
      </span>`
    ).join('');

    const children = el.querySelectorAll('span > span');

    gsap.to(children, {
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        toggleActions: once ? 'play none none none' : 'play none none reverse',
      },
      y: 0,
      duration: duration,
      delay: delay,
      stagger: 0.1,
      ease: 'power4.out'
    });
  }, [text, delay, duration, once]);

  return (
    <Component ref={textRef} className={cn("inline-block", className)}>
      {text}
    </Component>
  );
}
