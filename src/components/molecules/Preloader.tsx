'use client';

import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsVisible(false)
    });

    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    tl.set('.preloader-text', { opacity: 1 })
      .fromTo('.preloader-text span', 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: 'expo.out'
        }
      )
      .to('.preloader-line', {
        scaleX: 1,
        duration: 2,
        ease: 'power4.inOut'
      }, '-=1')
      .to('.preloader-text', {
        opacity: 0,
        y: -40,
        duration: 1,
        ease: 'expo.inOut',
        delay: 0.8
      })
      .to('.preloader-panel', {
        yPercent: -100,
        duration: 1.5,
        stagger: 0.15,
        ease: 'expo.inOut'
      }, '-=0.5')
      .from('.main-content', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'expo.out',
        clearProps: 'all'
      }, '-=1');

    return () => clearInterval(progressInterval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden">
      <div className="absolute inset-0 preloader-panel bg-accent-azure z-20" />
      <div className="absolute inset-0 preloader-panel bg-accent-rose z-30" />
      <div className="absolute inset-0 preloader-panel bg-burnished z-40" />
      <div className="absolute inset-0 preloader-panel bg-heritage z-[45]" />
      <div className="absolute inset-0 preloader-panel bg-canvas z-50 flex flex-col items-center justify-center">
        <div className="preloader-text text-center space-y-8 relative">
          <div className="overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-serif text-text-primary tracking-[0.6em] uppercase font-bold flex gap-4">
              <span>ZING</span> <span>BLISS</span>
            </h2>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <div className="w-64 h-px bg-linen relative overflow-hidden">
              <div className="absolute inset-0 bg-heritage/40 preloader-line origin-left scale-x-0" />
            </div>
            <div className="flex items-center gap-4 text-[10px] font-mono text-heritage tracking-[0.4em] uppercase opacity-60">
              <span>Orchestrating Legacy</span>
              <span className="w-8 h-px bg-linen" />
              <span>{progress}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
