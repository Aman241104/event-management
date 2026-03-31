import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  scrolled?: boolean;
}

export function Logo({ scrolled = false }: LogoProps) {
  return (
    <div className="flex items-center space-x-3 md:space-x-4 cursor-pointer group">
      <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center p-1 bg-surface border border-burnished/50 rounded-full shadow-sm group-hover:border-burnished transition-colors duration-700">
        <Image 
          src="/logo.jpeg" 
          alt="Zing Bliss Logo" 
          width={40} 
          height={40} 
          className="object-cover rounded-full transition-transform duration-1000 group-hover:scale-110 w-full h-full"
        />
      </div>
      <div className="flex flex-col">
        <span className={cn(
          "text-lg md:text-xl font-serif tracking-widest uppercase font-bold transition-colors duration-700",
          scrolled ? "text-text-primary" : "text-white"
        )}>
          Zing Bliss
        </span>
        <span className={cn(
          "text-[8px] md:text-[10px] font-sans font-bold uppercase tracking-[0.4em] transition-colors duration-700",
          scrolled ? "text-heritage" : "text-burnished-light"
        )}>
          Bespoke Events
        </span>
      </div>
    </div>
  );
}
