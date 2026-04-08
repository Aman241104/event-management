'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';
import { Magnetic } from '@/components/atoms/Magnetic';
import { cn } from '@/lib/utils';

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-8 right-8 z-[90]">
      <Magnetic strength={0.3}>
        <a 
          href={getGenericWhatsAppLink()} 
          target="_blank" 
          rel="noopener noreferrer"
          className={cn(
            "w-14 h-14 md:w-16 md:h-16 rounded-full bg-heritage text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110",
            "group relative overflow-hidden"
          )}
          aria-label="Contact on WhatsApp"
        >
          {/* Animated Background Pulse */}
          <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 rounded-full transition-transform duration-700" />
          
          <MessageCircle size={24} className="relative z-10 md:w-7 md:h-7" />
          
          {/* Tooltip/Label */}
          <span className="absolute right-full mr-4 bg-heritage text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 hidden md:block">
            Chat with Concierge
          </span>
        </a>
      </Magnetic>
    </div>
  );
}
