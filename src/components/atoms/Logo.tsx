import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  scrolled?: boolean;
  className?: string;
  variant?: 'navbar' | 'footer';
}

export function Logo({ scrolled = false, className, variant = 'navbar' }: LogoProps) {
  // Use slightly larger dimensions for the logo image to be readable
  const dimensions = variant === 'navbar' ? 'w-16 h-16 md:w-20 md:h-20' : 'w-24 h-24 md:w-28 md:h-28';
  
  return (
    <div className={cn("flex items-center group cursor-pointer", className)}>
      <div className={cn(
        "relative transition-all duration-700 group-hover:scale-105",
        dimensions
      )}>
        <Image
          src="/logo.png"
          alt="Zing Bliss Events"
          fill
          className={cn(
            "object-contain transition-all duration-700",
            // If it's the footer (light background) and the logo has a black background, 
            // we might want to apply some treatment, but for now let's keep it clean.
            variant === 'footer' ? "brightness-100" : "brightness-110"
          )}
          priority
        />
      </div>
    </div>
  );
}
