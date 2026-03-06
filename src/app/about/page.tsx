'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Target, Compass, Sparkles, ShieldCheck, Zap, ArrowRight, CheckCircle2, Star, Award } from 'lucide-react';
import { Badge } from '@/components/atoms/Badge';
import { MaskSlideImage } from '@/components/molecules/MaskSlideImage';
import { Button } from '@/components/atoms/Button';
import { Magnetic } from '@/components/atoms/Magnetic';
import { TextReveal } from '@/components/atoms/TextReveal';
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
      duration: 1.5,
      stagger: 0.2,
      ease: 'power2.out',
    });

    gsap.utils.toArray<HTMLElement>('.fade-up').forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out'
      });
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-bg-main pt-32 pb-24 selection:bg-secondary selection:text-bg-main">
      
      {/* Editorial Header */}
      <section className="container mx-auto px-6 py-24 md:py-32 relative text-center space-y-10">
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

      {/* Philosophy Section */}
      <section className="container mx-auto px-6 space-y-32 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-7 fade-up relative">
            <div className="relative overflow-hidden arch-mask h-[60vh] md:h-[80vh] w-full shadow-2xl border border-border-gold">
              <Image 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000" 
                alt="Behind the Scenes Process" 
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-[10s] ease-linear"
              />
            </div>
          </div>
          <div className="lg:col-span-5 space-y-12 fade-up">
            <div className="space-y-6">
              <Badge variant="outline" className="border-secondary text-secondary">Our Perspective</Badge>
              <h2 className="text-5xl md:text-6xl font-serif text-text-primary font-bold leading-[1.2]">
                Architects of <br /><span className="text-secondary italic font-light">Magic.</span>
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
                <div key={i} className="flex items-center gap-4 p-6 border border-border-subtle bg-bg-surface/30">
                  <div className="text-secondary">{item.icon}</div>
                  <span className="font-sans font-bold uppercase tracking-widest text-[10px] text-white">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission (Exactly from PDF) */}
      <section className="py-32 bg-bg-surface border-y border-border-gold dot-pattern relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-5xl mx-auto relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-border-gold hidden md:block" />
            
            <div className="space-y-10 fade-up">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <Target size={32} />
              </div>
              <h3 className="text-4xl md:text-5xl font-serif text-text-primary font-bold leading-tight">Our <span className="text-secondary italic font-light">Vision</span></h3>
              <p className="text-text-secondary font-sans font-light leading-relaxed text-xl italic border-l-4 border-secondary pl-8">
                To achieve excellence in event management through reliability, creativity, and strong business ethics.
              </p>
            </div>
            
            <div className="space-y-10 fade-up">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <Compass size={32} />
              </div>
              <h3 className="text-4xl md:text-5xl font-serif text-text-primary font-bold leading-tight">Our <span className="text-secondary italic font-light">Mission</span></h3>
              <p className="text-text-secondary font-sans font-light leading-relaxed text-xl italic border-l-4 border-secondary pl-8">
                To inspire, create, and deliver remarkable experiences that leave a lasting impression on every client and guest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Competitor Inspired */}
      <section className="py-32 container px-6 space-y-24">
        <div className="text-center space-y-6 max-w-3xl mx-auto fade-up">
          <Badge variant="outline" className="text-secondary border-secondary">The Zing Bliss Advantage</Badge>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white">Why We Are The <br/><span className="text-secondary italic font-light">Best Choice</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Unmatched Expertise', desc: 'Years of professional experience in high-end wedding and event planning.', icon: <Award size={28} /> },
            { title: 'Detail Oriented', desc: 'We handle every nuance with absolute precision to ensure a stress-free day.', icon: <CheckCircle2 size={28} /> },
            { title: 'Value for Money', desc: 'Optimizing resources to deliver premium quality within your desired scale.', icon: <Star size={28} /> },
            { title: 'Transparent Dealings', desc: 'Clear communication and ethical business practices in every collaboration.', icon: <ShieldCheck size={28} /> },
          ].map((item, i) => (
            <div key={i} className="glass-card p-10 text-center space-y-6 hover:border-secondary transition-all group fade-up">
              <div className="mx-auto w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">{item.title}</h3>
              <p className="text-sm text-text-secondary font-sans font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 md:py-64 container mx-auto text-center space-y-16">
        <div className="fade-up relative">
          <h2 className="text-6xl md:text-[10rem] font-serif text-text-primary font-bold tracking-tighter leading-[0.85]">
            Start Your <br/><span className="text-secondary italic font-light">Legacy.</span>
          </h2>
        </div>
        <div className="pt-12 flex flex-col items-center gap-12 fade-up">
          <Magnetic strength={0.2}>
            <Link href="/contact">
              <Button size="lg" className="h-24 px-20 text-2xl btn-royal rounded-none font-bold">
                Secure Your Date
              </Button>
            </Link>
          </Magnetic>
          <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-xs font-sans uppercase tracking-[0.4em] text-secondary border-b border-secondary pb-1 hover:text-white hover:border-white transition-colors duration-500">Private Consultation</a>
        </div>
      </section>

    </main>
  );
}
