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

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const serviceCategories = [
  {
    id: '01',
    label: '01 / ETERNAL',
    title: 'Weddings & Celebrations',
    description: 'We specialize in bespoke wedding experiences that reflect your unique story, style, and dreams. From intimate proposals to grand palace weddings, we architect legacies of love.',
    image: '/decor-2.jpg',
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
    image: '/hero-4.jpg',
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
    image: '/hero-1.jpg',
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
    image: '/private-celebrations.jpg',
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
    image: '/hero-8.jpg',
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
    image: '/hero-6.jpg',
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

    heroTl.fromTo(".hero-header-reveal", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.2, ease: DEFAULT_EASE })
          .fromTo(".hero-title .text-line", { 
            y: 80,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 1.4,
            ease: "expo.out" 
          }, "-=0.8")
          .fromTo(".hero-subtext", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 1, ease: DEFAULT_EASE }, "-=0.8");

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
        
        {/* 1. Hero Section - Compact & Atmospheric */}
        <section id="hero" className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden bg-heritage">
          <div className="absolute inset-0 z-0 hero-bg-wrapper">
            <Image 
              src="/decor-1.jpg" 
              alt="Services Overview" 
              fill 
              className="object-cover brightness-[0.25]"
              priority
            />
          </div>
          
          {/* Cinema Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,185,130,0.12)_0%,_transparent_75%)] z-10" />
          
          <div className="container relative z-20">
            <div className="max-w-4xl space-y-6">
              <div className="hero-header-reveal flex items-center gap-6 opacity-0">
                 <div className="w-12 h-px bg-[#D4B982]/40" />
                 <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">OUR SERVICES</span>
                 <div className="w-12 h-px bg-[#D4B982]/40" />
              </div>
              
              <h1 className="hero-title text-5xl md:text-7xl lg:text-[8rem] font-serif text-white leading-[0.85] tracking-tighter">
                <span className="block overflow-hidden">
                  <span className="text-line block">The Art of the</span>
                </span>
                <span className="block overflow-hidden">
                  <span className="text-line block italic font-script text-[#D4B982] mt-4 lowercase lg:text-[10rem] drop-shadow-[0_15px_45px_rgba(212,185,130,0.4)]">Extraordinary</span>
                </span>
              </h1>

              <div className="max-w-xl hero-subtext opacity-0">
                <p className="text-white/70 text-lg md:text-xl font-serif italic border-l border-[#D4B982]/30 pl-10 leading-relaxed">
                  We curate atmosphere across celebrations, corporate gatherings, and bespoke moments — each designed with architectural precision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Intro Statement - Compact */}
        <section className="py-12 md:py-16 relative">
          <div className="container text-center max-w-2xl mx-auto space-y-6 fade-up">
            <span className="text-[10px] text-[#D4B982] uppercase tracking-[0.6em] font-bold">ATMOSPHERIC CURATION</span>
            <p className="text-xl md:text-2xl font-serif text-[#121212] leading-relaxed italic">
              "Every event is a unique narrative, composed with intention and executed with quiet luxury."
            </p>
            <div className="w-12 h-px bg-[#D4B982]/30 mx-auto pt-4" />
          </div>
        </section>

        {/* 3. Services Spectrum - Redesigned & Compact */}
        <div className="space-y-4 pb-20">
          {serviceCategories.map((service, index) => (
            <section 
              key={service.id}
              className={`py-12 md:py-16 relative overflow-hidden ${index % 2 !== 0 ? 'bg-white' : 'bg-transparent'}`}
            >
              <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                {/* Image Section - Sharper corners */}
                <div className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-2' : ''} fade-up`}>
                   <div className="relative aspect-[16/9] rounded-sm overflow-hidden shadow-2xl group">
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
                   </div>
                </div>

                {/* Content Section */}
                <div className={`lg:col-span-5 space-y-6 ${index % 2 !== 0 ? 'lg:order-1' : ''} fade-up`}>
                  <div className="space-y-3">
                    <span className="text-[10px] text-[#D4B982] font-bold uppercase tracking-[0.4em]">{service.label}</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-[#121212] leading-tight">{service.title}</h2>
                    <p className="text-[15px] text-[#525252] font-sans font-light leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div className="pt-6 border-t border-linen/30">
                    <ul className="grid grid-cols-1 gap-y-2">
                      {service.tags.slice(0, 4).map((tag) => (
                        <li key={tag} className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#121212]/70 font-bold flex items-center gap-3">
                          <div className="w-1 h-1 bg-[#D4B982]" />
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <a href={generateWhatsAppLink(service.title, 'Inquiry')} target="_blank" rel="noopener noreferrer">
                      <Button className="h-12 px-10 bg-[#D4B982] hover:bg-[#B38B4D] text-black rounded-none tracking-[0.3em] font-bold text-[10px] uppercase transition-all duration-700">
                        INQUIRE NOW
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* 4. Process Journey - Cohesive Vertical Style */}
        <section id="process" className="py-20 bg-white relative overflow-hidden">
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-6 mb-20 fade-up">
               <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">OUR PROCESS</span>
               <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#121212]">The Path to Perfection</h2>
               <div className="w-16 h-px bg-[#D4B982]/30 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Discovery', desc: 'Distilling your vision into a singular direction.', icon: <MessageCircle size={24} /> },
                { title: 'Curation', desc: 'Sourcing the finest artisans and materials.', icon: <Sparkles size={24} /> },
                { title: 'Architecture', desc: 'Mapping every touchpoint with precision.', icon: <Zap size={24} /> },
                { title: 'Execution', desc: 'Seamless orchestration of the extraordinary.', icon: <Star size={24} /> },
              ].map((step, i) => (
                <div key={i} className="bg-[#FDFBF7] p-10 space-y-8 fade-up group transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="flex justify-between items-start">
                    <span className="text-5xl font-serif italic text-[#D4B982]/10 group-hover:text-[#D4B982]/20 transition-colors">0{i+1}</span>
                    <div className="text-[#D4B982] group-hover:scale-110 transition-transform duration-700">{step.icon}</div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-serif italic text-[#121212]">{step.title}</h3>
                    <p className="text-[14px] text-[#525252] font-light leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. FAQ - Clean & Compact */}
        <section className="py-20 relative overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto space-y-16">
              <div className="text-center space-y-4 fade-up">
                <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.6em] font-bold">COMMON QUESTIONS</span>
                <h2 className="text-3xl md:text-5xl font-serif text-[#121212]">Queries & <span className="italic font-light text-[#D4B982]">Clarifications.</span></h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-up">
                {[
                  { q: 'Global Reach?', a: 'Based in Ahmedabad, we orchestrate celebrations globally.' },
                  { q: 'Timeline?', a: 'We recommend booking 8-12 months in advance for major events.' },
                  { q: 'Entertainment?', a: 'We manage elite talent from Bollywood to global acts.' },
                  { q: 'Customization?', a: 'Every event is a bespoke composition tailored to your legacy.' },
                ].map((faq, i) => (
                  <div key={i} className="space-y-4 border-l border-[#D4B982]/20 pl-8">
                    <h4 className="text-[16px] font-serif font-bold text-[#121212]">{faq.q}</h4>
                    <p className="text-[14px] text-[#525252] font-light leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Final CTA - Consistent with Home */}
        <section className="relative py-24 md:py-40 overflow-hidden bg-heritage">
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
                  Create Your Magic
                </h2>
                <span className="font-script text-[#D4B982] text-6xl md:text-8xl lg:text-[10rem] block -mt-4 md:-mt-8 lg:-mt-12 italic drop-shadow-[0_15px_45px_rgba(212,185,130,0.4)] relative z-20">
                  With Zing Bliss.
                </span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-16 fade-up" style={{ transitionDelay: '200ms' }}>
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
      </div>
    </main>
  );
}
