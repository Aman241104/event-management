'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Sparkles, Music, Zap, MessageCircle, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/atoms/Button';
import { Magnetic } from '@/components/atoms/Magnetic';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { HowWeWork } from '@/components/organisms/HowWeWork';

import { BackgroundFlourish } from '@/components/atoms/BackgroundFlourish';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const verticalsRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const DEFAULT_EASE = "power3.out";

    // 1. Hero Animations & Parallax
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

    heroTl.fromTo(".hero-header-reveal", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.2, ease: DEFAULT_EASE })
          .fromTo(".hero-title .text-line", { 
            y: 80,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 1.4,
            ease: "expo.out"
          }, "-=0.8")
          .fromTo(".hero-subtext", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 1, ease: DEFAULT_EASE }, "-=0.8");

    // 2. Section Reveals
    const sections = gsap.utils.toArray<HTMLElement>('section:not(#verticals)');
    sections.forEach((section) => {
      const elements = section.querySelectorAll('.fade-up');
      if (elements.length > 0) {
        gsap.fromTo(elements, 
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            stagger: 0.1, 
            duration: 1.2, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    });

    // 3. Expertise Verticals Bento Reveal
    gsap.fromTo(".bento-card", 
      { y: 60, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.15, 
        duration: 1.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#verticals",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-[#FDFBF7] selection:bg-[#D4B982] selection:text-black overflow-hidden">
      <div className="relative">
        
        {/* 1. Hero Section */}
        <section id="hero" ref={heroRef} className="relative h-[100vh] min-h-[700px] flex items-center overflow-hidden bg-heritage">
          <div className="absolute inset-0 z-0 hero-bg-wrapper scale-110">
            <Image src="/assets/wedding/wedding-5.jpg" alt="Services Overview" fill className="object-cover brightness-[0.35]" priority />
          </div>
          
          <BackgroundFlourish color="#D4B982" opacity={0.15} className="z-10" />
          
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />
          
          <div className="container relative z-20 pt-32 md:pt-48">
            <div className="max-w-5xl space-y-10">
              <div className="hero-header-reveal flex flex-col items-start gap-4 opacity-0">
                 <div className="flex items-center gap-3">
                   <div className="w-12 h-px bg-[#D4B982]/40" />
                   <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">EVENT PRODUCTION</span>
                 </div>
              </div>
              <h1 className="hero-title text-5xl md:text-8xl lg:text-[9.5rem] font-serif text-white leading-[1] tracking-tight">
                <span className="block overflow-hidden"><span className="text-line block">Engineering Elite</span></span>
                <span className="block overflow-hidden"><span className="text-line block italic font-script text-[#D4B982] mt-4 lg:text-[13rem] drop-shadow-[0_20px_50px_rgba(212,185,130,0.4)]">celebrations</span></span>
              </h1>
              <div className="max-w-xl hero-subtext opacity-0 pt-10">
                <p className="text-white/80 text-xl md:text-2xl font-serif italic border-l border-[#D4B982]/30 pl-10 leading-relaxed">
                  Comprehensive event management and production for those who demand perfection in every detail.
                </p>
              </div>
            </div>
          </div>

          {/* Scroll Hint */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-40">
             <span className="text-[9px] text-[#D4B982] uppercase tracking-[0.6em] font-bold">SCROLL</span>
             <div className="w-px h-12 bg-gradient-to-b from-[#D4B982] to-transparent" />
          </div>
        </section>

        {/* 1.5. Philosophy Section */}
        <section id="philosophy" className="py-32 md:py-48 bg-[#FDFBF7] relative overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-16 fade-up">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-8 h-px bg-[#D4B982]/30" />
                  <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">OUR ESSENCE</span>
                  <div className="w-8 h-px bg-[#D4B982]/30" />
                </div>
                <h2 className="text-4xl md:text-7xl font-serif text-[#121212] leading-tight tracking-tight">
                  Crafting <span className="italic font-script text-[#D4B982] lowercase md:text-8xl">Magical Moments</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 text-left">
                <p className="text-[#525252] text-lg md:text-xl font-sans font-light leading-relaxed italic opacity-90 border-l border-[#D4B982]/20 pl-8">
                  &quot;Zing Bliss&quot; is an endeavor to embellish those special moments of your life in a way it stays as a charming memory. We provide specialized & customized services built on the foundation of trust.
                </p>
                <p className="text-[#525252] text-lg md:text-xl font-sans font-light leading-relaxed italic opacity-90 border-l border-[#D4B982]/20 pl-8">
                  Whether it&apos;s a milestone birthday, a corporate gala, or a Big Fat Indian Wedding — we have you covered for everything with &quot;perfection in every minute detail.&quot;
                </p>
              </div>

              <div className="pt-12 flex flex-col items-center gap-4">
                <div className="w-20 h-px bg-[#D4B982]/40" />
                <Star size={18} className="text-[#D4B982] animate-pulse" />
                <div className="w-20 h-px bg-[#D4B982]/40" />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Core Solutions Grid */}
        <section id="grid" className="py-32 md:py-48 bg-[#FDFBF7]">
          <div className="container text-center">
            <div className="space-y-6 mb-24 fade-up">
              <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.6em] font-bold">OUR CORE SOLUTIONS</span>
              <h2 className="text-4xl md:text-7xl font-serif text-[#121212] leading-tight tracking-tight">Professional Management</h2>
              <div className="w-16 h-px bg-[#D4B982]/30 mx-auto mt-8" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
              {[
                { title: 'WEDDING PRODUCTION', desc: 'Luxury weddings engineered with logistical precision and bespoke creative direction.', image: '/hero-2.jpg' },
                { title: 'CORPORATE EXCELLENCE', desc: 'Strategic event management for high-impact conferences, summits, and brand launches.', image: '/hero-1.jpg' },
                { title: 'PRIVATE CELEBRATIONS', desc: 'Seamless end-to-end management for intimate milestones and exclusive private parties.', image: '/private-celebrations.jpg' },
                { title: 'FULL-SCALE PRODUCTION', desc: 'Technical implementation, stage design, and comprehensive on-site event execution.', image: '/event-production.jpg' },
              ].map((item, i) => (
                <div key={i} className="group fade-up bg-white shadow-[0_30px_100px_rgba(0,0,0,0.05)] overflow-hidden text-left border border-linen/20 transition-all duration-700 hover:shadow-[0_50px_120px_rgba(212,185,130,0.1)] hover:-translate-y-2">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-[2500ms] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                    
                    <div className="absolute top-8 left-8 z-20">
                       <span className="text-[14px] font-mono text-white/40 group-hover:text-[#D4B982] transition-colors duration-500 font-bold">0{i+1}</span>
                    </div>
                  </div>
                  <div className="p-10 md:p-14 space-y-8 relative">
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-4xl font-serif text-[#121212] tracking-wide leading-tight">{item.title}</h3>
                      <p className="text-[16px] text-[#525252] leading-relaxed font-light italic border-l border-[#D4B982]/10 pl-6">{item.desc}</p>
                    </div>
                    
                    <Link href="/contact" className="inline-flex items-center gap-5 text-[11px] font-bold uppercase tracking-[0.4em] text-[#D4B982] group/link hover:text-[#B38B4D] transition-colors">
                      EXPLORE DETAILS <ArrowRight size={16} className="transform transition-transform group-hover/link:translate-x-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Expertise Verticals - Bento Grid Layout */}
        <section id="verticals" ref={verticalsRef} className="py-32 bg-[#05100a] relative overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-[0.03] pointer-events-none" />
          
          <div className="container relative z-10">
            <div className="max-w-3xl mb-20 fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-[#D4B982]/40" />
                <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">EXPERTISE SPECTRUM</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                Our Specialized <br />
                <span className="italic font-script text-[#D4B982] lowercase text-5xl md:text-8xl">Verticals.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[400px] lg:auto-rows-[450px]">
              {/* Card 1: Event Management - Featured Large Card */}
              <div className="bento-card lg:col-span-8 relative group overflow-hidden border border-white/5 bg-heritage/20 backdrop-blur-sm">
                <div className="absolute inset-0 z-0 transition-transform duration-[3000ms] group-hover:scale-105">
                  <Image src="/assets/corporate/corporate-1.jpg" alt="Event Management" fill className="object-cover opacity-40 brightness-50" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#05100a] via-[#05100a]/40 to-transparent z-10" />
                
                <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-[#D4B982]">
                      <span className="text-[14px] font-mono font-bold tracking-widest uppercase">01 / Management</span>
                      <div className="w-12 h-px bg-[#D4B982]/30" />
                    </div>
                    <h3 className="text-3xl md:text-5xl xl:text-6xl font-serif text-white tracking-tight">Precision Orchestration.</h3>
                    <p className="max-w-lg text-white/60 text-base md:text-lg font-light italic border-l border-[#D4B982]/20 pl-6 md:pl-8 leading-relaxed">
                      A seamless journey from planning to execution. Our team of professionals handles every scale of event with logistical mastery.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2 md:pt-4">
                    {['Weddings', 'Corporate', 'Baby Shower', 'Birthday', 'Festivals'].map(tag => (
                      <span key={tag} className="px-3 md:px-4 py-1 border border-white/10 rounded-full text-[9px] md:text-[10px] text-white/40 uppercase tracking-widest hover:border-[#D4B982] hover:text-[#D4B982] transition-colors">{tag}</span>
                    ))}
                  </div>
                </div>
                {/* Gold-lit Border Overlay */}
                <div className="absolute inset-0 border border-white/10 group-hover:border-[#D4B982]/30 transition-colors duration-700 pointer-events-none z-30" />
              </div>

              {/* Card 2: Entertainment - Secondary Card */}
              <div className="bento-card lg:col-span-4 relative group overflow-hidden border border-white/5 bg-[#0a1f13]/20 backdrop-blur-sm">
                <div className="absolute inset-0 z-0 transition-transform duration-[3000ms] group-hover:scale-110">
                  <Image src="/assets/wedding/wedding-4.jpg" alt="Entertainment" fill className="object-cover opacity-30 brightness-50" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#05100a] via-[#05100a]/60 to-transparent z-10" />
                
                <div className="absolute inset-0 z-20 p-8 md:p-10 flex flex-col justify-end space-y-4 md:space-y-6">
                  <div className="space-y-3 md:space-y-4 text-left">
                    <div className="flex items-center gap-4 text-[#D4B982]">
                      <span className="text-[12px] md:text-[14px] font-mono font-bold tracking-widest uppercase">02 / Talent</span>
                      <div className="w-8 md:w-12 h-px bg-[#D4B982]/30" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-white tracking-tight leading-tight">Global Talent.</h3>
                    <p className="text-white/40 text-[13px] md:text-sm font-light leading-relaxed">
                      From Bollywood stars to global acts, we curate the night&apos;s energy.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['DJs', 'Bands', 'MC', 'Artists'].map(tag => (
                      <span key={tag} className="px-2 md:px-3 py-1 border border-white/10 rounded-full text-[8px] md:text-[9px] text-white/40 uppercase tracking-widest hover:border-[#D4B982] hover:text-[#D4B982] transition-colors">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 border border-white/10 group-hover:border-[#D4B982]/30 transition-colors duration-700 pointer-events-none z-30" />
              </div>

              {/* Card 3: Production - Secondary Card */}
              <div className="bento-card lg:col-span-4 relative group overflow-hidden border border-white/5 bg-heritage/20 backdrop-blur-sm">
                <div className="absolute inset-0 z-0 transition-transform duration-[3000ms] group-hover:scale-110">
                  <Image src="/assets/production/production-1.jpg" alt="Production" fill className="object-cover opacity-30 brightness-50" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#05100a] via-[#05100a]/60 to-transparent z-10" />
                
                <div className="absolute inset-0 z-20 p-8 md:p-10 flex flex-col justify-end space-y-4 md:space-y-6">
                  <div className="space-y-3 md:space-y-4 text-left">
                    <div className="flex items-center gap-4 text-[#D4B982]">
                      <span className="text-[12px] md:text-[14px] font-mono font-bold tracking-widest uppercase">03 / Tech</span>
                      <div className="w-8 md:w-12 h-px bg-[#D4B982]/30" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-white tracking-tight leading-tight">Technical Edge.</h3>
                    <p className="text-white/40 text-[13px] md:text-sm font-light leading-relaxed">
                      Absolute precision from stage design to cinematic production.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Sound', 'Light', 'AV', 'Decor'].map(tag => (
                      <span key={tag} className="px-2 md:px-3 py-1 border border-white/10 rounded-full text-[8px] md:text-[9px] text-white/40 uppercase tracking-widest hover:border-[#D4B982] hover:text-[#D4B982] transition-colors">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 border border-white/10 group-hover:border-[#D4B982]/30 transition-colors duration-700 pointer-events-none z-30" />
              </div>

              {/* Card 4: Full Scope - Horizontal Card */}
              <div className="bento-card lg:col-span-8 relative group overflow-hidden border border-white/5 bg-[#0a1f13]/20 backdrop-blur-sm">
                <div className="absolute inset-0 z-0 transition-transform duration-[3000ms] group-hover:scale-105">
                  <Image src="/assets/wedding/wedding-1.jpg" alt="Full Scope" fill className="object-cover opacity-20 brightness-50 grayscale hover:grayscale-0 transition-all duration-1000" />
                </div>
                <div className="absolute inset-0 bg-[#05100a]/60 z-10" />
                
                <div className="absolute inset-0 z-20 p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="max-w-md space-y-3 md:space-y-4">
                    <h3 className="text-3xl md:text-4xl font-serif text-white italic tracking-tight">The 360° Vision.</h3>
                    <p className="text-white/50 text-sm md:text-base font-light">
                      We integrate all verticals into a singular, cohesive masterpiece that honors your legacy.
                    </p>
                  </div>
                  <Link href="/contact" className="w-full md:w-auto">
                    <Button variant="outline" className="w-full md:w-auto h-14 px-8 border-[#D4B982]/30 text-white/80 hover:text-[#D4B982] rounded-none group-hover:bg-[#D4B982] group-hover:text-black transition-all duration-500">
                      ENQUIRE NOW
                    </Button>
                  </Link>
                </div>
                <div className="absolute inset-0 border border-white/10 group-hover:border-[#D4B982]/30 transition-colors duration-700 pointer-events-none z-30" />
              </div>
            </div>
          </div>
        </section>


        <HowWeWork />

        {/* Advantage Section */}
        <section id="advantage" className="py-32 md:py-56 bg-[#FDFBF7] relative overflow-hidden">
          <div className="container text-center">
            <div className="space-y-6 mb-24 fade-up">
              <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">WHY CHOOSE US</span>
              <h2 className="text-4xl md:text-7xl font-serif text-[#121212] leading-tight tracking-tight">The Production Advantage</h2>
              <div className="w-16 h-px bg-[#D4B982]/30 mx-auto mt-8" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
              {[
                { title: 'Strategic Mastery', desc: 'Meticulous planning that aligns with your specific goals.', icon: <Zap size={32} /> },
                { title: 'Seamless Production', desc: 'Flawless coordination from conceptual design to wrap.', icon: <Star size={32} /> },
                { title: 'Absolute Quality', desc: 'A refusal to compromise on the caliber of any detail.', icon: <Sparkles size={32} /> },
                { title: 'Elite Team', desc: 'Dedicated specialists committed to event success.', icon: <Music size={32} /> },
                { title: 'Unrivalled Focus', desc: 'Your objectives remain our primary driving force.', icon: <Zap size={32} /> },
              ].map((item, i) => (
                <div key={i} className="space-y-8 fade-up group">
                  <div className="w-20 h-20 mx-auto flex items-center justify-center border border-[#D4B982]/10 rounded-full bg-white shadow-lg group-hover:border-[#D4B982]/40 transition-all duration-700">{item.icon}</div>
                  <div className="space-y-3 px-2">
                    <h4 className="text-lg font-bold text-[#121212] uppercase tracking-wider font-serif">{item.title}</h4>
                    <p className="text-[#525252] text-[13px] leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-32 md:py-48 overflow-hidden bg-[#05100a] text-center">
          <div className="absolute inset-0 z-0">
            <Image src="/assets/wedding/wedding-3.jpg" alt="Final CTA" fill className="object-cover brightness-[0.15] scale-105" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-[#05100a] opacity-90 z-10" />
          </div>
          <div className="container relative z-20 text-center">
            <div className="space-y-8 fade-up">
              <h2 className="text-4xl md:text-7xl lg:text-[7.5rem] font-serif text-white leading-[1] tracking-tighter relative z-10">Ready to Plan Your Next Event?</h2>
              <span className="font-script text-[#D4B982] text-6xl md:text-9xl lg:text-[11rem] block -mt-4 md:-mt-8 italic drop-shadow-lg relative z-20">Discuss Your Vision</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-20 fade-up">
              <Magnetic strength={0.1}><Link href="/contact"><Button className="btn-gold h-16 px-16 text-[12px]">BOOK A CONSULTATION</Button></Link></Magnetic>
              <Magnetic strength={0.1}><a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer"><Button variant="outline" className="h-16 px-10 border-[#D4B982]/40 text-white/90 hover:text-[#D4B982] rounded-none tracking-[0.3em] font-bold text-[11px] uppercase hover:bg-white/5 transition-all duration-700 backdrop-blur-sm group"><div className="flex items-center gap-4"><div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center border border-[#25D366]/40 group-hover:bg-[#25D366]/30 transition-colors"><MessageCircle size={16} fill="#25D366" className="text-[#25D366]" /></div><span className="text-white group-hover:text-[#D4B982] transition-colors uppercase">Chat on WhatsApp</span></div></Button></a></Magnetic>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
