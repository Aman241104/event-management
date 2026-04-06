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
  }, { scope: containerRef });

  return (
    <main ref={mainRef} className="min-h-screen bg-canvas selection:bg-heritage selection:text-canvas relative overflow-hidden transition-colors duration-1000 pb-16">
      <div ref={containerRef} className="relative">
        <SVGSpine height="6000px" viewBox="0 0 20 6000" pathD="M 10 0 L 10 6000" className="opacity-[0.05]" />
        
        {/* Editorial Header */}
        <section id="header" className="container py-16 md:py-20 relative text-center space-y-8" data-bg="var(--color-canvas)">
          <div className="header-fade flex flex-col items-center gap-3">
            <span className="text-[9px] font-mono text-heritage/50 uppercase tracking-[0.5em] small-caps">01 / STORY</span>
            <Badge variant="solid" dot className="px-6 py-2 bg-heritage/5 text-heritage-dark uppercase tracking-widest font-bold border border-heritage/10 backdrop-blur-sm">Who We Are</Badge>
          </div>
          <TextReveal as="h1" text="About Zing Bliss." className="text-5xl md:text-[8rem] lg:text-[9rem] font-serif tracking-tighter text-text-primary leading-[0.9] font-bold" />
          <p className="header-fade text-lg md:text-xl text-text-secondary font-sans font-light max-w-3xl mx-auto leading-relaxed pt-4">
            We are a team of event planners dedicated to making your special moments beautiful and easy to enjoy.
          </p>
        </section>

        <SectionDivider />

        {/* Press Marquee */}
        <section className="py-8 border-y border-linen/50 bg-heritage-soft/20" data-bg="var(--color-heritage-soft)">
          <InfiniteMarquee items={["Vogue", "Bazaar", "The Knot", "Brides", "Luxury Daily", "Elite Traveler"]} speed={35} />
        </section>

        <SectionDivider />
        <FloatingMetric label="Our Focus" value="Real Moments" className="top-[140vh] left-[15%]" />

        {/* Philosophy Section */}
        <section id="philosophy" className="container py-16 md:py-20" data-bg="var(--color-canvas)">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
            <div className="lg:col-span-7 fade-up relative group">
              <div className="relative frame-arch-luxury h-[50vh] md:h-[70vh] w-full shadow-2xl z-10">
                <div className="image-container">
                  <Image src="/hero-9.jpg" alt="Our Work" fill className="object-cover" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-10 fade-up">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-[9px] font-mono text-heritage/50 uppercase tracking-[0.5em] small-caps">02 / WHY US</span>
                  <Badge variant="outline" className="border-heritage/30 text-heritage uppercase tracking-widest font-bold">Our Style</Badge>
                </div>
                <TextReveal text="Simply Beautiful." className="text-5xl md:text-7xl font-serif text-text-primary font-bold leading-[0.95] tracking-tighter" />
              </div>
              <div className="space-y-6 text-lg text-text-secondary font-sans font-light leading-relaxed">
                <p>We plan, design, and run events with care. We want to make your dreams come true without any stress.</p>
                <p>From small parties to big weddings, we make sure every detail is just right for you and your guests.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { title: 'Creativity', icon: <Sparkles size={20} /> },
                  { title: 'Care', icon: <Target size={20} /> },
                  { title: 'Trust', icon: <ShieldCheck size={20} /> },
                  { title: 'Energy', icon: <Zap size={20} /> },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-3 p-6 border border-linen bg-surface/30 hover:border-heritage/20 transition-colors group">
                    <div className="text-heritage/80 group-hover:text-heritage transition-all">{item.icon}</div>
                    <span className="font-sans font-bold uppercase tracking-[0.3em] text-[9px] text-text-primary small-caps">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionDivider className="bg-heritage-soft" />

        {/* Vision & Mission */}
        <section id="vision" className="py-16 md:py-20 bg-heritage-soft/30 border-y border-linen/30 relative overflow-hidden" data-bg="var(--color-heritage-soft)">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-6 fade-up">
                <div className="w-12 h-12 rounded-full bg-heritage/5 flex items-center justify-center text-heritage">
                  <Target size={24} />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-text-primary font-bold">Our <span className="text-heritage italic font-light">Goal.</span></h3>
                <p className="text-text-secondary font-sans font-light leading-relaxed text-xl italic border-l-2 border-heritage/20 pl-6">
                  To be the best at planning events by being creative, reliable, and honest.
                </p>
              </div>
              <div className="space-y-6 fade-up">
                <div className="w-12 h-12 rounded-full bg-heritage/5 flex items-center justify-center text-heritage">
                  <Compass size={24} />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-text-primary font-bold">Our <span className="text-heritage italic font-light">Mission.</span></h3>
                <p className="text-text-secondary font-sans font-light leading-relaxed text-xl italic border-l-2 border-heritage/20 pl-6">
                  To create amazing experiences that you and your guests will never forget.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Final CTA */}
        <section id="cta" className="py-16 md:py-20 container text-center space-y-12" data-bg="var(--color-canvas)">
          <div className="fade-up flex flex-col items-center gap-4">
            <span className="text-[9px] font-mono text-heritage/50 uppercase tracking-[0.5em] small-caps">03 / CONNECT</span>
            <h2 className="text-6xl md:text-9xl font-serif text-text-primary font-bold tracking-tighter leading-[0.85]">
              Plan Your <br/><span className="text-heritage italic font-light">Day.</span>
            </h2>
          </div>
          <div className="pt-4 flex flex-col items-center gap-8 fade-up">
            <Magnetic strength={0.2}>
              <Link href="/contact">
                <Button size="lg" className="h-16 px-16 text-[10px] btn-prestige shadow-2xl transition-transform hover:scale-105" rightIcon={<ArrowRight size={20} />}>
                  Book Now
                </Button>
              </Link>
            </Magnetic>
            <div className="flex flex-col items-center gap-2">
              <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-[9px] font-sans uppercase tracking-[0.5em] text-heritage font-bold border-b border-heritage/20 pb-1 hover:text-text-primary transition-all small-caps">Message Us</a>
              <p className="text-[9px] font-mono text-text-secondary/40 uppercase tracking-[0.2em] small-caps">Bespoke Planning — For You</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
