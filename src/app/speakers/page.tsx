'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, Twitter, Github, Globe, ArrowUpRight, TrendingUp, Users, Award, Camera, Sparkles } from 'lucide-react';
import { Card } from '@/components/atoms/Card';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { Input } from '@/components/atoms/Input';

const speakers = [
  {
    id: 1,
    name: 'Sarah Drasner',
    role: 'VP of Engineering',
    company: 'Vercel',
    bio: 'An industry icon specializing in high-performance web applications and high-fidelity design systems.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    tags: ['Engineering', 'Design'],
    socials: { twitter: '#', github: '#', web: '#' },
    featured: true,
  },
  {
    id: 2,
    name: 'Addy Osmani',
    role: 'Engineering Manager',
    company: 'Google',
    bio: 'Architect of performance, ensuring the web remains a high-prestige platform for global experiences.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    tags: ['Performance', 'Web'],
    socials: { twitter: '#', github: '#', web: '#' },
    featured: true,
  },
  {
    id: 3,
    name: 'Lee Robinson',
    role: 'VP of Product',
    company: 'Next.js',
    bio: 'Leading the product strategy for the worlds most advanced React framework. Perfection in execution.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    tags: ['React', 'Product'],
    socials: { twitter: '#', github: '#', web: '#' },
    featured: false,
  },
  {
    id: 4,
    name: 'Jen Simmons',
    role: 'Design Advocate',
    company: 'Apple',
    bio: 'Revolutionizing the editorial web with modern browser layout technologies and high-end aesthetics.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    tags: ['CSS', 'Layout'],
    socials: { twitter: '#', github: '#', web: '#' },
    featured: false,
  },
];

export default function SpeakersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main className="min-h-screen bg-bg-main pt-32 pb-24 px-8">
      <div className="container max-w-[1440px] space-y-16">
        {/* Prestige Speakers Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-border-subtle pb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Badge variant="gold" dot>The Collective</Badge>
              <Badge variant="outline" size="sm">2026 Season</Badge>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-none">
              Global <span className="text-secondary italic">Visionaries</span>.
            </h1>
            <p className="text-xl text-text-moss font-sans font-light leading-relaxed max-w-2xl">
              Meet the minds engineering the future. An exclusive assembly of 
              industry leaders from the worlds most prestigious technology firms.
            </p>
          </div>
          <div className="w-full md:w-96">
            <Input 
              placeholder="Search Global Experts..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={<Search size={18} />}
            />
          </div>
        </header>

        {/* Speakers Grid (Editorial Feature Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <Card key={speaker.id} sharp isHoverable className="group p-0 bg-bg-surface/30 border-border-subtle flex flex-col h-full hover:border-secondary transition-all duration-700">
              <div className="relative aspect-square overflow-hidden border-b border-border-subtle group-hover:border-secondary transition-colors duration-700">
                <Image 
                  src={speaker.image} 
                  alt={speaker.name} 
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                {speaker.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="p-2 bg-secondary text-bg-main rounded-none">
                      <Sparkles size={16} />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-8 flex-grow space-y-6 flex flex-col">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-serif text-text-primary group-hover:text-secondary transition-colors">
                    {speaker.name}
                  </h3>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-moss">
                    {speaker.role} <span className="text-secondary ml-2">/ {speaker.company}</span>
                  </p>
                </div>

                <p className="text-sm text-text-moss/80 font-sans font-light leading-relaxed line-clamp-3">
                  {speaker.bio}
                </p>

                <div className="mt-auto pt-6 border-t border-border-subtle/30 flex items-center justify-between">
                  <div className="flex gap-4">
                    <Twitter size={14} className="text-text-moss hover:text-secondary cursor-pointer transition-colors" />
                    <Github size={14} className="text-text-moss hover:text-secondary cursor-pointer transition-colors" />
                  </div>
                  <Button variant="ghost" size="sm" className="px-0 uppercase tracking-widest text-[10px] group-hover:text-secondary" rightIcon={<ArrowUpRight size={14} />}>
                    Profile
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Exclusive Invitation */}
        <section className="py-32">
          <Card sharp className="bg-bg-surface border-secondary/20 p-16 md:p-24 flex flex-col items-center text-center space-y-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="space-y-6 z-10">
              <Badge variant="gold" dot>Speaker Invitation</Badge>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Share Your <span className="italic font-light text-secondary">Genius</span>.</h2>
              <p className="text-xl text-text-moss font-sans font-light leading-relaxed max-w-2xl mx-auto">
                We are currently curating the 2027 season. If you possess a high-fidelity 
                vision for the future, we invite you to submit a private proposal.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 z-10">
              <Button variant="gold" size="lg" className="px-16 h-20 text-lg font-serif">Submit Proposal</Button>
              <Button variant="outline" size="lg" className="px-16 h-20 text-lg font-serif">Request Terms</Button>
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
}
