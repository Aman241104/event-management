'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Instagram, MoveRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/atoms/Button';
import { Gallery } from '@/components/molecules/Gallery';
import { MaskSlideImage } from '@/components/molecules/MaskSlideImage';
import { Magnetic } from '@/components/atoms/Magnetic';
import { TextReveal } from '@/components/atoms/TextReveal';
import { InfiniteMarquee } from '@/components/atoms/InfiniteMarquee';
import { SVGSpine } from '@/components/atoms/SVGSpine';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const galleryItems = [
  { id: 1, title: 'The Tuscan Villa', category: 'Weddings', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200', size: 'large' as const },
  { id: 2, title: 'Main Stage Energy', category: 'Production', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Minimalist Mandap', category: 'Tradition', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Electric Afterparty', category: 'Entertainment', image: 'https://images.unsplash.com/photo-1540039155732-6781b0e1cca1?auto=format&fit=crop&q=80&w=800', size: 'medium' as const },
];

const instaPosts = [
  { id: 1, img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400' },
  { id: 2, img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=400' },
  { id: 3, img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=400' },
  { id: 4, img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=400' },
];

const collaborations = [
  'Luxury Palaces', 'Michelin Stars', 'International Talent', 'Bespoke Logistics', 'Fine Art Decor', 'Cinematic Media'
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.decorative-line', {
      scaleX: 0,
      duration: 2,
      stagger: 0.3,
      ease: 'power4.inOut'
    });

    if (parallaxRef.current) {
      gsap.to(parallaxRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: '.parallax-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    }

    gsap.to('.main-bg', {
      backgroundColor: '#F5EAE6',
      scrollTrigger: {
        trigger: '#methodology',
        start: 'top center',
        end: 'bottom center',
        scrub: true
      }
    });

    gsap.to('.side-label', {
      y: -100,
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1
      }
    });

    return () => {
    };
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="bg-bg-main main-bg transition-colors duration-1000 flex flex-col pt-32 overflow-hidden selection:bg-primary selection:text-white relative">
      
      <div className="side-label">Zing Bliss Events — Bespoke Architecture</div>
      <div className="side-label-right">Est. 2023 — Mumbai / Dubai / London</div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none dot-pattern -z-10" />
          
          <div className="lg:col-span-6 z-20 space-y-12">
            <div className="flex flex-col gap-4">
              <div className="meta-tag">
                <span className="w-4 h-[1px] bg-primary" />
                Selected Commissions 2026
              </div>
              <Magnetic strength={0.1}>
                <div className="hero-badge flex items-center gap-4 w-fit">
                  <span className="text-[10px] font-sans font-medium uppercase tracking-[0.5em] text-text-primary">Fine Art Studio</span>
                </div>
              </Magnetic>
            </div>
            
            <div className="space-y-4">
              <TextReveal 
                as="h1" 
                text="Crafting Vibrant Narratives & Royal Legacies." 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[8rem] font-serif tracking-tighter text-text-primary leading-[1.1] md:leading-[0.85] font-light" 
              />
            </div>
            
            <div className="hero-desc pl-12 border-l border-border-subtle max-w-lg fade-up">
              <div className="meta-tag mb-4">Ref: ZB_H01</div>
              <p className="text-base text-text-secondary font-light leading-[2]">
                We are architects of the unforgettable. Blending high-energy production with understated luxury to create celebrations that define lifetimes.
              </p>
              <div className="pt-10 flex items-center gap-8">
                <Magnetic strength={0.2}>
                  <Link href="/contact">
                    <Button variant="solid" className="btn-royal px-16 py-6 group" data-cursor="Commission">
                      Commission Us
                      <MoveRight className="ml-4 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </Link>
                </Magnetic>
                <a href="https://www.instagram.com/zingblissevents/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors group" data-cursor="Instagram">
                  <Instagram size={20} strokeWidth={1.5} className="group-hover:rotate-12 transition-transform" />
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest">Our Feed</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative w-full aspect-[4/5] md:aspect-[3/4] fade-up p-8 flex items-center justify-center">
            <div className="absolute top-4 right-12 text-right space-y-1 hidden md:block z-30">
              <p className="meta-tag justify-end">Project: Royal Gala</p>
              <p className="meta-tag justify-end">Location: Jaipur, India</p>
              <p className="meta-tag justify-end">Scale: Absolute</p>
            </div>

            <div className="absolute inset-0 bg-bg-surface-light/50 -z-10 rounded-[40px] m-4" />
            
            <div 
              ref={heroImageRef}
              className="relative w-full h-full overflow-hidden arch-mask shadow-[0_30px_100px_rgba(0,0,0,0.15)] cursor-pointer"
              data-cursor="Discover"
            >
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200"
                alt="High-End Event Architecture"
                fill
                className="object-cover brightness-[0.9] grayscale-[0.1] hover:grayscale-0 transition-all duration-[10s] ease-out group-hover:scale-105"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main/20 via-transparent to-transparent pointer-events-none" />
            </div>
            
            <div className="absolute -bottom-2 -left-2 w-32 h-32 border-l border-b border-primary/20 pointer-events-none z-20" />
            <div className="absolute -top-2 -right-2 w-32 h-32 border-r border-t border-primary/20 pointer-events-none z-20" />
          </div>
        </div>
      </section>

      <div className="vertical-line opacity-20 h-32" />

      {/* Methodology Section */}
      <section id="methodology" className="py-32 md:py-48 bg-bg-surface border-y border-border-subtle methodology-section relative dot-pattern overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 text-[20rem] font-serif text-text-light opacity-[0.02] whitespace-nowrap pointer-events-none select-none">
          CRAFTING EXCELLENCE
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start mb-32 fade-up">
            <div className="space-y-6">
              <div className="meta-tag"><span className="w-2 h-2 rounded-full bg-primary" /> Core Disciplines</div>
              <TextReveal 
                as="h2"
                text="The Scale of Magic."
                className="text-4xl md:text-7xl font-serif text-text-primary font-light tracking-tight leading-[1.1]"
              />
            </div>
            <div className="max-w-md mt-12 md:mt-0">
              <p className="text-text-secondary font-light leading-relaxed">
                Zing Bliss Events specializes in the high-fidelity orchestration of scale and emotion. From grand stage setups to the most intimate detail.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 relative">
            <SVGSpine />
            <div className="space-y-16 md:space-y-32">
              <div className="fade-up space-y-8 pl-0 md:pl-12 relative group cursor-pointer">
                <span className="text-2xl font-serif text-primary/40 italic">01</span>
                <div className="space-y-2">
                  <h3 className="text-3xl font-serif text-text-primary font-light group-hover:text-primary transition-colors">Event Management</h3>
                  <div className="meta-tag opacity-50">Logistics / Sourcing / Planning</div>
                </div>
                <p className="text-sm text-text-secondary font-light leading-relaxed max-w-sm">
                  Seamless execution from concept to completion. We handle Weddings, Corporate Galas, and Private Bashes with professional precision.
                </p>
              </div>
              <div className="fade-up space-y-8 pl-0 md:pl-12 group cursor-pointer">
                <span className="text-2xl font-serif text-primary/40 italic">03</span>
                <div className="space-y-2">
                  <h3 className="text-3xl font-serif text-text-primary font-light group-hover:text-primary transition-colors">Production & Setup</h3>
                  <div className="meta-tag opacity-50">Architecture / AV / Lighting</div>
                </div>
                <p className="text-sm text-text-secondary font-light leading-relaxed max-w-sm">
                  Technical precision meeting creative vision. We transform empty spaces into immersive environments using custom builds and lighting.
                </p>
              </div>
            </div>
            
            <div className="space-y-32 md:mt-48">
              <div className="fade-up space-y-8 pl-0 md:pl-12 group cursor-pointer">
                <span className="text-2xl font-serif text-primary/40 italic">02</span>
                <div className="space-y-2">
                  <h3 className="text-3xl font-serif text-text-primary font-light group-hover:text-primary transition-colors">Entertainment</h3>
                  <div className="meta-tag opacity-50">Artist / Sound / Talent</div>
                </div>
                <p className="text-sm text-text-secondary font-light leading-relaxed max-w-sm">
                  The soul of the party. We source international artists, live bands, and DJs to curate an unforgettable auditory experience.
                </p>
              </div>
              <div className="fade-up space-y-8 pl-0 md:pl-12 group cursor-pointer">
                <span className="text-2xl font-serif text-primary/40 italic">04</span>
                <div className="space-y-2">
                  <h3 className="text-3xl font-serif text-text-primary font-light group-hover:text-primary transition-colors">Digital & Media</h3>
                  <div className="meta-tag opacity-50">Content / Cinema / Social</div>
                </div>
                <p className="text-sm text-text-secondary font-light leading-relaxed max-w-sm">
                  Capturing the energy. From high-fidelity videography to integrated social media storytelling that preserves your legacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-y border-border-subtle/30 overflow-hidden bg-bg-surface-light/30">
        <InfiniteMarquee items={collaborations} speed={60} />
      </section>

      <div className="vertical-line opacity-20 h-32" />

      {/* Archives Section */}
      <section id="archives" className="py-32 container mx-auto px-6 relative">
        <div className="absolute top-0 right-12 text-[10px] font-mono text-text-light uppercase tracking-[0.5em] rotate-90 origin-right translate-y-32 hidden lg:block">
          Portfolio Archive 2023—2026
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mb-24 fade-up">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-text-secondary">The Archives</span>
            <h2 className="text-4xl md:text-6xl font-serif text-text-primary font-light">The Visual <i className="text-primary">Journal</i></h2>
          </div>
          <Magnetic strength={0.3}>
            <Link href="/gallery" className="hidden md:block">
              <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-text-primary border-b border-text-primary pb-1 hover:text-primary transition-colors duration-500">View Full Portfolio</span>
            </Link>
          </Magnetic>
        </div>
        
        <div className="fade-up" data-cursor="View">
          <Gallery items={galleryItems} />
        </div>
      </section>

      {/* Narratives Section */}
      <section id="instagram" className="py-32 md:py-48 bg-bg-surface-light border-y border-border-subtle relative overflow-hidden">
        <div className="absolute -bottom-10 right-0 text-[15rem] font-serif text-primary opacity-[0.03] select-none pointer-events-none">
          JOURNAL
        </div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-8 fade-up">
              <div className="flex items-center gap-4">
                <Instagram size={24} strokeWidth={1} className="text-primary" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-text-secondary">Live From the Studio</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-text-primary font-light leading-tight">
                Follow our <br/><i className="text-primary">Daily Narratives</i>
              </h2>
              <p className="text-text-secondary font-light max-w-md leading-[2]">
                We share our latest setup processes, behind-the-scenes magic, and event reveals daily on our Instagram feed. Connect with our community.
              </p>
              <div className="pt-4">
                <a href="https://www.instagram.com/zingblissevents/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="btn-outline-royal rounded-full" data-cursor="Follow">@zingblissevents</Button>
                </a>
              </div>
            </div>
            
            <div className="flex-1 grid grid-cols-2 gap-4 md:gap-8 fade-up relative">
              <div className="absolute -inset-4 border border-border-subtle/30 pointer-events-none" />
              {instaPosts.map((post) => (
                <div key={post.id} className="relative aspect-square overflow-hidden group cursor-pointer" data-cursor="Open">
                  <Image 
                    src={post.img} 
                    alt="Instagram Post" 
                    fill 
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Instagram size={24} className="text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="parallax-section relative h-[80vh] w-full overflow-hidden">
        <div ref={parallaxRef} className="absolute inset-0 -top-[30%] h-[160%] w-full">
          <Image
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000"
            alt="Venue Atmosphere"
            fill
            className="object-cover sepia-[0.3] brightness-90"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-secondary/60 mix-blend-multiply" />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8">
          <div className="w-[1px] h-32 bg-white/30 decorative-line origin-top" />
          <h2 className="text-4xl md:text-[10rem] font-serif text-white/90 font-light tracking-tighter uppercase text-center px-4 leading-[0.85]">
            Elegance is <br/><i className="text-white/40 lowercase tracking-normal font-light">Restraint.</i>
          </h2>
          <div className="w-[1px] h-32 bg-white/30 decorative-line origin-bottom" />
        </div>
      </section>

      {/* Commission Section */}
      <section id="cta" className="py-32 md:py-64 bg-bg-surface border-t border-border-subtle relative overflow-hidden grainy-gradient">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-16 fade-up">
            <div className="flex flex-col items-center gap-4">
              <span className="meta-tag">Establishment of Legacy</span>
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-700" />
                <Sparkles size={48} className="text-primary/40 relative z-10 animate-pulse" strokeWidth={0.5} />
              </div>
            </div>
            
            <TextReveal 
              as="h2"
              text="Commission Your Legacy."
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[10rem] font-serif text-text-primary tracking-tighter leading-[1.1] md:leading-[0.85] font-light"
            />
            
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl font-light leading-[1.8]">
              We strictly limit our engagements to ensure absolute dedication. Connect with us to discuss your vision.
            </p>
            
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-16">
              <Magnetic strength={0.15}>
                <Link href="/contact">
                  <Button variant="solid" className="btn-royal px-20 py-8 text-sm group" data-cursor="Inquire">
                    Inquire
                    <ArrowRight className="ml-4 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
              </Magnetic>
              <div className="flex flex-col items-start gap-4">
                <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 text-text-primary hover:text-primary transition-all duration-500 group" data-cursor="Private">
                  <span className="w-12 h-[1px] bg-text-primary group-hover:bg-primary group-hover:w-16 transition-all duration-500" />
                  <span className="text-[10px] font-sans uppercase tracking-[0.5em] font-medium">WhatsApp Private Line</span>
                </a>
                <p className="text-[8px] font-mono text-text-light uppercase tracking-widest pl-18">— Response within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
