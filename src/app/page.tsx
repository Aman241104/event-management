'use client';

import React, { useRef, useEffect } from 'react';
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
import { getGenericWhatsAppLink } from '@/lib/whatsapp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const galleryItems = [
  { id: 1, title: 'Palace Wedding Udaipur', category: 'Weddings', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200', size: 'large' as const },
  { id: 2, title: 'Luxury Table Decor', category: 'Design', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Grand Mandap Setup', category: 'Weddings', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800' },
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
  { title: 'Festivals', icon: <Tent size={24} />, image: 'https://images.unsplash.com/photo-1540039155732-6781b0e1cca1?auto=format&fit=crop&q=80&w=600', desc: 'High-energy cultural & musical fairs.', color: 'var(--color-accent-azure)' },
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
  'https://images.unsplash.com/photo-1540039155732-6781b0e1cca1?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=400',
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

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

    // Dynamic color shift for event types
    gsap.to('.event-types-bg', {
      scrollTrigger: {
        trigger: '#event-types',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
      backgroundColor: '#F2D5D5', // Faint Rose
      opacity: 0.3,
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-canvas flex flex-col overflow-x-hidden relative">
      <FloatingDecor />
      
      {/* 1. Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-canvas/80 via-canvas/20 to-canvas z-10" />
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Wedding Setup"
            fill
            className="object-cover brightness-90 animate-[ken-burns_30s_ease-in-out_infinite_alternate]"
            priority
            sizes="100vw"
          />
        </div>

        <div className="container relative z-20 text-center space-y-10 max-w-5xl px-4">
          <div className="hero-badge">
            <Badge variant="solid" dot className="bg-canvas/60 border-burnished/50 text-heritage-dark uppercase tracking-[0.3em] py-2 px-6 backdrop-blur-sm">Bespoke Celebration Architects</Badge>
          </div>
          <h1 className="hero-title text-6xl md:text-[8rem] font-serif font-bold tracking-tight text-text-primary leading-[0.85] drop-shadow-md">
            <span className="block">Crafting Magical</span>
            <span className="block text-burnished italic font-light mt-2 relative inline-block">
              Moments.
              <span className="absolute -right-8 -top-8 w-16 h-16 bg-accent-rose/30 blur-3xl rounded-full animate-pulse" />
            </span>
          </h1>
          <p className="hero-desc text-lg md:text-2xl text-text-primary max-w-3xl mx-auto leading-relaxed font-sans font-medium drop-shadow-sm">
            Luxury weddings, corporate events, and private celebrations planned with creativity and professional precision.
          </p>
          <div className="hero-btns pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Magnetic strength={0.2}>
              <Link href="/contact">
                <Button size="lg" className="h-20 px-16 text-xl btn-prestige rounded-none font-bold" rightIcon={<ArrowRight size={24} />}>
                  Plan Your Event
                </Button>
              </Link>
            </Magnetic>
            <Link href="/gallery">
              <Button variant="outline" size="lg" className="h-20 px-16 text-xl btn-outline-prestige rounded-none font-bold">
                View Our Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. About Preview */}
      <section id="about" className="py-32 bg-surface relative overflow-hidden border-y border-linen">
        <div className="container px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="fade-up space-y-10">
            <div className="space-y-6">
              <Badge variant="outline" className="border-heritage text-heritage-dark uppercase tracking-widest font-bold">Our Story</Badge>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-text-primary tracking-tight leading-tight">Turning Vision <br/><span className="text-heritage italic font-light">Into Reality</span>.</h2>
            </div>
            <p className="text-xl text-text-secondary leading-relaxed font-sans font-light">
              Zing Bliss Events is dedicated to turning life&apos;s special moments into unforgettable experiences. We specialize in planning, designing, and executing events with creativity, precision, and professionalism.
            </p>
            <div className="pt-4">
              <Link href="/about" className="inline-flex items-center gap-4 text-heritage hover:text-heritage-dark transition-colors uppercase tracking-[0.2em] text-xs font-bold group">
                Discover Our Agency <MoveRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="relative fade-up lg:aspect-square aspect-video group">
            <div className="absolute -inset-10 bg-accent-rose/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="absolute -inset-4 border border-heritage/20 rounded-[40px] pointer-events-none z-10" />
            <div className="relative w-full h-full overflow-hidden rounded-[32px] arch-mask shadow-sm z-0">
              <ParallaxImage 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury Event Decor" 
                speed={0.2}
                aspectRatio="aspect-square"
                className="transition-transform duration-[10s]"
              />
              <div className="absolute inset-0 bg-heritage/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section - Premium Cards */}
      <section id="services" className="py-32 container px-6 space-y-24">
        <div className="text-center space-y-6 max-w-3xl mx-auto fade-up">
          <Badge variant="solid" dot className="bg-heritage/10 text-heritage-dark uppercase tracking-widest font-bold">Expertise</Badge>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-text-primary tracking-tight">Our Premium <span className="text-heritage italic font-light">Services</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: 'Event Management', icon: <Star size={32} />, desc: 'Full planning and coordination from concept to execution. We handle every logistical detail.', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800', accent: 'bg-accent-rose/20' },
            { title: 'Entertainment Services', icon: <Music size={32} />, desc: 'DJs, international artists, hosts, bands and live performances to set the perfect vibe.', img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800', accent: 'bg-accent-azure/20' },
            { title: 'Production & Setup', icon: <Zap size={32} />, desc: 'Bespoke decor, lighting, catering coordination and full end-to-end event production.', img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800', accent: 'bg-surface-light' },
          ].map((service, i) => (
            <div key={i} className="glass-card overflow-hidden group fade-up border-linen hover:border-heritage relative">
              <div className="absolute -inset-10 bg-accent-azure/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className={`absolute inset-0 ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              <div className="relative h-72 overflow-hidden z-10">
                <ParallaxImage 
                  src={service.img} 
                  alt={service.title} 
                  speed={0.1}
                  aspectRatio="aspect-auto"
                  containerClassName="h-full w-full"
                  className="group-hover:scale-110 transition-transform duration-[5s] ease-out grayscale-[0.3] group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <div className="absolute top-6 left-6 w-14 h-14 rounded-full bg-heritage text-canvas flex items-center justify-center shadow-md border border-canvas/20 z-20">
                  {service.icon}
                </div>
              </div>
              <div className="p-12 space-y-6 text-center relative z-10">
                <h3 className="text-2xl font-serif font-bold text-text-primary">{service.title}</h3>
                <p className="text-text-secondary font-sans font-medium text-sm leading-relaxed">{service.desc}</p>
                <Link href="/services" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-heritage border-b border-heritage/30 pb-1 hover:text-text-primary hover:border-text-primary transition-all group/link font-bold">
                  Learn More <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Events We Specialize In */}
      <section id="event-types" className="py-32 bg-surface border-y border-linen relative overflow-hidden">
        <div className="event-types-bg absolute inset-0 bg-canvas pointer-events-none" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 text-[20rem] font-serif text-heritage/5 opacity-[0.03] whitespace-nowrap pointer-events-none select-none">
          EXPERIENCE
        </div>
        <div className="container px-6 relative z-10 space-y-24">
          <div className="text-center space-y-6 max-w-3xl mx-auto fade-up">
            <Badge variant="outline" className="border-heritage text-heritage-dark uppercase tracking-widest font-bold">Our Range</Badge>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-text-primary">Events We <span className="text-heritage italic font-light">Plan</span>.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 fade-up">
            {eventTypes.map((item, i) => (
              <div key={i} className="group relative aspect-[4/3] overflow-hidden border border-linen cursor-pointer bg-canvas">
                <div className="absolute -inset-10 bg-accent-rose/5 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <ParallaxImage 
                  src={item.image} 
                  alt={item.title} 
                  speed={0.15}
                  aspectRatio="aspect-[4/3]"
                  className="grayscale transition-all duration-[1s] group-hover:grayscale-0"
                />
                <div 
                  className="absolute inset-0 flex flex-col justify-end p-10 space-y-4 transition-colors duration-700 z-10" 
                  style={{ backgroundColor: 'rgba(252, 251, 247, 0.85)' }}
                >
                  <div className="w-12 h-12 rounded-full bg-heritage text-canvas flex items-center justify-center border border-heritage/30 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-text-primary tracking-wide">{item.title}</h3>
                  <p className="text-[11px] text-heritage-dark font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 uppercase tracking-widest">{item.desc}</p>
                </div>
                {/* Colorful Hover Layer */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none z-20" 
                  style={{ backgroundColor: item.color }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Statistics Section */}
      <section id="stats" className="py-24 bg-canvas border-b border-linen">
        <div className="container px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center fade-up">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-5xl md:text-7xl font-serif font-bold text-heritage-dark">{stat.value}</h3>
                <p className="text-[11px] md:text-xs font-sans font-bold uppercase tracking-[0.4em] text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Gallery Section - Masonry Feel */}
      <section id="archives" className="py-32 container px-6 space-y-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 fade-up">
          <div className="space-y-6 max-w-2xl">
            <Badge variant="solid" dot className="bg-heritage/10 text-heritage-dark uppercase tracking-widest font-bold">Portfolio</Badge>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-text-primary leading-tight">Our Recent <br/><span className="text-heritage italic font-light">Excellence</span>.</h2>
          </div>
          <Link href="/gallery">
            <Button variant="outline" className="btn-outline-prestige px-12 h-16 rounded-none font-bold">View Our Gallery</Button>
          </Link>
        </div>
        
        <div className="fade-up">
          <Gallery items={galleryItems} />
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section id="testimonials" className="py-32 bg-surface relative overflow-hidden border-y border-linen">
        <div className="container px-6 space-y-24 relative z-10">
          <div className="text-center space-y-6 fade-up">
            <Badge variant="solid" className="bg-heritage/10 text-heritage-dark uppercase tracking-widest font-bold">Reviews</Badge>
            <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-text-primary leading-tight">What Our <span className="text-heritage italic font-light">Clients Say</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="glass-card p-12 rounded-none border border-linen space-y-8 fade-up text-center relative group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-canvas border border-linen flex items-center justify-center text-heritage shadow-md">
                  <Star size={24} fill="currentColor" />
                </div>
                <div className="flex justify-center gap-1 text-burnished">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-xl text-text-primary italic leading-relaxed font-sans font-medium">&quot;{t.content}&quot;</p>
                <div className="pt-8 border-t border-linen flex flex-col items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border border-heritage/30">
                    <Image src={t.avatar} alt={t.author} fill className="object-cover" sizes="56px" />
                  </div>
                  <div>
                    <h4 className="text-text-primary font-bold text-sm tracking-widest uppercase">{t.author}</h4>
                    <p className="text-[11px] text-heritage-dark font-bold tracking-[0.3em] uppercase mt-1">{t.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. How We Work Section */}
      <section id="how-it-works" className="py-32 container px-6 space-y-24">
        <div className="text-center space-y-6 max-w-3xl mx-auto fade-up">
          <Badge variant="outline" className="text-heritage-dark border-heritage uppercase tracking-widest font-bold">Workflow</Badge>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-text-primary">How We Plan <br/><span className="text-heritage italic font-light">Your Legacy</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="absolute top-[40px] left-0 w-full h-[1px] bg-linen hidden md:block opacity-30" />
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 space-y-8 text-center fade-up group">
              <div className="mx-auto w-20 h-20 rounded-full bg-canvas border-2 border-heritage flex items-center justify-center text-heritage group-hover:bg-heritage group-hover:text-canvas transition-all duration-700 shadow-sm relative">
                <div className="absolute -top-2 -right-2 text-[11px] font-mono text-heritage-dark bg-canvas px-1 font-bold">0{i+1}</div>
                {step.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-text-primary">{step.title}</h3>
                <p className="text-sm text-text-secondary font-sans font-medium leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Instagram Section */}
      <section id="instagram" className="py-32 bg-surface border-y border-linen relative overflow-hidden">
        <div className="container px-6 space-y-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 fade-up">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-heritage">
                <InstagramIcon size={24} />
                <span className="text-[11px] uppercase tracking-[0.4em] font-bold">@zingblissevents</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-text-primary">Follow Our <span className="text-heritage italic font-light">Journey</span></h2>
            </div>
            <a href="https://www.instagram.com/zingblissevents/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="btn-outline-prestige rounded-none border-burnished text-heritage font-bold">Follow Us</Button>
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 fade-up">
            {instaPhotos.map((photo, i) => (
              <div key={i} className="relative aspect-square overflow-hidden group border border-linen">
                <Image src={photo} alt={`Instagram ${i}`} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw" />
                <div className="absolute inset-0 bg-heritage/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <InstagramIcon size={24} className="text-canvas" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Contact CTA Section */}
      <section id="cta" className="relative py-48 bg-heritage overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.05] invert" />
        
        <div className="container relative z-10 max-w-5xl text-center space-y-12 px-4">
          <Badge variant="solid" dot className="bg-canvas/10 text-canvas border-canvas/20 uppercase tracking-[0.3em] font-bold">Inquire</Badge>
          <h2 className="text-6xl md:text-[9rem] font-serif font-bold tracking-tight text-canvas leading-[0.85] drop-shadow-lg">
            To Love, Laughs, and <br/><span className="text-burnished italic font-light">Happily Ever After.</span>
          </h2>
          <p className="text-2xl text-canvas/80 font-sans font-light leading-relaxed max-w-3xl mx-auto">
            Ready to plan your dream event today? Our team is dedicated to handling every detail for a stress-free experience.
          </p>
          <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
            <Magnetic strength={0.2}>
              <Link href="/contact">
                <Button size="lg" className="h-24 px-20 text-2xl rounded-none bg-canvas text-heritage hover:bg-burnished-light border-0 font-bold shadow-xl" rightIcon={<ArrowRight size={32} />}>
                  Plan Your Event Today
                </Button>
              </Link>
            </Magnetic>
            <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="h-24 px-20 text-2xl rounded-none border-canvas/30 text-canvas hover:bg-canvas/10 flex items-center gap-4 font-bold">
                <MessageCircle size={32} /> WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
