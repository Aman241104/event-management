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
        timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
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
    gsap.from('.header-fade', { y: 30, opacity: 0, duration: 1.5, stagger: 0.2, ease: 'power2.out' });
    gsap.from('.form-fade', {
      y: 40, opacity: 0, duration: 1.5, ease: 'power2.out',
      scrollTrigger: { trigger: '.form-fade', start: 'top 80%' }
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-canvas pt-16 pb-12 selection:bg-heritage selection:text-canvas relative transition-colors duration-1000 overflow-hidden">
      <FloatingDecor />
      <BackgroundFlourish type="floral" className="top-[5%] left-[2%] w-[30rem] h-[30rem]" opacity={0.02} />
      
      {/* Header */}
      <section id="header" className="container py-12 md:py-16 text-center space-y-4 relative z-10">
        <div className="header-fade">
          <Badge variant="solid" dot className="px-6 py-2 bg-heritage/10 text-heritage uppercase tracking-[0.3em] font-bold">Contact Us</Badge>
        </div>
        <TextReveal as="h1" text="Let&apos;s Talk." className="text-5xl md:text-[7rem] lg:text-[8rem] font-serif tracking-tighter text-text-primary leading-[1.1] font-bold" />
        <p className="header-fade text-lg md:text-xl text-text-secondary font-sans font-light leading-relaxed max-w-3xl mx-auto pt-2">
          Ready to plan your next event? Reach out to us today and let&apos;s start a conversation.
        </p>
      </section>

      {/* Contact Content */}
      <section id="content" className="container py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Archival Sidebar */}
          <div className="lg:col-span-4 space-y-8 header-fade sticky top-24">
            <div className="space-y-8 p-8 glass-card">
              <div className="space-y-4">
                <h3 className="text-[9px] font-mono font-bold uppercase tracking-[0.5em] text-heritage/40 pb-2 border-b border-linen">Location</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Globe size={14} className="text-heritage mt-1" />
                    <div className="space-y-1">
                      <span className="text-[8px] uppercase tracking-widest text-text-secondary font-bold">Office</span>
                      <p className="text-[13px] font-mono text-text-primary">Bandra West, Mumbai</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={14} className="text-heritage mt-1" />
                    <div className="space-y-1">
                      <span className="text-[8px] uppercase tracking-widest text-text-secondary font-bold">Local Time</span>
                      <p className="text-[13px] font-mono text-text-primary"><MumbaiClock /></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-linen">
                <h3 className="text-[9px] font-mono font-bold uppercase tracking-[0.5em] text-heritage/40">Say Hello</h3>
                <div className="space-y-3">
                  <a href="tel:+919876543210" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 border border-linen flex items-center justify-center text-heritage group-hover:bg-heritage group-hover:text-canvas transition-all duration-500"><Phone size={14} /></div>
                    <span className="text-[13px] font-serif font-bold text-text-primary group-hover:text-heritage">+91 98765 43210</span>
                  </a>
                  <a href="mailto:hello@zingblissevents.com" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 border border-linen flex items-center justify-center text-heritage group-hover:bg-heritage group-hover:text-canvas transition-all duration-500"><Mail size={14} /></div>
                    <span className="text-[13px] font-serif font-bold text-text-primary group-hover:text-heritage">hello@zingblissevents.com</span>
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <Magnetic strength={0.2}>
                  <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                    <Button variant="solid" className="btn-prestige w-full py-5 flex items-center justify-center gap-3 text-[9px] tracking-[0.3em]">
                      <MessageCircle size={16} /> WHATSAPP US
                    </Button>
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div id="form-section" className="lg:col-span-8 form-fade">
            <div className="p-8 md:p-12 glass-card relative overflow-hidden group">
              <form className="relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="text-xl md:text-3xl font-serif text-text-primary leading-[1.8] font-light">
                  Hello, my name is{' '}
                  <input type="text" placeholder="YOUR NAME" className="bg-transparent border-b border-heritage/10 focus:border-heritage focus:outline-none px-2 w-[180px] md:w-[250px] placeholder:text-heritage/10 transition-colors uppercase font-medium text-heritage" />
                  {' '}and I&apos;m planning a{' '}
                  <select className="bg-transparent border-b border-heritage/10 focus:border-heritage focus:outline-none px-2 cursor-none appearance-none uppercase font-medium text-heritage">
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Business Event</option>
                    <option value="birthday">Birthday</option>
                    <option value="private">Party</option>
                  </select>
                  {' '}on{' '}
                  <input type="text" placeholder="THE DATE" className="bg-transparent border-b border-heritage/10 focus:border-heritage focus:outline-none px-2 w-[150px] md:w-[200px] placeholder:text-heritage/10 transition-colors uppercase font-medium text-heritage" />
                  . We expect around{' '}
                  <select className="bg-transparent border-b border-heritage/10 focus:border-heritage focus:outline-none px-2 cursor-none appearance-none uppercase font-medium text-heritage">
                    <option value="intimate">50 Guests</option>
                    <option value="medium">200 Guests</option>
                    <option value="large">500+ Guests</option>
                  </select>
                  {' '}and my vision is{' '}
                  <textarea placeholder="SOMETHING AMAZING..." rows={1} className="bg-transparent border-b border-heritage/10 focus:border-heritage focus:outline-none w-full placeholder:text-heritage/10 transition-colors uppercase font-medium resize-none py-1 text-heritage" />
                  {' '}You can reach me at{' '}
                  <input type="email" placeholder="YOUR EMAIL" className="bg-transparent border-b border-heritage/10 focus:border-heritage focus:outline-none px-2 w-[200px] md:w-[300px] placeholder:text-heritage/10 transition-colors uppercase font-medium text-heritage" />
                  .
                </div>
                <div className="pt-12 flex justify-start">
                  <Button variant="solid" className="w-full md:w-auto btn-prestige px-12 py-5 text-[9px] group tracking-[0.5em] shadow-xl">
                    SEND MESSAGE <ArrowRight size={14} className="ml-3 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Map */}
      <section id="map" className="container py-8 relative z-10">
        <div className="relative w-full h-[40vh] overflow-hidden arch-mask shadow-sm group">
          <div className="absolute inset-0 bg-heritage/20 z-10 flex items-center justify-center">
             <div className="text-center space-y-2">
               <MapPin size={32} className="text-canvas mx-auto" />
               <h3 className="text-2xl font-serif text-canvas font-bold italic">Mumbai</h3>
               <p className="text-canvas/80 uppercase tracking-[0.4em] text-[9px]">Bandra West</p>
             </div>
          </div>
          <Image src="/hero-8.jpg" alt="Map" fill className="object-cover" />
        </div>
      </section>
    </main>
  );
}
