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
    gsap.from('.header-fade', { y: 30, opacity: 0, duration: 1.2, stagger: 0.1, ease: 'power2.out' });
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
        <section id="hero" className="relative h-[80vh] flex items-center overflow-hidden" data-bg="var(--color-canvas)">
          <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90 z-10 pointer-events-none" />
          
          <div className="absolute inset-0 z-0">
            <Image 
              src="/hero-9.jpg" 
              alt="About Zing Bliss" 
              fill 
              className="object-cover scale-110 animate-[ken-burns_40s_ease-in-out_infinite_alternate]" 
              priority 
              sizes="100vw" 
            />
          </div>

          <div className="container relative z-20 text-center flex flex-col items-center">
            <div className="header-fade flex flex-col items-center gap-4 mb-8">
              <span className="text-[10px] font-mono text-white/80 uppercase tracking-[0.8em] small-caps">01 / OUR STORY</span>
              <div className="h-12 w-[1px] bg-burnished/60" />
            </div>
            
            <h1 className="header-fade text-5xl md:text-[7rem] lg:text-[8.5rem] font-serif font-medium tracking-tighter text-white leading-[0.9] drop-shadow-2xl max-w-5xl">
              About <span className="text-burnished italic font-light">Zing Bliss.</span>
            </h1>

            <p className="header-fade text-lg md:text-2xl text-white/90 max-w-2xl leading-relaxed font-sans font-light mt-10 drop-shadow-lg">
              We are a team of event planners dedicated to making your special moments beautiful and easy to enjoy.
            </p>
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
        <section id="philosophy" className="container py-32" data-bg="var(--color-canvas)">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
            <div className="lg:col-span-7 fade-up relative group">
              <div className="relative overflow-hidden rounded-2xl h-[50vh] md:h-[75vh] w-full shadow-2xl z-10">
                <div className="image-container">
                  <Image src="/hero-9.jpg" alt="Our Work" fill className="object-cover transition-transform duration-[10s] group-hover:scale-110" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-12 fade-up pt-4">
              <div className="space-y-6">
                <TextReveal text="About Us" className="text-5xl md:text-8xl font-serif text-text-primary font-bold leading-[0.9] tracking-tighter" />
              </div>
              <div className="space-y-8 text-lg md:text-xl text-text-secondary font-sans font-light leading-relaxed">
                <p>We plan, design, and run events with care. We want to make your dreams come true without any stress.</p>
                <p>From small parties to big weddings, we make sure every detail is just right for you and your guests.</p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-6">
                {[
                  { title: 'Creativity', icon: <Sparkles size={24} /> },
                  { title: 'Care', icon: <Target size={24} /> },
                  { title: 'Trust', icon: <ShieldCheck size={24} /> },
                  { title: 'Energy', icon: <Zap size={24} /> },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-4 p-8 rounded-2xl border border-linen bg-white shadow-sm hover:border-heritage/20 hover:shadow-xl transition-all duration-700 group">
                    <div className="text-heritage/80 group-hover:text-heritage transition-all transform group-hover:scale-110 duration-500">{item.icon}</div>
                    <span className="font-sans font-bold uppercase tracking-[0.3em] text-[10px] text-text-primary small-caps">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionDivider className="bg-heritage-soft" />

        {/* Vision & Mission */}
        <section id="vision" className="py-32 relative overflow-hidden border-y border-white/10" data-bg="var(--color-heritage)">
          <div className="absolute inset-0 z-0">
            <Image src="/hero-8.jpg" alt="Mission Background" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/70 z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />
          </div>

          <div className="container relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-8 fade-up p-12 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
                <div className="w-16 h-16 rounded-2xl bg-burnished/20 flex items-center justify-center text-burnished">
                  <Target size={32} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl md:text-5xl font-serif text-white font-bold">Our <span className="text-burnished italic font-light">Goal.</span></h3>
                  <p className="text-white/80 font-serif font-light leading-relaxed text-xl md:text-2xl italic border-l-4 border-burnished/30 pl-8">
                    To be the best at planning events by being creative, reliable, and honest.
                  </p>
                </div>
              </div>
              <div className="space-y-8 fade-up p-12 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
                <div className="w-16 h-16 rounded-2xl bg-burnished/20 flex items-center justify-center text-burnished">
                  <Compass size={32} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl md:text-5xl font-serif text-white font-bold">Our <span className="text-burnished italic font-light">Mission.</span></h3>
                  <p className="text-white/80 font-serif font-light leading-relaxed text-xl md:text-2xl italic border-l-4 border-burnished/30 pl-8">
                    To create amazing experiences that you and your guests will never forget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Final CTA */}
        <section id="cta" className="relative py-32 bg-heritage overflow-hidden" data-bg="var(--color-heritage)">
          <div className="absolute inset-0 z-0 opacity-10">
             <Image src="/hero10.jpg" alt="Background" fill className="object-cover" />
          </div>
          
          <div className="container relative z-10 text-center space-y-12">
            <div className="space-y-6">
              <span className="text-[10px] font-mono text-white/60 uppercase tracking-[0.5em] small-caps">03 / CONNECT</span>
              <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-serif font-medium tracking-tighter text-white leading-[0.9]">
                Plan Your <br/><span className="italic font-light text-burnished">Day.</span>
              </h2>
            </div>

            <div className="flex flex-col items-center gap-10 fade-up">
              <Magnetic strength={0.2}>
                <Link href="/contact">
                  <Button size="lg" className="h-20 px-20 text-[11px] bg-white text-heritage hover:bg-linen shadow-2xl transition-all hover:scale-105" rightIcon={<ArrowRight size={24} />}>
                    Book Consultation
                  </Button>
                </Link>
              </Magnetic>
              <div className="flex flex-col items-center gap-4">
                <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-[11px] font-sans uppercase tracking-[0.5em] text-white/80 font-bold border-b border-white/20 pb-2 hover:text-white transition-all small-caps">Message Us</a>
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] small-caps">Bespoke Planning — For You</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
