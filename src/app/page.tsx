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
  Instagram as InstagramIcon,
  ChevronLeft,
  ChevronRight,
  Gift,
  Lightbulb
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
import { Counter } from '@/components/atoms/Counter';
import { BackgroundFlourish } from '@/components/atoms/BackgroundFlourish';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const galleryItems = [
  { id: 1, title: 'Royal Palace Wedding', category: 'Wedding', location: 'Udaipur, Rajasthan', image: '/decor-1.jpg' },
  { id: 2, title: 'Tech Summit 2026', category: 'Corporate', location: 'Bangalore, India', image: '/decor-2.jpg' },
  { id: 3, title: 'Summer Garden Party', category: 'Social', location: 'Delhi, India', image: '/decor-3.jpg' },
  { id: 5, title: 'Heritage Sangeet', category: 'Wedding', location: 'Jaipur, Rajasthan', image: '/hero-8.jpg' },
  { id: 4, title: 'Modern Estate Gala', category: 'Corporate', location: 'Mumbai, India', image: '/decor-4.jpg' },
  { id: 6, title: 'Private Birthday Bash', category: 'Social', location: 'Goa, India', image: '/hero-7.jpg' },
];

const eventTypes = [
  { title: 'Weddings', icon: <Heart size={20} />, image: '/hero-2.jpg', desc: 'Beautiful weddings planned with love and care.', color: 'var(--color-burnished)' },
  { title: 'Corporate', icon: <Sparkles size={20} />, image: '/hero-3.jpg', desc: 'Professional events for your business needs.', color: 'var(--color-heritage)' },
  { title: 'Birthdays', icon: <PartyPopper size={20} />, image: '/hero-4.jpg', desc: 'Fun celebrations for your special day.', color: '#FDFCF0' },
  { title: 'Family', icon: <Star size={20} />, image: '/hero-5.jpg', desc: 'Simple and elegant family gatherings.', color: 'var(--color-burnished-light)' },
  { title: 'Festivals', icon: <Tent size={20} />, image: '/hero-6.jpg', desc: 'Large events that bring people together.', color: 'var(--color-heritage-soft)' },
  { title: 'Private Parties', icon: <Users size={20} />, image: '/hero-7.jpg', desc: 'Intimate parties for your close friends.', color: '#F9F7F2' },
];

const steps = [
  { title: 'Your Vision', desc: 'We listen to your ideas and find what makes your event special.', icon: <Sparkles size={20} /> },
  { title: 'Careful Planning', desc: 'We handle all the details so you don\'t have to worry.', icon: <Zap size={20} /> },
  { title: 'Perfect Style', desc: 'We pick the best colors and decor to match your taste.', icon: <Users size={20} /> },
  { title: 'The Big Day', desc: 'We make sure everything runs smoothly so you can have fun.', icon: <Star size={20} /> },
];

const stats = [
  { 
    value: '150+', 
    label: 'Bespoke Weddings',
    desc: 'Crafted with precision and elegance'
  },
  { 
    value: '12+', 
    label: 'Years of Artistry',
    desc: 'A legacy of professional excellence'
  },
  { 
    value: '25+', 
    label: 'Cities Worldwide',
    desc: 'Curating luxury across the globe'
  },
];

