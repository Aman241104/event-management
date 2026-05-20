'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import { Button } from '@/components/atoms/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const verticals = [
  {
    id: '01',
    label: 'Management',
    title: 'Precision Orchestration',
    description: 'A seamless journey from initial briefing to final execution. Our team handles every logistical variable with absolute mastery, ensuring your vision is translated into reality without compromise.',
    image: '/assets/corporate/corporate-1.jpg',
    tags: ['Weddings', 'Corporate', 'Baby Shower', 'Birthday', 'Festivals']
  },
  {
    id: '02',
    label: 'Talent',
    title: 'Curated Entertainment',
    description: 'From Bollywood icons to international headline acts, we curate the rhythm of your celebration. We handle talent sourcing, hospitality, and performance logistics for a world-class show.',
    image: '/assets/wedding/wedding-4.jpg',
    tags: ['DJs', 'Bands', 'MC', 'Artists', 'Performance']
  },
  {
    id: '03',
    label: 'Tech',
    title: 'High Fidelity Production',
    description: 'Cinematic stage design, concert-grade sound, and immersive lighting. We bring technical precision to every event, using state-of-the-art AV solutions to create atmospheric excellence.',
    image: '/assets/production/production-1.jpg',
    tags: ['Sound', 'Light', 'AV', 'Decor', 'Stage Design']
  },
  {
    id: '04',
    label: 'Concierge',
    title: 'The 360° Vision',
    description: 'We integrate all verticals into a singular, cohesive masterpiece. Our concierge approach allows you to remain a guest at your own event while we manage the complex machinery behind the scenes.',
    image: '/assets/wedding/wedding-1.jpg',
    tags: ['Full Scale', 'Logistics', 'Security', 'RSVP', 'Mastery']
  }
];

