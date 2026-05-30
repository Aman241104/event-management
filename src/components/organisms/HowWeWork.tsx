'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/atoms/Button';
import { Magnetic } from '@/components/atoms/Magnetic';
import { TextReveal } from '@/components/atoms/TextReveal';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    id: '01',
    label: 'VISION',
    title: 'Define Objectives',
    description: 'We begin by understanding your vision in detail, capturing every specific requirement to set the foundation for a perfect event.',
    image: '/assets/corporate/corporate-1.jpg',
    accent: 'rgba(212, 185, 130, 0.05)'
  },
  {
    id: '02',
    label: 'FINANCE',
    title: 'Budget Planning',
    description: 'Preparing a detailed budget that accounts for all major expenses while establishing protocols to monitor and control costs throughout the journey.',
    image: '/assets/corporate/corporate-2.jpg',
    accent: 'rgba(42, 77, 55, 0.1)'
  },
  {
    id: '03',
    label: 'CREATIVE',
    title: 'Planning & Design',
    description: 'Deciding the overarching theme and format, creating a comprehensive program schedule, and designing an immersive guest experience.',
    image: '/assets/wedding/wedding-5.jpg',
    accent: 'rgba(212, 185, 130, 0.05)'
  },
  {
    id: '04',
    label: 'LOCATION',
    title: 'Venue Selection',
    description: 'Choosing a suitable location, verifying capacity and accessibility, and confirming availability for your desired dates.',
    image: '/assets/wedding/wedding-8.jpg',
    accent: 'rgba(42, 77, 55, 0.1)'
  },
  {
    id: '05',
    label: 'COLLABORATION',
    title: 'Organize the Team',
    description: 'Assigning specific roles and responsibilities, appointing dedicated coordinators, and maintaining clear communication channels.',
    image: '/assets/corporate/corporate-3.jpg',
    accent: 'rgba(212, 185, 130, 0.05)'
  },
  {
    id: '06',
    label: 'PARTNERSHIP',
    title: 'Vendor Management',
    description: 'Hiring and coordinating premier vendors (caterers, decorators, A/V, photographers) and ensuring the timely delivery of services.',
    image: '/assets/production/production-1.jpg',
    accent: 'rgba(42, 77, 55, 0.1)'
  },
  {
    id: '07',
    label: 'HOSPITALITY',
    title: 'Invitation & Gifting',
    description: 'Curating personalized invitations, managing guest lists with precision, and sourcing bespoke gifting experiences that resonate.',
    image: '/assets/wedding/wedding-4.jpg',
    accent: 'rgba(212, 185, 130, 0.05)'
  },
  {
    id: '08',
    label: 'OPERATIONS',
    title: 'Logistics Control',
    description: 'Planning all operational requirements, arranging transport, equipment, and setup, while managing registration and security.',
    image: '/assets/corporate/corporate-4.jpg',
    accent: 'rgba(42, 77, 55, 0.1)'
  },
  {
    id: '09',
    label: 'MOMENT',
    title: 'Seamless Execution',
    description: 'On-site management where our team orchestrates every detail in real-time, delivering a flawless and cinematic experience.',
    image: '/assets/wedding/wedding-7.jpg',
    accent: 'rgba(212, 185, 130, 0.05)'
  },
  {
    id: '10',
    label: 'REFLECTION',
    title: 'Post-Event Review',
    description: 'Collecting invaluable feedback from attendees, reviewing the final budget, and identifying key learnings for future excellence.',
    image: '/assets/corporate/corporate-5.jpg',
    accent: 'rgba(42, 77, 55, 0.1)'
  }
];

