'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { MaskSlideImage } from '@/components/molecules/MaskSlideImage';
import { TextReveal } from '@/components/atoms/TextReveal';
import { SVGSpine } from '@/components/atoms/SVGSpine';
import { BackgroundFlourish } from '@/components/atoms/BackgroundFlourish';
import { MessageCircle, Star, Music, Zap } from 'lucide-react';
import { generateWhatsAppLink, getGenericWhatsAppLink } from '@/lib/whatsapp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const serviceCategories = [
  {
    id: '01',
    label: '03 / EXPERTISE',
    title: 'Event Management',
    subtitle: 'Seamless Execution',
    icon: <Star size={24} />,
    description: 'Our team ensures seamless execution from concept to completion, delivering high-quality experiences for every type of event. We handle all logistics, vendor management, and onsite coordination.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
    tags: ['Weddings', 'Corporate Events', 'Birthday Celebrations', 'Baby Showers', 'Festivals & Cultural Events', 'House Parties', 'Private Celebrations'],
    bgColor: '#FCFBF7', // canvas
    maskClass: 'bg-canvas'
  },
  {
    id: '02',
    label: '04 / TALENT',
    title: 'Entertainment Services',
    subtitle: 'Vibrant & Engaging',
    icon: <Music size={24} />,
    description: 'To make every event lively and engaging, we provide a wide range of entertainment solutions. We source the finest talent to match the vibe of your celebration.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200',
    tags: ['International Artists', 'DJs', 'Hosts / MCs', 'Live Musicians', 'Bands', 'Celebrity Appearances', 'Kids Entertainment', 'Activity Artists'],
    bgColor: '#F4F1EA', // surface
    maskClass: 'bg-surface'
  },
  {
    id: '03',
    label: '05 / PRODUCTION',
    title: 'Event Production & Setup',
    subtitle: 'Precision & Creativity',
    icon: <Zap size={24} />,
    description: 'Our team manages the entire event production process with precision and creativity. From stage design to final execution, every detail is carefully managed.',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200',
    tags: ['Event Setup & Decorations', 'Lighting & Sound Management', 'Catering Coordination', 'Concert Production', 'Videography & Photography', 'Photo Booth Experiences'],
    bgColor: '#FDFCF0', // surface-light
    maskClass: 'bg-surface-light'
  }
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header fade in
    gsap.from('.header-fade', {
      y: 30,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: 'power2.out',
    });

    // Background color shifts
    const sections = gsap.utils.toArray<HTMLElement>('.service-section');
    sections.forEach((section) => {
      const bgColor = section.dataset.bg;
      ScrollTrigger.create({
        trigger: section,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => gsap.to(containerRef.current, { backgroundColor: bgColor, duration: 1.2, ease: 'power2.inOut' }),
        onEnterBack: () => gsap.to(containerRef.current, { backgroundColor: bgColor, duration: 1.2, ease: 'power2.inOut' }),
      });
    });

    // Fade-up for process cards
    gsap.utils.toArray<HTMLElement>('.process-card').forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });
    });

    setTimeout(() => ScrollTrigger.refresh(), 200);
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen pt-32 pb-24 relative overflow-hidden transition-colors duration-1000">
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-heritage/5 to-transparent pointer-events-none" />
      <SVGSpine height="6000px" viewBox="0 0 20 6000" pathD="M 10 0 L 10 6000" opacity={0.1} />
      <BackgroundFlourish type="floral" className="top-[5%] right-0 w-[40rem] h-[40rem]" opacity={0.02} />
      <BackgroundFlourish type="geometric" className="top-[25%] left-0 w-64 h-64" opacity={0.01} />
      <BackgroundFlourish type="architectural" className="top-[50%] right-[2%] w-96 h-96" opacity={0.02} />
      <BackgroundFlourish type="floral" className="top-[75%] left-[2%] w-[30rem] h-[30rem]" opacity={0.02} />
      
      {/* Header */}
      <section id="header" className="container mx-auto px-6 py-48 md:py-72 relative text-center space-y-12">
        <div className="header-fade">
          <span className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-heritage/60">03 / EXPERTISE</span>
        </div>
        <TextReveal 
          as="h1" 
          text="Bespoke Event Solutions." 
          className="text-6xl md:text-[10rem] font-serif tracking-tighter text-text-primary leading-[0.9] font-bold" 
        />
        <p className="header-fade text-xl md:text-3xl text-text-secondary font-sans font-light leading-relaxed max-w-4xl mx-auto pt-8">
          Comprehensive event management and production services tailored for high-end celebrations and professional corporate gatherings.
        </p>
      </section>

      {/* Services Spectrum List */}
      <div id="list">
        {serviceCategories.map((service, index) => (
          <section 
            key={service.id} 
            data-bg={service.bgColor}
            className="service-section min-h-screen flex items-center py-48 md:py-72 relative overflow-hidden"
          >
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32 items-center relative z-10">
              <div className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-2 lg:ml-auto' : 'lg:mr-auto'} relative w-full`}>
                <div className="absolute -top-12 -left-12 text-[10rem] font-serif font-bold text-heritage/5 pointer-events-none select-none">
                  {service.id}
                </div>
                <MaskSlideImage 
                  src={service.image} 
                  alt={service.title}
                  aspectRatio="aspect-[4/5] md:aspect-[16/10]"
                  className="shadow-2xl grayscale-0"
                  maskColor={service.maskClass}
                />
              </div>
              
              <div className={`lg:col-span-5 space-y-12 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="space-y-8">
                  <div className="flex flex-col gap-4">
                    <span className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-heritage">{service.label}</span>
                    <TextReveal 
                      as="h2" 
                      text={service.title} 
                      className="text-5xl md:text-8xl font-serif text-text-primary font-bold leading-[1.1]" 
                    />
                  </div>
                  
                  <p className="text-xl text-text-secondary font-sans font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="pt-10 border-t border-linen/50">
                  <h4 className="text-[11px] uppercase tracking-[0.4em] text-heritage font-bold mb-8">Expertise Includes:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                    {service.tags.map((tag) => (
                      <li key={tag} className="text-[11px] font-sans uppercase tracking-[0.2em] text-text-primary font-light flex items-center gap-4 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-heritage/30 group-hover:bg-heritage transition-colors" />
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-12">
                  <a href={generateWhatsAppLink(service.title, 'Booking')} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="btn-outline-prestige px-16 h-20 text-sm tracking-[0.3em] font-bold">
                      Inquire Details
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Process Journey */}
      <section id="process" className="relative py-48 md:py-72">
        <div className="container mx-auto px-6 mb-32 text-center space-y-8">
          <span className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-heritage/60">06 / METHODOLOGY</span>
          <TextReveal 
            as="h2" 
            text="Our Creative Workflow" 
            className="text-5xl md:text-9xl font-serif text-text-primary font-bold" 
          />
        </div>
        
        <div className="container mx-auto px-6 space-y-48">
          {[
            { step: '01', title: 'Discovery Dialogue', desc: 'An intimate consultation to understand your unique narrative and aesthetic vision.' },
            { step: '02', title: 'Architectural Planning', desc: 'Bespoke design renders and rigorous logistical mapping of your event landscape.' },
            { step: '03', title: 'Curation & Sourcing', desc: 'Selecting the finest artisans and global vendors to manifest every detail.' },
            { step: '04', title: 'The Masterful Reveal', desc: 'Onsite orchestration where vision meets reality in a flawless execution.' },
          ].map((item, i) => (
            <div key={i} className="process-card grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-32 items-center">
              <div className="md:col-span-5 relative">
                <span className="text-[15rem] md:text-[25rem] font-serif font-bold text-heritage/5 leading-none select-none">{item.step}</span>
                <div className="absolute top-1/2 left-0 w-24 h-px bg-heritage/20" />
              </div>
              <div className="md:col-span-7 space-y-8">
                <h3 className="text-4xl md:text-8xl font-serif text-text-primary font-bold tracking-tight">{item.title}</h3>
                <p className="text-xl md:text-3xl text-text-secondary font-sans font-light leading-relaxed max-w-2xl">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-48 md:py-72 container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-24">
          <div className="text-center space-y-8">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-heritage/60">07 / CLARITY</span>
            <TextReveal 
              as="h2" 
              text="Frequently Asked Questions" 
              className="text-4xl md:text-7xl font-serif font-bold text-text-primary" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { q: 'Do you manage destination weddings outside India?', a: 'Yes, we are a global agency. We have extensive experience executing high-end destination weddings and corporate events across Dubai, London, and exclusive European venues.' },
              { q: 'How far in advance should we commission your services?', a: 'For large-scale weddings and corporate galas, we recommend securing your date 8 to 12 months in advance to ensure the availability of premier venues and top-tier artists.' },
              { q: 'Do you handle artist and celebrity management?', a: 'Absolutely. We have direct networks to source international DJs, live symphonies, and celebrity appearances, managing all contracts, riders, and hospitality.' },
              { q: 'Are your services customizable?', a: 'Every event we design is completely bespoke. We do not offer rigid packages; instead, we build a custom architectural plan based on your exact vision and scale.' },
            ].map((faq, i) => (
              <div key={i} className="group border border-linen/50 hover:border-heritage/30 transition-all duration-700 bg-surface/10 p-12 cursor-pointer">
                <h4 className="text-2xl font-serif font-bold text-text-primary group-hover:text-heritage transition-colors duration-500">{faq.q}</h4>
                <p className="mt-6 text-lg text-text-secondary font-sans font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-48 md:py-72 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.03] pointer-events-none" />
        <div className="container mx-auto text-center space-y-16 relative z-10">
          <TextReveal 
            as="h2" 
            text="Ready to Orchestrate Your Event?" 
            className="text-5xl md:text-9xl font-serif text-text-primary font-bold" 
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 pt-12">
            <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Button size="lg" magnetic className="h-24 px-20 text-sm tracking-[0.4em] btn-prestige shadow-2xl" leftIcon={<MessageCircle size={20} />}>
                WhatsApp Us
              </Button>
            </a>
            <Link href="/contact">
              <Button variant="outline" magnetic size="lg" className="h-24 px-20 text-sm tracking-[0.4em] btn-outline-prestige">
                Contact Form
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
