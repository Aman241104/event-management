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
import { Magnetic } from '@/components/atoms/Magnetic';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';
import { ArrowRight, Search, Sparkles, Star, MessageCircle } from 'lucide-react';
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
  <div className={cn("flex flex-col items-center gap-2 py-2 relative z-10", className)}>
    <div className="flex items-center gap-3">
      <Sparkles size={6} className="text-heritage/20" />
      <Star size={8} className="text-heritage/30" />
      <Sparkles size={6} className="text-heritage/20" />
    </div>
  </div>
);

const galleryItems = [
  { id: 1, title: 'Royal Palace Wedding', category: 'Weddings', image: '/hero-1.jpg', size: 'large' as const },
  { id: 2, title: 'Elegant Gala Design', category: 'Weddings', image: '/hero-2.jpg', size: 'medium' as const },
  { id: 3, title: 'Traditional Ceremonies', category: 'Weddings', image: '/hero-3.jpg', size: 'small' as const },
  { id: 4, title: 'Vibrant Sangeet Energy', category: 'Weddings', image: '/hero-4.jpg', size: 'medium' as const },
  { id: 5, title: 'Milestone Celebration', category: 'Birthdays', image: '/hero-5.jpg', size: 'tall' as const },
  { id: 6, title: 'Global Tech Summit', category: 'Corporate', image: '/hero-6.jpg', size: 'large' as const },
  { id: 7, title: 'Tropical Royal Decor', category: 'Design', image: '/hero-7.jpg', size: 'small' as const },
  { id: 8, title: 'Cultural Heritage', category: 'Festivals', image: '/hero-8.jpg', size: 'medium' as const },
  { id: 9, title: 'Vibrant Rituals', category: 'Festivals', image: '/hero-9.jpg', size: 'small' as const },
  { id: 10, title: 'Intimate Soiree', category: 'Private', image: '/hero10.jpg', size: 'medium' as const },
  { id: 11, title: 'Corporate Gala', category: 'Corporate', image: '/decor-1.jpg', size: 'medium' as const },
  { id: 12, title: 'Market Showcase', category: 'Festivals', image: '/decor-2.jpg', size: 'small' as const },
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
    <main ref={containerRef} className="min-h-screen bg-[#FDFBF7] selection:bg-[#D4B982] selection:text-black overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-heritage/5 to-transparent pointer-events-none" />
      
      {/* 1. Header Section - Compact & Atmospheric */}
      <section id="header" className="relative pt-32 md:pt-44 pb-4 overflow-hidden">
        <div className="container relative z-20 text-center">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="header-fade flex items-center justify-center gap-6 opacity-0">
               <div className="w-12 h-px bg-[#D4B982]/40" />
               <span className="text-[10px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">THE ARCHIVE</span>
               <div className="w-12 h-px bg-[#D4B982]/40" />
            </div>
            
            <h1 className="text-4xl md:text-7xl lg:text-[7.5rem] font-serif text-[#121212] leading-[0.85] tracking-tighter">
              <span className="block overflow-hidden">
                <span className="header-fade block">Our Curated</span>
              </span>
              <span className="block overflow-hidden">
                <span className="header-fade block italic font-script text-[#D4B982] mt-2 lowercase lg:text-[9rem] drop-shadow-[0_15px_45px_rgba(212,185,130,0.3)]">Portfolio</span>
              </span>
            </h1>

            <div className="max-w-xl mx-auto header-fade opacity-0 pt-2">
              <p className="text-[#525252] text-[15px] md:text-lg font-serif italic border-l border-[#D4B982]/30 pl-10 leading-relaxed text-left">
                A testament to atmospheric design. Explore our history of orchestrating the extraordinary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Filter Navigation - High Fidelity */}
      <section id="filter" className="container py-6 border-y border-linen/20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
            {categories.map((category) => (
              <button 
                key={category} 
                onClick={() => setActiveCategory(category)} 
                className={`text-[10px] font-sans font-bold uppercase tracking-[0.4em] pb-1 transition-all duration-500 relative group ${activeCategory === category ? 'text-[#D4B982]' : 'text-[#121212]/40 hover:text-[#121212]'}`}
              >
                {category}
                <span className={`absolute bottom-0 left-0 h-px bg-[#D4B982] transition-all duration-500 ${activeCategory === category ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            ))}
          </div>
          
          <div className="w-full md:w-[18rem] relative group">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-[#D4B982]/40 group-focus-within:text-[#D4B982] transition-colors duration-500" size={14} />
            <input 
              type="text" 
              placeholder="SEARCH THE ARCHIVE..." 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
              className="w-full bg-transparent border-b border-linen/50 py-2 pl-6 text-[#121212] focus:border-[#D4B982] outline-none transition-all duration-500 font-mono text-[10px] tracking-[0.2em] placeholder:text-[#121212]/20" 
            />
          </div>
        </div>
      </section>

      {/* 3. Gallery Grid - Compacted */}
      <section id="grid" className="container min-h-[60vh] py-12 md:py-16">
        {filteredItems.length > 0 ? (
          <Gallery items={filteredItems} className="gap-4 md:gap-6" />
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
            <p className="text-2xl font-serif text-[#D4B982] italic">No records found.</p>
            <button onClick={() => {setSearchQuery(''); setActiveCategory('All');}} className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#121212]/40 border-b border-linen/50 pb-1 hover:text-[#D4B982] transition-all duration-500">RESET SEARCH</button>
          </div>
        )}
      </section>

      {/* 4. Final CTA - Consistent with Home */}
      <section id="cta" className="relative py-24 md:py-40 overflow-hidden bg-heritage">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero10.jpg" 
            alt="Final CTA Background" 
            fill 
            className="object-cover brightness-[0.2] scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,185,130,0.15)_0%,_transparent_75%)] z-10" />
        </div>
        
        <div className="container relative z-20 text-center">
          <div className="space-y-8 fade-up">
            <div className="flex items-center justify-center gap-6 mb-4">
               <div className="w-12 h-px bg-[#D4B982]/40" />
               <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">READY TO BEGIN?</span>
               <div className="w-12 h-px bg-[#D4B982]/40" />
            </div>
            
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[1.1] tracking-tighter relative z-10">
                Compose Your Legacy
              </h2>
              <span className="font-script text-[#D4B982] text-6xl md:text-8xl lg:text-[10rem] block -mt-4 md:-mt-8 lg:-mt-12 italic drop-shadow-[0_15px_45px_rgba(212,185,130,0.4)] relative z-20">
                With Zing Bliss.
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-16 fade-up">
            <Magnetic strength={0.1}>
              <Link href="/contact">
                <Button className="h-16 px-16 bg-[#D4B982] hover:bg-[#B38B4D] text-black rounded-none tracking-[0.4em] font-bold text-[12px] uppercase border-0 shadow-[0_25px_80px_rgba(212,185,130,0.25)] transition-all duration-700">
                  BOOK A CONSULTATION
                </Button>
              </Link>
            </Magnetic>
            <Magnetic strength={0.1}>
              <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="h-16 px-10 border-[#D4B982]/40 text-white/90 hover:text-[#D4B982] rounded-none tracking-[0.3em] font-bold text-[11px] uppercase hover:bg-white/5 transition-all duration-700 backdrop-blur-sm group">
                   <div className="flex items-center gap-4">
                     <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center border border-[#25D366]/40 group-hover:bg-[#25D366]/30 transition-colors">
                       <MessageCircle size={16} fill="#25D366" className="text-[#25D366]" />
                     </div>
                     <span className="text-white group-hover:text-[#D4B982] transition-colors">CHAT ON WHATSAPP</span>
                   </div>
                </Button>
              </a>
            </Magnetic>
          </div>
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
