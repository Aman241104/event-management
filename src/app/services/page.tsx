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
    label: '01 / PLANNING',
    title: 'Event Management',
    description: 'We handle everything from start to finish. Our team manages all the vendors and details so your event runs perfectly.',
    image: '/decor-1.jpg',
    tags: ['Weddings', 'Business Events', 'Birthdays', 'Family Parties', 'Festivals'],
    bgColor: '#FDFCFB',
    maskClass: 'bg-canvas'
  },
  {
    id: '02',
    label: '02 / TALENT',
    title: 'Entertainment',
    description: 'We bring the best music and performers to your event. From DJs to live bands, we make sure everyone has a great time.',
    image: '/decor-2.jpg',
    tags: ['DJs', 'Live Bands', 'Celebrity Guests', 'Kids Fun', 'Hosts'],
    bgColor: '#F9F8F6',
    maskClass: 'bg-surface'
  },
  {
    id: '03',
    label: '03 / STYLE',
    title: 'Design & Setup',
    description: 'We create beautiful spaces with great lighting and decor. We make sure every corner looks amazing for your guests.',
    image: '/decor-3.jpg',
    tags: ['Decorations', 'Lighting & Sound', 'Stage Design', 'Catering', 'Photos & Video'],
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

  useGSAP(() => {
    gsap.from('.header-fade', { y: 30, opacity: 0, duration: 1.2, stagger: 0.1, ease: 'power2.out' });
    /*
    const sections = gsap.utils.toArray<HTMLElement>('.service-section');
    sections.forEach((section) => {
      const bgColor = section.dataset.bg;
      ScrollTrigger.create({
        trigger: section,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => gsap.to(containerRef.current, { backgroundColor: bgColor, duration: 1.2, ease: 'power2.inOut' }),
        onEnterBack: () => gsap.to(containerRef.current, { backgroundColor: bgColor, duration: 1.2, ease: 'power2.inOut' }),
      });
    });
    */
    gsap.utils.toArray<HTMLElement>('.process-card').forEach((card) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top 90%' },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    });
    setTimeout(() => ScrollTrigger.refresh(), 200);
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen pt-16 pb-12 relative overflow-hidden transition-colors duration-1000">
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
          
          <h1 className="header-fade text-5xl md:text-[7rem] lg:text-[8.5rem] font-serif font-medium tracking-tighter text-white leading-[0.9] drop-shadow-2xl max-w-5xl">
            Our <span className="text-burnished italic font-light">Services.</span>
          </h1>

          <p className="header-fade text-lg md:text-2xl text-white/90 max-w-2xl leading-relaxed font-sans font-light mt-10 drop-shadow-lg">
            We offer complete event planning and design services for weddings, business events, and private parties.
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
                    <TextReveal as="h2" text={service.title} className="text-5xl md:text-8xl font-serif text-text-primary font-bold leading-[1] tracking-tighter" />
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
      <section id="process" className="relative py-24 bg-surface border-y border-linen/30" data-bg="var(--color-surface)">
        <div className="container mb-16 text-center space-y-4 fade-up">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-heritage/60 small-caps">06 / THE PROCESS</span>
          <TextReveal as="h2" text="How It Works." className="text-5xl md:text-7xl font-serif text-text-primary font-bold tracking-tighter" />
        </div>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Consultation', desc: 'We meet to understand your ideas and what you want for your big day.' },
              { title: 'Conceptualization', desc: 'We create a careful plan and design so you can see how it will look.' },
              { title: 'Coordination', desc: 'We help you pick the best vendors and items to match your style.' },
              { title: 'Celebration', desc: 'We are there on the day to make sure everything runs perfectly.' },
            ].map((item, i) => (
              <div key={i} className="process-card bg-white p-10 rounded-2xl border border-linen/50 hover:border-heritage/20 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col space-y-8 group">
                <div className="flex justify-between items-start">
                    <span className="text-4xl font-serif font-bold text-heritage italic">0{i+1}</span>
                    <div className="w-10 h-10 rounded-full bg-heritage/5 flex items-center justify-center text-heritage group-hover:bg-heritage group-hover:text-white transition-all duration-500">
                        <ArrowRight size={16} />
                    </div>
                </div>
                <div className="space-y-3">
                    <h3 className="text-2xl font-serif text-text-primary font-bold italic">{item.title}</h3>
                    <p className="text-sm text-text-secondary font-sans font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ */}
      <section id="faq" className="py-24 container">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-heritage/60 small-caps">07 / QUESTIONS</span>
            <TextReveal as="h2" text="Common Questions." className="text-4xl md:text-6xl font-serif font-bold text-text-primary tracking-tighter" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { q: 'Do you plan events in other cities?', a: 'Yes, we plan events all over India and in other countries too.' },
              { q: 'When should we book your services?', a: 'For big events, it is best to book 8 to 12 months in advance.' },
              { q: 'Can you help with music and artists?', a: 'Yes, we have a network of top-tier DJs, bands, and performers.' },
              { q: 'Is every event custom?', a: 'Absolutely. We believe every story is unique and deserves a bespoke celebration.' },
            ].map((faq, i) => (
              <div key={i} className="group border border-linen/50 hover:border-heritage/20 hover:shadow-xl transition-all duration-700 bg-white p-10 rounded-2xl">
                <h4 className="text-2xl font-serif font-bold text-text-primary group-hover:text-heritage transition-colors italic">{faq.q}</h4>
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
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tighter text-white leading-tight">
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
