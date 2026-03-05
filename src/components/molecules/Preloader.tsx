'use client';

import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { Logo } from '@/components/atoms/Logo';

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsVisible(false)
    });

    tl.to('.preloader-dot', {
      scale: 1.5,
      duration: 1,
      ease: 'power3.inOut'
    })
    .to('.preloader-logo', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.5')
    .to('.preloader-overlay', {
      yPercent: -100,
      duration: 1.2,
      ease: 'expo.inOut',
      delay: 0.5
    })
    .from('.main-content', {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out'
    }, '-=0.8');

  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center preloader-overlay bg-bg-main overflow-hidden">
      <div className="relative flex flex-col items-center gap-8">
        <div className="w-4 h-4 bg-secondary rounded-full preloader-dot" />
        <div className="preloader-logo opacity-0 translate-y-4">
          <Logo />
        </div>
      </div>
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-border-subtle/20" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-border-subtle/20" />
    </div>
  );
}
