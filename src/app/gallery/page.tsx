'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Gallery } from '@/components/molecules/Gallery';
import { TextReveal } from '@/components/atoms/TextReveal';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { ArrowRight } from 'lucide-react';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const galleryItems = [
  // Weddings
  { id: 1, title: 'Royal Palace Wedding', category: 'Weddings', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200', size: 'large' as const },
  { id: 2, title: 'Grand Mandap Design', category: 'Weddings', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Traditional Ceremonies', category: 'Weddings', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800' },
  
  // Birthdays
  { id: 4, title: 'Luxury 1st Birthday', category: 'Birthdays', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800', size: 'medium' as const },
  { id: 5, title: 'Milestone Celebration', category: 'Birthdays', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800' },
  
  // Corporate
  { id: 6, title: 'Global Tech Summit', category: 'Corporate', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200', size: 'medium' as const },
  { id: 7, title: 'Gala Dinner Evening', category: 'Corporate', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800' },
  
  // Festivals
  { id: 8, title: 'Cultural Heritage Festival', category: 'Festivals', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800' },
  { id: 9, title: 'Community Flea Market', category: 'Festivals', image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=800' },
];

const categories = ['All', 'Weddings', 'Birthdays', 'Corporate', 'Festivals'];

export default function GalleryPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  useGSAP(() => {
    gsap.from('.header-fade', {
      y: 30,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: 'power2.out',
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-bg-main pt-32 pb-24 selection:bg-secondary selection:text-bg-main">
      
      {/* Header */}
      <section id="header" className="container mx-auto px-6 py-24 md:py-32 text-center space-y-10">
        <div className="header-fade">
          <Badge variant="solid" dot className="px-6 py-2 bg-secondary/10 text-secondary uppercase tracking-[0.3em] font-bold">The Archive</Badge>
        </div>
        <TextReveal 
          as="h1" 
          text="Visualizing Your Legacy." 
          className="text-6xl md:text-[9rem] font-serif tracking-tighter text-text-primary leading-[0.85] font-bold" 
        />
        <p className="header-fade text-xl md:text-2xl text-text-secondary font-sans font-light leading-relaxed max-w-3xl mx-auto pt-6">
          A collection of our most iconic orchestrations. Each frame represents a dialogue between architectural precision and human emotion.
        </p>
      </section>

      {/* Highlights - Auto-play feel */}
      <section id="highlights" className="py-24 bg-bg-surface border-y border-border-gold overflow-hidden">
        <div className="container px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-up space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-secondary uppercase tracking-[0.5em]">Featured Orchestration</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight">Palace Grand <br/><span className="text-secondary italic font-light">Mandap Setup</span></h2>
            </div>
            <p className="text-lg text-text-secondary font-sans font-light leading-relaxed">
              A bespoke 60-foot architectural mandap created for an elite destination wedding in Udaipur. Built with hand-crafted motifs and atmospheric lighting.
            </p>
            <Link href="/events/1" className="inline-flex items-center gap-4 text-secondary hover:text-white transition-colors uppercase tracking-[0.3em] text-[10px] font-bold group">
              View Detailed Record <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="fade-up order-1 md:order-2">
            <div className="relative aspect-video md:aspect-[16/10] overflow-hidden arch-mask border border-border-gold shadow-2xl group">
              <Image 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200" 
                alt="Highlight Image" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section id="filter" className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-b border-border-gold pb-12">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-secondary">Collections</h3>
            <p className="text-2xl font-serif text-white font-bold tracking-tight italic">Filter the Narrative</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-[10px] font-sans font-bold uppercase tracking-[0.3em] pb-3 transition-all duration-500 relative group
                  ${activeCategory === category 
                    ? 'text-secondary' 
                    : 'text-text-secondary hover:text-white'}
                `}
              >
                {category}
                <span className={`absolute bottom-0 left-0 h-px bg-secondary transition-all duration-500 ${activeCategory === category ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section id="grid" className="container mx-auto px-6 min-h-[50vh] pb-32">
        <Gallery items={filteredItems} />
      </section>

      {/* CTA */}
      <section id="cta" className="py-32 mt-32 bg-bg-surface border-t border-border-gold relative overflow-hidden text-center space-y-12">
        <div className="absolute inset-0 dot-pattern opacity-[0.05] pointer-events-none" />
        <h2 className="text-4xl md:text-7xl font-serif font-bold text-text-primary">
          Want a <span className="text-secondary italic font-light">Fairytale</span> Celebration?
        </h2>
        <div className="pt-8">
          <Link href="/contact">
            <Button size="lg" className="h-20 px-16 text-xl btn-royal rounded-none font-bold shadow-2xl" rightIcon={<ArrowRight size={24} />}>
              Book Zing Bliss
            </Button>
          </Link>
        </div>
      </section>

    </main>
  );
}
