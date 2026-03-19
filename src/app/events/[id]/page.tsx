'use client';

import React, { useRef } from 'react';
import { useParams } from 'next/navigation';
import { 
  ArrowLeft, 
  Share2, 
  MoveRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { Gallery } from '@/components/molecules/Gallery';
import { TextReveal } from '@/components/atoms/TextReveal';
import { Magnetic } from '@/components/atoms/Magnetic';
import { ParallaxImage } from '@/components/atoms/ParallaxImage';
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
    <main ref={containerRef} className="min-h-screen bg-canvas pt-32 pb-24 selection:bg-heritage selection:text-canvas relative">
      <div className="side-label text-heritage/30">Project Record — 2026 / {event.category}</div>
      <div className="side-label-right text-heritage/30">{event.location} / Coordinates {id}</div>

      {/* Editorial Header */}
      <section id="header" className="container mx-auto px-6 mb-24">
        <div className="flex flex-col space-y-12">
          <Link href="/gallery" className="header-fade text-[11px] uppercase tracking-[0.5em] text-heritage hover:text-text-primary transition-colors group inline-flex items-center gap-4">
            <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" />
            Return to Archive
          </Link>
          
          <div className="space-y-6">
            <div className="header-fade flex items-center gap-4">
              <Badge variant="solid" dot className="bg-heritage/10 text-heritage border-heritage/20">Commissioned Archive</Badge>
              <span className="text-[11px] font-mono text-heritage/40">REF: ZB_PRJ_{id}</span>
            </div>
            
            <TextReveal 
              as="h1" 
              text={event.title} 
              className="text-6xl md:text-[9.5rem] font-serif tracking-tighter text-text-primary leading-[0.85] font-bold" 
            />
            
            <p className="header-fade text-xl md:text-3xl font-serif italic text-heritage/60 max-w-3xl">
              {event.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section id="image" className="container mx-auto px-6 mb-32 fade-up relative group">
        <div className="absolute -inset-20 bg-heritage/5 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden arch-mask shadow-sm border border-linen z-10">
          <ParallaxImage 
            src={event.image} 
            alt={event.title} 
            speed={0.25}
            aspectRatio="aspect-auto"
            containerClassName="h-full w-full"
            className="grayscale-[0.2] hover:grayscale-0 transition-all duration-[1s] ease-linear"
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
                <span className="w-16 h-[1px] bg-heritage"></span>
                <span className="text-heritage font-bold uppercase tracking-[0.4em] text-[11px]">The Narrative</span>
              </div>
              <div className="space-y-10">
                <p className="text-2xl md:text-5xl font-serif text-text-primary font-bold leading-tight tracking-tight">
                  {event.description}
                </p>
                <div className="w-full h-px bg-linen opacity-30" />
                <p className="text-lg text-text-secondary font-sans font-light leading-relaxed max-w-2xl whitespace-pre-line">
                  {event.fullDescription}
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-up">
              {event.highlights.map((h, i) => (
                <div key={i} className="p-10 border border-linen bg-surface/20 group hover:border-heritage transition-all duration-700">
                  <span className="text-[11px] font-mono text-heritage/40 block mb-6 uppercase tracking-widest">Highlight 0{i+1}</span>
                  <span className="text-xl font-serif text-text-primary font-bold">{h}</span>
                </div>
              ))}
            </div>

            {/* Gallery */}
            <div className="space-y-16 pt-32 border-t border-linen fade-up">
              <div className="flex items-center gap-6">
                <span className="text-[11px] uppercase tracking-[0.5em] text-heritage">Visual Record</span>
                <h3 className="text-4xl font-serif font-bold text-text-primary tracking-tight">Captured <span className="text-heritage italic font-light">Moments</span></h3>
              </div>
              <Gallery items={event.gallery} />
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 fade-up">
            <div className="sticky top-40 space-y-16 p-12 border border-linen bg-surface/40 backdrop-blur-2xl shadow-sm">
              <div className="space-y-10">
                <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-heritage pb-4 border-b border-linen">Specifications</h4>
                
                <div className="space-y-8">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-text-secondary">Commission Date</span>
                    <p className="text-xl font-serif text-text-primary font-bold">{event.date}</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-text-secondary">Primary Coordinates</span>
                    <p className="text-xl font-serif text-text-primary font-bold">{event.location}</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-text-secondary">Scale of Inquiry</span>
                    <p className="text-xl font-serif text-text-primary font-bold">{event.attendees}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-10 pt-10 border-t border-linen">
                <p className="text-xs text-text-secondary font-sans font-light leading-relaxed">
                  Every commission is a unique dialogue between our architects and our clients. To discuss a new project, please connect with our private line.
                </p>
                <div className="flex flex-col gap-6">
                  <Magnetic strength={0.2}>
                    <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                      <Button variant="solid" className="btn-prestige w-full h-16 group">
                        Inquiry Call
                        <MoveRight className="ml-4 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                      </Button>
                    </a>
                  </Magnetic>
                  <button className="text-[10px] uppercase tracking-[0.4em] text-heritage font-bold flex items-center justify-center gap-4 group">
                    <span className="w-8 h-px bg-heritage/30 group-hover:bg-heritage transition-all" />
                    Share Project Record
                    <Share2 size={12} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NextProjectLink />
    </main>
  );
}

function NextProjectLink() {
  return (
    <section id="next-project" className="py-48 bg-surface border-y border-linen overflow-hidden group">
      <div className="container px-6 text-center space-y-8">
        <span className="text-[11px] font-mono text-heritage uppercase tracking-[0.5em]">Upcoming Narrative</span>
        <Link href="/events/1" className="block">
          <h2 className="text-6xl md:text-[10rem] font-serif font-bold text-text-primary tracking-tighter leading-none group-hover:text-heritage transition-colors duration-700">
            Next <span className="italic font-light">Legacy.</span>
          </h2>
        </Link>
        <div className="pt-12">
           <Link href="/gallery">
             <Button variant="outline" className="btn-outline-prestige px-16 h-16">Return to Archive</Button>
           </Link>
        </div>
      </div>
    </section>
  );
}
