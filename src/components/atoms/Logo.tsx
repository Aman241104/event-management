import React from 'react';
import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center space-x-4 cursor-pointer group">
      <div className="relative w-10 h-10 flex items-center justify-center">
        <Image 
          src="/logo.jpeg" 
          alt="Zing Bliss Logo" 
          width={40} 
          height={40} 
          className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-serif tracking-widest text-text-primary uppercase font-light">
          Zing Bliss
        </span>
        <span className="text-[8px] font-sans font-medium uppercase tracking-[0.4em] text-text-light">
          Fine Art Events
        </span>
      </div>
    </div>
  );
}
