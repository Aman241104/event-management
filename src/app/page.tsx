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
  CalendarRange,
  Volume2,
  VolumeX
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/atoms/Button';
import { Magnetic } from '@/components/atoms/Magnetic';
import { TextReveal } from '@/components/atoms/TextReveal';
import { ParallaxImage } from '@/components/atoms/ParallaxImage';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { WhatsAppLogo } from '@/components/atoms/WhatsAppLogo';
import { HowWeWork } from '@/components/organisms/HowWeWork';
import { RollingCounter } from '@/components/atoms/RollingCounter';
import { MaskSlideImage } from '@/components/molecules/MaskSlideImage';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const trustLogos = [
  { 
    name: 'Reliance Insurance', 
    type: 'custom',
    render: () => (
      <div className="flex flex-col items-center group">
        <div className="relative w-28 h-16 opacity-80 group-hover:opacity-100 transition-all duration-700 brightness-0 invert">
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
        <div className="relative w-28 h-16 opacity-80 group-hover:opacity-100 transition-all duration-700 brightness-125 md:brightness-100">
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
        <div className="relative w-32 h-20 opacity-80 group-hover:opacity-100 transition-all duration-700">
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
        <div className="relative w-56 h-32 opacity-80 group-hover:opacity-100 transition-all duration-700">
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
    title: 'WEDDING PRODUCTION',
    desc: 'Bespoke wedding planning and production that reflects your unique story.',
    image: '/assets/wedding/wedding-5.jpg',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="12" r="5" />
        <circle cx="15" cy="12" r="5" />
      </svg>
    ),
  },
  {
    title: 'CORPORATE EXCELLENCE',
    desc: 'Strategic event management for conferences, summits, and corporate galas.',
    image: '/assets/corporate/corporate-6.jpg',
    icon: <Briefcase size={22} strokeWidth={0.75} />,
  },
  {
    title: 'PRIVATE CELEBRATIONS',
    desc: 'Seamless management of birthdays, anniversaries, and intimate soirees.',
    image: '/assets/birthday/birthday-1.jpg',
    icon: <Cake size={22} strokeWidth={0.75} />,
  },
  {
    title: 'FULL-SCALE PRODUCTION',
    desc: 'Technical solutions, stage design, and end-to-end event execution.',
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
  { title: 'FESTIVALS', image: '/assets/corporate/corporate-7.jpg' },
  { title: 'PRIVATE PARTIES', image: '/assets/birthday/birthday-3.jpg' },
];

const whyChooseUs = [
  {
    title: 'STRATEGIC PLANNING',
    desc: 'Meticulous blueprints tailored to your specific goals.',
    icon: <Sparkles size={24} strokeWidth={1.5} />,
  },
  {
    title: 'FLAWLESS EXECUTION',
    desc: 'On-site management that ensures every detail is perfect.',
    icon: <Zap size={24} strokeWidth={1.5} />,
  },
  {
    title: 'VENDOR MASTERY',
    desc: 'A premium network of partners delivering absolute quality.',
    icon: <Users2 size={24} strokeWidth={1.5} />,
  },
  {
    title: 'LOGISTICAL PRECISION',
    desc: 'Timing, coordination, and management handled with grace.',
    icon: <Layers size={24} strokeWidth={1.5} />,
  },
  {
    title: 'CREATIVE DIRECTION',
    desc: 'Designing atmospheric spaces that resonate with intent.',
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
  const [isMuted, setIsMuted] = useState(true);

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
        duration: 0.8,
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
      duration: 1.2, 
      ease: 'expo.out',
      force3D: true
    })
    .from('.hero-subtitle', { 
      y: 30, 
      opacity: 0, 
      duration: 0.8, 
      ease: 'power3.out',
      force3D: true
    }, '-=0.8')
    .from('.hero-btns', { 
      y: 30, 
      opacity: 0, 
      duration: 0.8, 
      ease: 'power3.out',
      force3D: true
    }, '-=0.6');

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="bg-canvas overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] min-h-[750px] md:min-h-[900px] flex items-start justify-start overflow-hidden bg-heritage pt-16 md:pt-40">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/wedding/wedding-7.jpg" 
            alt="Hero Background" 
            fill 
            className="object-cover brightness-[0.5] scale-105" 
            priority
            sizes="100vw"
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
                Crafting <br />
                Extraordinary <span className="font-script text-[#D4B982] text-[5rem] sm:text-8xl md:text-[10rem] lg:text-[11.5rem] lowercase ml-1 md:ml-4 italic relative top-2 md:top-3 drop-shadow-[0_10px_40px_rgba(212,185,130,0.4)] block md:inline">moments</span>
              </h1>
              <p className="hero-subtitle text-base md:text-xl text-white/90 font-serif italic max-w-xl leading-relaxed border-l-2 border-[#D4B982]/30 pl-6 md:pl-10">
                Exquisite event planning and production for weddings, <br className="hidden md:block" />
                corporate excellence, and life&apos;s most precious celebrations.
              </p>
            </div>

            <div className="hero-btns flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 pt-10 md:pt-14">
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
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:right-10 md:translate-x-0 flex items-center z-20">
          {/* Refined Scroll Indicator */}
          <div className="flex flex-col items-center gap-2 text-white/40 group cursor-pointer transition-colors hover:text-[#D4B982]">
            <ArrowDown size={16} className="animate-bounce" />
            <span className="text-[8px] font-sans font-bold uppercase tracking-[0.6em] opacity-80 group-hover:opacity-100 transition-opacity whitespace-nowrap">SCROLL TO EXPLORE</span>
          </div>
        </div>
        </section>

        <div className="section-divider" />

        {/* 2. Trust Strip */}
        <section className="bg-[#05100a] py-24 md:py-32 overflow-hidden relative">
        {/* Ambient Depth Glow - Refined for Proper Gaussian Transition */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent opacity-60 z-10 pointer-events-none blur-[80px]" />
        
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

        <div className="section-divider" />

        {/* 3. Our Services */}
        <section id="services" className="pt-24 pb-20 md:pt-48 md:pb-32 bg-[#FDFBF7] relative overflow-hidden">
        {/* Subtle Background Flourish */}
        <div className="absolute top-0 right-0 w-[40%] h-full opacity-[0.03] pointer-events-none">
          <div className="w-full h-full dot-pattern" />
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-24 md:mb-32">
            <div className="max-w-3xl space-y-6">
              <div className="flex items-center gap-3 fade-up">
                <div className="w-12 h-px bg-[#D4B982]" />
                <span className="text-[10px] md:text-[11px] text-[#D4B982] uppercase tracking-[0.7em] font-bold">WHAT WE DO</span>
              </div>
              <TextReveal 
                text="Our Services" 
                as="h2"
                className="text-5xl md:text-7xl lg:text-[7.5rem] font-serif font-medium text-[#121212] tracking-tight leading-[0.9]"
              />
            </div>
            <div className="pb-4 hidden md:block fade-up">
              <p className="text-sm md:text-base text-[#525252] font-serif italic max-w-xs leading-relaxed border-l border-[#D4B982]/30 pl-6">
                Tailored solutions for life&apos;s most <br/> distinguished occasions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 md:gap-y-40">
            {services.map((service, i) => (
              <div 
                key={i} 
                className={cn(
                  "group relative flex flex-col space-y-8 fade-up",
                  i % 2 === 1 ? "md:mt-32" : "" // Staggered grid
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
                  <MaskSlideImage 
                    src={service.image} 
                    alt={service.title} 
                    aspectRatio="aspect-[16/10]"
                    className="object-cover" 
                  />
                </div>

                <div className="flex flex-col space-y-6 max-w-md">
                   <div className="flex gap-4 items-center">
                     <div className="text-[#D4B982] shrink-0">
                       {React.cloneElement(service.icon as React.ReactElement<LucideProps>, { size: 32, strokeWidth: 1 })}
                     </div>
                     <h3 className="text-2xl md:text-3xl font-serif text-[#121212] tracking-tight uppercase font-medium">
                       {service.title}
                     </h3>
                   </div>
                   <p className="text-base md:text-lg text-[#525252] font-sans font-light leading-relaxed">
                     {service.desc}
                   </p>
                   <div className="pt-4">
                     <Link href="/services" className="inline-flex items-center gap-4 text-[10px] text-[#D4B982] uppercase tracking-[0.5em] font-bold group/link relative">
                       <span className="relative z-10">EXPLORE SERVICE</span>
                       <div className="w-12 h-px bg-[#D4B982]/30 group-hover/link:w-20 transition-all duration-500" />
                       <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform duration-500" />
                     </Link>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>

        <div className="section-divider" />

        {/* 4. About Us Section */}
        <section className="pt-32 pb-48 md:pt-60 md:pb-80 bg-[#FDFBF7] relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-12 items-center">
            {/* Images Column - Exaggerated Proportions */}
            <div className="lg:col-span-6 relative fade-up">
              <div className="aspect-[4/5] relative rounded-none overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.15)] z-10">
                <ParallaxImage 
                  src="/kamna-udernani.png" 
                  alt="Kamna Udernani - Founder" 
                  aspectRatio="h-full w-full"
                  className="object-cover" 
                />
              </div>

              <div className="absolute -bottom-16 -right-12 w-[60%] aspect-square rounded-none overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.2)] z-20 border-[20px] border-white hidden md:block">
                <ParallaxImage 
                  src="/assets/production/production-1.jpg" 
                  alt="Detail" 
                  aspectRatio="h-full w-full"
                  className="object-cover" 
                  speed={0.05}
                />
              </div>

              <div className="absolute -top-12 -left-12 w-48 h-48 border-t-2 border-l-2 border-[#D4B982]/20 z-0" />
            </div>

            {/* Text Column - High Contrast Spacing */}
            <div className="lg:col-span-5 lg:offset-1 space-y-16 fade-up lg:pl-12">
              <div className="space-y-10">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-px bg-[#D4B982]" />
                  <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">THE VISIONARY</span>
                </div>
                <div className="space-y-4">
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-[#121212] leading-[0.95] uppercase tracking-tighter">
                    WE DON&apos;T <br/> PLAN EVENTS.
                  </h2>
                  <h3 className="font-script text-[#D4B982] text-5xl md:text-6xl lg:text-7xl lowercase leading-none italic block transform -translate-x-2 md:-translate-x-4">
                    we curate experiences.
                  </h3>
                </div>
                <div className="pt-8 space-y-8 text-[#525252] leading-[1.8] font-sans font-light text-lg md:text-xl opacity-90 max-w-lg">
                  <p>
                    Zing Bliss Events is dedicated to turning life&apos;s special moments into unforgettable experiences. We specialize in planning, designing and executing events with creativity, precision and professionalism.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
                <Magnetic strength={0.1} className="w-full sm:w-auto">
                  <Link href="/contact" className="block w-full sm:w-auto">
                    <Button className="btn-gold w-full h-16 px-12">
                      BOOK CONSULTATION
                    </Button>
                  </Link>
                </Magnetic>
                <Magnetic strength={0.1} className="w-full sm:w-auto">
                  <Link href="/about" className="block w-full sm:w-auto">
                    <Button className="w-full h-16 px-12 bg-heritage text-white border border-[#D4B982]/20 hover:bg-black hover:border-[#D4B982]/50 rounded-none tracking-[0.4em] font-bold text-[11px] uppercase transition-all duration-700 shadow-xl">
                      OUR STORY
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

        <div className="section-divider" />

        {/* 5. How We Work Section */}
        <HowWeWork />

        <div className="section-divider" />

        {/* 6. Experience Categories & Why Choose Us - Combined Flow */}
        <section className="bg-[#0a1f13] relative overflow-hidden">
        {/* Ambient Depth Glow - Refined for Proper Gaussian Transition */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,185,130,0.06)_0%,_transparent_70%)] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#05100a] to-transparent opacity-100 z-10 pointer-events-none blur-[100px]" />
        
        {/* Experience Categories Part */}
        <div className="pt-24 pb-12 md:pt-40 md:pb-24">
          <div className="container relative z-10">
            <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16 fade-up">
              <div className="space-y-4">
                <span className="text-[10px] text-[#D4B982] uppercase tracking-[0.7em] font-bold">EXPERIENCE CATEGORIES</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white tracking-tight leading-tight">Moments We <br/> Bring To Life</h2>
              </div>
              <div className="pb-2">
                <Link href="/portfolio">
                  <Button variant="outline" className="h-12 px-8 border-white/15 !text-white hover:bg-[#D4B982] hover:!text-white hover:border-[#D4B982] rounded-none tracking-[0.4em] font-bold text-[10px] uppercase backdrop-blur-sm transition-all duration-700">
                    EXPLORE FULL PORTFOLIO
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[220px]">
              {categories.map((cat, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "group relative overflow-hidden cursor-pointer fade-up transition-all duration-700 shadow-2xl",
                    i === 0 ? "md:col-span-2 md:row-span-2" :
                    (i === 1 || i === 4 || i === 5) ? "md:col-span-2 md:row-span-1" : 
                    "md:col-span-1 md:row-span-1"
                  )}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <MaskSlideImage 
                    src={cat.image} 
                    alt={cat.title} 
                    aspectRatio="h-full w-full"
                    maskColor="bg-[#0a1f13]"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />

                  {/* Refined Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />

                  <div className="absolute inset-x-0 bottom-6 px-6 transform group-hover:-translate-y-1 transition-transform duration-700">
                    <span className="text-[9px] md:text-[10px] font-bold text-white uppercase tracking-[0.3em] group-hover:text-[#D4B982] transition-colors block">
                      {cat.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Part - Integrated */}
        <div className="pb-32 pt-20 md:pb-48 md:pt-32 relative">
          <div className="container relative z-10">
            <div className="text-center mb-24 fade-up">
              <span className="text-[10px] text-[#D4B982] uppercase tracking-[0.7em] font-bold opacity-80">
                WHY CHOOSE ZING BLISS EVENTS?
              </span>
              <div className="w-12 h-px bg-[#D4B982]/20 mx-auto mt-8" />
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
              {[
                { value: '20+', label: 'Years of Experience' },
                { value: '500+', label: 'Events Executed' },
                { value: '100+', label: 'Happy Clients' },
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="fade-up group relative bg-white/[0.03] border border-white/5 p-12 md:p-16 flex flex-col items-center text-center transition-all duration-1000 hover:bg-white/[0.07] hover:border-[#D4B982]/20"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Card Glow */}
                  <div className="absolute inset-0 bg-[#D4B982]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                  {/* Animated Number */}
                  <div className="relative z-10 mb-6">
                    <span className="text-7xl md:text-8xl font-serif text-[#D4B982] drop-shadow-[0_15px_40px_rgba(212,185,130,0.2)]">
                      <RollingCounter value={stat.value} />
                    </span>
                  </div>

                  {/* Label */}
                  <span className="relative z-10 text-[11px] md:text-[12px] font-bold text-white/40 uppercase tracking-[0.5em] group-hover:text-white/60 transition-colors">
                    {stat.label}
                  </span>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#D4B982]/0 group-hover:border-[#D4B982]/20 transition-all duration-1000" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#D4B982]/0 group-hover:border-[#D4B982]/20 transition-all duration-1000" />
                </div>
              ))}
            </div>
          </div>
        </div>
        </section>

        <div className="section-divider" />

        {/* 6.5 Cinematic Video Review */}
        <section className="py-32 md:py-60 bg-[#05100a] relative overflow-hidden">
        {/* Ambient Depth Glow - Refined for Proper Gaussian Transition */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#0a1f13] to-transparent opacity-100 z-10 pointer-events-none blur-[100px]" />
        
        {/* Editorial Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none opacity-[0.02] z-0">
          <span className="text-[30vw] font-script text-[#D4B982] leading-none block text-center">Zing Bliss</span>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(212,185,130,0.05)_0%,_transparent_50%)] pointer-events-none" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-center">

            {/* Video Column - Editorial Frame */}
            <div className="lg:col-span-5 relative fade-up">
              {/* Vertical Label */}
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-center hidden xl:block">
                <span className="text-[10px] font-mono text-[#D4B982]/40 uppercase tracking-[1em] whitespace-nowrap">MASTERCHEF SERIES • 2026</span>
              </div>

              <div className="relative aspect-[9/16] w-full max-w-[420px] mx-auto group">
                {/* Double Frame Effect */}
                <div className="absolute -inset-4 border border-[#D4B982]/10 z-0 pointer-events-none translate-x-4 translate-y-4 transition-transform duration-1000 group-hover:translate-x-0 group-hover:translate-y-0" />

                <div className="relative w-full h-full overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.6)] border border-white/5 rounded-sm z-10">
                <video
                  id="review-video"
                  src="/masterchef-review.mp4"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
                />

                {/* Mute/Unmute UI - Moved to Bottom Right */}
                <div className="absolute bottom-8 right-8 z-30 flex items-center gap-4">
                  <div className="flex flex-col items-end">
                    <span className="text-[8px] text-white font-bold uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {isMuted ? 'TAP TO UNMUTE' : 'SOUND ON'}
                    </span>
                  </div>
                  <button 
                    onClick={() => setIsMuted(!isMuted)}
                    className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-[#D4B982] hover:border-[#D4B982] transition-all duration-500 group/btn"
                  >
                    {isMuted ? (
                      <VolumeX className="text-white w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                    ) : (
                      <Volume2 className="text-white w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                    )}
                  </button>
                </div>
                  {/* Subtle Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Content Column - Magazine Hierarchy */}
            <div className="lg:col-span-7 space-y-16 fade-up">
              <div className="space-y-10">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-px bg-[#D4B982]" />
                  <span className="text-[11px] text-[#D4B982] uppercase tracking-[1em] font-bold">CLIENT TESTIMONIAL</span>
                </div>

                <div className="space-y-4">
                  <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.95] tracking-tight">
                    &quot;Kamna <span className="italic font-script text-[#D4B982] lowercase text-[1.1em] block md:inline md:ml-2">nails it</span>
                  </h2>
                  <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.95] tracking-tight">
                    when it comes to <br/> Zing Bliss.&quot;
                  </h2>
                </div>
              </div>

              <div className="space-y-12">
                <p className="text-white/50 text-xl md:text-3xl font-serif italic leading-relaxed max-w-2xl border-l border-[#D4B982]/20 pl-10 py-2">
                  &quot;It&apos;s not just about the decor or the luxurious food... It&apos;s about having that <span className="text-white">emotion</span> which is connected to that event.&quot;
                </p>

                <div className="flex items-center gap-8 pt-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden border border-[#D4B982]/30 p-1">
                      <Image 
                        src="/hero-8.jpg" 
                        alt="Reviewer" 
                        width={64} 
                        height={64} 
                        className="object-cover h-full rounded-full grayscale hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#D4B982] rounded-full flex items-center justify-center border-2 border-[#05100a]">
                       <Sparkles size={10} className="text-[#05100a]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-white font-serif text-2xl tracking-wide">The MasterChef Guest</p>
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] text-[#D4B982] uppercase tracking-[0.4em] font-bold">VERIFIED EXPERIENCE</span>
                      <div className="w-1 h-1 rounded-full bg-white/20" />
                      <span className="text-[9px] text-white/30 uppercase tracking-[0.4em] font-bold">AHMEDABAD</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-12">
                <Magnetic strength={0.1}>
                  <Link href="/portfolio">
                    <Button variant="outline" className="h-18 px-16 border-white/10 !text-white hover:bg-[#D4B982] hover:!text-white hover:border-[#D4B982] rounded-none tracking-[0.5em] font-bold text-[11px] uppercase transition-all duration-1000 backdrop-blur-sm group">
                      EXPLORE THE GALLERY <ArrowRight size={16} className="ml-4 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </Link>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
        </section>

        <div className="section-divider" />

        {/* 7. Testimonials */}
      <section className="py-24 md:py-48 bg-[#FDFBF7] relative overflow-hidden">
        {/* Ambient Depth Glow - Refined for Proper Gaussian Transition */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#05100a] to-transparent opacity-20 z-10 pointer-events-none blur-[100px]" />
        
        {/* Deep Decorative Background Rings */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-[#D4B982]/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] border border-[#D4B982]/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.9)_0%,_transparent_80%)]" />
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center space-y-8 mb-24 fade-up">
            <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">CLIENT LOVE</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-[#121212] tracking-tighter leading-tight max-w-4xl">
              Stories of <span className="italic font-script text-[1.2em] lowercase">Extraordinary</span> Celebrations
            </h2>
            
            <div className="relative pt-8 flex items-center justify-center">
              <div className="w-24 h-px bg-[#D4B982]/30" />
              <div className="mx-8 w-4 h-4 rotate-45 border border-[#D4B982]/40 bg-[#FDFBF7] shadow-sm flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#D4B982]/60 rotate-45" />
              </div>
              <div className="w-24 h-px bg-[#D4B982]/30" />
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
              {testimonials.map((t, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "bg-white p-10 md:p-14 rounded-sm shadow-[0_30px_80px_rgba(0,0,0,0.04)] border border-linen/20 flex flex-col items-center text-center space-y-8 fade-up transition-all duration-1000 hover:-translate-y-4 hover:shadow-[0_50px_100px_rgba(0,0,0,0.08)] group relative",
                    i === 1 ? "md:mt-16" : ""
                  )}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  {/* Avatar */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-[#FDFBF7] shadow-2xl transition-transform duration-1000 group-hover:scale-110">
                    <Image 
                      src={t.image} 
                      alt={t.author} 
                      fill 
                      className="object-cover" 
                      sizes="80px"
                    />
                  </div>

                  <div className="pt-6 space-y-8 flex-grow flex flex-col items-center justify-center">
                    <div className="text-[#D4B982]/20 transform group-hover:scale-125 transition-transform duration-1000">
                       <Sparkles size={24} strokeWidth={1} />
                    </div>
                    
                    <p className="text-lg md:text-xl text-[#525252] font-sans italic leading-[1.8] opacity-90 font-light max-w-[280px]">
                      &quot;{t.content}&quot;
                    </p>
                    
                    <div className="flex flex-col items-center gap-4 pt-6 w-full mt-auto">
                      <div className="w-8 h-px bg-linen group-hover:w-16 group-hover:bg-[#D4B982]/40 transition-all duration-1000" />
                      <span className="text-[11px] font-bold text-[#121212] uppercase tracking-[0.4em] block transition-colors group-hover:text-[#D4B982]">
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
      <section className="relative py-32 md:py-60 overflow-hidden bg-heritage">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/wedding/wedding-3.jpg" 
            alt="CTA Background" 
            fill 
            className="object-cover brightness-[0.15] scale-110" 
            sizes="100vw"
          />
          {/* Multi-layered Cinematic Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,185,130,0.1)_0%,_transparent_85%)]" />
        </div>
        
        <div className="container relative z-10 text-center">
          <div className="space-y-12 fade-up">
            <div className="flex items-center justify-center gap-4 mb-6">
               <div className="w-16 h-px bg-[#D4B982]/30" />
               <span className="text-[11px] text-[#D4B982] uppercase tracking-[1em] font-bold">READY TO BEGIN?</span>
               <div className="w-16 h-px bg-[#D4B982]/30" />
            </div>
            
            <div className="relative inline-block">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1] tracking-tighter relative z-10 uppercase">
                Let&apos;s Create Something <br/>
                <span className="font-script text-[#D4B982] text-6xl md:text-8xl lg:text-[10rem] lowercase italic block mt-4 drop-shadow-[0_20px_60px_rgba(212,185,130,0.5)] relative z-20">
                  Unforgettable
                </span>
              </h2>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-20 md:pt-24 fade-up" style={{ transitionDelay: '200ms' }}>
            <Magnetic strength={0.1}>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="btn-gold h-18 px-16 text-[11px]">
                  BOOK A CONSULTATION
                </Button>
              </Link>
            </Magnetic>
            <Magnetic strength={0.1}>
              <Link href="/portfolio" className="w-full sm:w-auto">
                <Button variant="outline" className="h-18 px-16 border-[#D4B982]/30 !text-[#D4B982] hover:bg-[#D4B982] hover:!text-white rounded-none tracking-[0.4em] font-bold text-[11px] uppercase transition-all duration-700 backdrop-blur-md group shadow-2xl">
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
