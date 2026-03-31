'use client';

import React, { useRef } from 'react';
import { useParams } from 'next/navigation';
import { 
  ArrowLeft, 
  Share2, 
  MoveRight,
  MapPin,
  Cpu,
  Users,
  Calendar,
  Layers,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { Gallery } from '@/components/molecules/Gallery';
import { TextReveal } from '@/components/atoms/TextReveal';
import { Magnetic } from '@/components/atoms/Magnetic';
import { ParallaxImage } from '@/components/atoms/ParallaxImage';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const eventDetails = {
  "1": {
    title: "The Future Tech Summit",
    subtitle: "Innovation & Excellence",
    date: "March 15-17, 2026",
    location: "San Francisco, CA",
    coordinates: "37.7749° N, 122.4194° W",
    attendees: "1,200 Delegates",
    category: "Corporate",
    gear: ["L-Acoustics K2", "Blackmagic 12K", "Holographic Mesh"],
    vendors: ["Aero Production", "Lumina Design", "Gourmet Lab"],
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

    // Background Color Shift
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: '#content',
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'play reverse play reverse',
      },
      backgroundColor: '#F4F1EA', // Surface color
      duration: 1,
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
    <main ref={containerRef} className="min-h-screen bg-canvas pt-32 pb-24 selection:bg-heritage selection:text-canvas relative transition-colors duration-1000">
      <div className="side-label text-heritage/30">0{id} / PROJECT RECORD — {event.category}</div>
      <div className="side-label-right text-heritage/30">{event.location} / {event.coordinates}</div>

      {/* Editorial Header */}
      <section id="header" className="container mb-24">
        <div className="flex flex-col space-y-12">
          <Link href="/gallery" className="header-fade text-[11px] uppercase tracking-[0.5em] text-heritage hover:text-text-primary transition-colors group inline-flex items-center gap-4">
            <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" />
            Return to Archive
          </Link>
          
          <div className="space-y-6">
            <div className="header-fade flex items-center gap-4">
              <Badge variant="solid" dot className="bg-heritage/10 text-heritage border-heritage/20">Commissioned Archive</Badge>
              <span className="text-[11px] font-mono text-heritage/40">REF: ZB_PRJ_{id.padStart(3, '0')}</span>
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
      <section id="image" className="container mb-32 fade-up relative group">
        <div className="absolute -inset-20 bg-heritage/5 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        <div className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden arch-mask shadow-2xl border border-linen z-10">
          <ParallaxImage 
            src={event.image} 
            alt={event.title} 
            speed={0.15}
            aspectRatio="aspect-auto"
            containerClassName="h-full w-full"
            priority
          />
          <div className="absolute bottom-10 left-10 z-20 hidden md:block">
            <div className="bg-canvas/80 backdrop-blur-md p-6 border border-linen shadow-sm space-y-2">
              <p className="text-[10px] font-mono uppercase tracking-widest text-heritage/40">Primary Capture</p>
              <p className="text-xs font-bold text-text-primary uppercase tracking-[0.2em]">{event.location} — Archive 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section id="content" className="container py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          <div className="lg:col-span-8 space-y-32">
            {/* The Narrative */}
            <div className="space-y-12 fade-up">
              <div className="flex items-center gap-6">
                <span className="w-16 h-[1px] bg-heritage"></span>
                <span className="text-heritage font-bold uppercase tracking-[0.4em] text-[11px]">The Narrative</span>
              </div>
              <div className="space-y-12">
                <TextReveal
                  as="h2"
                  text={event.description}
                  className="text-2xl md:text-5xl font-serif text-text-primary font-bold leading-tight tracking-tight"
                />
                <div className="w-full h-px bg-linen opacity-30" />
                <p className="text-lg text-text-secondary font-sans font-light leading-relaxed max-w-3xl whitespace-pre-line first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:text-heritage">
                  {event.fullDescription}
                </p>
              </div>
            </div>

            {/* Technical Record Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-24 border-y border-linen fade-up">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <Cpu size={20} className="text-heritage" strokeWidth={1} />
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-heritage/60">Gear Specifications</h4>
                </div>
                <ul className="space-y-4">
                  {event.gear?.map((item, i) => (
                    <li key={i} className="flex items-center justify-between group">
                      <span className="text-sm font-sans text-text-secondary">{item}</span>
                      <span className="w-8 h-[1px] bg-linen group-hover:bg-heritage transition-colors"></span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <Users size={20} className="text-heritage" strokeWidth={1} />
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-heritage/60">Vendor Partners</h4>
                </div>
                <ul className="space-y-4">
                  {event.vendors?.map((item, i) => (
                    <li key={i} className="flex items-center justify-between group">
                      <span className="text-sm font-sans text-text-secondary">{item}</span>
                      <span className="w-8 h-[1px] bg-linen group-hover:bg-heritage transition-colors"></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Gallery */}
            <div className="space-y-16 pt-32 fade-up">
              <div className="flex items-center gap-6">
                <span className="text-[11px] uppercase tracking-[0.5em] text-heritage">Visual Record</span>
                <h3 className="text-4xl font-serif font-bold text-text-primary tracking-tight">Captured <span className="text-heritage italic font-light">Moments</span></h3>
              </div>
              <Gallery items={event.gallery} />
            </div>
          </div>

          {/* Sidebar Info - Technical Metadata */}
          <div className="lg:col-span-4 fade-up">
            <div className="sticky top-40 space-y-16 p-12 border border-linen bg-surface/40 backdrop-blur-2xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 dot-pattern opacity-[0.05]" />
              
              <div className="space-y-10 relative z-10">
                <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-heritage pb-4 border-b border-linen">Project Specifications</h4>
                
                <div className="space-y-10">
                  <div className="flex items-start gap-4">
                    <Calendar size={18} className="text-heritage mt-1" strokeWidth={1} />
                    <div className="space-y-2">
                      <span className="text-[9px] uppercase tracking-widest text-text-secondary font-bold">Commission Date</span>
                      <p className="text-xl font-serif text-text-primary font-bold">{event.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin size={18} className="text-heritage mt-1" strokeWidth={1} />
                    <div className="space-y-2">
                      <span className="text-[9px] uppercase tracking-widest text-text-secondary font-bold">Primary Coordinates</span>
                      <p className="text-xl font-serif text-text-primary font-bold">{event.location}</p>
                      <p className="text-[10px] font-mono text-heritage/60">{event.coordinates}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Layers size={18} className="text-heritage mt-1" strokeWidth={1} />
                    <div className="space-y-2">
                      <span className="text-[9px] uppercase tracking-widest text-text-secondary font-bold">Scale of Inquiry</span>
                      <p className="text-xl font-serif text-text-primary font-bold">{event.attendees}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Zap size={18} className="text-heritage mt-1" strokeWidth={1} />
                    <div className="space-y-2">
                      <span className="text-[9px] uppercase tracking-widest text-text-secondary font-bold">Ref No.</span>
                      <p className="text-xl font-serif text-text-primary font-bold">ZB_PRJ_{id.padStart(3, '0')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-10 pt-10 border-t border-linen relative z-10">
                <p className="text-xs text-text-secondary font-sans font-light leading-relaxed italic">
                  &quot;The architecture of an event is built on the silent orchestration of details.&quot;
                </p>
                <div className="flex flex-col gap-6">
                  <Magnetic strength={0.2}>
                    <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                      <Button variant="solid" className="btn-prestige w-full h-16 group">
                        Archive Inquiry
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
    <section id="next-project" className="py-48 bg-surface border-y border-linen overflow-hidden group relative z-10">
      <div className="container text-center space-y-8">
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
