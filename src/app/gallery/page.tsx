'use client';

import React, { useRef, useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Gallery } from '@/components/molecules/Gallery';
import { TextReveal } from '@/components/atoms/TextReveal';
import { Button } from '@/components/atoms/Button';
import { BackgroundFlourish } from '@/components/atoms/BackgroundFlourish';
import { ArrowRight, Search } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const FloatingMetric = ({ label, value, className }: { label: string, value: string, className?: string }) => (
  <div className={cn("absolute hidden lg:flex flex-col gap-2 items-center text-center opacity-20 hover:opacity-100 transition-opacity duration-1000 group z-10", className)}>
    <span className="text-[9px] font-mono uppercase tracking-[0.5em] text-heritage/60 group-hover:text-heritage transition-colors">{label}</span>
    <div className="h-px w-8 bg-burnished/30 group-hover:w-12 transition-all" />
    <span className="text-3xl font-serif text-text-primary italic group-hover:text-burnished transition-colors">{value}</span>
  </div>
);

const SectionDivider = ({ className }: { className?: string }) => (
  <div className={cn("flex flex-col items-center gap-10 py-12 relative z-10", className)}>
    <div className="h-24 w-[1px] bg-heritage/10" />
    <div className="flex items-center gap-4">
      <Sparkles size={8} className="text-burnished/30" />
      <Star size={10} className="text-burnished/40" />
      <Sparkles size={8} className="text-burnished/30" />
    </div>
    <div className="h-24 w-[1px] bg-heritage/10" />
  </div>
);

