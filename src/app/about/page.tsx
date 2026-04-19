'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/atoms/Button';
import { Magnetic } from '@/components/atoms/Magnetic';
import { InfiniteMarquee } from '@/components/atoms/InfiniteMarquee';
import { ParallaxImage } from '@/components/atoms/ParallaxImage';
import { SVGSpine } from '@/components/atoms/SVGSpine';
import { BackgroundFlourish } from '@/components/atoms/BackgroundFlourish';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SectionDivider = ({ className }: { className?: string }) => (
  <div className={cn("flex flex-col items-center gap-2 py-4 relative z-10 group", className)} aria-hidden="true">
    <div className="flex items-center gap-4">
      <Sparkles size={6} className="text-burnished/20 transition-all duration-700 group-hover:scale-125 group-hover:text-burnished/40" />
      <div className="h-px w-12 bg-linen group-hover:w-16 transition-all duration-700" />
      <Star size={8} className="text-burnished/30 transition-all duration-700 group-hover:rotate-90 group-hover:text-burnished/50" />
      <div className="h-px w-12 bg-linen group-hover:w-16 transition-all duration-700" />
      <Sparkles size={6} className="text-burnished/20 transition-all duration-700 group-hover:scale-125 group-hover:text-burnished/40" />
    </div>
  </div>
);

