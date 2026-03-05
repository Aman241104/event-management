'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { MaskSlideImage } from '@/components/molecules/MaskSlideImage';
import { TextReveal } from '@/components/atoms/TextReveal';
import { Magnetic } from '@/components/atoms/Magnetic';
import { Button } from '@/components/atoms/Button';
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
      delay: 0.2
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
        ease: 'power2.out'
      });
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-bg-main pt-32 pb-24 selection:bg-primary selection:text-white relative">
      
      {/* Side Labels */}
      <div className="side-label">Zing Bliss Events — The Agency Story</div>
      <div className="side-label-right">Philosophy / Vision / Mission</div>

      {/* Editorial Header */}
      <section id="header" className="container mx-auto px-6 py-24 md:py-32 relative">
        <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none -translate-y-1/2">
          <span className="text-[20rem] font-serif font-light">ZB</span>
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="header-fade">
            <span className="meta-tag justify-center">Historical Context / 2023—Present</span>
          </div>
          <TextReveal 
            as="h1" 
            text="Defining The Standard of Grandeur." 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[9rem] font-serif tracking-tighter text-text-primary leading-[1.1] md:leading-[0.85] font-light" 
          />
          <p className="header-fade text-xl md:text-2xl text-text-secondary font-sans font-light leading-relaxed max-w-3xl mx-auto pt-6">
            Zing Bliss Events is a bespoke architecture firm for high-fidelity celebrations. We craft the narratives that define legacies.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="container mx-auto px-6 space-y-32 py-32 relative">
        <div className="absolute left-0 w-px h-full bg-border-subtle opacity-20 hidden lg:block" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 fade-up relative">
            <div className="meta-tag absolute -top-8 left-0 hidden md:flex">Process Ref: 001 / Architectural Narrative</div>
            <div className="relative overflow-hidden arch-mask h-[60vh] md:h-[80vh] w-full shadow-2xl">
              <MaskSlideImage 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000" 
                alt="Behind the Scenes Process" 
                className="w-full h-full object-cover grayscale-[0.2]"
              />
            </div>
          </div>
          <div className="lg:col-span-5 space-y-12 fade-up md:pl-12">
            <div className="space-y-6">
              <div className="meta-tag">Establishment / Methodology</div>
              <h2 className="text-4xl md:text-6xl font-serif text-text-primary font-light leading-[1.2]">
                Architects of <br /><i className="text-primary">Emotion.</i>
              </h2>
            </div>
            <div className="space-y-8 text-lg text-text-secondary font-light leading-relaxed">
              <p>
                We believe that a truly extraordinary event is not merely seen, it is felt. It is an immersive narrative told through meticulous design and invisible precision.
              </p>
              <p>
                From the initial architectural render to the final sensory mapping, our team operates with an unwavering commitment to aesthetic perfection.
              </p>
            </div>
            <div className="pt-4">
              <a href="https://www.instagram.com/zingblissevents/" target="_blank" rel="noopener noreferrer" className="meta-tag group">
                <span className="w-8 h-[1px] bg-primary group-hover:w-12 transition-all" />
                View Our Daily Journal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-32 mt-48 bg-bg-surface border-y border-border-subtle dot-pattern relative">
        {/* utilize white space */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none overflow-hidden">
          <span className="text-[30rem] font-serif font-light whitespace-nowrap">FOUNDATION</span>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-5xl mx-auto relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-border-subtle hidden md:block" />
            
            <div className="space-y-10 fade-up">
              <span className="meta-tag">The Vision / Core Excellence</span>
              <h3 className="text-4xl md:text-5xl font-serif text-text-primary font-light leading-tight">Excellence through <br/><i className="text-primary font-light">Reliability & Ethics.</i></h3>
              <p className="text-text-secondary font-light leading-relaxed text-lg">
                To achieve absolute excellence in event management through unwavering reliability, boundary-pushing creativity, and strong business ethics.
              </p>
            </div>
            
            <div className="space-y-10 fade-up">
              <span className="meta-tag">The Mission / Global Inspiration</span>
              <h3 className="text-4xl md:text-5xl font-serif text-text-primary font-light leading-tight">Inspiring the <br/><i className="text-primary font-light">Unforgettable.</i></h3>
              <p className="text-text-secondary font-light leading-relaxed text-lg">
                To inspire, create, and deliver remarkable experiences that leave an indelible mark on the memories of every client and guest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section id="cta" className="py-32 md:py-64 container mx-auto text-center space-y-16">
        <div className="fade-up relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-border-subtle opacity-20 pointer-events-none" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[10rem] font-serif text-text-primary font-light tracking-tighter leading-[1.1] md:leading-[0.85] relative z-10 bg-bg-main px-8 inline-block">
            Start Your <br/><i className="text-primary">Legacy.</i>
          </h2>
        </div>
        <div className="pt-12 flex flex-col items-center gap-12 fade-up">
          <Magnetic strength={0.2}>
            <Link href="/contact">
              <Button variant="solid" className="btn-royal px-20 py-8 text-sm">
                Secure Your Date
              </Button>
            </Link>
          </Magnetic>
          <div className="meta-tag">Established Networks: Mumbai / Dubai / London</div>
        </div>
      </section>

    </main>
  );
}
