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
    // Initial reveal
    gsap.from('.fade-up', {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: 'power3.out',
    });

    // Background color shifts
    const sections = gsap.utils.toArray<HTMLElement>('section[data-bg]');
    sections.forEach((section) => {
      const bgColor = section.getAttribute('data-bg');
      if (bgColor) {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 50%',
          end: 'bottom 50%',
          onEnter: () => gsap.to(mainRef.current, { backgroundColor: bgColor, duration: 1.2, ease: 'power2.inOut' }),
          onEnterBack: () => gsap.to(mainRef.current, { backgroundColor: bgColor, duration: 1.2, ease: 'power2.inOut' }),
        });
      }
    });
  }, { scope: containerRef, dependencies: [isAuthenticated] });

  if (!isAuthenticated) {
    return (
      <main ref={mainRef} className="min-h-screen bg-canvas selection:bg-heritage selection:text-canvas relative transition-colors duration-1000">
        <div ref={containerRef} className="relative">
          <SVGSpine height="100%" viewBox="0 0 20 100" pathD="M 10 0 L 10 100" className="opacity-07" />
          
          <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-24 md:py-32" data-bg="var(--color-canvas)">
            <div className="absolute inset-0 bg-heritage/5 blur-[150px] pointer-events-none" />
            <div className="max-w-md w-full px-6 space-y-10 relative z-10 text-center fade-up">
              <div className="space-y-6">
                <div className="flex flex-col items-center gap-4 mb-2">
                  <span className="text-[9px] font-mono text-heritage/40 uppercase tracking-[0.5em]">09 / VAULT — SECURE ARCHIVE</span>
                  <div className="mx-auto w-14 h-14 rounded-full border border-heritage/20 flex items-center justify-center text-heritage">
                    <Lock size={20} strokeWidth={1} />
                  </div>
                </div>
                <Badge variant="outline" className="border-heritage/20 text-heritage uppercase tracking-widest font-bold px-5 py-1.5 text-[9px]">Client Portal</Badge>
                <TextReveal 
                  as="h1"
                  text="The Vault."
                  className="text-5xl md:text-6xl font-serif text-text-primary font-bold italic"
                />
                <p className="text-text-secondary font-sans font-light text-sm leading-relaxed">Enter your private access key to view your <br/>bespoke event blueprint and archival details.</p>
              </div>
              
              <form className="space-y-6 text-left" onSubmit={(e) => { e.preventDefault(); setIsAuthenticated(true); }}>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-heritage font-bold block text-center">Access Key</label>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full bg-transparent border-b border-linen focus:border-heritage py-3 text-text-primary outline-none transition-colors font-light tracking-widest text-center text-xl"
                  />
                </div>
                <Button variant="solid" className="w-full btn-prestige py-6 text-base font-bold shadow-lg">Unlock Vault <ArrowRight size={18} className="ml-2" /></Button>
              </form>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main ref={mainRef} className="min-h-screen bg-surface selection:bg-heritage selection:text-canvas relative transition-colors duration-1000">
      <div ref={containerRef} className="relative">
        <SVGSpine height="100%" viewBox="0 0 20 100" pathD="M 10 0 L 10 100" className="opacity-07" />

        <section className="py-24 md:py-32" data-bg="var(--color-surface)">
          <div className="container space-y-16">
            
            {/* Header */}
            <header className="flex flex-col md:flex-row justify-between items-end gap-10 border-b border-linen pb-10 fade-up">
              <div className="space-y-6">
                <div className="flex flex-col gap-4">
                  <span className="text-[9px] font-mono text-heritage/40 uppercase tracking-[0.5em]">ACTIVE REPOSITORY — REF: ZB-2026-KP</span>
                  <Badge variant="solid" className="bg-heritage/10 text-heritage uppercase tracking-widest font-bold w-fit text-[9px] py-1 px-4">In Production</Badge>
                </div>
                <TextReveal 
                  as="h1"
                  text="The Kapoor Gala"
                  className="text-5xl md:text-7xl font-serif text-text-primary font-bold italic"
                />
                <p className="text-[11px] font-sans uppercase tracking-[0.4em] text-text-secondary">Signature Event Design • Private Collection</p>
              </div>
              <div className="text-right space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-heritage font-bold">Time to Ceremony</p>
                <div className="text-4xl md:text-6xl font-serif text-text-primary italic">42 <span className="text-lg text-text-secondary font-light">Days</span></div>
              </div>
            </header>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Main Blueprint */}
              <div className="lg:col-span-2 space-y-10 fade-up">
                <div className="flex items-center gap-4">
                  <span className="text-[9px] font-mono text-heritage/40 uppercase tracking-[0.5em]">01 / BLUEPRINT</span>
                  <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-heritage">Master Itinerary</h3>
                </div>
                <div className="bg-canvas border border-linen p-10 aspect-video flex flex-col items-center justify-center text-center space-y-6 group cursor-pointer hover:border-heritage transition-all duration-700 shadow-sm hover:shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-heritage/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center text-heritage group-hover:scale-110 transition-transform shadow-inner relative z-10">
                    <FileText size={28} strokeWidth={1} />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-2xl md:text-3xl font-serif text-text-primary font-bold italic">Interactive Floor Plan & Timeline</h4>
                    <p className="text-[13px] text-text-secondary mt-3 font-light">Revision 4.2 • Updated 2 hours ago by Aryan S.</p>
                  </div>
                  <Button variant="outline" className="btn-outline-prestige text-[10px] px-10 py-3.5 relative z-10 h-12">Launch Viewer</Button>
                </div>
              </div>

              {/* Sidebar Tools */}
              <div className="space-y-12 fade-up">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-[9px] font-mono text-heritage/40 uppercase tracking-[0.5em]">02 / CONCIERGE</span>
                    <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-heritage">Direct Line</h3>
                  </div>
                  
                  <div className="bg-canvas border border-linen p-8 space-y-6 shadow-sm">
                    <div className="flex items-center gap-4 border-b border-linen pb-6">
                      <div className="relative w-14 h-14 rounded-full bg-heritage/10 flex items-center justify-center text-heritage shadow-inner">
                        <MessageSquare size={20} />
                        <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-canvas rounded-full animate-pulse" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-text-primary">Sonia Kapoor</h4>
                        <p className="text-[9px] uppercase tracking-widest text-text-secondary font-bold">Lead Strategist • Online</p>
                      </div>
                    </div>
                    <div className="space-y-4 text-sm font-light text-text-secondary h-48 overflow-y-auto pr-3 scrollbar-thin">
                      <div className="bg-surface p-5 rounded-tr-xl rounded-bl-xl rounded-br-xl w-[90%] shadow-sm">
                        <p className="leading-relaxed text-[13px]">The floral samples have arrived at the studio. I&apos;ve uploaded the high-res photos to the gallery. Shall we jump on a quick call?</p>
                        <span className="text-[8px] uppercase mt-3 block opacity-50 font-bold tracking-widest">10:42 AM • RECEIVED</span>
                      </div>
                    </div>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Type a message..." 
                        className="w-full bg-surface border border-linen py-4 px-5 text-[13px] outline-none focus:border-heritage transition-colors"
                      />
                      <Button variant="ghost" className="absolute right-1.5 top-1/2 -translate-y-1/2 text-heritage p-2"><ArrowRight size={18} /></Button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-[9px] font-mono text-heritage/40 uppercase tracking-[0.5em]">03 / STATUS</span>
                    <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-heritage">Key Milestones</h4>
                  </div>
                  <div className="bg-canvas border border-linen p-8 space-y-6 shadow-sm">
                    <ul className="space-y-4 text-sm font-light">
                      <li className="flex items-center gap-4 text-heritage">
                        <div className="w-7 h-7 rounded-full bg-heritage/10 flex items-center justify-center">
                          <CheckCircle size={14} />
                        </div>
                        <span className="line-through opacity-50">Venue Secured (Palace Grounds)</span>
                      </li>
                      <li className="flex items-center gap-4 text-heritage">
                        <div className="w-7 h-7 rounded-full bg-heritage/10 flex items-center justify-center">
                          <CheckCircle size={14} />
                        </div>
                        <span className="line-through opacity-50">Menu Tasting & Selection</span>
                      </li>
                      <li className="flex items-center gap-4 text-text-primary">
                        <div className="w-7 h-7 rounded-full bg-burnished/10 flex items-center justify-center text-burnished">
                          <Clock size={14} />
                        </div>
                        <span className="font-bold">Decor Walkthrough (Feb 12)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function CheckCircle({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
