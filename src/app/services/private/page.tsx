'use client';

import React from 'react';
import { 
  Heart, 
  ArrowRight, 
  MessageCircle, 
  Camera, 
  Sparkles,
  Star
} from 'lucide-react';
import { Card } from '@/components/atoms/Card';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { Gallery } from '@/components/molecules/Gallery';
import { MaskSlideImage } from '@/components/molecules/MaskSlideImage';
import { generateWhatsAppLink } from '@/lib/whatsapp';

const privateFeatures = [
  { title: 'Venue Scouting', description: 'Access to the worlds most exclusive estates, private islands, and historic villas.' },
  { title: 'Bespoke Decor', description: 'Artisanal design that reflects your unique narrative. Every element custom-crafted.' },
  { title: 'Fine Dining', description: 'Curated culinary journeys with worlds leading chefs and sommeliers.' },
  { title: 'Entertainment', description: 'Private performances and immersive experiences tailored to your guest list.' }
];

const galleryItems = [
  { id: 1, title: 'Lake Como Wedding', category: 'Wedding', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800', size: 'large' as const },
  { id: 2, title: 'The Monaco Gala', category: 'Gala', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Private Island Party', category: 'Celebration', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800' },
];

export default function PrivateServicesPage() {
  const WHATSAPP_LINK = generateWhatsAppLink('Private Celebrations', 'Booking');

  return (
    <main className="min-h-screen bg-bg-main pt-32 pb-24 px-8">
      <div className="container max-w-[1440px] space-y-32">
        
        {/* Editorial Service Header */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center border-b border-border-subtle pb-32">
          <div className="space-y-12">
            <div className="space-y-6">
              <Badge variant="gold" dot>02 / Services</Badge>
              <h1 className="text-6xl md:text-[7rem] font-bold tracking-tight text-white leading-[0.9]">
                Private<br/><span className="text-secondary italic font-light">Opulence.</span>
              </h1>
            </div>
            <p className="text-xl text-text-moss font-sans font-light leading-relaxed max-w-xl">
              Celebrating lifes most precious milestones with unparalleled elegance. 
              Our private concierge team crafts experiences that become lasting family legacies.
            </p>
            <div className="pt-4 flex flex-wrap gap-6">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="gold" size="lg" className="h-16 px-10 text-lg font-serif">Plan Your Event</Button>
              </a>
              <Button variant="outline" size="lg" className="h-16 px-10 text-lg font-serif">The Collection</Button>
            </div>
          </div>
          <MaskSlideImage 
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200" 
            alt="Private" 
            aspectRatio="aspect-[4/5]"
            className="border border-border-subtle"
          />
        </section>

        {/* The Prestige Standard */}
        <section className="space-y-24">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Badge variant="outline">The Experience</Badge>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Flawless Artistry.<br/><span className="italic font-light text-secondary">Timeless Memories.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privateFeatures.map((f, i) => (
              <Card key={i} sharp className="p-10 space-y-8 bg-bg-surface border-border-subtle hover:border-secondary transition-all duration-700 group">
                <div className="p-4 bg-secondary/10 text-secondary rounded-full w-fit group-hover:bg-secondary group-hover:text-bg-main transition-colors duration-500">
                  <Star size={24} />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold font-serif">{f.title}</h4>
                  <p className="text-base text-text-moss font-sans font-light leading-relaxed">{f.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-32">
          <Card sharp className="bg-bg-surface border-secondary/20 p-16 md:p-32 flex flex-col items-center text-center space-y-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="space-y-6 z-10">
              <Badge variant="gold" dot>Private Inquiries</Badge>
              <h2 className="text-5xl md:text-8xl font-bold tracking-tight">Your Journey <span className="italic font-light text-secondary">Begins</span>.</h2>
              <p className="text-xl text-text-moss font-sans font-light leading-relaxed max-w-2xl mx-auto">
                Discuss your vision with our senior design leads. We offer absolute 
                discretion and absolute perfection for your private celebration.
              </p>
            </div>

            <div className="pt-8 z-10">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg" className="h-20 px-16 text-xl rounded-full" leftIcon={<MessageCircle size={28} />}>
                  Connect via WhatsApp
                </Button>
              </a>
            </div>
          </Card>
        </section>

      </div>
    </main>
  );
}