const testimonials = [
  { id: 1, content: "Zing Bliss made our wedding dream come true. Every detail was curated with such finesse, and the execution was flawless.", author: "Anjali & Rahul", event: "Palace Wedding", avatar: "/hero-1.jpg" },
  { id: 2, content: "Professionalism meets pure creativity. Our corporate tech gala was transformed into a cinematic experience.", author: "Vikram S.", event: "Tech Summit", avatar: "/hero-2.jpg" },
  { id: 3, content: "The absolute best in the industry. They understood our intimate aesthetic and brought it to life beautifully.", author: "Sonia M.", event: "Birthday Celebration", avatar: "/hero-3.jpg" },
  { id: 4, content: "A level of sophistication I haven't seen before. They handled the logistics so we could truly enjoy our day.", author: "Kabir & Meera", event: "Garden Wedding", avatar: "/hero-4.jpg" },
  { id: 5, content: "Exceptional taste and incredible energy. Every guest was talking about the decor for weeks!", author: "Priya V.", event: "Private Social", avatar: "/hero-5.jpg" },
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
  <div className={cn("flex flex-col items-center gap-2 py-2 relative z-10", className)}>
    <div className="flex items-center gap-3">
      <Sparkles size={6} className="text-heritage/20" />
      <Star size={8} className="text-heritage/30" />
      <Sparkles size={6} className="text-heritage/20" />
    </div>
  </div>
);

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    {
      title: 'Share your requirements',
      desc: 'Tell us your event date, budget, and vision. We listen to find what makes your celebration truly unique.',
      image: '/decor-1.jpg'
    },
    {
      title: 'Get a personalised proposal',
      desc: 'Receive curated deals on venues and catering tailored to your exact preferences and aesthetic.',
      image: '/decor-2.jpg'
    },
    {
      title: 'Confirm and book',
      desc: 'Secure your date with a minimum deposit and lock the deal. Leave all the logistics to our expert team.',
      image: '/decor-4.jpg'
    }
  ];

  useGSAP(() => {
    // Reveal steps on scroll
    gsap.utils.toArray<HTMLElement>('.timeline-step').forEach((step, i) => {
      gsap.from(step, {
        scrollTrigger: {
          trigger: step,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    });

    // Animate the vertical line
    gsap.from('.timeline-line-inner', {
      scrollTrigger: {
        trigger: '.timeline-container',
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: true,
      },
      scaleY: 0,
      transformOrigin: 'top center',
      ease: 'none'
    });

    // Animate central nodes
    gsap.utils.toArray<HTMLElement>('.timeline-node').forEach((node) => {
      gsap.from(node, {
        scrollTrigger: {
          trigger: node,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        },
        scale: 0,
        duration: 0.6,
        ease: 'back.out(1.7)'
      });
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="process" className="py-16 md:py-20 bg-ivory relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          <div className="flex items-center gap-6 md:gap-12">
            <div className="hidden md:block w-32 h-px bg-burnished/20 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-burnished" />
            </div>
            <h2 className="text-4xl md:text-7xl font-serif font-medium tracking-tighter text-text-primary">How it works</h2>
            <div className="hidden md:block w-32 h-px bg-burnished/20 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-burnished" />
            </div>
          </div>
          <p className="text-burnished font-serif italic text-lg md:text-xl opacity-80">Your journey to an extraordinary event in 3 easy steps</p>
        </div>

        <div className="timeline-container relative max-w-5xl mx-auto px-4">
          {/* Vertical Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-burnished/20 -translate-x-1/2 hidden md:block" />
          <div className="timeline-line-inner absolute left-1/2 top-0 bottom-0 w-px bg-burnished -translate-x-1/2 hidden md:block" />

          <div className="space-y-24 md:space-y-32 relative z-10">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className={cn(
                  "timeline-step relative flex flex-col md:flex-row items-center gap-10 md:gap-20",
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Text Content */}
                <div className={cn("basis-1/2 space-y-4", i % 2 === 0 ? "md:text-right" : "md:text-left")}>
                  <div className={cn("flex flex-col", i % 2 === 0 ? "md:items-end" : "md:items-start")}>
                    <span className="text-5xl md:text-6xl font-serif font-bold text-burnished/40 italic leading-none mb-2">0{i + 1}</span>
                    <h3 className="text-3xl md:text-4xl font-serif font-medium text-text-primary tracking-tight leading-tight">{step.title}</h3>
                  </div>
                  <p className={cn("text-base md:text-lg text-text-secondary leading-relaxed font-sans", i % 2 === 0 ? "ml-auto" : "mr-auto")}>
                    {step.desc}
                  </p>
                </div>

                {/* Central Point (Node) */}
                <div className="timeline-node absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-burnished hidden md:flex items-center justify-center shadow-lg z-20">
                   <div className="w-1.5 h-1.5 rounded-full bg-burnished" />
                </div>

                {/* Visual / Image */}
                <div className="basis-1/2 w-full">
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl group border-8 border-white bg-white">
                    <Image 
                      src={step.image} 
                      alt={step.title} 
                      fill 
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-burnished/10 to-transparent opacity-40" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mt-24 space-y-8">
          <Magnetic strength={0.2}>
            <a 
              href={getGenericWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-16 md:h-18 px-12 md:px-16 text-[10px] bg-white text-burnished hover:bg-ivory shadow-lg transition-all hover:scale-105 rounded-full tracking-[0.3em] font-bold border border-linen flex items-center justify-center uppercase"
            >
              Begin Planning Now
            </a>
          </Magnetic>
          <div className="flex items-center gap-4 opacity-30">
            <div className="w-12 h-px bg-burnished" />
            <Sparkles size={16} className="text-burnished" />
            <div className="w-12 h-px bg-burnished" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const [currentHeroIndex, setCurrentHeroIndex] = React.useState(0);
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useGSAP(() => {
    // Parallax effect for hero
    gsap.to('.hero-content', {
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      },
      y: 100,
      opacity: 0,
      ease: 'none'
    });

    const tl = gsap.timeline();
    tl.from('.hero-badge', { y: 40, opacity: 0, duration: 1.8, ease: 'expo.out' })
      .from('.header-fade', { y: 120, opacity: 0, duration: 2.2, stagger: 0.2, ease: 'expo.out' }, '-=1.5')
      .from('.hero-desc', { y: 30, opacity: 0, duration: 1.8, ease: 'expo.out' }, '-=1.8')
      .from('.hero-btns', { y: 40, opacity: 0, duration: 1.8, ease: 'expo.out' }, '-=1.8')
      .from('.scroll-indicator', { opacity: 0, y: 20, duration: 1.5, ease: 'power2.out' }, '-=1.2');

    gsap.utils.toArray<HTMLElement>('.fade-up').forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 92%',
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });
    });

    // Advanced Skew-on-Scroll for sections and images
    const skewElements = gsap.utils.toArray<HTMLElement>('.fade-up');
    skewElements.forEach((el) => {
      const proxy = { skew: 0 },
          skewSetter = gsap.quickSetter(el, "skewY", "deg"),
          clamp = gsap.utils.clamp(-10, 10);

      ScrollTrigger.create({
        onUpdate: (self) => {
          const skew = clamp(self.getVelocity() / -300);
          if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, {
              skew: 0, 
              duration: 0.8, 
              ease: "power3", 
              overwrite: true, 
              onUpdate: () => skewSetter(proxy.skew)
            });
          }
        }
      });
      gsap.set(el, { transformOrigin: "right center", force3D: true });
    });

    // Background color shifts - DISABLED per user request but kept structure for other scroll triggers
    /*
    const sections = gsap.utils.toArray<HTMLElement>('section');
    ...
    */

  }, { scope: containerRef });

  return (
    <main ref={mainRef} className="min-h-screen bg-canvas flex flex-col overflow-x-hidden relative transition-colors duration-1000">
      <div ref={containerRef} className="relative w-full">
        <FloatingDecor />
        <SVGSpine height="6000px" viewBox="0 0 20 6000" pathD="M 10 0 L 10 6000" className="opacity-[0.05]" />
        
        <BackgroundFlourish type="floral" className="top-[5%] left-[5%] w-64 h-64 text-heritage/5" parallaxSpeed={0.05} />
        <BackgroundFlourish type="architectural" className="top-[15%] right-[2%] w-96 h-96 text-heritage/5" parallaxSpeed={0.08} />

        {/* 1. Hero Section */}
        <section id="hero" className="relative h-screen min-h-[850px] flex items-center overflow-hidden" data-bg="var(--color-canvas)">
          {/* Grain Overlay */}
          <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.04] mix-blend-overlay" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
          
          {/* Cinematic Overlays */}
          <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-heritage-dark/95 via-heritage-dark/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] z-10 pointer-events-none" />
          
          <div className="absolute inset-0 z-0">
            {heroImages.map((img, i) => {
              if (i !== 0 && !isMounted) return null;
              return (
                <div key={img} className={cn("absolute inset-0 transition-opacity duration-[3500ms] ease-in-out", i === currentHeroIndex ? "opacity-100" : "opacity-0")}>
                  <Image 
                    src={img} 
                    alt="Luxury Event" 
                    fill 
                    className="object-cover brightness-[0.75] saturate-[0.8] scale-100 animate-[hero-zoom_25s_ease-in-out_infinite_alternate]" 
                    priority={i === 0} 
                    sizes="100vw" 
                  />
                </div>
              );
            })}
          </div>

          <div className="container relative z-30 flex flex-col items-center md:items-start text-center md:text-left hero-content">
            <div className="hero-badge overflow-hidden mb-10 flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-4 py-2.5 px-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
                <div className="w-2 h-2 rounded-full bg-burnished animate-pulse shadow-[0_0_15px_rgba(179,139,77,0.8)]" />
                <span className="text-[10px] font-mono text-white/90 uppercase tracking-[0.5em] font-bold">150+ Curated Celebrations</span>
              </div>
              <div className="h-12 w-[1px] bg-gradient-to-b from-burnished/60 to-transparent hidden md:block" />
            </div>
            
            <h1 className="hero-title flex flex-col items-center md:items-start gap-4 md:gap-7 max-w-[1100px] drop-shadow-[0_15px_50px_rgba(0,0,0,0.9)]">
              <div className="overflow-hidden">
                <span className="block text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white/95 tracking-tight leading-[1.1] header-fade transform-gpu">
                  We Design Events That
                </span>
              </div>
              <div className="overflow-hidden">
                <span className="block text-6xl md:text-[8.5rem] lg:text-[11rem] font-serif font-medium text-white italic leading-[0.8] header-fade transform-gpu">
                  People <span className="text-burnished text-glow not-italic font-bold">Never</span> Forget
                </span>
              </div>
            </h1>

            <div className="flex flex-col md:flex-row md:items-center gap-12 mt-14 mb-16">
              <div className="overflow-hidden">
                <p className="hero-desc text-base md:text-xl text-white/70 max-w-[540px] leading-relaxed font-sans font-light drop-shadow-[0_2px_15px_rgba(0,0,0,0.6)]">
                  Luxury event planning for those who demand uncompromising elegance, artistic vision, and flawless execution.
                </p>
              </div>
              
              <div className="hidden md:block w-px h-16 bg-white/10 mx-4" aria-hidden="true" />
              
              <div className="flex flex-col items-center md:items-start gap-4">
                <div className="flex -space-x-3.5">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-11 h-11 rounded-full border-2 border-heritage-dark overflow-hidden relative shadow-xl ring-2 ring-white/5">
                      <Image src={`/hero-${i}.jpg`} alt="Client" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-[10px] tracking-[0.4em] uppercase text-burnished font-bold font-mono">Bespoke Excellence Since 2017</span>
              </div>
            </div>

            <div className="hero-btns flex flex-col sm:flex-row items-center gap-6 md:gap-10">
              <Magnetic strength={0.2}>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="h-24 px-22 text-[11px] bg-burnished text-white border-0 shadow-[0_25px_60px_rgba(179,139,77,0.4)] hover:bg-burnished-light transition-all duration-700 hover:scale-110 active:scale-95 rounded-full uppercase font-extrabold tracking-[0.5em] group overflow-hidden relative"
                  >
                    <span className="relative z-10">Plan Your Event</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </Button>
                </Link>
              </Magnetic>

              <Magnetic strength={0.2}>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="h-24 px-22 text-[11px] border-white/20 !text-white hover:bg-white hover:!text-heritage-dark transition-all duration-700 hover:scale-110 active:scale-95 rounded-full uppercase font-extrabold tracking-[0.5em] backdrop-blur-sm"
                  >
                    Book a Consultation
                  </Button>
                </Link>
              </Magnetic>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-5 group cursor-pointer scroll-indicator" 
               onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}>
            <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.7em] group-hover:text-burnished transition-colors duration-700 [writing-mode:vertical-lr] rotate-180">Scroll</span>
            <div className="h-20 w-px bg-white/10 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1/2 bg-burnished animate-[scroll-line_2.5s_ease-in-out_infinite]" />
            </div>
          </div>
        </section>

        {/* 2. Trust Strip */}
        <section className="bg-surface py-10 md:py-24 relative z-30 overflow-hidden border-y border-linen/50">
          <div className="absolute inset-0 dot-pattern opacity-[0.03] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(179,139,77,0.02)_0%,_transparent_70%)] pointer-events-none" />

          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-linen/60">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex flex-col items-center text-center group py-6 md:py-8 px-4 md:px-12 fade-up">
                   <div className="flex flex-col items-center space-y-3 md:space-y-6">
                      {/* Icon above number */}
                      <div className="text-burnished/40 group-hover:text-burnished transition-colors duration-700 transform group-hover:scale-110">
                        {i === 0 && <Heart size={24} strokeWidth={1} />}
                        {i === 1 && <Star size={24} strokeWidth={1} />}
                        {i === 2 && <Users size={24} strokeWidth={1} />}
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="flex items-baseline gap-1">
                          <span className="text-6xl md:text-8xl lg:text-9xl font-serif text-text-primary italic tracking-tight leading-none">
                            <Counter value={stat.value} />
                          </span>
                          <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-burnished opacity-60" />
                        </div>
                        
                        <div className="mt-4 md:mt-8 space-y-1 md:space-y-2">
                          <span className="text-[11px] md:text-[13px] font-sans uppercase tracking-[0.6em] text-text-primary font-bold block">
                            {stat.label}
                          </span>
                          <p className="text-[10px] md:text-[11px] font-serif italic text-text-secondary opacity-80 group-hover:opacity-100 transition-opacity">
                            {stat.desc}
                          </p>
                        </div>
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* 3. Recent Work (Portfolio) */}
        <section id="gallery" className="py-16 md:py-20 bg-canvas" data-bg="var(--color-canvas)">
          <div className="container space-y-16">
            <div className="text-center space-y-4 fade-up">
              <TextReveal text="Our Recent Work" className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight" />
              <p className="text-lg text-text-secondary font-serif italic font-light">A glimpse into our finest celebrations</p>
            </div>
            <Gallery items={galleryItems} aspectRatio="aspect-[4/5]" />
            <div className="flex justify-center pt-12">
              <Link href="/gallery">
                <Button className="h-16 px-16 text-[10px] shadow-lg hover:scale-105 rounded-full uppercase font-bold tracking-[0.3em] bg-heritage text-white border-0">View All Projects</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Services Section */}
        <section id="services" className="py-16 md:py-24 bg-surface relative overflow-hidden border-t border-linen/40" data-bg="var(--color-surface)">
          <div className="container space-y-20">
            <div className="flex flex-col items-center text-center space-y-4 fade-up relative z-10">
              <TextReveal text="Our Services" className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-text-primary tracking-tight" />
              <p className="text-lg text-text-secondary font-sans font-light max-w-2xl mx-auto">
                From luxury weddings to corporate experiences — we plan, design & execute seamlessly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 relative z-10">
              {[
                { 
                  title: 'Weddings & Celebrations', 
                  desc: 'Bespoke wedding experiences that reflect your unique story, style, and dreams.', 
                  img: '/decor-1.jpg',
                  icon: <Heart size={20} strokeWidth={1.5} />,
                  value: 'Crafting Timeless Legacies',
                  items: ['Luxury & Theme Weddings', 'Destination Weddings', 'Cinematic Videography']
                },
                { 
                  title: 'Birthdays & Kids', 
                  desc: 'From playful themes to premium setups, we create joyful celebrations filled with imagination.', 
                  img: '/hero-7.jpg',
                  icon: <PartyPopper size={20} strokeWidth={1.5} />,
                  value: 'Whimsical Wonders',
                  items: ['Theme-Based Styling', 'Live Entertainment', 'Custom Return Gifts']
                },
                { 
                  title: 'Corporate Events', 
                  desc: 'Professional, impactful, and seamlessly executed events designed to elevate your brand.', 
                  img: '/decor-4.jpg',
                  icon: <Zap size={20} strokeWidth={1.5} />,
                  value: 'Brand Excellence',
                  items: ['Product Launches', 'Awards & Annual Days', 'Employee Engagement']
                },
                { 
                  title: 'Social & Lifestyle', 
                  desc: 'Elegant and intimate celebrations tailored to your special moments and private gatherings.', 
                  img: '/decor-2.jpg',
                  icon: <Sparkles size={20} strokeWidth={1.5} />,
                  value: 'Intimate Elegance',
                  items: ['Baby Showers & Proposals', 'Ring Ceremony', 'Private Theme Parties']
                },
                { 
                  title: 'Festival Celebrations', 
                  desc: 'Celebrate traditions with a touch of creativity and style, curated for every festive season.', 
                  img: '/decor-3.jpg',
                  icon: <Star size={20} strokeWidth={1.5} />,
                  value: 'Traditional Artistry',
                  items: ['Diwali Dcor', 'Christmas Celebrations', 'Custom Festive Experiences']
                },
                { 
                  title: 'Artist Management', 
                  desc: 'We bring the best talent to your event, ensuring unforgettable entertainment and energy.', 
                  img: '/hero-6.jpg',
                  icon: <Music size={20} strokeWidth={1.5} />,
                  value: 'World-Class Talent',
                  items: ['Bollywood Celebrities', 'Live Bands & Singers', 'Innovative Global Acts']
                },
              ].map((service, i) => (
                <div key={i} className="group bg-ivory p-8 space-y-8 transition-all duration-700 flex flex-col rounded-[2.5rem] border border-linen/50 shadow-sm hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] hover:scale-[1.02] hover:-translate-y-2 hover:border-burnished/30">
                  <div className="aspect-[16/10] w-full rounded-[2rem] overflow-hidden relative shadow-inner">
                    <Image src={service.img} alt={service.title} fill className="object-cover transition-transform duration-[3s] ease-out group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-700" />
                    <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-burnished shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      {service.icon}
                    </div>
                  </div>
                  <div className="space-y-6 px-2 pb-2 flex flex-col items-center text-center">
                    <div className="space-y-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-burnished/60 block">{service.value}</span>
                      <h3 className="text-2xl md:text-3xl font-serif font-medium text-text-primary italic leading-tight">{service.title}</h3>
                    </div>
                    <p className="text-sm md:text-base text-text-secondary leading-relaxed font-light">{service.desc}</p>
                    
                    <ul className="grid grid-cols-1 gap-2 pt-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="text-[10px] md:text-[11px] uppercase tracking-widest text-text-muted font-bold flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-burnished/40" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Link href="/services" className="inline-flex items-center gap-3 mt-4 text-[10px] uppercase tracking-[0.4em] font-bold text-heritage group/link">
                      <span className="border-b border-heritage/20 pb-1 group-hover/link:border-heritage transition-all small-caps">Explore More</span>
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* 5. Why Choose Us (Redesigned) */}
        <section id="why-choose-us" className="why-section py-[80px] md:py-[110px] bg-[#f7f5f2] relative overflow-hidden">
          {/* Subtle luxury background treatment */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,_rgba(180,140,80,0.08)_0%,_transparent_70%)] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
          />
          
          <div className="container max-w-[1100px] md:max-w-[1200px] mx-auto relative z-10">
            {/* Header */}
            <div className="why-header flex flex-col items-center text-center mb-[60px] md:mb-[80px] space-y-4 fade-up">
              <span className="text-[11px] md:text-[12px] text-[#9c9c9c] uppercase tracking-[3px] font-bold">
                THE ZING BLISS ADVANTAGE
              </span>
              <h2 className="text-[48px] md:text-[60px] font-serif font-medium text-[#1a1a1a] leading-[1.2]">
                Why choose our <span className="text-[#b8965a] italic">artistry?</span>
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#7a7a7a] leading-[1.7] max-w-[600px] mx-auto font-sans">
                We don&apos;t just plan events; we architect legacies of elegance and unforgettable moments. Every detail is a brushstroke in your unique masterpiece.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {[
                { 
                  title: 'Bespoke Artistry', 
                  desc: 'Every event is a unique masterpiece, meticulously curated to reflect your distinct aesthetic and personal story.'
                },
                { 
                  title: 'Elite Access', 
                  desc: 'Unrivalled access to the world&apos;s most exclusive venues and a global network of premier luxury partners.'
                },
                { 
                  title: 'Seamless Precision', 
                  desc: 'Invisible, expert orchestration that ensures every detail is executed with uncompromising, quiet perfection.'
                },
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "why-card bg-white p-[32px] md:p-[36px] rounded-[14px] border border-black/5 flex flex-col items-start text-left transition-all duration-[0.35s] ease-in-out group fade-up",
                    "shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.10)] hover:-translate-y-2",
                    i === 1 ? "md:scale-[1.04] md:shadow-[0_20px_40px_rgba(0,0,0,0.08)] z-20" : "z-10"
                  )}
                >
                  <div className="w-[30px] h-px bg-[#d6c3a3] mb-[16px]" />
                  <h3 className="text-[20px] md:text-[22px] font-serif font-medium text-[#1a1a1a] mb-[10px]">{item.title}</h3>
                  <p className="text-[14px] md:text-[15px] text-[#8a8a8a] leading-[1.7] font-sans font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* 6. CTA Strip (MID CTA) */}
        <section className="bg-heritage py-20 md:py-24 relative overflow-hidden border-y border-white/5">
          <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(179,139,77,0.15)_0%,_transparent_60%)] pointer-events-none" />
          
          <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 md:gap-20">
            <div className="space-y-6 text-center lg:text-left max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white italic tracking-tight leading-[1.1]">
                Ready to Plan Your <span className="text-burnished">Dream Event?</span>
              </h2>
              <p className="text-white/70 font-serif italic text-xl md:text-2xl max-w-xl leading-relaxed">
                Let&apos;s turn your vision into an unforgettable experience.
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <Magnetic strength={0.2}>
                <Link href="/contact">
                  <Button size="lg" className="h-20 px-20 text-[11px] bg-white text-heritage hover:bg-ivory transition-all duration-500 shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:scale-110 active:scale-95 rounded-full uppercase tracking-[0.4em] font-bold border-0">
                    Plan Your Event
                  </Button>
                </Link>
              </Magnetic>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 italic">Takes less than 2 minutes</span>
            </div>
          </div>
        </section>

        {/* 7. How We Work */}
        <HowItWorks />

        {/* 8. Testimonials */}
        <section id="testimonials" className="py-20 bg-surface relative overflow-hidden" data-bg="var(--color-surface)">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(179,139,77,0.03)_0%,_transparent_70%)] pointer-events-none" />
          <BackgroundFlourish type="floral" className="top-[-10%] left-[-5%] w-96 h-96 text-heritage/5 -rotate-12" parallaxSpeed={0.03} />
          
          <div className="container relative z-10 space-y-16">
            <div className="flex flex-col items-center text-center space-y-6 fade-up">
              <div className="flex items-center gap-3 text-burnished/60 mb-2">
                 <div className="h-px w-6 bg-burnished/20" />
                 <span className="text-[10px] font-mono uppercase tracking-[0.4em] font-bold">Trusted by 100+ happy clients</span>
                 <div className="h-px w-6 bg-burnished/20" />
              </div>
              <TextReveal text="Clients" className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-text-primary tracking-tight" />
              <p className="text-lg font-serif italic font-light text-text-secondary max-w-2xl mx-auto">
                Voices of those who have experienced the Zing Bliss artistry.
              </p>
            </div>

            <div className="relative max-w-3xl mx-auto fade-up">
              <div className="bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-linen/30 shadow-sm p-8 md:p-16 relative overflow-hidden">
                {/* Decorative Quote Mark */}
                <span className="absolute top-10 left-10 text-9xl font-serif text-burnished/10 leading-none pointer-events-none select-none">&ldquo;</span>
                
                <div className="overflow-hidden min-h-[450px] flex items-center relative">
                  {testimonials.map((t, i) => (
                    <div 
                      key={t.id} 
                      className={cn(
                        "w-full transition-all duration-1000 ease-expo absolute inset-0 flex flex-col items-center justify-center text-center space-y-10",
                        i === currentTestimonial ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-20 pointer-events-none"
                      )}
                    >
                      <div className="flex flex-col items-center gap-6">
                        <div className="flex gap-1.5 text-burnished">
                          {[...Array(5)].map((_, idx) => <Star key={idx} size={18} fill="currentColor" strokeWidth={0} />)}
                        </div>
                        
                        <p className="text-xl md:text-3xl font-serif italic text-text-primary leading-relaxed tracking-tight max-w-2xl px-4">
                          &quot;{t.content}&quot;
                        </p>
                      </div>

                      <div className="flex flex-col items-center gap-8">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-xl relative ring-8 ring-burnished/5">
                          <Image 
                            src={t.avatar} 
                            alt={t.author} 
                            width={80} 
                            height={80} 
                            className="object-cover w-full h-full" 
                          />
                        </div>
                        
                        <div className="relative flex flex-col items-center gap-2">
                           <h4 className="text-lg font-bold uppercase tracking-[0.3em] text-text-primary">{t.author}</h4>
                           <p className="text-[10px] uppercase tracking-[0.4em] text-burnished font-bold">{t.event}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Slider Controls */}
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
                  <button 
                    onClick={(e) => { e.stopPropagation(); prevTestimonial(); }}
                    className="p-4 text-text-primary/20 hover:text-burnished transition-colors duration-500 pointer-events-auto"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={32} strokeWidth={1} />
                  </button>

                  <button 
                    onClick={(e) => { e.stopPropagation(); nextTestimonial(); }}
                    className="p-4 text-text-primary/20 hover:text-burnished transition-colors duration-500 pointer-events-auto"
                    aria-label="Next"
                  >
                    <ChevronRight size={32} strokeWidth={1} />
                  </button>
                </div>
              </div>

              {/* Progress Dots */}
              <div className="flex justify-center gap-3 mt-12">
                {testimonials.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentTestimonial(dotIdx)}
                    className={cn(
                      "h-1 transition-all duration-700 rounded-full",
                      dotIdx === currentTestimonial ? "w-10 bg-burnished" : "w-3 bg-linen"
                    )}
                    aria-label={`Go to testimonial ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 9. Instagram Section */}
        <section className="py-20 md:py-24 bg-canvas relative overflow-hidden" data-bg="var(--color-canvas)">
          <div className="container space-y-24">
            <div className="text-center space-y-6 fade-up">
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  <span className="text-[10px] font-mono text-heritage/60 uppercase tracking-[0.6em] small-caps">Live Updates</span>
                </div>
                <TextReveal text="See Our Events Live" className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight" />
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-text-secondary max-w-2xl mx-auto opacity-70">Follow our journey and real-time event moments.</p>
                <a 
                  href="https://www.instagram.com/zingblissevents/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-burnished hover:text-heritage transition-colors duration-500 group"
                >
                  <InstagramIcon size={16} />
                  <span className="text-xs font-bold uppercase tracking-[0.3em] font-sans">@zingblissevents</span>
                  <div className="h-px w-0 bg-heritage group-hover:w-4 transition-all duration-500" />
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700 fade-up">
                  <Image 
                    src={`/hero-${i}.jpg`} 
                    alt="Instagram post" 
                    fill 
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="p-4 rounded-full bg-white/10 border border-white/20 scale-90 group-hover:scale-100 transition-transform duration-500">
                      <InstagramIcon className="text-white w-6 h-6" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Final CTA */}
        <section id="cta" className="relative py-24 md:py-32 bg-heritage overflow-hidden" data-bg="var(--color-heritage)">
          <div className="absolute inset-0 z-0">
             <Image src="/hero10.jpg" alt="Background" fill className="object-cover opacity-20 scale-100 brightness-[0.3]" />
             <div className="absolute inset-0 bg-radial-vignette opacity-70" />
             <div className="absolute inset-0 bg-gradient-to-b from-heritage via-heritage/90 to-heritage z-10" />
          </div>
          
          <div className="container relative z-20 text-center space-y-16">
            <div className="space-y-10 fade-up">
              <div className="flex flex-col items-center gap-4">
                 <span className="text-[11px] font-mono uppercase tracking-[0.6em] text-burnished font-bold">LIMITED AVAILABILITY</span>
                 <div className="h-10 w-[1px] bg-burnished/30" />
              </div>
              <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-serif font-medium tracking-tighter text-white leading-[0.9] drop-shadow-2xl">
                Let&apos;s Create <br />
                <span className="italic font-light text-burnished/90 text-glow">Something Unforgettable</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/60 font-serif italic font-light leading-relaxed max-w-3xl mx-auto">
                "A limited number of events. Each crafted with intention. Now booking for 2026 curated celebrations."
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-8 fade-up">
              <Magnetic strength={0.2}>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="h-24 px-20 text-[11px] bg-white text-heritage hover:bg-ivory shadow-[0_30px_70px_rgba(0,0,0,0.5)] hover:scale-110 active:scale-95 rounded-full uppercase tracking-[0.4em] font-bold border-0 group relative overflow-hidden animate-luxury-pulse"
                  >
                    <span className="relative z-10">Start the Dialogue</span>
                  </Button>
                </Link>
              </Magnetic>
              
              <div className="flex items-center gap-4 text-white/20">
                <div className="w-8 h-px bg-current" />
                <span className="text-[10px] uppercase tracking-widest font-mono">EST. 2017</span>
                <div className="w-8 h-px bg-current" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
