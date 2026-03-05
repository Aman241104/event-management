'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  MessageCircle,
  Camera
} from 'lucide-react';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { Card } from '@/components/atoms/Card';
import { Gallery } from '@/components/molecules/Gallery';
import { MaskSlideImage } from '@/components/molecules/MaskSlideImage';
import { TestimonialCard } from '@/components/molecules/Testimonial';
import { generateWhatsAppLink, getGenericWhatsAppLink } from '@/lib/whatsapp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const galleryItems = [
  { id: 1, title: 'Milan Fashion Week', category: 'Corporate', image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1200', size: 'large' as const },
  { id: 2, title: 'The Monaco Gala', category: 'Private', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Symphony Under Stars', category: 'Concert', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Tech Summit Dubai', category: 'Corporate', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800', size: 'medium' as const },
  { id: 5, title: 'Neon Night Paris', category: 'Concert', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Lake Como Wedding', category: 'Private', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800' },
];

const testimonials = [
  { id: 1, content: "An absolute masterclass in event design. Every detail, from the ambient lighting to the custom champagne flutes, felt impossibly perfect.", author: "Eleanor Vance", role: "Creative Director", event: "The Monaco Gala", rating: 5, avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" },
  { id: 2, content: "Their mobile concierge service is a game-changer. I booked a multi-million dollar corporate retreat entirely via WhatsApp. Flawless execution.", author: "Jameson Wright", role: "CEO", event: "Tech Summit Dubai", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Cinematic Hero Animations (Slower, elegant)
    const tl = gsap.timeline();
    tl.from('.hero-badge', { y: -20, opacity: 0, duration: 1.5, ease: 'power3.out' })
      .from('.hero-title-1', { y: 40, opacity: 0, duration: 1.8, ease: 'power3.out' }, '-=1.0')
      .from('.hero-title-2', { y: 40, opacity: 0, duration: 1.8, ease: 'power3.out' }, '-=1.4')
      .from('.hero-desc', { y: 30, opacity: 0, duration: 1.5, ease: 'power3.out' }, '-=1.4')
      .from('.hero-btns', { y: 30, opacity: 0, duration: 1.5, ease: 'power3.out' }, '-=1.4');

    // Editorial Services Animation (Refined)
    gsap.utils.toArray('.editorial-text').forEach((text: any) => {
      gsap.from(text, {
        scrollTrigger: {
          trigger: text,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out'
      });
    });

    // Gallery Reveal
    gsap.from('.gallery-container', {
      scrollTrigger: {
        trigger: '.gallery-container',
        start: 'top 80%',
      },
      y: 60,
      opacity: 0,
      duration: 2,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-bg-main flex flex-col pt-24">
      {/* Cinematic Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden mx-4 sm:mx-8 mt-4 rounded-[32px] border border-border-subtle">
        <div className="absolute inset-0 bg-bg-main/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-transparent z-10" />
        <Image
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Event"
          fill
          className="object-cover grayscale brightness-75 scale-105"
          priority
          sizes="100vw"
        />

        <div className="container relative z-20 text-center space-y-12 max-w-5xl">
          <div className="hero-badge">
            <Badge variant="gold" dot>The Prestige Collection</Badge>
          </div>
          <h1 className="text-6xl md:text-[8rem] font-bold tracking-tight text-text-primary leading-[0.9]">
            <span className="hero-title-1 block">Curating The</span>
            <span className="hero-title-2 block text-secondary italic font-light">Extraordinary.</span>
          </h1>
          <p className="hero-desc text-lg md:text-xl text-text-primary/80 max-w-2xl mx-auto leading-relaxed font-sans font-light">
            An exclusive agency for those who demand absolute perfection.
            From private estates to global summits, we engineer prestige.
          </p>
          <div className="hero-btns pt-8">
            <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Button variant="gold" size="lg" className="h-16 px-12 text-lg w-full sm:w-auto" rightIcon={<ArrowRight size={20} />}>
                Request a Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Editorial Services */}
      <section className="py-48 container max-w-[1440px] px-8 space-y-48">

        {/* Service 1 */}
        <div className="editorial-section grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <MaskSlideImage
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
            alt="Corporate Gala"
            className="border border-border-subtle"
          />
          <div className="editorial-text space-y-10 md:pl-16">
            <Badge variant="outline">01 / Corporate</Badge>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">The Executive<br /><span className="italic text-secondary">Gala</span>.</h2>
            <p className="text-xl text-text-moss leading-relaxed font-sans font-light">
              Elevate your corporate identity with events designed to impress stakeholders and inspire teams. We handle logistics with invisible precision.
            </p>
            <div className="pt-4">
              <a href={generateWhatsAppLink('Corporate Galas', 'Booking')} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="h-14 px-8 text-sm" rightIcon={<ArrowRight size={16} />}>Inquire Now</Button>
              </a>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="editorial-section grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="editorial-text space-y-10 md:pr-16 order-2 md:order-1">
            <Badge variant="outline">02 / Private</Badge>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Intimate<br /><span className="italic text-secondary">Opulence</span>.</h2>
            <p className="text-xl text-text-moss leading-relaxed font-sans font-light">
              Your life's most precious moments, orchestrated flawlessly. From grand weddings in Lake Como to private island celebrations.
            </p>
            <div className="pt-4">
              <a href={generateWhatsAppLink('Private Events', 'Booking')} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="h-14 px-8 text-sm" rightIcon={<ArrowRight size={16} />}>Inquire Now</Button>
              </a>
            </div>
          </div>
          <MaskSlideImage
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000"
            alt="Private Event"
            className="border border-border-subtle order-1 md:order-2"
          />
        </div>

      </section>

      {/* Prestige Gallery */}
      <section className="py-32 bg-bg-surface border-y border-border-subtle">
        <div className="container max-w-[1440px] px-8 space-y-16">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-border-subtle pb-12">
            <div className="space-y-6">
              <Badge variant="ivory">The Portfolio</Badge>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Visual <span className="italic font-light">Legacy</span>.</h2>
            </div>
            <Button variant="outline" rightIcon={<Camera size={16} />}>Explore Archives</Button>
          </div>

          <div className="gallery-container">
            <Gallery items={galleryItems} />
          </div>
        </div>
      </section>

      {/* Editorial Testimonials */}
      <section className="py-48 container max-w-[1440px] px-8 space-y-24">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold tracking-widest uppercase text-secondary text-sm">Clientele</h2>
          <div className="w-px h-16 bg-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </section>

      {/* Concierge CTA */}
      <section className="relative py-48 border-t border-border-subtle overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container relative z-10 max-w-4xl text-center space-y-12">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tight">
            Secure Your <span className="italic font-light text-secondary text-7xl md:text-[8rem]">Date</span>.
          </h2>
          <p className="text-xl text-text-moss font-sans font-light leading-relaxed">
            Our private concierge is available via WhatsApp to discuss your exact requirements and ensure a flawless execution.
          </p>
          <div className="pt-8">
            <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg" className="h-20 px-16 text-xl rounded-full" leftIcon={<MessageCircle size={28} />}>
                Message Concierge
              </Button>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
