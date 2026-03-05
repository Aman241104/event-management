'use client';

import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsVisible(false)
    });

    tl.fromTo('.preloader-text span', 
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.1,
        ease: 'power4.out'
      }
    )
    .to('.preloader-text', {
      opacity: 0,
      y: -20,
      duration: 1,
      ease: 'power3.inOut',
      delay: 0.5
    })
    .to('.preloader-panel', {
      yPercent: -100,
      duration: 1.5,
      stagger: 0.1,
      ease: 'expo.inOut'
    })
    .from('.main-content', {
      y: 100,
      opacity: 0,
      duration: 2,
      ease: 'power4.out'
    }, '-=1');

  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none">
      {/* Three panels for a sophisticated staggered reveal */}
      <div className="absolute inset-0 preloader-panel bg-secondary z-30" />
      <div className="absolute inset-0 preloader-panel bg-primary z-40" />
      <div className="absolute inset-0 preloader-panel bg-bg-main z-50 flex items-center justify-center">
        <div className="preloader-text overflow-hidden">
          <h2 className="text-xl md:text-2xl font-serif text-text-primary tracking-[0.5em] uppercase font-light">
            <span>Zing</span> <span>Bliss</span>
          </h2>
          <div className="w-full h-px bg-primary/30 mt-4 origin-left scale-x-0 preloader-line" />
        </div>
      </div>
    </div>
  );
}
