'use client';

import React, { useState, useRef } from 'react';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { TextReveal } from '@/components/atoms/TextReveal';
import { SVGSpine } from '@/components/atoms/SVGSpine';
import { Lock, ArrowRight, Clock, FileText, MessageSquare } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function VaultPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useGSAP(() => {
    gsap.from('.fade-up', { y: 40, opacity: 0, duration: 1.2, stagger: 0.1, ease: 'power3.out' });
  }, { scope: containerRef, dependencies: [isAuthenticated] });

  if (!isAuthenticated) {
    return (
      <main ref={mainRef} className="min-h-screen bg-canvas selection:bg-heritage selection:text-canvas relative transition-colors duration-1000">
        <div ref={containerRef} className="relative">
          <SVGSpine height="100%" viewBox="0 0 20 100" pathD="M 10 0 L 10 100" className="opacity-07" />
          <section className="min-h-screen flex items-center justify-center py-12" data-bg="var(--color-canvas)">
            <div className="max-w-md w-full px-6 space-y-8 text-center fade-up">
              <div className="space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full border border-heritage/20 flex items-center justify-center text-heritage"><Lock size={20} /></div>
                <Badge variant="outline" className="border-heritage/20 text-heritage uppercase tracking-widest font-bold px-4 py-1 text-[9px]">Client Login</Badge>
                <TextReveal as="h1" text="The Vault." className="text-4xl md:text-5xl font-serif text-text-primary font-bold italic" />
                <p className="text-text-secondary font-sans font-light text-sm">Enter your key to view your event details.</p>
              </div>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsAuthenticated(true); }}>
                <input type="password" placeholder="ENTER ACCESS KEY" className="w-full bg-transparent border-b border-linen focus:border-heritage py-2 text-text-primary outline-none transition-colors text-center text-xl" />
                <Button variant="solid" className="w-full btn-prestige py-5 text-sm shadow-lg">Unlock <ArrowRight size={16} className="ml-2" /></Button>
              </form>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main ref={mainRef} className="min-h-screen bg-surface transition-colors duration-1000">
      <div ref={containerRef} className="container py-12 space-y-12">
        <header className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-linen pb-8 fade-up">
          <div className="space-y-4">
            <Badge variant="solid" className="bg-heritage/10 text-heritage uppercase tracking-widest font-bold text-[9px] py-1 px-4">Event Live</Badge>
            <h1 className="text-4xl md:text-6xl font-serif text-text-primary font-bold italic">Your Event</h1>
            <p className="text-[11px] font-sans uppercase tracking-[0.4em] text-text-secondary">Private Dashboard</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-widest text-heritage font-bold">Days to Go</p>
            <div className="text-3xl md:text-5xl font-serif text-text-primary italic">42</div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6 fade-up">
            <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-heritage">01 / DOCUMENTS</h3>
            <div className="bg-canvas border border-linen p-8 flex flex-col items-center justify-center text-center space-y-4 group cursor-pointer hover:border-heritage transition-all shadow-sm">
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-heritage group-hover:scale-110 transition-transform shadow-inner"><FileText size={24} /></div>
              <div>
                <h4 className="text-xl font-serif text-text-primary font-bold italic">The Plan</h4>
                <p className="text-[13px] text-text-secondary mt-1">Updated recently by our team.</p>
              </div>
              <Button variant="outline" className="btn-outline-prestige text-[10px] px-8 h-10">Open File</Button>
            </div>
          </div>

          <div className="space-y-8 fade-up">
            <div className="space-y-4">
              <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-heritage">02 / CHAT</h3>
              <div className="bg-canvas border border-linen p-6 space-y-4 shadow-sm">
                <div className="flex items-center gap-3 border-b border-linen pb-4">
                  <div className="w-10 h-10 rounded-full bg-heritage/10 flex items-center justify-center text-heritage shadow-inner"><MessageSquare size={16} /></div>
                  <h4 className="text-sm font-bold text-text-primary">Our Team</h4>
                </div>
                <div className="h-32 overflow-y-auto pr-2">
                  <div className="bg-surface p-4 rounded-lg text-[13px] text-text-secondary">We've updated your event map. Take a look!</div>
                </div>
                <div className="flex gap-2">
                  <input type="text" placeholder="Reply..." className="flex-grow bg-surface border border-linen py-2 px-4 text-[13px] outline-none focus:border-heritage" />
                  <Button variant="ghost" className="text-heritage"><ArrowRight size={18} /></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function CheckCircle({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
