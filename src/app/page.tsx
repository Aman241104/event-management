'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Sparkles, 
  Heart, 
  PartyPopper, 
  Music, 
  Star, 
  Users,
  Zap,
  ChevronLeft,
  ChevronRight,
  Play,
  ArrowDown,
  Clock,
  Gem,
  CheckCircle2,
  Phone,
  MessageCircle,
  Calendar,
  Layers,
  Award,
  Users2,
  LucideProps,
  Briefcase,
  Cake,
  CalendarRange
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/atoms/Button';
import { Magnetic } from '@/components/atoms/Magnetic';
import { TextReveal } from '@/components/atoms/TextReveal';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { WhatsAppLogo } from '@/components/atoms/WhatsAppLogo';
import { HowWeWork } from '@/components/organisms/HowWeWork';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const trustLogos = [
  { 
    name: 'Reliance Insurance', 
    type: 'custom',
    render: () => (
      <div className="flex flex-col items-center group">
        <div className="relative w-28 h-16 opacity-70 group-hover:opacity-100 transition-all duration-700">
          <Image 
            src="/assets/logos/reliance.png" 
            alt="Reliance Insurance" 
            fill 
            className="object-contain" 
          />
        </div>
      </div>
    )
  },
  { 
    name: 'ITC (fmcg)', 
    type: 'custom',
    render: () => (
      <div className="flex flex-col items-center group">
        <div className="relative w-28 h-16 opacity-70 group-hover:opacity-100 transition-all duration-700">
          <Image 
            src="/assets/logos/itc_fmcg.png" 
            alt="ITC FMCG" 
            fill 
            className="object-contain" 
          />
        </div>
      </div>
    )
  },
  { 
    name: 'Haas', 
    type: 'custom',
    render: () => (
      <div className="flex flex-col items-center group">
        <div className="relative w-28 h-16 opacity-70 group-hover:opacity-100 transition-all duration-700">
          <Image 
            src="/assets/logos/haas.png" 
            alt="Haas Automation" 
            fill 
            className="object-contain" 
          />
        </div>
      </div>
    )
  },
  { 
    name: 'Adhaan Solution', 
    type: 'custom',
    render: () => (
      <div className="flex flex-col items-center group">
        <div className="relative w-28 h-16 opacity-70 group-hover:opacity-100 transition-all duration-700">
          <Image 
            src="/assets/logos/adhaan.png" 
            alt="Adhaan Solution" 
            fill 
            className="object-contain" 
          />
        </div>
      </div>
    )
  },
  { 
    name: 'Zee TV', 
    type: 'custom',
    render: () => (
      <div className="flex flex-col items-center group">
        <div className="relative w-28 h-16 opacity-70 group-hover:opacity-100 transition-all duration-700">
          <Image 
            src="/assets/logos/zeetv.png" 
            alt="Zee TV" 
            fill 
            className="object-contain" 
          />
        </div>
      </div>
    )
  },
];

const services = [
  {
    title: 'WEDDINGS',
    desc: 'Exquisite weddings that reflect your story and style.',
    image: '/assets/wedding/wedding-5.jpg',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="12" r="5" />
        <circle cx="15" cy="12" r="5" />
      </svg>
    ),
  },
  {
    title: 'CORPORATE EVENTS',
    desc: 'Professional events that inspire, engage and leave a lasting impact.',
    image: '/assets/corporate/corporate-6.jpg',
    icon: <Briefcase size={22} strokeWidth={0.75} />,
  },
  {
    title: 'PRIVATE CELEBRATIONS',
    desc: 'Birthdays, anniversaries and intimate celebrations with a personal touch.',
    image: '/assets/birthday/birthday-1.jpg',
    icon: <Cake size={22} strokeWidth={0.75} />,
  },
  {
    title: 'EVENT PRODUCTION & ENTERTAINMENT',
    desc: 'End-to-end production, entertainment and technical solutions.',
    image: '/assets/production/production-1.jpg',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="1" />
        <path d="M12 7l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z" />
      </svg>
    ),
  },
];

