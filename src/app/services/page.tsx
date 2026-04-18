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
    gsap.from('.header-fade', { y: 30, opacity: 0, duration: 1.2, stagger: 0.1, ease: 'power2.out' });
    
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
      <section id="hero" className="relative h-[80vh] flex items-center overflow-hidden" data-bg="var(--color-canvas)">
        <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90 z-10 pointer-events-none" />
        
        <div className="absolute inset-0 z-0">
          <Image 
            src="/decor-1.jpg" 
            alt="Our Services" 
            fill 
            className="object-cover scale-110 animate-[ken-burns_40s_ease-in-out_infinite_alternate]" 
            priority 
            sizes="100vw" 
          />
        </div>

        <div className="container relative z-20 text-center flex flex-col items-center">
          <div className="header-fade flex flex-col items-center gap-4 mb-8">
            <span className="text-[10px] font-mono text-white/80 uppercase tracking-[0.8em] small-caps">03 / WHAT WE DO</span>
            <div className="h-12 w-[1px] bg-burnished/60" />
          </div>
          
          <h1 className="header-fade text-4xl md:text-[5.6rem] lg:text-[6.8rem] font-serif font-medium tracking-tighter text-white leading-[0.9] drop-shadow-2xl max-w-5xl">
            Our <span className="text-burnished italic font-light">Services.</span>
          </h1>

          <p className="header-fade text-lg md:text-2xl text-white/90 max-w-2xl leading-relaxed font-sans font-light mt-10 drop-shadow-lg">
            From bespoke weddings to high-impact corporate galas and whimsical celebrations — we architect legacies of elegance and unforgettable moments.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Services Spectrum List */}
      <div id="list">
        {serviceCategories.map((service, index) => (
          <React.Fragment key={service.id}>
            <section data-bg={service.bgColor} className="service-section py-24 md:py-32 relative overflow-hidden">
              <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center relative z-10">
                <div className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-2' : ''} relative w-full`}>
                   <div className="relative overflow-hidden rounded-2xl aspect-[4/5] md:aspect-[16/10] shadow-2xl group">
                      <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-[10s] group-hover:scale-110" />
                      <div className="absolute inset-0 bg-heritage/5 group-hover:opacity-0 transition-opacity duration-700" />
                   </div>
                </div>
                <div className={`lg:col-span-5 space-y-10 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-6">
                    <span className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-heritage small-caps">{service.label}</span>
                    <TextReveal as="h2" text={service.title} className="text-4xl md:text-7xl font-serif text-text-primary font-bold leading-[1] tracking-tighter" />
                    <p className="text-lg md:text-xl text-text-secondary font-sans font-light leading-relaxed">{service.description}</p>
                  </div>
                  <div className="pt-8 border-t border-linen/50">
                    <h4 className="text-[10px] uppercase tracking-[0.4em] text-heritage font-bold mb-6 small-caps">Services Include:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
                      {service.tags.map((tag) => (
                        <li key={tag} className="text-[11px] font-sans uppercase tracking-[0.2em] text-text-primary font-light flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-heritage/30" />
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-6">
                    <a href={generateWhatsAppLink(service.title, 'Booking')} target="_blank" rel="noopener noreferrer">
                      <Button className="btn-prestige bg-heritage hover:bg-heritage-dark text-white px-12 h-16 text-[10px] tracking-[0.3em] font-bold shadow-xl">Ask Us Anything</Button>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <SectionDivider />
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
      <section id="faq" className="py-24 container">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-heritage/60 small-caps">07 / QUESTIONS</span>
            <TextReveal as="h2" text="Common Questions." className="text-3xl md:text-5xl font-serif font-bold text-text-primary tracking-tighter" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { q: 'Do you plan events in other cities?', a: 'Yes, we plan events all over India and in other countries too.' },
              { q: 'When should we book your services?', a: 'For big events, it is best to book 8 to 12 months in advance.' },
              { q: 'Can you help with music and artists?', a: 'Yes, we have a network of top-tier DJs, bands, and performers.' },
              { q: 'Is every event custom?', a: 'Absolutely. We believe every story is unique and deserves a bespoke celebration.' },
            ].map((faq, i) => (
              <div key={i} className="group border border-linen/50 hover:border-heritage/20 hover:shadow-xl transition-all duration-700 bg-white p-10 rounded-2xl">
                <h4 className="text-xl font-serif font-bold text-text-primary group-hover:text-heritage transition-colors italic">{faq.q}</h4>
                <p className="mt-4 text-lg text-text-secondary font-sans font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 10. Final CTA */}
      <section id="cta" className="relative py-24 bg-heritage overflow-hidden border-t border-white/5" data-bg="var(--color-heritage)">
        <div className="absolute inset-0 z-0 opacity-10">
           <Image src="/hero10.jpg" alt="Background" fill className="object-cover" />
        </div>
        <BackgroundFlourish type="floral" className="bottom-[-10%] left-[-5%] w-64 h-64 text-white/5 rotate-45" />
        
        <div className="container relative z-10 text-center space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tighter text-white leading-tight">
              Let&apos;s Create <span className="italic font-light text-burnished">Magic.</span>
            </h2>
            <p className="text-base md:text-lg text-white/70 font-serif italic font-light leading-relaxed max-w-xl mx-auto">
              Ready to start planning your extraordinary event? Let&apos;s turn your vision into reality.
            </p>
          </div>

          <div className="flex justify-center">
            <Magnetic strength={0.2}>
              <Link href="/contact">
                <Button className="h-16 px-16 text-[10px] bg-white text-heritage hover:bg-linen shadow-2xl transition-all hover:scale-105" rightIcon={<ArrowRight size={18} />}>
                  Plan Your Event
                </Button>
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>
    </main>
  );
}
