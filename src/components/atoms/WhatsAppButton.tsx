'use client';

import React from 'react';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';
import { Magnetic } from '@/components/atoms/Magnetic';
import { cn } from '@/lib/utils';

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[90] w-max">
      <Magnetic strength={0.3}>
        <a
          href={getGenericWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "h-14 md:h-16 px-8 md:px-12 rounded-full bg-[#9B224E] text-white flex items-center justify-center shadow-[0_20px_50px_rgba(155,34,78,0.3)] transition-all hover:scale-105 active:scale-95 group relative overflow-hidden",
            "text-[10px] md:text-[12px] font-bold uppercase tracking-[0.2em]"
          )}
          aria-label="Start my event planning on WhatsApp"
        >
          {/* Animated Background Pulse */}
          <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-150 rounded-full transition-transform duration-700" />
          
          <span className="relative z-10">Start my event planning</span>
        </a>
      </Magnetic>
    </div>
  );
}
