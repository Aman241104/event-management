'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Clock, 
  MapPin, 
  Search, 
  Filter,
  ArrowRight,
  Monitor,
  Mic,
  Sparkles,
  Camera
} from 'lucide-react';
import { Card } from '@/components/atoms/Card';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { Input } from '@/components/atoms/Input';
import { cn } from '@/lib/utils';

const scheduleData = [
  {
    time: '09:00',
    ampm: 'AM',
    title: 'The Future of Edge Computing',
    subtitle: 'Opening Keynote Reveal',
    speaker: 'Guillermo Rauch',
    location: 'Main Auditorium',
    type: 'Keynote',
    duration: '60 min',
    status: 'Live',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
  },
  {
    time: '10:15',
    ampm: 'AM',
    title: 'Deep Dive into Design Tokens',
    subtitle: 'Editorial Systems Masterclass',
    speaker: 'Sarah Drasner',
    location: 'Theater B',
    type: 'Session',
    duration: '45 min',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
  },
  {
    time: '11:00',
    ampm: 'AM',
    title: 'Core Web Vitals in 2026',
    subtitle: 'Technical Excellence Panel',
    speaker: 'Addy Osmani',
    location: 'Main Auditorium',
    type: 'Workshop',
    duration: '90 min',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
  },
  {
    time: '01:45',
    ampm: 'PM',
    title: 'Modern CSS Layouts',
    subtitle: 'The Art of the Editorial Web',
    speaker: 'Jen Simmons',
    location: 'Theater C',
    type: 'Session',
    duration: '45 min',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
  },
];

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-bg-main pt-32 pb-24 px-8">
      <div className="container max-w-[1440px] space-y-16">
        {/* Prestige Schedule Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-border-subtle pb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Badge variant="gold" dot>Timeline</Badge>
              <Badge variant="outline" size="sm">March 15, 2026</Badge>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-none">
              The <span className="text-secondary italic">Itinerary</span>.
            </h1>
            <p className="text-xl text-text-moss font-sans font-light leading-relaxed max-w-2xl">
              A curated timeline of sessions, keynotes, and private networking events. 
              Experience the masterclass of high-fidelity orchestration.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-px h-16 bg-border-subtle hidden md:block mr-4" />
            <div className="text-right">
              <p className="text-xs font-bold uppercase tracking-widest text-secondary">Current Status</p>
              <p className="text-2xl font-serif font-bold text-white italic">Live Broadcast Active</p>
            </div>
          </div>
        </header>

        {/* Day Selector (Editorial Style) */}
        <div className="flex items-center justify-between border-b border-border-subtle pb-8">
          <div className="flex gap-12">
            {['The Opening', 'The Deep Dive', 'The Finale'].map((day, i) => (
              <button key={i} className={cn(
                "group relative pb-8 text-lg font-serif transition-colors",
                i === 0 ? "text-secondary font-bold" : "text-text-moss hover:text-text-primary"
              )}>
                Day 0{i + 1} <span className="text-xs font-sans uppercase tracking-widest ml-2 opacity-60 group-hover:opacity-100 transition-opacity">/ {day}</span>
                {i === 0 && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary" />}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <div className="w-64">
              <Input placeholder="Filter Timeline..." icon={<Search size={16} />} />
            </div>
            <Button variant="outline" size="icon" className="h-12 w-12 border-secondary/20 hover:border-secondary transition-all"><Filter size={18} /></Button>
          </div>
        </div>

        {/* Schedule Timeline */}
        <div className="space-y-4">
          {scheduleData.map((item, i) => (
            <div key={i} className="group relative">
              <Card sharp className="p-0 bg-bg-surface/20 border-border-subtle hover:border-secondary transition-all duration-700">
                <div className="flex flex-col md:flex-row items-stretch">
                  
                  {/* Time Block */}
                  <div className="md:w-64 p-10 border-b md:border-b-0 md:border-r border-border-subtle flex flex-col justify-center items-center text-center space-y-2 group-hover:bg-bg-surface/40 transition-colors">
                    <h3 className="text-5xl font-bold font-serif text-text-primary tracking-tighter">
                      {item.time}<span className="text-lg text-secondary ml-1">{item.ampm}</span>
                    </h3>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-moss">{item.duration}</p>
                  </div>

                  {/* Content Block */}
                  <div className="flex-grow p-10 flex flex-col md:flex-row justify-between gap-12">
                    <div className="space-y-8 max-w-2xl">
                      <div className="flex items-center gap-4">
                        <Badge variant={item.type === 'Keynote' ? 'gold' : 'emerald'} size="sm">{item.type}</Badge>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-moss">
                          <MapPin size={14} className="text-secondary" />
                          {item.location}
                        </div>
                        {item.status === 'Live' && <Badge variant="ivory" dot className="animate-pulse">Active Session</Badge>}
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="text-4xl font-bold tracking-tight text-text-primary group-hover:text-secondary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-lg font-serif italic text-text-moss/70">{item.subtitle}</p>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="relative w-12 h-12 rounded-full border border-secondary/30 overflow-hidden p-0.5 shrink-0">
                          <Image 
                            src={item.image} 
                            alt={item.speaker} 
                            fill
                            className="object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-700" 
                          />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-text-primary font-serif">{item.speaker}</p>
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-moss italic">Featured Presenter</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row md:flex-col items-center md:items-end justify-center gap-6">
                      <Button variant="outline" className="h-16 px-10 rounded-none sm:rounded-none group-hover:border-secondary transition-all">
                        Archive
                      </Button>
                      <Button variant={item.status === 'Live' ? 'gold' : 'outline'} className="h-16 px-10 rounded-none sm:rounded-none min-w-[180px]">
                        {item.status === 'Live' ? 'Enter Stream' : 'Reserve Spot'}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Concierge Support Footer */}
        <section className="pt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border-subtle">
          <div className="space-y-6">
            <div className="p-4 bg-secondary/10 text-secondary rounded-full w-fit"><Monitor size={24} /></div>
            <h4 className="text-2xl font-bold font-serif italic text-white">Cinematic Streaming</h4>
            <p className="text-base text-text-moss font-sans font-light leading-relaxed">
              All sessions are broadcast in high-fidelity 4K with private audio channels for a premium remote experience.
            </p>
          </div>
          <div className="space-y-6">
            <div className="p-4 bg-secondary/10 text-secondary rounded-full w-fit"><Mic size={24} /></div>
            <h4 className="text-2xl font-bold font-serif italic text-white">Private Green Room</h4>
            <p className="text-base text-text-moss font-sans font-light leading-relaxed">
              Gain exclusive access to post-keynote dialogues with speakers via our digital green room concierge.
            </p>
          </div>
          <div className="space-y-6">
            <div className="p-4 bg-secondary/10 text-secondary rounded-full w-fit"><Sparkles size={24} /></div>
            <h4 className="text-2xl font-bold font-serif italic text-white">Personal Itinerary</h4>
            <p className="text-base text-text-moss font-sans font-light leading-relaxed">
              Sync your schedule with your private agent to receive custom notifications and venue logistics.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
