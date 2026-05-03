'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Magnetic } from './Magnetic';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
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
