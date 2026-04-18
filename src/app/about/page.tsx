'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Target, Compass, Sparkles, ShieldCheck, Zap, CheckCircle2, Star, Award, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/atoms/Badge';
import { cn } from '@/lib/utils';
import { Button } from '@/components/atoms/Button';
import { Magnetic } from '@/components/atoms/Magnetic';
import { TextReveal } from '@/components/atoms/TextReveal';
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

const FloatingMetric = ({ label, value, className }: { label: string, value: string, className?: string }) => (
  <div className={cn("absolute hidden lg:flex flex-col gap-1 items-center text-center opacity-40 hover:opacity-100 transition-opacity duration-1000 group z-10", className)}>
    <span className="text-[8px] font-mono uppercase tracking-[0.4em] text-heritage/60 group-hover:text-heritage transition-colors small-caps">{label}</span>
    <div className="h-px w-6 bg-heritage/20 group-hover:w-10 transition-all" />
    <span className="text-xl font-serif text-text-primary italic group-hover:text-heritage transition-colors">{value}</span>
  </div>
);

const SectionDivider = ({ className }: { className?: string }) => (
  <div className={cn("flex flex-col items-center gap-2 py-4 relative z-10", className)}>
    <div className="flex items-center gap-3">
      <Sparkles size={6} className="text-heritage/20" />
      <Star size={8} className="text-heritage/30" />
      <Sparkles size={6} className="text-heritage/20" />
    </div>
  </div>
);

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // 1. Hero Animations
    const heroTl = gsap.timeline();
    heroTl.to(".hero-header-reveal", { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
          .to(".hero-title", { 
            opacity: 1, 
            y: 0, 
            duration: 1.2, 
            ease: "power3.out" 
          }, "-=0.6")
          .to(".hero-subtext", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.7")
          .to(".hero-scroll-cue", { opacity: 0.6, duration: 1, ease: "power2.out" }, "-=0.3");

    // 2. Philosophy Animations
    gsap.from(".philosophy-image-container", {
      scale: 0.95,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".philosophy-image-container",
        start: "top 85%"
      }
    });

    gsap.from(".philosophy-text-block > *", {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".philosophy-text-block",
        start: "top 85%"
      }
    });

    gsap.from(".vision-block", {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#vision",
        start: "top 80%"
      }
    });

    // 3. Final CTA Animations
    gsap.to(".cta-text-reveal", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#cta",
        start: "top 80%"
      }
    });

    gsap.to(".cta-bg-image", {
      scale: 1.15,
      ease: "none",
      scrollTrigger: {
        trigger: "#cta",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Hide sticky components when CTA is in view
    ScrollTrigger.create({
      trigger: "#cta",
      start: "top bottom-=100px", // Trigger slightly before the section fully enters
      onEnter: () => gsap.to(["#sticky-cta-bar", "#back-to-top"], { opacity: 0, pointerEvents: "none", duration: 0.4, ease: "power2.out" }),
      onLeaveBack: () => gsap.to(["#sticky-cta-bar", "#back-to-top"], { opacity: 1, pointerEvents: "auto", duration: 0.4, ease: "power2.in" })
    });

    // 4. Existing Scroll Animations
    gsap.utils.toArray<HTMLElement>('.fade-up').forEach((el) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 92%' },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    });
    /*
    const sections = gsap.utils.toArray<HTMLElement>('section[data-bg]');
    sections.forEach((section) => {
      const bgColor = section.getAttribute('data-bg');
      if (bgColor) {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 50%',
          end: 'bottom 50%',
          onEnter: () => gsap.to(mainRef.current, { backgroundColor: bgColor, duration: 1.2, ease: 'power2.inOut' }),
          onEnterBack: () => gsap.to(mainRef.current, { backgroundColor: bgColor, duration: 1.2, ease: 'power2.inOut' }),
        });
      }
    });
    */
  }, { scope: containerRef });

  return (
    <main ref={mainRef} className="min-h-screen bg-canvas selection:bg-heritage selection:text-canvas relative overflow-hidden transition-colors duration-1000 pb-16">
      <div ref={containerRef} className="relative">
        <SVGSpine height="6000px" viewBox="0 0 20 6000" pathD="M 10 0 L 10 6000" className="opacity-[0.05]" />
        
        {/* 1. Hero Section */}
        <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden" data-bg="var(--color-canvas)">
          {/* Refined Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2),transparent_70%)] z-10 pointer-events-none" />
          
          {/* Film Grain Overlay */}
          <div className="absolute inset-0 mix-blend-overlay opacity-10 pointer-events-none z-10" 
               style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

          <div className="absolute inset-0 z-0">
            <ParallaxImage 
              src="/hero-9.jpg" 
              alt="About Zing Bliss" 
              speed={0.2}
              className="scale-110"
            />
          </div>

          <div className="container relative z-20 text-center flex flex-col items-center">
            {/* Soft Content Glow */}
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-white/5 opacity-30 -z-10" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="hero-header-reveal flex flex-col items-center gap-4 mb-8 opacity-0 translate-y-8">
                  <span className="text-[10px] font-mono text-white/60 uppercase tracking-[0.6em] small-caps">01 / OUR STORY</span>
                  <div className="h-10 w-[1px] bg-gradient-to-b from-burnished/60 to-transparent" />
                </div>
                
                <h1 className="hero-title text-4xl md:text-7xl lg:text-[6.8rem] font-serif font-medium tracking-[-0.02em] text-white leading-[0.95] lg:leading-[0.85] drop-shadow-2xl max-w-5xl opacity-0 translate-y-12">
                  About <br /> <span className="text-burnished italic font-light tracking-wide">Zing Bliss.</span>
                </h1>

                <p className="hero-subtext text-lg md:text-xl text-white/80 max-w-xl leading-[1.6] font-sans font-light mt-8 md:mt-10 drop-shadow-lg opacity-0 translate-y-8">
                  We craft experiences that feel effortless, refined, and deeply personal — designed with intention, executed with quiet precision.
                </p>

                {/* Scroll Indicator */}
                <div className="hero-scroll-cue mt-16 opacity-0">
                  <div className="w-[1px] h-10 bg-white/40 mx-auto animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Press Marquee */}
        <section className="py-8 border-y border-linen/60 bg-white/50 backdrop-blur-sm" data-bg="var(--color-canvas)">
          <InfiniteMarquee 
            items={["Vogue", "Bazaar", "The Knot", "Brides", "Luxury Daily", "Elite Traveler"]} 
            speed={35} 
            className="text-text-primary/60 font-serif italic text-xl md:text-2xl"
          />
        </section>

        <SectionDivider />

        {/* Philosophy Section */}
        <section id="philosophy" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white to-[#f8f6f2]" data-bg="var(--color-canvas)">
          {/* Subtle Grain Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
               style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Image Column - Shifted Down */}
              <div className="lg:col-span-7 mt-12 philosophy-image-container relative group">
                <div className="relative overflow-hidden rounded-[12px] h-[50vh] md:h-[75vh] w-full shadow-[0_40px_100px_rgba(0,0,0,0.15)] z-10">
                  <Image 
                    src="/hero-9.jpg" 
                    alt="Our Work" 
                    fill 
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  
                  {/* Floating Detail Label */}
                  <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.4em] bg-white/80 backdrop-blur px-4 py-2 font-mono font-bold small-caps">
                    Since 2017 / Crafted
                  </div>
                </div>
              </div>

              {/* Text Column - Shifted Up */}
              <div className="lg:col-span-5 -mt-4 philosophy-text-block space-y-10">
                <div className="space-y-6">
                  <h2 className="text-5xl md:text-7xl font-serif text-text-primary font-medium leading-[0.9] tracking-tight">
                    The Art Behind <br />
                    <span className="text-burnished italic font-light">Zing Bliss.</span>
                  </h2>
                  <div className="w-12 h-[1px] bg-burnished/40 my-6" />
                </div>

                <div className="space-y-8 text-lg md:text-xl text-text-secondary/80 font-sans font-light leading-[1.7] max-w-md">
                  <p>
                    We design experiences that feel effortless yet unforgettable — where every detail is intentional, and every moment carries meaning.
                  </p>
                  <p>
                    From intimate gatherings to grand celebrations, our approach blends precision, creativity, and quiet luxury.
                  </p>
                </div>

                {/* Text-based Highlights */}
                <div className="space-y-6 pt-4">
                  {[
                    { id: '01', title: 'Bespoke Approach' },
                    { id: '02', title: 'Global Network' },
                    { id: '03', title: 'Detail-Obsessed Execution' },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center gap-4 border-t border-linen pt-6 group">
                      <span className="text-[10px] font-mono text-burnished opacity-60">{item.id}</span>
                      <span className="text-sm uppercase tracking-[0.3em] text-text-primary font-bold transition-all group-hover:tracking-[0.4em]">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider className="bg-heritage-soft" />

        {/* Vision & Mission */}
        <section id="vision" className="py-32 md:py-48 relative overflow-hidden" data-bg="var(--color-heritage)">
          {/* Rich Cinematic Background Overlay System */}
          <div className="absolute inset-0 z-0">
            <Image src="/hero-8.jpg" alt="Mission Background" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90 z-10" />
            <div className="absolute inset-0 opacity-20 z-10" style={{ backgroundColor: 'rgba(180,140,90,0.1)' }} />
            <div className="absolute inset-0 z-10" style={{ background: 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.4))' }} />
          </div>

          <div className="container relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-12 md:gap-20 max-w-6xl mx-auto items-center">
              {/* Goal Block */}
              <div className="vision-block space-y-4 transition-all duration-500 hover:brightness-125 group">
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 block">OUR GOAL</span>
                <h3 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                  Effortless <br />
                  <span className="text-burnished italic font-light">Elegance.</span>
                </h3>
                <p className="text-white/80 font-sans font-light leading-[1.7] max-w-md text-lg md:text-xl italic border-l border-white/10 pl-6">
                  "To craft events where elegance feels effortless and every detail reflects intention."
                </p>
              </div>

              {/* Vertical Divider */}
              <div className="hidden md:block w-px h-48 bg-white/10" />

              {/* Mission Block */}
              <div className="vision-block space-y-4 transition-all duration-500 hover:brightness-125 group">
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 block">OUR MISSION</span>
                <h3 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                  Quietly <br />
                  <span className="text-burnished italic font-light">Unforgettable.</span>
                </h3>
                <p className="text-white/80 font-sans font-light leading-[1.7] max-w-md text-lg md:text-xl italic border-l border-white/10 pl-6">
                  "To design experiences that are deeply personal, flawlessly executed, and quietly unforgettable."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="cta" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-t border-white/5" data-bg="var(--color-heritage)">
          {/* Cinematic Background Layering */}
          <div className="absolute inset-0 z-0">
             <Image src="/hero10.jpg" alt="Background" fill className="cta-bg-image object-cover scale-105" />
             <div className="absolute inset-0 bg-black/55 z-10" />
             <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/80 z-10" />
             <div className="absolute inset-0 opacity-20 z-10" style={{ backgroundColor: 'rgba(180,140,90,0.08)' }} />
          </div>

          <BackgroundFlourish type="floral" className="bottom-[-10%] left-[-5%] w-64 h-64 text-white/5 rotate-45" />
          
          <div className="container relative z-20 text-center flex flex-col items-center">
            <div className="cta-text-reveal max-w-[800px] w-full flex flex-col items-center space-y-8 opacity-0 translate-y-12">
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-white/50 uppercase tracking-[0.4em] block">03 / CONNECT</span>
                <h2 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] tracking-tighter">
                  Plan Your <br />
                  <span className="text-burnished italic font-light">Day.</span>
                </h2>
              </div>

              <p className="text-white/70 max-w-xl leading-relaxed text-base md:text-lg font-sans font-light">
                Begin your journey with a team that designs every detail with intention, elegance, and care.
              </p>

              <div className="flex flex-col items-center gap-8 pt-4">
                <Magnetic strength={0.1}>
                  <Link href="/contact">
                    <Button 
                      className="h-14 px-12 text-[11px] bg-[#1C3B2A] hover:bg-[#244F3A] text-white rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
                      rightIcon={<ArrowRight size={18} />}
                    >
                      Book Consultation
                    </Button>
                  </Link>
                </Magnetic>
                
                <div className="flex flex-col items-center gap-4">
                  <a 
                    href={getGenericWhatsAppLink()} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[11px] font-sans uppercase tracking-[0.4em] text-white/70 hover:text-white transition-all border-b border-white/20 pb-1"
                  >
                    Message Us
                  </a>
                  <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em]">Bespoke Planning — For You</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
