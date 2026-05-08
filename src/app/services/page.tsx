'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Sparkles, Music, Zap, MessageCircle, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/atoms/Button';
import { Magnetic } from '@/components/atoms/Magnetic';
import { MaskSlideImage } from '@/components/molecules/MaskSlideImage';
import { TextReveal } from '@/components/atoms/TextReveal';
import { SVGSpine } from '@/components/atoms/SVGSpine';
import { BackgroundFlourish } from '@/components/atoms/BackgroundFlourish';
import { generateWhatsAppLink, getGenericWhatsAppLink } from '@/lib/whatsapp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { HowWeWork } from '@/components/organisms/HowWeWork';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const serviceCategories = [
  {
    id: '01',
    label: '01 / ETERNAL',
    title: 'Weddings & Celebrations',
    description: 'We specialize in bespoke wedding experiences that reflect your unique story, style, and dreams. From intimate proposals to grand palace weddings, we architect legacies of love.',
    image: '/assets/wedding/wedding-7.jpg',
    tags: [
      'Luxury & Theme Weddings',
      'Destination Weddings',
      'Mehendi & Sangeet Celebrations',
      'Anniversary Celebrations',
      '“Marry Me” Proposals',
      'Hospitality & Transportation',
      'Cinematic Videography'
    ],
    bgColor: '#FDFCFB',
    maskClass: 'bg-canvas'
  },
  {
    id: '02',
    label: '02 / WHIMSICAL',
    title: 'Birthdays & Kids',
    description: 'From playful themes to premium setups, we create joyful celebrations filled with fun and imagination. We turn childhood dreams into vibrant, unforgettable realities.',
    image: '/assets/birthday/birthday-2.jpg',
    tags: [
      'Theme-Based Birthday Parties',
      'Balloon Décor & Styling',
      'DJ & Emcee (Compere)',
      'Fun Counters & Rides',
      'Creative Activity Stations',
      'Live Entertainment Shows',
      'Mascots & Characters',
      'Customized Return Gifts'
    ],
    bgColor: '#F9F8F6',
    maskClass: 'bg-surface'
  },
  {
    id: '03',
    label: '03 / PRESTIGE',
    title: 'Corporate Events',
    description: 'Professional, impactful, and seamlessly executed events designed to elevate your brand. We handle the logistics so you can focus on your business vision.',
    image: '/assets/corporate/corporate-1.jpg',
    tags: [
      'Product Launches & Conferences',
      'Annual Day & Awards Night',
      'Family Day & Engagement',
      'Team Building Activities',
      'Corporate Gatherings'
    ],
    bgColor: '#FFFFFF',
    maskClass: 'bg-white'
  },
  {
    id: '04',
    label: '04 / INTIMATE',
    title: 'Social & Lifestyle',
    description: 'Elegant and intimate celebrations tailored to your special moments. We bring a touch of sophistication to your personal milestones.',
    image: '/assets/birthday/birthday-3.jpg',
    tags: [
      'Baby Showers',
      'Ring Ceremony',
      'Get-Togethers & Private Parties',
      'Theme Parties',
      'Housewarming Ceremonies'
    ],
    bgColor: '#FDFCFB',
    maskClass: 'bg-canvas'
  },
  {
    id: '05',
    label: '05 / HERITAGE',
    title: 'Festival Celebrations',
    description: 'Celebrate traditions with a touch of creativity and style. We curate festive experiences that honor culture while embracing modern elegance.',
    image: '/assets/corporate/corporate-7.jpg',
    tags: [
      'Diwali Décor & Events',
      'Christmas Celebrations',
      'Holi Events',
      'Customized Festive Experiences'
    ],
    bgColor: '#F9F8F6',
    maskClass: 'bg-surface'
  },
  {
    id: '06',
    label: '06 / ARTISTRY',
    title: 'Artist Management',
    description: 'We bring the best talent to your event, ensuring unforgettable entertainment. From Bollywood stars to innovative global acts, we curate the energy of your night.',
    image: '/assets/production/production-1.jpg',
    tags: [
      'Bollywood & Reality Stars',
      'Singers, Performers & Bands',
      'DJs & Anchors',
      'Stand-Up Comedians',
      'International Artists',
      'Unique & Innovative Acts'
    ],
    bgColor: '#FFFFFF',
    maskClass: 'bg-white'
  }
];

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

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const DEFAULT_EASE = "power3.out";

    // 1. Hero Animations
    const heroTl = gsap.timeline();
    
    gsap.to(".hero-bg-wrapper", {
      scale: 1.05,
      duration: 20,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });

    heroTl.fromTo(".hero-header-reveal", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.2, ease: DEFAULT_EASE, force3D: true })
          .fromTo(".hero-title .text-line", { 
            y: 80,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 1.4,
            ease: "expo.out",
            force3D: true
          }, "-=0.8")
          .fromTo(".hero-subtext", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 1, ease: DEFAULT_EASE, force3D: true }, "-=0.8");

    // 2. Section Reveals - Enhanced for luxury feel
    const sections = gsap.utils.toArray<HTMLElement>('section');
    sections.forEach((section) => {
      gsap.fromTo(section.querySelectorAll('.fade-up'), 
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.12, 
          duration: 1.2, 
          ease: DEFAULT_EASE,
          overwrite: 'auto',
          force3D: true,
          scrollTrigger: {
            trigger: section,
            start: "top 94%",
            toggleActions: "play none none none"
          }
        }
      );
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-[#FDFBF7] selection:bg-[#D4B982] selection:text-black overflow-hidden">
      <div className="relative">
        
        {/* 1. Hero Section - Recreated from Reference */}
        <section id="hero" className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden bg-heritage">
          <div className="absolute inset-0 z-0 hero-bg-wrapper">
            <Image
              src="/assets/wedding/wedding-5.jpg"
              alt="Services Overview"
              fill
              className="object-cover brightness-[0.35]"
              priority
            />          </div>
          
          {/* Cinema Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-10" />
          
          <div className="container relative z-20 pt-32 md:pt-48">
            <div className="max-w-5xl space-y-10">
              <div className="hero-header-reveal flex flex-col items-start gap-4 opacity-0">
                 <div className="flex items-center gap-3">
                   <div className="w-12 h-px bg-[#D4B982]/40" />
                   <span className="text-[10px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">EVENT PRODUCTION</span>
                   <div className="w-12 h-px bg-[#D4B982]/40" />
                 </div>
              </div>
              
              <h1 className="hero-title text-5xl md:text-8xl lg:text-[8.5rem] font-serif text-white leading-[1] tracking-tight">
                <span className="block overflow-hidden">
                  <span className="text-line block">Engineering Elite</span>
                </span>
                <span className="block overflow-hidden">
                  <span className="text-line block italic font-script text-[#D4B982] mt-4 lg:text-[12rem] drop-shadow-[0_15px_45px_rgba(212,185,130,0.4)]">Celebrations</span>
                </span>
              </h1>

              <div className="max-w-xl hero-subtext opacity-0 pt-10">
                <p className="text-white/80 text-lg md:text-2xl font-serif italic border-l-2 border-[#D4B982]/30 pl-12 leading-relaxed">
                  From strategic planning to flawless execution, we provide comprehensive management for luxury events.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. What We Do Best Section - Recreated from Reference */}
        <section id="grid" className="py-32 md:py-56 bg-[#FDFBF7]">
          <div className="container text-center">
            <div className="space-y-6 mb-24 fade-up">
              <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.6em] font-bold">OUR CORE SOLUTIONS</span>
              <h2 className="text-4xl md:text-7xl font-serif text-[#121212] leading-tight tracking-tight">Professional Management</h2>
              <div className="w-16 h-px bg-[#D4B982]/30 mx-auto mt-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto">
              {[
                { 
                  title: 'WEDDING PRODUCTION', 
                  desc: 'Luxury weddings engineered with logistical precision and bespoke creative direction.', 
                  image: '/hero-2.jpg',
                  icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4B982]"><circle cx="9" cy="12" r="5" /><circle cx="15" cy="12" r="5" /></svg>
                },
                { 
                  title: 'CORPORATE EXCELLENCE', 
                  desc: 'Strategic event management for high-impact conferences, summits, and brand launches.', 
                  image: '/hero-1.jpg',
                  icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4B982]"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                },
                { 
                  title: 'PRIVATE CELEBRATIONS', 
                  desc: 'Seamless end-to-end management for intimate milestones and exclusive private parties.', 
                  image: '/private-celebrations.jpg',
                  icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4B982]"><path d="M6 2v10a6 6 0 0 0 12 0V2" /><line x1="9" y1="2" x2="9" y2="8" /><line x1="15" y1="2" x2="15" y2="8" /><path d="M12 12v10" /><path d="M9 18h6" /></svg>
                },
                { 
                  title: 'FULL-SCALE PRODUCTION', 
                  desc: 'Technical implementation, stage design, and comprehensive on-site event execution.', 
                  image: '/event-production.jpg',
                  icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4B982]"><rect x="3" y="4" width="18" height="16" rx="1" /><path d="M12 7l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z" /></svg>
                },
              ].map((item, i) => (
                <div key={i} className="group fade-up bg-white rounded-none shadow-2xl overflow-hidden text-left flex flex-col h-full border border-linen/20 transition-all duration-700 hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)]">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
                    {/* Floating Icon */}
                    <div className="absolute bottom-8 left-8 w-16 h-16 bg-white/90 backdrop-blur-md rounded-none border border-linen/30 flex items-center justify-center shadow-2xl z-20">
                       {item.icon}
                    </div>
                  </div>
                  <div className="p-12 md:p-14 pt-16 flex flex-col flex-grow space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl font-serif text-[#121212] tracking-wide">{item.title}</h3>
                      <p className="text-[15px] md:text-[16px] text-[#525252] leading-relaxed font-light">{item.desc}</p>
                    </div>
                    <Link href="/contact" className="mt-auto inline-flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.4em] text-[#D4B982] hover:text-[#B38B4D] transition-colors group/link">
                      PLAN YOUR EVENT <ArrowRight size={16} className="transform transition-transform group-hover/link:translate-x-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Detailed Services Section - Recreated from Reference */}
        <section id="details" className="py-32 md:py-56 bg-[#05100a] relative overflow-hidden">
          {/* Subtle Background Texture */}
          <div className="absolute inset-0 dot-pattern opacity-[0.05] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(179,139,77,0.08)_0%,_transparent_70%)] pointer-events-none" />
          
          <div className="container relative z-10 text-center">
            <div className="space-y-6 mb-24 fade-up">
              <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.6em] font-bold">MANAGEMENT IN DETAIL</span>
              <h2 className="text-4xl md:text-7xl font-serif text-white leading-tight tracking-tight">Comprehensive Event Implementation</h2>
              <div className="w-16 h-px bg-[#D4B982]/30 mx-auto mt-8" />
            </div>

            <div className="space-y-32 md:space-y-64">
              {[
                { 
                  id: '01', 
                  title: 'WEDDINGS', 
                  tags: ['Bespoke Concept & Blueprints', 'Venue Sourcing & Styling', 'Logistical Coordination', 'Hospitality Management', 'On-Site Production'],
                  image: '/assets/wedding/wedding-7.jpg'
                },
                { 
                  id: '02', 
                  title: 'CORPORATE EVENTS', 
                  tags: ['Conferences & Summits', 'Product Launch Management', 'Annual Day Celebrations', 'Brand Activations', 'Technical Stage Design'],
                  image: '/assets/corporate/corporate-6.jpg'
                },
                { 
                  id: '03', 
                  title: 'PRIVATE CELEBRATIONS', 
                  tags: ['Milestone Anniversaries', 'Elite Birthday Parties', 'Intimate Soirees', 'Festive Event Design', 'Bespoke Guest Experiences'],
                  image: '/assets/wedding/wedding-1.jpg'
                },
                { 
                  id: '04', 
                  title: 'PRODUCTION & ENTERTAINMENT', 
                  tags: ['Artist & Talent Management', 'Lighting & AV Engineering', 'Live Production Setup', 'Stage Management', 'Flawless Technical Execution'],
                  image: '/assets/production/production-1.jpg'
                },
              ].map((service, index) => (
                <div key={service.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                  {/* Image Side */}
                  <div className={cn("lg:col-span-7 fade-up", index % 2 !== 0 ? "lg:order-2" : "")}>
                    <div className="relative aspect-[16/9] overflow-hidden rounded-none border border-[#D4B982]/20 shadow-2xl group">
                       <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
                       <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700" />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={cn("lg:col-span-5 text-left space-y-12 fade-up", index % 2 !== 0 ? "lg:order-1 lg:text-right" : "")}>
                    <div className="space-y-6">
                      <div className={cn("flex items-center gap-4", index % 2 !== 0 ? "justify-end" : "justify-start")}>
                        <span className="text-[14px] font-mono text-[#D4B982] font-bold tracking-widest">{service.id}</span>
                        <div className="w-12 h-px bg-[#D4B982]/30" />
                      </div>
                      <h3 className="text-3xl md:text-5xl font-serif text-white tracking-wide">{service.title}</h3>
                    </div>

                    <ul className={cn("space-y-5", index % 2 !== 0 ? "text-right" : "text-left")}>
                      {service.tags.map((tag) => (
                        <li key={tag} className={cn("text-[14px] text-white/80 font-light flex items-center gap-5", index % 2 !== 0 ? "flex-row-reverse" : "flex-row")}>
                          <div className="w-1.5 h-1.5 bg-[#D4B982]/60 rounded-full shrink-0 shadow-[0_0_10px_rgba(212,185,130,0.4)]" />
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6">
                      <Magnetic strength={0.1}>
                        <Link href="/contact">
                           <Button variant="outline" className="border-[#D4B982]/40 !text-white hover:bg-[#D4B982] hover:!text-heritage px-12 py-5 text-[11px] bg-heritage/20 backdrop-blur-sm shadow-[0_0_20px_rgba(212,185,130,0.1)] transition-all duration-700">
                             INQUIRE NOW
                           </Button>
                        </Link>
                      </Magnetic>
                    </div>                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <HowWeWork />

        {/* 4. The Zing Bliss Advantage - Recreated from Reference */}
        <section id="advantage" className="py-32 md:py-56 bg-[#FDFBF7] relative overflow-hidden">
          <div className="container text-center">
            <div className="space-y-6 mb-24 fade-up">
              <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">WHY CHOOSE US</span>
              <h2 className="text-4xl md:text-7xl font-serif text-[#121212] leading-tight tracking-tight">The Production Advantage</h2>
              <div className="w-16 h-px bg-[#D4B982]/30 mx-auto mt-8" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-16 lg:gap-8">
              {[
                { 
                  title: 'Strategic Mastery', 
                  desc: 'Meticulous planning that aligns with your specific goals.',
                  icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4B982" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
                },
                { 
                  title: 'Seamless Production', 
                  desc: 'Flawless coordination from conceptual design to wrap.',
                  icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4B982" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                },
                { 
                  title: 'Absolute Quality', 
                  desc: 'A refusal to compromise on the caliber of any detail.',
                  icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4B982" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" /></svg>
                },
                { 
                  title: 'Elite Team', 
                  desc: 'Dedicated specialists committed to event success.',
                  icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4B982" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                },
                { 
                  title: 'Unrivalled Focus', 
                  desc: 'Your objectives remain our primary driving force.',
                  icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4B982" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                },
              ].map((item, i) => (
                <div key={i} className="space-y-10 fade-up group" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="w-24 h-24 mx-auto flex items-center justify-center border border-[#D4B982]/10 rounded-full bg-white shadow-xl group-hover:border-[#D4B982]/40 group-hover:bg-[#D4B982]/5 transition-all duration-700 transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div className="space-y-4 px-2">
                    <h4 className="text-xl font-bold text-[#121212] uppercase tracking-wider font-serif">{item.title}</h4>
                    <p className="text-[#525252] text-[13px] leading-relaxed max-w-[180px] mx-auto font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Final CTA - Recreated from Reference */}
        <section className="relative py-32 md:py-48 overflow-hidden bg-[#05100a] text-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/wedding/wedding-3.jpg"
              alt="Final CTA Background"
              fill
              className="object-cover brightness-[0.15] scale-105"
            />            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-[#05100a] opacity-90 z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,185,130,0.1)_0%,_transparent_75%)] z-10" />
          </div>
          
          <div className="container relative z-20 text-center">
            <div className="space-y-8 fade-up">
              <h2 className="text-4xl md:text-7xl lg:text-[7.5rem] font-serif text-white leading-[1] tracking-tighter relative z-10">
                Ready to Plan Your Next Event?
              </h2>
              <span className="font-script text-[#D4B982] text-6xl md:text-9xl lg:text-[11rem] block -mt-4 md:-mt-8 lg:-mt-10 italic drop-shadow-[0_15px_45px_rgba(212,185,130,0.4)] relative z-20">
                Discuss Your Vision
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-20 fade-up" style={{ transitionDelay: '200ms' }}>
              <Magnetic strength={0.1}>
                <Link href="/contact">
                  <Button className="btn-gold h-16 px-16 text-[12px]">
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
                       <span className="text-white group-hover:text-[#D4B982] transition-colors uppercase">Chat on WhatsApp</span>
                     </div>
                  </Button>
                </a>
              </Magnetic>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
