'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Sparkles, Music, Zap, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/atoms/Button';
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
      
      {/* Header */}
      <section id="header" className="container py-24 md:py-32 relative text-center space-y-12">
        <div className="header-fade flex flex-col items-center gap-4">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-heritage/60 small-caps">03 / WHAT WE DO</span>
          <div className="h-12 w-[1px] bg-burnished/30" />
        </div>
        <TextReveal as="h1" text="Our Services." className="text-5xl md:text-[8rem] lg:text-[10rem] font-serif tracking-tighter text-text-primary leading-[0.85] font-bold" />
        <p className="header-fade text-lg md:text-2xl text-text-secondary font-sans font-light max-w-3xl mx-auto pt-6 leading-relaxed">
          We offer complete event planning and design services for weddings, business events, and private parties.
        </p>
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
      <section id="process" className="relative py-24 md:py-32">
        <div className="container mb-24 text-center space-y-6">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-heritage/60 small-caps">06 / THE PROCESS</span>
          <TextReveal as="h2" text="How It Works." className="text-6xl md:text-9xl font-serif text-text-primary font-bold tracking-tighter" />
        </div>
        <div className="container space-y-24">
          {[
            { step: '01', title: 'First Talk', desc: 'We meet to understand your ideas and what you want for your big day.' },
            { step: '02', title: 'The Plan', desc: 'We create a careful plan and design so you can see how it will look.' },
            { step: '03', title: 'Choosing Details', desc: 'We help you pick the best vendors and items to match your style.' },
            { step: '04', title: 'The Event', desc: 'We are there on the day to make sure everything runs perfectly.' },
          ].map((item, i) => (
            <div key={i} className="process-card grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center group">
              <div className="md:col-span-5 relative text-center md:text-left">
                <span className="text-[8rem] md:text-[14rem] font-serif font-bold text-heritage leading-none group-hover:scale-110 transition-transform duration-1000 inline-block">{item.step}</span>
              </div>
              <div className="md:col-span-7 space-y-6">
                <h3 className="text-4xl md:text-6xl font-serif text-text-primary font-bold italic">{item.title}</h3>
                <p className="text-xl md:text-2xl text-text-secondary font-sans font-light leading-relaxed max-w-2xl">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32 container">
        <div className="max-w-6xl mx-auto space-y-20">
          <div className="text-center space-y-6">
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-heritage/60 small-caps">07 / QUESTIONS</span>
            <TextReveal as="h2" text="Common Questions." className="text-5xl md:text-7xl font-serif font-bold text-text-primary tracking-tighter" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      {/* CTA */}
      <section id="cta" className="py-32 md:py-48 relative overflow-hidden">
        <div className="container text-center space-y-12 relative z-10">
          <TextReveal as="h2" text="Ready to start?" className="text-6xl md:text-[10rem] lg:text-[12rem] font-serif text-text-primary font-bold tracking-tighter leading-[0.85]" />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 pt-8">
            <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="h-20 px-20 text-[11px] bg-heritage text-white hover:bg-heritage-dark shadow-2xl transition-all hover:scale-105" leftIcon={<MessageCircle size={24} />}>Book Consultation</Button>
            </a>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="h-20 px-20 text-[11px] border-heritage/30 text-heritage hover:bg-heritage hover:text-white transition-all shadow-xl">Send a Message</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
