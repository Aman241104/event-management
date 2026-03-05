'use client';

import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/atoms/Button';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';

export function ConciergeBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-40 p-4 md:hidden animate-fade-in-up">
      <div className="bg-bg-main/90 backdrop-blur-2xl border border-secondary/20 rounded-2xl p-4 shadow-2xl shadow-secondary/10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
            <MessageCircle size={20} />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">Private Concierge</p>
            <p className="text-xs text-text-primary font-serif italic">Available Now</p>
          </div>
        </div>
        <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer">
          <Button variant="gold" size="sm" className="rounded-full px-6">
            Message
          </Button>
        </a>
      </div>
    </div>
  );
}
