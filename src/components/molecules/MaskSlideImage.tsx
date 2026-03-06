'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 92%',
      }
    });

    // Animate the mask to slide up and reveal the image
    tl.to(maskRef.current, {
      yPercent: -100,
      duration: 1.4,
      ease: 'power4.inOut',
    });

    // Scale the image down from 1.3 to 1 slightly overlapping the mask animation
    tl.fromTo(imageWrapperRef.current, 
      { scale: 1.3 },
      {
        scale: 1,
        duration: 1.8,
        ease: 'power3.out',
      }, 0.2
    );
  }, []);

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
          className="object-cover transition-all duration-[10s] group-hover:scale-105" 
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      
      {/* The Reveal Mask - Matches the background color */}
      <div 
        ref={maskRef}
        className="absolute inset-0 bg-bg-surface z-20 pointer-events-none origin-bottom"
      />

      {/* Very Subtle Decorative Overlay */}
      <div className="absolute inset-0 bg-primary/5 mix-blend-multiply z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-1000" />
    </div>
  );
}
