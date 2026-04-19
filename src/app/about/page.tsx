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

    // 1. Hero Animations - Immediate & Reliable
    const heroTl = gsap.timeline();
    
    gsap.to(".hero-bg-wrapper", {
      scale: 1.08,
      x: 15,
      duration: 30,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });

    heroTl.fromTo(".hero-header-reveal", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: DEFAULT_EASE })
          .fromTo(".hero-header-line", { height: 0 }, { height: 40, duration: 1, ease: "power2.inOut" }, "-=0.8")
          .fromTo(".hero-title .text-line", { 
            y: 80,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1.2,
            ease: DEFAULT_EASE 
          }, "-=0.6")
          .fromTo(".hero-subtext", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: DEFAULT_EASE }, "-=0.8")
          .fromTo(".hero-signals", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.5")
          .fromTo(".hero-scroll-cue", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.6");

    gsap.to(".hero-scroll-line", {
      height: 60,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // 2. CONSISTENT SECTION REVEAL SYSTEM
    // Instead of multiple triggers, we animate per section
    const sectionSelectors = ['#philosophy', '#difference', '#values', '#process', '#cta'];
    
    sectionSelectors.forEach((selector) => {
      const section = containerRef.current?.querySelector(selector);
      if (!section) return;

      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          toggleActions: "play none none none" // Play once for stability
        }
      });

      // Animate the section itself if needed, or its primary components
      sectionTl.fromTo(section, { opacity: 0 }, { opacity: 1, duration: 1 });

      // Stagger all headlines (text-line)
      const lines = section.querySelectorAll(".text-line");
      if (lines.length) {
        sectionTl.fromTo(lines, 
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: DEFAULT_EASE },
          "-=0.5"
        );
      }

      // Stagger specific items based on section
      if (selector === '#philosophy') {
        sectionTl.fromTo(".philosophy-fade", { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 0.15, duration: 1 }, "-=0.5");
        sectionTl.fromTo(".philosophy-image-container", { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5 }, "-=1");
      }
      
      if (selector === '#difference') {
        sectionTl.fromTo(".difference-item", { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 1 }, "-=0.5");
        
        // Extra emphasis on the second part of the manifesto
        const goldLines = section.querySelectorAll(".text-line.text-burnished");
        if (goldLines.length) {
          gsap.fromTo(goldLines, 
            { opacity: 0, x: -20 }, 
            { 
              opacity: 1, 
              x: 0, 
              duration: 1.5, 
              delay: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 70%"
              }
            }
          );
        }
      }

      if (selector === '#values') {
        sectionTl.fromTo(".values-divider", { opacity: 0, scaleY: 0 }, { opacity: 1, scaleY: 1, duration: 1.5, ease: "power2.inOut" }, "-=0.5");
        sectionTl.fromTo(".values-left, .values-right", { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 0.2, duration: 1.2 }, "-=1");
      }

      if (selector === '#process') {
        sectionTl.fromTo(".process-step", { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15, duration: 1 }, "-=0.5");
        
        // Growth animation for the vertical line
        gsap.to(".process-connector-line", {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: "#process",
            start: "top 50%",
            end: "bottom 50%",
            scrub: true
          }
        });
      }

      if (selector === '#cta') {
        sectionTl.fromTo(".cta-content-reveal", { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.2 }, "-=0.5");
      }
    });

    // Handle Transition Moments separately
    gsap.utils.toArray<HTMLElement>('.scroll-reveal').forEach((el) => {
      gsap.fromTo(el, { opacity: 0, y: 20 }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 95%"
        }
      });
    });

    // Refresh everything
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1500);

  }, { scope: containerRef, dependencies: [mounted] });

  if (!mounted) return <div className="min-h-screen bg-canvas" />;

  return (
    <main ref={mainRef} className="min-h-screen bg-canvas selection:bg-burnished selection:text-canvas relative overflow-hidden transition-colors duration-1000 pb-16">
      <div ref={containerRef} className="relative">
        <SVGSpine height="6000px" viewBox="0 0 20 6000" pathD="M 10 0 L 10 6000" className="opacity-[0.05]" />
        
        {/* 1. Hero Section */}
        <section id="hero" className="relative min-h-[80vh] flex items-center justify-center lg:justify-start overflow-hidden" data-bg="var(--color-canvas)">
          <div className="absolute inset-0 bg-black/45 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-transparent to-black/60 z-10 pointer-events-none" />
          <div className="absolute inset-0 z-10 pointer-events-none" style={{ backgroundColor: 'rgba(180,140,90,0.02)' }} aria-hidden="true" />
          
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

          <div className="container max-w-7xl relative z-20 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="relative">
              <div className="absolute inset-0 blur-[80px] bg-black/30 -z-10" />
              <div className="relative z-10 flex flex-col items-center lg:items-start">
                <div className="hero-header-reveal flex flex-col items-center lg:items-start gap-4 mb-10">
                  <span className="text-[10px] font-mono text-white/50 uppercase tracking-[0.5em] small-caps">01 / OUR STORY</span>
                  <div className="hero-header-line w-[1px] lg:w-20 h-10 lg:h-[1px] bg-gradient-to-b lg:bg-gradient-to-r from-burnished/60 to-transparent" />
                </div>
                
                <h1 className="hero-title text-5xl md:text-8xl lg:text-[8.5rem] font-serif font-medium tracking-tight text-white leading-[0.9] drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)] max-w-5xl">
                  <span className="block overflow-hidden pb-2">
                    <span className="text-line block">About</span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="text-line block italic font-light bg-gradient-to-br from-[#C6A76E] via-[#E8D3A3] to-[#C6A76E] bg-clip-text text-transparent pb-4">
                      Zing Bliss.
                    </span>
                  </span>
                </h1>

                <div className="flex flex-col lg:flex-row lg:items-center gap-6 mt-8">
                  <p className="hero-subtext text-base md:text-lg text-white/70 max-w-[480px] leading-relaxed font-sans font-light drop-shadow-md">
                    We design experiences that feel effortless, refined, and deeply personal — where every detail is intentional.
                  </p>
                  
                  <div className="hidden lg:block w-px h-12 bg-white/20 mx-4" aria-hidden="true" />
                  
                  <div className="hero-signals flex flex-col items-center lg:items-start gap-2">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-mono font-bold">Since 2017</span>
                    <span className="text-[10px] tracking-[0.4em] uppercase text-burnished font-mono font-bold">150+ Curated Celebrations</span>
                  </div>
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
        <section id="philosophy" className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white to-[#f8f6f2]" data-bg="var(--color-canvas)">
          <div className="container max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-4 order-1 lg:order-2 philosophy-text-block space-y-8 relative">
                {/* Vertical Anchor Line */}
                <div className="absolute -left-8 top-0 bottom-0 w-px bg-burnished/10 hidden lg:block" aria-hidden="true" />

                <div className="space-y-6">
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-text-primary font-medium leading-[1.05] tracking-tight overflow-hidden">
                    <span className="block overflow-hidden">
                      <span className="text-line block">The Art Behind</span>
                    </span>
                    <span className="block overflow-hidden">
                      <span className="text-line block text-burnished italic font-light">Zing Bliss.</span>
                    </span>
                  </h2>
                </div>

                <div className="space-y-6 text-base md:text-lg text-text-secondary/80 font-sans font-light leading-relaxed">
                  <p className="philosophy-fade">
                    We design experiences that feel effortless yet unforgettable — where every detail is intentional, and every moment carries meaning.
                  </p>
                  <blockquote className="philosophy-fade italic text-text-secondary/60 text-base border-l-2 border-burnished/20 pl-4">
                    "An experience that felt effortless from start to finish."
                  </blockquote>
                </div>

                <div className="space-y-3 pt-4 philosophy-fade">
                  {[
                    { id: '01', title: 'Bespoke Approach' },
                    { id: '02', title: 'Global Network' },
                    { id: '03', title: 'Obsessed Execution' },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center gap-6 border-t border-linen pt-4 group">
                      <span className="text-[10px] font-mono text-burnished/60 group-hover:text-burnished transition-colors">{item.id}</span>
                      <span className="text-[11px] uppercase tracking-[0.3em] text-text-primary font-bold transition-all duration-300 group-hover:tracking-[0.4em] group-hover:text-burnished">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-8 order-2 lg:order-1 philosophy-image-container relative group transition-all duration-1000 will-change-transform">
                <div className="relative overflow-hidden rounded-sm h-[50vh] md:h-[75vh] w-full shadow-2xl z-10">
                  <Image
                    src="/hero-9.jpg"
                    alt="Elegant indoor event space"
                    fill
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 65vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700 pointer-events-none" />
                  <div className="absolute top-8 left-8 text-[10px] uppercase tracking-[0.4em] bg-white/95 backdrop-blur px-5 py-3 font-mono font-bold small-caps shadow-sm">
                    Est. 2017
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TransitionMoment text="Defined by precision. Driven by passion." />

        <SectionDivider />

        {/* 3. Signature Difference Section */}
        <section id="difference" className="relative py-24 md:py-40 overflow-hidden bg-white" data-bg="var(--color-canvas)">
          <div className="absolute inset-0 pointer-events-none" 
               style={{ background: 'radial-gradient(circle at top left, rgba(180,140,90,0.06), transparent 70%)' }} aria-hidden="true" />
          
          <div className="container max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
              <div className="lg:col-span-7 space-y-12">
                <div className="space-y-8">
                  <span className="text-[10px] tracking-[0.5em] uppercase text-text-secondary/40 block font-mono">
                    OUR MANIFESTO
                  </span>
                  <h2 className="text-5xl md:text-8xl lg:text-[7.5rem] font-serif text-text-primary leading-[0.85] font-medium tracking-tighter">
                    <span className="block overflow-hidden">
                      <span className="text-line block">We don’t</span>
                    </span>
                    <span className="block overflow-hidden">
                      <span className="text-line block">plan events.</span>
                    </span>
                    <span className="block overflow-hidden mt-4">
                      <span className="text-line block italic text-burnished font-light lg:text-[8.5rem] drop-shadow-sm">We compose</span>
                    </span>
                    <span className="block overflow-hidden">
                      <span className="text-line block italic text-burnished font-light lg:text-[8.5rem] drop-shadow-sm">experiences.</span>
                    </span>
                  </h2>
                </div>

                <div className="flex items-center gap-8 pt-8">
                  <div className="w-20 h-px bg-burnished" />
                  <p className="text-text-secondary/80 text-xl md:text-2xl italic font-serif max-w-md">
                    Ahmedabad Based. Serving Globally. Orchestrating the Extraordinary.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-0 lg:mt-24">
                <div className="grid grid-cols-1 gap-0">
                  {[
                    { id: '01', title: 'Intentional Design', desc: 'Every element, from the texture of the linens to the tempo of the music, is chosen to evoke a specific emotion.' },
                    { id: '02', title: 'Precision Over Excess', desc: 'Luxury is found in the perfect execution of the essential, not in the accumulation of the unnecessary.' },
                    { id: '03', title: 'Experience Over Display', desc: 'We prioritize the sensory journey, ensuring the feeling of the event outlasts the visual spectacle.' },
                  ].map((item) => (
                    <div key={item.id} className="difference-item group border-t border-linen py-12 flex flex-col gap-6 transition-all duration-500 hover:pl-4">
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-mono text-burnished/60 group-hover:text-burnished transition-colors">{item.id}</span>
                        <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-text-primary transition-all duration-500 group-hover:text-burnished">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-text-secondary/70 text-base leading-relaxed font-sans font-light transition-colors duration-500 group-hover:text-text-primary">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                  <div className="border-t border-linen w-full" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <TransitionMoment text="The path from vision to reality" />

        <SectionDivider className="bg-heritage-soft/50" />

        {/* 4. Values & Principles Section */}
        <section id="values" className="relative py-24 md:py-40 overflow-hidden group/values" data-bg="var(--color-heritage)">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/hero-8.jpg" 
              alt="Intimate wedding reception" 
              fill 
              className="object-cover brightness-[0.4] transition-transform duration-[2000ms] group-hover/values:scale-105" 
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />
            <div className="absolute inset-0 opacity-10 z-10" style={{ backgroundColor: 'rgba(180,140,90,0.02)' }} aria-hidden="true" />
          </div>

          <div className="container max-w-7xl relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-16 md:gap-24 max-w-6xl mx-auto items-center text-white">
              <div className="values-left space-y-8 transition-all duration-700 group hover:brightness-125">
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 block font-mono group-hover:text-white/60 transition-colors">OUR APPROACH</span>
                  <h3 className="text-4xl md:text-6xl font-serif leading-tight text-white/90 group-hover:text-white transition-all duration-500 drop-shadow-2xl overflow-hidden">
                    <span className="block overflow-hidden pb-1">
                      <span className="text-line block">Elegance is never loud.</span>
                    </span>
                    <span className="block overflow-hidden">
                      <span className="text-line block italic text-burnished font-light group-hover:text-burnished-light transition-colors">It is felt.</span>
                    </span>
                  </h3>
                </div>
                <p className="text-white/60 group-hover:text-white/80 transition-colors font-sans font-light leading-relaxed max-w-md text-lg italic border-l border-white/20 pl-8 drop-shadow-lg">
                  "We believe the most powerful experiences are not the most extravagant, but the most intentional — where every detail exists for a reason."
                </p>
              </div>

              <div className="hidden md:block w-px h-72 bg-white/10 values-divider origin-center transition-all duration-1000 group-hover/values:h-80 group-hover/values:bg-white/30" aria-hidden="true" />

              <div className="values-right space-y-8 transition-all duration-700 group hover:brightness-125">
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 block font-mono group-hover:text-white/60 transition-colors">OUR STANDARD</span>
                  <h3 className="text-4xl md:text-6xl font-serif leading-tight text-white/90 group-hover:text-white transition-all duration-500 drop-shadow-2xl overflow-hidden">
                    <span className="block overflow-hidden pb-1">
                      <span className="text-line block">Precision is our language.</span>
                    </span>
                    <span className="block overflow-hidden">
                      <span className="text-line block italic text-burnished font-light group-hover:text-burnished-light transition-colors">Details are our signature.</span>
                    </span>
                  </h3>
                </div>
                <p className="text-white/60 group-hover:text-white/80 transition-colors font-sans font-light leading-relaxed max-w-md text-lg italic border-l border-white/20 pl-8 drop-shadow-lg">
                  "From concept to execution, we operate with clarity, structure, and a deep respect for detail — ensuring every moment unfolds seamlessly."
                </p>
              </div>
            </div>
          </div>
        </section>

        <TransitionMoment text="Crafting the unforgettable" />

        <SectionDivider className="bg-heritage-soft/50" />

        {/* 5. Our Process Section */}
        <section id="process" className="relative py-24 md:py-40 overflow-hidden bg-gradient-to-b from-white to-[#f5f2ec]" data-bg="var(--color-canvas)">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <span className="text-[18vw] font-serif font-bold text-black/[0.01] uppercase tracking-tighter leading-none select-none">
              Orchestrate
            </span>
          </div>

          <div className="container max-w-7xl relative z-10">
            <div className="process-header max-w-2xl mb-24 fade-up">
              <span className="text-[10px] tracking-[0.5em] uppercase text-text-secondary/50 block font-mono mb-6">
                THE ARCHITECTURE OF EXPERIENCE
              </span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-text-primary leading-[1] font-medium mb-8">
                How we design <br />
                <span className="italic text-burnished font-light text-glow">the unforgettable.</span>
              </h2>
              <p className="text-text-secondary/70 text-lg md:text-xl leading-relaxed font-sans font-light max-w-xl">
                A refined system built on clarity, creativity, and precision — ensuring every detail is intentional.
              </p>
            </div>

            <div className="process-steps-container relative lg:ml-20">
              {/* Connector Line */}
              <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-burnished/10 hidden lg:block" aria-hidden="true">
                <div className="process-connector-line absolute top-0 left-0 w-full h-0 bg-burnished/40 transition-all duration-1000" />
              </div>

              <div className="space-y-24 md:space-y-40">
                {[
                  { 
                    id: '01', 
                    title: 'Discovery & Vision', 
                    desc: 'We begin with a deep exploration of your aesthetic desires and logistical needs, distilling them into a singular, cohesive creative direction.',
                    align: 'left'
                  },
                  { 
                    id: '02', 
                    title: 'Strategic Architecture', 
                    desc: 'We map out every touchpoint of the guest journey, balancing bold creative concepts with meticulous structural planning.',
                    align: 'right'
                  },
                  { 
                    id: '03', 
                    title: 'Bespoke Curation', 
                    desc: 'From elite vendors to custom-crafted decor, we curate every element to align perfectly with your unique narrative.',
                    align: 'left'
                  },
                  { 
                    id: '04', 
                    title: 'Quiet Execution', 
                    desc: 'Our team orchestrates the entire production with surgical precision, allowing you to be a guest at your own celebration.',
                    align: 'right'
                  },
                ].map((step, i) => (
                  <div 
                    key={step.id} 
                    className={cn(
                      "process-step relative flex flex-col lg:flex-row items-center gap-12 group",
                      step.align === 'right' ? "lg:flex-row-reverse" : ""
                    )}
                  >
                    {/* Number Overlay */}
                    <div className={cn(
                      "absolute -top-16 lg:top-1/2 lg:-translate-y-1/2 z-0",
                      step.align === 'left' ? "lg:-left-20" : "lg:-right-20"
                    )}>
                      <span className="text-[12rem] lg:text-[18rem] font-serif font-bold text-burnished/[0.04] leading-none select-none transition-all duration-700 group-hover:text-burnished/[0.08]">
                        {step.id}
                      </span>
                    </div>

                    <div className="lg:w-1/2 relative z-10">
                      <div className={cn(
                        "space-y-6 max-w-md",
                        step.align === 'right' ? "lg:ml-auto" : ""
                      )}>
                        <h3 className="text-3xl md:text-4xl font-serif text-text-primary italic leading-tight group-hover:text-heritage transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-text-secondary/80 text-base md:text-lg leading-relaxed font-sans font-light">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                    
                    {/* Node on Line */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-burnished bg-white z-20 transition-all duration-500 group-hover:scale-150 group-hover:bg-burnished" aria-hidden="true" />
                    
                    <div className="lg:w-1/2" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Final CTA Section */}
        <section id="cta" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-t border-white/5" data-bg="var(--color-heritage)">
          <div className="absolute inset-0 z-0">
             <Image 
              src="/hero10.jpg" 
              alt="Celebration moment" 
              fill 
              className="cta-bg-image object-cover scale-105 transition-transform duration-[1200ms] will-change-transform brightness-[0.3]" 
              sizes="100vw"
             />
             <div className="absolute inset-0 bg-black/50 z-10" />
             <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90 z-20" />
             <div className="absolute inset-0 opacity-10 z-30" style={{ backgroundColor: 'rgba(180,140,90,0.02)' }} aria-hidden="true" />
          </div>

          <BackgroundFlourish type="floral" className="bottom-[-10%] left-[-5%] w-64 h-64 text-white/5 rotate-45 z-30" />
          
          <div className="container max-w-7xl relative z-40 text-center flex flex-col items-center">
            <div className="cta-content-reveal max-w-4xl w-full flex flex-col items-center space-y-12">
              
              <div className="space-y-6">
                <span className="text-[11px] font-mono text-burnished uppercase tracking-[0.6em] block font-bold">LIMITED AVAILABILITY</span>
                <h2 className="text-5xl md:text-8xl lg:text-[9rem] font-serif text-white leading-[0.9] tracking-tighter">
                  <span className="block overflow-hidden pb-1">
                    <span className="text-line block">Compose Your</span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="text-line block italic font-light text-burnished pb-4 drop-shadow-lg">Legacy.</span>
                  </span>
                </h2>
              </div>

              <div className="space-y-8 flex flex-col items-center">
                <p className="text-white/70 text-lg md:text-2xl font-serif italic max-w-2xl leading-relaxed">
                  "A limited number of events. Each crafted with intention. Now booking for 2026 curated celebrations."
                </p>
                
                <div className="pt-8">
                  <Magnetic strength={0.2}>
                    <Link href="/contact">
                      <Button 
                        size="lg" 
                        className="h-24 px-16 text-[11px] bg-white text-heritage hover:bg-ivory transition-all duration-500 shadow-[0_25px_60px_rgba(0,0,0,0.5)] hover:scale-110 active:scale-95 rounded-full uppercase tracking-[0.4em] font-bold border-0 group relative overflow-hidden animate-luxury-pulse"
                      >
                        <span className="relative z-10">Start the Dialogue</span>
                        <div className="absolute inset-0 bg-burnished opacity-0 group-hover:opacity-10 transition-opacity" />
                      </Button>
                    </Link>
                  </Magnetic>
                </div>

                <div className="flex items-center gap-4 text-white/30 pt-4">
                  <div className="w-12 h-px bg-current" />
                  <span className="text-[9px] uppercase tracking-[0.3em] font-mono font-bold">Ahmedabad & Beyond</span>
                  <div className="w-12 h-px bg-current" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8 w-full">
                <Magnetic strength={0.08}>
                  <Link href="/gallery" className="w-full md:w-auto">
                    <Button 
                      variant="outline"
                      className="w-full md:w-auto h-16 px-12 text-[11px] !border-white/20 !text-white hover:bg-white/10 hover:!text-white rounded-full font-bold hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-[0.2em]"
                    >
                      View the Archive
                    </Button>
                  </Link>
                </Magnetic>
              </div>

              <div className="pt-16 opacity-30">
                <div className="flex items-center justify-center gap-6">
                  <div className="h-px w-10 bg-white" aria-hidden="true" />
                  <span className="text-[10px] font-serif italic tracking-widest text-white">EST. 2017</span>
                  <div className="h-px w-10 bg-white" aria-hidden="true" />
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
