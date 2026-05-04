'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/atoms/Button';
import { Magnetic } from '@/components/atoms/Magnetic';
import { BackgroundFlourish } from '@/components/atoms/BackgroundFlourish';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const categories = ['All', 'Weddings', 'Corporate', 'Design', 'Lifestyle'];

const blogPosts = [
  {
    id: 1,
    title: 'The Evolution of Luxury Weddings in 2026',
    excerpt: 'Exploring how technology and traditional heritage are blending to create immersive experiences.',
    category: 'Weddings',
    date: 'May 12, 2026',
    author: 'Riya Malhotra',
    image: '/decor-1.jpg',
    featured: true
  },
  {
    id: 2,
    title: 'Designing Atmospheric Spaces for Corporate Galas',
    excerpt: 'How to move beyond the boardroom and create events that inspire brand loyalty.',
    category: 'Corporate',
    date: 'April 28, 2026',
    author: 'Arjun Mehta',
    image: '/hero-3.jpg'
  },
  {
    id: 3,
    title: 'The Silent Language of Floral Design',
    excerpt: 'Understanding the psychology of scent and color in premium event spaces.',
    category: 'Design',
    date: 'April 15, 2026',
    author: 'Sonia Kapoor',
    image: '/decor-2.jpg'
  },
  {
    id: 4,
    title: 'Minimalism vs. Maximalism: Finding Your Aesthetic',
    excerpt: 'A guide to choosing the right visual narrative for your next celebration.',
    category: 'Lifestyle',
    date: 'March 30, 2026',
    author: 'Karan Singh',
    image: '/hero-7.jpg'
  }
];

export default function BlogPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.post-card', {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.post-card',
        start: 'top 90%',
      }
    });

    gsap.from('.hero-reveal', {
      y: 60,
      opacity: 0,
      duration: 1.5,
      ease: 'power4.out',
      stagger: 0.2
    });
  }, { scope: containerRef });

  const featuredPost = blogPosts.find(p => p.featured);
  const regularPosts = blogPosts.filter(p => !p.featured);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#FDFBF7] selection:bg-[#D4B982] selection:text-black overflow-hidden relative">
      <BackgroundFlourish />
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-16 bg-[#0a1f13] overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.05]" />
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="hero-reveal flex items-center gap-6">
               <div className="w-12 h-px bg-[#D4B982]/40" />
               <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">INSIGHTS & STORIES</span>
               <div className="w-12 h-px bg-[#D4B982]/40" />
            </div>
            
            <h1 className="hero-reveal text-5xl md:text-7xl lg:text-[8rem] font-serif text-white leading-[0.85] tracking-tighter">
              The Journal Of <br />
              <span className="italic font-script text-[#D4B982] mt-4 lowercase lg:text-[10rem] drop-shadow-[0_15px_45px_rgba(212,185,130,0.4)]">Zing Bliss.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Blog Content */}
      <section className="py-24 relative z-10">
        <div className="container">
          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-24 post-card">
              <Link href={`/blog/${featuredPost.id}`} className="group grid grid-cols-1 lg:grid-cols-2 bg-white border border-linen/30 shadow-2xl overflow-hidden rounded-sm transition-all duration-700 hover:shadow-[0_60px_120px_rgba(0,0,0,0.1)]">
                <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                  <Image 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    fill 
                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-105" 
                  />
                  <div className="absolute top-8 left-8">
                    <span className="bg-[#D4B982] text-black text-[9px] font-bold px-4 py-2 uppercase tracking-widest rounded-none">FEATURED</span>
                  </div>
                </div>
                <div className="p-10 md:p-16 flex flex-col justify-center space-y-6">
                  <div className="flex items-center gap-4 text-[10px] text-[#D4B982] font-bold uppercase tracking-widest">
                    <Tag size={12} />
                    <span>{featuredPost.category}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-serif text-[#121212] group-hover:text-[#D4B982] transition-colors leading-tight">{featuredPost.title}</h2>
                  <p className="text-[#525252] text-lg font-light leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-6 pt-6 text-[11px] text-[#525252] uppercase tracking-widest font-bold">
                    <span className="flex items-center gap-2"><Calendar size={14} className="text-[#D4B982]" /> {featuredPost.date}</span>
                    <span className="flex items-center gap-2"><User size={14} className="text-[#D4B982]" /> {featuredPost.author}</span>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Categories & Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 pb-8 border-b border-linen/50">
            <div className="flex flex-wrap items-center gap-8">
              {categories.map((cat) => (
                <button key={cat} className={cn(
                  "text-[11px] font-bold uppercase tracking-[0.3em] transition-all relative pb-2 group",
                  cat === 'All' ? "text-[#D4B982]" : "text-[#121212]/40 hover:text-[#D4B982]"
                )}>
                  {cat}
                  <span className={cn(
                    "absolute bottom-0 left-0 h-px bg-[#D4B982] transition-all duration-500",
                    cat === 'All' ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <input type="text" placeholder="SEARCH STORIES..." className="w-full bg-transparent border-b border-linen/50 py-2 pl-2 pr-10 text-[10px] tracking-widest focus:border-[#D4B982] outline-none transition-colors" />
              <Search size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-[#121212]/30" />
            </div>
          </div>

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {regularPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group space-y-6 post-card">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-xl">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[9px] font-bold text-[#D4B982] uppercase tracking-[0.2em]">
                    <span>{post.category}</span>
                    <span className="text-[#121212]/30">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-serif text-[#121212] group-hover:text-[#D4B982] transition-colors leading-tight">{post.title}</h3>
                  <p className="text-[14px] text-[#525252] font-light leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <div className="pt-4 flex items-center gap-3 text-[10px] text-[#D4B982] uppercase tracking-[0.5em] font-bold group/link transition-all">
                    <span>READ MORE</span>
                    <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform duration-500" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-24">
            <Magnetic strength={0.1}>
              <Button variant="outline" className="h-16 px-16 border-linen text-[#121212] hover:bg-[#121212] hover:text-white rounded-none tracking-[0.4em] font-bold text-[11px] uppercase transition-all duration-700">
                LOAD MORE STORIES
              </Button>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* 3. Newsletter Section */}
      <section className="py-24 bg-[#0a1f13] relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,185,130,0.05)_0%,_transparent_70%)]" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <span className="text-[10px] text-[#D4B982] uppercase tracking-[0.7em] font-bold">SUBSCRIBE</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white">Curated Inspiration To Your Inbox</h2>
            <p className="text-white/60 text-lg font-light">Join our inner circle for exclusive event trends, design insights, and luxury lifestyle updates.</p>
            
            <form className="flex flex-col sm:flex-row gap-4 pt-6" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="YOUR EMAIL ADDRESS" className="flex-grow bg-white/5 border border-white/10 px-8 py-4 text-[11px] tracking-widest focus:border-[#D4B982] outline-none transition-colors" />
              <Button className="h-14 px-12 bg-[#D4B982] hover:bg-[#B38B4D] text-black rounded-none tracking-[0.4em] font-bold text-[11px] uppercase border-0">
                SUBSCRIBE
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
