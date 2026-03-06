'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Sparkles, 
  Heart, 
  PartyPopper, 
  Music, 
  Star, 
  Camera, 
  MoveRight,
  ShieldCheck,
  Zap,
  Users
} from 'lucide-react';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { Gallery } from '@/components/molecules/Gallery';
import { MaskSlideImage } from '@/components/molecules/MaskSlideImage';
import { Magnetic } from '@/components/atoms/Magnetic';
import { TextReveal } from '@/components/atoms/TextReveal';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const galleryItems = [
  { id: 1, title: 'Palace Wedding Udaipur', category: 'Weddings', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200', size: 'large' as const },
  { id: 2, title: 'Luxury Table Decor', category: 'Design', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Grand Mandap Setup', category: 'Weddings', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Corporate Stage Design', category: 'Production', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800', size: 'medium' as const },
];

const testimonials = [
  { id: 1, content: "Zing Bliss turned our vision into reality. Every detail was beautifully executed and our guests loved the experience.", author: "Sonia & Aryan", role: "Wedding Celebration", event: "Private Event", rating: 5, avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" },
  { id: 2, content: "The team handled everything so professionally. From decor to entertainment, the event was flawless.", author: "Rajesh Khanna", role: "Corporate Gala", event: "Annual Summit", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
  { id: 3, content: "Their creativity and execution truly set them apart. Highly recommended for any celebration.", author: "Happy Client", role: "Special Occasion", event: "Birthday Bash", rating: 5, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.hero-badge', { y: 20, opacity: 0, duration: 1, ease: 'power3.out' })
      .from('.hero-title span', { y: 40, opacity: 0, duration: 1.2, stagger: 0.1, ease: 'power3.out' }, '-=0.8')
      .from('.hero-desc', { y: 30, opacity: 0, duration: 1, ease: 'power3.out' }, '-=1')
      .from('.hero-btns', { y: 30, opacity: 0, duration: 1, ease: 'power3.out' }, '-=1');

    gsap.utils.toArray<HTMLElement>('.fade-up').forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out'
      });
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-bg-main flex flex-col overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-bg-main/60 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Wedding Mandap"
          fill
          className="object-cover brightness-75 scale-105"
          priority
        />

        <div className="container relative z-20 text-center space-y-8 max-w-5xl px-4">
          <div className="hero-badge">
            <Badge variant="solid" dot className="bg-bg-main/40 border-secondary/50 text-secondary">Premium Wedding & Event Planning</Badge>
          </div>
          <h1 className="hero-title text-6xl md:text-[8rem] font-serif font-bold tracking-tight text-text-primary leading-[0.9]">
            <span className="block">Crafting Magical</span>
            <span className="block text-gold italic font-light mt-2">Moments.</span>
          </h1>
          <p className="hero-desc text-lg md:text-2xl text-text-primary/80 max-w-3xl mx-auto leading-relaxed font-sans font-light">
            We plan and execute your most cherished celebrations with creativity, precision, and professional grandeur.
          </p>
          <div className="hero-btns pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Magnetic strength={0.2}>
              <Link href="/contact">
                <Button size="lg" className="h-16 px-12 text-lg w-full sm:w-auto btn-royal rounded-none" rightIcon={<ArrowRight size={20} />}>
                  Plan Your Event
                </Button>
              </Link>
            </Magnetic>
            <Link href="/services">
              <Button variant="outline" size="lg" className="h-16 px-12 text-lg w-full sm:w-auto btn-outline-royal rounded-none">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-32 bg-bg-surface relative overflow-hidden">
        <div className="container px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="fade-up space-y-10">
            <div className="space-y-6">
              <Badge variant="outline" className="border-secondary text-secondary">About Zing Bliss</Badge>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tight">Turning Vision <br/><span className="text-secondary italic font-light">Into Reality</span>.</h2>
            </div>
            <p className="text-xl text-text-secondary leading-relaxed font-sans font-light">
              Zing Bliss Events is dedicated to turning life&apos;s special moments into unforgettable experiences. We specialize in planning, designing, and executing events with creativity, precision, and professionalism.
            </p>
            <div className="pt-4">
              <Link href="/about" className="inline-flex items-center gap-4 text-secondary hover:text-white transition-colors uppercase tracking-[0.2em] text-xs font-bold group">
                Discover Our Story <MoveRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="relative fade-up lg:aspect-square aspect-video">
            <div className="absolute -inset-4 border border-secondary/20 rounded-[40px] pointer-events-none" />
            <div className="relative w-full h-full overflow-hidden rounded-[32px] arch-mask">
              <Image 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury Event Setup" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - The 3 Pillars */}
      <section className="py-32 container px-6 space-y-24">
        <div className="text-center space-y-6 max-w-3xl mx-auto fade-up">
          <Badge variant="solid" dot className="bg-secondary/10 text-secondary">Our Core Pillars</Badge>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white">The Zing Bliss <span className="text-secondary italic font-light">Approach</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Event Management', icon: <Star size={32} />, desc: 'Seamless execution from concept to completion, delivering high-quality experiences for every event.' },
            { title: 'Entertainment Services', icon: <Music size={32} />, desc: 'Vibrant and engaging entertainment solutions to make every event lively and memorable.' },
            { title: 'Production & Setup', icon: <Zap size={32} />, desc: 'Managing the entire event production process with technical precision and creative flair.' },
          ].map((service, i) => (
            <div key={i} className="glass-card p-12 text-center space-y-8 hover:border-secondary transition-all group fade-up">
              <div className="mx-auto w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-3xl font-serif font-bold text-white">{service.title}</h3>
              <p className="text-text-secondary font-sans font-light leading-relaxed">{service.desc}</p>
              <Link href="/services" className="inline-block text-[10px] uppercase tracking-widest text-secondary border-b border-secondary pb-1 hover:text-white hover:border-white transition-all">View Details</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-32 bg-bg-surface border-y border-border-subtle overflow-hidden relative">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 text-[20rem] font-serif text-secondary/5 opacity-10 whitespace-nowrap pointer-events-none select-none">
          CELEBRATIONS
        </div>
        <div className="container px-6 relative z-10 space-y-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 fade-up">
            <div className="space-y-6">
              <Badge variant="outline" className="border-secondary text-secondary">Event Categories</Badge>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-white">Specialized in <span className="text-secondary italic font-light">Every Excellence</span>.</h2>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 fade-up">
            {[
              { title: 'Weddings', icon: <Heart size={24} /> },
              { title: 'Corporate Events', icon: <Sparkles size={24} /> },
              { title: 'Birthday Celebrations', icon: <PartyPopper size={24} /> },
              { title: 'Baby Showers', icon: <Star size={24} /> },
              { title: 'Festivals & Culture', icon: <Music size={24} /> },
              { title: 'House Parties', icon: <Users size={24} /> },
              { title: 'Private Bashes', icon: <ShieldCheck size={24} /> },
              { title: 'Gala Dinners', icon: <Camera size={24} /> },
            ].map((item, i) => (
              <div key={i} className="group p-8 border border-border-subtle hover:border-secondary transition-all duration-500 bg-bg-main/30 flex flex-col items-center justify-center text-center gap-6">
                <div className="text-secondary group-hover:scale-125 transition-transform duration-500">{item.icon}</div>
                <h4 className="text-lg font-serif font-bold text-white tracking-wide">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 container px-6 space-y-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 fade-up">
          <div className="space-y-6 max-w-2xl">
            <Badge variant="solid" dot className="bg-secondary/10 text-secondary">Visual Record</Badge>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white">The Archive of <br/><span className="text-secondary italic font-light">Elegance</span>.</h2>
          </div>
          <Link href="/gallery">
            <Button variant="outline" className="btn-outline-royal px-12 h-16 rounded-none">View Full Gallery</Button>
          </Link>
        </div>
        
        <div className="fade-up">
          <Gallery items={galleryItems} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-bg-surface border-t border-border-subtle relative overflow-hidden">
        <div className="container px-6 space-y-24 relative z-10">
          <div className="text-center space-y-6 fade-up">
            <Badge variant="solid">Client Reviews</Badge>
            <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-white leading-tight">Our Greatest <span className="text-secondary italic font-light">Reward</span>.</h2>
            <p className="text-text-secondary max-w-2xl mx-auto font-sans font-light">Every celebration is crafted with passion, creativity, and attention to detail.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="glass-card p-10 rounded-none border border-border-gold space-y-8 fade-up">
                <div className="flex gap-1 text-secondary">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-xl text-text-primary italic leading-relaxed font-sans font-light">"{t.content}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-border-subtle">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden grayscale">
                    <Image src={t.avatar} alt={t.author} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-text-primary font-bold text-sm tracking-widest uppercase">{t.author}</h4>
                    <p className="text-[10px] text-secondary font-medium tracking-widest uppercase">{t.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Concierge CTA */}
      <section className="relative py-48 bg-bg-main border-t border-border-gold overflow-hidden">
        <div className="absolute inset-0 bg-secondary/5" />
        
        <div className="container relative z-10 max-w-5xl text-center space-y-12 px-4">
          <h2 className="text-6xl md:text-9xl font-serif font-bold tracking-tight text-white leading-[0.85]">
            Plan Your <br/><span className="text-secondary italic font-light">Legacy.</span>
          </h2>
          <p className="text-2xl text-text-secondary font-sans font-light leading-relaxed max-w-3xl mx-auto">
            Our luxury event concierge is ready to discuss your vision and ensure a flawless royal execution.
          </p>
          <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
            <Magnetic strength={0.2}>
              <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-24 px-20 text-2xl rounded-none btn-royal font-bold shadow-2xl" leftIcon={<ArrowRight size={32} />}>
                  WhatsApp Concierge
                </Button>
              </a>
            </Magnetic>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="h-24 px-20 text-2xl rounded-none btn-outline-royal">
                Inquire Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
