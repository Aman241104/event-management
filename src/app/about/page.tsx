'use client';

import React, { useRef } from 'react';
import { Badge } from '@/components/atoms/Badge';
import { MaskSlideImage } from '@/components/molecules/MaskSlideImage';
import { Button } from '@/components/atoms/Button';
import { ArrowRight, Award, History, Sparkles } from 'lucide-react';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.about-header', {
      y: 40,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      delay: 0.5
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-bg-main pt-32 pb-24 px-8">
      <div className="container max-w-[1440px] space-y-32">
        
        {/* Editorial About Header */}
        <section className="about-header text-center space-y-8 max-w-4xl mx-auto">
          <Badge variant="gold" dot>The Agency Legacy</Badge>
          <h1 className="text-6xl md:text-[8rem] font-bold tracking-tight text-white leading-[0.9]">
            A Century of <br/><span className="text-secondary italic font-light">Perfection.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-moss font-sans font-light leading-relaxed">
            Founded on the principles of absolute fidelity and emotional storytelling, 
            Prestige is the worlds leading architect of high-end experiences.
          </p>
        </section>

        {/* The Story Section (Editorial Layout) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <MaskSlideImage 
            src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=1200" 
            alt="The Founder" 
            aspectRatio="aspect-[3/4]"
            className="border border-border-subtle"
          />
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white">Our <span className="italic font-light text-secondary">Philosophy</span>.</h2>
              <div className="w-24 h-1 bg-secondary" />
            </div>
            <p className="text-lg md:text-xl text-text-moss font-sans font-light leading-relaxed">
              We believe that an event is not a point in time, but a lasting legacy. 
              Our team of senior design leads, technical engineers, and private 
              concierges work in invisible precision to ensure that your narrative 
              is told with absolute prestige.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              {[
                { title: 'Exclusivity', icon: <Award size={20} /> },
                { title: 'Heritage', icon: <History size={20} /> },
                { title: 'Fidelity', icon: <Sparkles size={20} /> },
                { title: 'Vision', icon: <ArrowRight size={20} /> },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-6 border border-border-subtle hover:border-secondary transition-colors duration-500">
                  <div className="text-secondary">{item.icon}</div>
                  <span className="font-bold uppercase tracking-widest text-xs text-white">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-32 border-t border-border-subtle text-center space-y-12">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Become Part of the <span className="italic font-light text-secondary">Legend.</span></h2>
          <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            <Button variant="gold" size="lg" className="h-20 px-16 text-xl font-serif">
              Start Your Story
            </Button>
          </a>
        </section>

      </div>
    </main>
  );
}
