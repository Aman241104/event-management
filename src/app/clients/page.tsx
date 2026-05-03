'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/atoms/Button';
import { Magnetic } from '@/components/atoms/Magnetic';
import { BackgroundFlourish } from '@/components/atoms/BackgroundFlourish';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const partners = [
  { name: 'TAJ', subtitle: 'HOTELS PALACES RESORTS SAFARIS', image: '/assets/logos/taj.png' },
  { name: 'ITC HOTELS', subtitle: 'RESPONSIBLE LUXURY', image: null },
  { name: 'THE LEELA', subtitle: 'PALACES HOTELS RESORTS', image: null },
  { name: 'HYATT REGENCY', subtitle: 'LUXURY ACCOMMODATION', image: '/assets/logos/hyatt.png' },
  { name: 'JW MARRIOTT', subtitle: 'PREMIUM HOSPITALITY', image: '/assets/logos/marriott.png' },
  { name: 'RADISSON', subtitle: 'HOTEL GROUP', image: '/assets/logos/radisson.png' },
];

const testimonials = [
  {
    content: "The attention to detail and creative vision provided by Zing Bliss was truly exceptional. They transformed our corporate gala into an immersive experience.",
    author: "Aditya Sharma",
    company: "Global Tech Solutions",
    image: "/hero-1.jpg"
  },
  {
    content: "Planning a high-profile wedding requires a team that understands nuance and luxury. Zing Bliss delivered on every single promise.",
    author: "Sonia Kapoor",
    company: "Entrepreneur",
    image: "/hero-2.jpg"
  },
  {
    content: "From the initial concept to the final execution, the process was seamless. They are the benchmark for event production in India.",
    author: "Vikram Raj",
    company: "Heritage Group",
    image: "/hero-3.jpg"
  }
];

export default function ClientsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Reveal elements with fade-up class individually
    const fadeElements = gsap.utils.toArray<HTMLElement>('.fade-up');
    fadeElements.forEach((el) => {
      gsap.fromTo(el, 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // 2. Hero reveals
    gsap.fromTo('.hero-reveal', 
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power4.out',
        stagger: 0.2
      }
    );
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-[#FDFBF7] selection:bg-[#D4B982] selection:text-black overflow-hidden relative">
      <BackgroundFlourish />
      
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center bg-heritage overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-6.jpg" 
            alt="Clients Background" 
            fill 
            className="object-cover brightness-[0.2]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="hero-reveal flex items-center gap-6 opacity-0">
               <div className="w-12 h-px bg-[#D4B982]/40" />
               <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">CLIENTELE & PARTNERS</span>
               <div className="w-12 h-px bg-[#D4B982]/40" />
            </div>
            
            <h1 className="hero-reveal text-5xl md:text-7xl lg:text-[8rem] font-serif text-white leading-[0.85] tracking-tighter opacity-0">
              Trusted By The <br />
              <span className="italic font-script text-[#D4B982] mt-4 lowercase lg:text-[10rem] drop-shadow-[0_15px_45px_rgba(212,185,130,0.4)]">Visionaries.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Partners Grid */}
      <section className="py-24 md:py-32 relative z-10">
        <div className="container">
          <div className="flex flex-col items-center text-center space-y-6 mb-20 fade-up opacity-0">
            <span className="text-[10px] text-[#D4B982] uppercase tracking-[0.7em] font-bold">HOSPITALITY PARTNERS</span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#121212]">Luxury Venues & Alliances</h2>
            <div className="w-16 h-px bg-[#D4B982]/30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-linen/30">
            {partners.map((partner, i) => (
              <div 
                key={i} 
                className="bg-white/50 p-12 md:p-16 flex flex-col items-center justify-center text-center group transition-all duration-700 hover:bg-heritage border-b border-r border-linen/30 last:border-b-0 md:last:border-b md:[&:nth-last-child(2)]:border-b lg:[&:nth-last-child(3)]:border-b-0 lg:[&:nth-child(3n)]:border-r-0 fade-up opacity-0 h-[280px] md:h-[320px]"
              >
                <div className="flex-grow flex flex-col items-center justify-center space-y-6">
                  {partner.image ? (
                    <div className="relative w-40 h-16 md:w-48 md:h-20 grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-[200%] transition-all duration-700 transform group-hover:scale-110">
                      <Image 
                        src={partner.image} 
                        alt={partner.name} 
                        fill 
                        className="object-contain" 
                      />
                    </div>
                  ) : (
                    <h3 className="text-xl md:text-2xl font-serif text-[#121212]/40 group-hover:text-[#D4B982] transition-all duration-700 tracking-[0.2em] uppercase italic group-hover:scale-110">
                      {partner.name}
                    </h3>
                  )}
                  
                  <div className="h-px w-0 bg-[#D4B982]/40 group-hover:w-12 transition-all duration-700" />
                  
                  <p className="text-[8px] md:text-[9px] text-[#D4B982] uppercase tracking-[0.4em] font-bold opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 max-w-[200px]">
                    {partner.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Testimonials Section */}
      <section className="py-24 md:py-32 bg-[#0a1f13] relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,185,130,0.05)_0%,_transparent_70%)]" />
        
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center space-y-6 mb-20 fade-up opacity-0">
            <span className="text-[10px] text-[#D4B982] uppercase tracking-[0.7em] font-bold">TESTIMONIALS</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white">Voice Of Excellence</h2>
            <div className="w-16 h-px bg-[#D4B982]/30" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {testimonials.map((t, i) => (
              <div key={i} className="flex flex-col space-y-8 fade-up opacity-0" style={{ transitionDelay: `${i * 200}ms` }}>
                <div className="text-[#D4B982]/20">
                  <Sparkles size={40} strokeWidth={1} />
                </div>
                <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-white/90">
                  &quot;{t.content}&quot;
                </p>
                <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4B982]/30">
                    <Image src={t.image} alt={t.author} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif text-white">{t.author}</h4>
                    <p className="text-[#D4B982] text-[10px] uppercase tracking-widest font-bold">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="relative py-24 md:py-40 overflow-hidden bg-heritage">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-8.jpg" 
            alt="Final CTA Background" 
            fill 
            className="object-cover brightness-[0.2]" 
          />
        </div>
        
        <div className="container relative z-20 text-center">
          <div className="space-y-8 fade-up opacity-0">
            <h2 className="text-4xl md:text-7xl font-serif text-white tracking-tighter">
              Join Our <span className="italic font-script text-[#D4B982] lowercase">Legacy</span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto font-light">
              We collaborate with discerning clients who seek to transform their vision into an atmospheric reality.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12">
              <Magnetic strength={0.1}>
                <Link href="/contact">
                  <Button className="h-16 px-16 !bg-[#D4B982] hover:!bg-[#B38B4D] !text-black rounded-none tracking-[0.4em] font-bold text-[12px] uppercase border-0 shadow-[0_25px_80px_rgba(212,185,130,0.25)] transition-all duration-700">
                    PARTNER WITH US
                  </Button>
                </Link>
              </Magnetic>
              <Magnetic strength={0.1}>
                <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="h-16 px-10 !border-[#D4B982]/60 !text-[#D4B982] hover:!bg-[#D4B982] hover:!text-black rounded-none tracking-[0.3em] font-bold text-[11px] uppercase transition-all duration-700 backdrop-blur-sm group">
                     CHAT ON WHATSAPP
                  </Button>
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
