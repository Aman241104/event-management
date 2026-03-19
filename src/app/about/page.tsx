'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Target, Compass, Sparkles, ShieldCheck, Zap, CheckCircle2, Star, Award } from 'lucide-react';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { Magnetic } from '@/components/atoms/Magnetic';
import { TextReveal } from '@/components/atoms/TextReveal';
import { InfiniteMarquee } from '@/components/atoms/InfiniteMarquee';
import { ParallaxImage } from '@/components/atoms/ParallaxImage';
import { SVGSpine } from '@/components/atoms/SVGSpine';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.header-fade', {
      y: 30,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: 'power2.out',
    });

    gsap.utils.toArray<HTMLElement>('.fade-up').forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 92%',
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-bg-main pt-32 pb-24 selection:bg-secondary selection:text-bg-main relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-accent-rose/5 to-transparent pointer-events-none" />
      <SVGSpine height="3000px" viewBox="0 0 20 3000" pathD="M 10 0 L 10 3000" />
      
      {/* Editorial Header */}
      <section id="header" className="container mx-auto px-6 py-24 md:py-32 relative text-center space-y-10">
        <div className="header-fade">
          <Badge variant="solid" dot className="px-6 py-2 bg-secondary/10 text-secondary">The Agency Story</Badge>
        </div>
        <TextReveal 
          as="h1" 
          text="About Zing Bliss Events." 
          className="text-6xl md:text-[9rem] font-serif tracking-tighter text-text-primary leading-[0.85] font-bold" 
        />
        <p className="header-fade text-xl md:text-2xl text-text-secondary font-sans font-light max-w-4xl mx-auto leading-relaxed pt-6">
          Dedicated to turning life&apos;s special moments into unforgettable experiences through creativity, precision, and professionalism.
        </p>
        </section>

        {/* Press Marquee */}
        <section className="py-12 md:py-24">
        <InfiniteMarquee 
          items={["Vogue Weddings", "Harper's Bazaar", "The Knot Luxe", "Brides Magazine", "Luxury Daily", "Elite Traveler"]} 
          speed={40}
        />
        </section>

        {/* Philosophy Section */}
        <section id="philosophy" className="container mx-auto px-6 space-y-32 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-7 fade-up relative group">
            <div className="absolute -inset-10 bg-heritage/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative overflow-hidden arch-mask h-[60vh] md:h-[80vh] w-full shadow-sm border border-linen z-10">
              <ParallaxImage 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000" 
                alt="Behind the Scenes Process" 
                speed={0.3}
                aspectRatio="aspect-auto"
                containerClassName="h-full w-full"
                className="grayscale hover:grayscale-0 transition-all duration-[1s] ease-linear"
              />
            </div>
          </div>
          <div className="lg:col-span-5 space-y-12 fade-up">
            <div className="space-y-6">
              <Badge variant="outline" className="border-heritage text-heritage">Our Perspective</Badge>
              <h2 className="text-5xl md:text-6xl font-serif text-text-primary font-bold leading-[1.2]">
                Architects of <br /><span className="text-heritage italic font-light">Magic.</span>
              </h2>
            </div>
            <div className="space-y-8 text-lg text-text-secondary font-sans font-light leading-relaxed">
              <p>
                Zing Bliss Events specializes in planning, designing, and executing events with creativity, precision, and professionalism. The team works closely with clients to understand their vision and transform it into a well-curated event with exceptional attention to detail.
              </p>
              <p>
                From intimate celebrations to large-scale events, Zing Bliss ensures every element is thoughtfully managed to create magical moments and lasting memories.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-8">
              {[
                { title: 'Creativity', icon: <Sparkles size={20} /> },
                { title: 'Precision', icon: <Target size={20} /> },
                { title: 'Reliability', icon: <ShieldCheck size={20} /> },
                { title: 'Ethics', icon: <Zap size={20} /> },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-6 border border-linen bg-surface/30">
                  <div className="text-heritage">{item.icon}</div>
                  <span className="font-sans font-bold uppercase tracking-widest text-[11px] text-text-primary">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        </section>

        {/* Vision & Mission (Exactly from PDF) */}
        <section id="vision" className="py-32 bg-surface border-y border-linen dot-pattern relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-5xl mx-auto relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-linen hidden md:block" />

            <div className="space-y-10 fade-up">
              <div className="w-16 h-16 rounded-full bg-heritage/10 flex items-center justify-center text-heritage">
                <Target size={32} />
              </div>
              <h3 className="text-4xl md:text-5xl font-serif text-text-primary font-bold leading-tight">Our <span className="text-heritage italic font-light">Vision</span></h3>
              <p className="text-text-secondary font-sans font-light leading-relaxed text-xl italic border-l-4 border-heritage pl-8">
                To achieve excellence in event management through reliability, creativity, and strong business ethics.
              </p>
            </div>

            <div className="space-y-10 fade-up">
              <div className="w-16 h-16 rounded-full bg-heritage/10 flex items-center justify-center text-heritage">
                <Compass size={32} />
              </div>
              <h3 className="text-4xl md:text-5xl font-serif text-text-primary font-bold leading-tight">Our <span className="text-heritage italic font-light">Mission</span></h3>
              <p className="text-text-secondary font-sans font-light leading-relaxed text-xl italic border-l-4 border-heritage pl-8">
                To inspire, create, and deliver remarkable experiences that leave a lasting impression on every client and guest.
              </p>
            </div>
          </div>
        </div>
        </section>

        {/* Visionaries Section */}
        <section id="visionaries" className="py-32 container px-6 space-y-24">
        <div className="text-center space-y-6 max-w-3xl mx-auto fade-up">
          <Badge variant="outline" className="text-heritage border-heritage">The Collective</Badge>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-text-primary">Meet The <br/><span className="text-heritage italic font-light">Architects</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-5xl mx-auto">
          {[
            { name: "Aryan Sharma", role: "Creative Director", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
            { name: "Sonia Kapoor", role: "Lead Strategist", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" }
          ].map((v, i) => (
            <div key={i} className="fade-up space-y-8 group">
              <div className="relative aspect-[4/5] overflow-hidden arch-mask border border-linen group">
                <div className="absolute -inset-10 bg-accent-rose/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <ParallaxImage 
                  src={v.img} 
                  alt={v.name} 
                  speed={0.15}
                  aspectRatio="aspect-[4/5]"
                  className="grayscale group-hover:grayscale-0 transition-all duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas to-transparent opacity-60 z-10 pointer-events-none" />
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl font-serif font-bold text-text-primary">{v.name}</h4>
                <p className="text-sm font-sans uppercase tracking-[0.3em] text-heritage">{v.role}</p>
              </div>
            </div>
          ))}
        </div>
        </section>

        {/* Metrics Section */}
        <section id="stats" className="py-24 bg-canvas border-b border-linen relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center fade-up">
            {[
              { num: '500+', label: 'Events Executed' },
              { num: '15+', label: 'Global Destinations' },
              { num: '50+', label: 'Industry Awards' },
              { num: '100%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="space-y-4">
                <h4 className="text-4xl md:text-6xl font-serif font-bold text-heritage">{stat.num}</h4>
                <p className="text-xs md:text-sm font-sans uppercase tracking-widest text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        </section>

        {/* Why Choose Us - Competitor Inspired */}
        <section id="why-choose-us" className="py-32 container px-6 space-y-24">
        <div className="text-center space-y-6 max-w-3xl mx-auto fade-up">
          <Badge variant="outline" className="text-heritage border-heritage">The Zing Bliss Advantage</Badge>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-text-primary">Why We Are The <br/><span className="text-heritage italic font-light">Best Choice</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Unmatched Expertise', desc: 'Years of professional experience in high-end wedding and event planning.', icon: <Award size={28} /> },
            { title: 'Detail Oriented', desc: 'We handle every nuance with absolute precision to ensure a stress-free day.', icon: <CheckCircle2 size={28} /> },
            { title: 'Value for Money', desc: 'Optimizing resources to deliver premium quality within your desired scale.', icon: <Star size={28} /> },
            { title: 'Transparent Dealings', desc: 'Clear communication and ethical business practices in every collaboration.', icon: <ShieldCheck size={28} /> },
          ].map((item, i) => (
            <div key={i} className="glass-card p-10 text-center space-y-6 hover:border-heritage transition-all group fade-up">
              <div className="mx-auto w-16 h-16 rounded-full bg-heritage/10 flex items-center justify-center text-heritage group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-text-primary">{item.title}</h3>
              <p className="text-sm text-text-secondary font-sans font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        </section>

        {/* Final CTA */}
        <section id="cta" className="py-32 md:py-64 container mx-auto text-center space-y-16">
        <div className="fade-up relative">
          <h2 className="text-6xl md:text-[10rem] font-serif text-text-primary font-bold tracking-tighter leading-[0.85]">
            Start Your <br/><span className="text-heritage italic font-light">Legacy.</span>
          </h2>
        </div>
        <div className="pt-12 flex flex-col items-center gap-12 fade-up">
          <Magnetic strength={0.2}>
            <Link href="/contact">
              <Button size="lg" className="h-24 px-20 text-2xl btn-prestige rounded-none font-bold">
                Secure Your Date
              </Button>
            </Link>
          </Magnetic>
          <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-xs font-sans uppercase tracking-[0.4em] text-heritage border-b border-heritage pb-1 hover:text-text-primary hover:border-text-primary transition-colors duration-500">Private Consultation</a>
        </div>
        </section>
    </main>
  );
}
