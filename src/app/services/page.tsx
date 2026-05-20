'use client';

import React, { useRef } from 'react';
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
import { InteractiveServiceList } from '@/components/organisms/InteractiveServiceList';
import { BackgroundFlourish } from '@/components/atoms/BackgroundFlourish';
import { GrainOverlay } from '@/components/atoms/GrainOverlay';

import { SpecializedVerticalsAccordion } from '@/components/organisms/SpecializedVerticalsAccordion';
import { ClientVoices } from '@/components/organisms/ClientVoices';
import { MaskSlideImage } from '@/components/molecules/MaskSlideImage';
import { SVGSpine } from '@/components/atoms/SVGSpine';

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
    const sections = gsap.utils.toArray<HTMLElement>('section:not(#verticals)');
    sections.forEach((section) => {
      const elements = section.querySelectorAll('.fade-up');
      if (elements.length > 0) {
        gsap.fromTo(elements, 
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            stagger: 0.08, 
            duration: 0.8, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 92%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    });

    // 3. Parallax Images
    gsap.to(".parallax-img", {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-container",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // 4. Floating Elements in Advantage
    gsap.to(".floating-decor", {
      y: -50,
      rotation: 5,
      ease: "none",
      scrollTrigger: {
        trigger: "#advantage",
        start: "top bottom",
        end: "bottom top",
        scrub: true
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
        <section id="hero" ref={heroRef} className="relative min-h-[60vh] md:min-h-[600px] flex items-center overflow-hidden bg-heritage">
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
          
          <div className="container relative z-20 pt-28 pb-16 md:pt-32 md:pb-20">
            <div className="max-w-5xl space-y-6 md:space-y-10">
              <div className="hero-header-reveal flex flex-col items-start gap-4 opacity-0">
                 <div className="flex items-center gap-3">
                   <div className="w-8 md:w-12 h-px bg-[#D4B982]/40" />
                   <span className="text-[10px] md:text-[11px] text-[#D4B982] uppercase tracking-[0.6em] md:tracking-[0.8em] font-bold">PRESTIGE SERVICES</span>
                 </div>
              </div>
              <h1 className="hero-title text-4xl sm:text-6xl md:text-8xl lg:text-[8rem] font-serif text-white leading-[0.9] tracking-tight">
                <span className="block overflow-hidden pb-2"><span className="text-line block">Crafting Elite</span></span>
                <span className="block overflow-hidden pb-8 -mb-8">
                  <span className="text-line block italic font-script text-[#D4B982] mt-2 md:mt-4 text-6xl sm:text-8xl md:text-[10rem] lg:text-[11rem] drop-shadow-[0_15px_45px_rgba(212,185,130,0.4)]">experiences</span>
                </span>
              </h1>
              <div className="max-w-xl hero-subtext opacity-0 pt-4 md:pt-8">
                <p className="text-white/80 text-lg md:text-2xl font-serif italic border-l border-[#D4B982]/30 pl-6 md:pl-10 leading-relaxed">
                  Bespoke event architecture and technical production for visionaries who demand the extraordinary.
                </p>
              </div>
            </div>
          </div>

          {/* Scroll Hint */}
          <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 md:gap-4 opacity-40">
             <span className="text-[8px] md:text-[9px] text-[#D4B982] uppercase tracking-[0.4em] md:tracking-[0.6em] font-bold">DISCOVER</span>
             <div className="w-px h-8 md:h-12 bg-gradient-to-b from-[#D4B982] to-transparent" />
          </div>
        </section>

        {/* 1.5. Philosophy Section - Asymmetric Upgrade */}
        <section id="philosophy" className="py-16 md:py-32 bg-[#FDFBF7] relative overflow-hidden rounded-t-[2.5rem] md:rounded-t-[6rem] -mt-12 md:-mt-16 z-20">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-center">
              
              <div className="lg:col-span-7 space-y-10 md:space-y-16 fade-up">
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-8 h-px bg-[#D4B982]/30" />
                    <span className="text-[10px] md:text-[11px] text-[#D4B982] uppercase tracking-[0.6em] md:tracking-[0.8em] font-bold">OUR ESSENCE</span>
                  </div>
                  <h2 className="text-4xl md:text-7xl font-serif text-[#121212] leading-[1.1] md:leading-[1] tracking-tighter">
                    Where Vision <br />
                    <span className="italic font-script text-[#D4B982] lowercase text-5xl md:text-8xl">Meets Reality</span>
                  </h2>
                </div>

                <div className="space-y-8 md:space-y-10 max-w-2xl">
                  <p className="text-[#525252] text-lg md:text-2xl font-serif italic border-l-2 border-[#D4B982]/20 pl-6 md:pl-10 leading-relaxed">
                    &quot;Zing Bliss&quot; is more than an agency; it is a curator of legacy. We specialize in embellishing the most significant chapters of your life with logistical mastery and creative soul.
                  </p>
                  <p className="text-[#525252] text-base md:text-lg font-sans font-light leading-relaxed opacity-80 pl-6 md:pl-10">
                    Founded on the bedrock of absolute trust, we translate your intangible dreams into cinematic realities. Every milestone—be it a global summit or a private gala—is engineered with perfection in every minute detail.
                  </p>
                  
                  <div className="pt-4 pl-6 md:pl-10">
                    <Link href="/about">
                      <Button variant="outline" className="h-12 md:h-14 px-6 md:px-8 border-[#D4B982]/20 text-[#D4B982] hover:bg-[#D4B982] hover:text-white rounded-none tracking-widest text-[9px] md:text-[10px] font-bold uppercase transition-all duration-700">
                        LEARN OUR STORY
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative pt-8 md:pt-0">
                <MaskSlideImage 
                  src="/assets/wedding/wedding-2.jpg" 
                  alt="Philosophy Image" 
                  aspectRatio="aspect-[4/5]"
                  className="shadow-[0_30px_80px_rgba(0,0,0,0.1)] border border-[#D4B982]/10"
                />
                {/* Floating Element */}
                <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-36 h-36 md:w-48 md:h-48 bg-heritage p-6 md:p-8 hidden sm:flex flex-col justify-center border border-[#D4B982]/20 shadow-2xl z-20">
                   <Star className="text-[#D4B982] mb-3 md:mb-4 w-5 h-5 md:w-6 md:h-6" />
                   <p className="text-white/60 text-[8px] md:text-[10px] uppercase tracking-widest font-bold leading-relaxed">
                     Commitment to <br /> Unparalleled <br /> Quality.
                   </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 1.7. Production Stats Bar */}
        <section className="bg-heritage py-12 md:py-16 relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[url('/assets/decor-1.jpg')] bg-cover bg-center mix-blend-overlay" />
           <div className="container relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
                 {[
                   { label: 'EVENTS PRODUCED', value: '500+' },
                   { label: 'GLOBAL VENDORS', value: '250+' },
                   { label: 'COUNTRIES', value: '12' },
                   { label: 'GUESTS SERVED', value: '100k+' }
                 ].map((stat, i) => (
                   <div key={i} className="space-y-1 md:space-y-2 fade-up">
                      <span className="block text-2xl md:text-5xl font-serif text-[#D4B982] tracking-tighter">{stat.value}</span>
                      <span className="block text-[8px] md:text-[10px] text-white/40 uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold">{stat.label}</span>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 2. Interactive Solutions List */}
        <InteractiveServiceList />

        {/* 2.5. Production Highlights - Cinematic Break */}
        <section className="py-16 md:py-32 bg-[#05100a] relative overflow-hidden rounded-t-[2.5rem] md:rounded-t-[6rem] -mt-12 md:-mt-16 z-20">
           <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
                 <div className="lg:col-span-4 space-y-6 md:space-y-8 fade-up text-center md:text-left">
                    <span className="text-[10px] md:text-[11px] text-[#D4B982] uppercase tracking-[0.6em] md:tracking-[0.8em] font-bold">PRODUCTION QUALITY</span>
                    <h2 className="text-3xl md:text-6xl font-serif text-white tracking-tight leading-tight">Engineering the Extraordinary.</h2>
                    <p className="text-white/50 text-base md:text-lg font-light italic border-l-0 md:border-l border-[#D4B982]/20 pl-0 md:pl-8 leading-relaxed max-w-lg mx-auto md:mx-0">
                       Our technical infrastructure is designed to handle the most complex requirements—from stadium-grade acoustics to bespoke architectural lighting.
                    </p>
                 </div>
                 <div className="lg:col-span-8 grid grid-cols-2 gap-4 md:gap-12">
                    <div className="pt-12 md:pt-20">
                       <MaskSlideImage src="/assets/production/production-1.jpg" alt="Highlight 1" aspectRatio="aspect-[3/4]" className="rounded-xl md:rounded-2xl" maskColor="bg-[#05100a]" />
                    </div>
                    <div>
                       <MaskSlideImage src="/assets/corporate/corporate-3.jpg" alt="Highlight 2" aspectRatio="aspect-[3/4]" className="rounded-xl md:rounded-2xl" maskColor="bg-[#05100a]" />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. Expertise Verticals - Accordion Gallery Upgrade */}
        <SpecializedVerticalsAccordion />

        <HowWeWork />

        {/* 3.5. Technical Precision - SVG Spine Narrative */}
        <section className="py-16 md:py-32 bg-[#05100a] relative overflow-hidden rounded-t-[2.5rem] md:rounded-t-[6rem] -mt-12 md:-mt-16 z-20 border-t border-white/5">
           <SVGSpine height="100%" opacity={0.1} color="#D4B982" />
           <div className="container relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
                 <div className="space-y-10 md:space-y-16">
                    <div className="space-y-4 md:space-y-6 fade-up">
                       <span className="text-[10px] md:text-[11px] text-[#D4B982] uppercase tracking-[0.6em] md:tracking-[0.8em] font-bold">LOGISTICAL DEPTH</span>
                       <h2 className="text-3xl md:text-7xl font-serif text-white tracking-tight leading-tight">Mastery in <br /> every layer.</h2>
                    </div>
                    
                    <div className="space-y-8 md:space-y-12">
                       {[
                         { title: 'Acoustic Engineering', desc: 'Precision sound mapping for flawless clarity across any venue scale.' },
                         { title: 'Architectural Lighting', desc: 'Transforming spaces into cinematic environments through light physics.' },
                         { title: 'Logistical Redundancy', desc: 'Comprehensive fail-safe protocols for every critical production path.' }
                       ].map((feat, i) => (
                         <div key={i} className="space-y-3 md:space-y-4 fade-up group">
                            <div className="flex items-center gap-4 md:gap-6">
                               <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#D4B982]/20 flex items-center justify-center text-[#D4B982] group-hover:bg-[#D4B982] group-hover:text-black transition-all duration-500 font-mono text-[10px] md:text-xs">
                                  0{i+1}
                               </div>
                               <h4 className="text-lg md:text-xl font-serif text-white">{feat.title}</h4>
                            </div>
                            <p className="text-white/40 text-xs md:text-sm leading-relaxed max-w-sm ml-12 md:ml-16">
                               {feat.desc}
                            </p>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="relative fade-up pt-8 md:pt-0">
                    <div className="relative aspect-[4/5] rounded-full overflow-hidden border border-[#D4B982]/20 shadow-2xl max-w-md mx-auto">
                       <Image 
                         src="/assets/production/production-1.jpg" 
                         alt="Production mastery" 
                         fill 
                         className="object-cover brightness-50" 
                         sizes="(max-width: 768px) 100vw, 400px"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#05100a] to-transparent opacity-60" />
                    </div>
                    {/* Pulsing focal point */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                       <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-[#D4B982]/40 animate-ping" />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <Star className="text-[#D4B982] w-6 h-6 md:w-8 md:h-8" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>


        {/* Advantage Section - Editorial Upgrade */}
        <section id="advantage" className="py-16 md:py-32 bg-[#FDFBF7] relative overflow-hidden rounded-t-[2.5rem] md:rounded-t-[6rem] -mt-12 md:-mt-16 z-20">
          {/* Floating Decor */}
          <div className="absolute top-10 right-[5%] w-48 h-48 md:top-20 md:right-[10%] md:w-64 md:h-64 opacity-[0.03] pointer-events-none floating-decor">
            <BackgroundFlourish type="floral" />
          </div>
          <div className="absolute bottom-10 left-[2%] w-64 h-64 md:bottom-20 md:left-[5%] md:w-96 md:h-96 opacity-[0.02] pointer-events-none floating-decor">
            <BackgroundFlourish type="architectural" />
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mb-12 md:mb-20 fade-up">
              <span className="text-[10px] md:text-[11px] text-[#D4B982] uppercase tracking-[0.6em] md:tracking-[0.8em] font-bold mb-4 md:mb-6 block">WHY PARTNER WITH US</span>
              <h2 className="text-4xl md:text-7xl font-serif text-[#121212] leading-[1.1] md:leading-[1] tracking-tighter">The Production <br /> <span className="italic font-script text-[#D4B982] lowercase text-5xl md:text-8xl ml-1 md:ml-2">Philosophy.</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-16 gap-x-12 lg:gap-x-24">
              {[
                { title: 'Strategic Mastery', desc: 'Meticulous planning that aligns every logistical variable with your specific overarching goals and brand identity.', icon: <Zap className="w-8 h-8 md:w-10 md:h-10" /> },
                { title: 'Seamless Production', desc: 'Flawless coordination from conceptual design to final wrap, managed by a team of battle-tested specialists.', icon: <Star className="w-8 h-8 md:w-10 md:h-10" /> },
                { title: 'Absolute Quality', desc: 'A refusal to compromise on the caliber of any detail, ensuring that every touchpoint reflects excellence.', icon: <Sparkles className="w-8 h-8 md:w-10 md:h-10" /> },
                { title: 'Elite Network', desc: 'Exclusive access to a global network of premium vendors, artists, and venues curated over decades.', icon: <Music className="w-8 h-8 md:w-10 md:h-10" /> },
                { title: 'Concierge Focus', desc: 'Your peace of mind is our primary driving force. We handle the complexity so you can celebrate the moment.', icon: <Zap className="w-8 h-8 md:w-10 md:h-10" /> },
              ].map((item, i) => (
                <div key={i} className="fade-up group space-y-6 md:space-y-8">
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border border-[#D4B982]/20 rounded-full group-hover:bg-heritage transition-all duration-700 group-hover:scale-110 group-hover:rotate-12">
                       <div className="text-[#D4B982] group-hover:text-white transition-colors">
                         {item.icon}
                       </div>
                    </div>
                    <span className="text-[32px] md:text-[40px] font-serif italic text-[#D4B982]/10 group-hover:text-[#D4B982]/20 transition-colors">0{i+1}</span>
                  </div>
                  <div className="space-y-4 md:space-y-6">
                    <h4 className="text-xl md:text-2xl font-serif text-[#121212] tracking-tight">{item.title}</h4>
                    <p className="text-[#525252] text-base md:text-lg leading-relaxed font-light italic border-l border-[#D4B982]/20 pl-6 md:pl-8">{item.desc}</p>
                  </div>
                </div>
              ))}
              
              {/* Final Asymmetric Card */}
              <div className="fade-up lg:col-span-1 bg-heritage p-8 md:p-12 flex flex-col justify-between border border-[#D4B982]/20 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#D4B982]/5 rounded-full -mr-12 -mt-12 md:-mr-16 md:-mt-16 group-hover:scale-150 transition-transform duration-1000" />
                 <h4 className="text-xl md:text-2xl font-serif text-white tracking-tight relative z-10">Ready to redefine <br /> your next event?</h4>
                 <Link href="/contact" className="inline-flex items-center gap-4 text-[#D4B982] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-widest mt-8 md:mt-12 relative z-10 group/link">
                   START A CONVERSATION <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover/link:translate-x-3 transition-transform" />
                 </Link>
              </div>
            </div>
          </div>
        </section>

        <ClientVoices />

        {/* Final CTA */}
        <section className="relative py-16 md:py-32 overflow-hidden bg-[#05100a] text-center rounded-t-[2.5rem] md:rounded-t-[6rem] -mt-12 md:-mt-16 z-20">
          <div className="absolute inset-0 z-0 hero-bg-wrapper">
            <Image 
              src="/assets/wedding/wedding-3.jpg" 
              alt="Final CTA" 
              fill 
              className="object-cover brightness-[0.2] scale-105" 
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#05100a] via-transparent to-[#05100a] opacity-90 z-10" />
            <div className="absolute inset-0 bg-black/40 z-10" />
          </div>
          
          <div className="container relative z-20 text-center">
            <div className="max-w-6xl mx-auto space-y-12 md:space-y-16 fade-up">
               <div className="space-y-6 md:space-y-8">
                 <h2 className="text-4xl md:text-8xl lg:text-[9rem] font-serif text-white leading-[0.9] md:leading-[0.85] tracking-tighter relative z-10">
                   Your Vision, <br />
                   <span className="font-script text-[#D4B982] text-5xl sm:text-7xl md:text-[10rem] block italic drop-shadow-[0_15px_60px_rgba(212,185,130,0.4)] relative z-20 mt-6 md:mt-10">Perfectly Mastered</span>
                 </h2>
               </div>
               
               <p className="text-white/60 text-lg md:text-2xl font-serif italic max-w-3xl mx-auto leading-relaxed border-t border-b border-white/5 py-8 md:py-12 px-4 md:px-0">
                 Join the elite group of visionaries who trust Zing Bliss for their most significant milestones.
               </p>

               <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 pt-12 md:pt-16">
                 <Magnetic strength={0.1}>
                   <Link href="/contact" className="w-full sm:w-auto">
                     <Button className="h-14 md:h-16 w-full sm:px-16 text-[10px] md:text-[12px] bg-[#D4B982] text-black hover:bg-white hover:text-black transition-all duration-700 tracking-[0.3em] md:tracking-[0.4em] font-bold uppercase rounded-none">
                       BOOK A CONSULTATION
                     </Button>
                   </Link>
                 </Magnetic>
                 <Magnetic strength={0.1}>
                   <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                     <Button variant="outline" className="h-14 md:h-16 w-full sm:px-10 border-[#D4B982]/40 text-white/90 hover:text-[#D4B982] rounded-none tracking-[0.2em] md:tracking-[0.3em] font-bold text-[10px] md:text-[11px] uppercase hover:bg-white/5 transition-all duration-700 backdrop-blur-sm group">
                       <div className="flex items-center justify-center gap-3 md:gap-4">
                         <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center border border-[#25D366]/40 group-hover:bg-[#25D366]/30 transition-colors">
                           <MessageCircle fill="#25D366" className="text-[#25D366] w-3.5 h-3.5 md:w-4 md:h-4" />
                         </div>
                         <span className="text-white group-hover:text-[#D4B982] transition-colors">WHATSAPP CONCIERGE</span>
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