const categories = [
  { title: 'WEDDINGS', image: '/assets/wedding/wedding-8.jpg' },
  { title: 'BIRTHDAYS', image: '/assets/birthday/birthday-2.jpg' },
  { title: 'CORPORATE EVENTS', image: '/assets/corporate/corporate-1.jpg' },
  { title: 'FLEA MARKETS', image: '/assets/misc/flea-market-1.jpg' },
  { title: 'FESTIVALS & CULTURAL EVENTS', image: '/assets/corporate/corporate-7.jpg' },
  { title: 'PRIVATE PARTIES', image: '/assets/birthday/birthday-3.jpg' },
];

const whyChooseUs = [
  {
    title: 'BESPOKE CONCEPTS',
    desc: 'Unique ideas tailored to your vision.',
    icon: <Sparkles size={24} strokeWidth={1.5} />,
  },
  {
    title: 'SEAMLESS EXECUTION',
    desc: 'Flawless planning and perfect execution.',
    icon: <Zap size={24} strokeWidth={1.5} />,
  },
  {
    title: 'PREMIUM VENDOR NETWORK',
    desc: 'Trusted partners for the best quality.',
    icon: <Users2 size={24} strokeWidth={1.5} />,
  },
  {
    title: 'ATTENTION TO DETAIL',
    desc: 'Every detail matters, and we perfect it.',
    icon: <Layers size={24} strokeWidth={1.5} />,
  },
  {
    title: 'PASSIONATE TEAM',
    desc: 'A dedicated team that cares for your event.',
    icon: <Heart size={24} strokeWidth={1.5} />,
  },
];

