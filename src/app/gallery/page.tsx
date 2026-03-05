'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Gallery } from '@/components/molecules/Gallery';
import { TextReveal } from '@/components/atoms/TextReveal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const galleryItems = [
  { id: 1, title: 'The Tuscan Villa', category: 'Weddings', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200', size: 'large' as const },
  { id: 2, title: 'Botanical Symphony', category: 'Design', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Minimalist Mandap', category: 'Tradition', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Curated Dining', category: 'Hospitality', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800', size: 'medium' as const },
  { id: 5, title: 'The Glasshouse', category: 'Venue', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Ambient Lighting', category: 'Production', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800' },
  { id: 7, title: 'Acoustic Strings', category: 'Entertainment', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200', size: 'medium' as const },
  { id: 8, title: 'Corporate Gala', category: 'Corporate', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800' },
  { id: 9, title: 'Intimate Gathering', category: 'Private Events', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800' },
];

const categories = ['All', 'Weddings', 'Corporate', 'Private Events', 'Entertainment', 'Production'];

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
      delay: 0.2
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-bg-main pt-32 pb-24">
      
      {/* Header */}
      <section id="header" className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="header-fade block text-[10px] uppercase tracking-[0.4em] text-text-secondary">Journal</span>
          <TextReveal 
            as="h1" 
            text="The Archives." 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[7rem] font-serif tracking-tight text-text-primary leading-[1.1] font-light" 
          />
          <p className="header-fade text-lg md:text-xl text-text-secondary font-light leading-relaxed max-w-2xl mx-auto pt-6">
            A curated selection of our most exquisite commissions, showcasing our dedication to fine art event design.
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <section id="filter" className="container mx-auto px-6 pb-16">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 border-b border-border-subtle pb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-[10px] font-sans font-medium uppercase tracking-[0.2em] pb-2 transition-colors duration-500
                ${activeCategory === category 
                  ? 'text-primary border-b border-primary' 
                  : 'text-text-secondary hover:text-primary'}
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
      <section id="cta" className="py-32 mt-32 bg-bg-surface border-t border-border-subtle">
        <div className="container mx-auto text-center space-y-10">
          <h2 className="text-3xl md:text-5xl font-serif text-text-primary font-light">
            Envision your own <i className="text-primary">Masterpiece?</i>
          </h2>
          <Link href="/contact" className="inline-block">
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-text-secondary border-b border-text-secondary pb-1 hover:text-primary hover:border-primary transition-colors duration-500">Contact The Agency</span>
          </Link>
        </div>
      </section>

    </main>
  );
}