export const HowWeWork = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.process-card');
    
    cards.forEach((card, i) => {
      const cardInner = card.querySelector('.card-inner');
      const cardVisual = card.querySelector('.visual-side');
      const cardText = card.querySelector('.text-side');

      if (i < cards.length - 1) {
        const nextCard = cards[i + 1];
        
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          endTrigger: nextCard,
          end: 'top top',
          pin: true,
          pinSpacing: false,
          scrub: true,
          animation: gsap.to(cardInner, {
            scale: 0.97,
            opacity: 1, // Keep cards fully opaque to prevent blackout
            y: -20,
            filter: 'none', // Removed brightness/blur to ensure absolute clarity
            duration: 1,
            ease: 'none'
          })
        });
      }

      // Enhanced Entrance animation for each card
      gsap.from(cardVisual, {
        x: -100,
        opacity: 0,
        scale: 0.8,
        rotateY: 20,
        duration: 1.8,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });

      gsap.from(cardText, {
        x: 100,
        opacity: 0,
        duration: 1.8,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative bg-[#05100a] overflow-hidden"
      id="how-we-work"
    >
      {/* Editorial Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none opacity-[0.02]">
           <span className="text-[40vw] font-serif italic text-white leading-none tracking-tighter block text-center uppercase">Legacy</span>
         </div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,185,130,0.03)_0%,_transparent_70%)]" />
      </div>

      {/* Sticky Header Section */}
      <div className="pt-32 md:pt-48 pb-10 container relative z-50 text-center">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="flex flex-col items-center gap-8 fade-up">
            <div className="flex items-center gap-6">
              <div className="w-16 h-px bg-[#D4B982]/30" />
              <span className="text-[12px] text-[#D4B982] uppercase tracking-[1em] font-bold">THE METHODOLOGY</span>
              <div className="w-16 h-px bg-[#D4B982]/30" />
            </div>
            <h2 className="text-7xl md:text-9xl lg:text-[11rem] font-serif font-medium text-white tracking-tighter leading-[0.8] uppercase">
              Our <span className="text-[#D4B982] italic font-script lowercase text-[1.1em] normal-case tracking-normal block md:inline">Signature</span> <br/> Journey
            </h2>
          </div>
          <div className="flex justify-center pt-8 fade-up">
            <p className="text-white/30 text-lg md:text-2xl font-serif italic max-w-2xl leading-relaxed py-8 px-12 border-t border-[#D4B982]/10">
              Ten definitive stages of precision, designed to transform <br className="hidden md:block"/>
              ambition into an unforgettable reality.
            </p>
          </div>
        </div>
      </div>

      {/* The Stacking Deck Area */}
      <div className="relative">
        {steps.map((step, index) => (
          <div 
            key={step.id}
            className="process-card sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-[#05100a]"
          >
            {/* Background Glow based on card accent */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none" 
              style={{ background: `radial-gradient(circle at center, ${step.accent} 0%, transparent 70%)` }}
            />

            {/* Card Internal Content - Magazine Spread Style */}
            <div className="card-inner container h-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 pt-12 md:pt-16">
              
              {/* Visual Side - Editorial Frame */}
              <div className="visual-side w-full lg:w-[42%] aspect-[3/4] lg:h-[65vh] relative group">
                {/* Decorative Offset Frame */}
                <div className="absolute -inset-4 border border-[#D4B982]/10 translate-x-4 translate-y-4 transition-transform duration-1000 group-hover:translate-x-0 group-hover:translate-y-0" />
                
                <div className="relative w-full h-full overflow-hidden shadow-[0_80px_150px_rgba(0,0,0,0.8)] border border-white/5 rounded-sm">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-[6000ms] group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0 transition-all"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  
                  {/* Luxury Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05100a] via-transparent to-transparent opacity-60" />
                  
                  {/* Step ID Overlay */}
                  <div className="absolute top-12 right-12 mix-blend-difference">
                    <span className="text-8xl md:text-[10rem] font-serif italic text-white/10 leading-none">
                      {step.id}
                    </span>
                  </div>

                  {/* Corner Label */}
                  <div className="absolute bottom-10 left-10 flex flex-col gap-2">
                     <div className="w-8 h-px bg-[#D4B982]" />
                     <span className="text-[10px] font-bold text-white uppercase tracking-[0.5em]">{step.label}</span>
                  </div>
                </div>
              </div>

              {/* Text Side - High End Typography */}
              <div className="text-side w-full lg:w-[50%] space-y-6 lg:space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                       <span className="text-[11px] font-mono text-[#D4B982] tracking-[0.6em] font-bold uppercase">STATION {step.id}</span>
                       <div className="h-0.5 w-full bg-[#D4B982]/20 mt-2" />
                    </div>
                  </div>
                  <h3 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tighter leading-[0.9] uppercase">
                    {step.title.split(' ').map((word, i) => (
                      <span key={i} className={cn("block", i === 0 ? "text-white" : "text-[#D4B982] italic")}>
                        {word}
                      </span>
                    ))}
                  </h3>
                </div>

                <div className="space-y-6 md:space-y-8">
                  <p className="text-white/50 text-xl md:text-2xl lg:text-3xl leading-relaxed font-light italic max-w-2xl border-l-4 border-[#D4B982]/30 pl-8">
                    &quot;{step.description}&quot;
                  </p>

                  <div className="flex flex-wrap gap-6 pt-2">
                     {['Luxury Experience', 'Tailored Design', 'Seamless Flow'].map((badge) => (
                       <div key={badge} className="flex items-center gap-3 group/badge cursor-default">
                          <div className="w-1.5 h-1.5 rotate-45 border border-[#D4B982] bg-transparent group-hover/badge:bg-[#D4B982] transition-colors" />
                          <span className="text-[11px] uppercase tracking-[0.3em] text-white/30 group-hover/badge:text-[#D4B982] transition-colors font-bold">{badge}</span>
                       </div>
                     ))}
                  </div>
                </div>

                {index === steps.length - 1 && (
                  <div className="pt-6 md:pt-10">
                    <Magnetic strength={0.1}>
                      <Link href="/contact">
                        <Button 
                          variant="ghost" 
                          className="btn-gold px-12 md:px-16 h-16 md:h-18 text-[11px] md:text-[12px] tracking-[0.4em] md:tracking-[0.5em] shadow-[0_20px_60px_rgba(179,139,77,0.3)] !text-black"
                        >
                          COMMENCE YOUR JOURNEY <ArrowRight size={20} className="ml-5" />
                        </Button>
                      </Link>
                    </Magnetic>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
