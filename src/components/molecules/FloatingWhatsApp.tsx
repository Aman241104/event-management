'use client';

import React from 'react';
import { WhatsAppLogo } from '@/components/atoms/WhatsAppLogo';
import { Magnetic } from '@/components/atoms/Magnetic';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[60] flex flex-col items-center gap-4">
      {/* Tooltip-style label */}
      <div className="hidden md:block bg-white/90 backdrop-blur-md px-4 py-2 border border-linen/30 shadow-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 pointer-events-none mb-2">
        <span className="text-[10px] font-bold text-heritage uppercase tracking-[0.2em] whitespace-nowrap">
          Chat with Concierge
        </span>
      </div>

      <Magnetic strength={0.3}>
        <a
          href={getGenericWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-[0_20px_40px_rgba(37,211,102,0.3)] transition-all duration-500 hover:scale-110 active:scale-95",
            "after:absolute after:inset-0 after:rounded-full after:bg-[#25D366] after:animate-ping after:opacity-20 after:z-[-1]"
          )}
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppLogo size={24} className="md:hidden relative z-10" fill="white" />
          <WhatsAppLogo size={32} className="hidden md:block relative z-10" fill="white" />
          
          {/* Decorative Ring */}
          <div className="absolute inset-[-4px] border border-[#25D366]/20 rounded-full scale-110 group-hover:scale-125 transition-transform duration-700" />
        </a>
      </Magnetic>
    </div>
  );
}
