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
  { id: 1, title: 'Royal Palace Architecture', category: 'Weddings', image: '/decor-1.jpg', size: 'large' as const },
  { id: 2, title: 'Heritage Fusion Gala', category: 'Design', image: '/decor-2.jpg', size: 'tall' as const },
  { id: 3, title: 'Celestial Sangeet', category: 'Weddings', image: '/decor-3.jpg', size: 'medium' as const },
  { id: 4, title: 'Tropical Royal Decor', category: 'Production', image: '/decor-4.jpg', size: 'medium' as const },
];

const eventTypes = [
  { title: 'Weddings', icon: <Heart size={24} />, image: '/hero-2.jpg', desc: 'Bespoke destination celebrations where tradition meets modern grace.', color: 'var(--color-burnished)' },
  { title: 'Corporate Events', icon: <Sparkles size={24} />, image: '/hero-3.jpg', desc: 'High-profile summits and galas planned with analytical precision.', color: 'var(--color-heritage)' },
  { title: 'Birthday Celebrations', icon: <PartyPopper size={24} />, image: '/hero-4.jpg', desc: 'Milestone events curated with infectious energy.', color: '#FDFCF0' },
  { title: 'Baby Showers', icon: <Star size={24} />, image: '/hero-5.jpg', desc: 'Pure and elegant beginnings for your family\'s next chapter.', color: 'var(--color-burnished-light)' },
  { title: 'Festivals', icon: <Tent size={24} />, image: '/hero-6.jpg', desc: 'Large-scale cultural experiences that pulse with life.', color: 'var(--color-heritage-soft)' },
  { title: 'Private Parties', icon: <Users size={24} />, image: '/hero-7.jpg', desc: 'Intimate soirées and VIP bashes for your inner circle.', color: '#F9F7F2' },
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
  { id: 1, content: "Zing Bliss turned our wildest dreams into a breathtaking reality. Their energy is contagious, and their precision is unmatched.", author: "Sonia & Aryan", role: "Royal Udaipur Wedding", event: "Private Celebration", rating: 5, avatar: "/logo.jpeg" },
  { id: 2, content: "The level of refined detail and the profound sense of calm they bring to complex productions is truly remarkable.", author: "Rajesh Khanna", role: "Global Tech Summit", event: "Annual Gala", rating: 5, avatar: "/logo.jpeg" },
  { id: 3, content: "Passionate, professional, and pure magic. They are the only team I trust with our family's milestones.", author: "Anjali Mehta", role: "Milestone Birthday", event: "Private Soirée", rating: 5, avatar: "/logo.jpeg" },
];

const steps = [
  { title: 'Spark The Vision', desc: 'We dive deep into your narrative to find the unique spark of your celebration.', icon: <Sparkles size={20} /> },
  { title: 'Architectural Blueprint', desc: 'Meticulous planning where every logistical nuance is refined to perfection.', icon: <Zap size={20} /> },
  { title: 'Artisanal Curation', desc: 'Selecting the world\'s finest vendors to bring the aesthetic to life.', icon: <Users size={20} /> },
  { title: 'Pure Orchestration', desc: 'Flawless execution on the day, so you can fully live the moment.', icon: <Star size={20} /> },
];

const stats = [
  { value: '500+', label: 'Orchestrated Events' },
  { value: '100%', label: 'Joy & Satisfaction' },
  { value: '25+', label: 'Global Destinations' },
  { value: '15+', label: 'Years of Magic' },
];

const heroImages = [
  '/hero-1.jpg',
  '/hero-2.jpg',
  '/hero-3.jpg',
  '/hero-4.jpg',
  '/hero-5.jpg',
];