const TransitionMoment = ({ text }: { text: string }) => (
  <div className="py-12 flex justify-center scroll-reveal">
    <span className="text-[10px] tracking-[0.4em] uppercase text-text-secondary/40 font-mono italic">
      {text}
    </span>
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
      scale: 1.08,
      x: 15,
      duration: 30,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });

    heroTl.from(".hero-header-reveal", { opacity: 0, y: 30, duration: 1, ease: DEFAULT_EASE })
          .from(".hero-header-line", { height: 0, duration: 1, ease: "power2.inOut" }, "-=0.8")
          .from(".hero-title .text-line", { 
            y: 80,
            opacity: 0,
            stagger: 0.1,
            duration: 1.2,
            ease: DEFAULT_EASE 
          }, "-=0.6")
          .from(".hero-subtext", { opacity: 0, y: 20, duration: 1, ease: DEFAULT_EASE }, "-=0.8")
          .from(".hero-signals", { opacity: 0, duration: 1 }, "-=0.5")
          .from(".hero-scroll-cue", { opacity: 0, y: 20, duration: 1, ease: "power2.out" }, "-=0.6");

    gsap.to(".hero-scroll-line", {
      height: 60,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // 2. Global Section & Transition Reveals
    const reveals = gsap.utils.toArray('.scroll-reveal, section:not(#hero)');
    reveals.forEach((el: any) => {
      gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          toggleActions: "play none none reverse"
        }
      });

      const lines = el.querySelectorAll(".text-line");
      if (lines.length) {
        gsap.fromTo(lines, 
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1,
            ease: DEFAULT_EASE,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            }
          }
        );
      }
    });

    // 3. Philosophy Specific Animations
    gsap.from(".philosophy-fade", {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 1,
      ease: DEFAULT_EASE,
      scrollTrigger: {
        trigger: ".philosophy-text-block",
        start: "top 85%"
      }
    });

    gsap.from(".philosophy-image-container", {
      scale: 0.95,
      opacity: 0,
      duration: 1.5,
      ease: DEFAULT_EASE,
      scrollTrigger: {
        trigger: ".philosophy-image-container",
        start: "top 90%"
      }
    });

    // 4. Signature Difference Items
    gsap.from(".difference-item", {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: DEFAULT_EASE,
      scrollTrigger: {
        trigger: ".difference-items-container",
        start: "top 85%"
      }
    });

    // 5. Values & Principles Animations
    gsap.from(".values-divider", {
      opacity: 0,
      scaleY: 0,
      duration: 1.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#values",
        start: "top 85%"
      }
    });

    gsap.from(".values-left, .values-right", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1.2,
      ease: DEFAULT_EASE,
      scrollTrigger: {
        trigger: "#values",
        start: "top 85%"
      }
    });

    // 6. Process Steps
    gsap.from(".process-step", {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: DEFAULT_EASE,
      scrollTrigger: {
        trigger: ".process-steps-container",
        start: "top 85%"
      }
    });

    // 7. Final CTA Content
    gsap.from(".cta-content-reveal", {
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: DEFAULT_EASE,
      scrollTrigger: {
        trigger: "#cta",
        start: "top 85%"
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

    // Refresh ScrollTrigger after all initializations
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

  }, { scope: containerRef, dependencies: [mounted] });

  if (!mounted) return <div className="min-h-screen bg-canvas" />;

  return (
    <main ref={mainRef} className="min-h-screen bg-canvas selection:bg-burnished selection:text-canvas relative overflow-hidden transition-colors duration-1000 pb-16">
      <div ref={containerRef} className="relative">
        <SVGSpine height="6000px" viewBox="0 0 20 6000" pathD="M 10 0 L 10 6000" className="opacity-[0.05]" />
        
        {/* 1. Hero Section */}
        <section id="hero" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden" data-bg="var(--color-canvas)">
          <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/50 z-10 pointer-events-none" />
          <div className="absolute inset-0 z-10 pointer-events-none" style={{ backgroundColor: 'rgba(180,140,90,0.03)' }} aria-hidden="true" />
          
          <div className="absolute inset-0 mix-blend-overlay opacity-[0.05] pointer-events-none z-10" 
               style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

          <div className="absolute inset-0 z-0 hero-bg-wrapper will-change-transform">
            <ParallaxImage 
              src="/hero-9.jpg" 
              alt="Luxury ballroom setup" 
              speed={0.1}
              className="scale-105"
              aspectRatio="h-full w-full"
              priority
            />
          </div>

          <div className="container max-w-7xl relative z-20 text-center flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 blur-[80px] bg-black/30 -z-10" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="hero-header-reveal flex flex-col items-center gap-4 mb-12">
                  <span className="text-[10px] font-mono text-white/60 uppercase tracking-[0.5em] small-caps">01 / OUR STORY</span>
                  <div className="hero-header-line w-[1px] bg-gradient-to-b from-burnished/60 to-transparent" />
                </div>
                
                <h1 className="hero-title text-4xl md:text-7xl lg:text-[7.2rem] font-serif font-medium tracking-tight text-white leading-[0.95] drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)] max-w-5xl">
                  <span className="block overflow-hidden pb-2">
                    <span className="text-line block">About</span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="text-line block italic font-light bg-gradient-to-br from-[#C6A76E] via-[#E8D3A3] to-[#C6A76E] bg-clip-text text-transparent pb-4">
                      Zing Bliss.
                    </span>
                  </span>
                </h1>

                <p className="hero-subtext text-lg md:text-xl text-white/80 max-w-[520px] leading-relaxed font-sans font-light mt-12 drop-shadow-md">
                  We design experiences that feel effortless, refined, and deeply personal — where every detail is intentional, and every moment carries meaning.
                </p>

                <div className="hero-signals mt-8 flex items-center justify-center gap-6">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-white/50 font-mono">150+ Curated Events</span>
                  <div className="w-1 h-1 rounded-full bg-burnished/40" aria-hidden="true" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-white/50 font-mono">Serving Globally</span>
                </div>

                <div className="hero-scroll-cue mt-16">
                  <div className="hero-scroll-line w-[1px] h-12 bg-white/30 mx-auto shadow-[0_0_10px_rgba(255,255,255,0.1)]" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        <section className="py-6 border-y border-linen/60 bg-white/50 backdrop-blur-sm" data-bg="var(--color-canvas)" aria-label="Brand partners and publications">
          <InfiniteMarquee 
            items={["Vogue", "Bazaar", "The Knot", "Brides", "Luxury Daily", "Elite Traveler"]}
            speed={30}
            className="text-text-primary/50 font-serif italic text-xl md:text-2xl"
          />
        </section>

        <TransitionMoment text="Every detail begins with intention" />

        <SectionDivider />

        {/* 2. Philosophy Section */}
        <section id="philosophy" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white to-[#f8f6f2]" data-bg="var(--color-canvas)">
          <div className="container max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
              <div className="lg:col-span-5 order-1 lg:order-2 philosophy-text-block space-y-10">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-text-primary font-medium leading-[1.05] tracking-tight overflow-hidden">
                    <span className="block overflow-hidden">
                      <span className="text-line block">The Art Behind</span>
                    </span>
                    <span className="block overflow-hidden">
                      <span className="text-line block text-burnished italic font-light">Zing Bliss.</span>
                    </span>
                  </h2>
                  <div className="w-16 h-px bg-burnished/30 transition-all duration-700 hover:w-24" aria-hidden="true" />
                </div>

                <div className="space-y-8 text-lg md:text-xl text-text-secondary/80 font-sans font-light leading-relaxed max-w-md">
                  <p className="philosophy-fade">
                    We design experiences that feel effortless yet unforgettable — where every detail is intentional, and every moment carries meaning.
                  </p>
                  <blockquote className="philosophy-fade italic text-text-secondary/60 text-base border-l-2 border-burnished/20 pl-4">
                    "An experience that felt effortless from start to finish."
                  </blockquote>
                </div>

                <div className="space-y-4 pt-4 philosophy-fade">
                  {[
                    { id: '01', title: 'Bespoke Approach' },
                    { id: '02', title: 'Global Network' },
                    { id: '03', title: 'Detail-Obsessed Execution' },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center gap-6 border-t border-linen pt-6 group">
                      <span className="text-[10px] font-mono text-burnished/60 group-hover:text-burnished transition-colors">{item.id}</span>
                      <span className="text-sm uppercase tracking-[0.3em] text-text-primary font-bold transition-all duration-300 group-hover:tracking-[0.4em] group-hover:text-burnished">{item.title}</span>
                    </div>
                  ))}
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-text-secondary/40 mt-4 font-mono">
                    Each project is crafted over weeks of intensive planning.
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 order-2 lg:order-1 philosophy-image-container relative group transition-all duration-1000 will-change-transform">
                <div className="relative overflow-hidden rounded-xl h-[45vh] md:h-[80vh] w-full shadow-2xl z-10">
                  <Image 
                    src="/hero-9.jpg" 
                    alt="Elegant indoor event space" 
                    fill 
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]" 
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-700 pointer-events-none" />
                  <div className="absolute top-8 left-8 text-[10px] uppercase tracking-[0.4em] bg-white/90 backdrop-blur px-5 py-3 font-mono font-bold small-caps">
                    Since 2017 / Crafted
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TransitionMoment text="Defined by precision. Driven by passion." />

        <SectionDivider />

        {/* 3. Signature Difference Section */}
        <section id="difference" className="relative py-24 md:py-32 overflow-hidden bg-white" data-bg="var(--color-canvas)">
          <div className="absolute inset-0 pointer-events-none" 
               style={{ background: 'radial-gradient(circle at top left, rgba(180,140,90,0.04), transparent 70%)' }} aria-hidden="true" />
          
          <div className="container max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 space-y-10 difference-statement">
                <div className="space-y-6">
                  <span className="text-[10px] tracking-[0.5em] uppercase text-text-secondary/50 block font-mono">
                    THE ZING BLISS DIFFERENCE
                  </span>
                  <h2 className="text-4xl md:text-6xl font-serif text-text-primary leading-[1.1] font-medium">
                    <span className="block overflow-hidden">
                      <span className="text-line block">We don’t plan events.</span>
                    </span>
                    <span className="block overflow-hidden">
                      <span className="text-line block italic text-burnished font-light">We compose experiences.</span>
                    </span>
                  </h2>
                </div>
                
                <p className="text-text-secondary/80 text-lg leading-relaxed max-w-md font-sans font-light">
                  Every celebration we design is built with intention — balancing creativity, precision, and an uncompromising attention to detail.
                </p>
                <div className="pt-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-text-secondary/40 font-mono block">
                    Ahmedabad Based. Serving Globally.
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 difference-items-container">
                <div className="flex flex-col">
                  {[
                    { id: '01', title: 'Intention Over Decoration', desc: 'We believe every element should serve a purpose beyond aesthetics, creating a narrative that resonates deeply.' },
                    { id: '02', title: 'Precision Over Excess', desc: 'Luxury is found in the perfect execution of the essential, not in the accumulation of the unnecessary.' },
                    { id: '03', title: 'Experience Over Display', desc: 'We prioritize the sensory journey of your guests, ensuring the feeling of the event outlasts the visual spectacle.' },
                  ].map((item) => (
                    <div key={item.id} className="difference-item group border-t border-linen py-10 flex justify-between items-start transition-all duration-500">
                      <div className="flex gap-12 w-full">
                        <span className="text-[10px] font-mono text-burnished/60 mt-1 transition-opacity duration-300 group-hover:text-burnished">{item.id}</span>
                        <div className="flex flex-col md:flex-row justify-between w-full gap-6 md:gap-12">
                          <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-text-primary transition-all duration-500 group-hover:tracking-[0.4em] group-hover:text-burnished">
                            {item.title}
                          </h3>
                          <p className="text-text-secondary/70 text-sm leading-relaxed max-w-sm font-sans font-light transition-colors duration-500 group-hover:text-text-primary">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="border-t border-linen w-full transition-colors duration-700 group-hover:border-burnished/20" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <TransitionMoment text="The path from vision to reality" />

        <SectionDivider className="bg-heritage-soft/50" />

        {/* 4. Values & Principles Section */}
        <section id="values" className="relative py-24 md:py-40 overflow-hidden" data-bg="var(--color-heritage)">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/hero-8.jpg" 
              alt="Intimate wedding reception" 
              fill 
              className="object-cover brightness-[0.35]" 
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/70 z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />
            <div className="absolute inset-0 opacity-20 z-10" style={{ backgroundColor: 'rgba(180,140,90,0.06)' }} aria-hidden="true" />
          </div>

          <div className="container max-w-7xl relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-16 md:gap-24 max-w-6xl mx-auto items-center text-white">
              <div className="values-left space-y-8 transition-all duration-700 hover:brightness-110 group translate-y-0">
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 block font-mono">OUR APPROACH</span>
                  <h3 className="text-4xl md:text-6xl font-serif leading-tight drop-shadow-2xl overflow-hidden">
                    <span className="block overflow-hidden pb-1">
                      <span className="text-line block">Elegance is never loud.</span>
                    </span>
                    <span className="block overflow-hidden">
                      <span className="text-line block italic text-burnished font-light">It is felt.</span>
                    </span>
                  </h3>
                </div>
                <p className="text-white/70 font-sans font-light leading-relaxed max-w-md text-lg italic border-l border-white/20 pl-8 drop-shadow-lg transition-opacity group-hover:text-white/90">
                  "We believe the most powerful experiences are not the most extravagant, but the most intentional — where every detail exists for a reason."
                </p>
              </div>

              <div className="hidden md:block w-px h-72 bg-white/10 values-divider origin-center transition-all duration-1000 group-hover:bg-white/30" aria-hidden="true" />

              <div className="values-right space-y-8 transition-all duration-700 hover:brightness-110 group translate-y-0">
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 block font-mono">OUR STANDARD</span>
                  <h3 className="text-4xl md:text-6xl font-serif leading-tight drop-shadow-2xl overflow-hidden">
                    <span className="block overflow-hidden pb-1">
                      <span className="text-line block">Precision is our language.</span>
                    </span>
                    <span className="block overflow-hidden">
                      <span className="text-line block italic text-burnished font-light">Details are our signature.</span>
                    </span>
                  </h3>
                </div>
                <p className="text-white/70 font-sans font-light leading-relaxed max-w-md text-lg italic border-l border-white/20 pl-8 drop-shadow-lg transition-opacity group-hover:text-white/90">
                  "From concept to execution, we operate with clarity, structure, and a deep respect for detail — ensuring every moment unfolds seamlessly."
                </p>
              </div>
            </div>
          </div>
        </section>

        <TransitionMoment text="Crafting the unforgettable" />

        <SectionDivider className="bg-heritage-soft/50" />

        {/* 5. Our Process Section */}
        <section id="process" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white to-[#f5f2ec]" data-bg="var(--color-canvas)">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <span className="text-[18vw] font-serif font-bold text-black/[0.02] uppercase tracking-tighter leading-none select-none">
              Process
            </span>
          </div>

          <div className="container max-w-7xl relative z-10">
            <div className="process-header max-w-2xl mb-24">
              <span className="text-[10px] tracking-[0.5em] uppercase text-text-secondary/50 block font-mono mb-6">
                OUR PROCESS
              </span>
              <h2 className="text-5xl md:text-7xl font-serif text-text-primary leading-[1.05] font-medium mb-8 overflow-hidden">
                <span className="block overflow-hidden">
                  <span className="text-line block">How We Design</span>
                </span>
                <span className="block overflow-hidden">
                  <span className="text-line block italic text-burnished font-light">Experiences.</span>
                </span>
              </h2>
              <p className="text-text-secondary/70 text-lg md:text-xl leading-relaxed font-sans font-light max-w-xl">
                A refined system built on clarity, creativity, and precision — ensuring every detail is intentional.
              </p>
              <span className="block text-[9px] uppercase tracking-[0.3em] text-text-secondary/30 mt-8 font-mono">
                We accept a limited number of projects each season to ensure uncompromising focus.
              </span>
            </div>

            <div className="process-steps-container relative lg:ml-40">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-linen/60" aria-hidden="true" />

              <div className="flex flex-col">
                {[
                  { id: '01', title: 'Discovery', desc: 'We begin by understanding your vision, preferences, and priorities — building a foundation rooted in clarity.' },
                  { id: '02', title: 'Concept & Design', desc: 'Crafting a tailored experience with mood, aesthetics, and flow that resonates with your personal narrative.' },
                  { id: '03', title: 'Planning & Coordination', desc: 'Managing vendors, logistics, and timelines with precision, ensuring every moving part is perfectly aligned.' },
                  { id: '04', title: 'Execution', desc: 'Delivering a seamless, elegant, and stress-free experience, allowing you to be a guest at your own celebration.' },
                ].map((step) => (
                  <div key={step.id} className="process-step group relative pl-12 md:pl-24 py-12 md:py-16 last:pb-0">
                    <div className="absolute left-[-4.5px] top-[54px] md:top-[74px] w-[9px] h-[9px] rounded-full bg-linen border-2 border-white transition-all duration-500 group-hover:bg-burnished group-hover:scale-125" aria-hidden="true" />
                    <div className="flex flex-col space-y-6 max-w-xl transition-all duration-500 group-hover:translate-x-3">
                      <span className="text-[10px] font-mono tracking-[0.4em] text-burnished/50 uppercase transition-colors group-hover:text-burnished">{step.id}</span>
                      <h3 className="text-2xl md:text-4xl font-serif text-text-primary transition-colors group-hover:text-burnished">{step.title}</h3>
                      <p className="text-text-secondary/70 text-base md:text-lg leading-relaxed font-sans font-light transition-colors group-hover:text-text-primary">{step.desc}</p>
                      <div className="w-16 h-px bg-linen/40 transition-all duration-700 group-hover:w-32 group-hover:bg-burnished/30" aria-hidden="true" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Final CTA Section */}
        <section id="cta" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden border-t border-white/5" data-bg="var(--color-heritage)">
          <div className="absolute inset-0 z-0">
             <Image 
              src="/hero10.jpg" 
              alt="Celebration moment" 
              fill 
              className="cta-bg-image object-cover scale-105 transition-transform duration-[1200ms] will-change-transform" 
              sizes="100vw"
             />
             <div className="absolute inset-0 bg-black/40 z-10" />
             <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-20" />
             <div className="absolute inset-0 opacity-10 z-30" style={{ backgroundColor: 'rgba(180,140,90,0.04)' }} aria-hidden="true" />
          </div>

          <BackgroundFlourish type="floral" className="bottom-[-10%] left-[-5%] w-64 h-64 text-white/5 rotate-45 z-30" />
          <div className="absolute inset-0 z-30 backdrop-blur-[1px] pointer-events-none" aria-hidden="true" />

          <div className="container max-w-7xl relative z-40 text-center flex flex-col items-center">
            <div className="cta-content-reveal max-w-3xl w-full flex flex-col items-center space-y-16">
              
              <div className="w-20 h-px bg-burnished/40 mb-2 transition-all duration-1000 hover:w-40" aria-hidden="true" />

              <div className="space-y-8">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.5em] block">LET’S BEGIN</span>
                <h2 className="text-5xl md:text-8xl font-serif text-white leading-[0.95] tracking-tight overflow-hidden">
                  <span className="block overflow-hidden pb-1">
                    <span className="text-line block">Plan Your</span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="text-line block bg-gradient-to-br from-[#C6A76E] via-[#E8D3A3] to-[#C6A76E] bg-clip-text text-transparent italic font-light pb-4">Day.</span>
                  </span>
                </h2>
                <p className="text-white/70 max-w-xl mx-auto leading-relaxed text-lg md:text-xl font-sans font-light drop-shadow-md">
                  Begin your journey with a team that transforms vision into unforgettable experiences.
                </p>
                <span className="block text-[10px] tracking-[0.2em] text-white/30 uppercase font-mono">
                  Trusted by leading families & brands globally.
                </span>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4 w-full">
                <Magnetic strength={0.08}>
                  <Link href="/contact" className="w-full md:w-auto" aria-label="Book a consultation">
                    <Button 
                      className="w-full md:w-auto h-16 px-12 text-[11px] bg-heritage hover:bg-heritage/80 text-white rounded-full font-bold shadow-2xl hover:-translate-y-1 transition-all duration-300 border-0 uppercase tracking-[0.2em]"
                    >
                      Book Consultation
                    </Button>
                  </Link>
                </Magnetic>

                <Magnetic strength={0.08}>
                  <Link href="/gallery" className="w-full md:w-auto" aria-label="View our work">
                    <Button 
                      variant="outline"
                      className="w-full md:w-auto h-16 px-12 text-[11px] !border-white/40 !text-white hover:bg-white/10 hover:!text-white rounded-full font-bold hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-[0.2em]"
                    >
                      View Our Work
                    </Button>
                  </Link>
                </Magnetic>
              </div>

              <div className="pt-12">
                <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em] block">
                  Based in Ahmedabad. Serving Globally.
                </span>
                <div className="mt-6 flex items-center justify-center gap-6 text-white/10">
                  <div className="h-px w-10 bg-current" aria-hidden="true" />
                  <span className="text-[10px] font-serif italic tracking-widest">EST. 2017</span>
                  <div className="h-px w-10 bg-current" aria-hidden="true" />
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