export const SpecializedVerticalsAccordion = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const mm = gsap.matchMedia();

    // Desktop: Pinned Horizontal Scroll Accordion
    mm.add("(min-width: 1024px)", () => {
      const totalVerticals = verticals.length;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${totalVerticals * 100}%`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });

      // Animate each panel expanding/contracting
      verticals.forEach((_, index) => {
        if (index === 0) {
          // First one is already expanded (default state)
          // We need to animate it shrinking as the next one expands
          tl.to(`.panel-${index}`, { flexGrow: 1, duration: 1 }, 0.5);
          tl.to(`.panel-content-${index}`, { opacity: 0, x: -50, duration: 0.5 }, 0.5);
          tl.to(`.panel-label-${index}`, { opacity: 1, duration: 0.5 }, 0.5);
          tl.to(`.panel-image-${index}`, { opacity: 0.2, filter: 'grayscale(1)', duration: 1 }, 0.5);
        } else {
          // Panels from index 1 to N
          const startTime = index;
          
          // Expand current panel
          tl.fromTo(`.panel-${index}`, 
            { flexGrow: 1 }, 
            { flexGrow: 4, duration: 1 }, 
            startTime - 0.5
          );
          
          tl.fromTo(`.panel-content-${index}`, 
            { opacity: 0, x: 50 }, 
            { opacity: 1, x: 0, duration: 0.8 }, 
            startTime - 0.2
          );

          tl.fromTo(`.panel-label-${index}`,
            { opacity: 1 },
            { opacity: 0, duration: 0.3 },
            startTime - 0.5
          );

          tl.fromTo(`.panel-image-${index}`,
            { opacity: 0.2, filter: 'grayscale(1)' },
            { opacity: 0.4, filter: 'grayscale(0)', brightness: 0.7, duration: 1 },
            startTime - 0.5
          );

          // If not the last panel, shrink it when the next one starts
          if (index < totalVerticals - 1) {
            tl.to(`.panel-${index}`, { flexGrow: 1, duration: 1 }, startTime + 0.5);
            tl.to(`.panel-content-${index}`, { opacity: 0, x: -50, duration: 0.5 }, startTime + 0.5);
            tl.to(`.panel-label-${index}`, { opacity: 1, duration: 0.5 }, startTime + 0.5);
            tl.to(`.panel-image-${index}`, { opacity: 0.2, filter: 'grayscale(1)', duration: 1 }, startTime + 0.5);
          }
        }
      });
    });

    // Mobile: Vertical Stacked with Reveal
    mm.add("(max-width: 1023px)", () => {
      verticals.forEach((_, index) => {
        gsap.fromTo(`.panel-mobile-${index}`, 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1.2, 
            scrollTrigger: {
              trigger: `.panel-mobile-${index}`,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef}
      className="relative bg-[#05100a] overflow-hidden rounded-t-[3rem] md:rounded-t-[6rem] -mt-12 md:-mt-16 z-20"
      id="verticals"
    >
      <div className="absolute inset-0 dot-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-10 opacity-50" />
      
      {/* 1. Header Area - Remains visible or slides up */}
      <div className="container pt-12 lg:pt-16 pb-4 lg:pb-6 relative z-30">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-2 md:mb-3">
            <div className="w-10 h-px bg-[#D4B982]/40" />
            <span className="text-[10px] md:text-[11px] text-[#D4B982] uppercase tracking-[0.6em] md:tracking-[0.8em] font-bold">EXPERTISE SPECTRUM</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight tracking-tighter">
            Specialized <span className="italic font-script text-[#D4B982] lowercase text-5xl md:text-8xl ml-1 md:ml-2">Verticals.</span>
          </h2>
        </div>
      </div>

      {/* 2. Desktop Layout: The Scrubbing Accordion */}
      <div className="hidden lg:block h-screen w-full relative">
        <div 
          ref={containerRef}
          className="container h-full flex flex-col justify-center pt-8 pb-32"
        >
          <div className="flex h-[500px] w-full gap-4 overflow-hidden">
            {verticals.map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  "relative group overflow-hidden border border-white/5 flex-1",
                  `panel-${index}`
                )}
                style={{ flexGrow: index === 0 ? 4 : 1 }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className={cn(
                      "object-cover panel-image-base",
                      `panel-image-${index}`,
                      index === 0 ? "opacity-40 brightness-75 grayscale-0" : "opacity-20 brightness-50 grayscale"
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05100a] via-[#05100a]/40 to-transparent opacity-80" />
                </div>

                {/* Vertical Label (When shrunk) */}
                <div className={cn(
                  "absolute inset-0 z-10 flex items-center justify-center pointer-events-none",
                  `panel-label-${index}`,
                  index === 0 ? "opacity-0" : "opacity-100"
                )}>
                  <div className="rotate-90 whitespace-nowrap">
                    <span className="text-[12px] font-mono font-bold tracking-[0.8em] text-white/30 uppercase">
                      {item.id} / {item.label}
                    </span>
                  </div>
                </div>

                {/* Main Content (When expanded) */}
                <div className={cn(
                  "absolute inset-0 z-20 p-12 xl:p-16 flex flex-col justify-between",
                  `panel-content-${index}`,
                  index === 0 ? "opacity-100" : "opacity-0"
                )}>
                  <div className="flex items-start justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-[#D4B982]">
                        <span className="text-[14px] font-mono font-bold tracking-widest uppercase">{item.id} / {item.label}</span>
                        <div className="w-12 h-px bg-[#D4B982]/30" />
                      </div>
                      <h3 className="text-5xl xl:text-6xl font-serif text-white tracking-tight leading-tight max-w-lg">{item.title}</h3>
                    </div>
                    <div className="w-16 h-16 rounded-full border border-[#D4B982]/20 flex items-center justify-center">
                       <Star className="text-[#D4B982]" size={24} />
                    </div>
                  </div>

                  <div className="max-w-xl space-y-12">
                    <p className="text-white/70 text-lg xl:text-xl font-light italic leading-relaxed border-l-2 border-[#D4B982]/20 pl-10">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-5 py-2 border border-white/10 rounded-full text-[10px] text-white/40 uppercase tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Border Accent */}
                <div className="absolute inset-0 border border-white/10 pointer-events-none z-30" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Mobile Layout: High-Fidelity Cards */}
      <div className="lg:hidden container pb-16 space-y-8">
        {verticals.map((item, index) => (
          <div 
            key={item.id}
            className={cn(
              "panel-mobile-mobile relative overflow-hidden bg-heritage/10 border border-white/5 rounded-2xl",
              `panel-mobile-${index}`
            )}
          >
            <div className="relative aspect-[16/9] overflow-hidden">
               <Image src={item.image} alt={item.title} fill className="object-cover opacity-60 brightness-75" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#05100a] to-transparent" />
               <div className="absolute top-4 left-4 flex items-center gap-3">
                  <span className="text-[9px] font-mono font-bold text-[#D4B982] tracking-widest">{item.id}</span>
                  <div className="w-6 h-px bg-[#D4B982]/40" />
                  <span className="text-[9px] font-mono font-bold text-white/40 tracking-widest uppercase">{item.label}</span>
               </div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-serif text-white tracking-tight">{item.title}</h3>
              <p className="text-white/60 text-xs leading-relaxed font-light italic border-l border-[#D4B982]/20 pl-4">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                 {item.tags.slice(0, 4).map(tag => (
                   <span key={tag} className="px-3 py-1 border border-white/10 rounded-full text-[7px] text-white/40 uppercase tracking-widest">{tag}</span>
                 ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
