'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Magnetic } from '@/components/atoms/Magnetic';
import { Button } from '@/components/atoms/Button';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';

export const StickyCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.8;
      
      if (scrollY > heroHeight) {
        if (!isVisible) setIsVisible(true);
      } else {
        if (isVisible) setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      gsap.fromTo(containerRef.current,
        { y: 80, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power3.out", pointerEvents: 'auto' }
      );
      setHasAnimatedIn(true);
    } else if (hasAnimatedIn) {
      gsap.to(containerRef.current, {
        y: 80,
        opacity: 0,
        scale: 0.95,
        duration: 0.4,
        ease: "power3.in",
        pointerEvents: 'none'
      });
    }
  }, [isVisible, hasAnimatedIn]);

  return (
    <div 
      ref={containerRef}
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-8 px-8 py-3 bg-[#0a0a0a]/70 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] opacity-0 pointer-events-none scale-95"
      )}
    >
      <div className="flex items-center gap-8">
        <Link 
          href="/gallery" 
          className="text-[11px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all duration-300 group flex items-center gap-2"
        >
          <span className="relative">
            View Work
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white/40 group-hover:w-full transition-all duration-500" />
          </span>
          <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </Link>
        
        <div className="w-px h-4 bg-white/10" />

        <Magnetic strength={0.1}>
          <Link href="/contact">
            <Button 
              size="sm"
              className="h-10 px-6 text-[10px] bg-gradient-to-r from-[#1B3022] to-[#2D4C39] text-white hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(45,76,57,0.4)] transition-all duration-300 rounded-full font-bold border-0 shadow-[0_10px_20px_rgba(0,0,0,0.2)] group !rounded-full"
            >
              Book Consultation
            </Button>
          </Link>
        </Magnetic>
      </div>
    </div>
  );
};
