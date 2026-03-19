'use client';

import React, { useState, useRef } from 'react';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { TextReveal } from '@/components/atoms/TextReveal';
import { Lock, ArrowRight, Clock, FileText, MessageSquare } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function VaultPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useGSAP(() => {
    gsap.from('.fade-up', {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: 'power3.out',
    });
  }, { scope: containerRef, dependencies: [isAuthenticated] });

  if (!isAuthenticated) {
    return (
      <main ref={containerRef} className="min-h-screen bg-canvas pt-32 pb-24 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-heritage/5 blur-[200px] pointer-events-none" />
        <div className="max-w-md w-full px-6 space-y-12 relative z-10 text-center fade-up">
          <div className="space-y-6">
            <div className="mx-auto w-16 h-16 rounded-full border border-heritage/30 flex items-center justify-center text-heritage mb-8">
              <Lock size={24} strokeWidth={1} />
            </div>
            <Badge variant="outline" className="border-heritage text-heritage uppercase tracking-widest font-bold">Client Portal</Badge>
            <h1 className="text-4xl font-serif text-text-primary font-bold">The <span className="text-heritage italic font-light">Vault</span>.</h1>
            <p className="text-text-secondary font-sans font-light text-sm">Enter your private access key to view your event blueprint and details.</p>
          </div>
          
          <form className="space-y-8 text-left" onSubmit={(e) => { e.preventDefault(); setIsAuthenticated(true); }}>
            <div className="space-y-4">
              <label className="text-[11px] uppercase tracking-[0.3em] text-heritage font-bold">Access Key</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-transparent border-b border-linen focus:border-heritage py-4 text-text-primary outline-none transition-colors font-light tracking-widest text-center"
              />
            </div>
            <Button variant="solid" className="w-full btn-prestige py-6">Unlock Vault <ArrowRight size={16} className="ml-2" /></Button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main ref={containerRef} className="min-h-screen bg-surface pt-32 pb-24 selection:bg-heritage selection:text-canvas">
      <div className="container mx-auto px-6 space-y-16">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-linen pb-12 fade-up">
          <div className="space-y-4">
            <Badge variant="solid" className="bg-heritage/10 text-heritage uppercase tracking-widest font-bold">Active Project</Badge>
            <h1 className="text-4xl md:text-5xl font-serif text-text-primary font-bold">The Kapoor <span className="text-heritage italic font-light">Gala</span></h1>
            <p className="text-sm font-sans uppercase tracking-[0.4em] text-text-secondary">Ref: ZB-2026-KP</p>
          </div>
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-widest text-heritage font-bold mb-2">Countdown</p>
            <div className="text-3xl font-serif text-text-primary">42 <span className="text-base text-text-secondary italic">Days</span></div>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Blueprint */}
          <div className="lg:col-span-2 space-y-8 fade-up">
            <h3 className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-heritage">Event Blueprint</h3>
            <div className="bg-canvas border border-linen p-8 aspect-video flex flex-col items-center justify-center text-center space-y-6 group cursor-pointer hover:border-heritage transition-colors">
              <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center text-heritage group-hover:scale-110 transition-transform">
                <FileText size={24} strokeWidth={1} />
              </div>
              <div>
                <h4 className="text-xl font-serif text-text-primary font-bold">Master Itinerary</h4>
                <p className="text-xs text-text-secondary mt-2">Last updated: 2 hours ago</p>
              </div>
              <Button variant="outline" className="btn-outline-prestige text-[10px]">View Document</Button>
            </div>
          </div>

          {/* Sidebar Tools */}
          <div className="space-y-8 fade-up delay-100">
            <h3 className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-heritage">Concierge</h3>
            
            <div className="bg-canvas border border-linen p-8 space-y-6">
              <div className="flex items-center gap-4 border-b border-linen pb-6">
                <div className="relative w-12 h-12 rounded-full bg-heritage/10 flex items-center justify-center text-heritage">
                  <MessageSquare size={18} />
                  <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-canvas rounded-full" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-primary">Your Agent</h4>
                  <p className="text-[10px] uppercase tracking-widest text-text-secondary">Online Now</p>
                </div>
              </div>
              <div className="space-y-4 text-sm font-light text-text-secondary h-48 overflow-y-auto">
                <div className="bg-surface p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl w-[85%]">
                  <p>The floral samples have arrived at the studio. Shall I send photos?</p>
                  <span className="text-[8px] uppercase mt-2 block opacity-50">10:42 AM</span>
                </div>
              </div>
              <input 
                type="text" 
                placeholder="Type a message..." 
                className="w-full bg-surface border border-linen py-3 px-4 text-xs outline-none focus:border-heritage"
              />
            </div>
            
            <div className="bg-canvas border border-linen p-8 space-y-4">
              <h4 className="text-sm font-serif font-bold text-text-primary border-b border-linen pb-4">Key Milestones</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-4 text-heritage">
                  <CheckCircle size={16} /> <span className="line-through opacity-50">Venue Secured</span>
                </li>
                <li className="flex items-center gap-4 text-heritage">
                  <CheckCircle size={16} /> <span className="line-through opacity-50">Menu Tasting</span>
                </li>
                <li className="flex items-center gap-4 text-text-primary">
                  <Clock size={16} className="text-burnished" /> <span>Decor Walkthrough (Pending)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function CheckCircle(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
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
