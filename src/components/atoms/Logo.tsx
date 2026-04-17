import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  scrolled?: boolean;
}

export function Logo({ scrolled = false }: LogoProps) {
  return (
    <div className="flex items-center space-x-3 cursor-pointer group">
      <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center p-0.5 bg-surface border border-burnished/30 rounded-full shadow-sm group-hover:border-burnished/60 transition-colors duration-700">
        <Image 
          src="/logo.jpeg" 
          alt="Zing Bliss Logo" 
          width={32} 
          height={32} 
          className="object-cover rounded-full transition-transform duration-1000 group-hover:scale-110 w-full h-full"
        />
      </div>
      <div className="flex flex-col -space-y-0.5">
        <span className={cn(
          "text-base md:text-lg font-serif tracking-widest uppercase font-bold transition-colors duration-700",
          scrolled ? "text-text-primary" : "text-white"
        )}>
          Zing Bliss
        </span>
        <span className={cn(
          "text-[7px] md:text-[9px] font-sans font-bold uppercase tracking-[0.4em] transition-colors duration-700",
          scrolled ? "text-heritage" : "text-burnished-light/80"
        )}>
          Bespoke Events
        </span>
      </div>
    </div>
  );
}