const testimonials = [
  {
    content: "Our wedding was beyond our dreams! The team at Zing Bliss Events made everything so elegant and perfect.",
    author: "Riya & Karan",
    image: "/hero-8.jpg"
  },
  {
    content: "Thank you Zing Bliss Events for the beautiful birthday setup. The theme and decor were exactly what we imagined!",
    author: "Neha Malhotra",
    image: "/hero-9.jpg"
  },
  {
    content: "Absolutely loved the décor by Zing Bliss Events! Elegant, creative, and beautifully executed.",
    author: "Arjun Mehta",
    image: "/hero-2.jpg"
  }
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Fade up animations - Enhanced for luxury feel
    gsap.utils.toArray<HTMLElement>('.fade-up').forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 94%', // Trigger slightly earlier for smoother flow
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        overwrite: 'auto',
        force3D: true
      });
    });

    // Hero content entrance - More layered and cinematic
    const tl = gsap.timeline();
    tl.from('.hero-title', { 
      y: 60, 
      opacity: 0, 
      duration: 1.8, 
      ease: 'expo.out',
      force3D: true
    })
    .from('.hero-subtitle', { 
      y: 30, 
      opacity: 0, 
      duration: 1.2, 
      ease: 'power3.out',
      force3D: true
    }, '-=1.2')
    .from('.hero-btns', { 
      y: 30, 
      opacity: 0, 
      duration: 1.2, 
      ease: 'power3.out',
      force3D: true
    }, '-=0.8');

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="bg-canvas overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative h-[85vh] min-h-[700px] md:min-h-[850px] flex items-start justify-start overflow-hidden bg-heritage pt-20 md:pt-44">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/wedding/wedding-7.jpg" 
            alt="Hero Background" 
            fill 
            className="object-cover brightness-[0.5] scale-105" 
            priority
          />
          {/* Multi-layered Cinema Gradient for Depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(212,185,130,0.05)_0%,_transparent_60%)]" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-6xl">
            <div className="space-y-6 md:space-y-10">
              <h1 className="hero-title text-[3.2rem] sm:text-7xl md:text-8xl lg:text-[8.8rem] font-serif text-white leading-[0.9] md:leading-[0.85] tracking-tight">
                Crafting Experiences <br />
                That Feel Like <span className="font-script text-[#D4B982] text-[5rem] sm:text-8xl md:text-[10rem] lg:text-[11.5rem] lowercase ml-1 md:ml-4 italic relative top-4 md:top-6 drop-shadow-[0_10px_40px_rgba(212,185,130,0.4)] block md:inline">magic</span>
              </h1>
              <p className="hero-subtitle text-base md:text-xl text-white/90 font-serif italic max-w-xl leading-relaxed border-l-2 border-[#D4B982]/30 pl-6 md:pl-10">
                Luxury Event Planning for Weddings, <br className="hidden md:block" />
                Corporate Gatherings & Bespoke Celebrations
              </p>
            </div>

            <div className="hero-btns flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 pt-10 md:pt-16">
              <Magnetic strength={0.1} className="w-full sm:w-auto">
                <Link href="/contact" className="block w-full sm:w-auto">
                  <Button className="btn-gold w-full h-14 md:h-15 px-8 md:px-14">
                    PLAN YOUR EVENT
                  </Button>
                </Link>
              </Magnetic>
              <Magnetic strength={0.1} className="w-full sm:w-auto">
                <Link href="/portfolio" className="block w-full sm:w-auto">
                  <Button variant="outline" className="w-full h-14 md:h-15 px-8 md:px-14 border-[#D4B982]/50 !text-[#D4B982] hover:bg-[#D4B982] hover:!text-white rounded-none tracking-[0.35em] font-bold text-[12px] uppercase bg-transparent transition-all duration-700">
                    VIEW OUR WORK
                  </Button>
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Hero Bottom Controls - Grouped to avoid overlaps */}
        <div className="absolute bottom-10 right-10 flex items-center gap-12 z-20">
          {/* Refined Scroll Indicator */}
          <div className="flex flex-col items-center gap-2 text-white/40 group cursor-pointer transition-colors hover:text-[#D4B982]">
            <ArrowDown size={16} className="animate-bounce" />
            <span className="text-[8px] font-sans font-bold uppercase tracking-[0.6em] opacity-80 group-hover:opacity-100 transition-opacity whitespace-nowrap">SCROLL TO EXPLORE</span>
          </div>
        </div>
      </section>

      {/* 2. Trust Strip */}
      <section className="bg-[#05100a] py-16 md:py-20 overflow-hidden border-y border-white/5 relative">
        {/* Subtle Ambient Glow for the strip */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,185,130,0.04)_0%,_transparent_70%)] pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="flex flex-col items-center space-y-12 md:space-y-16">
            <div className="flex items-center gap-4 fade-up">
               <div className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent to-[#D4B982]/30" />
               <span className="text-[9px] md:text-[11px] text-[#D4B982]/80 uppercase tracking-[0.4em] md:tracking-[0.6em] font-bold text-center">
                 OUR ESTEEMED CORPORATE CLIENTELE
               </span>
               <div className="w-8 md:w-16 h-px bg-gradient-to-l from-transparent to-[#D4B982]/30" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 md:gap-16 lg:gap-24 items-center justify-items-center w-full max-w-6xl">
              {trustLogos.map((logo, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "flex flex-col items-center text-center group fade-up w-full transition-all duration-700",
                    i === 4 && "col-span-2 md:col-span-1" // Center the last logo on mobile 2-col grid
                  )}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {logo.render ? (
                    <div className="relative w-full flex justify-center scale-90 md:scale-100">
                      {logo.render()}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <span className="text-lg md:text-xl font-serif text-white/70 tracking-[0.15em] group-hover:text-[#D4B982] group-hover:scale-110 transition-all duration-700 ease-expo">
                        {logo.name}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Services */}
      <section id="services" className="pt-10 pb-8 md:pt-16 md:pb-16 bg-[#FDFBF7] relative overflow-hidden">
        {/* Subtle Background Flourish */}
        <div className="absolute top-0 right-0 w-[40%] h-full opacity-[0.03] pointer-events-none">
          <div className="w-full h-full dot-pattern" />
        </div>
        
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center space-y-4 mb-10 fade-up">
            <span className="text-[10px] md:text-[11px] text-[#D4B982] uppercase tracking-[0.7em] font-bold">WHAT WE DO</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-[#121212] tracking-tight">Our Services</h2>
            <div className="relative pt-4 flex items-center justify-center">
              <div className="w-24 h-px bg-[#D4B982]/40" />
              <div className="mx-6 w-3 h-3 rotate-45 border border-[#D4B982]/60 bg-[#FDFBF7]" />
              <div className="w-24 h-px bg-[#D4B982]/40" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {services.map((service, i) => (
              <div 
                key={i} 
                className="group relative flex flex-col bg-[#0a1f13] rounded-2xl overflow-hidden transition-all duration-700 hover:-translate-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.3)] fade-up h-full" 
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="h-56 relative overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-700" />
                </div>
                
                <div className="p-8 md:p-9 flex-grow flex flex-col justify-between relative">
                   <div className="space-y-6">
                     <div className="flex gap-4 items-center">
                       <div className="text-[#D4B982] shrink-0">
                         {React.cloneElement(service.icon as React.ReactElement<LucideProps>, { size: 28, strokeWidth: 1.2 })}
                       </div>
                       <h3 className="text-[16px] md:text-[18px] font-serif text-white tracking-[0.05em] leading-tight uppercase font-medium">
                         {service.title}
                       </h3>
                     </div>
                     <p className="text-[12px] md:text-[13px] text-white/50 font-sans font-light leading-relaxed group-hover:text-white/80 transition-colors">
                       {service.desc}
                     </p>
                   </div>
                   <div className="pt-8">
                     <Link href="/services" className="inline-flex items-center gap-3 text-[10px] text-[#D4B982] uppercase tracking-[0.5em] font-bold group/link relative transition-all">
                       <span className="relative z-10">EXPLORE</span>
                       <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform duration-500" />
                     </Link>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. About Us Section */}
      <section className="pt-8 pb-12 md:pt-16 md:pb-36 bg-[#FDFBF7] relative overflow-hidden border-t border-linen/20">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            {/* Images Column - Refined Editorial Layout */}
            <div className="relative fade-up">
              <div className="aspect-[3/4] relative rounded-none overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.12)] z-10 border border-linen/30">
                <Image src="/assets/wedding/wedding-5.jpg" alt="Event setup" fill className="object-cover" />
                <div className="absolute inset-0 bg-heritage/10 mix-blend-multiply" />
              </div>
              <Link href="/portfolio" className="absolute -bottom-12 -right-12 w-[75%] aspect-[4/3] rounded-none overflow-hidden shadow-[0_50px_120px_rgba(0,0,0,0.25)] z-20 border-[15px] border-white hidden md:block group cursor-pointer">
                <Image src="/assets/production/production-1.jpg" alt="Detail" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-x-0 bottom-0 bg-heritage/90 py-4 px-6 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo">
                   <span className="text-[10px] text-white uppercase tracking-[0.5em] font-bold">VIEW WORK</span>
                </div>
              </Link>
              
              {/* Subtle accent line */}
              <div className="absolute -top-10 -left-10 w-32 h-32 border-t border-l border-[#D4B982]/20 z-0" />
            </div>

            {/* Text Column - Editorial Hierarchy */}
            <div className="space-y-12 fade-up lg:pl-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-px bg-[#D4B982]" />
                  <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.6em] font-bold">ABOUT US</span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-[#121212] leading-[1.1] uppercase">
                    WE DON&apos;T PLAN EVENTS.
                  </h2>
                  <h3 className="font-script text-[#D4B982] text-3xl md:text-4xl lg:text-5xl lowercase leading-none italic -mt-2">
                    we curate experiences.
                  </h3>
                </div>
                <div className="space-y-8 text-[#525252] leading-relaxed font-sans font-light text-base md:text-lg opacity-90 max-w-xl pt-4">
                  <p>
                    Zing Bliss Events is dedicated to turning life&apos;s special moments into unforgettable experiences. We specialize in planning, designing and executing events with creativity, precision and professionalism.
                  </p>
                </div>
              </div>

              <div className="pt-0 flex flex-wrap items-center gap-4">
                <Magnetic strength={0.1}>
                  <Link href="/contact">
                    <Button className="btn-gold h-14 md:h-15 px-10">
                      BOOK CONSULTATION
                    </Button>
                  </Link>
                </Magnetic>
                <Magnetic strength={0.1}>
                  <Link href="/about">
                    <Button variant="outline" className="h-14 md:h-15 px-10 border-[#D4B982]/50 !text-[#D4B982] hover:bg-[#D4B982] hover:!text-white rounded-none tracking-[0.4em] font-bold text-[11px] uppercase bg-transparent transition-all duration-700">
                      STORY
                    </Button>
                  </Link>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background floral decoration - Bottom Right */}
        <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] opacity-[0.1] pointer-events-none z-0 transition-all duration-1000 mix-blend-multiply overflow-hidden">
          <Image src="/flower-decor.png" alt="" fill className="object-contain object-right-bottom scale-110" />
        </div>
      </section>

      {/* 5. How We Work Section */}
      <HowWeWork />

      {/* 6. Experience Categories & Why Choose Us - Combined Flow */}
      <section className="bg-[#0a1f13] relative overflow-hidden">
        {/* Ambient Depth Glow - Refined */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,185,130,0.04)_0%,_transparent_70%)] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        {/* Experience Categories Part */}
        <div className="pt-10 pb-2">
          <div className="container relative z-10">
            <div className="flex flex-col items-center text-center space-y-3 mb-5 fade-up">
              <span className="text-[10px] text-[#D4B982] uppercase tracking-[0.7em] font-bold">EXPERIENCE CATEGORIES</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-white tracking-tight leading-tight">Moments We Bring To Life</h2>
              <div className="relative pt-3 flex items-center justify-center">
                <div className="w-16 h-px bg-white/10" />
                <div className="mx-4 w-2.5 h-2.5 rotate-45 border border-[#D4B982]/40 bg-[#0a1f13]" />
                <div className="w-16 h-px bg-white/10" />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
              {categories.map((cat, i) => (
                <div 
                  key={i} 
                  className="group relative aspect-[1.4/1] rounded-sm overflow-hidden cursor-pointer fade-up transition-all duration-700 hover:scale-[1.02] ring-1 ring-white/5 shadow-2xl" 
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <Image 
                    src={cat.image} 
                    alt={cat.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                    sizes="(max-width: 768px) 50vw, 15vw"
                  />
                  
                  {/* Refined Gradient Overlay - Stronger for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 group-hover:opacity-70 transition-opacity duration-700" />
                  
                  <div className="absolute inset-x-0 bottom-4 text-center px-2 transform group-hover:-translate-y-1 transition-transform duration-700">
                    <span className="text-[8px] md:text-[9px] font-bold text-white uppercase tracking-[0.2em] drop-shadow-2xl group-hover:text-[#D4B982] transition-all duration-500 block">
                      {cat.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8 fade-up">
              <Link href="/portfolio">
                <Button variant="outline" className="h-10 px-8 border-white/15 !text-white hover:bg-[#D4B982] hover:!text-white hover:border-[#D4B982] rounded-none tracking-[0.4em] font-bold text-[9px] uppercase backdrop-blur-sm transition-all duration-700">
                  VIEW ALL EVENTS
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Why Choose Us Part - Integrated */}
        <div className="pb-10 pt-2 relative">
          <div className="container relative z-10">
            <div className="text-center mb-5 fade-up">
              <span className="text-[10px] text-[#D4B982] uppercase tracking-[0.7em] font-bold opacity-80">
                WHY CHOOSE ZING BLISS EVENTS?
              </span>
              <div className="w-12 h-px bg-[#D4B982]/20 mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-4 relative z-10">
              {whyChooseUs.map((item, i) => (
                <div 
                  key={i} 
                  className="flex flex-row items-center lg:items-start text-left space-x-4 fade-up group" 
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="text-[#D4B982] shrink-0 group-hover:scale-110 transition-transform duration-700 relative pt-1">
                    <div className="absolute inset-0 blur-2xl bg-[#D4B982]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    {React.cloneElement(item.icon as React.ReactElement<LucideProps>, { 
                      size: 32, 
                      strokeWidth: 0.75 
                    })}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[10px] md:text-[11px] font-bold text-[#D4B982] uppercase tracking-[0.2em] leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[10px] md:text-[11px] text-white/50 font-sans leading-relaxed font-light group-hover:text-white/80 transition-colors duration-700">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 7. Testimonials */}
      <section className="py-12 md:py-10 bg-[#FDFBF7] relative overflow-hidden">
        {/* Deep Decorative Background Rings - Matching Reference 1 */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#D4B982]/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-[#D4B982]/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[1600px] border border-[#D4B982]/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8)_0%,_transparent_70%)]" />
        </div>

        {/* Decorative background element - bottom line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-linen/40 to-transparent" />
        
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center space-y-6 mb-5 fade-up">
            <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">CLIENT LOVE</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-[#121212] tracking-tighter">Words That Inspire Us</h2>
            
            {/* Refined Diamond Separator */}
            <div className="relative pt-6 flex items-center justify-center">
              <div className="w-20 h-px bg-[#D4B982]/30" />
              <div className="mx-6 w-3 h-3 rotate-45 border border-[#D4B982]/40 bg-[#FDFBF7] shadow-sm flex items-center justify-center">
                <div className="w-1 h-1 bg-[#D4B982]/60 rotate-45" />
              </div>
              <div className="w-20 h-px bg-[#D4B982]/30" />
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {testimonials.map((t, i) => (
                <div 
                  key={i} 
                  className="bg-white p-8 md:p-10 rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-linen/20 flex flex-col items-center text-center space-y-6 fade-up transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] group relative" 
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {/* Avatar - Refined & Integrated */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full overflow-hidden border-4 border-[#FDFBF7] shadow-xl transition-transform duration-700 group-hover:scale-110">
                    <Image src={t.image} alt={t.author} fill className="object-cover scale-110" />
                  </div>

                  <div className="pt-4 space-y-6 flex-grow flex flex-col items-center justify-center">
                    <div className="text-[#D4B982]/20 transform group-hover:scale-110 transition-transform duration-700">
                       <Sparkles size={20} strokeWidth={1} />
                    </div>
                    
                    <p className="text-[14px] md:text-[15px] text-[#525252] font-sans italic leading-relaxed opacity-90 font-light">
                      &quot;{t.content}&quot;
                    </p>
                    
                    <div className="flex flex-col items-center gap-2 pt-4 w-full mt-auto">
                      <div className="w-6 h-px bg-linen group-hover:w-10 group-hover:bg-[#D4B982]/40 transition-all duration-700" />
                      <span className="text-[10px] font-bold text-[#121212] uppercase tracking-[0.3em] block">
                        {t.author}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="relative py-12 md:py-10 overflow-hidden bg-heritage">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/wedding/wedding-3.jpg" 
            alt="CTA Background" 
            fill 
            className="object-cover brightness-[0.2] scale-105" 
          />
          {/* Multi-layered Cinematic Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,185,130,0.15)_0%,_transparent_75%)]" />
        </div>
        
        <div className="container relative z-10 text-center">
          <div className="space-y-8 fade-up">
            <div className="flex items-center justify-center gap-3 mb-4">
               <div className="w-12 h-px bg-[#D4B982]/40" />
               <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">READY TO BEGIN?</span>
               <div className="w-12 h-px bg-[#D4B982]/40" />
            </div>
            
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] tracking-tighter relative z-10">
                Let&apos;s Create Something
              </h2>
              <span className="font-script text-[#D4B982] text-5xl md:text-6xl lg:text-[7rem] block -mt-4 md:-mt-8 lg:-mt-6 italic drop-shadow-[0_15px_45px_rgba(212,185,130,0.4)] relative z-20">
                Unforgettable
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-16 fade-up" style={{ transitionDelay: '200ms' }}>
            <Magnetic strength={0.1}>
              <Link href="/contact">
                <Button className="btn-gold h-16 px-16">
                  BOOK A CONSULTATION
                </Button>
              </Link>
            </Magnetic>
            <Magnetic strength={0.1}>
              <Link href="/portfolio">
                <Button variant="outline" className="h-16 px-14 border-[#D4B982]/50 !text-[#D4B982] hover:bg-[#D4B982] hover:!text-white rounded-none tracking-[0.3em] font-bold text-[11px] uppercase transition-all duration-700 backdrop-blur-md group">
                   VIEW PORTFOLIO
                </Button>
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>

    </main>
  );
}
