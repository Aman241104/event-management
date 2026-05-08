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

    heroTl.fromTo(".hero-header-reveal", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.2, ease: DEFAULT_EASE, force3D: true })
          .fromTo(".hero-title .text-line", { 
            y: 80,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 1.4,
            ease: "expo.out",
            force3D: true
          }, "-=0.8")
          .fromTo(".hero-subtext", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 1, ease: DEFAULT_EASE, force3D: true }, "-=0.8")
          .fromTo(".hero-signals", { opacity: 0 }, { opacity: 1, duration: 1, force3D: true }, "-=0.6");

    // 2. Section Reveals - Enhanced for luxury feel
    const sections = gsap.utils.toArray<HTMLElement>('section');
    sections.forEach((section) => {
      gsap.fromTo(section.querySelectorAll('.fade-up'), 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.12, 
          duration: 1.2, 
          ease: DEFAULT_EASE,
          overwrite: 'auto',
          force3D: true,
          scrollTrigger: {
            trigger: section,
            start: "top 94%",
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
        
        {/* 1. Hero Section - Recreated from Reference */}
        <section id="header" className="relative h-[85vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-heritage text-center">
          <div className="absolute inset-0 z-0 hero-bg-wrapper">
            <Image 
              src="/assets/wedding/wedding-5.jpg" 
              alt="The Story Behind Zing Bliss" 
              fill 
              className="object-cover brightness-[0.35]"
              priority
            />
          </div>
          
          {/* Cinema Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,185,130,0.15)_0%,_transparent_80%)] z-10" />
          
          <div className="container relative z-20 pt-32 md:pt-44">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="hero-header-reveal flex flex-col items-center gap-4 opacity-0">
                 <span className="text-[10px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">ABOUT US</span>
                 <div className="w-12 h-px bg-[#D4B982]/40" />
              </div>
              
              <div className="space-y-2">
                <h1 className="hero-title text-5xl md:text-8xl lg:text-[8.5rem] font-serif text-white leading-[1.1] tracking-tight">
                  <span className="block overflow-hidden">
                    <span className="text-line block">The Story Behind</span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="text-line block italic font-script text-[#D4B982] mt-4 lg:text-[10.5rem] drop-shadow-[0_15px_45px_rgba(212,185,130,0.4)]">Zing Bliss Events</span>
                  </span>
                </h1>
              </div>

              <div className="max-w-lg mx-auto hero-subtext opacity-0 pt-6">
                <p className="text-white/80 text-lg md:text-xl font-serif italic leading-relaxed">
                  We are dreamers, planners and creators of <br className="hidden md:block" /> unforgettable experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Our Journey Section - Recreated from Reference */}
        <section id="journey" className="py-32 md:py-48 bg-[#FDFBF7]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Image Side */}
              <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-sm shadow-2xl fade-up">
                <Image 
                  src="/decor-6.jpg" 
                  alt="Our Journey" 
                  fill 
                  className="object-cover transition-transform duration-[2000ms] hover:scale-105"
                />
              </div>

              {/* Text Side */}
              <div className="space-y-10 fade-up">
                <div className="space-y-4">
                  <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.6em] font-bold">OUR JOURNEY</span>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#121212] leading-[1.1] tracking-tight">
                    Turning Dreams <br />
                    Into Beautiful <br />
                    <span className="text-[#D4B982] italic font-script block -mt-2 text-6xl md:text-9xl">Realities</span>
                  </h2>
                </div>

                <div className="space-y-8 max-w-lg">
                  <p className="text-[#525252] text-lg font-sans font-light leading-relaxed">
                    Zing Bliss Events was born out of a passion for design, a love for celebrations and a commitment to creating moments that stay with you forever. 
                  </p>
                  <p className="text-[#525252] text-lg font-sans font-light leading-relaxed">
                    From intimate gatherings to grand celebrations, we bring creativity, precision and heart to every event we craft.
                  </p>
                </div>

                <div className="pt-4">
                  <Magnetic strength={0.1}>
                    <Button className="btn-gold px-12 py-5 text-[11px]">
                      DISCOVER OUR STORY
                    </Button>
                  </Magnetic>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Our Philosophy Section - Recreated from Reference */}
        <section id="philosophy" className="py-32 md:py-48 bg-[#05100a] relative overflow-hidden">
          {/* Subtle Background Texture */}
          <div className="absolute inset-0 dot-pattern opacity-[0.05] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(179,139,77,0.08)_0%,_transparent_70%)] pointer-events-none" />
          
          <div className="container relative z-10 text-center">
            <div className="space-y-6 mb-24 fade-up">
              <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">OUR PHILOSOPHY</span>
              <h2 className="text-4xl md:text-7xl font-serif text-white leading-tight tracking-tight">What Drives Us</h2>
              <div className="w-16 h-px bg-[#D4B982]/30 mx-auto mt-8" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
              {[
                { 
                  title: 'Creativity', 
                  desc: 'Unique ideas that bring your vision to life.',
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4B982" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v8M8 12h8" />
                    </svg>
                  )
                },
                { 
                  title: 'Precision', 
                  desc: 'Meticulous planning and flawless execution.',
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4B982" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  )
                },
                { 
                  title: 'Personalisation', 
                  desc: 'Every detail is tailored to reflect your story.',
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4B982" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  )
                },
                { 
                  title: 'Excellence', 
                  desc: 'We go beyond expectations to deliver perfection.',
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4B982" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  )
                },
              ].map((item, i) => (
                <div key={i} className="space-y-10 group fade-up" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="w-24 h-24 mx-auto rounded-full border border-[#D4B982]/10 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:border-[#D4B982]/40 group-hover:bg-[#D4B982]/10 transition-all duration-700 transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-serif text-white tracking-wide">{item.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed max-w-[200px] mx-auto font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visionaries Section */}
        <section id="visionaries" className="py-32 md:py-48 bg-[#FDFBF7]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="relative fade-up order-2 lg:order-1">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                  <Image 
                    src="/assets/team/founder-portrait.png" 
                    alt="Founder & Visionary" 
                    fill 
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
                {/* Secondary Floating Image */}
                <div className="absolute -bottom-12 -right-12 w-1/2 hidden md:block">
                  <div className="relative aspect-square overflow-hidden rounded-sm shadow-2xl border-4 border-white z-10">
                    <ParallaxImage 
                      src="/assets/team/founder-office.png" 
                      alt="The Founder at Work" 
                      aspectRatio="aspect-square"
                      speed={0.8}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-10 fade-up order-1 lg:order-2">
                <div className="space-y-4">
                  <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.6em] font-bold">THE VISIONARY</span>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#121212] leading-[1.1] tracking-tight">
                    Crafting <br />
                    Unforgettable <br />
                    <span className="text-[#D4B982] italic font-script block -mt-2 text-6xl md:text-9xl">Legacies</span>
                  </h2>
                </div>

                <div className="space-y-8 max-w-lg">
                  <p className="text-[#525252] text-lg font-sans font-light leading-relaxed">
                    With an unwavering eye for detail and a passion for architectural elegance, our founder has redefined the landscape of luxury events. 
                  </p>
                  <p className="text-[#525252] text-lg font-sans font-light leading-relaxed">
                    By merging contemporary design with timeless traditions, we create bespoke experiences that resonate with sophistication and heart.
                  </p>
                </div>

                <div className="pt-4">
                   <div className="flex flex-col gap-1">
                     <span className="text-xl font-serif text-[#121212]">The Architect of Bliss</span>
                     <span className="text-[10px] text-[#D4B982] uppercase tracking-widest font-bold">Founder & Creative Director</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Press & Partners Marquee */}
        <section id="press" className="py-8 md:py-10 bg-heritage border-y border-[#D4B982]/10 overflow-hidden">
          <InfiniteMarquee 
            speed={60} 
            direction="left"
            items={[
              { label: 'RELIANCE INSURANCE', logo: '/assets/logos/reliance.png' },
              { label: 'ITC FMCG', logo: '/assets/logos/itc_fmcg.png' },
              { label: 'HAAS AUTOMATION', logo: '/assets/logos/haas.png' },
              { label: 'ADHAAN SOLUTIONS', logo: '/assets/logos/adhaan.png' },
              { label: 'ZEE TV', logo: '/assets/logos/zeetv.png' },
            ]}
          />
        </section>

        {/* 4. Our Process Section - Museumcore Overhaul */}
        <section id="process" className="py-32 md:py-48 bg-[#FDFCFB] relative overflow-hidden">
          {/* Subtle Background Textures & Paper Grain */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
          <div className="absolute inset-0 dot-pattern opacity-[0.02] pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4B982]/20 to-transparent" />
          
          {/* Ghost Background Typography */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none overflow-hidden whitespace-nowrap opacity-[0.02]">
            <span className="text-[20vw] font-serif italic text-[#121212] leading-none">The Craftsmanship</span>
          </div>

          <div className="container text-center relative z-10">
            <div className="space-y-6 mb-32 fade-up">
              <span className="text-[11px] text-[#D4B982] uppercase tracking-[1em] font-bold">THE METHODOLOGY</span>
              <h2 className="text-4xl md:text-7xl lg:text-9xl font-serif text-[#121212] leading-tight tracking-tight">
                The Anatomy of <br />
                <span className="italic font-script text-[#D4B982] lowercase lg:text-[10rem] block -mt-4 drop-shadow-sm">Elegance</span>
              </h2>
              <div className="flex items-center justify-center gap-6 mt-12">
                <div className="w-16 h-px bg-[#D4B982]/20" />
                <Star size={12} className="text-[#D4B982]/40" />
                <div className="w-16 h-px bg-[#D4B982]/20" />
              </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4">
              {/* Connecting Line - Refined with Gradient */}
              <div className="absolute top-14 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4B982]/30 to-transparent hidden lg:block z-0" />

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-16 lg:gap-8">
                {[
                  { 
                    id: '01', 
                    title: 'The Prelude', 
                    subtitle: 'Discovery',
                    desc: 'A deep dive into your aspirations, defining the soul of your event.',
                    icon: (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4B982]">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                    )
                  },
                  { 
                    id: '02', 
                    title: 'The Composition', 
                    subtitle: 'Concept & Design',
                    desc: 'Translating dreams into a visual symphony of colors and textures.',
                    icon: (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4B982]">
                        <path d="m12 19 7-7 3 3-7 7-3-3z" />
                        <path d="m18 13-1.5-7.5L2 2l7.5 14.5L13 18l5-5z" />
                      </svg>
                    )
                  },
                  { 
                    id: '03', 
                    title: 'The Orchestration', 
                    subtitle: 'Strategic Planning',
                    desc: 'Orchestrating every logistical detail with clockwork precision.',
                    icon: (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4B982]">
                        <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                      </svg>
                    )
                  },
                  { 
                    id: '04', 
                    title: 'The Manifestation', 
                    subtitle: 'Impeccable Execution',
                    desc: 'Bringing the blueprint to life with flair and flawless grace.',
                    icon: (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4B982]">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    )
                  },
                  { 
                    id: '05', 
                    title: 'The Afterglow', 
                    subtitle: 'The Experience',
                    desc: 'The moment where time stands still and memories take flight.',
                    icon: (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4B982]">
                        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                      </svg>
                    )
                  },
                ].map((item, i) => (
                  <div key={i} className="relative z-10 space-y-12 group fade-up" style={{ transitionDelay: `${i * 150}ms` }}>
                    <div className="relative">
                      <div className="w-28 h-28 mx-auto rounded-full bg-white/40 backdrop-blur-xl shadow-[0_20px_50px_rgba(212,185,130,0.1)] border border-white/80 flex items-center justify-center transform transition-all duration-1000 group-hover:scale-110 group-hover:border-[#D4B982]/30 group-hover:shadow-[0_30px_60px_rgba(212,185,130,0.2)]">
                        {item.icon}
                        
                        {/* Orbiting Ring on Hover */}
                        <div className="absolute inset-[-4px] rounded-full border border-dashed border-[#D4B982]/20 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-1000 group-hover:rotate-90" />
                      </div>
                      
                      {/* Floating ID Tag */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#121212] rounded-none border-l-2 border-[#D4B982] shadow-lg transform transition-transform duration-700 group-hover:-translate-y-2">
                         <span className="text-[9px] font-mono text-white font-bold tracking-[0.4em] uppercase">{item.id}</span>
                      </div>
                    </div>

                    <div className="space-y-4 px-4">
                      <div className="space-y-1">
                        <span className="text-[10px] text-[#D4B982] font-mono tracking-[0.3em] uppercase opacity-60">{item.subtitle}</span>
                        <h4 className="text-xl md:text-2xl tracking-wide text-[#121212] font-serif font-bold group-hover:text-[#D4B982] transition-colors duration-500">{item.title}</h4>
                      </div>
                      <p className="text-[#525252]/80 text-[14px] leading-relaxed font-light font-sans max-w-[220px] mx-auto italic">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Our Work Section - Recreated from Reference */}
        <section id="work" className="py-32 md:py-48 bg-[#05100a] relative overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-[0.03] pointer-events-none" />
          
          <div className="container relative z-10 text-center">
            <div className="space-y-6 mb-24 fade-up">
              <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">OUR WORK</span>
              <h2 className="text-4xl md:text-7xl font-serif text-white leading-tight tracking-tight">Moments We&apos;re Proud Of</h2>
              <div className="w-16 h-px bg-[#D4B982]/30 mx-auto mt-8" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {[
                '/assets/wedding/wedding-1.jpg', '/assets/corporate/corporate-6.jpg', '/assets/production/production-1.jpg',
                '/assets/corporate/corporate-1.jpg', '/assets/birthday/birthday-2.jpg', '/assets/wedding/wedding-7.jpg'
              ].map((img, i) => (
                <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-sm shadow-2xl fade-up" style={{ transitionDelay: `${i * 100}ms` }}>
                  <Image 
                    src={img} 
                    alt={`Work ${i + 1}`} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.9] group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors duration-700" />
                  <div className="absolute inset-0 border border-white/5 pointer-events-none" />
                </div>
              ))}
            </div>
            
            <div className="mt-20 fade-up">
              <Magnetic strength={0.05}>
                <Link href="/portfolio" className="inline-block">
                  <Button variant="outline" className="border-[#D4B982]/40 !text-white hover:bg-[#D4B982] hover:!text-heritage px-12 py-5 text-[10px] bg-white/5 backdrop-blur-sm transition-all duration-700">
                    VIEW FULL PORTFOLIO
                  </Button>
                </Link>
              </Magnetic>
            </div>
          </div>
        </section>

        {/* 6. Trust Section - Recreated from Reference */}
        <section id="why-choose-us" className="py-32 md:py-48 bg-[#FDFBF7] relative overflow-hidden">
          <div className="container text-center">
            <div className="space-y-6 mb-24 fade-up">
              <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">WHY CLIENTS TRUST US</span>
              <h2 className="text-4xl md:text-7xl font-serif text-[#121212] leading-tight tracking-tight">Experience You Can Trust</h2>
              <div className="w-16 h-px bg-[#D4B982]/30 mx-auto mt-8" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
              {[
                { 
                  title: 'Tailored Experiences', 
                  desc: 'Every event is as unique as you are.',
                  icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#D4B982" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                },
                { 
                  title: 'End-to-End Management', 
                  desc: 'We handle it all, seamlessly.',
                  icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#D4B982" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" /><path d="M12 3v3" /><path d="M12 18v3" /><path d="M3 12h3" /><path d="M18 12h3" /></svg>
                },
                { 
                  title: 'Premium Vendor Network', 
                  desc: 'Trusted partners for the best quality.',
                  icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#D4B982" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                },
                { 
                  title: 'Flawless Execution', 
                  desc: 'Precision, punctuality and perfection.',
                  icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#D4B982" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg>
                },
              ].map((item, i) => (
                <div key={i} className="space-y-8 fade-up group" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full border border-linen/30 bg-white shadow-xl transition-all duration-700 group-hover:border-[#D4B982]/30 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-[16px] font-bold text-[#121212] tracking-wide font-serif">{item.title}</h4>
                    <p className="text-[#525252] text-[14px] leading-relaxed max-w-[220px] mx-auto font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Final CTA - Recreated from Reference */}
        <section id="cta" className="relative py-32 md:py-48 overflow-hidden bg-[#05100a] text-center">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/assets/wedding/wedding-3.jpg" 
              alt="Final CTA Background" 
              fill 
              className="object-cover brightness-[0.15] scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-[#05100a] opacity-90 z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,185,130,0.1)_0%,_transparent_75%)] z-10" />
          </div>
          
          <div className="container relative z-20 text-center">
            <div className="space-y-8 fade-up">
              <div className="flex items-center justify-center gap-6 mb-4">
                 <div className="w-12 h-px bg-[#D4B982]/40" />
                 <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">READY TO BEGIN?</span>
                 <div className="w-12 h-px bg-[#D4B982]/40" />
              </div>
              
              <div className="relative inline-block">
                <h2 className="text-4xl md:text-7xl lg:text-[7.5rem] font-serif text-white leading-[1] tracking-tighter relative z-10">
                  Let&apos;s Create Your
                </h2>
                <span className="font-script text-[#D4B982] text-6xl md:text-9xl lg:text-[11rem] block -mt-4 md:-mt-8 lg:-mt-10 italic drop-shadow-[0_15px_45px_rgba(212,185,130,0.4)] relative z-20">
                  Unforgettable Story
                </span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-20 fade-up" style={{ transitionDelay: '200ms' }}>
              <Magnetic strength={0.1}>
                <Link href="/contact">
                  <Button className="btn-gold h-16 px-16 text-[12px]">
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
                       <span className="text-white group-hover:text-[#D4B982] transition-colors uppercase">Chat on WhatsApp</span>
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
