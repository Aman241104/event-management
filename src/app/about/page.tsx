'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { Target, Compass, Sparkles, ShieldCheck, Zap, CheckCircle2, Star, Award, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/atoms/Badge';
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

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Initial reveal
    gsap.from('.header-fade', {
      y: 30,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: 'power2.out',
    });

    // Scroll reveal
    gsap.utils.toArray<HTMLElement>('.fade-up').forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 92%',
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });
    });

    // Background color shifts
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
    <main ref={mainRef} className="min-h-screen bg-canvas selection:bg-heritage selection:text-canvas relative overflow-hidden transition-colors duration-1000">
      <div ref={containerRef} className="relative">
        <SVGSpine height="100%" viewBox="0 0 20 100" pathD="M 10 0 L 10 100" className="opacity-10" />
        <BackgroundFlourish type="floral" className="top-[5%] left-0 w-96 h-96" opacity={0.02} />
        <BackgroundFlourish type="geometric" className="top-[30%] right-[5%] w-64 h-64" opacity={0.02} />
        <BackgroundFlourish type="architectural" className="top-[60%] left-[2%] w-[30rem] h-[30rem]" opacity={0.03} />
        
        {/* Editorial Header */}
        <section id="header" className="container py-48 md:py-64 relative text-center space-y-12" data-bg="var(--color-canvas)">
          <div className="header-fade flex flex-col items-center gap-6">
            <span className="text-[10px] font-mono text-heritage/40 uppercase tracking-[0.5em]">01 / STORY</span>
            <Badge variant="solid" dot className="px-8 py-3 bg-heritage/5 text-heritage-dark uppercase tracking-widest font-bold border border-heritage/10 backdrop-blur-sm">The Agency Narrative</Badge>
          </div>
          <TextReveal 
            as="h1" 
            text="About Zing Bliss Events." 
            className="text-6xl md:text-[10rem] font-serif tracking-tighter text-text-primary leading-[0.85] font-bold" 
          />
          <p className="header-fade text-xl md:text-3xl text-text-secondary font-sans font-light max-w-4xl mx-auto leading-relaxed pt-8 drop-shadow-sm">
            Dedicated to turning life&apos;s special moments into unforgettable experiences through creativity, precision, and professionalism.
          </p>
        </section>

        {/* Press Marquee */}
        <section className="py-24 border-y border-linen/50 bg-surface/30" data-bg="var(--color-surface)">
          <InfiniteMarquee 
            items={["Vogue Weddings", "Harper's Bazaar", "The Knot Luxe", "Brides Magazine", "Luxury Daily", "Elite Traveler"]} 
            speed={35}
          />
        </section>

        {/* Philosophy Section - Asymmetrical */}
        <section id="philosophy" className="container py-48 md:py-64" data-bg="var(--color-canvas)">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
            <div className="lg:col-span-7 fade-up relative group">
              <div className="absolute -inset-20 bg-accent-rose/5 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative overflow-hidden arch-mask h-[70vh] md:h-[90vh] w-full shadow-2xl border border-linen z-10 transition-transform duration-1000 group-hover:scale-[1.02]">
                <ParallaxImage 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000" 
                  alt="Behind the Scenes Process" 
                  speed={0.2}
                  aspectRatio="aspect-auto"
                  containerClassName="h-full w-full"
                  className="transition-all duration-[2s]"
                />
              </div>
            </div>
            <div className="lg:col-span-5 space-y-16 fade-up">
              <div className="space-y-10">
                <div className="flex items-center gap-6">
                  <span className="text-[10px] font-mono text-heritage/40 uppercase tracking-[0.5em]">02 / PHILOSOPHY</span>
                  <Badge variant="outline" className="border-heritage/30 text-heritage uppercase tracking-widest font-bold">Our Perspective</Badge>
                </div>
                <TextReveal 
                  text="Architects of Magic." 
                  className="text-6xl md:text-8xl font-serif text-text-primary font-bold leading-[0.9] tracking-tighter" 
                />
              </div>
              <div className="space-y-10 text-xl text-text-secondary font-sans font-light leading-relaxed">
                <p>
                  Zing Bliss Events specializes in planning, designing, and executing events with creativity, precision, and professionalism. The team works closely with clients to understand their vision and transform it into a well-curated event with exceptional attention to detail.
                </p>
                <p>
                  From intimate celebrations to large-scale events, Zing Bliss ensures every element is thoughtfully managed to create magical moments and lasting memories.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-12">
                {[
                  { title: 'Creativity', icon: <Sparkles size={24} /> },
                  { title: 'Precision', icon: <Target size={24} /> },
                  { title: 'Reliability', icon: <ShieldCheck size={24} /> },
                  { title: 'Ethics', icon: <Zap size={24} /> },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-6 p-10 border border-linen bg-surface/50 hover:border-heritage/30 transition-colors group">
                    <div className="text-heritage group-hover:scale-110 transition-transform">{item.icon}</div>
                    <span className="font-sans font-bold uppercase tracking-[0.3em] text-[10px] text-text-primary">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission - Symmetrical but Elevated */}
        <section id="vision" className="py-48 md:py-64 bg-surface border-y border-linen dot-pattern relative overflow-hidden" data-bg="var(--color-surface)">
          <div className="absolute top-0 left-0 w-full h-full bg-heritage/5 opacity-30 pointer-events-none" />
          <div className="container relative z-10">
            <div className="flex flex-col items-center gap-6 mb-24 fade-up">
              <span className="text-[10px] font-mono text-heritage/40 uppercase tracking-[0.5em]">03 / VISION</span>
              <div className="h-px w-24 bg-linen" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-32 max-w-6xl mx-auto relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-linen/50 hidden md:block" />

              <div className="space-y-12 fade-up md:pr-16">
                <div className="w-20 h-20 rounded-full bg-heritage/10 flex items-center justify-center text-heritage shadow-inner">
                  <Target size={36} />
                </div>
                <h3 className="text-5xl md:text-6xl font-serif text-text-primary font-bold leading-tight">Our <span className="text-heritage italic font-light">Vision.</span></h3>
                <p className="text-text-secondary font-sans font-light leading-relaxed text-2xl italic border-l-4 border-heritage/30 pl-10">
                  To achieve excellence in event management through reliability, creativity, and strong business ethics.
                </p>
              </div>

              <div className="space-y-12 fade-up md:pl-16">
                <div className="w-20 h-20 rounded-full bg-heritage/10 flex items-center justify-center text-heritage shadow-inner">
                  <Compass size={36} />
                </div>
                <h3 className="text-5xl md:text-6xl font-serif text-text-primary font-bold leading-tight">Our <span className="text-heritage italic font-light">Mission.</span></h3>
                <p className="text-text-secondary font-sans font-light leading-relaxed text-2xl italic border-l-4 border-heritage/30 pl-10">
                  To inspire, create, and deliver remarkable experiences that leave a lasting impression on every client and guest.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visionaries Section - Asymmetrical Grid */}
        <section id="visionaries" className="pt-64 pb-48 md:pt-80 md:pb-64 container space-y-32" data-bg="var(--color-canvas)">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 fade-up">
            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-mono text-heritage/40 uppercase tracking-[0.5em]">04 / ARCHITECTS</span>
                <Badge variant="outline" className="text-heritage border-heritage/30 uppercase tracking-widest font-bold">The Collective</Badge>
              </div>
              <TextReveal 
                text="Meet The Architects." 
                className="text-6xl md:text-[8rem] font-serif font-bold text-text-primary leading-[0.9] tracking-tighter" 
              />
            </div>
            <p className="text-lg text-text-secondary font-sans font-light max-w-sm mb-4 leading-relaxed">
              A curated team of visionaries dedicated to the art of bespoke celebration and meticulous production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-32 items-start">
            {[
              { name: "Aryan Sharma", role: "Creative Director", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200", col: "md:col-span-7", aspect: "aspect-[16/10] h-[400px] md:h-[600px]" },
              { name: "Sonia Kapoor", role: "Lead Strategist", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200", col: "md:col-span-5", aspect: "aspect-[4/5] h-[400px] md:h-[600px]" }
            ].map((v, i) => (
              <div key={i} className={`${v.col} fade-up space-y-10 group`}>
                <div className={`relative ${v.aspect} overflow-hidden arch-mask border border-linen group transition-transform duration-1000 group-hover:scale-[1.01] shadow-xl`}>
                  <div className="absolute -inset-10 bg-heritage/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <ParallaxImage 
                    src={v.img} 
                    alt={v.name} 
                    speed={0.1}
                    aspectRatio="aspect-auto"
                    containerClassName="h-full w-full"
                    className="transition-all duration-[3s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas/40 to-transparent opacity-60 z-10 pointer-events-none" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-4xl font-serif font-bold text-text-primary tracking-tight">{v.name}</h4>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-px bg-heritage/30" />
                    <p className="text-xs font-sans uppercase tracking-[0.4em] text-heritage font-bold">{v.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Metrics Section */}
        <section id="stats" className="py-32 bg-heritage relative overflow-hidden" data-bg="var(--color-heritage)">
          <div className="absolute inset-0 dot-pattern opacity-[0.05] invert" />
          <div className="container relative z-10">
            <div className="flex flex-col items-center gap-6 mb-24 fade-up">
              <span className="text-[10px] font-mono text-canvas/40 uppercase tracking-[0.5em]">05 / METRICS</span>
              <div className="h-px w-24 bg-canvas/20" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center fade-up">
              {[
                { num: '500+', label: 'Events Executed' },
                { num: '15+', label: 'Global Destinations' },
                { num: '50+', label: 'Industry Awards' },
                { num: '100%', label: 'Client Satisfaction' },
              ].map((stat, i) => (
                <div key={i} className="space-y-6">
                  <h4 className="text-5xl md:text-8xl font-serif font-bold text-canvas drop-shadow-lg">{stat.num}</h4>
                  <p className="text-[10px] md:text-xs font-sans font-bold uppercase tracking-[0.4em] text-canvas/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-choose-us" className="py-48 md:py-64 container space-y-32" data-bg="var(--color-canvas)">
          <div className="text-center space-y-10 max-w-4xl mx-auto fade-up">
            <div className="flex flex-col items-center gap-6 mb-4">
              <span className="text-[10px] font-mono text-heritage/40 uppercase tracking-[0.5em]">06 / ADVANTAGE</span>
              <Badge variant="outline" className="text-heritage-dark border-heritage/30 uppercase tracking-widest font-bold">The Zing Bliss Standard</Badge>
            </div>
            <TextReveal 
              text="Why We Are The Best Choice." 
              className="text-6xl md:text-[9rem] font-serif font-bold text-text-primary tracking-tighter leading-[0.85]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: 'Unmatched Expertise', desc: 'Years of professional experience in high-end wedding and event planning.', icon: <Award size={32} /> },
              { title: 'Detail Oriented', desc: 'We handle every nuance with absolute precision to ensure a stress-free day.', icon: <CheckCircle2 size={32} /> },
              { title: 'Value for Money', desc: 'Optimizing resources to deliver premium quality within your desired scale.', icon: <Star size={32} /> },
              { title: 'Transparent Dealings', desc: 'Clear communication and ethical business practices in every collaboration.', icon: <ShieldCheck size={32} /> },
            ].map((item, i) => (
              <div key={i} className="glass-card p-16 text-center space-y-8 hover:border-heritage transition-all group fade-up relative overflow-hidden">
                <div className="absolute -inset-10 bg-heritage/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative mx-auto w-20 h-20 rounded-full bg-heritage/5 flex items-center justify-center text-heritage group-hover:bg-heritage group-hover:text-canvas transition-all duration-500 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-serif font-bold text-text-primary relative z-10 tracking-tight">{item.title}</h3>
                <p className="text-base text-text-secondary font-sans font-light leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section id="cta" className="py-48 md:py-72 container text-center space-y-20" data-bg="var(--color-surface)">
          <div className="fade-up flex flex-col items-center gap-8">
            <span className="text-[10px] font-mono text-heritage/40 uppercase tracking-[0.5em]">07 / CONNECT</span>
            <h2 className="text-7xl md:text-[12rem] font-serif text-text-primary font-bold tracking-tighter leading-[0.8] drop-shadow-sm">
              Start Your <br/><span className="text-heritage italic font-light">Legacy.</span>
            </h2>
          </div>
          <div className="pt-12 flex flex-col items-center gap-16 fade-up">
            <Magnetic strength={0.2}>
              <Link href="/contact">
                <Button size="lg" magnetic className="h-28 px-24 text-2xl btn-prestige rounded-none font-bold shadow-2xl transition-transform hover:scale-105 active:scale-95" rightIcon={<ArrowRight size={32} />}>
                  Secure Your Date
                </Button>
              </Link>
            </Magnetic>
            <div className="flex flex-col items-center gap-6">
              <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-sm font-sans uppercase tracking-[0.5em] text-heritage font-bold border-b-2 border-heritage/20 pb-2 hover:text-text-primary hover:border-text-primary transition-all duration-500">Private Consultation</a>
              <p className="text-[10px] font-mono text-text-secondary/50 uppercase tracking-[0.2em]">Bespoke Planning — Global Execution</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
