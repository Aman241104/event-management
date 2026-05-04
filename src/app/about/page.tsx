'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Star, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/atoms/Button';
import { Magnetic } from '@/components/atoms/Magnetic';
import { InfiniteMarquee } from '@/components/atoms/InfiniteMarquee';
import { ParallaxImage } from '@/components/atoms/ParallaxImage';
import { SVGSpine } from '@/components/atoms/SVGSpine';
import { BackgroundFlourish } from '@/components/atoms/BackgroundFlourish';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SectionDivider = ({ className }: { className?: string }) => (
  <div className={cn("flex flex-col items-center gap-2 py-4 relative z-10 group", className)} aria-hidden="true">
    <div className="flex items-center gap-8">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4B982]/30 group-hover:w-24 transition-all duration-1000" />
      <div className="relative flex items-center justify-center">
        <Star size={10} className="text-[#D4B982]/40 transition-all duration-1000 group-hover:rotate-180 group-hover:text-[#D4B982]" />
        <div className="absolute inset-0 blur-md bg-[#D4B982]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4B982]/30 group-hover:w-24 transition-all duration-1000" />
    </div>
  </div>
);

const TransitionMoment = ({ text }: { text: string }) => (
  <div className="py-10 flex justify-center scroll-reveal">
    <div className="flex flex-col items-center gap-4">
      <div className="w-px h-10 bg-gradient-to-b from-[#D4B982]/40 to-transparent" />
      <span className="text-[11px] tracking-[0.6em] uppercase text-[#D4B982]/60 font-mono italic font-bold">
        {text}
      </span>
    </div>
  </div>
);

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted) return;

    const DEFAULT_EASE = "power3.out";

    // 1. Hero Animations
    const heroTl = gsap.timeline();
    
    gsap.to(".hero-bg-wrapper", {
      scale: 1.05,
      duration: 20,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });

    heroTl.fromTo(".hero-header-reveal", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: DEFAULT_EASE })
          .fromTo(".hero-title .text-line", { 
            y: 60,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1,
            ease: DEFAULT_EASE 
          }, "-=0.6")
          .fromTo(".hero-subtext", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8, ease: DEFAULT_EASE }, "-=0.6")
          .fromTo(".hero-signals", { opacity: 0 }, { opacity: 1, duration: 0.8 }, "-=0.4");

    // 2. Section Reveals
    const sections = gsap.utils.toArray<HTMLElement>('section');
    sections.forEach((section) => {
      gsap.fromTo(section.querySelectorAll('.fade-up'), 
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 1, 
          ease: DEFAULT_EASE,
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );
    });

  }, { scope: containerRef, dependencies: [mounted] });

  if (!mounted) return <div className="min-h-screen bg-[#FDFBF7]" />;

  return (
    <main ref={mainRef} className="min-h-screen bg-[#FDFBF7] selection:bg-[#D4B982] selection:text-black overflow-hidden">
      <div ref={containerRef} className="relative">
        
        {/* 1. Hero Section - Compact & Atmospheric */}
        <section id="hero" className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden bg-heritage">
          <div className="absolute inset-0 z-0 hero-bg-wrapper">
            <Image 
              src="/hero-9.jpg" 
              alt="About Zing Bliss" 
              fill 
              className="object-cover brightness-[0.25]"
              priority
            />
          </div>
          
          {/* Cinema Overlays - Matching Home */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,185,130,0.12)_0%,_transparent_75%)] z-10" />
          
          <div className="container relative z-20">
            <div className="max-w-4xl space-y-6">
              <div className="hero-header-reveal flex items-center gap-6 opacity-0">
                 <div className="w-12 h-px bg-[#D4B982]/40" />
                 <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">ABOUT ZING BLISS</span>
                 <div className="w-12 h-px bg-[#D4B982]/40" />
              </div>
              
              <h1 className="hero-title text-5xl md:text-7xl lg:text-[8rem] font-serif text-white leading-[0.85] tracking-tighter">
                <span className="block overflow-hidden">
                  <span className="text-line block">Our Journey of</span>
                </span>
                <span className="block overflow-hidden">
                  <span className="text-line block italic font-script text-[#D4B982] mt-4 lowercase lg:text-[10rem] drop-shadow-[0_15px_45px_rgba(212,185,130,0.4)]">Excellence</span>
                </span>
              </h1>

              <div className="max-w-xl hero-subtext opacity-0">
                <p className="text-white/70 text-lg md:text-xl font-serif italic border-l border-[#D4B982]/30 pl-10 leading-relaxed">
                  We don&apos;t just plan events; we compose atmospheric experiences that feel effortless, refined, and deeply personal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Marquee - Reduced Padding */}
        <section className="py-8 border-y border-linen/10 bg-white/50 backdrop-blur-md relative overflow-hidden">
          <InfiniteMarquee 
            items={["VOGUE", "BAZAAR", "THE KNOT", "BRIDES", "LUXURY DAILY", "ELITE TRAVELER"]}
            speed={40}
            className="text-[#121212]/20 font-serif italic text-xl md:text-2xl tracking-widest"
          />
        </section>

        {/* 3. Philosophy - Compacted */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-10 fade-up">
                <div className="space-y-4">
                  <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.6em] font-bold">OUR PHILOSOPHY</span>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#121212] leading-tight">
                    The Art Behind <br />
                    <span className="text-[#D4B982] italic font-script lowercase text-5xl md:text-7xl">Atmospheric Design.</span>
                  </h2>
                </div>

                <p className="text-[#525252] text-lg font-sans font-light leading-relaxed max-w-lg">
                  Every celebration we orchestrate is a bespoke composition. We believe luxury is found in the perfect execution of the essential, not in the accumulation of the unnecessary.
                </p>

                <div className="grid grid-cols-1 gap-6 pt-4">
                  {[
                    { id: '01', title: 'Bespoke Approach', desc: 'Unique ideas tailored to your vision.' },
                    { id: '02', title: 'Precision Execution', desc: 'Flawless planning in every detail.' },
                  ].map((item) => (
                    <div key={item.id} className="flex gap-6 group">
                      <span className="text-[10px] font-mono text-[#D4B982] font-bold pt-1">{item.id}</span>
                      <div className="space-y-1">
                        <h4 className="text-[12px] uppercase tracking-[0.3em] text-[#121212] font-bold">{item.title}</h4>
                        <p className="text-[13px] text-[#525252] font-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative aspect-square md:aspect-[1.2/1] overflow-hidden rounded-sm shadow-2xl fade-up">
                <Image
                  src="/hero-8.jpg"
                  alt="Philosophy Visual"
                  fill
                  className="object-cover transition-transform duration-[2000ms] hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Visionaries - New Compact Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-6 mb-12 fade-up">
               <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">THE VISIONARIES</span>
               <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#121212]">Orchestrators of Elegance</h2>
               <div className="w-16 h-px bg-[#D4B982]/30 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { name: 'Riya & Karan', role: 'Founding Partners', image: '/hero-1.jpg' },
                { name: 'Arjun Mehta', role: 'Creative Director', image: '/hero-2.jpg' },
              ].map((member, i) => (
                <div key={i} className="group relative aspect-[3/4] overflow-hidden rounded-sm fade-up shadow-xl" style={{ transitionDelay: `${i * 150}ms` }}>
                  <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-x-0 bottom-8 text-center space-y-2">
                    <h3 className="text-white text-2xl font-serif italic">{member.name}</h3>
                    <p className="text-[#D4B982] text-[10px] uppercase tracking-[0.4em] font-bold">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Final CTA - Consistent with Home */}
        <section className="relative py-24 md:py-40 overflow-hidden bg-heritage">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/hero10.jpg" 
              alt="Final CTA Background" 
              fill 
              className="object-cover brightness-[0.2] scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90 z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,185,130,0.15)_0%,_transparent_75%)] z-10" />
          </div>
          
          <div className="container relative z-20 text-center">
            <div className="space-y-8 fade-up">
              <div className="flex items-center justify-center gap-6 mb-4">
                 <div className="w-12 h-px bg-[#D4B982]/40" />
                 <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">READY TO BEGIN?</span>
                 <div className="w-12 h-px bg-[#D4B982]/40" />
              </div>
              
              <div className="relative inline-block">
                <h2 className="text-4xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[1.1] tracking-tighter relative z-10">
                  Compose Your Legacy
                </h2>
                <span className="font-script text-[#D4B982] text-6xl md:text-8xl lg:text-[10rem] block -mt-4 md:-mt-8 lg:-mt-12 italic drop-shadow-[0_15px_45px_rgba(212,185,130,0.4)] relative z-20">
                  With Zing Bliss.
                </span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-16 fade-up" style={{ transitionDelay: '200ms' }}>
              <Magnetic strength={0.1}>
                <Link href="/contact">
                  <Button className="h-16 px-16 bg-[#D4B982] hover:bg-[#B38B4D] text-black rounded-none tracking-[0.4em] font-bold text-[12px] uppercase border-0 shadow-[0_25px_80px_rgba(212,185,130,0.25)] transition-all duration-700">
                    BOOK A CONSULTATION
                  </Button>
                </Link>
              </Magnetic>
              <Magnetic strength={0.1}>
                <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="h-16 px-10 border-[#D4B982]/40 text-white/90 hover:text-[#D4B982] rounded-none tracking-[0.3em] font-bold text-[11px] uppercase hover:bg-white/5 transition-all duration-700 backdrop-blur-sm group">
                     <div className="flex items-center gap-4">
                       <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center border border-[#25D366]/40 group-hover:bg-[#25D366]/30 transition-colors">
                         <MessageCircle size={16} fill="#25D366" className="text-[#25D366]" />
                       </div>
                       <span className="text-white group-hover:text-[#D4B982] transition-colors">CHAT ON WHATSAPP</span>
                     </div>
                  </Button>
                </a>
              </Magnetic>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
