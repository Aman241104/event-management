'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { 
  Calendar, 
  MapPin, 
  Users, 
  MessageCircle, 
  ArrowLeft, 
  Share2, 
  ShieldCheck, 
  Camera,
  Star,
  Clock,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/atoms/Card';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { Gallery } from '@/components/molecules/Gallery';
import { cn } from '@/lib/utils';
import { generateWhatsAppLink, getGenericWhatsAppLink } from '@/lib/whatsapp';

// Mock data for individual event details (Prestige Edition)
const eventDetails = {
  "1": {
    title: "The Future Tech Summit",
    subtitle: "Innovation & Excellence",
    date: "March 15-17, 2026",
    location: "San Francisco, CA",
    attendees: "1,200 Delegates",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2000",
    description: "The premier event for technology leaders and innovators. Future Tech Summit 2026 brings together the brightest minds in AI, Edge Computing, and Sustainable Design for three days of high-fidelity sessions, workshops, and networking.",
    fullDescription: `
      Experience the future of the web at the Future Tech Summit 2026. This year's summit focuses on the intersection of artificial intelligence and human-centric design. 
      
      We've curated a series of keynotes from industry leaders at Vercel, Google, and Apple. Attendees will have access to exclusive workshops, live stage productions, and a high-fidelity digital green room for speaker interactions.
      
      All booking and inquiries are handled directly via our private concierge portal to ensure a personalized experience for every partner.
    `,
    highlights: [
      "Keynotes from Fortune 500 VPs",
      "Hands-on AI Workshops",
      "Immersive Stage Production",
      "Networking Gala & AI Matchmaking"
    ],
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

  const WHATSAPP_LINK = generateWhatsAppLink(event.title, 'Info');

  return (
    <main className="min-h-screen bg-bg-main pt-24">
      {/* Cinematic Header (Full-Bleed) */}
      <section className="relative h-[85vh] flex items-end overflow-hidden border-b border-border-subtle">
        <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/30 to-transparent z-10" />
        <Image 
          src={event.image} 
          alt={event.title} 
          fill
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
          priority
        />
        <div className="container relative z-20 pb-20 px-8 space-y-12">
          <Link href="/events" className="inline-flex items-center gap-4 text-xs font-bold text-secondary hover:text-white transition-all uppercase tracking-[0.2em] group">
            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Back to Archive
          </Link>
          <div className="space-y-6 max-w-5xl">
            <div className="flex flex-wrap items-center gap-6">
              <Badge variant="gold" dot>Exclusive Event</Badge>
              <Badge variant="outline">{event.category}</Badge>
            </div>
            <h1 className="text-6xl md:text-[8rem] font-bold tracking-tight text-text-primary leading-[0.9]">
              {event.title}<span className="text-secondary">.</span>
            </h1>
            <p className="text-xl md:text-3xl font-serif italic text-text-primary/70">{event.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Editorial Content Grid */}
      <section className="container max-w-[1440px] py-32 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Main Story (8 Columns) */}
          <div className="lg:col-span-8 space-y-24">
            <div className="space-y-12">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight border-l-2 border-secondary pl-8">The <span className="italic font-light text-secondary">Experience</span>.</h2>
              <div className="space-y-8">
                <p className="text-xl md:text-2xl text-text-moss font-sans font-light leading-relaxed">
                  {event.description}
                </p>
                <div className="w-full h-px bg-gradient-to-r from-border-subtle to-transparent" />
                <p className="text-lg text-text-moss/80 leading-relaxed font-sans whitespace-pre-line">
                  {event.fullDescription}
                </p>
              </div>
            </div>

            {/* Prestige Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {event.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-6 p-8 bg-bg-surface/30 border border-border-subtle rounded-none group hover:border-secondary transition-colors duration-500">
                  <div className="p-4 bg-secondary/10 text-secondary rounded-full">
                    <Sparkles size={24} />
                  </div>
                  <span className="text-lg font-serif font-bold text-text-primary">{h}</span>
                </div>
              ))}
            </div>

            {/* Event Gallery (Cinematic) */}
            <div className="space-y-16 pt-24 border-t border-border-subtle">
              <div className="flex items-center justify-between">
                <h3 className="text-4xl font-bold flex items-center gap-6">
                  <Camera className="text-secondary" /> Visual Legacy
                </h3>
              </div>
              <Gallery items={event.gallery} />
            </div>
          </div>

          {/* Prestige Concierge Card (4 Columns) */}
          <div className="lg:col-span-4 space-y-8">
            <Card sharp className="sticky top-40 p-12 space-y-10 bg-bg-surface border-secondary/20 shadow-2xl shadow-secondary/5">
              <div className="space-y-6">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary border-b border-border-subtle pb-4">Concierge Info</h4>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-text-primary">
                    <Calendar size={20} className="text-secondary" />
                    <span className="text-lg font-serif">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-4 text-text-primary">
                    <MapPin size={20} className="text-secondary" />
                    <span className="text-lg font-serif">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-4 text-text-primary">
                    <Users size={20} className="text-secondary" />
                    <span className="text-lg font-serif">{event.attendees}</span>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-border-subtle/50 space-y-8">
                <p className="text-sm text-text-moss font-sans font-light leading-relaxed">
                  To ensure the highest level of service, all inquiries are handled by our dedicated 
                  concierge team via WhatsApp.
                </p>
                <div className="space-y-4">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="gold" className="w-full h-20 text-xl font-serif">
                      Message Concierge
                    </Button>
                  </a>
                  <Button variant="outline" className="w-full h-16 font-sans text-xs uppercase tracking-widest" leftIcon={<Share2 size={18} />}>
                    Share Archive
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 pt-4">
                <Badge variant="outline" size="sm">Prestige Edition</Badge>
                <Badge variant="outline" size="sm">Private</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Section CTA */}
      <section className="py-48 border-t border-border-subtle text-center space-y-12">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Plan Your <span className="italic font-light text-secondary text-7xl md:text-[8rem]">Legacy.</span></h2>
        <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer">
          <Button variant="whatsapp" size="lg" className="h-20 px-16 text-xl rounded-full" leftIcon={<MessageCircle size={28} />}>
            Contact Agency
          </Button>
        </a>
      </section>
    </main>
  );
}
