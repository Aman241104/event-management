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
import { cn } from '@/lib/utils';
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
  { id: 1, title: 'Royal Palace Udaipur', category: 'Weddings', image: '/decor-1.jpg', size: 'large' as const },
  { id: 2, title: 'Floral Mandap Design', category: 'Design', image: '/decor-2.jpg', size: 'tall' as const },
  { id: 3, title: 'Grand Mehendi Setup', category: 'Weddings', image: '/decor-3.jpg', size: 'medium' as const },
  { id: 4, title: 'Corporate Luxury Gala', category: 'Production', image: '/decor-4.jpg', size: 'medium' as const },
];

const eventTypes = [
  { title: 'Weddings', icon: <Heart size={24} />, image: '/hero-2.jpg', desc: 'Royal palace & destination celebrations.', color: 'var(--color-burnished)' },
  { title: 'Corporate Events', icon: <Sparkles size={24} />, image: '/hero-3.jpg', desc: 'Bespoke summits & high-profile galas.', color: 'var(--color-heritage)' },
  { title: 'Birthday Celebrations', icon: <PartyPopper size={24} />, image: '/hero-4.jpg', desc: 'Milestone events curated with flair.', color: '#FDFCF0' },
  { title: 'Baby Showers', icon: <Star size={24} />, image: '/hero-5.jpg', desc: 'Celebrating new life with elegance.', color: 'var(--color-burnished-light)' },
  { title: 'Festivals', icon: <Tent size={24} />, image: '/hero-6.jpg', desc: 'High-energy cultural & musical fairs.', color: 'var(--color-heritage-soft)' },
  { title: 'Private Parties', icon: <Users size={24} />, image: '/hero-7.jpg', desc: 'Intimate house parties & VIP bashes.', color: '#F9F7F2' },
];

