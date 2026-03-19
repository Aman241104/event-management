'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  speed?: number;
  priority?: boolean;
  aspectRatio?: string;
}

export function ParallaxImage({ 
  src, 
  alt, 
  className, 
  containerClassName,
  speed = 0.5,
  priority = false,
  aspectRatio = "aspect-video"
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    gsap.to(image, {
      yPercent: 20 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });
  }, [speed]);

  return (
    <div 
      ref={containerRef} 
      className={cn("relative overflow-hidden", aspectRatio, containerClassName)}
    >
      <div 
        ref={imageRef} 
        className="absolute -top-[10%] left-0 w-full h-[120%] relative"
      >
        <Image 
          src={src} 
          alt={alt} 
          fill
          priority={priority}
          className={cn("object-cover", className)}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
