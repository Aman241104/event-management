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
    image: '/decor-1.jpg',
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
    image: '/hero-7.jpg',
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
    image: '/decor-4.jpg',
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
    image: '/decor-2.jpg',
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
    image: '/decor-3.jpg',
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
  <div className={cn("flex flex-col items-center gap-2 py-4 relative z-10", className)}>
    <div className="flex items-center gap-3">
      <Sparkles size={6} className="text-heritage/20" />
      <Star size={8} className="text-heritage/30" />
      <Sparkles size={6} className="text-heritage/20" />
    </div>
  </div>
);

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const horizontalRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Hero Animations
    const heroTl = gsap.timeline();
    heroTl.to(".hero-label", { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
          .to(".hero-horiz-divider", { scaleX: 1, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .to(".hero-title", { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=0.6")
          .to(".hero-subtext", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.8")
          .to(".hero-divider", { scaleY: 1, duration: 1, ease: "expo.out" }, "-=0.6")
          .to(".hero-divider-dot", { opacity: 1, duration: 0.8 }, "-=0.4")
          .to(".hero-scroll-cue", { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }, "-=0.5");

    // Background slow zoom
    gsap.to(".hero-bg-image", {
      scale: 1.05,
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Scroll cue floating animation
    gsap.to(".hero-scroll-cue", {
      y: 15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Hero Parallax (Scroll-based)
    gsap.to(".hero-bg-image", {
      yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // 2. Service List Animations
    gsap.to(".list-intro", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".list-intro",
        start: "top 85%"
      }
    });

    gsap.utils.toArray<HTMLElement>('.service-section').forEach((section, i) => {
      const isEven = i % 2 === 0;
      const image = section.querySelector('.service-image-wrapper');
      const content = section.querySelector('.service-content');

      gsap.from(image, {
        x: isEven ? -60 : 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%"
        }
      });

      gsap.from(content, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%"
        }
      });
    });

    // 4. FAQ Animations
    gsap.to(".faq-card", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#faq",
        start: "top 75%"
      }
    });

    // 6. Final CTA Animations
    gsap.to(".cta-content", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#cta",
        start: "top 80%"
      }
    });

    gsap.to(".cta-bg-image", {
      scale: 1.15,
      ease: "none",
      scrollTrigger: {
        trigger: "#cta",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Hide sticky components when CTA is in view
    ScrollTrigger.create({
      trigger: "#cta",
      start: "top bottom-=100px",
      onEnter: () => gsap.to(["#sticky-cta-bar", "#back-to-top"], { opacity: 0, pointerEvents: "none", duration: 0.4, ease: "power2.out" }),
      onLeaveBack: () => gsap.to(["#sticky-cta-bar", "#back-to-top"], { opacity: 1, pointerEvents: "auto", duration: 0.4, ease: "power2.in" })
    });

    // 7. Process Journey Animations
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 1024px)", () => {
      if (!horizontalRef.current || !containerRef.current) return;
      
      const cards = gsap.utils.toArray<HTMLElement>('.process-card');
      const scrollWidth = horizontalRef.current.scrollWidth;
      const windowWidth = window.innerWidth;
      
      // Calculate total scroll distance
      const amountToScroll = scrollWidth - (windowWidth / 2) + (cards[0].offsetWidth / 2);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#process",
          start: "top top",
          end: () => `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });

      tl.to(horizontalRef.current, {
        x: -(scrollWidth - windowWidth + (windowWidth * 0.1)),
        ease: "none"
      });

      // Individual card animations as they pass the center
      cards.forEach((card, i) => {
        gsap.to(card, {
          scale: 1.1,
          boxShadow: '0 25px 50px -12px rgba(45, 76, 57, 0.15)',
          borderColor: 'var(--color-burnished)',
          backgroundColor: '#FFFFFF',
          scrollTrigger: {
            trigger: card,
            containerAnimation: tl,
            start: "left 60%",
            end: "left 40%",
            scrub: true,
          }
        });
        
        // Number reveal animation
        const number = card.querySelector('.card-number');
        if (number) {
          gsap.fromTo(number, 
            { opacity: 0.1, y: 20 },
            { 
              opacity: 1, 
              y: 0, 
              color: 'var(--color-heritage)',
              scrollTrigger: {
                trigger: card,
                containerAnimation: tl,
                start: "left 70%",
                end: "left 50%",
                scrub: true,
              }
            }
          );
        }
      });
    });

    mm.add("(max-width: 1023px)", () => {
      gsap.utils.toArray<HTMLElement>('.process-card').forEach((card) => {
        // Initial fade-up
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: 'top 95%' },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });

        // Focus effect as card reaches center
        gsap.to(card, {
          scale: 1.05,
          borderColor: 'var(--color-burnished)',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 20px 40px -10px rgba(45, 76, 57, 0.1)',
          scrollTrigger: {
            trigger: card,
            start: "top 60%",
            end: "top 40%",
            scrub: true,
          }
        });

        const number = card.querySelector('.card-number');
        if (number) {
          gsap.to(number, {
            opacity: 1,
            color: 'var(--color-heritage)',
            scrollTrigger: {
              trigger: card,
              start: "top 60%",
              end: "top 40%",
              scrub: true,
            }
          });
        }
      });
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    const refreshST = () => ScrollTrigger.refresh();
    window.addEventListener('resize', refreshST);
    
    return () => {
      window.removeEventListener('resize', refreshST);
    };
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen pt-16 pb-12 relative transition-colors duration-1000">
      <div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-heritage/5 to-transparent pointer-events-none" />
      <SVGSpine height="6000px" viewBox="0 0 20 6000" pathD="M 10 0 L 10 6000" opacity={0.05} />
      
      {/* 1. Hero Section */}
      <section id="hero" className="relative h-[92vh] flex items-center justify-center overflow-hidden" data-bg="var(--color-canvas)">
        {/* Refined Overlays & Vignettes */}
        <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_60%)] z-10 pointer-events-none" />
        <div className="absolute inset-0 backdrop-blur-[2px] z-10 pointer-events-none" />
        
        {/* Noise Texture Layer */}
        <div className="absolute inset-0 opacity-[0.03] z-10 pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

        <div className="absolute inset-0 z-0">
          <Image 
            src="/decor-1.jpg" 
            alt="Our Services" 
            fill 
            className="hero-bg-image object-cover" 
            priority 
            sizes="100vw" 
          />
        </div>

        <div className="container relative z-20 text-center flex flex-col items-center -translate-y-[6%]">
          <div className="max-w-[680px] w-full flex flex-col items-center">
            {/* Micro Label */}
            <span className="hero-label text-[11px] md:text-[12px] font-mono text-white/50 uppercase tracking-[0.4em] mb-6 opacity-0">
              03 / WHAT WE DO
            </span>

            {/* Horizontal Anchor Divider */}
            <div className="hero-horiz-divider w-24 h-[1px] bg-[#c6a16e]/40 mb-8 scale-x-0" />
            
            {/* Main Heading */}
            <h1 className="hero-title text-[clamp(48px,7vw,82px)] font-serif font-medium tracking-tighter text-white leading-[1.1] opacity-0">
              Our <span className="text-[#c6a16e]">Services.</span>
            </h1>

            {/* Subtext */}
            <p className="hero-subtext text-[15px] md:text-[17px] text-white/70 max-w-[600px] leading-[1.8] font-sans font-light mt-6 opacity-0">
              We craft experiences across weddings, celebrations, and corporate gatherings — designed with precision, executed with quiet luxury.
            </p>

            {/* Luxury Divider Detail */}
            <div className="hero-divider-container flex flex-col items-center mt-10">
              <div className="hero-divider w-[1px] h-[60px] bg-[#c6a16e]/50 scale-y-0" />
              <div className="hero-divider-dot w-1.5 h-1.5 rounded-full bg-[#c6a16e]/50 mt-3 opacity-0" />
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="hero-scroll-cue absolute bottom-[-4rem] left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0">
            <div className="w-px h-12 bg-gradient-to-b from-white/30 via-white/10 to-transparent" />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Services Spectrum List */}
      <div id="list" className="relative z-10 pt-16">
        {/* Section Intro Block */}
        <div className="container mb-24 text-center max-w-[600px] space-y-6 opacity-0 translate-y-8 list-intro">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-heritage/50 small-caps">OUR PORTFOLIO OF EXPERIENCES</span>
          <p className="text-xl md:text-2xl font-serif text-text-primary leading-relaxed italic">
            "We curate experiences across celebrations, corporate events, and bespoke moments — each designed with precision and intention."
          </p>
          <div className="w-12 h-px bg-heritage/20 mx-auto mt-8" />
        </div>

        {/* Central Guide Line (Lists only) */}
        <div className="absolute top-[400px] bottom-0 left-1/2 -translate-x-1/2 w-px bg-heritage/[0.06] hidden lg:block z-0" />

        {serviceCategories.map((service, index) => (
          <React.Fragment key={service.id}>
            <section 
              data-bg={service.bgColor} 
              className={`service-section py-24 md:py-32 relative overflow-hidden z-10 ${index % 2 !== 0 ? 'bg-surface/30' : 'bg-transparent'}`}
            >
              <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center relative z-10">
                {/* Image Section */}
                <div className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-2' : ''} relative w-full service-image-wrapper`}>
                   <div className="relative overflow-hidden rounded-xl aspect-[4/5] md:aspect-[16/10] shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-black/[0.04] group">
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                   </div>
                </div>

                {/* Content Section */}
                <div className={`lg:col-span-5 space-y-8 ${index % 2 !== 0 ? 'lg:order-1' : ''} service-content`}>
                  <div className="space-y-4">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-heritage/40 small-caps">{service.label}</span>
                    <h2 className="text-3xl md:text-[34px] font-serif text-text-primary font-medium leading-[1.2] tracking-tight">{service.title}</h2>
                    <p className="text-base md:text-[17px] text-text-secondary/75 font-sans font-light leading-[1.8]">{service.description}</p>
                  </div>
                  
                  <div className="pt-8 border-t border-linen/40">
                    <h4 className="text-[9px] uppercase tracking-[0.3em] text-heritage/60 font-bold mb-5 small-caps">Key Offerings:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
                      {service.tags.map((tag) => (
                        <li key={tag} className="text-[11px] font-sans uppercase tracking-[0.15em] text-text-primary/80 font-light flex items-center gap-3">
                          <div className="w-1 h-1 rounded-full bg-heritage/20" />
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
                    <a href={generateWhatsAppLink(service.title, 'Booking')} target="_blank" rel="noopener noreferrer">
                      <Button className="rounded-full bg-heritage hover:bg-heritage-dark text-white px-8 py-3 text-[11px] tracking-[0.2em] font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 group">
                        Plan This Event
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            {index < serviceCategories.length - 1 && <div className="w-full h-px bg-black/[0.03] lg:hidden" />}
          </React.Fragment>
        ))}
      </div>

      <FloatingMetric label="Our Promise" value="Smooth Events" className="top-[200vh] left-[15%]" />

      {/* Process Journey */}
      <section id="process" className="relative pt-12 lg:pt-16 pb-24 bg-surface border-y border-linen/30 flex flex-col min-h-screen" data-bg="var(--color-surface)">
        <div className="container mb-12 lg:mb-16 text-center flex flex-col items-center space-y-4 fade-up relative z-10">
          <div className="flex flex-col items-center gap-2">
             <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-heritage/40 small-caps">06 / THE PROCESS</span>
             <div className="w-px h-10 bg-gradient-to-b from-heritage/40 to-transparent" />
             <div className="w-8 h-8 rounded-full border border-heritage/20 flex items-center justify-center bg-white shadow-inner">
                <div className="w-1.5 h-1.5 rounded-full bg-burnished animate-pulse shadow-[0_0_10px_rgba(197,160,89,0.8)]" />
             </div>
          </div>
          <TextReveal as="h2" text="How We Work." className="text-3xl md:text-7xl font-serif text-text-primary font-bold tracking-tighter" />
          <p className="text-heritage font-serif italic text-base md:text-xl opacity-60 max-w-lg mx-auto px-4">A seamless transition from vision to reality, curated with absolute precision.</p>
        </div>
        
        <div className="relative w-full overflow-hidden lg:overflow-visible h-auto lg:h-[55vh] flex items-center">
          <div ref={horizontalRef} className="flex flex-col lg:flex-row gap-12 lg:gap-16 px-6 lg:px-[30vw] items-center w-full">
            {[
              { title: 'Consultation', desc: 'A private dialogue to distill your aesthetic desires and logistical requirements into a singular vision.', icon: <MessageCircle size={24} /> },
              { title: 'Conceptualization', desc: 'Crafting a bespoke blueprint with architectural depth, ensuring every nuance reflects your personal legacy.', icon: <Sparkles size={24} /> },
              { title: 'Coordination', desc: 'Harmonizing an elite network of artisans and vendors to execute with surgical precision and grace.', icon: <Zap size={24} /> },
              { title: 'Celebration', desc: 'On-site direction that ensures your event unfolds like a perfectly choreographed cinematic masterpiece.', icon: <Star size={24} /> },
            ].map((item, i) => (
              <div key={i} className="process-card bg-white/50 backdrop-blur-md p-10 md:p-12 rounded-[2rem] border border-linen/80 shadow-sm transition-all duration-700 flex flex-col justify-between group w-full lg:w-[500px] h-[380px] lg:h-[400px] flex-shrink-0 relative overflow-hidden">
                {/* Decorative Background Element */}
                <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-heritage/5 rounded-full blur-3xl group-hover:bg-burnished/10 transition-colors duration-700" />
                
                <div className="flex justify-between items-start relative z-10">
                    <span className="card-number text-6xl md:text-7xl font-serif font-bold text-heritage/10 italic transition-all duration-700 leading-none">0{i+1}</span>
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-heritage border border-linen/50 group-hover:bg-heritage group-hover:text-white group-hover:scale-110 transition-all duration-500 transform group-hover:-rotate-6">
                        {item.icon}
                    </div>
                </div>

                <div className="space-y-4 relative z-10">
                    <h3 className="text-xl md:text-2xl font-serif text-text-primary font-bold italic group-hover:text-heritage transition-colors duration-500">{item.title}</h3>
                    <p className="text-base text-text-secondary font-sans font-light leading-relaxed max-w-sm">{item.desc}</p>
                    
                    <div className="pt-4 flex items-center gap-4 text-heritage/40 group-hover:text-burnished transition-colors duration-500">
                        <div className="h-px w-10 bg-current" />
                        <span className="text-[8px] font-sans font-bold uppercase tracking-[0.3em] small-caps">Phase 0{i+1}</span>
                    </div>
                </div>

                {/* Subtle Progress Dot */}
                <div className="absolute bottom-8 right-8 w-1.5 h-1.5 rounded-full bg-linen group-hover:bg-burnished transition-colors" />
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal Progress Bar */}
        <div className="hidden lg:block absolute bottom-12 left-1/2 -translate-x-1/2 w-1/4 h-px bg-linen/50 z-10">
            <div className="h-full bg-burnished w-0 transition-all duration-300" id="process-progress" />
        </div>
      </section>

      <SectionDivider />

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32 relative overflow-hidden" data-bg="var(--color-surface)">
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf9f7] to-white pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto space-y-20">
            <div className="text-center space-y-6">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.6em] text-heritage/40 small-caps">07 / QUESTIONS</span>
              <h2 className="text-4xl md:text-6xl font-serif font-medium text-text-primary tracking-tighter leading-[1.1]">
                Common <span className="italic font-light text-burnished">Questions.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {[
                { q: 'Do you plan events in other cities?', a: 'Yes, we plan events all over India and in other countries too.' },
                { q: 'When should we book your services?', a: 'For big events, it is best to book 8 to 12 months in advance.' },
                { q: 'Can you help with music and artists?', a: 'Yes, we have a network of top-tier DJs, bands, and performers.' },
                { q: 'Is every event custom?', a: 'Absolutely. We believe every story is unique and deserves a bespoke celebration.' },
              ].map((faq, i) => (
                <div key={i} className="faq-card group bg-white border border-black/[0.05] p-8 md:p-10 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-black/[0.1] transition-all duration-500 flex flex-col gap-6 opacity-0">
                  <div className="w-6 h-[2px] bg-[#c6a16e] rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="space-y-4">
                    <h4 className="text-[18px] md:text-[20px] font-serif font-medium text-text-primary group-hover:text-heritage transition-colors leading-snug">{faq.q}</h4>
                    <p className="text-[14px] md:text-[15px] text-text-secondary/65 font-sans font-light leading-[1.7]">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section id="cta" className="relative py-32 md:py-40 bg-heritage overflow-hidden border-t border-white/5" data-bg="var(--color-heritage)">
        {/* Cinematic Background Layering */}
        <div className="absolute inset-0 z-0">
           <Image src="/hero10.jpg" alt="Background" fill className="cta-bg-image object-cover scale-105" />
           <div className="absolute inset-0 bg-gradient-to-b from-black/65 to-black/85 z-10" />
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,80,50,0.35)_0%,transparent_70%)] z-10" />
        </div>

        <BackgroundFlourish type="floral" className="bottom-[-10%] left-[-5%] w-64 h-64 text-white/5 rotate-45" />
        
        <div className="container relative z-20 text-center flex flex-col items-center">
          <div className="cta-content max-w-[800px] w-full flex flex-col items-center space-y-6 opacity-0 translate-y-12">
            <h2 className="text-5xl md:text-7xl font-serif font-medium tracking-tighter leading-[1.1] text-white drop-shadow-2xl">
              Let&apos;s Create <br />
              <span className="text-[#c6a16e]">Magic.</span>
            </h2>
            
            <p className="text-base md:text-[16px] text-white/90 max-w-[520px] mx-auto font-sans font-light leading-[1.7] drop-shadow-lg">
              Ready to start planning your extraordinary event? Let&apos;s turn your vision into a reality designed with precision and quiet luxury.
            </p>

            <div className="cta-buttons flex flex-wrap justify-center gap-4 pt-6">
              <Magnetic strength={0.1}>
                <Link href="/contact">
                  <Button 
                    className="h-14 px-10 text-[11px] bg-gradient-to-br from-[#1f6f4a] to-[#2f8f62] text-white hover:shadow-[0_0_30px_rgba(31,111,74,0.4)] transition-all duration-500 rounded-full font-bold border-0"
                    rightIcon={<ArrowRight size={16} />}
                  >
                    Book Consultation
                  </Button>
                </Link>
              </Magnetic>

              <Magnetic strength={0.1}>
                <Link href="/gallery">
                  <Button 
                    variant="outline"
                    className="h-14 px-10 text-[11px] bg-transparent text-white border-white/40 hover:bg-white/20 hover:border-white hover:text-white transition-all duration-500 rounded-full font-bold !text-white"
                  >
                    View Our Work
                  </Button>
                </Link>
              </Magnetic>
            </div>

            <div className="pt-10 opacity-60">
              <span className="text-[10px] uppercase tracking-[0.5em] text-white font-mono font-medium drop-shadow-md">Trusted by 150+ luxury events</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
