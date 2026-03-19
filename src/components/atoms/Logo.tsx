import React from 'react';
import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center space-x-3 md:space-x-4 cursor-pointer group">
      <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center p-1 bg-surface border border-burnished/30 rounded-full">
        <Image 
          src="/logo.jpeg" 
          alt="Zing Bliss Logo" 
          width={40} 
          height={40} 
          className="object-cover rounded-full transition-transform duration-700 group-hover:scale-110 w-full h-full"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-lg md:text-xl font-serif tracking-widest text-text-primary uppercase font-bold">
          Zing Bliss
        </span>
        <span className="text-[8px] md:text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-heritage">
          Bespoke Events
        </span>
      </div>
    </div>
  );
}
