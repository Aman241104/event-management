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
  <div className={cn("absolute hidden lg:flex flex-col gap-2 items-center text-center opacity-30 hover:opacity-100 transition-opacity duration-1000 group z-10", className)}>
    <span className="text-[9px] font-mono uppercase tracking-[0.5em] text-heritage/60 group-hover:text-heritage transition-colors">{label}</span>
    <div className="h-px w-8 bg-heritage/20 group-hover:w-12 transition-all" />
    <span className="text-2xl font-serif text-text-primary italic group-hover:text-heritage transition-colors">{value}</span>
  </div>
);

const SectionDivider = ({ className }: { className?: string }) => (
  <div className={cn("flex flex-col items-center gap-6 py-8 relative z-10", className)}>
    <div className="h-20 w-[1px] bg-heritage/10" />
    <div className="flex items-center gap-4">
      <Sparkles size={8} className="text-heritage/20" />
      <Star size={10} className="text-heritage/30" />
      <Sparkles size={8} className="text-heritage/20" />
    </div>
    <div className="h-20 w-[1px] bg-heritage/10" />
  </div>
);

const galleryItems = [
  // Weddings
  { id: 1, title: 'Palace Grand Mandap', category: 'Weddings', image: '/decor-1.jpg', size: 'large' as const },
  { id: 2, title: 'Heritage Fusion Gala', category: 'Weddings', image: '/decor-2.jpg', size: 'medium' as const },
  { id: 3, title: 'Traditional Ceremonies', category: 'Weddings', image: '/decor-3.jpg', size: 'small' as const },

  // Birthdays
  { id: 4, title: 'Vibrant Sangeet Energy', category: 'Weddings', image: '/decor-4.jpg', size: 'medium' as const },
  { id: 5, title: 'Milestone Celebration', category: 'Birthdays', image: '/decor-5.jpg', size: 'tall' as const },

  // Corporate
  { id: 6, title: 'Global Tech Summit', category: 'Corporate', image: '/hero-1.jpg', size: 'large' as const },

  // Design / Festivals
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
      const timer = setTimeout(() => {
        setActiveCategory(category);
      }, 0);
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
    gsap.from('.header-fade', {
      y: 30,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: 'power2.out',
    });

    // Background color shifts
    ScrollTrigger.create({
      trigger: '#grid',
      start: 'top 50%',
      onEnter: () => gsap.to(containerRef.current, { backgroundColor: '#F4F1EA', duration: 1.2 }),
      onLeaveBack: () => gsap.to(containerRef.current, { backgroundColor: '#FCFBF7', duration: 1.2 }),
    });

    ScrollTrigger.create({
      trigger: '#highlights',
      start: 'top 50%',
      onEnter: () => gsap.to(containerRef.current, { backgroundColor: '#FDFCF0', duration: 1.2 }),
      onLeaveBack: () => gsap.to(containerRef.current, { backgroundColor: '#FCFBF7', duration: 1.2 }),
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen pt-20 pb-16 transition-colors duration-1000 relative overflow-hidden">
      <SVGSpine height="6000px" viewBox="0 0 20 6000" pathD="M 10 0 L 10 6000" opacity={0.07} />
      <BackgroundFlourish type="floral" className="top-[10%] right-[5%] w-96 h-96" opacity={0.02} />
      <BackgroundFlourish type="geometric" className="top-[40%] left-[-5%] w-[30rem] h-[30rem]" opacity={0.015} />
      <BackgroundFlourish type="architectural" className="bottom-[10%] right-[2%] w-80 h-80" opacity={0.02} />
      
      {/* Large Decorative Text */}
      <div className="absolute top-[100vh] right-[5%] text-[12vw] font-serif text-heritage/[0.03] pointer-events-none select-none italic rotate-6 z-0">Archive</div>
      <div className="absolute top-[300vh] left-[2%] text-[15vw] font-serif text-heritage/[0.03] pointer-events-none select-none italic -rotate-12 z-0">Portfolio</div>
      <div className="absolute top-[500vh] right-[2%] text-[12vw] font-serif text-heritage/[0.03] pointer-events-none select-none italic rotate-6 z-0">Visuals</div>

      {/* Header */}
      <section id="header" className="container py-24 md:py-32 text-center space-y-10">
        <div className="header-fade">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-heritage/60">06 / PORTFOLIO</span>
        </div>
        <TextReveal 
          as="h1" 
          text="Visualizing Your Legacy." 
          className="text-5xl md:text-[8rem] lg:text-[9.5rem] font-serif tracking-tighter text-text-primary leading-[0.85] font-bold" 
        />
        <p className="header-fade text-lg md:text-2xl text-text-secondary font-sans font-light leading-relaxed max-w-3xl mx-auto pt-6">
          A collection of our most iconic orchestrations. Each frame represents a dialogue between architectural precision and human emotion.
        </p>
      </section>

      <SectionDivider className="bg-canvas" />

      {/* Highlights */}
      <section id="highlights" className="py-24 md:py-32 border-y border-linen/30 overflow-hidden relative" data-bg="var(--color-heritage-soft)">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
          <div className="fade-up space-y-10 order-2 md:order-1">
            <div className="space-y-4">
              <span className="text-[10px] font-sans font-bold text-heritage uppercase tracking-[0.5em]">Featured Orchestration</span>
              <TextReveal 
                as="h2" 
                text="Palace Grand Mandap" 
                className="text-4xl md:text-7xl font-serif font-bold text-text-primary tracking-tight leading-tight" 
              />
            </div>
            <p className="text-lg text-text-secondary font-sans font-light leading-relaxed max-w-xl">
              A bespoke 60-foot architectural mandap created for an elite destination wedding in Udaipur. Built with hand-crafted motifs and atmospheric lighting.
            </p>
            <Link href="/events/1" className="inline-flex items-center gap-4 text-heritage hover:text-text-primary transition-colors uppercase tracking-[0.4em] text-[10px] font-bold group">
              View Detailed Record <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="fade-up order-1 md:order-2">
            <div className="relative aspect-[4/5] md:aspect-square overflow-hidden arch-mask border border-linen shadow-2xl group grayscale-0">
              <Image 
                src="/hero-1.jpg" 
                alt="Highlight Image" 
                fill 
                className="object-cover transition-all duration-[3s] group-hover:scale-110" 
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider className="bg-canvas" />
      <FloatingMetric label="Curation" value="Bespoke" className="top-[220vh] right-[15%]" />

      {/* Filter Navigation */}
      <section id="filter" className="container py-20 md:py-24">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 border-b border-linen/50 pb-8">
            <div className="space-y-4 text-left">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-heritage/60">COLLECTIONS</span>
              <h3 className="text-3xl md:text-5xl font-serif text-text-primary font-bold tracking-tight italic">Filter the Narrative</h3>
            </div>
            
            <div className="w-full md:w-[25rem] relative group">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-heritage/30 group-focus-within:text-heritage transition-colors duration-500" size={18} />
              <input
                type="text"
                placeholder="Search events, themes, or moments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-b border-linen/50 py-4 pl-8 text-text-primary focus:border-heritage outline-none transition-all duration-500 font-sans placeholder:text-text-secondary/40 text-sm tracking-widest"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-start gap-x-12 gap-y-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-[10px] font-sans font-bold uppercase tracking-[0.4em] pb-3 transition-all duration-700 relative group
                  ${activeCategory === category 
                    ? 'text-heritage' 
                    : 'text-text-secondary hover:text-text-primary'}
                `}
              >
                {category}
                <span className={`absolute bottom-0 left-0 h-[1.5px] bg-heritage transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${activeCategory === category ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider className="bg-canvas" />
      <FloatingMetric label="Archive" value="Legacy" className="top-[400vh] left-[15%]" />

      {/* Gallery Grid */}
      <section id="grid" className="container min-h-[50vh] pb-24 md:pb-32">
        {filteredItems.length > 0 ? (
          <Gallery items={filteredItems} className="gap-8 md:gap-12" />
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center space-y-10">
            <p className="text-2xl md:text-4xl font-serif text-heritage italic">No matches found for your search.</p>
            <button 
              onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
              className="text-[10px] uppercase tracking-[0.5em] font-bold text-text-secondary border-b border-linen pb-1 hover:text-heritage hover:border-heritage transition-all duration-500"
            >
              Reset Archive
            </button>
          </div>
        )}
      </section>

      <SectionDivider className="bg-canvas" />

      {/* CTA */}
      <section id="cta" className="py-24 md:py-32 relative overflow-hidden text-center space-y-16" data-bg="var(--color-heritage-soft)">
        <div className="absolute inset-0 dot-pattern opacity-[0.03] pointer-events-none" />
        <TextReveal 
          as="h2" 
          text="Want a Fairytale Celebration?" 
          className="text-5xl md:text-[8rem] lg:text-[9rem] font-serif font-bold text-text-primary leading-[0.9]" 
        />
        <div className="pt-8">
          <Link href="/contact">
            <Button size="lg" magnetic className="h-20 px-16 text-[10px] tracking-[0.4em] btn-prestige shadow-2xl" rightIcon={<ArrowRight size={18} />}>
              Book Zing Bliss
            </Button>
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