const galleryItems = [
  // Weddings
  { id: 1, title: 'Royal Palace Wedding', category: 'Weddings', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200', size: 'large' as const },
  { id: 2, title: 'Grand Mandap Design', category: 'Weddings', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800', size: 'tall' as const },
  { id: 3, title: 'Traditional Ceremonies', category: 'Weddings', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800', size: 'medium' as const },
  
  // Birthdays
  { id: 4, title: 'Luxury 1st Birthday', category: 'Birthdays', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800', size: 'medium' as const },
  { id: 5, title: 'Milestone Celebration', category: 'Birthdays', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800', size: 'tall' as const },
  
  // Corporate
  { id: 6, title: 'Global Tech Summit', category: 'Corporate', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200', size: 'large' as const },
  { id: 7, title: 'Gala Dinner Evening', category: 'Corporate', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800', size: 'medium' as const },
  
  // Festivals
  { id: 8, title: 'Cultural Heritage Festival', category: 'Festivals', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800', size: 'tall' as const },
  { id: 9, title: 'Community Flea Market', category: 'Festivals', image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=800', size: 'medium' as const },
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
    <main ref={containerRef} className="min-h-screen pt-32 pb-24 transition-colors duration-1000 relative overflow-hidden pb-24">
      <SVGSpine height="6000px" viewBox="0 0 20 6000" pathD="M 10 0 L 10 6000" opacity={0.1} />
      <BackgroundFlourish type="floral" className="top-[10%] right-[5%] w-96 h-96" opacity={0.02} />
      <BackgroundFlourish type="geometric" className="top-[40%] left-[-5%] w-[30rem] h-[30rem]" opacity={0.015} />
      <BackgroundFlourish type="architectural" className="bottom-[10%] right-[2%] w-80 h-80" opacity={0.02} />
      
      {/* Large Decorative Text */}
      <div className="absolute top-[100vh] right-[5%] text-[18vw] font-serif text-heritage/2 pointer-events-none select-none italic rotate-6 z-0">Archive</div>
      <div className="absolute top-[300vh] left-[2%] text-[20vw] font-serif text-burnished/2 pointer-events-none select-none italic -rotate-12 z-0">Portfolio</div>
      <div className="absolute top-[500vh] right-[2%] text-[15vw] font-serif text-heritage/2 pointer-events-none select-none italic rotate-6 z-0">Visuals</div>

      {/* Header */}
      <section id="header" className="container py-32 md:py-48 text-center space-y-12">
        <div className="header-fade">
          <span className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-heritage/60">06 / PORTFOLIO</span>
        </div>
        <TextReveal 
          as="h1" 
          text="Visualizing Your Legacy." 
          className="text-6xl md:text-[11rem] font-serif tracking-tighter text-text-primary leading-[0.85] font-bold" 
        />
        <p className="header-fade text-xl md:text-3xl text-text-secondary font-sans font-light leading-relaxed max-w-4xl mx-auto pt-8">
          A collection of our most iconic orchestrations. Each frame represents a dialogue between architectural precision and human emotion.
        </p>
      </section>

      <SectionDivider className="bg-canvas" />

      {/* Highlights */}
      <section id="highlights" className="py-32 md:py-48 border-y border-linen/30 overflow-hidden relative">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-24 items-center relative z-10">
          <div className="fade-up space-y-12 order-2 md:order-1">
            <div className="space-y-6">
              <span className="text-[11px] font-sans font-bold text-heritage uppercase tracking-[0.5em]">Featured Orchestration</span>
              <TextReveal 
                as="h2" 
                text="Palace Grand Mandap" 
                className="text-5xl md:text-8xl font-serif font-bold text-text-primary tracking-tight leading-tight" 
              />
            </div>
            <p className="text-xl text-text-secondary font-sans font-light leading-relaxed max-w-xl">
              A bespoke 60-foot architectural mandap created for an elite destination wedding in Udaipur. Built with hand-crafted motifs and atmospheric lighting.
            </p>
            <Link href="/events/1" className="inline-flex items-center gap-6 text-heritage hover:text-text-primary transition-colors uppercase tracking-[0.4em] text-[11px] font-bold group">
              View Detailed Record <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform" />
            </Link>
          </div>
          <div className="fade-up order-1 md:order-2">
            <div className="relative aspect-[4/5] md:aspect-square overflow-hidden arch-mask border border-linen shadow-2xl group grayscale-0">
              <Image 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200" 
                alt="Highlight Image" 
                fill 
                className="object-cover transition-all duration-[3s] group-hover:scale-110" 
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider className="bg-canvas" />
      <FloatingMetric label="Curation" value="Bespoke" className="top-[250vh] right-[15%]" />

      {/* Filter Navigation */}
      <section id="filter" className="container py-32 md:py-48">
        <div className="flex flex-col gap-24">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-linen/50 pb-12">
            <div className="space-y-6 text-left">
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-heritage/60">COLLECTIONS</span>
              <h3 className="text-4xl md:text-6xl font-serif text-text-primary font-bold tracking-tight italic">Filter the Narrative</h3>
            </div>
            
            <div className="w-full md:w-[30rem] relative group">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-heritage/30 group-focus-within:text-heritage transition-colors duration-500" size={20} />
              <input
                type="text"
                placeholder="Search events, themes, or moments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-b border-linen/50 py-6 pl-10 text-text-primary focus:border-heritage outline-none transition-all duration-500 font-sans placeholder:text-text-secondary/40 text-sm tracking-widest"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-start gap-x-16 gap-y-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-[11px] font-sans font-bold uppercase tracking-[0.4em] pb-4 transition-all duration-1000 relative group
                  ${activeCategory === category 
                    ? 'text-heritage' 
                    : 'text-text-secondary hover:text-text-primary'}
                `}
              >
                {category}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-heritage transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] ${activeCategory === category ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider className="bg-canvas" />
      <FloatingMetric label="Archive" value="Legacy" className="top-[450vh] left-[15%]" />

      {/* Gallery Grid */}
      <section id="grid" className="container min-h-[50vh] pb-32 md:pb-48">
        {filteredItems.length > 0 ? (
          <Gallery items={filteredItems} className="gap-12 md:gap-16" />
        ) : (
          <div className="flex flex-col items-center justify-center py-48 text-center space-y-12">
            <p className="text-3xl md:text-5xl font-serif text-heritage italic">No matches found for your search.</p>
            <button 
              onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
              className="text-[11px] uppercase tracking-[0.5em] font-bold text-text-secondary border-b border-linen pb-2 hover:text-heritage hover:border-heritage transition-all duration-500"
            >
              Reset Archive
            </button>
          </div>
        )}
      </section>

      <SectionDivider className="bg-canvas" />

      {/* CTA */}
      <section id="cta" className="py-32 md:py-48 relative overflow-hidden text-center space-y-24">
        <div className="absolute inset-0 dot-pattern opacity-[0.03] pointer-events-none" />
        <TextReveal 
          as="h2" 
          text="Want a Fairytale Celebration?" 
          className="text-5xl md:text-[10rem] font-serif font-bold text-text-primary leading-[0.9]" 
        />
        <div className="pt-12">
          <Link href="/contact">
            <Button size="lg" magnetic className="h-24 px-20 text-sm tracking-[0.4em] btn-prestige shadow-2xl" rightIcon={<ArrowRight size={20} />}>
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
