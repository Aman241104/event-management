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
  Camera, 
  MoveRight,
  ShieldCheck,
  Zap,
  Users,
  MessageCircle,
  Tent,
  Instagram as InstagramIcon,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { Gallery } from '@/components/molecules/Gallery';
import { Magnetic } from '@/components/atoms/Magnetic';
import { TextReveal } from '@/components/atoms/TextReveal';
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
  { title: 'Weddings', icon: <Heart size={24} />, image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600', desc: 'Royal palace & destination celebrations.' },
  { title: 'Corporate Events', icon: <Sparkles size={24} />, image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=600', desc: 'Bespoke summits & high-profile galas.' },
  { title: 'Birthday Celebrations', icon: <PartyPopper size={24} />, image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=600', desc: 'Milestone events curated with flair.' },
  { title: 'Baby Showers', icon: <Star size={24} />, image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600', desc: 'Celebrating new life with elegance.' },
  { title: 'Festivals', icon: <Tent size={24} />, image: 'https://images.unsplash.com/photo-1540039155732-6781b0e1cca1?auto=format&fit=crop&q=80&w=600', desc: 'High-energy cultural & musical fairs.' },
  { title: 'Private Parties', icon: <Users size={24} />, image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=600', desc: 'Intimate house parties & VIP bashes.' },
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
    tl.from('.hero-badge', { y: 20, opacity: 0, duration: 1, ease: 'power3.out' })
      .from('.hero-title span', { y: 40, opacity: 0, duration: 1.2, stagger: 0.1, ease: 'power3.out' }, '-=0.8')
      .from('.hero-desc', { y: 30, opacity: 0, duration: 1, ease: 'power3.out' }, '-=1')
      .from('.hero-btns', { y: 30, opacity: 0, duration: 1, ease: 'power3.out' }, '-=1');

    gsap.utils.toArray<HTMLElement>('.fade-up').forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out'
      });
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-bg-main flex flex-col overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-main/60 via-bg-main/40 to-bg-main z-10" />
        <Image
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Wedding Setup"
          fill
          className="object-cover brightness-75 scale-105"
          priority
        />

        <div className="container relative z-20 text-center space-y-10 max-w-5xl px-4">
          <div className="hero-badge">
            <Badge variant="solid" dot className="bg-bg-main/40 border-secondary/50 text-secondary uppercase tracking-[0.3em] py-2 px-6">Bespoke Celebration Architects</Badge>
          </div>
          <h1 className="hero-title text-6xl md:text-[8rem] font-serif font-bold tracking-tight text-text-primary leading-[0.85]">
            <span className="block">Crafting Magical</span>
            <span className="block text-gold italic font-light mt-2">Moments.</span>
          </h1>
          <p className="hero-desc text-lg md:text-2xl text-text-primary/90 max-w-3xl mx-auto leading-relaxed font-sans font-light">
            Luxury weddings, corporate events, and private celebrations planned with creativity and professional precision.
          </p>
          <div className="hero-btns pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Magnetic strength={0.2}>
              <Link href="/contact">
                <Button size="lg" className="h-20 px-16 text-xl btn-royal rounded-none font-bold" rightIcon={<ArrowRight size={24} />}>
                  Plan Your Event
                </Button>
              </Link>
            </Magnetic>
            <Link href="/gallery">
              <Button variant="outline" size="lg" className="h-20 px-16 text-xl btn-outline-royal rounded-none">
                View Our Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. About Preview */}
      <section id="about" className="py-32 bg-bg-surface relative overflow-hidden border-y border-border-subtle">
        <div className="container px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="fade-up space-y-10">
            <div className="space-y-6">
              <Badge variant="outline" className="border-secondary text-secondary uppercase tracking-widest">Our Story</Badge>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tight leading-tight">Turning Vision <br/><span className="text-secondary italic font-light">Into Reality</span>.</h2>
            </div>
            <p className="text-xl text-text-secondary leading-relaxed font-sans font-light">
              Zing Bliss Events is dedicated to turning life&apos;s special moments into unforgettable experiences. We specialize in planning, designing, and executing events with creativity, precision, and professionalism.
            </p>
            <div className="pt-4">
              <Link href="/about" className="inline-flex items-center gap-4 text-secondary hover:text-white transition-colors uppercase tracking-[0.2em] text-xs font-bold group">
                Discover Our Agency <MoveRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="relative fade-up lg:aspect-square aspect-video">
            <div className="absolute -inset-4 border border-secondary/20 rounded-[40px] pointer-events-none" />
            <div className="relative w-full h-full overflow-hidden rounded-[32px] arch-mask shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury Event Decor" 
                fill 
                className="object-cover hover-zoom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section - Premium Cards */}
      <section id="services" className="py-32 container px-6 space-y-24">
        <div className="text-center space-y-6 max-w-3xl mx-auto fade-up">
          <Badge variant="solid" dot className="bg-secondary/10 text-secondary uppercase tracking-widest">Expertise</Badge>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">Our Premium <span className="text-secondary italic font-light">Services</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: 'Event Management', icon: <Star size={32} />, desc: 'Full planning and coordination from concept to execution. We handle every logistical detail.', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800' },
            { title: 'Entertainment Services', icon: <Music size={32} />, desc: 'DJs, international artists, hosts, bands and live performances to set the perfect vibe.', img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800' },
            { title: 'Production & Setup', icon: <Zap size={32} />, desc: 'Bespoke decor, lighting, catering coordination and full end-to-end event production.', img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800' },
          ].map((service, i) => (
            <div key={i} className="glass-card overflow-hidden group fade-up border-border-gold hover:border-secondary">
              <div className="relative h-72 overflow-hidden">
                <Image src={service.img} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform duration-[5s] ease-out grayscale-[0.3] group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-bg-main/40 group-hover:bg-bg-main/10 transition-colors" />
                <div className="absolute top-6 left-6 w-14 h-14 rounded-full bg-secondary text-bg-main flex items-center justify-center shadow-2xl">
                  {service.icon}
                </div>
              </div>
              <div className="p-12 space-y-6 text-center">
                <h3 className="text-2xl font-serif font-bold text-white">{service.title}</h3>
                <p className="text-text-secondary font-sans font-light text-sm leading-relaxed">{service.desc}</p>
                <Link href="/services" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-secondary border-b border-secondary/30 pb-1 hover:text-white hover:border-white transition-all group/link">
                  Learn More <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Events We Specialize In */}
      <section id="event-types" className="py-32 bg-bg-surface border-y border-border-subtle relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 text-[20rem] font-serif text-secondary/5 opacity-[0.03] whitespace-nowrap pointer-events-none select-none">
          EXPERIENCE
        </div>
        <div className="container px-6 relative z-10 space-y-24">
          <div className="text-center space-y-6 max-w-3xl mx-auto fade-up">
            <Badge variant="outline" className="border-secondary text-secondary uppercase tracking-widest">Our Range</Badge>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white">Events We <span className="text-secondary italic font-light">Plan</span>.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 fade-up">
            {eventTypes.map((item, i) => (
              <div key={i} className="group relative aspect-[4/3] overflow-hidden border border-border-gold cursor-pointer">
                <Image src={item.image} alt={item.title} fill className="object-cover grayscale transition-all duration-[10s] group-hover:grayscale-0 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-main/95 via-bg-main/20 to-transparent flex flex-col justify-end p-10 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 text-secondary flex items-center justify-center border border-secondary/30 backdrop-blur-md group-hover:bg-secondary group-hover:text-bg-main transition-colors duration-500">
                    {item.icon}
                  </div>
                  <h4 className="text-3xl font-serif font-bold text-white tracking-wide">{item.title}</h4>
                  <p className="text-xs text-text-secondary opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 uppercase tracking-widest">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Statistics Section */}
      <section id="stats" className="py-24 bg-bg-main border-b border-border-subtle">
        <div className="container px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center fade-up">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-4">
                <h4 className="text-5xl md:text-7xl font-serif font-bold text-gold">{stat.value}</h4>
                <p className="text-xs md:text-sm font-sans uppercase tracking-[0.3em] text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Gallery Section - Masonry Feel */}
      <section id="archives" className="py-32 container px-6 space-y-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 fade-up">
          <div className="space-y-6 max-w-2xl">
            <Badge variant="solid" dot className="bg-secondary/10 text-secondary uppercase tracking-widest">Portfolio</Badge>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">Our Recent <br/><span className="text-secondary italic font-light">Excellence</span>.</h2>
          </div>
          <Link href="/gallery">
            <Button variant="outline" className="btn-outline-royal px-12 h-16 rounded-none font-bold">View Our Gallery</Button>
          </Link>
        </div>
        
        <div className="fade-up">
          <Gallery items={galleryItems} />
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section id="testimonials" className="py-32 bg-bg-surface relative overflow-hidden border-y border-border-subtle">
        <div className="container px-6 space-y-24 relative z-10">
          <div className="text-center space-y-6 fade-up">
            <Badge variant="solid" className="bg-secondary/10 text-secondary uppercase tracking-widest">Reviews</Badge>
            <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-white leading-tight">What Our <span className="text-secondary italic font-light">Clients Say</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="glass-card p-12 rounded-none border border-border-gold space-y-8 fade-up text-center relative group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-bg-main border border-border-gold flex items-center justify-center text-secondary shadow-2xl">
                  <Star size={24} fill="currentColor" />
                </div>
                <div className="flex justify-center gap-1 text-secondary">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-xl text-text-primary italic leading-relaxed font-sans font-light">"{t.content}"</p>
                <div className="pt-8 border-t border-border-subtle flex flex-col items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border border-secondary/30">
                    <Image src={t.avatar} alt={t.author} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-text-primary font-bold text-sm tracking-widest uppercase">{t.author}</h4>
                    <p className="text-[10px] text-secondary font-medium tracking-[0.3em] uppercase mt-1">{t.event}</p>
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
          <Badge variant="outline" className="text-secondary border-secondary uppercase tracking-widest">Workflow</Badge>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white">How We Plan <br/><span className="text-secondary italic font-light">Your Legacy</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="absolute top-[40px] left-0 w-full h-[1px] bg-border-gold hidden md:block opacity-30" />
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 space-y-8 text-center fade-up group">
              <div className="mx-auto w-20 h-20 rounded-full bg-bg-main border-2 border-secondary flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-bg-main transition-all duration-700 shadow-2xl relative">
                <div className="absolute -top-2 -right-2 text-[10px] font-mono text-secondary bg-bg-main px-1">0{i+1}</div>
                {step.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-white">{step.title}</h3>
                <p className="text-sm text-text-secondary font-sans font-light leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Instagram Section */}
      <section id="instagram" className="py-32 bg-bg-surface border-y border-border-subtle relative overflow-hidden">
        <div className="container px-6 space-y-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 fade-up">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-secondary">
                <InstagramIcon size={24} />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold">@zingblissevents</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">Follow Our <span className="text-secondary italic font-light">Journey</span></h2>
            </div>
            <a href="https://www.instagram.com/zingblissevents/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="btn-outline-royal rounded-none border-secondary text-secondary">Follow Us</Button>
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 fade-up">
            {instaPhotos.map((photo, i) => (
              <div key={i} className="relative aspect-square overflow-hidden group border border-border-subtle">
                <Image src={photo} alt={`Instagram ${i}`} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <InstagramIcon size={24} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Contact CTA Section */}
      <section id="cta" className="relative py-48 bg-bg-main overflow-hidden grainy-gradient">
        <div className="absolute inset-0 bg-secondary/5" />
        
        <div className="container relative z-10 max-w-5xl text-center space-y-12 px-4">
          <Badge variant="solid" dot className="bg-secondary/10 text-secondary uppercase tracking-[0.3em] font-bold">Inquire</Badge>
          <h2 className="text-6xl md:text-[9rem] font-serif font-bold tracking-tight text-white leading-[0.85] drop-shadow-2xl">
            To Love, Laughs, and <br/><span className="text-gold italic font-light">Happily Ever After.</span>
          </h2>
          <p className="text-2xl text-text-secondary font-sans font-light leading-relaxed max-w-3xl mx-auto">
            Ready to plan your dream event today? Our team is dedicated to handling every detail for a stress-free experience.
          </p>
          <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
            <Magnetic strength={0.2}>
              <Link href="/contact">
                <Button size="lg" className="h-24 px-20 text-2xl rounded-none btn-royal font-bold shadow-2xl" rightIcon={<ArrowRight size={32} />}>
                  Plan Your Event Today
                </Button>
              </Link>
            </Magnetic>
            <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="h-24 px-20 text-2xl rounded-none btn-outline-royal border-secondary flex items-center gap-4">
                <MessageCircle size={32} /> WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
