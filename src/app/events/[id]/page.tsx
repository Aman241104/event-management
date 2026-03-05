'use client';

import React, { useRef } from 'react';
import { useParams } from 'next/navigation';
import { 
  Calendar, 
  MapPin, 
  Users, 
  ArrowLeft, 
  Share2, 
  Sparkles,
  MoveRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { Gallery } from '@/components/molecules/Gallery';
import { TextReveal } from '@/components/atoms/TextReveal';
import { Magnetic } from '@/components/atoms/Magnetic';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const eventDetails = {
  "1": {
    title: "The Future Tech Summit",
    subtitle: "Innovation & Excellence",
    date: "March 15-17, 2026",
    location: "San Francisco, CA",
    attendees: "1,200 Delegates",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2000",
    description: "The premier event for technology leaders and innovators. Future Tech Summit 2026 brings together the brightest minds in AI, Edge Computing, and Sustainable Design.",
    fullDescription: `
      A masterclass in technical production and high-fidelity orchestration. This year's summit explored the intersection of human-centric design and the rapid evolution of artificial intelligence.
      
      We curated a series of immersive environments, custom stage architectures, and sensory mapping sessions that redefined the conference experience. Every logistical nuance was handled with our signature quiet precision.
    `,
    highlights: ["Global Keynotes", "Immersive Renders", "Sensory Mapping"],
    gallery: [
      { id: 1, title: 'Main Stage Reveal', category: 'Production', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200', size: 'large' as const },
      { id: 2, title: 'Breakout Session', category: 'Design', image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800' },
      { id: 3, title: 'Networking Hub', category: 'Lounge', image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=800' },
    ],
  }
};

export default function EventDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const event = eventDetails[id as keyof typeof eventDetails] || eventDetails["1"];
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
        ease: 'power2.out'
      });
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-bg-main pt-32 pb-24 selection:bg-primary selection:text-white relative">
      <div className="side-label">Project Archive — {event.title}</div>
      <div className="side-label-right">{event.category} / {event.location}</div>

      {/* Editorial Header */}
      <section id="header" className="container mx-auto px-6 mb-24">
        <div className="flex flex-col space-y-12">
          <Link href="/gallery" className="header-fade meta-tag group inline-flex items-center gap-4">
            <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" />
            Return to Archives
          </Link>
          
          <div className="space-y-6">
            <div className="header-fade flex items-center gap-4">
              <Badge variant="solid" dot>Commissioned Archive</Badge>
              <span className="text-[10px] font-mono text-text-light">REF: ZB_PRJ_{id}</span>
            </div>
            
            <TextReveal 
              as="h1" 
              text={event.title} 
              className="text-6xl md:text-[9rem] font-serif tracking-tighter text-text-primary leading-[0.85] font-light" 
            />
            
            <p className="header-fade text-xl md:text-3xl font-serif italic text-primary/80 max-w-3xl">
              {event.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section id="image" className="container mx-auto px-6 mb-32 fade-up">
        <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden arch-mask shadow-2xl">
          <Image 
            src={event.image} 
            alt={event.title} 
            fill
            className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-[20s] ease-linear"
            priority
          />
        </div>
      </section>

      {/* Content Grid */}
      <section id="content" className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          <div className="lg:col-span-8 space-y-32">
            {/* The Narrative */}
            <div className="space-y-12 fade-up">
              <div className="flex items-center gap-6">
                <span className="w-16 h-[1px] bg-primary"></span>
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">The Narrative</span>
              </div>
              <div className="space-y-10">
                <p className="text-2xl md:text-4xl font-serif text-text-primary font-light leading-relaxed">
                  {event.description}
                </p>
                <div className="fine-line opacity-30" />
                <p className="text-lg text-text-secondary font-light leading-relaxed max-w-2xl whitespace-pre-line">
                  {event.fullDescription}
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-up">
              {event.highlights.map((h, i) => (
                <div key={i} className="p-10 border border-border-subtle group hover:border-primary transition-all duration-700">
                  <span className="text-[10px] font-mono text-text-light block mb-6">HIGHLIGHT 0{i+1}</span>
                  <span className="text-xl font-serif text-text-primary font-light">{h}</span>
                </div>
              ))}
            </div>

            {/* Gallery */}
            <div className="space-y-16 pt-32 border-t border-border-subtle fade-up">
              <div className="flex items-center gap-6">
                <span className="text-[10px] uppercase tracking-[0.4em] text-text-secondary">Visual Record</span>
                <h3 className="text-4xl font-serif font-light text-text-primary">Captured <i className="text-primary">Moments</i></h3>
              </div>
              <Gallery items={event.gallery} />
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 fade-up">
            <div className="sticky top-40 space-y-16 p-12 border border-border-subtle bg-bg-surface-light/30 backdrop-blur-md">
              <div className="space-y-10">
                <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-text-primary pb-4 border-b border-border-subtle">Specifications</h4>
                
                <div className="space-y-8">
                  <div className="space-y-2">
                    <span className="meta-tag">Establishment Date</span>
                    <p className="text-xl font-serif text-text-primary font-light">{event.date}</p>
                  </div>
                  <div className="space-y-2">
                    <span className="meta-tag">Primary Coordinates</span>
                    <p className="text-xl font-serif text-text-primary font-light">{event.location}</p>
                  </div>
                  <div className="space-y-2">
                    <span className="meta-tag">Scale of Commission</span>
                    <p className="text-xl font-serif text-text-primary font-light">{event.attendees}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-10 pt-10 border-t border-border-subtle">
                <p className="text-xs text-text-secondary font-light leading-relaxed">
                  Every commission is a unique dialogue between our architects and our clients. To discuss a new project, please connect with our private line.
                </p>
                <div className="flex flex-col gap-6">
                  <Magnetic strength={0.2}>
                    <Button variant="solid" className="btn-royal w-full py-6 group">
                      Consultation
                      <MoveRight className="ml-4 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </Magnetic>
                  <button className="meta-tag group justify-center">
                    <span className="w-8 h-[1px] bg-border-subtle group-hover:bg-primary transition-all" />
                    Share Project Record
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-32 md:py-64 border-t border-border-subtle text-center space-y-16">
        <div className="fade-up">
          <h2 className="text-5xl md:text-[9rem] font-serif text-text-primary font-light tracking-tighter leading-[0.85]">
            Plan Your <br/><i className="text-primary">Legacy.</i>
          </h2>
        </div>
        <div className="pt-12 fade-up">
          <Magnetic strength={0.2}>
            <Link href="/contact">
              <Button variant="solid" className="btn-royal px-20 py-8 text-sm">
                Connect with the Agency
              </Button>
            </Link>
          </Magnetic>
        </div>
      </section>
    </main>
  );
}
