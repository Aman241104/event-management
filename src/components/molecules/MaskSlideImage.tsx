'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface MaskSlideImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
}

export function MaskSlideImage({ src, alt, className, aspectRatio = 'aspect-[3/4]', priority = false }: MaskSlideImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    });

    tl.to(maskRef.current, {
      yPercent: 100,
      duration: 1.5,
      ease: 'expo.inOut',
    });

    tl.from(imageWrapperRef.current, {
      scale: 1.2,
      duration: 2,
      ease: 'power3.out',
    }, 0);
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef}
      className={cn("relative overflow-hidden group", aspectRatio, className)}
    >
      {/* The Actual Image Wrapper */}
      <div ref={imageWrapperRef} className="w-full h-full relative">
        <Image 
          src={src} 
          alt={alt} 
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      
      {/* The Reveal Mask */}
      <div 
        ref={maskRef}
        className="absolute inset-0 bg-bg-main z-20 pointer-events-none"
      />

      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 pointer-events-none" />
    </div>
  );
}
