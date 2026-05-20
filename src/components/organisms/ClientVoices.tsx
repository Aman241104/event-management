'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "The level of precision Zing Bliss brought to our annual gala was simply unprecedented. Every detail felt engineered for perfection.",
    author: "Elena Richardson",
    role: "Director of Events",
    company: "Global Tech Summit",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
    size: "large"
  },
  {
    quote: "They didn't just plan a wedding; they curated an experience that will be talked about for generations.",
    author: "Siddharth Malhotra",
    role: "Private Client",
    company: "Destination Wedding",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
    size: "small"
  },
  {
    quote: "Logistical mastery meets creative soul. Zing Bliss is the only agency we trust.",
    author: "Marcus Thorne",
    role: "CMO",
    company: "Aether Automotive",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
    size: "small"
  },
  {
    quote: "A seamless journey from start to finish. Their technical production quality is on par with major concert tours.",
    author: "Sarah Jenkins",
    role: "Producer",
    company: "Lumina Festivals",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
    size: "medium"
  }
];

export const ClientVoices = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.testimonial-card');
    cards.forEach((card, i) => {
      gsap.fromTo(card, 
        { opacity: 0, y: 60, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 1.4, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="py-12 md:py-20 bg-[#FDFBF7] relative overflow-hidden rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-12 md:-mt-16 z-20"
    >
      <div className="container relative z-10">
        <div className="max-w-4xl mb-10 md:mb-12">
          <div className="flex items-center gap-4 mb-2 md:mb-3">
            <div className="w-10 h-px bg-[#D4B982]/40" />
            <span className="text-[10px] md:text-[11px] text-[#D4B982] uppercase tracking-[0.6em] md:tracking-[0.8em] font-bold">CLIENT VOICES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-[#121212] leading-tight tracking-tighter">
            The Prestige <br />
            <span className="italic font-script text-[#D4B982] lowercase text-5xl md:text-7xl ml-1 md:ml-2">Endorsements.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {/* Main Large Card */}
          <div className="md:col-span-8 testimonial-card">
             <div className="bg-white border border-[#D4B982]/10 p-6 md:p-10 flex flex-col justify-between h-full space-y-8 shadow-[0_40px_100px_rgba(0,0,0,0.04)] relative group hover:border-[#D4B982]/30 transition-all duration-700">
                <Quote className="text-[#D4B982]/10 absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 md:w-20 md:h-20" />
                <div className="space-y-4 relative z-10">
                  <p className="text-base sm:text-lg md:text-2xl font-serif text-[#121212] leading-[1.3] italic">
                    &quot;{testimonials[0].quote}&quot;
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-[#D4B982]/10 pt-5 md:pt-6 gap-4">
                   <div className="flex items-center gap-4">
                      <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-[#D4B982]/20">
                        <Image 
                          src={testimonials[0].image} 
                          alt={testimonials[0].author} 
                          fill 
                          className="object-cover" 
                          sizes="48px"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs md:text-sm font-bold text-[#121212] uppercase tracking-wider">{testimonials[0].author}</span>
                        <span className="text-[9px] text-[#525252] font-mono tracking-[0.2em] uppercase">{testimonials[0].role} / {testimonials[0].company}</span>
                      </div>
                   </div>
                   <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} fill="#D4B982" className="text-[#D4B982] w-2.5 h-2.5 md:w-3 md:h-3" />)}
                   </div>
                </div>
             </div>
          </div>

          {/* Secondary Medium Card */}
          <div className="md:col-span-4 testimonial-card">
             <div className="bg-heritage p-6 md:p-8 flex flex-col justify-between h-full space-y-6 shadow-2xl relative group overflow-hidden border border-white/5">
                <div className="absolute inset-0 bg-[url('/assets/decor-3.jpg')] bg-cover bg-center opacity-5 grayscale" />
                <div className="space-y-4 relative z-10">
                  <Quote className="text-[#D4B982]/20 w-7 h-7 md:w-8 md:h-8" />
                  <p className="text-sm md:text-base font-serif text-white leading-relaxed italic">
                    &quot;{testimonials[3].quote}&quot;
                  </p>
                </div>
                <div className="space-y-4 md:space-y-6 relative z-10">
                   <div className="flex items-center gap-3">
                      <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden border border-[#D4B982]/20">
                        <Image 
                          src={testimonials[3].image} 
                          alt={testimonials[3].author} 
                          fill 
                          className="object-cover" 
                          sizes="40px"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">{testimonials[3].author}</span>
                        <span className="text-[8px] text-white/40 font-mono tracking-widest uppercase">{testimonials[3].company}</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Two Small Cards */}
          <div className="md:col-span-6 testimonial-card">
             <div className="bg-white border border-[#D4B982]/10 p-6 md:p-8 flex flex-col justify-between h-full space-y-4 shadow-lg group hover:border-[#D4B982]/30 transition-all duration-700">
                <p className="text-sm md:text-base font-serif text-[#121212] leading-relaxed italic">
                  &quot;{testimonials[1].quote}&quot;
                </p>
                <div className="flex items-center gap-3">
                   <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden">
                     <Image 
                       src={testimonials[1].image} 
                       alt={testimonials[1].author} 
                       fill 
                       className="object-cover" 
                       sizes="40px"
                     />
                   </div>
                   <div className="flex flex-col">
                     <span className="text-[11px] md:text-xs font-bold text-[#121212] uppercase tracking-wider">{testimonials[1].author}</span>
                     <span className="text-[8px] text-[#525252] font-mono tracking-widest uppercase">{testimonials[1].company}</span>
                   </div>
                </div>
             </div>
          </div>

          <div className="md:col-span-6 testimonial-card">
             <div className="bg-white border border-[#D4B982]/10 p-6 md:p-8 flex flex-col justify-between h-full space-y-4 shadow-lg group hover:border-[#D4B982]/30 transition-all duration-700">
                <p className="text-sm md:text-base font-serif text-[#121212] leading-relaxed italic">
                  &quot;{testimonials[2].quote}&quot;
                </p>
                <div className="flex items-center gap-3">
                   <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden">
                     <Image 
                       src={testimonials[2].image} 
                       alt={testimonials[2].author} 
                       fill 
                       className="object-cover" 
                       sizes="40px"
                     />
                   </div>
                   <div className="flex flex-col">
                     <span className="text-[11px] md:text-xs font-bold text-[#121212] uppercase tracking-wider">{testimonials[2].author}</span>
                     <span className="text-[8px] text-[#525252] font-mono tracking-widest uppercase">{testimonials[2].company}</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
