'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Sparkles, 
  Heart, 
  PartyPopper, 
  Music, 
  Star, 
  MoveRight,
  Zap,
  Users,
  MessageCircle,
  Tent,
  Instagram as InstagramIcon
} from 'lucide-react';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { Gallery } from '@/components/molecules/Gallery';
import { Magnetic } from '@/components/atoms/Magnetic';
import { FloatingDecor } from '@/components/atoms/FloatingDecor';
import { ParallaxImage } from '@/components/atoms/ParallaxImage';
import { SVGSpine } from '@/components/atoms/SVGSpine';
import { TextReveal } from '@/components/atoms/TextReveal';
import { BackgroundFlourish } from '@/components/atoms/BackgroundFlourish';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const galleryItems = [
  { id: 1, title: 'Palace Wedding Udaipur', category: 'Weddings', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200', size: 'large' as const },
  { id: 2, title: 'Luxury Table Decor', category: 'Design', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800', size: 'tall' as const },
  { id: 3, title: 'Grand Mandap Setup', category: 'Weddings', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800', size: 'medium' as const },
  { id: 4, title: 'Corporate Stage Design', category: 'Production', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800', size: 'medium' as const },
];

const testimonials = [
  { id: 1, content: "Zing Bliss turned our vision into reality. Every detail was beautifully executed and our guests loved the experience.", author: "Sonia & Aryan", role: "Wedding Celebration", event: "Private Event", rating: 5, avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" },
  { id: 2, content: "The team handled everything so professionally. From decor to entertainment, the event was flawless.", author: "Rajesh Khanna", role: "Corporate Gala", event: "Annual Summit", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
  { id: 3, content: "Their creativity and execution truly set them apart. Highly recommended for any celebration.", author: "Happy Client", role: "Special Occasion", event: "Birthday Bash", rating: 5, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
];

const steps = [
  { title: 'Consultation', desc: 'Understanding your vision and preferences.', icon: <Users size={24} /> },
  { title: 'Planning & Design', desc: 'Crafting bespoke concepts and logistics.', icon: <Sparkles size={24} /> },
  { title: 'Event Production', desc: 'Managing setup, decor, and technicals.', icon: <Zap size={24} /> },
  { title: 'Execution', desc: 'Onsite coordination for a flawless day.', icon: <Star size={24} /> },
];

const eventTypes = [
  { title: 'Weddings', icon: <Heart size={24} />, image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600', desc: 'Royal palace & destination celebrations.', color: 'var(--color-accent-rose)' },
  { title: 'Corporate Events', icon: <Sparkles size={24} />, image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=600', desc: 'Bespoke summits & high-profile galas.', color: 'var(--color-accent-azure)' },
  { title: 'Birthday Celebrations', icon: <PartyPopper size={24} />, image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=600', desc: 'Milestone events curated with flair.', color: '#FDFCF0' },
  { title: 'Baby Showers', icon: <Star size={24} />, image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600', desc: 'Celebrating new life with elegance.', color: 'var(--color-accent-rose)' },
  { title: 'Festivals', icon: <Tent size={24} />, image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=600', desc: 'High-energy cultural & musical fairs.', color: 'var(--color-accent-azure)' },
  { title: 'Private Parties', icon: <Users size={24} />, image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=600', desc: 'Intimate house parties & VIP bashes.', color: '#F4F1EA' },
];

const stats = [
  { value: '100+', label: 'Events Planned' },
  { value: '50+', label: 'Happy Clients' },
  { value: '20+', label: 'Premium Vendors' },
  { value: '5+', label: 'Years Experience' },
];

const instaPhotos = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=400',
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.hero-badge', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' })
      .from('.hero-title span', { y: 40, opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.out' }, '-=0.6')
      .from('.hero-desc', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.8')
      .from('.hero-btns', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.8');

    gsap.utils.toArray<HTMLElement>('.fade-up').forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 92%',
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });
    });

    // Background color shifts
    const sections = gsap.utils.toArray<HTMLElement>('section');
    sections.forEach((section, i) => {
      const bgColor = section.dataset.bg || (i % 2 === 0 ? 'var(--color-canvas)' : 'var(--color-surface)');
      
      ScrollTrigger.create({
        trigger: section,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => gsap.to(mainRef.current, { backgroundColor: bgColor, duration: 1, ease: 'power2.inOut' }),
        onEnterBack: () => gsap.to(mainRef.current, { backgroundColor: bgColor, duration: 1, ease: 'power2.inOut' }),
      });
    });

  }, { scope: containerRef });

  return (
    <main ref={mainRef} className="min-h-screen bg-canvas flex flex-col overflow-x-hidden relative transition-colors duration-1000">
      <div ref={containerRef} className="relative w-full">
        <FloatingDecor />
        <BackgroundFlourish type="floral" className="top-[10%] left-[5%] w-64 h-64" parallaxSpeed={0.05} />
        <BackgroundFlourish type="architectural" className="top-[40%] right-[2%] w-96 h-96" parallaxSpeed={0.08} />
        <BackgroundFlourish type="geometric" className="top-[70%] left-[-5%] w-80 h-80 rotate-12" parallaxSpeed={0.03} />
        
        {/* 1. Hero Section */}
        <section id="hero" className="relative h-screen flex items-center overflow-hidden" data-bg="var(--color-canvas)">
          <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/80 to-transparent z-10 backdrop-blur-[0.5px] lg:w-1/2" />
          <div className="absolute inset-0 z-0 flex justify-end">
            <div className="w-full lg:w-3/4 h-full relative">
              <Image
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000"
                alt="Luxury Wedding Setup"
                fill
                className="object-cover brightness-[1.05] animate-[ken-burns_30s_ease-in-out_infinite_alternate]"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-canvas/20 to-canvas z-10" />
            </div>
          </div>

          <div className="container relative z-20 px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-12">
              <div className="hero-badge flex items-center gap-6">
                <span className="text-[10px] font-mono text-heritage/40 uppercase tracking-[0.5em]">01 / PREFACE</span>
                <Badge variant="solid" dot className="bg-canvas/80 border-burnished/50 text-heritage-dark uppercase tracking-[0.3em] py-2 px-6 backdrop-blur-md shadow-sm">Commissioned Archive</Badge>
              </div>
              <h1 className="hero-title text-6xl md:text-[8rem] font-serif font-bold tracking-tight text-text-primary leading-[0.85]">
                <span className="block header-fade drop-shadow-sm">Meticulous</span>
                <span className="block header-fade text-burnished italic font-light mt-2 relative inline-block drop-shadow-[0_2px_15px_rgba(197,160,89,0.4)]">
                  Planning.
                </span>
                <span className="block header-fade drop-shadow-sm">Flawless <span className="text-heritage italic font-light">Execution</span>.</span>
              </h1>
              <p className="hero-desc text-lg md:text-2xl text-text-primary max-w-2xl leading-relaxed font-sans font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.1)]">
                Bespoke celebrations planned with precision, creativity, and professional grace for the most discerning clients.
              </p>
              <div className="hero-btns pt-8 flex flex-col sm:flex-row items-center gap-8">
                <Magnetic strength={0.2}>
                  <Link href="/contact">
                    <Button size="lg" className="h-20 px-16 text-xl btn-prestige rounded-none font-bold" rightIcon={<ArrowRight size={24} />}>
                      Plan Your Event
                    </Button>
                  </Link>
                </Magnetic>
                <Link href="/gallery" className="text-[11px] uppercase tracking-[0.5em] text-heritage border-b border-heritage/30 pb-2 hover:text-text-primary hover:border-text-primary transition-all font-bold">
                  View Archive
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block lg:col-span-4 self-end pb-12">
              <div className="flex flex-col gap-8 text-right">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-heritage/30 uppercase tracking-[0.3em]">Coordinates</span>
                  <p className="text-sm font-sans text-heritage-dark font-medium uppercase tracking-widest">Global Service — HQ / Mumbai</p>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-heritage/30 uppercase tracking-[0.3em]">Archive ID</span>
                  <p className="text-sm font-sans text-heritage-dark font-medium uppercase tracking-widest">ZB_2026_COLLECTION</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. About Preview */}
        <section id="about" className="py-64 bg-surface relative overflow-hidden border-y border-linen" data-bg="var(--color-surface)">
          <SVGSpine height="120%" className="-top-32" />
          <div className="container px-6 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
            <div className="fade-up space-y-12">
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <span className="text-[10px] font-mono text-heritage/40 uppercase tracking-[0.5em]">02 / STORY</span>
                  <Badge variant="outline" className="border-heritage text-heritage-dark uppercase tracking-widest font-bold">Our Legacy</Badge>
                </div>
                <TextReveal 
                  text="Turning Vision Into Reality." 
                  className="text-5xl md:text-8xl font-serif font-bold text-text-primary tracking-tighter leading-[0.9]"
                />
              </div>
              <p className="text-xl text-text-secondary leading-relaxed font-sans font-light max-w-xl">
                Zing Bliss Events is a boutique agency dedicated to turning life&apos;s special moments into unforgettable experiences. We specialize in planning, designing, and executing events with quiet precision and professionalism.
              </p>
              <div className="pt-8">
                <Link href="/about" className="inline-flex items-center gap-4 text-heritage hover:text-heritage-dark transition-colors uppercase tracking-[0.2em] text-xs font-bold group">
                  Discover Our Agency <MoveRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="relative fade-up lg:aspect-[3/4] aspect-video group">
              <div className="absolute -inset-10 bg-accent-rose/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="absolute -inset-4 border border-heritage/20 rounded-[1000px] rounded-b-none pointer-events-none z-10" />
              <div className="relative w-full h-full overflow-hidden rounded-[1000px] rounded-b-none arch-mask shadow-sm z-0">
                <ParallaxImage 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200" 
                  alt="Luxury Event Decor" 
                  speed={0.3}
                  aspectRatio="aspect-auto"
                  containerClassName="h-full w-full"
                  className="transition-transform duration-[10s]"
                />
                <div className="absolute inset-0 bg-heritage/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10 pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Services Section - Premium Cards */}
        <section id="services" className="py-64 container px-6 space-y-32 relative" data-bg="var(--color-canvas)">
          <SVGSpine height="100%" className="top-0" opacity={0.1} />
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 fade-up relative z-10">
            <div className="space-y-8 max-w-2xl">
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-mono text-heritage/40 uppercase tracking-[0.5em]">03 / EXPERTISE</span>
                <Badge variant="solid" dot className="bg-heritage/10 text-heritage-dark uppercase tracking-widest font-bold">Services</Badge>
              </div>
              <TextReveal 
                text="Elevated Experiences" 
                className="text-5xl md:text-7xl font-serif font-bold text-text-primary tracking-tighter leading-[0.9]"
              />
            </div>
            <p className="text-lg text-text-secondary font-sans font-light max-w-sm mb-2">
              Meticulously crafted solutions for the most significant moments in your personal and professional life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
            {[
              { title: 'Event Management', icon: <Star size={32} />, desc: 'Full planning and coordination from concept to execution. We handle every logistical detail.', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800', accent: 'bg-accent-rose/20' },
              { title: 'Entertainment Services', icon: <Music size={32} />, desc: 'DJs, international artists, hosts, bands and live performances to set the perfect vibe.', img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800', accent: 'bg-accent-azure/20' },
              { title: 'Production & Setup', icon: <Zap size={32} />, desc: 'Bespoke decor, lighting, catering coordination and full end-to-end event production.', img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800', accent: 'bg-surface-light' },
            ].map((service, i) => (
              <div key={i} className="glass-card overflow-hidden group fade-up border-linen hover:border-heritage relative">
                <div className="absolute -inset-10 bg-accent-azure/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className={`absolute inset-0 ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                <div className="relative h-[35rem] overflow-hidden z-10">
                  <ParallaxImage 
                    src={service.img} 
                    alt={service.title} 
                    speed={0.2}
                    aspectRatio="aspect-auto"
                    containerClassName="h-full w-full"
                    className="group-hover:scale-110 transition-transform duration-[5s] ease-out" 
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
                  <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-heritage text-canvas flex items-center justify-center shadow-md border border-canvas/20 z-20">
                    {service.icon}
                  </div>
                </div>
                <div className="p-16 space-y-8 text-center relative z-10">
                  <h3 className="text-3xl font-serif font-bold text-text-primary">{service.title}</h3>
                  <p className="text-text-secondary font-sans font-light leading-relaxed">{service.desc}</p>
                  <Link href="/services" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-heritage border-b border-heritage/30 pb-2 hover:text-text-primary hover:border-text-primary transition-all group/link font-bold">
                    Learn More <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Events We Specialize In */}
        <section id="event-types" className="py-64 bg-surface border-y border-linen relative overflow-hidden" data-bg="var(--color-surface)">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 text-[25rem] font-serif text-heritage/5 opacity-[0.03] whitespace-nowrap pointer-events-none select-none">
            EXPERIENCE
          </div>
          <div className="container px-6 relative z-10 space-y-32">
            <div className="text-center space-y-8 max-w-3xl mx-auto fade-up">
              <div className="flex items-center justify-center gap-6">
                <span className="text-[10px] font-mono text-heritage/40 uppercase tracking-[0.5em]">04 / COLLECTION</span>
                <Badge variant="outline" className="border-heritage text-heritage-dark uppercase tracking-widest font-bold">Our Range</Badge>
              </div>
              <TextReveal 
                text="Planned to Perfection." 
                className="text-6xl md:text-[9rem] font-serif font-bold text-text-primary tracking-tighter leading-[0.85]"
              />
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 fade-up">
              {eventTypes.map((item, i) => (
                <div key={i} className="group relative aspect-[4/3] overflow-hidden border border-linen cursor-pointer bg-heritage/5 rounded-sm">
                  <div className="absolute top-6 left-6 z-30 text-[9px] font-mono text-canvas/70 group-hover:text-canvas transition-colors font-bold uppercase tracking-widest">
                    REF: ARCHIVE-0{i + 1}
                  </div>
                  <div className="absolute inset-0 z-0">
                    <ParallaxImage
                      src={item.image}
                      alt={item.title}
                      speed={0.15}
                      containerClassName="w-full h-full"
                      aspectRatio="aspect-auto h-full"
                      className="transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    />
                  </div>
                  {/* Dark Gradient Overlay for text readability */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10 opacity-80 group-hover:opacity-100 transition-opacity duration-700 z-10"
                  />
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10 space-y-4 z-20"
                  >
                    <div className="w-14 h-14 rounded-full bg-canvas/10 backdrop-blur-md text-canvas flex items-center justify-center border border-canvas/20 shadow-lg group-hover:bg-canvas group-hover:text-heritage group-hover:scale-110 transition-all duration-500">
                      {item.icon}
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-canvas tracking-wide drop-shadow-md">{item.title}</h3>
                    <p className="text-[11px] text-canvas/80 font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 uppercase tracking-widest leading-relaxed max-w-[90%]">{item.desc}</p>
                  </div>
                  {/* Colorful Hover Layer */}
                  <div
                    className="absolute inset-0 mix-blend-overlay opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none z-20"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              ))}            </div>
          </div>
        </section>

        {/* 5. Statistics Section */}
        <section id="stats" className="py-32 bg-canvas border-b border-linen" data-bg="var(--color-canvas)">
          <div className="container px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center fade-up">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-4">
                  <h3 className="text-5xl md:text-8xl font-serif font-bold text-heritage-dark">{stat.value}</h3>
                  <p className="text-[11px] md:text-xs font-sans font-bold uppercase tracking-[0.4em] text-text-secondary">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Gallery Section - Masonry Feel */}
        <section id="archives" className="py-64 container px-6 space-y-32 relative" data-bg="var(--color-canvas)">
          <SVGSpine height="100%" className="top-0" opacity={0.05} />
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 fade-up relative z-10">
            <div className="space-y-8 max-w-2xl">
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-mono text-heritage/40 uppercase tracking-[0.5em]">06 / GALLERY</span>
                <Badge variant="solid" dot className="bg-heritage/10 text-heritage-dark uppercase tracking-widest font-bold">Portfolio</Badge>
              </div>
              <TextReveal 
                text="Our Recent Excellence." 
                className="text-5xl md:text-8xl font-serif font-bold text-text-primary tracking-tighter leading-[0.9]"
              />
            </div>
            <Link href="/gallery">
              <Button variant="outline" className="btn-outline-prestige px-16 h-20 rounded-none font-bold">Explore All Projects</Button>
            </Link>
          </div>
          
          <div className="fade-up relative z-10">
            <Gallery items={galleryItems} />
          </div>
        </section>

        {/* 7. Testimonials Section */}
        <section id="testimonials" className="py-64 bg-surface relative overflow-hidden border-y border-linen" data-bg="var(--color-surface)">
          <div className="container px-6 space-y-32 relative z-10">
            <div className="text-center space-y-8 fade-up">
              <div className="flex items-center justify-center gap-6">
                <span className="text-[10px] font-mono text-heritage/40 uppercase tracking-[0.5em]">07 / TESTIMONY</span>
                <Badge variant="solid" className="bg-heritage/10 text-heritage-dark uppercase tracking-widest font-bold">Reviews</Badge>
              </div>
              <TextReveal 
                text="Client Stories" 
                className="text-5xl md:text-8xl font-serif font-bold tracking-tighter text-text-primary leading-[0.9]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {testimonials.map((t) => (
                <div key={t.id} className="glass-card p-16 rounded-none border border-linen space-y-12 fade-up text-center relative group">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-canvas border border-linen flex items-center justify-center text-heritage shadow-md">
                    <Star size={24} fill="currentColor" />
                  </div>
                  <div className="flex justify-center gap-1 text-burnished">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-2xl text-text-primary italic leading-relaxed font-sans font-medium">&quot;{t.content}&quot;</p>
                  <div className="pt-12 border-t border-linen flex flex-col items-center gap-6">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden transition-all duration-700 border border-heritage/30">
                      <Image src={t.avatar} alt={t.author} fill className="object-cover" sizes="96px" />
                    </div>
                    <div>
                      <h4 className="text-text-primary font-bold text-sm tracking-[0.3em] uppercase">{t.author}</h4>
                      <p className="text-[10px] text-heritage-dark font-bold tracking-[0.4em] uppercase mt-2">{t.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. How We Work Section */}
        <section id="how-it-works" className="py-64 container px-6 space-y-32 relative" data-bg="var(--color-heritage)">
          <SVGSpine height="100%" className="top-0" opacity={0.1} color="var(--color-canvas)" />
          <div className="text-center space-y-8 max-w-3xl mx-auto fade-up relative z-10">
            <div className="flex items-center justify-center gap-6">
              <span className="text-[10px] font-mono text-canvas uppercase tracking-[0.5em]">08 / PROCESS</span>
              <Badge variant="outline" className="text-canvas border-canvas/50 uppercase tracking-widest font-bold">Workflow</Badge>
            </div>
            <TextReveal 
              text="The Art of Planning" 
              className="text-5xl md:text-8xl font-serif text-canvas font-bold tracking-tighter leading-[0.9]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            <div className="absolute top-[56px] left-0 w-full h-[1px] bg-canvas/20 hidden md:block" />
            {steps.map((step, i) => (
              <div key={i} className="relative z-10 space-y-10 text-center fade-up group">
                <div className="mx-auto w-28 h-28 rounded-full bg-canvas border-2 border-canvas flex items-center justify-center text-heritage group-hover:bg-burnished group-hover:text-canvas transition-all duration-700 shadow-sm relative">
                  <div className="absolute -top-3 -right-3 text-[10px] font-mono text-heritage-dark bg-canvas px-2 py-1 border border-linen font-bold">0{i+1}</div>
                  {step.icon}
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif font-bold text-canvas">{step.title}</h3>
                  <p className="text-sm text-canvas/90 font-sans font-light leading-relaxed max-w-[240px] mx-auto">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Instagram Section */}
        <section id="instagram" className="py-64 bg-surface border-y border-linen relative overflow-hidden" data-bg="var(--color-surface)">
          <div className="container px-6 space-y-24 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-12 fade-up">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-heritage">
                  <InstagramIcon size={24} />
                  <span className="text-[11px] uppercase tracking-[0.5em] font-bold">@zingblissevents</span>
                </div>
                <TextReveal 
                  text="Social Canvas" 
                  className="text-4xl md:text-7xl font-serif font-bold text-text-primary tracking-tighter leading-[0.9]"
                />
              </div>
              <a href="https://www.instagram.com/zingblissevents/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="btn-outline-prestige px-12 h-16 rounded-none border-burnished text-heritage font-bold">Join Our Journey</Button>
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 fade-up">
              {instaPhotos.map((photo, i) => (
                <div key={i} className="relative aspect-square overflow-hidden group border border-linen">
                  <Image src={photo} alt={`Instagram ${i}`} fill className="object-cover transition-all duration-700 group-hover:scale-110" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw" />
                  <div className="absolute inset-0 bg-heritage/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <InstagramIcon size={24} className="text-canvas" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Contact CTA Section */}
        <section id="cta" className="relative py-72 bg-heritage overflow-hidden" data-bg="var(--color-heritage)">
          <BackgroundFlourish type="floral" className="bottom-0 right-0 w-[50rem] h-[50rem] text-canvas" opacity={0.05} />
          <div className="absolute inset-0 dot-pattern opacity-[0.05] invert" />
          
          <div className="container relative z-10 max-w-6xl text-center space-y-20 px-4">
            <div className="space-y-8">
              <div className="flex items-center justify-center gap-6">
                <span className="text-[10px] font-mono text-canvas/80 uppercase tracking-[0.5em]">10 / CONNECT</span>
                <Badge variant="solid" dot className="bg-canvas/10 text-canvas border-canvas/20 uppercase tracking-[0.3em] font-bold">Inquire</Badge>
              </div>
              <h2 className="text-6xl md:text-[10rem] font-serif font-bold tracking-tighter text-canvas leading-[0.8] drop-shadow-lg">
                Begin Your <br/><span className="text-burnished italic font-light">Narrative.</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto text-center space-y-16">
              <p className="text-2xl md:text-4xl text-canvas font-serif italic font-light leading-relaxed">
                Hello, I&apos;m planning an exquisite <span className="border-b-2 border-burnished text-canvas font-medium px-4 inline-block not-italic">celebration</span> in <span className="border-b-2 border-burnished text-canvas font-medium px-4 inline-block not-italic">San Francisco</span> and I&apos;d love to connect.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <Magnetic strength={0.2}>
                  <Link href="/contact">
                    <Button size="lg" className="h-28 px-24 text-2xl rounded-none bg-canvas text-heritage hover:bg-burnished-light border-0 font-bold shadow-2xl" rightIcon={<ArrowRight size={32} />}>
                      Connect With Us
                    </Button>
                  </Link>
                </Magnetic>
                <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-canvas hover:text-burnished transition-colors flex items-center gap-6 text-xl uppercase tracking-[0.3em] font-bold">
                  <MessageCircle size={32} /> WhatsApp Concierge
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
