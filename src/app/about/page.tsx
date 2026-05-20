'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Star, MessageCircle, ArrowRight, Target, Eye, Award, Users2, CalendarRange } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/atoms/Button';
import { Magnetic } from '@/components/atoms/Magnetic';
import { InfiniteMarquee } from '@/components/atoms/InfiniteMarquee';
import { ParallaxImage } from '@/components/atoms/ParallaxImage';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { WhatsAppLogo } from '@/components/atoms/WhatsAppLogo';
import { HowWeWork } from '@/components/organisms/HowWeWork';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted) return;

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

    heroTl.fromTo(".hero-header-reveal", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: DEFAULT_EASE, force3D: true })
          .fromTo(".hero-title .text-line", { 
            y: 80,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1.2,
            ease: "expo.out",
            force3D: true
          }, "-=0.7")
          .fromTo(".hero-subtext", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8, ease: DEFAULT_EASE, force3D: true }, "-=0.7");

    // 2. Section Reveals
    const sections = gsap.utils.toArray<HTMLElement>('section');
    sections.forEach((section) => {
      gsap.fromTo(section.querySelectorAll('.fade-up'), 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 0.8, 
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

  }, { scope: containerRef, dependencies: [mounted] });

  const scrollToProcess = (e: React.MouseEvent) => {
    e.preventDefault();
    const processSection = document.getElementById('how-we-work');
    if (processSection) {
      processSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) return <div className="min-h-screen bg-[#FDFBF7]" />;

  return (
    <main ref={mainRef} className="min-h-screen bg-[#FDFBF7] selection:bg-[#D4B982] selection:text-black overflow-hidden">
      <div ref={containerRef} className="relative">
        
        {/* 1. Hero Section */}
        <section id="header" className="relative h-[85vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-heritage text-center">
          <div className="absolute inset-0 z-0 hero-bg-wrapper">
            <Image 
              src="/assets/wedding/wedding-5.jpg" 
              alt="Professional Event Management" 
              fill 
              className="object-cover brightness-[0.35]"
              priority
              sizes="100vw"
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,185,130,0.15)_0%,_transparent_80%)] z-10" />
          
          <div className="container relative z-20 pt-32 md:pt-44">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="hero-header-reveal flex flex-col items-center gap-4 opacity-0">
                 <span className="text-[10px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">ABOUT ZING BLISS</span>
                 <div className="w-12 h-px bg-[#D4B982]/40" />
              </div>
              
              <div className="space-y-4">
                <h1 className="hero-title text-4xl md:text-7xl lg:text-[7.5rem] font-serif text-white leading-[1] tracking-tight">
                  <span className="block overflow-hidden">
                    <span className="text-line block">Architects of</span>
                  </span>
                  <span className="block overflow-hidden pb-4">
                    <span className="text-line block italic font-script text-[#D4B982] mt-2 lg:text-[9.5rem] drop-shadow-[0_15px_45px_rgba(212,185,130,0.4)]">Extraordinary moments</span>
                  </span>
                </h1>
              </div>

              <div className="max-w-xl mx-auto hero-subtext opacity-0 pt-6">
                <p className="text-white/80 text-lg md:text-xl font-serif italic leading-relaxed">
                  Dedicated to the fine details and grand visions that <br className="hidden md:block" /> make every event a unique masterpiece.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Vision & Mission Section */}
        <section id="vision-mission" className="py-24 md:py-32 bg-[#FDFBF7] relative">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              {/* Mission */}
              <div className="fade-up space-y-6 p-10 bg-white border border-[#D4B982]/10 shadow-xl group hover:border-[#D4B982]/30 transition-all duration-700">
                <div className="w-14 h-14 rounded-full bg-[#D4B982]/10 flex items-center justify-center text-[#D4B982] group-hover:scale-110 transition-transform duration-700">
                  <Target size={28} strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl font-serif text-[#121212] tracking-tight">Our Mission</h2>
                <p className="text-[#525252] text-lg font-sans font-light leading-relaxed">
                  To provide seamless, high-end event production that honors tradition while embracing modern innovation. We strive for absolute precision, ensuring our clients can celebrate their milestones with complete peace of mind.
                </p>
              </div>

              {/* Vision */}
              <div className="fade-up space-y-6 p-10 bg-white border border-[#D4B982]/10 shadow-xl group hover:border-[#D4B982]/30 transition-all duration-700">
                <div className="w-14 h-14 rounded-full bg-[#D4B982]/10 flex items-center justify-center text-[#D4B982] group-hover:scale-110 transition-transform duration-700">
                  <Eye size={28} strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl font-serif text-[#121212] tracking-tight">Our Vision</h2>
                <p className="text-[#525252] text-lg font-sans font-light leading-relaxed">
                  To be recognized as the premier architects of luxury experiences globally, setting new standards in event management through architectural elegance, logistical mastery, and heart-centered storytelling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Legacy (Founder & Company) */}
        <section id="legacy" className="py-20 md:py-40 bg-[#FDFBF7]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Image Side */}
              <div className="fade-up relative">
                <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-sm shadow-2xl z-10">
                  <Image 
                    src="/kamna-udernani.png" 
                    alt="Founder, Kamna Udernani" 
                    fill 
                    className="object-cover transition-transform duration-[2000ms] hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b-2 border-l-2 border-[#D4B982]/20 z-0" />
              </div>

              {/* Text Side */}
              <div className="space-y-10 fade-up">
                <div className="space-y-4">
                  <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.6em] font-bold">OUR LEGACY</span>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#121212] leading-[1.1] tracking-tight">
                    Crafting <br />
                    Unforgettable <br />
                    <span className="text-[#D4B982] italic font-script block -mt-2 text-6xl md:text-9xl">Experiences</span>
                  </h2>
                </div>

                <div className="space-y-8 max-w-lg">
                  <p className="text-[#525252] text-lg font-sans font-light leading-relaxed">
                    Zing Bliss Events, led by Founder & Creative Director <span className="text-[#121212] font-bold">Kamna Udernani</span>, was established to redefine luxury event management through logistical precision and creative excellence.
                  </p>
                  <p className="text-[#525252] text-lg font-sans font-light leading-relaxed">
                    With an unwavering eye for detail and a passion for architectural elegance, our team brings decades of combined experience in venue sourcing, vendor management, and on-site production to every event we handle.
                  </p>
                </div>

                <div className="pt-4 flex flex-col gap-1">
                   <span className="text-xl font-serif text-[#121212]">Kamna Udernani</span>
                   <span className="text-[10px] text-[#D4B982] uppercase tracking-widest font-bold">Founder & Creative Director</span>
                </div>

                <div className="pt-10 md:pt-12">
                  <Magnetic strength={0.1}>
                    <Button onClick={scrollToProcess} className="btn-gold px-12 py-5 text-[11px]">
                      DISCOVER OUR PROCESS
                    </Button>
                  </Magnetic>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us (Metrics) */}
        <section id="metrics" className="py-24 md:py-32 bg-[#05100a] relative overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-[0.05] pointer-events-none" />
          <div className="container relative z-10">
            <div className="text-center mb-16 fade-up">
              <span className="text-[10px] text-[#D4B982] uppercase tracking-[0.7em] font-bold opacity-80">
                WHY CHOOSE ZING BLISS EVENTS?
              </span>
              <div className="w-12 h-px bg-[#D4B982]/20 mx-auto mt-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 fade-up">
              {[
                { value: '20+', label: 'Years of Experience', icon: <Award size={32} /> },
                { value: '500+', label: 'Events Executed', icon: <CalendarRange size={32} /> },
                { value: '100+', label: 'Happy Clients', icon: <Users2 size={32} /> },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="text-[#D4B982] mb-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                    {stat.icon}
                  </div>
                  <span className="text-6xl md:text-7xl font-serif text-[#D4B982] mb-2 drop-shadow-[0_10px_30px_rgba(212,185,130,0.2)] group-hover:scale-110 transition-transform duration-700">
                    {stat.value}
                  </span>
                  <span className="text-[10px] md:text-[11px] font-bold text-white/40 uppercase tracking-[0.4em]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4.5 How We Work Section */}
        <HowWeWork />

        {/* 6. Portfolio Preview */}
        <section id="work" className="py-32 md:py-48 bg-[#05100a] relative overflow-hidden">
          <div className="container relative z-10 text-center">
            <div className="space-y-6 mb-24 fade-up">
              <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">ARCHIVE</span>
              <h2 className="text-4xl md:text-7xl font-serif text-white leading-tight tracking-tight">Portfolio of Excellence</h2>
              <div className="w-16 h-px bg-[#D4B982]/30 mx-auto mt-8" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {['/assets/wedding/wedding-1.jpg', '/assets/corporate/corporate-6.jpg', '/assets/production/production-1.jpg'].map((img, i) => (
                <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-sm shadow-2xl fade-up" style={{ transitionDelay: `${i * 100}ms` }}>
                  <Image 
                    src={img} 
                    alt={`Work ${i + 1}`} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.9]" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors duration-700" />
                </div>
              ))}
            </div>
            
            <div className="mt-20 fade-up">
              <Magnetic strength={0.05}>
                <Link href="/portfolio" className="inline-block">
                  <Button variant="outline" className="border-[#D4B982]/40 !text-white hover:bg-[#D4B982] hover:!text-heritage px-12 py-5 text-[10px] bg-white/5 backdrop-blur-sm transition-all duration-700">
                    VIEW ALL RECORDS
                  </Button>
                </Link>
              </Magnetic>
            </div>
          </div>
        </section>

        {/* 7. Final CTA */}
        <section id="cta" className="relative py-32 md:py-48 overflow-hidden bg-[#05100a] text-center">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/assets/wedding/wedding-3.jpg" 
              alt="Professional Consultation" 
              fill 
              className="object-cover brightness-[0.15] scale-105" 
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-[#05100a] opacity-90 z-10" />
          </div>
          
          <div className="container relative z-20 text-center">
            <div className="space-y-8 fade-up">
              <div className="flex items-center justify-center gap-6 mb-4">
                 <div className="w-12 h-px bg-[#D4B982]/40" />
                 <span className="text-[11px] text-[#D4B982] uppercase tracking-[0.8em] font-bold">READY TO BEGIN?</span>
                 <div className="w-12 h-px bg-[#D4B982]/40" />
              </div>
              
              <div className="relative inline-block">
                <h2 className="text-4xl md:text-7xl lg:text-[7.5rem] font-serif text-white leading-[1] tracking-tighter relative z-10">
                  Compose Your Next
                </h2>
                <span className="font-script text-[#D4B982] text-6xl md:text-9xl lg:text-[11rem] block -mt-4 md:-mt-8 lg:-mt-10 italic drop-shadow-[0_15px_45px_rgba(212,185,130,0.4)] relative z-20">
                  Elite Celebration
                </span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12 md:pt-20 fade-up" style={{ transitionDelay: '200ms' }}>
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
