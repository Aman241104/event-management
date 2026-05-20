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

    // 4. Parallax Images in Philosophy
    gsap.to(".philosophy-image", {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: "#philosophy",
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
        <section id="hero" ref={heroRef} className="relative h-[100vh] min-h-[700px] flex items-center overflow-hidden bg-heritage">
          <div className="absolute inset-0 z-0 hero-bg-wrapper scale-110">
            <Image src="/assets/wedding/wedding-5.jpg" alt="Services Overview" fill className="object-cover brightness-[0.35]" priority />
          </div>
          
          <BackgroundFlourish opacity={0.15} className="z-10 text-[#D4B982]" />
          
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />
          
          <div className="container relative z-20 pt-32 md:pt-48">
            <div className="max-w-5xl space-y-10">
              <div className="hero-header-reveal flex flex-col items-start gap-4 opacity-0">
                 <div className="flex items-center gap-3">
                   <div className="w-12 h-px bg-[#D4B982]/40" />
                   <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">PRESTIGE SERVICES</span>
                 </div>
              </div>
              <h1 className="hero-title text-5xl md:text-8xl lg:text-[10rem] font-serif text-white leading-[0.9] tracking-tight">
                <span className="block overflow-hidden"><span className="text-line block">Crafting Elite</span></span>
                <span className="block overflow-hidden"><span className="text-line block italic font-script text-[#D4B982] mt-4 lg:text-[14rem] drop-shadow-[0_20px_60px_rgba(212,185,130,0.5)]">experiences</span></span>
              </h1>
              <div className="max-w-xl hero-subtext opacity-0 pt-10">
                <p className="text-white/80 text-xl md:text-2xl font-serif italic border-l border-[#D4B982]/30 pl-10 leading-relaxed">
                  Bespoke event architecture and technical production for visionaries who demand the extraordinary.
                </p>
              </div>
            </div>
          </div>

          {/* Scroll Hint */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-40">
             <span className="text-[9px] text-[#D4B982] uppercase tracking-[0.6em] font-bold">DISCOVER</span>
             <div className="w-px h-12 bg-gradient-to-b from-[#D4B982] to-transparent" />
          </div>
        </section>

        {/* 1.5. Philosophy Section - Asymmetric Upgrade */}
        <section id="philosophy" className="py-32 md:py-64 bg-[#FDFBF7] relative overflow-hidden">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              
              <div className="lg:col-span-7 space-y-16 fade-up">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-px bg-[#D4B982]/30" />
                    <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">OUR ESSENCE</span>
                  </div>
                  <h2 className="text-5xl md:text-8xl font-serif text-[#121212] leading-[1] tracking-tighter">
                    Where Vision <br />
                    <span className="italic font-script text-[#D4B982] lowercase md:text-9xl">Meets Reality</span>
                  </h2>
                </div>

                <div className="space-y-10 max-w-2xl">
                  <p className="text-[#525252] text-xl md:text-2xl font-serif italic border-l-2 border-[#D4B982]/20 pl-10 leading-relaxed">
                    &quot;Zing Bliss&quot; is more than an agency; it is a curator of legacy. We specialize in embellishing the most significant chapters of your life with logistical mastery and creative soul.
                  </p>
                  <p className="text-[#525252] text-lg font-sans font-light leading-relaxed opacity-80 pl-10">
                    Founded on the bedrock of absolute trust, we translate your intangible dreams into cinematic realities. Every milestone—be it a global summit or a private gala—is engineered with perfection in every minute detail.
                  </p>
                  
                  <div className="pt-8 pl-10">
                    <Link href="/about">
                      <Button variant="outline" className="h-14 px-8 border-[#D4B982]/20 text-[#D4B982] hover:bg-[#D4B982] hover:text-white rounded-none tracking-widest text-[10px] font-bold uppercase transition-all duration-700">
                        LEARN OUR STORY
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/5] overflow-hidden shadow-[0_50px_120px_rgba(0,0,0,0.15)] border border-[#D4B982]/10 philosophy-image">
                   <Image src="/assets/wedding/wedding-2.jpg" alt="Philosophy Image" fill className="object-cover" />
                   <div className="absolute inset-0 bg-black/5" />
                </div>
                {/* Floating Element */}
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-heritage p-8 hidden md:flex flex-col justify-center border border-[#D4B982]/20 shadow-2xl z-20">
                   <Star className="text-[#D4B982] mb-4" />
                   <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold leading-relaxed">
                     Commitment to <br /> Unparalleled <br /> Quality.
                   </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. Interactive Solutions List */}
        <InteractiveServiceList />

        {/* 3. Expertise Verticals - Bento Grid Layout */}
        <section id="verticals" className="py-32 md:py-56 bg-[#05100a] relative overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-[0.03] pointer-events-none" />
          
          <div className="container relative z-10">
            <div className="max-w-4xl mb-24 fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-[#D4B982]/40" />
                <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">EXPERTISE SPECTRUM</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">
                Our Specialized <br />
                <span className="italic font-script text-[#D4B982] lowercase text-6xl md:text-9xl">Verticals.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 auto-rows-[450px] lg:auto-rows-[500px]">
              {/* Card 1: Event Management */}
              <div className="bento-card lg:col-span-8 relative group overflow-hidden border border-white/5 bg-heritage/20 backdrop-blur-sm">
                <div className="absolute inset-0 z-0 transition-transform duration-[3000ms] group-hover:scale-105">
                  <Image src="/assets/corporate/corporate-1.jpg" alt="Event Management" fill className="object-cover opacity-40 brightness-50" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#05100a] via-[#05100a]/40 to-transparent z-10" />
                
                <div className="absolute inset-0 z-20 p-12 flex flex-col justify-end space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-[#D4B982]">
                      <span className="text-[14px] font-mono font-bold tracking-widest uppercase">01 / Management</span>
                      <div className="w-12 h-px bg-[#D4B982]/30" />
                    </div>
                    <h3 className="text-4xl md:text-6xl font-serif text-white tracking-tight">Precision Orchestration.</h3>
                    <p className="max-w-lg text-white/60 text-lg font-light italic border-l border-[#D4B982]/20 pl-8 leading-relaxed">
                      A seamless journey from initial briefing to final execution. Our team handles every logistical variable with absolute mastery.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-4">
                    {['Weddings', 'Corporate', 'Baby Shower', 'Birthday', 'Festivals'].map(tag => (
                      <span key={tag} className="px-5 py-2 border border-white/10 rounded-full text-[10px] text-white/40 uppercase tracking-widest hover:border-[#D4B982] hover:text-[#D4B982] transition-all duration-500">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 border border-white/10 group-hover:border-[#D4B982]/30 transition-colors duration-700 pointer-events-none z-30" />
              </div>

              {/* Card 2: Entertainment */}
              <div className="bento-card lg:col-span-4 relative group overflow-hidden border border-white/5 bg-[#0a1f13]/20 backdrop-blur-sm">
                <div className="absolute inset-0 z-0 transition-transform duration-[3000ms] group-hover:scale-110">
                  <Image src="/assets/wedding/wedding-4.jpg" alt="Entertainment" fill className="object-cover opacity-30 brightness-50" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#05100a] via-[#05100a]/60 to-transparent z-10" />
                
                <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-[#D4B982]">
                      <span className="text-[14px] font-mono font-bold tracking-widest uppercase">02 / Talent</span>
                      <div className="w-12 h-px bg-[#D4B982]/30" />
                    </div>
                    <h3 className="text-3xl font-serif text-white tracking-tight leading-tight">Curated <br />Entertainment.</h3>
                    <p className="text-white/40 text-sm font-light leading-relaxed">
                      From Bollywood icons to international acts, we define the rhythm of your celebration.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['DJs', 'Bands', 'MC', 'Artists'].map(tag => (
                      <span key={tag} className="px-3 py-1.5 border border-white/10 rounded-full text-[9px] text-white/40 uppercase tracking-widest hover:border-[#D4B982] hover:text-[#D4B982] transition-colors">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 border border-white/10 group-hover:border-[#D4B982]/30 transition-colors duration-700 pointer-events-none z-30" />
              </div>

              {/* Card 3: Production */}
              <div className="bento-card lg:col-span-4 relative group overflow-hidden border border-white/5 bg-heritage/20 backdrop-blur-sm">
                <div className="absolute inset-0 z-0 transition-transform duration-[3000ms] group-hover:scale-110">
                  <Image src="/assets/production/production-1.jpg" alt="Production" fill className="object-cover opacity-30 brightness-50" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#05100a] via-[#05100a]/60 to-transparent z-10" />
                
                <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-[#D4B982]">
                      <span className="text-[14px] font-mono font-bold tracking-widest uppercase">03 / Tech</span>
                      <div className="w-12 h-px bg-[#D4B982]/30" />
                    </div>
                    <h3 className="text-3xl font-serif text-white tracking-tight leading-tight">High Fidelity <br />Production.</h3>
                    <p className="text-white/40 text-sm font-light leading-relaxed">
                      Technical implementation and cinematic stage design that leaves no room for error.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Sound', 'Light', 'AV', 'Decor'].map(tag => (
                      <span key={tag} className="px-3 py-1.5 border border-white/10 rounded-full text-[9px] text-white/40 uppercase tracking-widest hover:border-[#D4B982] hover:text-[#D4B982] transition-colors">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 border border-white/10 group-hover:border-[#D4B982]/30 transition-colors duration-700 pointer-events-none z-30" />
              </div>

              {/* Card 4: Full Scope */}
              <div className="bento-card lg:col-span-8 relative group overflow-hidden border border-white/5 bg-[#0a1f13]/20 backdrop-blur-sm">
                <div className="absolute inset-0 z-0 transition-transform duration-[3000ms] group-hover:scale-105">
                  <Image src="/assets/wedding/wedding-1.jpg" alt="Full Scope" fill className="object-cover opacity-20 brightness-50 grayscale hover:grayscale-0 transition-all duration-1000" />
                </div>
                <div className="absolute inset-0 bg-[#05100a]/60 z-10" />
                
                <div className="absolute inset-0 z-20 p-12 flex flex-col md:flex-row md:items-center justify-between gap-10">
                  <div className="max-w-lg space-y-6">
                    <h3 className="text-4xl md:text-5xl font-serif text-white italic tracking-tight">The Concierge Vision.</h3>
                    <p className="text-white/50 text-base md:text-lg font-light leading-relaxed">
                      We integrate all verticals into a singular, cohesive masterpiece that honors your legacy and allows you to be a guest at your own event.
                    </p>
                  </div>
                  <Link href="/contact" className="shrink-0">
                    <Button variant="outline" className="h-16 px-10 border-[#D4B982]/30 text-white/80 hover:text-black hover:bg-[#D4B982] rounded-none transition-all duration-700 text-[11px] font-bold tracking-[0.4em] uppercase">
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

        {/* Advantage Section - Editorial Upgrade */}
        <section id="advantage" className="py-32 md:py-64 bg-[#FDFBF7] relative overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-4xl mb-32 fade-up">
              <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.8em] font-bold mb-6 block">WHY PARTNER WITH US</span>
              <h2 className="text-5xl md:text-8xl font-serif text-[#121212] leading-[1] tracking-tighter">The Production <br /> <span className="italic font-script text-[#D4B982] lowercase md:text-9xl ml-4">Philosophy.</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-16 lg:gap-x-24">
              {[
                { title: 'Strategic Mastery', desc: 'Meticulous planning that aligns every logistical variable with your specific overarching goals and brand identity.', icon: <Zap size={40} /> },
                { title: 'Seamless Production', desc: 'Flawless coordination from conceptual design to final wrap, managed by a team of battle-tested specialists.', icon: <Star size={40} /> },
                { title: 'Absolute Quality', desc: 'A refusal to compromise on the caliber of any detail, ensuring that every touchpoint reflects excellence.', icon: <Sparkles size={40} /> },
                { title: 'Elite Network', desc: 'Exclusive access to a global network of premium vendors, artists, and venues curated over decades.', icon: <Music size={40} /> },
                { title: 'Concierge Focus', desc: 'Your peace of mind is our primary driving force. We handle the complexity so you can celebrate the moment.', icon: <Zap size={40} /> },
              ].map((item, i) => (
                <div key={i} className="fade-up group space-y-10">
                  <div className="flex items-start justify-between">
                    <div className="w-20 h-20 flex items-center justify-center border border-[#D4B982]/20 rounded-full group-hover:bg-heritage transition-all duration-700 group-hover:scale-110 group-hover:rotate-12">
                       <div className="text-[#D4B982] group-hover:text-white transition-colors">
                         {item.icon}
                       </div>
                    </div>
                    <span className="text-[40px] font-serif italic text-[#D4B982]/10 group-hover:text-[#D4B982]/20 transition-colors">0{i+1}</span>
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-2xl font-serif text-[#121212] tracking-tight">{item.title}</h4>
                    <p className="text-[#525252] text-lg leading-relaxed font-light italic border-l border-[#D4B982]/20 pl-8">{item.desc}</p>
                  </div>
                </div>
              ))}
              
              {/* Final Asymmetric Card */}
              <div className="fade-up lg:col-span-1 bg-heritage p-12 flex flex-col justify-between border border-[#D4B982]/20 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4B982]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />
                 <h4 className="text-2xl font-serif text-white tracking-tight relative z-10">Ready to redefine <br /> your next event?</h4>
                 <Link href="/contact" className="inline-flex items-center gap-4 text-[#D4B982] text-[10px] font-bold uppercase tracking-widest mt-12 relative z-10 group/link">
                   START A CONVERSATION <ArrowRight size={16} className="group-hover/link:translate-x-3 transition-transform" />
                 </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-32 md:py-64 overflow-hidden bg-[#05100a] text-center">
          <div className="absolute inset-0 z-0">
            <Image src="/assets/wedding/wedding-3.jpg" alt="Final CTA" fill className="object-cover brightness-[0.15] scale-105" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-[#05100a] opacity-95 z-10" />
          </div>
          <div className="container relative z-20 text-center">
            <div className="max-w-5xl mx-auto space-y-12 fade-up">
               <div className="space-y-6">
                 <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-serif text-white leading-[0.8] tracking-tighter relative z-10">
                   Your Vision, <br />
                   <span className="font-script text-[#D4B982] text-7xl md:text-[13rem] block italic drop-shadow-[0_20px_50px_rgba(212,185,130,0.3)] relative z-20 mt-8">Perfectly Mastered</span>
                 </h2>
               </div>
               
               <p className="text-white/60 text-xl md:text-2xl font-serif italic max-w-2xl mx-auto leading-relaxed">
                 Join the elite group of visionaries who trust Zing Bliss for their most significant milestones.
               </p>

               <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-12">
                 <Magnetic strength={0.1}>
                   <Link href="/contact">
                     <Button className="h-16 px-16 text-[12px] bg-[#D4B982] text-black hover:bg-white hover:text-black transition-all duration-700 tracking-[0.4em] font-bold uppercase rounded-none">
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
