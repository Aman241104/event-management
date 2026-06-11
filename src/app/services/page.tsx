'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/atoms/Button';
import { Magnetic } from '@/components/atoms/Magnetic';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { HowWeWork } from '@/components/organisms/HowWeWork';
import { RoyalServicesGrid } from '@/components/organisms/RoyalServicesGrid';
import { BackgroundFlourish } from '@/components/atoms/BackgroundFlourish';
import { GrainOverlay } from '@/components/atoms/GrainOverlay';
import { ClientVoices } from '@/components/organisms/ClientVoices';
import { MaskSlideImage } from '@/components/molecules/MaskSlideImage';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const DEFAULT_EASE = "power3.out";

    // 1. Hero Animations
    const heroTl = gsap.timeline();
    
    gsap.to(".hero-bg-wrapper", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    heroTl.fromTo(".hero-header-reveal", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: DEFAULT_EASE })
          .fromTo(".hero-title .text-line", { 
            y: 80,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1.2,
            ease: "expo.out"
          }, "-=0.7")
          .fromTo(".hero-subtext", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8, ease: DEFAULT_EASE }, "-=0.7");

    // 2. Section Reveals
    const sections = gsap.utils.toArray<HTMLElement>('section');
    sections.forEach((section) => {
      const elements = section.querySelectorAll('.fade-up');
      if (elements.length > 0) {
        gsap.fromTo(elements, 
          { y: 30, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            stagger: 0.08, 
            duration: 0.8, 
            ease: "power2.out",
            force3D: true,
            scrollTrigger: {
              trigger: section,
              start: "top 92%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-[#FDFBF7] selection:bg-[#D4B982] selection:text-black overflow-hidden relative">
      <GrainOverlay />
      
      <div className="relative">
        
        {/* 1. Hero Section */}
        <section id="hero" ref={heroRef} className="relative min-h-[60vh] md:min-h-[700px] flex items-center overflow-hidden bg-heritage">
          <div className="absolute inset-0 z-0 hero-bg-wrapper scale-110">
            <Image 
              src="/assets/wedding/wedding-5.jpg" 
              alt="Services Overview" 
              fill 
              className="object-cover brightness-[0.35]" 
              priority 
              sizes="100vw"
            />
          </div>
          
          <BackgroundFlourish opacity={0.15} className="z-10 text-[#D4B982]" />
          
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />
          
          <div className="container relative z-20 pt-28 pb-24 md:pt-32 md:pb-32">
            <div className="max-w-5xl space-y-6 md:space-y-10">
              <div className="hero-header-reveal flex flex-col items-start gap-4 opacity-0">
                 <div className="flex items-center gap-3">
                   <div className="w-8 md:w-12 h-px bg-[#D4B982]/40" />
                   <span className="text-[10px] md:text-[11px] text-[#D4B982] uppercase tracking-[0.6em] md:tracking-[0.8em] font-bold">PRESTIGE SERVICES</span>
                 </div>
              </div>
              <h1 className="hero-title text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-serif text-white leading-[0.9] tracking-tight">
              <span className="block overflow-hidden pb-2"><span className="text-line block">Bespoke Event</span></span>
              <span className="block overflow-hidden pb-8 -mb-8">
                <span className="text-line block italic font-script text-[#D4B982] mt-2 md:mt-4 text-6xl sm:text-8xl md:text-[11rem] lg:text-[12rem] drop-shadow-[0_15px_45px_rgba(212,185,130,0.4)]">architecture</span>
              </span>
              </h1>
              <div className="max-w-xl hero-subtext opacity-0 pt-4 md:pt-8 relative">
              <p className="text-white/80 text-lg md:text-2xl font-serif italic border-l border-[#D4B982]/30 pl-6 md:pl-10 leading-relaxed">
                Your vision deserves more than execution — it deserves artistry. Here&apos;s how we deliver both.
              </p>
              <div className="absolute -bottom-4 left-6 md:left-10 w-24 h-px bg-gradient-to-r from-[#D4B982]/40 to-transparent" />
              </div>
              </div>
              </div>

              {/* Scroll Hint */}
              <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 md:gap-4 opacity-40">
              <span className="text-[8px] md:text-[9px] text-[#D4B982] uppercase tracking-[0.4em] md:tracking-[0.6em] font-bold">DISCOVER</span>
              <div className="w-px h-8 md:h-12 bg-gradient-to-b from-[#D4B982] to-transparent" />
              </div>
              </section>

              {/* 2. Philosophy Section */}
              <section id="philosophy" className="py-12 md:py-32 bg-[#FDFBF7] relative overflow-hidden rounded-t-[2.5rem] md:rounded-t-[6rem] -mt-6 md:-mt-10 z-20">
                <div className="absolute top-20 left-[5%] w-64 h-64 md:w-96 md:h-96 opacity-[0.02] pointer-events-none -rotate-12">
                  <BackgroundFlourish type="architectural" />
                </div>

                <div className="container relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-24 items-start">

                    <div className="lg:col-span-7 space-y-6 md:space-y-16 fade-up">
                      <div className="space-y-4 md:space-y-6">
                        <div className="flex items-center gap-4 mb-2">
                          <div className="w-8 h-px bg-[#D4B982]/30" />
                          <span className="text-[10px] md:text-[11px] text-[#D4B982] uppercase tracking-[0.6em] md:tracking-[0.8em] font-bold">OUR ESSENCE</span>
                        </div>
                        <h2 className="text-4xl md:text-7xl font-serif text-[#121212] leading-[1.1] md:leading-[1] tracking-tighter">
                          Where Vision <br className="hidden md:block" />
                          <span className="italic font-script text-[#D4B982] lowercase text-5xl md:text-8xl">Meets Reality</span>
                        </h2>
                      </div>

                      <div className="space-y-6 md:space-y-10 max-w-2xl">
                        <p className="text-[#525252] text-lg md:text-2xl font-serif italic border-l-2 border-[#D4B982]/20 pl-6 md:pl-10 leading-relaxed">
                          We measure success not in checklists completed, but in the look on your face when it all comes together exactly as you imagined — and then some.
                        </p>
                        <p className="text-[#525252] text-base md:text-lg font-sans font-light leading-relaxed opacity-80 pl-6 md:pl-10">
                          Founded on absolute trust, we translate your intangible dreams into cinematic realities. Every milestone is engineered with perfection and heart-centered storytelling.
                        </p>
                      </div>
                    </div>

                    <div className="lg:col-span-5 relative pt-4 md:pt-0">
                      <MaskSlideImage 
                        src="/assets/wedding/wedding-2.jpg" 
                        alt="Philosophy Image" 
                        aspectRatio="aspect-[4/5]"
                        maskColor="bg-ivory"
                        className="shadow-[0_30px_80px_rgba(0,0,0,0.1)] border border-[#D4B982]/10"
                      />

                      <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48 opacity-[0.05] pointer-events-none">
                         <BackgroundFlourish type="floral" />
                      </div>
                    </div>

                  </div>
                </div>
              </section>

        {/* 3. The Core Services Grid */}
        <RoyalServicesGrid />

        {/* 4. The Process */}
        <HowWeWork />

        {/* 5. Client Voices */}
        <ClientVoices />

        {/* 6. Final CTA */}
        <section className="relative py-16 md:py-32 overflow-hidden bg-[#05100a] bg-gradient-to-b from-[#05100a] via-[#021a10] to-black text-center rounded-t-[2.5rem] md:rounded-t-[6rem] -mt-12 md:-mt-16 z-20">
          <div className="absolute inset-0 z-0 hero-bg-wrapper">
            <Image 
              src="/assets/wedding/wedding-3.jpg" 
              alt="Final CTA" 
              fill 
              className="object-cover brightness-[0.2] scale-105" 
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#05100a] via-[#021a10]/40 to-[#05100a] opacity-90 z-10" />
            <div className="absolute inset-0 bg-black/40 z-10" />
          </div>
          
          <div className="container relative z-20 text-center">
            <div className="max-w-6xl mx-auto space-y-8 md:space-y-12 fade-up">
               <div className="space-y-4 md:space-y-6">
                 <h2 className="text-5xl md:text-8xl lg:text-[9rem] font-serif text-white leading-[0.9] md:leading-[0.85] tracking-tighter relative z-10">
                   Your Vision, <br />
                   <span className="font-script text-[#D4B982] text-6xl sm:text-8xl md:text-[10rem] block italic drop-shadow-[0_15px_60px_rgba(212,185,130,0.4)] relative z-20 mt-2 md:mt-4">Perfectly Mastered</span>
                 </h2>
               </div>
               
               <p className="text-white/60 text-lg md:text-2xl font-serif italic max-w-3xl mx-auto leading-relaxed border-t border-b border-white/5 py-6 md:py-10 px-4 md:px-0">
                 Your most significant moments deserve the team that treats them that way.
               </p>

               <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 pt-8 md:pt-12">
                 <Magnetic strength={0.1}>
                   <Link href="/contact" className="w-full sm:w-auto">
                     <Button className="h-16 md:h-20 w-full sm:px-20 text-[11px] md:text-[13px] bg-[#D4B982] text-black hover:bg-white hover:text-black transition-all duration-700 tracking-[0.4em] font-bold uppercase rounded-none">
                       BOOK A CONSULTATION
                     </Button>
                   </Link>
                 </Magnetic>
                 <Magnetic strength={0.1}>
                   <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                     <Button variant="outline" className="h-16 md:h-20 w-full sm:px-12 border-[#D4B982]/40 text-white/90 hover:text-[#D4B982] rounded-none tracking-[0.3em] font-bold text-[11px] md:text-[12px] uppercase hover:bg-white/5 transition-all duration-700 backdrop-blur-sm group">
                       <div className="flex items-center justify-center gap-4">
                         <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center border border-[#25D366]/40 group-hover:bg-[#25D366]/30 transition-colors">
                           <MessageCircle fill="#25D366" className="text-[#25D366] w-4 h-4 md:w-5 md:h-5" />
                         </div>
                         <span className="text-white group-hover:text-[#D4B982] transition-colors">WHATSAPP US</span>
                       </div>
                     </Button>
                   </a>
                 </Magnetic>
               </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
