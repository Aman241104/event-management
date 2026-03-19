'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/atoms/Button';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';

export function ConciergeBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-40 p-6 md:hidden">
      <div className="bg-canvas/90 backdrop-blur-xl border border-linen rounded-none p-4 shadow-xl flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-heritage/10 flex items-center justify-center text-heritage">
            <MessageCircle size={16} strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-secondary">Concierge</p>
            <p className="text-[11px] text-text-primary font-serif italic">Online</p>
          </div>
        </div>
        <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer">
          <Button variant="solid" size="sm" className="btn-prestige px-6 py-2">
            Connect
          </Button>
        </a>
      </div>
    </div>
  );
}
