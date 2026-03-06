'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
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
          <Badge variant="solid" dot className="px-6 py-2 bg-secondary/10 text-secondary uppercase tracking-[0.3em] font-bold">Our Portfolio</Badge>
        </div>
        <TextReveal 
          as="h1" 
          text="The Visual Gallery." 
          className="text-6xl md:text-[9rem] font-serif tracking-tighter text-text-primary leading-[0.85] font-bold" 
        />
        <p className="header-fade text-xl md:text-2xl text-text-secondary font-sans font-light leading-relaxed max-w-3xl mx-auto pt-6">
          A curated collection of our most exquisite commissions, showcasing our dedication to professional event design and flawless execution.
        </p>
      </section>

      {/* Filter Navigation */}
      <section id="filter" className="container mx-auto px-6 pb-16">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-border-gold pb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-xs font-sans font-bold uppercase tracking-[0.3em] pb-2 transition-all duration-500
                ${activeCategory === category 
                  ? 'text-secondary border-b-2 border-secondary' 
                  : 'text-text-secondary hover:text-white'}
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section id="grid" className="container mx-auto px-6 min-h-[50vh]">
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
