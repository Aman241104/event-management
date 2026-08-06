'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const testimonials = [
  {
    content: "Our wedding was beyond our dreams! The team at Zing Bliss Events made everything so elegant and perfect, right down to the smallest detail.",
    author: "Satyan & Monika Chopra",
    role: "Wedding Clients",
    image: "/hero-8.jpg"
  },
  {
    content: "From the mandap to the mehendi decor, everything Zing Bliss Events created for us felt like a dream. We couldn't have asked for a better team.",
    author: "Paras & Nitika Mittal",
    role: "Wedding Clients",
    image: "/hero-9.jpg"
  },
  {
    content: "Our dealer meet was flawlessly executed from start to finish. Zing Bliss Events managed the entire production with true professionalism.",
    author: "Kunal Wadhwani",
    role: "Corporate Client",
    image: "/hero-2.jpg"
  },
  {
    content: "The team curated the most magical evening for us. Elegant, warm, and beautifully personal — exactly what we had envisioned.",
    author: "Anita Khurana",
    role: "Private Celebration",
    image: "/hero-3.jpg"
  },
  {
    content: "Zing Bliss Events brought my daughter's birthday dreams to life with the most enchanting jungle-themed decor. Truly unforgettable!",
    author: "Amit Patel",
    role: "Birthday Client",
    image: "/hero-4.jpg"
  },
  {
    content: "Professional, creative, and incredibly detail-oriented. Zing Bliss Events exceeded every expectation we had for our event.",
    author: "Shreyansh Soni",
    role: "Corporate Client",
    image: "/hero-5.jpg"
  }
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="bg-white p-10 md:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.04)] border border-linen/20 flex flex-col items-center text-center space-y-6 group w-[300px] md:w-[360px] shrink-0 relative">
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#FDFBF7] shadow-2xl transition-transform duration-700 group-hover:scale-110">
        <Image
          src={t.image}
          alt={t.author}
          width={80}
          height={80}
          className="object-cover h-full w-full"
        />
      </div>

      <div className="text-[#D4B982]/20 group-hover:scale-125 transition-transform duration-700">
        <Sparkles size={22} strokeWidth={1} />
      </div>

      <p className="text-base md:text-lg text-[#525252] font-sans italic leading-[1.8] opacity-90 font-light">
        &quot;{t.content}&quot;
      </p>

      <div className="flex flex-col items-center gap-3 pt-2 w-full mt-auto">
        <div className="w-8 h-px bg-linen group-hover:w-16 group-hover:bg-[#D4B982]/40 transition-all duration-700" />
        <span className="text-[11px] font-bold text-[#121212] uppercase tracking-[0.4em] block group-hover:text-[#D4B982] transition-colors">
          {t.author}
        </span>
        <span className="text-[9px] font-mono text-[#525252]/50 uppercase tracking-[0.25em]">{t.role}</span>
      </div>
    </div>
  );
}

export const ClientVoices = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.scrollWidth / 2;
    gsap.to(trackRef.current, {
      x: -cardWidth,
      duration: 45,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x: number) => x % cardWidth)
      }
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="py-12 md:py-20 bg-[#FDFBF7] relative overflow-hidden rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-12 md:-mt-16 z-20"
    >
      {/* Decorative rings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#D4B982]/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-[#D4B982]/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.9)_0%,_transparent_80%)]" />
      </div>

      {/* Header */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 mb-14 md:mb-20">
          <span className="text-[11px] text-[#1d5c3a] uppercase tracking-[0.8em] font-bold">CLIENT LOVE</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-[#121212] tracking-tighter leading-tight max-w-4xl">
            Stories of <span className="italic font-script text-[1.2em] lowercase text-[#D4B982]">Extraordinary</span> Celebrations
          </h2>
          <div className="relative pt-4 flex items-center justify-center">
            <div className="w-24 h-px bg-[#D4B982]/30" />
            <div className="mx-8 w-4 h-4 rotate-45 border border-[#D4B982]/40 bg-[#FDFBF7] shadow-sm flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#D4B982]/60 rotate-45" />
            </div>
            <div className="w-24 h-px bg-[#D4B982]/30" />
          </div>
        </div>
      </div>

      {/* Scrolling marquee track */}
      <div className="relative overflow-hidden">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#FDFBF7] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#FDFBF7] to-transparent z-10 pointer-events-none" />

        <div ref={trackRef} className="flex gap-6 md:gap-8 py-10 px-4 w-max">
          {testimonials.map((t, i) => (
            <TestimonialCard key={`a-${i}`} t={t} />
          ))}
          {testimonials.map((t, i) => (
            <TestimonialCard key={`b-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};