const instaPhotos = [
  '/decor-5.jpg',
  '/decor-6.jpg',
  '/decor-7.jpg',
  '/decor-8.jpg',
  '/decor-9.jpg',
  '/hero-8.jpg',
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

const stats = [
  { value: '100+', label: 'Events Planned' },
  { value: '50+', label: 'Happy Clients' },
  { value: '20+', label: 'Premium Vendors' },
  { value: '5+', label: 'Years Experience' },
];

const heroImages = [
  '/hero-1.jpg',
  '/hero-2.jpg',
  '/hero-3.jpg',
  '/hero-4.jpg',
  '/hero-5.jpg',
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const [currentHeroIndex, setCurrentHeroIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

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
        <BackgroundFlourish type="floral" className="top-[10%] left-[5%] w-64 h-64 text-heritage/5" parallaxSpeed={0.05} />
        <BackgroundFlourish type="architectural" className="top-[40%] right-[2%] w-96 h-96 text-burnished/5" parallaxSpeed={0.08} />
        <BackgroundFlourish type="geometric" className="top-[70%] left-[-5%] w-80 h-80 rotate-12 text-heritage/5" parallaxSpeed={0.03} />
        
        {/* 1. Hero Section */}
        <section id="hero" className="relative h-[110vh] flex items-center overflow-hidden" data-bg="var(--color-canvas)">
          {/* Enhanced readability overlay - Subtle dark vignette */}
          <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 z-10 pointer-events-none" />
          
          <div className="absolute inset-0 z-0">
            {heroImages.map((img, i) => (
              <div 
                key={img}
                className={cn(
                  "absolute inset-0 transition-opacity duration-[3000ms] ease-in-out",
                  i === currentHeroIndex ? "opacity-100" : "opacity-0"
                )}
              >
                <Image
                  src={img}
                  alt={`Luxury Event ${i + 1}`}
                  fill
                  className="object-cover brightness-[0.85] scale-110 animate-[ken-burns_40s_ease-in-out_infinite_alternate]"
                  priority={i === 0}
                  sizes="100vw"
                />
              </div>
            ))}
          </div>

          <div className="container relative z-20 text-center flex flex-col items-center pt-20">
            <div className="hero-badge flex flex-col items-center gap-6 mb-12">
              <span className="text-[10px] font-mono text-burnished uppercase tracking-[0.6em] drop-shadow-lg">Established MMXXVI</span>
              <div className="h-12 w-[1px] bg-burnished/50 shadow-lg" />
            </div>
            
            <h1 className="hero-title text-6xl md:text-[10rem] font-serif font-medium tracking-tight text-white leading-[0.85] drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
              <span className="block header-fade">Orchestrating</span>
              <span className="block header-fade text-burnished italic font-light mt-4 mb-4 drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]">
                Grandeur.
              </span>
              <span className="block header-fade">Pure <span className="text-burnished-light italic font-light">&</span> Refined.</span>
            </h1>

            <p className="hero-desc text-lg md:text-xl text-white max-w-2xl leading-relaxed font-sans font-medium mt-12 mb-16 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
              Bespoke celebrations planned with precision, creativity, and professional grace for the most discerning clients.
            </p>

            <div className="hero-btns flex flex-col sm:flex-row items-center gap-12">
              <Magnetic strength={0.2}>
                <Link href="/contact">
                  <Button size="lg" className="h-20 px-20 text-xs btn-prestige bg-white text-text-primary hover:bg-burnished hover:text-white border-0 shadow-2xl transition-transform hover:scale-105" rightIcon={<ArrowRight size={20} />}>
                    Begin Your Journey
                  </Button>
                </Link>
              </Magnetic>
              <Link href="/gallery" className="text-[10px] uppercase tracking-[0.5em] text-white border-b border-white/40 pb-2 hover:border-burnished transition-all font-bold drop-shadow-lg">
                View Archive
              </Link>
            </div>
          </div>
        </section>

        {/* 2. About Preview - Centered Editorial */}
        <section id="about" className="py-72 bg-canvas relative overflow-hidden" data-bg="var(--color-canvas)">
          <div className="container flex flex-col items-center relative z-10">
            <div className="max-w-5xl text-center space-y-16 mb-32 fade-up">
              <div className="space-y-10">
                <div className="flex flex-col items-center gap-6">
                  <span className="text-[10px] font-mono text-heritage uppercase tracking-[0.6em]">01 / PHILOSOPHY</span>
                  <div className="h-12 w-[1px] bg-heritage/20" />
                </div>
                <TextReveal 
                  text="Presence over Staging." 
                  className="text-6xl md:text-[10rem] font-serif font-medium text-text-primary tracking-tighter leading-[0.9]"
                />
              </div>
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-sans font-light max-w-3xl mx-auto">
                We believe in the power of understated luxury. Our approach is human-centric, focusing on authentic emotions and architectural precision to create moments that are felt long after they pass.
              </p>
              <div className="pt-8 flex justify-center">
                <Link href="/about" className="group inline-flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full border border-linen flex items-center justify-center group-hover:bg-heritage group-hover:text-canvas transition-all duration-700">
                    <MoveRight className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform duration-700" />
                  </div>
                  <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-text-primary">The Full Narrative</span>
                </Link>
              </div>
            </div>
            
            <div className="w-full max-w-6xl relative fade-up group">
              <div className="absolute -top-20 -right-20 text-[15rem] font-serif text-heritage/5 pointer-events-none select-none italic">Z</div>
              <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden border border-linen shadow-sm bg-surface">
                <ParallaxImage 
                  src="/hero-9.jpg" 
                  alt="Luxury Event Decor" 
                  speed={0.2}
                  aspectRatio="aspect-auto"
                  containerClassName="h-full w-full"
                  className="transition-transform duration-[15s] hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-10 right-10 w-72 p-10 bg-canvas border border-linen shadow-xl hidden lg:block text-center">
                <p className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-burnished mb-4">Meticulous Detail</p>
                <p className="text-xs text-text-secondary leading-relaxed font-light italic">"Every petal, every light, every moment is a piece of your story."</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Services Section - Editorial Grid */}
        <section id="services" className="py-72 bg-surface relative overflow-hidden" data-bg="var(--color-surface)">
          <div className="container space-y-40">
            <div className="flex flex-col items-center text-center space-y-12 fade-up relative z-10">
              <div className="flex flex-col items-center gap-6">
                <span className="text-[10px] font-mono text-heritage uppercase tracking-[0.6em]">02 / EXPERTISE</span>
                <div className="h-12 w-[1px] bg-heritage/20" />
              </div>
              <TextReveal 
                text="Composed Clarity." 
                className="text-6xl md:text-[10rem] font-serif font-medium text-text-primary tracking-tighter leading-[0.8]"
              />
              <p className="text-lg text-text-secondary font-sans font-light max-w-xl">
                Our services are designed to bring a sense of calm and sophistication to the most complex celebrations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-linen border border-linen relative z-10">
              {[
                { title: 'Fine Art Planning', desc: 'Comprehensive coordination that honors your vision with architectural precision.', img: '/decor-1.jpg' },
                { title: 'Atmospheric Design', desc: 'Crafting immersive environments through light, texture, and floral artistry.', img: '/decor-2.jpg' },
                { title: 'Global Production', desc: 'Seamless execution across borders, managing every technical and logistical nuance.', img: '/decor-3.jpg' },
              ].map((service, i) => (
                <div key={i} className="bg-surface p-16 space-y-12 group hover:bg-canvas transition-colors duration-700 flex flex-col items-center text-center">
                  <div className="aspect-[4/5] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-[2s] border border-linen/30">
                    <Image src={service.img} alt={service.title} width={600} height={800} className="object-cover h-full w-full transition-transform duration-[5s] group-hover:scale-105" />
                  </div>
                  <div className="space-y-6 flex flex-col items-center">
                    <h3 className="text-3xl font-serif font-medium text-text-primary italic">{service.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed font-light max-w-[80%]">{service.desc}</p>
                    <Link href="/services" className="inline-block text-[9px] uppercase tracking-[0.4em] font-bold text-heritage border-b border-heritage/20 pb-1 hover:border-burnished transition-all">
                      Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Specialization - Centered Festive */}
        <section id="specialization" className="py-72 bg-canvas relative overflow-hidden" data-bg="var(--color-canvas)">
          <div className="container space-y-40 relative z-10">
            <div className="flex flex-col items-center text-center space-y-12 fade-up">
              <div className="flex flex-col items-center gap-6">
                <span className="text-[10px] font-mono text-burnished uppercase tracking-[0.6em]">03 / COLLECTION</span>
                <div className="h-12 w-[1px] bg-burnished/20" />
              </div>
              <TextReveal 
                text="Life's Defining Chapters." 
                className="text-6xl md:text-[10rem] font-serif font-medium text-text-primary tracking-tighter leading-[0.85]"
              />
              <p className="text-lg text-text-secondary font-sans font-light max-w-xl">
                From royal weddings to intimate galas, we bring the same level of refined energy and composed clarity to every milestone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {eventTypes.map((type, i) => (
                <div key={i} className="group relative aspect-square overflow-hidden cursor-pointer bg-surface border border-linen">
                  <ParallaxImage src={type.image} alt={type.title} speed={0.1} containerClassName="w-full h-full" aspectRatio="aspect-auto h-full" className="transition-all duration-[2s] group-hover:scale-110 group-hover:rotate-1" />
                  <div className="absolute inset-0 bg-text-primary/10 group-hover:bg-burnished/20 transition-all duration-700" />
                  <div className="absolute inset-x-8 bottom-8 p-10 bg-canvas/95 backdrop-blur-md border border-linen translate-y-4 group-hover:translate-y-0 transition-transform duration-700 flex flex-col items-center text-center">
                    <div className="flex justify-between items-center w-full mb-6 px-2">
                      <div className="w-10 h-px bg-burnished/30" />
                      <span className="text-heritage">{type.icon}</span>
                      <div className="w-10 h-px bg-burnished/30" />
                    </div>
                    <h4 className="text-3xl font-serif font-medium text-text-primary italic mb-4">{type.title}</h4>
                    <p className="text-xs text-text-secondary font-light leading-relaxed max-w-[80%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">{type.desc}</p>
                    <div className="mt-6 text-[9px] font-mono text-text-muted tracking-widest">ARCHIVE / 0{i+1}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Statistics - Clean & Bold */}
        <section id="stats" className="py-40 bg-heritage relative overflow-hidden" data-bg="var(--color-heritage)">
          <div className="absolute inset-0 dot-pattern opacity-[0.03] invert" />
          <div className="container relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-20 text-center fade-up">
              {stats.map((stat, i) => (
                <div key={stat.label} className="space-y-4 group">
                  <div className="text-5xl md:text-8xl font-serif font-medium text-canvas tracking-tighter transition-all duration-700 group-hover:text-burnished">{stat.value}</div>
                  <div className="text-[9px] uppercase tracking-[0.5em] text-canvas/50 font-bold group-hover:text-canvas transition-colors">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Gallery - Editorial Masonry */}
        <section id="gallery" className="py-72 bg-canvas" data-bg="var(--color-canvas)">
          <div className="container space-y-32">
            <div className="text-center space-y-10 fade-up">
              <span className="text-[10px] font-mono text-burnished uppercase tracking-[0.6em]">04 / ARCHIVE</span>
              <TextReveal text="Recent Masterpieces" className="text-6xl md:text-[10rem] font-serif font-medium tracking-tighter" />
            </div>
            <div className="fade-up">
              <Gallery items={galleryItems} />
            </div>
            <div className="flex justify-center pt-20 fade-up">
              <Link href="/gallery">
                <Button variant="outline" className="btn-outline-prestige h-20 px-20 text-[10px] border-linen hover:border-burnished">Explore Full Archive</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 7. Testimonials - Centered Refined Editorial */}
        <section id="testimonials" className="py-72 bg-surface border-y border-linen" data-bg="var(--color-surface)">
          <div className="container space-y-40">
            <div className="flex flex-col items-center text-center space-y-12 fade-up">
              <div className="flex flex-col items-center gap-6">
                <span className="text-[10px] font-mono text-heritage uppercase tracking-[0.6em]">05 / VOICES</span>
                <div className="h-12 w-[1px] bg-heritage/20" />
              </div>
              <TextReveal 
                text="Client Stories." 
                className="text-6xl md:text-[9rem] font-serif font-medium text-text-primary tracking-tighter leading-[0.9]"
              />
              <p className="text-2xl font-serif italic font-light text-text-secondary max-w-3xl leading-relaxed">
                "Our goal is to ensure that your celebration is not just an event, but a cherished memory for every guest."
              </p>
              <div className="h-[1px] w-24 bg-burnished" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-linen border border-linen">
              {testimonials.map((t) => (
                <div key={t.id} className="bg-surface p-20 space-y-12 hover:bg-canvas transition-colors duration-700">
                  <div className="flex gap-1 text-burnished">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-xl text-text-primary font-serif italic leading-relaxed">"{t.content}"</p>
                  <div className="flex items-center gap-6 pt-8 border-t border-linen/50">
                    <div className="w-14 h-14 rounded-full overflow-hidden grayscale">
                      <Image src={t.avatar} alt={t.author} width={56} height={56} className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-primary">{t.author}</h4>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-text-muted mt-1">{t.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Process - Human-Centric */}
        <section id="process" className="py-72 bg-canvas relative overflow-hidden" data-bg="var(--color-canvas)">
          <div className="container space-y-40 relative z-10">
            <div className="flex flex-col items-center text-center space-y-12 fade-up">
              <div className="flex flex-col items-center gap-6">
                <span className="text-[10px] font-mono text-burnished uppercase tracking-[0.6em]">06 / METHOD</span>
                <div className="h-12 w-[1px] bg-burnished/20" />
              </div>
              <TextReveal text="The Architecture of Planning." className="text-6xl md:text-[8rem] font-serif font-medium tracking-tighter" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
              {steps.map((step, i) => (
                <div key={i} className="space-y-10 group fade-up flex flex-col items-center text-center">
                  <div className="text-[10px] font-mono text-text-muted mb-8 tracking-widest">STEP / 0{i+1}</div>
                  <div className="w-16 h-16 rounded-full bg-surface border border-linen flex items-center justify-center text-heritage group-hover:bg-heritage group-hover:text-canvas transition-all duration-700">
                    {step.icon}
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-serif font-medium text-text-primary italic">{step.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed font-light max-w-[240px]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Final CTA - Pure Luxury */}
        <section id="cta" className="relative py-80 bg-canvas overflow-hidden" data-bg="var(--color-canvas)">
          <div className="absolute inset-0 z-0">
             <Image 
                src="/hero10.jpg"
                alt="Background"
                fill
                className="object-cover opacity-[0.03] grayscale"
             />
          </div>
          
          <div className="container relative z-10 text-center space-y-24">
            <div className="space-y-12">
              <span className="text-[10px] font-mono text-heritage uppercase tracking-[0.8em]">COMMENCE</span>
              <h2 className="text-7xl md:text-[12rem] font-serif font-medium tracking-tighter text-text-primary leading-[0.8]">
                Begin Your <br/><span className="text-burnished italic font-light">Narrative.</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-20">
              <p className="text-xl md:text-2xl text-text-secondary font-serif italic font-light leading-relaxed">
                Connect with our concierge to discuss how we can bring composed clarity to your next significant milestone.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-16">
                <Magnetic strength={0.2}>
                  <Link href="/contact">
                    <Button size="lg" className="h-24 px-24 text-[10px] btn-prestige shadow-2xl" rightIcon={<ArrowRight size={20} />}>
                      Request Consultation
                    </Button>
                  </Link>
                </Magnetic>
                <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-burnished transition-colors flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em]">
                  <MessageCircle size={20} className="text-heritage" /> WhatsApp Concierge
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
