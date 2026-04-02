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
    image: "/hero-1.jpg",
    description: "The premier event for technology leaders and innovators. Future Tech Summit 2026 brings together the brightest minds in AI, Edge Computing, and Sustainable Design.",
    fullDescription: `
      A masterclass in technical production and high-fidelity orchestration. This year's summit explored the intersection of human-centric design and the rapid evolution of artificial intelligence.
      
      We curated a series of immersive environments, custom stage architectures, and sensory mapping sessions that redefined the conference experience. Every logistical nuance was handled with our signature quiet precision.
    `,
    highlights: ["Global Keynotes", "Immersive Renders", "Sensory Mapping"],
    gallery: [
      { id: 1, title: 'Main Stage Reveal', category: 'Production', image: '/decor-1.jpg', size: 'large' as const },
      { id: 2, title: 'Breakout Session', category: 'Design', image: '/decor-2.jpg' },
      { id: 3, title: 'Networking Hub', category: 'Lounge', image: '/decor-3.jpg' },
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
    <main ref={containerRef} className="min-h-screen bg-canvas pt-24 pb-16 selection:bg-heritage selection:text-canvas relative transition-colors duration-1000">
      <div className="side-label text-heritage/20">0{id} / PROJECT RECORD — {event.category}</div>
      <div className="side-label-right text-heritage/20">{event.location} / {event.coordinates}</div>

      {/* Editorial Header */}
      <section id="header" className="container mb-16">
        <div className="flex flex-col space-y-10">
          <Link href="/gallery" className="header-fade text-[10px] uppercase tracking-[0.5em] text-heritage hover:text-text-primary transition-colors group inline-flex items-center gap-3">
            <ArrowLeft size={12} className="group-hover:-translate-x-1.5 transition-transform" />
            Return to Archive
          </Link>
          
          <div className="space-y-4">
            <div className="header-fade flex items-center gap-3">
              <Badge variant="solid" dot className="bg-heritage/10 text-heritage border-heritage/20 text-[10px] py-1 px-4">Commissioned Archive</Badge>
              <span className="text-[10px] font-mono text-heritage/40">REF: ZB_PRJ_{id.padStart(3, '0')}</span>
            </div>
            
            <TextReveal 
              as="h1" 
              text={event.title} 
              className="text-5xl md:text-[7rem] lg:text-[8.5rem] font-serif tracking-tighter text-text-primary leading-[0.85] font-bold" 
            />
            
            <p className="header-fade text-lg md:text-2xl font-serif italic text-heritage/60 max-w-2xl">
              {event.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section id="image" className="container mb-20 fade-up relative group">
        <div className="absolute -inset-16 bg-heritage/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        <div className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden arch-mask shadow-2xl border border-linen z-10">
          <ParallaxImage 
            src={event.image} 
            alt={event.title} 
            speed={0.15}
            aspectRatio="aspect-auto"
            containerClassName="h-full w-full"
            priority
          />
          <div className="absolute bottom-8 left-8 z-20 hidden md:block">
            <div className="bg-canvas/80 backdrop-blur-md p-5 border border-linen shadow-sm space-y-1">
              <p className="text-[9px] font-mono uppercase tracking-widest text-heritage/40">Primary Capture</p>
              <p className="text-[11px] font-bold text-text-primary uppercase tracking-[0.2em]">{event.location} — Archive 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section id="content" className="container py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-8 space-y-24">
            {/* The Narrative */}
            <div className="space-y-10 fade-up">
              <div className="flex items-center gap-4">
                <span className="w-12 h-[1px] bg-heritage"></span>
                <span className="text-heritage font-bold uppercase tracking-[0.4em] text-[10px]">The Narrative</span>
              </div>
              <div className="space-y-10">
                <TextReveal
                  as="h2"
                  text={event.description}
                  className="text-xl md:text-4xl font-serif text-text-primary font-bold leading-tight tracking-tight italic"
                />
                <div className="w-full h-px bg-linen opacity-30" />
                <p className="text-lg text-text-secondary font-sans font-light leading-relaxed max-w-3xl whitespace-pre-line first-letter:text-4xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-heritage">
                  {event.fullDescription}
                </p>
              </div>
            </div>

            {/* Technical Record Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-16 border-y border-linen fade-up">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Cpu size={18} className="text-heritage" strokeWidth={1} />
                  <h4 className="text-[9px] font-mono font-bold uppercase tracking-[0.4em] text-heritage/60">Gear Specifications</h4>
                </div>
                <ul className="space-y-3">
                  {event.gear?.map((item, i) => (
                    <li key={i} className="flex items-center justify-between group">
                      <span className="text-[13px] font-sans text-text-secondary">{item}</span>
                      <span className="w-6 h-[1px] bg-linen group-hover:bg-heritage transition-colors"></span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Users size={18} className="text-heritage" strokeWidth={1} />
                  <h4 className="text-[9px] font-mono font-bold uppercase tracking-[0.4em] text-heritage/60">Vendor Partners</h4>
                </div>
                <ul className="space-y-3">
                  {event.vendors?.map((item, i) => (
                    <li key={i} className="flex items-center justify-between group">
                      <span className="text-[13px] font-sans text-text-secondary">{item}</span>
                      <span className="w-6 h-[1px] bg-linen group-hover:bg-heritage transition-colors"></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Gallery */}
            <div className="space-y-12 pt-20 fade-up">
              <div className="flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-[0.5em] text-heritage">Visual Record</span>
                <h3 className="text-3xl font-serif font-bold text-text-primary tracking-tight italic">Captured <span className="text-heritage italic font-light">Moments</span></h3>
              </div>
              <Gallery items={event.gallery} />
            </div>
          </div>

          {/* Sidebar Info - Technical Metadata */}
          <div className="lg:col-span-4 fade-up">
            <div className="sticky top-32 space-y-12 p-10 border border-linen bg-surface/40 backdrop-blur-xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 dot-pattern opacity-[0.03] pointer-events-none" />
              
              <div className="space-y-8 relative z-10">
                <h4 className="text-[9px] font-sans font-bold uppercase tracking-[0.5em] text-heritage pb-3 border-b border-linen">Project Specifications</h4>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <Calendar size={16} className="text-heritage mt-1" strokeWidth={1} />
                    <div className="space-y-1">
                      <span className="text-[8px] uppercase tracking-widest text-text-secondary font-bold">Commission Date</span>
                      <p className="text-lg font-serif text-text-primary font-bold italic">{event.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin size={16} className="text-heritage mt-1" strokeWidth={1} />
                    <div className="space-y-1">
                      <span className="text-[8px] uppercase tracking-widest text-text-secondary font-bold">Primary Coordinates</span>
                      <p className="text-lg font-serif text-text-primary font-bold italic">{event.location}</p>
                      <p className="text-[10px] font-mono text-heritage/60">{event.coordinates}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Layers size={16} className="text-heritage mt-1" strokeWidth={1} />
                    <div className="space-y-1">
                      <span className="text-[8px] uppercase tracking-widest text-text-secondary font-bold">Scale of Inquiry</span>
                      <p className="text-lg font-serif text-text-primary font-bold italic">{event.attendees}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Zap size={16} className="text-heritage mt-1" strokeWidth={1} />
                    <div className="space-y-1">
                      <span className="text-[8px] uppercase tracking-widest text-text-secondary font-bold">Ref No.</span>
                      <p className="text-lg font-serif text-text-primary font-bold italic">ZB_PRJ_{id.padStart(3, '0')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8 pt-8 border-t border-linen relative z-10">
                <p className="text-[11px] text-text-secondary font-sans font-light leading-relaxed italic">
                  &quot;The architecture of an event is built on the silent orchestration of details.&quot;
                </p>
                <div className="flex flex-col gap-4">
                  <Magnetic strength={0.2}>
                    <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                      <Button variant="solid" className="btn-prestige w-full h-14 text-[9px] group">
                        Archive Inquiry
                        <MoveRight className="ml-3 w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                      </Button>
                    </a>
                  </Magnetic>
                  <button className="text-[9px] uppercase tracking-[0.4em] text-heritage font-bold flex items-center justify-center gap-3 group">
                    <span className="w-6 h-px bg-heritage/30 group-hover:bg-heritage transition-all" />
                    Share Project Record
                    <Share2 size={10} className="ml-1.5" />
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
    <section id="next-project" className="py-24 bg-heritage-soft border-y border-linen overflow-hidden group relative z-10">
      <div className="container text-center space-y-6">
        <span className="text-[10px] font-mono text-heritage/60 uppercase tracking-[0.5em]">Upcoming Narrative</span>
        <Link href="/events/1" className="block">
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold text-text-primary tracking-tighter leading-none group-hover:text-heritage transition-colors duration-700 italic">
            Next <span className="italic font-light">Legacy.</span>
          </h2>
        </Link>
        <div className="pt-8">
           <Link href="/gallery">
             <Button variant="outline" className="btn-outline-prestige px-12 h-14 text-[10px]">Return to Archive</Button>
           </Link>
        </div>
      </div>
    </section>
  );
}
