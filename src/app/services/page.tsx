'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { MaskSlideImage } from '@/components/molecules/MaskSlideImage';
import { TextReveal } from '@/components/atoms/TextReveal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: '01',
    title: 'Event Management',
    subtitle: 'The Architecture of Celebration',
    description: 'We approach event management with the meticulousness of an architect. From high-end destination weddings to milestone corporate summits, we handle venue sourcing, intricate logistics, and seamless execution. Our goal is to ensure you remain entirely present in your moment, unburdened by details.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
    tags: ['Destination Weddings', 'Corporate Summits', 'Private Galas', 'Timeline Curation']
  },
  {
    id: '02',
    title: 'Entertainment Services',
    subtitle: 'The Soul of the Evening',
    description: 'The atmosphere of an event is defined by its sound and energy. We curate bespoke entertainment experiences tailored to the emotional arc of your celebration. Whether it requires a gentle acoustic ensemble, a dramatic international symphony, or a high-energy DJ to close the night, we source world-class artistry.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200',
    tags: ['International Artists', 'Live Symphonies', 'Celebrity Talent', 'Ambient Acoustics']
  },
  {
    id: '03',
    title: 'Production & Setup',
    subtitle: 'Crafting the Canvas',
    description: 'We transform spaces. Our production team blends technical precision with fine art design. This involves custom stage architecture, complex lighting design that flatters and inspires, and immersive decor that transports your guests the moment they arrive.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
    tags: ['Custom Architecture', 'Lighting Design', 'Floral Artistry', 'Technical Logistics']
  }
];

export default function ServicesPage() {
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

    gsap.utils.toArray<HTMLElement>('.service-item').forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out'
      });
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-bg-main pt-32 pb-24 relative overflow-hidden">
      
      {/* Side Labels */}
      <div className="side-label">Zing Bliss Events — Expertise / Disciplines</div>
      <div className="side-label-right">Curated Experience Architecture</div>

      {/* Header */}
      <section id="header" className="container mx-auto px-6 py-24 md:py-32 relative">
        <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none -translate-y-1/4">
          <span className="text-[25rem] font-serif font-light">EXPERT</span>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="header-fade">
            <span className="meta-tag justify-center">Services Spectrum / Vol. 01</span>
          </div>
          <TextReveal 
            as="h1" 
            text="Our Disciplines." 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[7rem] font-serif tracking-tight text-text-primary leading-[1.1] font-light" 
          />
          <p className="header-fade text-lg md:text-xl text-text-secondary font-light leading-relaxed max-w-2xl mx-auto pt-6">
            A refined spectrum of event production and design services, tailored for those who appreciate understated elegance and flawless execution.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section id="list" className="container mx-auto px-6 space-y-32 md:space-y-48 relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border-subtle opacity-10 hidden lg:block" />

        {services.map((service, index) => (
          <div 
            key={service.id} 
            className={`service-item grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-2' : ''} relative`}>
              {/* Utilized white space: meta-tag next to image */}
              <div className={`absolute top-0 ${index % 2 !== 0 ? 'right-full translate-x-[-2rem]' : 'left-full translate-x-[2rem]'} hidden xl:block text-right`}>
                <span className="meta-tag whitespace-nowrap">Service Ref: {service.id}</span>
              </div>

              <div className="relative overflow-hidden arch-mask h-[60vh] md:h-[80vh] w-full shadow-2xl">
                <MaskSlideImage 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale-[0.2]"
                />
              </div>
            </div>
            
            <div className={`lg:col-span-5 space-y-10 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <div className="space-y-4">
                <span className="text-sm font-serif text-primary/60 italic">{service.id}</span>
                <h2 className="text-4xl md:text-5xl font-serif text-text-primary font-light leading-[1.2]">
                  {service.title}
                </h2>
                <div className="meta-tag">{service.subtitle}</div>
              </div>
              
              <p className="text-base text-text-secondary font-light leading-[1.8]">
                {service.description}
              </p>
              
              <div className="pt-4 border-t border-border-subtle">
                <ul className="grid grid-cols-2 gap-y-3">
                  {service.tags.map((tag) => (
                    <li key={tag} className="text-[10px] font-sans uppercase tracking-widest text-text-primary font-light flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-8">
                <Link href="/contact">
                  <Button variant="outline" className="btn-outline-royal">
                    Request Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section id="cta" className="py-32 mt-32 bg-bg-surface border-t border-border-subtle relative">
        <div className="absolute inset-0 dot-pattern opacity-[0.02]" />
        <div className="container mx-auto text-center space-y-10 relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif text-text-primary font-light">
            Ready to <i className="text-primary">Commission</i> us?
          </h2>
          <Link href="/contact" className="inline-block meta-tag group cursor-pointer border-b border-transparent hover:border-primary transition-all pb-1">
            <span className="w-8 h-[1px] bg-primary group-hover:w-12 transition-all" />
            Connect With Our Architects
          </Link>
        </div>
      </section>

    </main>
  );
}
