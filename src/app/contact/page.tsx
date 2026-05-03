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
    gsap.fromTo('.header-fade', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: 'power2.out' }
    );
    gsap.fromTo('.form-fade',
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1.5, ease: 'power2.out',
        scrollTrigger: { trigger: '.form-fade', start: 'top 80%' }
      }
    );
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-[#FDFBF7] selection:bg-[#D4B982] selection:text-black overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-heritage/5 to-transparent pointer-events-none" />
      
      {/* 1. Header Section - Compact */}
      <section id="header" className="container pt-32 md:pt-48 pb-8 text-center space-y-4 relative z-10">
        <div className="header-fade opacity-0">
          <Badge variant="solid" dot className="px-6 py-1 bg-[#D4B982]/10 text-[#D4B982] uppercase tracking-[0.4em] font-bold text-[9px] border-[#D4B982]/20">CONTACT ZING BLISS</Badge>
        </div>
        <h1 className="text-4xl md:text-7xl lg:text-[8rem] font-serif tracking-tighter text-[#121212] leading-[0.85] font-medium">
          <span className="block overflow-hidden pb-1">
             <span className="header-fade block">Let&apos;s Compose</span>
          </span>
          <span className="block overflow-hidden">
             <span className="header-fade block italic font-script text-[#D4B982] mt-2 lowercase lg:text-[10rem] drop-shadow-[0_15px_45px_rgba(212,185,130,0.3)]">Your Legacy.</span>
          </span>
        </h1>
        <div className="max-w-xl mx-auto header-fade opacity-0 pt-4">
          <p className="text-[#525252] text-lg font-serif italic border-l border-[#D4B982]/30 pl-10 leading-relaxed text-left">
            Ready to plan your next extraordinary event? Reach out and let&apos;s start the conversation.
          </p>
        </div>
      </section>

      {/* 2. Contact Content - Redesigned & Compact */}
      <section id="content" className="container py-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* High Fidelity Sidebar */}
          <div className="lg:col-span-4 space-y-6 header-fade opacity-0 sticky top-24">
            <div className="space-y-8 p-8 bg-white border border-linen/30 shadow-2xl rounded-sm">
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#D4B982] pb-2 border-b border-linen/50">LOCATION</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Globe size={16} className="text-[#D4B982] mt-0.5" />
                    <div className="space-y-1">
                      <span className="text-[8px] uppercase tracking-widest text-[#525252] font-bold">HQ OFFICE</span>
                      <p className="text-[13px] font-serif font-bold text-[#121212]">Ahmedabad, Gujarat</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock size={16} className="text-[#D4B982] mt-0.5" />
                    <div className="space-y-1">
                      <span className="text-[8px] uppercase tracking-widest text-[#525252] font-bold">LOCAL TIME</span>
                      <p className="text-[13px] font-serif font-bold text-[#121212]"><MumbaiClock /></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-linen/50">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#D4B982]">SAY HELLO</h3>
                <div className="space-y-3">
                  <a href="tel:+919876543210" className="flex items-center gap-4 group">
                    <div className="w-8 h-8 bg-[#FDFBF7] flex items-center justify-center text-[#D4B982] border border-linen/50 group-hover:bg-[#D4B982] group-hover:text-white transition-all duration-500"><Phone size={14} /></div>
                    <span className="text-[12px] font-sans font-bold text-[#121212] tracking-[0.1em] group-hover:text-[#D4B982] transition-colors">+91 98765 43210</span>
                  </a>
                  <a href="mailto:hello@zingblissevents.com" className="flex items-center gap-4 group">
                    <div className="w-8 h-8 bg-[#FDFBF7] flex items-center justify-center text-[#D4B982] border border-linen/50 group-hover:bg-[#D4B982] group-hover:text-white transition-all duration-500"><Mail size={14} /></div>
                    <span className="text-[12px] font-sans font-bold text-[#121212] tracking-[0.1em] group-hover:text-[#D4B982] transition-colors">hello@zingblissevents.com</span>
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <Magnetic strength={0.2}>
                  <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full h-14 bg-black text-white hover:bg-[#D4B982] transition-all duration-500 rounded-none text-[10px] tracking-[0.4em] font-bold uppercase">
                       <MessageCircle size={16} className="mr-3" /> WHATSAPP US
                    </Button>
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>

          {/* Form Side - Minimal & High End */}
          <div id="form-section" className="lg:col-span-8 form-fade opacity-0">
            <div className="p-8 md:p-14 bg-white border border-linen/30 shadow-2xl rounded-sm relative overflow-hidden group">
              <form className="relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="text-lg md:text-2xl font-serif text-[#121212] leading-[1.8] font-light">
                  Hello, my name is{' '}
                  <input type="text" placeholder="YOUR NAME" className="bg-transparent border-b border-linen focus:border-[#D4B982] focus:outline-none px-2 w-[180px] md:w-[250px] placeholder:text-linen transition-colors uppercase font-medium text-[#D4B982]" />
                  {' '}and I&apos;m planning a{' '}
                  <select className="bg-transparent border-b border-linen focus:border-[#D4B982] focus:outline-none px-2 cursor-pointer appearance-none uppercase font-medium text-[#D4B982]">
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Business Event</option>
                    <option value="birthday">Birthday</option>
                    <option value="private">Party</option>
                  </select>
                  {' '}on{' '}
                  <input type="text" placeholder="THE DATE" className="bg-transparent border-b border-linen focus:border-[#D4B982] focus:outline-none px-2 w-[150px] md:w-[200px] placeholder:text-linen transition-colors uppercase font-medium text-[#D4B982]" />
                  . We expect around{' '}
                  <select className="bg-transparent border-b border-linen focus:border-[#D4B982] focus:outline-none px-2 cursor-pointer appearance-none uppercase font-medium text-[#D4B982]">
                    <option value="intimate">50 Guests</option>
                    <option value="medium">200 Guests</option>
                    <option value="large">500+ Guests</option>
                  </select>
                  {' '}and my vision is{' '}
                  <textarea placeholder="SOMETHING AMAZING..." rows={1} className="bg-transparent border-b border-linen focus:border-[#D4B982] focus:outline-none w-full placeholder:text-linen transition-colors uppercase font-medium resize-none py-1 text-[#D4B982]" />
                  {' '}You can reach me at{' '}
                  <input type="email" placeholder="YOUR EMAIL" className="bg-transparent border-b border-linen focus:border-[#D4B982] focus:outline-none px-2 w-[200px] md:w-[300px] placeholder:text-linen transition-colors uppercase font-medium text-[#D4B982]" />
                  .
                </div>
                <div className="pt-12 flex justify-start">
                  <Button className="h-16 px-16 bg-[#D4B982] hover:bg-[#B38B4D] text-black rounded-none tracking-[0.4em] font-bold text-[11px] uppercase border-0 shadow-2xl transition-all duration-700 group">
                    SEND INQUIRY <ArrowRight size={14} className="ml-4 transform group-hover:translate-x-2 transition-transform" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Map Section - Cinematic */}
      <section id="map" className="container py-12 relative z-10">
        <div className="relative w-full h-[40vh] overflow-hidden rounded-sm shadow-2xl group border border-linen/20">
          <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center transition-all duration-1000 group-hover:bg-black/20">
             <div className="text-center space-y-3">
               <MapPin size={40} className="text-[#D4B982] mx-auto animate-luxury-pulse" />
               <h3 className="text-3xl font-serif text-white font-bold italic tracking-tight">Ahmedabad</h3>
               <p className="text-[#D4B982] uppercase tracking-[0.6em] text-[10px] font-bold">CENTRAL STUDIO</p>
             </div>
          </div>
          <Image src="/hero-8.jpg" alt="Map Location" fill className="object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
        </div>
      </section>
    </main>
  );
}
