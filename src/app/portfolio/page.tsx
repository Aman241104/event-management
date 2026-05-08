'use client';

import React, { useRef, useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Portfolio } from '@/components/molecules/Portfolio';
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

const portfolioItems = [
  { id: 1, title: 'Royal Palace Wedding', category: 'Weddings', image: '/assets/wedding/wedding-7.jpg', size: 'large' as const },
  { id: 2, title: 'Corporate Tech Summit', category: 'Corporate', image: '/assets/corporate/corporate-1.jpg', size: 'medium' as const },
  { id: 3, title: 'Traditional Ceremonies', category: 'Weddings', image: '/assets/wedding/wedding-3.jpg', size: 'small' as const },
  { id: 4, title: 'Vibrant Sangeet Energy', category: 'Weddings', image: '/assets/wedding/wedding-1.jpg', size: 'medium' as const },
  { id: 5, title: 'Milestone 30th Birthday', category: 'Birthdays', image: '/assets/birthday/birthday-1.jpg', size: 'tall' as const },
  { id: 6, title: 'Global Leaders Meet', category: 'Corporate', image: '/assets/corporate/corporate-6.jpg', size: 'large' as const },
  { id: 7, title: 'Production Excellence', category: 'Festivals', image: '/assets/production/production-1.jpg', size: 'small' as const },
  { id: 8, title: 'Grand Birthday Gala', category: 'Birthdays', image: '/assets/birthday/birthday-2.jpg', size: 'medium' as const },
  { id: 9, title: 'Live Concert Setup', category: 'Festivals', image: '/assets/production/production-2.jpg', size: 'small' as const },
  { id: 10, title: 'Intimate Soiree', category: 'Private', image: '/assets/birthday/birthday-3.jpg', size: 'medium' as const },
  { id: 11, title: 'Annual Awards Night', category: 'Corporate', image: '/assets/corporate/corporate-3.jpg', size: 'medium' as const },
  { id: 12, title: 'Stage Production', category: 'Festivals', image: '/assets/production/production-3.jpg', size: 'small' as const },
];

const categories = ['All', 'Weddings', 'Birthdays', 'Corporate', 'Festivals', 'Private'];

function PortfolioContent() {
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

  const filteredItems = portfolioItems.filter(item => {
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
      <section id="header" className="relative pt-32 md:pt-40 pb-0 overflow-hidden">
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
                <span className="header-fade block italic font-script text-[#D4B982] mt-4 lg:text-[10rem] drop-shadow-[0_15px_45px_rgba(212,185,130,0.15)]">Portfolio</span>
              </span>
            </h1>

            <div className="max-w-xl mx-auto header-fade opacity-0 pt-0">
              <p className="text-[#525252] text-[15px] md:text-lg font-serif italic border-l border-[#D4B982]/30 pl-10 leading-relaxed text-left">
                A showcase of flawlessly executed weddings, corporate summits, and private celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Archive Explorer - Side-Nav Layout */}
      <section id="archive" className="container pb-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Sidebar - Sticky Filter Navigation */}
          <aside className="lg:w-64 flex-shrink-0 lg:sticky lg:top-32 lg:h-fit z-30">
            <div className="space-y-12">
              {/* Desktop Categories - Vertical List */}
              <div className="hidden lg:block space-y-8">
                <div className="space-y-2">
                  <span className="text-[10px] text-[#D4B982] uppercase tracking-[0.4em] font-bold">CATEGORIES</span>
                  <div className="w-8 h-px bg-[#D4B982]/30" />
                </div>
                
                <nav className="flex flex-col items-start gap-6">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={cn(
                        "text-[12px] font-sans font-bold uppercase tracking-[0.4em] transition-all duration-500 relative group text-left",
                        activeCategory === category 
                          ? "text-[#121212]" 
                          : "text-[#121212]/30 hover:text-[#121212]"
                      )}
                    >
                      <span className={cn(
                        "absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#D4B982] transition-all duration-500",
                        activeCategory === category ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-75"
                      )} />
                      {category}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Mobile Categories - Horizontal Scroll Ribbon */}
              <div className="lg:hidden -mx-6 px-6 overflow-x-auto no-scrollbar py-2 border-y border-[#D4B982]/10 bg-white/50 backdrop-blur-md sticky top-0 z-40">
                <div className="flex items-center gap-8 min-w-max">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={cn(
                        "text-[10px] font-sans font-bold uppercase tracking-[0.3em] transition-all duration-500 whitespace-nowrap pb-1 border-b-2",
                        activeCategory === category 
                          ? "text-[#121212] border-[#D4B982]" 
                          : "text-[#121212]/30 border-transparent"
                      )}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search Console */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] text-[#D4B982] uppercase tracking-[0.4em] font-bold">ARCHIVE SEARCH</span>
                  <div className="w-8 h-px bg-[#D4B982]/30" />
                </div>
                
                <div className="relative group">
                  <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-[#D4B982]/40 group-focus-within:text-[#D4B982] transition-colors duration-500" size={14} />
                  <input
                    type="text"
                    placeholder="Keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent border-b border-[#D4B982]/20 py-3 pl-6 text-[#121212] focus:border-[#D4B982] outline-none transition-all duration-500 font-mono text-[11px] tracking-[0.2em] placeholder:text-[#121212]/20"
                  />
                </div>
                <div className="flex justify-between items-center opacity-40">
                  <span className="text-[8px] font-mono uppercase tracking-widest">{filteredItems.length} Records found</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-[#D4B982]" />
                    <div className="w-1 h-1 rounded-full bg-[#D4B982]/40" />
                    <div className="w-1 h-1 rounded-full bg-[#D4B982]/10" />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Portfolio Grid Side */}
          <div className="flex-1 min-w-0">
            {filteredItems.length > 0 ? (
              <Portfolio items={filteredItems} className="gap-6 md:gap-8 lg:gap-10" />
            ) : (
              <div className="flex flex-col items-center justify-center py-32 text-center space-y-8 bg-[#D4B982]/5 rounded-sm border border-dashed border-[#D4B982]/20">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Search size={24} className="text-[#D4B982]" />
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-serif text-[#121212] italic">No matching records found.</p>
                  <p className="text-sm text-[#121212]/40 tracking-widest uppercase">Try adjusting your filter or keywords</p>
                </div>
                <button 
                  onClick={() => {setSearchQuery(''); setActiveCategory('All');}} 
                  className="btn-gold px-10 py-4 text-[10px]"
                >
                  RESET FILTERS
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Final CTA - Atmospheric Transition */}
      <section className="relative py-32 md:py-48 overflow-hidden bg-heritage">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/wedding/wedding-3.jpg" 
            alt="Final CTA Background" 
            fill 
            className="object-cover brightness-[0.15] scale-105" 
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
                Plan Your Next
              </h2>
              <span className="font-script text-[#D4B982] text-6xl md:text-8xl lg:text-[10rem] block -mt-4 md:-mt-8 lg:-mt-12 italic drop-shadow-[0_15px_45px_rgba(212,185,130,0.4)] relative z-20">
                Elite Event.
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-16 fade-up">
            <Magnetic strength={0.1}>
              <Link href="/contact">
                <Button className="btn-gold h-16 px-16">
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

export default function PortfolioPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-canvas pt-32 flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-2 border-heritage/10 border-t-heritage rounded-full animate-spin" />
    </div>}>
      <PortfolioContent />
    </Suspense>
  );
}
