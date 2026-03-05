'use client';

import React from 'react';
import { 
  Briefcase, 
  ArrowRight, 
  MessageCircle, 
  Monitor, 
  Users, 
  TrendingUp, 
  Camera, 
  Award,
  Sparkles
} from 'lucide-react';
import { Card } from '@/components/atoms/Card';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { Gallery } from '@/components/molecules/Gallery';
import { MaskSlideImage } from '@/components/molecules/MaskSlideImage';
import { generateWhatsAppLink } from '@/lib/whatsapp';

const corporateFeatures = [
  { title: 'Global Logistics', description: 'Invisible precision in managing multi-city summits and high-fidelity retreats.' },
  { title: 'Thematic Branding', description: 'Editorial-grade brand integration across all physical and digital touchpoints.' },
  { title: 'Production Design', description: 'Cinematic sound, lighting, and stage orchestration for maximum prestige.' },
  { title: 'Elite Hospitality', description: 'Michelin-starred culinary experiences tailored to your corporate legacy.' }
];

const galleryItems = [
  { id: 1, title: 'Annual Tech Summit', category: 'Conference', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800', size: 'large' as const },
  { id: 2, title: 'London Board Meeting', category: 'Private', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Executive Retreat', category: 'Offsite', image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800' },
];

export default function CorporateServicesPage() {
  const WHATSAPP_LINK = generateWhatsAppLink('Corporate Galas', 'Booking');

  return (
    <main className="min-h-screen bg-bg-main pt-32 pb-24 px-8">
      <div className="container max-w-[1440px] space-y-32">
        
        {/* Editorial Service Header */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center border-b border-border-subtle pb-32">
          <div className="space-y-12">
            <div className="space-y-6">
              <Badge variant="gold" dot>01 / Services</Badge>
              <h1 className="text-6xl md:text-[7rem] font-bold tracking-tight text-white leading-[0.9]">
                Corporate<br/><span className="text-secondary italic font-light">Legacy.</span>
              </h1>
            </div>
            <p className="text-xl text-text-moss font-sans font-light leading-relaxed max-w-xl">
              Engineering high-fidelity environments for the world's most innovative 
              organizations. We transform corporate gatherings into historic milestones.
            </p>
            <div className="pt-4 flex flex-wrap gap-6">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="gold" size="lg" className="h-16 px-10 text-lg font-serif">Secure a Booking</Button>
              </a>
              <Button variant="outline" size="lg" className="h-16 px-10 text-lg font-serif">View Portfolio</Button>
            </div>
          </div>
          <MaskSlideImage 
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200" 
            alt="Corporate" 
            aspectRatio="aspect-square"
            className="border border-border-subtle"
          />
        </section>

        {/* The Prestige Advantage */}
        <section className="space-y-24">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Badge variant="outline">The Difference</Badge>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Absolute Control.<br/><span className="italic font-light text-secondary">Absolute Prestige.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {corporateFeatures.map((f, i) => (
              <Card key={i} sharp className="p-10 space-y-8 bg-bg-surface border-border-subtle hover:border-secondary transition-all duration-700 group">
                <div className="p-4 bg-secondary/10 text-secondary rounded-full w-fit group-hover:bg-secondary group-hover:text-bg-main transition-colors duration-500">
                  <Sparkles size={24} />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold font-serif">{f.title}</h4>
                  <p className="text-base text-text-moss font-sans font-light leading-relaxed">{f.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Showcase Gallery */}
        <section className="space-y-16 pt-32 border-t border-border-subtle">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-border-subtle pb-12">
            <div className="space-y-6">
              <Badge variant="ivory">Case Studies</Badge>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight">The <span className="italic font-light">Evidence</span>.</h2>
            </div>
            <Button variant="outline" rightIcon={<Camera size={16} />}>Archive View</Button>
          </div>
          <Gallery items={galleryItems} />
        </section>

        {/* Concierge CTA */}
        <section className="py-32">
          <Card sharp className="bg-bg-surface border-secondary/20 p-16 md:p-32 flex flex-col items-center text-center space-y-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="space-y-6 z-10">
              <Badge variant="gold" dot>Concierge Service</Badge>
              <h2 className="text-5xl md:text-8xl font-bold tracking-tight">Ready to <span className="italic font-light text-secondary">Orchestrate</span>?</h2>
              <p className="text-xl text-text-moss font-sans font-light leading-relaxed max-w-2xl mx-auto">
                Connect with our private agents to begin the design of your corporate legacy. 
                Absolute fidelity from the first message.
              </p>
            </div>

            <div className="pt-8 z-10">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg" className="h-20 px-16 text-xl rounded-full" leftIcon={<MessageCircle size={28} />}>
                  Consult via WhatsApp
                </Button>
              </a>
            </div>
          </Card>
        </section>

      </div>
    </main>
  );
}
