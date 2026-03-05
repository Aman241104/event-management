'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, Filter, Calendar, MapPin, Users, ArrowRight, Camera, Sparkles } from 'lucide-react';
import { Card } from '@/components/atoms/Card';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { Input } from '@/components/atoms/Input';
import Link from 'next/link';

const events = [
  {
    id: 1,
    title: 'The Future Tech Summit',
    subtitle: 'Innovation & Excellence',
    date: 'March 15, 2026',
    location: 'San Francisco, CA',
    attendees: '1.2k',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800',
    status: 'Upcoming',
    featured: true,
  },
  {
    id: 2,
    title: 'Private Estate Gala',
    subtitle: 'The Summer Collection',
    date: 'April 12, 2026',
    location: 'Hamptons, NY',
    attendees: '200',
    category: 'Private',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
    status: 'Exclusive',
    featured: false,
  },
  {
    id: 3,
    title: 'Symphony Under Stars',
    subtitle: 'A Night of Elegance',
    date: 'May 24, 2026',
    location: 'Lake Como, IT',
    attendees: '500',
    category: 'Concert',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800',
    status: 'Upcoming',
    featured: true,
  },
  {
    id: 4,
    title: 'Executive Retreat 2026',
    subtitle: 'Strategy & Seclusion',
    date: 'June 08, 2026',
    location: 'St. Moritz, CH',
    attendees: '50',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=800',
    status: 'Private',
    featured: false,
  },
];

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main className="min-h-screen bg-bg-main pt-32 pb-24 px-8">
      {/* Editorial Header */}
      <section className="container max-w-[1440px] space-y-16 mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-border-subtle pb-12">
          <div className="space-y-6">
            <Badge variant="gold" dot>The Archive</Badge>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-none">
              Curated <span className="text-secondary italic">Portfolio</span>.
            </h1>
            <p className="text-xl text-text-moss font-sans font-light leading-relaxed max-w-2xl">
              Explore our high-fidelity collection of global summits, private celebrations, 
              and immersive stage productions.
            </p>
          </div>
          <div className="w-full md:w-96">
            <Input 
              placeholder="Search Archives..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={<Search size={18} />}
            />
          </div>
        </div>
      </section>

      {/* Events Grid (Editorial Style) */}
      <section className="container max-w-[1440px] px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {events.map((event) => (
            <div key={event.id} className="group cursor-pointer">
              <Link href={`/events/${event.id}`}>
                <div className="space-y-8">
                  <div className="relative aspect-[16/10] overflow-hidden border border-border-subtle group-hover:border-secondary transition-colors duration-700">
                    <Image 
                      src={event.image} 
                      alt={event.title} 
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {event.featured && (
                      <div className="absolute top-6 left-6">
                        <Badge variant="ivory" dot>Featured Legacy</Badge>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-bg-main/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <Button variant="gold" size="icon" className="rounded-full h-16 w-16">
                        <ArrowRight size={24} />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
                          {event.category}
                        </span>
                        <div className="w-1 h-1 bg-border-subtle rounded-full" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-moss">
                          {event.status}
                        </span>
                      </div>
                      <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-none group-hover:text-secondary transition-colors">
                        {event.title}<span className="text-secondary opacity-0 group-hover:opacity-100 ml-1">.</span>
                      </h3>
                      <p className="text-lg font-serif italic text-text-moss/70">{event.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 pt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-text-moss border-t border-border-subtle group-hover:border-secondary transition-colors duration-700">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-secondary" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-secondary" />
                      {event.location}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-32 flex flex-col items-center gap-8">
          <div className="w-px h-24 bg-gradient-to-b from-secondary to-transparent" />
          <Button variant="outline" size="lg" className="px-16 h-16 rounded-none sm:rounded-none">
            Load Archives
          </Button>
        </div>
      </section>
    </main>
  );
}
