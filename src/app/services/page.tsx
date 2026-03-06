'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/atoms/Button';
import { MaskSlideImage } from '@/components/molecules/MaskSlideImage';
import { TextReveal } from '@/components/atoms/TextReveal';
import { Badge } from '@/components/atoms/Badge';
import { ArrowRight, MessageCircle, Star, Music, Zap, CheckCircle2 } from 'lucide-react';
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
    title: 'Event Management',
    subtitle: 'Seamless Execution',
    icon: <Star size={24} />,
    description: 'Our team ensures seamless execution from concept to completion, delivering high-quality experiences for every type of event. We handle all logistics, vendor management, and onsite coordination.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
    tags: ['Weddings', 'Corporate Events', 'Birthday Celebrations', 'Baby Showers', 'Festivals & Cultural Events', 'House Parties', 'Private Celebrations']
  },
  {
    id: '02',
    title: 'Entertainment Services',
    subtitle: 'Vibrant & Engaging',
    icon: <Music size={24} />,
    description: 'To make every event lively and engaging, we provide a wide range of entertainment solutions. We source the finest talent to match the vibe of your celebration.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200',
    tags: ['International Artists', 'DJs', 'Hosts / MCs', 'Live Musicians', 'Bands', 'Celebrity Appearances', 'Kids Entertainment', 'Activity Artists']
  },
  {
    id: '03',
    title: 'Event Production & Setup',
    subtitle: 'Precision & Creativity',
    icon: <Zap size={24} />,
    description: 'Our team manages the entire event production process with precision and creativity. From stage design to final execution, every detail is carefully managed.',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200',
    tags: ['Event Setup & Decorations', 'Lighting & Sound Management', 'Catering Coordination', 'Concert Production', 'Videography & Photography', 'Photo Booth Experiences']
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
      
      {/* Header */}
      <section className="container mx-auto px-6 py-24 md:py-32 relative text-center space-y-8">
        <div className="header-fade">
          <Badge variant="solid" dot className="px-6 py-2 bg-secondary/10 text-secondary uppercase tracking-[0.3em] font-bold">Our Expertise</Badge>
        </div>
        <TextReveal 
          as="h1" 
          text="Bespoke Event Solutions." 
          className="text-5xl md:text-[8rem] font-serif tracking-tighter text-text-primary leading-[1.1] font-bold" 
        />
        <p className="header-fade text-lg md:text-2xl text-text-secondary font-sans font-light leading-relaxed max-w-3xl mx-auto pt-6">
          Comprehensive event management and production services tailored for high-end celebrations and professional corporate gatherings.
        </p>
      </section>

      {/* Services Spectrum List */}
      <section className="container mx-auto px-6 space-y-32 md:space-y-48">
        {serviceCategories.map((service, index) => (
          <div 
            key={service.id} 
            className={`service-item grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-2' : ''} relative`}>
              <div className="relative overflow-hidden arch-mask h-[60vh] md:h-[80vh] w-full shadow-2xl border border-border-gold">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-[10s] ease-linear"
                />
              </div>
            </div>
            
            <div className={`lg:col-span-5 space-y-10 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <div className="space-y-4">
                <span className="text-sm font-serif text-secondary/60 italic">{service.id} — {service.subtitle}</span>
                <h2 className="text-4xl md:text-6xl font-serif text-text-primary font-bold leading-[1.2]">
                  {service.title}
                </h2>
              </div>
              
              <p className="text-lg text-text-secondary font-sans font-light leading-relaxed">
                {service.description}
              </p>
              
              <div className="pt-6 border-t border-border-gold">
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-secondary font-bold mb-6">Expertise Includes:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {service.tags.map((tag) => (
                    <li key={tag} className="text-xs font-sans uppercase tracking-widest text-text-primary font-light flex items-center gap-3">
                      <CheckCircle2 size={14} className="text-secondary" />
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-8">
                <a href={generateWhatsAppLink(service.title, 'Booking')} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="btn-outline-royal px-12 h-16 rounded-none font-bold">
                    Inquire Details
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-32 mt-32 bg-bg-surface border-t border-border-gold relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.05] pointer-events-none" />
        <div className="container mx-auto text-center space-y-12 relative z-10">
          <h2 className="text-4xl md:text-7xl font-serif text-text-primary font-bold">
            Ready to <span className="text-secondary italic font-light">Orchestrate</span> Your Event?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
            <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="h-20 px-16 text-xl btn-royal rounded-none font-bold shadow-2xl" leftIcon={<MessageCircle size={24} />}>
                WhatsApp Us
              </Button>
            </a>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="h-20 px-16 text-xl btn-outline-royal rounded-none font-bold">
                Contact Form
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
