'use client';

import React, { useRef } from 'react';
import { Button } from '@/components/atoms/Button';
import { TextReveal } from '@/components/atoms/TextReveal';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';
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
      delay: 0.2
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
    <main ref={containerRef} className="min-h-screen bg-bg-main pt-32 pb-24">
      
      {/* Header */}
      <section id="header" className="container mx-auto px-6 py-24 md:py-32 border-b border-border-subtle">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="header-fade block text-[10px] uppercase tracking-[0.4em] text-text-secondary">Inquire</span>
          <TextReveal 
            as="h1" 
            text="Commission Us." 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[7rem] font-serif tracking-tight text-text-primary leading-[1.1] font-light" 
          />
          <p className="header-fade text-lg md:text-xl text-text-secondary font-light leading-relaxed max-w-2xl mx-auto pt-6">
            We accept a limited number of commissions annually to ensure our clients receive our undivided dedication and artistry.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section id="content" className="container mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Info Side */}
          <div className="lg:col-span-4 space-y-16 header-fade">
            <div className="space-y-6">
              <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-text-secondary">The Studio</h3>
              <p className="text-lg font-serif text-text-primary font-light leading-relaxed">
                Creative District,<br/>
                Bandra West, Mumbai
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-text-secondary">Direct Connect</h3>
              <div className="space-y-2">
                <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="block text-lg font-serif text-text-primary hover:text-primary transition-colors font-light">
                  WhatsApp Concierge
                </a>
                <a href="mailto:hello@zingblissevents.com" className="block text-lg font-serif text-text-primary hover:text-primary transition-colors font-light">
                  hello@zingblissevents.com
                </a>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-text-secondary">Global Reach</h3>
              <p className="text-lg font-serif text-text-primary font-light leading-relaxed">
                Available for commissions worldwide, with established networks in Mumbai, Dubai, and London.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-8 form-fade">
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-text-secondary">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-border-subtle focus:border-primary py-4 text-text-primary outline-none transition-colors font-light" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-text-secondary">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-border-subtle focus:border-primary py-4 text-text-primary outline-none transition-colors font-light" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-text-secondary">Event Type</label>
                  <input type="text" className="w-full bg-transparent border-b border-border-subtle focus:border-primary py-4 text-text-primary outline-none transition-colors font-light placeholder:text-text-light" placeholder="Wedding, Gala, etc." />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-text-secondary">Estimated Date</label>
                  <input type="text" className="w-full bg-transparent border-b border-border-subtle focus:border-primary py-4 text-text-primary outline-none transition-colors font-light" />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.3em] text-text-secondary">Tell Us Your Vision</label>
                <textarea 
                  className="w-full min-h-[150px] bg-transparent border-b border-border-subtle focus:border-primary py-4 text-text-primary outline-none transition-colors font-light resize-none"
                />
              </div>

              <div className="pt-8">
                <Button variant="solid" className="w-full md:w-auto btn-royal px-16 py-5">
                  Submit Inquiry
                </Button>
              </div>
            </form>
          </div>

        </div>
      </section>

    </main>
  );
}
