'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { MessageCircle, Mail, MapPin, ArrowRight, Instagram, Phone } from 'lucide-react';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';
import { TextReveal } from '@/components/atoms/TextReveal';
import { Magnetic } from '@/components/atoms/Magnetic';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.header-fade', {
      y: 30,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: 'power2.out',
    });

    gsap.from('.form-fade', {
      y: 40,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out',
      delay: 0.6
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-bg-main pt-32 pb-24 selection:bg-secondary selection:text-bg-main relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 blur-[200px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <section id="header" className="container mx-auto px-6 py-24 md:py-32 text-center space-y-8">
        <div className="header-fade">
          <Badge variant="solid" dot className="px-6 py-2 bg-secondary/10 text-secondary uppercase tracking-[0.3em] font-bold">The Dialogue</Badge>
        </div>
        <TextReveal
          as="h1"
          text="Private Discovery Call."
          className="text-5xl md:text-[8rem] font-serif tracking-tighter text-text-primary leading-[1.1] font-bold"
        />
        <p className="header-fade text-lg md:text-2xl text-text-secondary font-sans font-light leading-relaxed max-w-3xl mx-auto pt-6">
          Ready to turn your vision into a well-curated event with exceptional attention to detail? Reach out to our specialist team today for an initial discovery call.
        </p>
      </section>

      {/* Contact Content */}
      <section id="content" className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">

          {/* Info Side */}
          <div className="lg:col-span-4 space-y-16 header-fade">
            <div className="space-y-8 p-12 bg-bg-surface/30 border border-border-gold shadow-2xl">
              <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-secondary">Global HQ</h3>
              <p className="text-2xl font-serif text-white font-bold leading-relaxed">
                Zing Bliss Events HQ<br />
                Bandra West, Mumbai<br />
                Maharashtra, India
              </p>
              <div className="pt-4">
                <a href="#" className="text-[10px] uppercase tracking-[0.3em] text-secondary font-bold border-b border-secondary/30 pb-1 hover:text-white hover:border-white transition-colors">Open in Map</a>
              </div>
            </div>

            <div className="space-y-12">
              <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-secondary">The Private Line</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-none border border-border-gold flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-bg-main transition-all duration-700">
                    <Phone size={24} strokeWidth={1} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[8px] uppercase tracking-widest text-text-secondary">Voice Discovery</span>
                    <a href="tel:+919876543210" className="text-xl md:text-2xl font-serif text-white hover:text-secondary transition-colors font-bold block">+91 98765 43210</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-none border border-border-gold flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-bg-main transition-all duration-700">
                    <Mail size={24} strokeWidth={1} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[8px] uppercase tracking-widest text-text-secondary">Narrative Inquiry</span>
                    <a href="mailto:hello@zingblissevents.com" className="text-xl md:text-2xl font-serif text-white hover:text-secondary transition-colors font-bold block">hello@zingblissevents.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-none border border-border-gold flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-bg-main transition-all duration-700">
                    <Instagram size={24} strokeWidth={1} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[8px] uppercase tracking-widest text-text-secondary">Social Record</span>
                    <a href="https://www.instagram.com/zingblissevents/" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-serif text-white hover:text-secondary transition-colors font-bold block">@zingblissevents</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Magnetic strength={0.2}>
                <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <Button variant="solid" className="btn-royal w-full py-8 flex items-center justify-center gap-4 text-sm">
                    <MessageCircle size={24} />
                    Instant WhatsApp Concierge
                  </Button>
                </a>
              </Magnetic>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-8 form-fade">
            <div className="p-12 border border-border-gold bg-bg-surface/20 backdrop-blur-md">
              <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-secondary font-bold">Full Name</label>
                    <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-border-gold focus:border-secondary py-4 text-text-primary outline-none transition-colors font-light placeholder:text-text-primary/50" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-secondary font-bold">Email Address</label>
                    <input type="email" placeholder="email@example.com" className="w-full bg-transparent border-b border-border-gold focus:border-secondary py-4 text-text-primary outline-none transition-colors font-light placeholder:text-text-primary/50" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-secondary font-bold">Event Category</label>
                    <select className="w-full bg-transparent border-b border-border-gold focus:border-secondary py-4 text-text-primary outline-none transition-colors font-light appearance-none">
                      <option className="bg-bg-main" value="wedding">Wedding</option>
                      <option className="bg-bg-main" value="corporate">Corporate Event</option>
                      <option className="bg-bg-main" value="birthday">Birthday Celebration</option>
                      <option className="bg-bg-main" value="private">Private Party</option>
                      <option className="bg-bg-main" value="festival">Festival / Cultural</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-secondary font-bold">Tentative Date</label>
                    <input type="text" placeholder="DD/MM/YYYY" className="w-full bg-transparent border-b border-border-gold focus:border-secondary py-4 text-text-primary outline-none transition-colors font-light placeholder:text-text-primary/50" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-secondary font-bold">Guest Count</label>
                    <select className="w-full bg-transparent border-b border-border-gold focus:border-secondary py-4 text-text-primary outline-none transition-colors font-light appearance-none">
                      <option className="bg-bg-main" value="intimate">Intimate (Up to 50)</option>
                      <option className="bg-bg-main" value="medium">Medium (50 - 200)</option>
                      <option className="bg-bg-main" value="large">Large (200 - 500)</option>
                      <option className="bg-bg-main" value="grand">Grand (500+)</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-secondary font-bold">Estimated Budget</label>
                    <select className="w-full bg-transparent border-b border-border-gold focus:border-secondary py-4 text-text-primary outline-none transition-colors font-light appearance-none">
                      <option className="bg-bg-main" value="tier1">Standard Luxury</option>
                      <option className="bg-bg-main" value="tier2">Premium Experience</option>
                      <option className="bg-bg-main" value="tier3">Ultra Luxury (Bespoke)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-secondary font-bold">Event Vision</label>
                  <textarea
                    placeholder="Tell us about the magical moment you want to create..."
                    className="w-full min-h-[150px] bg-transparent border-b border-border-gold focus:border-secondary py-4 text-text-primary outline-none transition-colors font-light resize-none placeholder:text-text-primary/50"
                  />
                </div>

                <div className="pt-8">
                  <Button variant="solid" className="w-full md:w-auto btn-royal px-20 py-8 text-sm group">
                    Send Inquiry
                    <ArrowRight size={18} className="ml-4 transform group-hover:translate-x-2 transition-transform" />
                  </Button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Map Section - The Coordinates */}
      <section id="map" className="container mx-auto px-6 py-24">
        <div className="relative w-full h-[60vh] overflow-hidden arch-mask border border-border-gold group shadow-2xl">
          <div className="absolute inset-0 bg-bg-surface/50 backdrop-blur-sm z-10 flex items-center justify-center">
             <div className="text-center space-y-6 fade-up">
               <MapPin size={64} className="text-secondary mx-auto" strokeWidth={1} />
               <h3 className="text-4xl font-serif text-white font-bold italic">The Coordinates</h3>
               <p className="text-text-secondary uppercase tracking-[0.5em] text-xs">Bandra West, Mumbai — Private View Only</p>
               <Button variant="outline" className="btn-outline-royal px-12 h-16 rounded-none mt-8">Request Access</Button>
             </div>
          </div>
          <Image 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000" 
            alt="Mumbai Map" 
            fill
            className="object-cover grayscale blur-sm scale-110"
          />
        </div>
      </section>

    </main>
  );
}
