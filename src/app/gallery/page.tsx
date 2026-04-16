'use client';

import React, { useRef, useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Gallery } from '@/components/molecules/Gallery';
import { TextReveal } from '@/components/atoms/TextReveal';
import { Button } from '@/components/atoms/Button';
import { BackgroundFlourish } from '@/components/atoms/BackgroundFlourish';
import { SVGSpine } from '@/components/atoms/SVGSpine';
import { ArrowRight, Search, Sparkles, Star } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const FloatingMetric = ({ label, value, className }: { label: string, value: string, className?: string }) => (
  <div className={cn("absolute hidden lg:flex flex-col gap-1 items-center text-center opacity-40 hover:opacity-100 transition-opacity duration-1000 group z-10", className)}>
    <span className="text-[8px] font-mono uppercase tracking-[0.4em] text-heritage/60 group-hover:text-heritage transition-colors small-caps">{label}</span>
    <div className="h-px w-6 bg-heritage/20 group-hover:w-10 transition-all" />
    <span className="text-xl font-serif text-text-primary italic group-hover:text-heritage transition-colors">{value}</span>
  </div>
);

const SectionDivider = ({ className }: { className?: string }) => (
  <div className={cn("flex flex-col items-center gap-2 py-4 relative z-10", className)}>
    <div className="flex items-center gap-3">
      <Sparkles size={6} className="text-heritage/20" />
      <Star size={8} className="text-heritage/30" />
      <Sparkles size={6} className="text-heritage/20" />
    </div>
  </div>
);

const galleryItems = [
  { id: 1, title: 'Royal Palace Wedding', category: 'Weddings', image: '/decor-1.jpg', size: 'large' as const },
  { id: 2, title: 'Elegant Gala Design', category: 'Weddings', image: '/decor-2.jpg', size: 'medium' as const },
  { id: 3, title: 'Traditional Ceremonies', category: 'Weddings', image: '/decor-3.jpg', size: 'small' as const },
  { id: 4, title: 'Vibrant Sangeet Energy', category: 'Weddings', image: '/decor-4.jpg', size: 'medium' as const },
  { id: 5, title: 'Milestone Celebration', category: 'Birthdays', image: '/decor-5.jpg', size: 'tall' as const },
  { id: 6, title: 'Global Tech Summit', category: 'Corporate', image: '/hero-1.jpg', size: 'large' as const },
  { id: 7, title: 'Tropical Royal Decor', category: 'Design', image: '/hero-2.jpg', size: 'small' as const },
  { id: 8, title: 'Cultural Heritage', category: 'Festivals', image: '/hero-3.jpg', size: 'medium' as const },
  { id: 9, title: 'Vibrant Rituals', category: 'Festivals', image: '/hero-4.jpg', size: 'small' as const },
];

const categories = ['All', 'Weddings', 'Birthdays', 'Corporate', 'Festivals', 'Private'];

function GalleryContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const category = searchParams.get('category');
    if (category && categories.includes(category) && category !== activeCategory) {
      const timer = setTimeout(() => setActiveCategory(category), 0);
      return () => clearTimeout(timer);
    }
  }, [searchParams, activeCategory]);

  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useGSAP(() => {
    gsap.from('.header-fade', { y: 30, opacity: 0, duration: 1.5, stagger: 0.2, ease: 'power2.out' });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen pt-16 pb-12 transition-colors duration-1000 relative overflow-hidden">
      <SVGSpine height="6000px" viewBox="0 0 20 6000" pathD="M 10 0 L 10 6000" opacity={0.05} />
      
      {/* Header */}
      <section id="header" className="container py-16 md:py-24 text-center space-y-8">
        <div className="header-fade">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-heritage/60 small-caps">04 / THE ARCHIVE</span>
        </div>
        <TextReveal as="h1" text="Our Work." className="text-4xl md:text-[6.4rem] lg:text-[7.6rem] font-serif tracking-tighter text-text-primary leading-[0.85] font-bold" />
        <p className="header-fade text-lg md:text-xl text-text-secondary font-sans font-light max-w-3xl mx-auto pt-4">
          Browse through our past events and see how we bring beautiful moments to life.
        </p>
      </section>

      <SectionDivider />

      {/* Filter Navigation */}
      <section id="filter" className="container py-12 md:py-16">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-linen/50 pb-6">
            <div className="space-y-2 text-left">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-heritage/60 small-caps">COLLECTIONS</span>
              <h3 className="text-2xl md:text-3xl font-serif text-text-primary font-bold tracking-tight italic">Find Your Style</h3>
            </div>
            <div className="w-full md:w-[20rem] relative group">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-heritage/30 group-focus-within:text-heritage transition-colors duration-500" size={16} />
              <input type="text" placeholder="Search events..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-transparent border-b border-linen/50 py-3 pl-8 text-text-primary focus:border-heritage outline-none transition-all duration-500 font-sans placeholder:text-text-secondary/40 text-sm tracking-widest" />
            </div>
          </div>
          <div className="flex flex-wrap justify-start gap-x-10 gap-y-4">
            {categories.map((category) => (
              <button key={category} onClick={() => setActiveCategory(category)} className={`text-[10px] font-sans font-bold uppercase tracking-[0.4em] pb-2 transition-all duration-500 relative group ${activeCategory === category ? 'text-heritage' : 'text-text-secondary hover:text-text-primary'}`}>
                {category}
                <span className={`absolute bottom-0 left-0 h-[1.5px] bg-heritage transition-all duration-500 ${activeCategory === category ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Gallery Grid */}
      <section id="grid" className="container min-h-[50vh] pb-16 md:pb-24">
        {filteredItems.length > 0 ? (
          <Gallery items={filteredItems} className="gap-6 md:gap-8" />
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
            <p className="text-2xl font-serif text-heritage italic">No events found.</p>
            <button onClick={() => {setSearchQuery(''); setActiveCategory('All');}} className="text-[10px] uppercase tracking-[0.5em] font-bold text-text-secondary border-b border-linen pb-1 hover:text-heritage transition-all duration-500">Reset Search</button>
          </div>
        )}
      </section>

      <SectionDivider />

      {/* CTA */}
      <section id="cta" className="py-16 md:py-24 relative overflow-hidden text-center space-y-12" data-bg="var(--color-heritage-soft)">
        <div className="absolute inset-0 dot-pattern opacity-[0.03] pointer-events-none" />
        <TextReveal as="h2" text="Ready to create yours?" className="text-4xl md:text-7xl font-serif font-bold text-text-primary leading-[0.9]" />
        <div className="pt-4">
          <Link href="/contact">
            <Button size="lg" className="h-16 px-16 text-[10px] btn-prestige shadow-2xl" rightIcon={<ArrowRight size={18} />}>Contact Us</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default function GalleryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-canvas pt-32 flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-2 border-heritage/10 border-t-heritage rounded-full animate-spin" />
    </div>}>
      <GalleryContent />
    </Suspense>
  );
}
