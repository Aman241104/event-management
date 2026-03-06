import React from 'react';
import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center space-x-4 cursor-pointer group">
      <div className="relative w-12 h-12 flex items-center justify-center p-1 bg-bg-surface/50 border border-secondary/30 rounded-full">
        <Image 
          src="/logo.jpeg" 
          alt="Zing Bliss Logo" 
          width={40} 
          height={40} 
          className="object-cover rounded-full transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-serif tracking-widest text-text-primary uppercase font-bold">
          Zing Bliss
        </span>
        <span className="text-[8px] font-sans font-bold uppercase tracking-[0.4em] text-secondary">
          Bespoke Events
        </span>
      </div>
    </div>
  );
}
