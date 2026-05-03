'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Magnetic } from '@/components/atoms/Magnetic';
import { Button } from '@/components/atoms/Button';
import { ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';

export const StickyCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const heroHeight = windowHeight * 0.8;
      
      // Hide if in hero or at footer
      const isAtFooter = scrollY + windowHeight > documentHeight - 150;
      
      if (scrollY > heroHeight && !isAtFooter) {
        if (!isVisible) setIsVisible(true);
      } else {
        if (isVisible) setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      gsap.fromTo(containerRef.current,
        { y: 100, opacity: 0, scale: 0.8, filter: 'blur(10px)' },
        { y: 0, opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.2, ease: "expo.out", pointerEvents: 'auto' }
      );
      setHasAnimatedIn(true);
    } else if (hasAnimatedIn) {
      gsap.to(containerRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.8,
        filter: 'blur(10px)',
        duration: 0.8,
        ease: "expo.in",
        pointerEvents: 'none'
      });
    }
  }, [isVisible, hasAnimatedIn]);

  return (
    <div 
      ref={containerRef}
      className={cn(
        "fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-[100] flex items-center p-1.5 md:p-2 bg-heritage/90 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(212,185,130,0.05)] opacity-0 pointer-events-none group/bar w-[calc(100%-2.5rem)] md:w-auto max-w-lg"
      )}
    >
      <div className="flex items-center justify-between md:justify-start gap-2 md:gap-4 w-full px-1">
        {/* Left Side: View Work */}
        <Magnetic strength={0.1}>
          <Link 
            href="/gallery" 
            className="px-4 md:px-8 py-2.5 md:py-3.5 text-[8px] md:text-[9px] xl:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-white/50 hover:text-white transition-all duration-500 rounded-full hover:bg-white/5 whitespace-nowrap"
          >
            View Work
          </Link>
        </Magnetic>
        
        {/* Vertical Divider for Mobile */}
        <div className="w-px h-4 bg-white/10 md:hidden" />
        
        {/* Right Side: Book Consultation */}
        <Magnetic strength={0.15}>
          <Link href="/contact" className="relative block flex-grow md:flex-grow-0">
            <div 
              className="h-10 md:h-12 px-5 md:px-10 flex items-center justify-center gap-2 md:gap-4 bg-[#D4B982] text-black hover:bg-white hover:scale-[1.02] transition-all duration-700 rounded-full font-bold shadow-[0_10px_20px_rgba(212,185,130,0.15)] tracking-[0.2em] md:tracking-[0.3em] uppercase relative overflow-hidden group/btn"
            >
              <span className="whitespace-nowrap text-[8px] md:text-[9px] xl:text-[10px]">Book Consultation</span>
              <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-black/5 group-hover/btn:bg-[#D4B982]/10 transition-colors">
                <Sparkles size={11} className="animate-luxury-pulse md:w-3.5 md:h-3.5" />
              </div>
              
              {/* Internal Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out" />
            </div>
          </Link>
        </Magnetic>
      </div>
      
      {/* Dynamic Ambient Glow */}
      <div className="absolute -inset-2 bg-[#D4B982]/5 blur-3xl rounded-full opacity-0 group-hover/bar:opacity-100 transition-opacity duration-1000 pointer-events-none" />
    </div>
  );
};
