'use client';

import React from 'react';
import { 
  Music, 
  ArrowRight, 
  MessageCircle, 
  Camera, 
  Sparkles,
  Monitor,
  Mic
} from 'lucide-react';
import { Card } from '@/components/atoms/Card';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { Gallery } from '@/components/molecules/Gallery';
import { MaskSlideImage } from '@/components/molecules/MaskSlideImage';
import { generateWhatsAppLink } from '@/lib/whatsapp';

const concertFeatures = [
  { title: 'Arena Orchestration', description: 'Complete technical management for global tours and large-scale arena productions.' },
  { title: 'Immersive AV', description: 'State-of-the-art visual systems and high-fidelity acoustics for an unparalleled auditory experience.' },
  { title: 'Artist Relations', description: 'Elite concierge services for performers and management, ensuring absolute privacy and comfort.' },
  { title: 'Crowd Safety', description: 'Invisible security and flow management for a seamless guest experience from entrance to exit.' }
];

const galleryItems = [
  { id: 1, title: 'Symphony Under Stars', category: 'Live', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800', size: 'large' as const },
  { id: 2, title: 'Neon Night Paris', category: 'Concert', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Electronic Reveal', category: 'Showcase', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800' },
];

export default function ConcertServicesPage() {
  const WHATSAPP_LINK = generateWhatsAppLink('Concerts & Shows', 'Booking');

  return (
    <main className="min-h-screen bg-bg-main pt-32 pb-24 px-8">
      <div className="container max-w-[1440px] space-y-32">
        
        {/* Editorial Service Header */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center border-b border-border-subtle pb-32">
          <div className="space-y-12">
            <div className="space-y-6">
              <Badge variant="gold" dot>03 / Services</Badge>
              <h1 className="text-6xl md:text-[7rem] font-bold tracking-tight text-white leading-[0.9]">
                Live<br/><span className="text-secondary italic font-light">Spectacle.</span>
              </h1>
            </div>
            <p className="text-xl text-text-moss font-sans font-light leading-relaxed max-w-xl">
              Engineering high-energy live performances with cinematic precision. 
              We handle the complex orchestration of sound, light, and safety to create 
              unforgettable arena-grade experiences.
            </p>
            <div className="pt-4 flex flex-wrap gap-6">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="gold" size="lg" className="h-16 px-10 text-lg font-serif">Inquire for Tour</Button>
              </a>
              <Button variant="outline" size="lg" className="h-16 px-10 text-lg font-serif">Showreel</Button>
            </div>
          </div>
          <MaskSlideImage 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200" 
            alt="Concert" 
            aspectRatio="aspect-video"
            className="border border-border-subtle"
          />
        </section>

        {/* Technical Mastery */}
        <section className="space-y-24">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Badge variant="outline">The Tech Stack</Badge>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Cinematic Impact.<br/><span className="italic font-light text-secondary">Invisible Precision.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {concertFeatures.map((f, i) => (
              <Card key={i} sharp className="p-10 space-y-8 bg-bg-surface border-border-subtle hover:border-secondary transition-all duration-700 group">
                <div className="p-4 bg-secondary/10 text-secondary rounded-full w-fit group-hover:bg-secondary group-hover:text-bg-main transition-colors duration-500">
                  <Monitor size={24} />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold font-serif">{f.title}</h4>
                  <p className="text-base text-text-moss font-sans font-light leading-relaxed">{f.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Global CTA */}
        <section className="py-32">
          <Card sharp className="bg-bg-surface border-secondary/20 p-16 md:p-32 flex flex-col items-center text-center space-y-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="space-y-6 z-10">
              <Badge variant="gold" dot>Artist Services</Badge>
              <h2 className="text-5xl md:text-8xl font-bold tracking-tight">The Stage is <span className="italic font-light text-secondary">Yours</span>.</h2>
              <p className="text-xl text-text-moss font-sans font-light leading-relaxed max-w-2xl mx-auto">
                Our technical leads are ready to engineer your next global tour. 
                Absolute fidelity, from sound-check to standing ovation.
              </p>
            </div>

            <div className="pt-8 z-10">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg" className="h-20 px-16 text-xl rounded-full" leftIcon={<MessageCircle size={28} />}>
                  Book Production
                </Button>
              </a>
            </div>
          </Card>
        </section>

      </div>
    </main>
  );
}
