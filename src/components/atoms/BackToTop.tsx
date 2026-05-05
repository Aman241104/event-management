'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Magnetic } from './Magnetic';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const st = ScrollTrigger.create({
      start: 500,
      onEnter: () => setIsVisible(true),
      onLeaveBack: () => setIsVisible(false),
    });

    return () => st.kill();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div 
      id="back-to-top"
      className={cn(
      "fixed bottom-28 md:bottom-10 right-6 md:right-10 z-[90] transition-all duration-700 transform back-to-top",
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
    )}>
      <Magnetic strength={0.3}>
        <button
          onClick={scrollToTop}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-heritage text-canvas shadow-lg flex items-center justify-center hover:bg-heritage-dark transition-colors group"
          aria-label="Back to top"
        >
          <ArrowUp size={18} className="md:w-5 md:h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </Magnetic>
    </div>
  );
}