const FloatingMetric = ({ label, value, className }: { label: string, value: string, className?: string }) => (
  <div className={cn("absolute hidden lg:flex flex-col gap-1 items-center text-center opacity-40 hover:opacity-100 transition-opacity duration-1000 group z-10", className)}>
    <span className="text-[8px] font-mono uppercase tracking-[0.4em] text-heritage/60 group-hover:text-heritage transition-colors small-caps">{label}</span>
    <div className="h-px w-6 bg-heritage/20 group-hover:w-10 transition-all" />
    <span className="text-xl font-serif text-text-primary italic group-hover:text-heritage transition-colors">{value}</span>
  </div>
);

const SectionDivider = ({ className }: { className?: string }) => (
  <div className={cn("flex flex-col items-center gap-4 py-6 relative z-10", className)}>
    <div className="h-16 w-[1px] bg-heritage/10" />
    <div className="flex items-center gap-3">
      <Sparkles size={6} className="text-heritage/20" />
      <Star size={8} className="text-heritage/30" />
      <Sparkles size={6} className="text-heritage/20" />
    </div>
    <div className="h-16 w-[1px] bg-heritage/10" />
  </div>
);

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
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    });

    // Side label animations
    gsap.from('.side-label', { x: -50, opacity: 0, duration: 1.5, ease: 'expo.out', delay: 2 });
    gsap.from('.side-label-right', { x: 50, opacity: 0, duration: 1.5, ease: 'expo.out', delay: 2 });

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
    <main ref={mainRef} className="min-h-screen bg-canvas flex flex-col overflow-x-hidden relative transition-colors duration-1000 pb-24">
      <div ref={containerRef} className="relative w-full">
        {/* Fixed Side Labels */}
        <div className="side-label text-heritage/20">EST. MMXXVI — ORCHESTRATING GRANDEUR</div>
        <div className="side-label-right text-heritage/20">MUMBAI — PRIVATE EVENTS ARCHIVE</div>

        <FloatingDecor />
        <SVGSpine height="6000px" viewBox="0 0 20 6000" pathD="M 10 0 L 10 6000" className="opacity-[0.07]" />
        
        <BackgroundFlourish type="floral" className="top-[5%] left-[5%] w-64 h-64 text-heritage/5" parallaxSpeed={0.05} />
        <BackgroundFlourish type="architectural" className="top-[15%] right-[2%] w-96 h-96 text-heritage/5" parallaxSpeed={0.08} />
        <BackgroundFlourish type="geometric" className="top-[35%] left-[-5%] w-80 h-80 rotate-12 text-heritage/5" parallaxSpeed={0.03} />
        <BackgroundFlourish type="floral" className="top-[55%] right-[10%] w-72 h-72 text-heritage/5" parallaxSpeed={0.06} />
        <BackgroundFlourish type="architectural" className="top-[75%] left-[2%] w-96 h-96 text-heritage/5" parallaxSpeed={0.04} />

        {/* Large Decorative Text - Layered in background */}
        <div className="absolute top-[100vh] left-[5%] text-[15vw] font-serif text-heritage/[0.03] pointer-events-none select-none italic -rotate-12 z-0">Refined</div>
        <div className="absolute top-[250vh] right-[2%] text-[18vw] font-serif text-heritage/[0.03] pointer-events-none select-none italic rotate-12 z-0">Legacy</div>
        <div className="absolute top-[400vh] left-0 text-[15vw] font-serif text-heritage/[0.03] pointer-events-none select-none italic -rotate-6 z-0">Bespoke</div>
        <div className="absolute top-[550vh] right-[5%] text-[20vw] font-serif text-heritage/[0.03] pointer-events-none select-none italic rotate-6 z-0">Grandeur</div>
        
        {/* 1. Hero Section */}
        <section id="hero" className="relative h-[90vh] flex items-center overflow-hidden" data-bg="var(--color-canvas)">
          {/* Enhanced readability overlay - Subtle dark vignette */}
          <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10 pointer-events-none" />
          
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

          <div className="container relative z-20 text-center flex flex-col items-center">
            <div className="hero-badge flex flex-col items-center gap-4 mb-8">
              <span className="text-[9px] font-mono text-white/80 uppercase tracking-[0.8em] drop-shadow-lg">Established MMXXVI</span>
              <div className="h-8 w-[1px] bg-white/40 shadow-lg" />
            </div>
            
            <h1 className="hero-title text-5xl md:text-[7rem] lg:text-[8.5rem] font-serif font-medium tracking-tight text-white leading-[0.9] drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
              <span className="block header-fade">Orchestrating</span>
              <span className="block header-fade text-burnished italic font-light my-2 drop-shadow-[0_0_20px_rgba(197,160,89,0.3)] relative overflow-hidden">
                Grandeur.
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_4s_infinite] pointer-events-none" />
              </span>
              <span className="block header-fade text-4xl md:text-6xl font-sans tracking-[0.2em] font-light mt-4">Pure <span className="text-burnished-light italic font-serif">&</span> Refined.</span>
            </h1>

            <p className="hero-desc text-base md:text-lg text-white max-w-xl leading-relaxed font-sans font-light mt-8 mb-12 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] opacity-90">
              Bespoke celebrations planned with precision, creativity, and professional grace for the most discerning clients.
            </p>

            <div className="hero-btns flex flex-col sm:flex-row items-center gap-8">
              <Magnetic strength={0.2}>
                <Link href="/contact">
                  <Button size="lg" className="h-16 px-16 text-[9px] btn-prestige bg-white text-text-primary hover:bg-heritage hover:text-white border-0 shadow-2xl transition-transform hover:scale-105" rightIcon={<ArrowRight size={16} />}>
                    Begin Your Journey
                  </Button>
                </Link>
              </Magnetic>
              <Link href="/gallery" className="text-[9px] uppercase tracking-[0.6em] text-white border-b border-white/20 pb-1 hover:border-burnished transition-all font-bold drop-shadow-lg">
                View Archive
              </Link>
            </div>
          </div>
        </section>

        <FloatingMetric label="Philosophy" value="Presence" className="top-[105vh] left-[15%]" />
        <FloatingMetric label="Architecture" value="Precision" className="top-[140vh] right-[15%]" />

        {/* 2. About Preview - Centered Editorial */}
        <section id="about" className="pt-20 pb-24 bg-canvas relative overflow-hidden" data-bg="var(--color-canvas)">
          <div className="container flex flex-col items-center relative z-10">
            <div className="max-w-4xl text-center space-y-10 mb-20 fade-up">
              <div className="space-y-6">
                <div className="flex flex-col items-center gap-4">
                  <span className="text-[9px] font-mono text-heritage/60 uppercase tracking-[0.6em]">01 / PHILOSOPHY</span>
                  <div className="h-8 w-[1px] bg-heritage/10" />
                </div>
                <TextReveal 
                  text="Presence over Staging." 
                  className="text-5xl md:text-8xl font-serif font-medium text-text-primary tracking-tighter leading-[0.95]"
                />
              </div>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-sans font-light max-w-2xl mx-auto">
                We believe in the power of understated luxury. Our approach is human-centric, focusing on authentic emotions and architectural precision to create moments that are felt long after they pass.
              </p>
              <div className="pt-4 flex justify-center">
                <Link href="/about" className="group inline-flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-linen flex items-center justify-center group-hover:bg-heritage group-hover:text-canvas transition-all duration-700">
                    <MoveRight className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-700" />
                  </div>
                  <span className="uppercase tracking-[0.4em] text-[9px] font-bold text-text-primary">The Full Narrative</span>
                </Link>
              </div>
            </div>
            
            <div className="w-full max-w-5xl relative fade-up group">
              <div className="absolute -top-10 -right-10 text-[10rem] font-serif text-heritage/[0.03] pointer-events-none select-none italic">Z</div>
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
              <div className="absolute -bottom-6 right-6 w-64 p-8 bg-canvas border border-linen shadow-xl hidden lg:block text-center">
                <p className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-heritage mb-3">Meticulous Detail</p>
                <p className="text-[11px] text-text-secondary leading-relaxed font-light italic">"Every petal, every light, every moment is a piece of your story."</p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider className="bg-heritage-soft" />
        <FloatingMetric label="Expertise" value="Fine Art" className="top-[220vh] left-[10%]" />
        <FloatingMetric label="Design" value="Atmospheric" className="top-[250vh] right-[10%]" />

        {/* 3. Services Section - Editorial Grid */}
        <section id="services" className="py-20 bg-heritage-soft/50 relative overflow-hidden" data-bg="var(--color-heritage-soft)">
          <div className="container space-y-20">
            <div className="flex flex-col items-center text-center space-y-6 fade-up relative z-10">
              <div className="flex flex-col items-center gap-3">
                <span className="text-[9px] font-mono text-heritage uppercase tracking-[0.6em] small-caps">02 / EXPERTISE</span>
                <div className="h-6 w-[1px] bg-heritage/20" />
              </div>
              <TextReveal 
                text="Composed Clarity." 
                className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-text-primary tracking-tighter leading-[0.9]"
              />
              <p className="text-sm text-text-secondary font-sans font-light max-w-md leading-relaxed">
                Refined event architecture designed to bring a sense of calm and sophisticated energy to the most complex celebrations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-heritage/5 border border-heritage/5 relative z-10 shadow-2xl">
              {[
                { title: 'Fine Art Planning', desc: 'Logistical mapping that honors your vision with architectural precision.', img: '/decor-1.jpg' },
                { title: 'Atmospheric Design', desc: 'Immersive environments crafted through light, texture, and artistry.', img: '/decor-2.jpg' },
                { title: 'Global Production', desc: 'Seamless execution across borders, managing every technical nuance.', img: '/decor-3.jpg' },
              ].map((service, i) => (
                <div key={i} className="bg-canvas p-8 md:p-12 space-y-6 group hover:bg-white transition-all duration-700 flex flex-col items-center text-center border border-transparent hover:border-heritage/10">
                  <div className="aspect-[4/5] w-full overflow-hidden grayscale-[0.5] opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-[1.5s] arch-mask shadow-sm">
                    <Image src={service.img} alt={service.title} width={600} height={800} className="object-cover h-full w-full transition-transform duration-[5s] group-hover:scale-105" />
                  </div>
                  <div className="space-y-3 flex flex-col items-center">
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-text-primary italic group-hover:text-heritage transition-colors">{service.title}</h3>
                    <p className="text-[12px] text-text-secondary leading-relaxed font-light max-w-[90%]">{service.desc}</p>
                    <Link href="/services" className="mt-2 inline-block text-[8px] uppercase tracking-[0.4em] font-bold text-heritage border-b border-heritage/10 pb-1 hover:border-heritage transition-all small-caps">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider className="bg-canvas" />
        <FloatingMetric label="Collection" value="Milestones" className="top-[380vh] left-[12%]" />
        <FloatingMetric label="Archive" value="Legacy" className="top-[410vh] right-[12%]" />

        {/* 4. Specialization - Centered Festive */}
        <section id="specialization" className="py-24 bg-canvas relative overflow-hidden" data-bg="var(--color-canvas)">
          <div className="container space-y-24 relative z-10">
            <div className="flex flex-col items-center text-center space-y-8 fade-up">
              <div className="flex flex-col items-center gap-4">
                <span className="text-[9px] font-mono text-heritage/60 uppercase tracking-[0.6em]">03 / COLLECTION</span>
                <div className="h-8 w-[1px] bg-heritage/10" />
              </div>
              <TextReveal 
                text="Life's Defining Chapters." 
                className="text-5xl md:text-8xl font-serif font-medium text-text-primary tracking-tighter leading-[0.9]"
              />
              <p className="text-base text-text-secondary font-sans font-light max-w-lg">
                From royal weddings to intimate galas, we bring the same level of refined energy and composed clarity to every milestone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventTypes.map((type, i) => (
                <div key={i} className="group relative aspect-square overflow-hidden cursor-pointer bg-surface border border-linen/50">
                  <ParallaxImage src={type.image} alt={type.title} speed={0.1} containerClassName="w-full h-full" aspectRatio="aspect-auto h-full" className="transition-all duration-[2s] group-hover:scale-110 group-hover:rotate-1" />
                  <div className="absolute inset-0 bg-heritage/[0.02] group-hover:bg-heritage/10 transition-all duration-700" />
                  <div className="absolute inset-x-6 bottom-6 p-8 bg-canvas/95 backdrop-blur-md border border-linen translate-y-3 group-hover:translate-y-0 transition-transform duration-700 flex flex-col items-center text-center">
                    <div className="flex justify-between items-center w-full mb-4 px-2">
                      <div className="w-8 h-px bg-heritage/10" />
                      <span className="text-heritage/70">{type.icon}</span>
                      <div className="w-8 h-px bg-heritage/10" />
                    </div>
                    <h4 className="text-2xl font-serif font-medium text-text-primary italic mb-2">{type.title}</h4>
                    <p className="text-[11px] text-text-secondary font-light leading-relaxed max-w-[85%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">{type.desc}</p>
                    <div className="mt-4 text-[8px] font-mono text-text-muted tracking-widest uppercase">Archive / 0{i+1}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Statistics - Clean & Bold */}
        <section id="stats" className="py-24 bg-heritage relative overflow-hidden" data-bg="var(--color-heritage)">
          <div className="absolute inset-0 dot-pattern opacity-[0.05] invert" />
          <div className="container relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center fade-up">
              {stats.map((stat, i) => (
                <div key={stat.label} className="space-y-3 group">
                  <div className="text-4xl md:text-7xl font-serif font-medium text-canvas tracking-tighter transition-all duration-700 group-hover:text-burnished-light">{stat.value}</div>
                  <div className="text-[8px] uppercase tracking-[0.5em] text-canvas/40 font-bold group-hover:text-canvas/70 transition-colors">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Gallery - Editorial Masonry */}
        <section id="gallery" className="py-24 bg-canvas" data-bg="var(--color-canvas)">
          <div className="container space-y-20">
            <div className="text-center space-y-6 fade-up">
              <span className="text-[9px] font-mono text-heritage/60 uppercase tracking-[0.6em]">04 / ARCHIVE</span>
              <TextReveal text="Recent Masterpieces" className="text-5xl md:text-8xl font-serif font-medium tracking-tighter" />
            </div>
            <div className="fade-up">
              <Gallery items={galleryItems} />
            </div>
            <div className="flex justify-center pt-12 fade-up">
              <Link href="/gallery">
                <Button variant="outline" className="btn-outline-prestige h-16 px-16 text-[9px] border-linen hover:border-heritage">Explore Full Archive</Button>
              </Link>
            </div>
          </div>
        </section>

        <SectionDivider className="bg-surface" />
        <FloatingMetric label="Voices" value="Authentic" className="top-[540vh] left-[15%]" />
        <FloatingMetric label="Success" value="Miracles" className="top-[570vh] right-[15%]" />

        {/* 7. Testimonials - Centered Refined Editorial */}
        <section id="testimonials" className="py-24 bg-surface border-y border-linen" data-bg="var(--color-surface)">
          <div className="container space-y-24">
            <div className="flex flex-col items-center text-center space-y-8 fade-up">
              <div className="flex flex-col items-center gap-4">
                <span className="text-[9px] font-mono text-heritage/60 uppercase tracking-[0.6em]">05 / VOICES</span>
                <div className="h-8 w-[1px] bg-heritage/10" />
              </div>
              <TextReveal 
                text="Client Stories." 
                className="text-5xl md:text-8xl font-serif font-medium text-text-primary tracking-tighter leading-[0.95]"
              />
              <p className="text-xl font-serif italic font-light text-text-secondary max-w-2xl leading-relaxed">
                "Our goal is to ensure that your celebration is not just an event, but a cherished memory for every guest."
              </p>
              <div className="h-[1px] w-16 bg-heritage/20" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-heritage/10 border border-heritage/10">
              {testimonials.map((t) => (
                <div key={t.id} className="bg-canvas p-12 space-y-8 hover:bg-surface transition-colors duration-700">
                  <div className="flex gap-1 text-heritage/60">
                    {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                  </div>
                  <p className="text-lg text-text-primary font-serif italic leading-relaxed">"{t.content}"</p>
                  <div className="flex items-center gap-4 pt-6 border-t border-heritage/5">
                    <div className="w-12 h-12 rounded-full overflow-hidden grayscale opacity-70">
                      <Image src={t.avatar} alt={t.author} width={48} height={48} className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-text-primary">{t.author}</h4>
                      <p className="text-[8px] uppercase tracking-[0.2em] text-text-muted mt-1">{t.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider className="bg-canvas" />
        <FloatingMetric label="Method" value="Architecture" className="top-[680vh] left-[10%]" />
        <FloatingMetric label="Process" value="Dialogue" className="top-[710vh] right-[10%]" />

        {/* 8. Process - Human-Centric */}
        <section id="process" className="py-24 bg-canvas relative overflow-hidden" data-bg="var(--color-canvas)">
          <div className="container space-y-24 relative z-10">
            <div className="flex flex-col items-center text-center space-y-8 fade-up">
              <div className="flex flex-col items-center gap-4">
                <span className="text-[9px] font-mono text-heritage/60 uppercase tracking-[0.6em]">06 / METHOD</span>
                <div className="h-8 w-[1px] bg-heritage/10" />
              </div>
              <TextReveal text="The Architecture of Planning." className="text-5xl md:text-7xl font-serif font-medium tracking-tighter" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {steps.map((step, i) => (
                <div key={i} className="space-y-6 group fade-up flex flex-col items-center text-center">
                  <div className="text-[9px] font-mono text-text-muted mb-4 tracking-widest uppercase small-caps">Step / 0{i+1}</div>
                  <div className="w-14 h-14 rounded-full bg-heritage-soft border border-heritage/10 flex items-center justify-center text-heritage group-hover:bg-heritage group-hover:text-canvas transition-all duration-700">
                    {step.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-serif font-medium text-text-primary italic">{step.title}</h3>
                    <p className="text-[13px] text-text-secondary leading-relaxed font-light max-w-[200px]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider className="bg-canvas" />

        {/* 10. Final CTA - Pure Luxury */}
        <section id="cta" className="relative py-24 bg-canvas overflow-hidden" data-bg="var(--color-canvas)">
          <div className="absolute inset-0 z-0">
             <Image 
                src="/hero10.jpg"
                alt="Background"
                fill
                className="object-cover opacity-[0.02] grayscale"
             />
          </div>
          
          <div className="container relative z-10 text-center space-y-16">
            <div className="space-y-8">
              <span className="text-[9px] font-mono text-heritage/60 uppercase tracking-[0.8em]">COMMENCE</span>
              <h2 className="text-6xl md:text-9xl font-serif font-medium tracking-tighter text-text-primary leading-[0.85]">
                Begin Your <br/><span className="text-heritage italic font-light">Narrative.</span>
              </h2>
            </div>

            <div className="max-w-2xl mx-auto space-y-12">
              <p className="text-lg md:text-xl text-text-secondary font-serif italic font-light leading-relaxed">
                Connect with our concierge to discuss how we can bring composed clarity to your next significant milestone.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
                <Magnetic strength={0.2}>
                  <Link href="/contact">
                    <Button size="lg" className="h-20 px-16 text-[9px] btn-prestige shadow-2xl" rightIcon={<ArrowRight size={18} />}>
                      Request Consultation
                    </Button>
                  </Link>
                </Magnetic>
                <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-heritage transition-colors flex items-center gap-4 text-[9px] font-bold uppercase tracking-[0.4em]">
                  <MessageCircle size={18} className="text-heritage/70" /> WhatsApp Concierge
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
