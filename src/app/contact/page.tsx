'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { MessageCircle, Mail, MapPin, ArrowRight, Instagram, Phone, Globe, Clock } from 'lucide-react';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';
import { TextReveal } from '@/components/atoms/TextReveal';
import { Magnetic } from '@/components/atoms/Magnetic';
import { FloatingDecor } from '@/components/atoms/FloatingDecor';
import { BackgroundFlourish } from '@/components/atoms/BackgroundFlourish';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function MumbaiClock() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const mumbaiTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(now);
      setTime(mumbaiTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span>{time} IST</span>;
}

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header Animation
    gsap.from('.header-fade', {
      y: 30,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: 'power2.out',
    });

    // Background Color Shift
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: '#form-section',
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'play reverse play reverse',
      },
      backgroundColor: '#F4F1EA', // Surface color
      duration: 1.5,
      ease: 'power2.inOut',
    });

    // Form Animation
    gsap.from('.form-fade', {
      y: 40,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.form-fade',
        start: 'top 80%',
      }
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-canvas pt-20 pb-16 selection:bg-heritage selection:text-canvas relative transition-colors duration-1000 overflow-hidden">
      <FloatingDecor />
      <BackgroundFlourish type="floral" className="top-[5%] left-[2%] w-[30rem] h-[30rem]" opacity={0.02} />
      <BackgroundFlourish type="architectural" className="bottom-0 right-0 w-[40rem] h-[40rem]" opacity={0.03} />
      <FloatingDecor seed={1} />
      <FloatingDecor seed={2} />
      
      {/* Metadata Labels */}
      <div className="side-label text-heritage/20">05 / INQUIRE — CONTACT THE ARCHIVE</div>
      <div className="side-label-right text-heritage/20">MUMBAI / 19.0760° N, 72.8777° E</div>

      {/* Header */}
      <section id="header" className="container py-16 md:py-20 text-center space-y-6 relative z-10">
        <div className="header-fade">
          <Badge variant="solid" dot className="px-6 py-2 bg-heritage/10 text-heritage uppercase tracking-[0.3em] font-bold">The Dialogue</Badge>
        </div>
        <TextReveal
          as="h1"
          text="Private Discovery Call."
          className="text-5xl md:text-[7rem] lg:text-[8rem] font-serif tracking-tighter text-text-primary leading-[1.1] font-bold"
        />
        <p className="header-fade text-lg md:text-xl text-text-secondary font-sans font-light leading-relaxed max-w-3xl mx-auto pt-4">
          Ready to turn your vision into a well-curated event with exceptional attention to detail? Reach out to our specialist team today for an initial discovery call.
        </p>
      </section>

      {/* Contact Content */}
      <section id="content" className="container py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Archival Sidebar */}
          <div className="lg:col-span-4 space-y-12 header-fade sticky top-24">
            <div className="space-y-10 p-8 border border-linen bg-surface/40 backdrop-blur-xl">
              <div className="space-y-6">
                <h3 className="text-[9px] font-mono font-bold uppercase tracking-[0.5em] text-heritage/40 pb-3 border-b border-linen">Archive Logistics</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Globe size={14} className="text-heritage mt-1" strokeWidth={1} />
                    <div className="space-y-1">
                      <span className="text-[8px] uppercase tracking-widest text-text-secondary font-bold">HQ Coordinates</span>
                      <p className="text-[13px] font-mono text-text-primary">19.0760° N, 72.8777° E<br />Bandra West, Mumbai</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock size={14} className="text-heritage mt-1" strokeWidth={1} />
                    <div className="space-y-1">
                      <span className="text-[8px] uppercase tracking-widest text-text-secondary font-bold">Current Archive Time</span>
                      <p className="text-[13px] font-mono text-text-primary"><MumbaiClock /></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-6 border-t border-linen">
                <h3 className="text-[9px] font-mono font-bold uppercase tracking-[0.5em] text-heritage/40">Direct Channels</h3>
                <div className="space-y-4">
                  <a href="tel:+919876543210" className="flex items-center gap-4 group">
                    <div className="w-8 h-8 border border-linen flex items-center justify-center text-heritage group-hover:bg-heritage group-hover:text-canvas transition-all duration-500">
                      <Phone size={14} strokeWidth={1} />
                    </div>
                    <span className="text-[13px] font-serif font-bold text-text-primary group-hover:text-heritage transition-colors">+91 98765 43210</span>
                  </a>

                  <a href="mailto:hello@zingblissevents.com" className="flex items-center gap-4 group">
                    <div className="w-8 h-8 border border-linen flex items-center justify-center text-heritage group-hover:bg-heritage group-hover:text-canvas transition-all duration-500">
                      <Mail size={14} strokeWidth={1} />
                    </div>
                    <span className="text-[13px] font-serif font-bold text-text-primary group-hover:text-heritage transition-colors">hello@zingblissevents.com</span>
                  </a>

                  <a href="https://www.instagram.com/zingblissevents/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="w-8 h-8 border border-linen flex items-center justify-center text-heritage group-hover:bg-heritage group-hover:text-canvas transition-all duration-500">
                      <Instagram size={14} strokeWidth={1} />
                    </div>
                    <span className="text-[13px] font-serif font-bold text-text-primary group-hover:text-heritage transition-colors">@zingblissevents</span>
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <Magnetic strength={0.2}>
                  <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                    <Button variant="solid" className="btn-prestige w-full py-5 flex items-center justify-center gap-3 text-[9px] tracking-[0.3em]">
                      <MessageCircle size={16} />
                      WHATSAPP CONCIERGE
                    </Button>
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>

          {/* Mad Libs Form Side */}
          <div id="form-section" className="lg:col-span-8 form-fade">
            <div className="p-10 md:p-16 glass-card relative overflow-hidden group hover:border-heritage/20 transition-colors duration-1000 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)]">
              <div className="absolute top-0 right-0 w-96 h-96 dot-pattern opacity-[0.03] pointer-events-none" />
              
              <form className="relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="text-xl md:text-3xl lg:text-4xl font-serif text-text-primary leading-[1.8] md:leading-[2] font-light">
                  Hello, my name is{' '}
                  <span className="inline-block relative group/input">
                    <input 
                      type="text" 
                      placeholder="YOUR FULL NAME" 
                      className="bg-transparent border-none focus:outline-none px-2 w-[200px] md:w-[300px] placeholder:text-heritage/10 transition-colors uppercase font-medium text-lg md:text-2xl text-heritage"
                    />
                    <div className="absolute bottom-2 left-0 w-full h-[0.5px] bg-heritage/10 group-focus-within/input:h-[1px] group-focus-within/input:bg-heritage transition-all duration-1000" />
                  </span>
                  {' '}and I&apos;m envisioning a{' '}
                  <span className="inline-block relative group/input">
                    <select className="bg-transparent border-none focus:outline-none px-2 cursor-none appearance-none uppercase font-medium text-lg md:text-2xl text-heritage">
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="birthday">Birthday Celebration</option>
                      <option value="private">Private Party</option>
                    </select>
                    <div className="absolute bottom-2 left-0 w-full h-[0.5px] bg-heritage/10 group-focus-within/input:h-[1px] group-focus-within/input:bg-heritage transition-all duration-1000" />
                  </span>
                  {' '}on{' '}
                  <span className="inline-block relative group/input">
                    <input 
                      type="text" 
                      placeholder="DD / MM / YYYY" 
                      className="bg-transparent border-none focus:outline-none px-2 w-[150px] md:w-[200px] placeholder:text-heritage/10 transition-colors uppercase font-medium text-lg md:text-2xl text-heritage"
                    />
                    <div className="absolute bottom-2 left-0 w-full h-[0.5px] bg-heritage/10 group-focus-within/input:h-[1px] group-focus-within/input:bg-heritage transition-all duration-1000" />
                  </span>
                  . We are expecting around{' '}
                  <span className="inline-block relative group/input">
                    <select className="bg-transparent border-none focus:outline-none px-2 cursor-none appearance-none uppercase font-medium text-lg md:text-2xl text-heritage">
                      <option value="intimate">50 Guest</option>
                      <option value="medium">200 Guest</option>
                      <option value="large">500 Guest</option>
                      <option value="grand">1000+ Guest</option>
                    </select>
                    <div className="absolute bottom-2 left-0 w-full h-[0.5px] bg-heritage/10 group-focus-within/input:h-[1px] group-focus-within/input:bg-heritage transition-all duration-1000" />
                  </span>
                  {' '}and our budget is{' '}
                  <span className="inline-block relative group/input">
                    <select className="bg-transparent border-none focus:outline-none px-2 cursor-none appearance-none uppercase font-medium text-lg md:text-2xl text-heritage">
                      <option value="tier1">Standard Luxury</option>
                      <option value="tier2">Premium Experience</option>
                      <option value="tier3">Ultra Luxury</option>
                    </select>
                    <div className="absolute bottom-2 left-0 w-full h-[0.5px] bg-heritage/10 group-focus-within/input:h-[1px] group-focus-within/input:bg-heritage transition-all duration-1000" />
                  </span>
                  . My vision is{' '}
                  <span className="inline-block relative w-full mt-2 group/input">
                    <textarea 
                      placeholder="A MAGICAL MOMENT OF..." 
                      rows={2}
                      className="bg-transparent border-none focus:outline-none w-full placeholder:text-heritage/10 transition-colors uppercase font-medium text-lg md:text-2xl resize-none py-1 text-heritage"
                    />
                    <div className="absolute bottom-2 left-0 w-full h-[0.5px] bg-heritage/10 group-focus-within/input:h-[1px] group-focus-within/input:bg-heritage transition-all duration-1000" />
                  </span>
                  {' '}You can reach me at{' '}
                  <span className="inline-block relative group/input">
                    <input 
                      type="email" 
                      placeholder="EMAIL@EXAMPLE.COM" 
                      className="bg-transparent border-none focus:outline-none px-2 w-[220px] md:w-[350px] placeholder:text-heritage/10 transition-colors uppercase font-medium text-lg md:text-2xl text-heritage"
                    />
                    <div className="absolute bottom-2 left-0 w-full h-[0.5px] bg-heritage/10 group-focus-within/input:h-[1px] group-focus-within/input:bg-heritage transition-all duration-1000" />
                  </span>
                  .
                </div>

                <div className="pt-16 flex justify-start">
                  <Button variant="solid" className="w-full md:w-auto btn-prestige px-16 py-6 text-[9px] group tracking-[0.5em] shadow-xl">
                    COMMENCE THE DIALOGUE
                    <ArrowRight size={14} className="ml-4 transform group-hover:translate-x-2 transition-transform duration-700" />
                  </Button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Map Section - The Coordinates */}
      <section id="map" className="container py-16 relative z-10">
        <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden arch-mask border border-linen group shadow-sm">
          <div className="absolute inset-0 bg-heritage/30 backdrop-blur-none group-hover:backdrop-blur-sm transition-all duration-1000 z-10 flex items-center justify-center">
             <div className="text-center space-y-4 fade-up">
               <MapPin size={48} className="text-canvas mx-auto" strokeWidth={1} />
               <h3 className="text-3xl font-serif text-canvas font-bold italic">The Coordinates</h3>
               <p className="text-canvas/80 uppercase tracking-[0.5em] text-[10px]">Bandra West, Mumbai — Private View Only</p>
               <Button variant="outline" className="border-canvas text-canvas hover:bg-canvas hover:text-heritage transition-all duration-500 px-10 h-14 rounded-none mt-6 tracking-widest text-[9px]">REQUEST ACCESS</Button>
             </div>
          </div>
          <Image 
            src="/hero-8.jpg" 
            alt="Mumbai Map" 
            fill
            className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[10s]"
          />
        </div>
      </section>

    </main>
  );
}
