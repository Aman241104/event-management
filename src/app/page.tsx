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
  { id: 4, title: 'Modern Estate Gala', category: 'Corporate', location: 'Mumbai, India', image: '/decor-4.jpg' },
  { id: 5, title: 'Heritage Sangeet', category: 'Wedding', location: 'Jaipur, Rajasthan', image: '/hero-8.jpg' },
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
  { value: '100+', label: 'Events Planned' },
  { value: '100%', label: 'Happy Clients' },
  { value: '10+', label: 'Years of Experience' },
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
  <div className={cn("flex flex-col items-center gap-2 py-4 relative z-10", className)}>
    <div className="flex items-center gap-3">
      <Sparkles size={6} className="text-heritage/20" />
      <Star size={8} className="text-heritage/30" />
      <Sparkles size={6} className="text-heritage/20" />
    </div>
  </div>
);

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      title: 'Share your requirements',
      desc: 'Tell us your event date, budget, location, type of venue, guest count, etc.',
      image: '/decor-1.jpg'
    },
    {
      title: 'Get a personalised proposal',
      desc: 'Get the best deals on venue, catering, and decor as per your preferences.',
      image: '/decor-2.jpg'
    },
    {
      title: 'Confirm and book',
      desc: 'Pay a minimum amount & lock the deal within 7 days. Leave the rest to us.',
      image: '/decor-4.jpg'
    }
  ];

  useGSAP(() => {
    if (!sectionRef.current || !stepsRef.current) return;

    const stepItems = gsap.utils.toArray<HTMLElement>('.step-item');
    const stepNumbers = gsap.utils.toArray<HTMLElement>('.step-number');
    const stepContents = gsap.utils.toArray<HTMLElement>('.step-content');
    
    // Create the pinning timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=2500",
        pin: true,
        scrub: 0.5,
        anticipatePin: 1
      }
    });

    // Initial state
    gsap.set(stepItems, { opacity: 0.3 });
    gsap.set(stepItems[0], { opacity: 1 });
    gsap.set('.step-progress-line', { scaleY: 0 });

    // Animate through steps
    stepItems.forEach((_, i) => {
      if (i === 0) {
        tl.to('.step-progress-line', { 
            scaleY: 1 / steps.length, 
            ease: 'none',
            duration: 1
        });
      } else {
        // Fade out previous
        tl.to(stepItems[i-1], { opacity: 0.3, duration: 0.5 }, i === 1 ? ">" : ">");
        
        // Image transition
        tl.to('.step-image-inner', { 
          y: `-${i * 100}%`, 
          duration: 1, 
          ease: 'power2.inOut' 
        }, "<");

        // Fade in current
        tl.to(stepItems[i], { opacity: 1, duration: 0.5 }, "<");
        
        // Progress line
        tl.to('.step-progress-line', { 
            scaleY: (i + 1) / steps.length, 
            ease: 'none',
            duration: 1
        }, "<");
      }

      // Add a small pause at each step
      tl.to({}, { duration: 1 });
    });

    // Floating animation for image container
    gsap.to('.floating-image-container', {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="process" className="py-20 md:py-24 bg-[#FDFCF0] relative overflow-hidden min-h-screen lg:h-screen flex items-center">
      {/* Decorative Petals */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
         {[...Array(6)].map((_, i) => (
           <div key={i} className={cn("absolute w-8 h-8 bg-burnished/20 rounded-full blur-xl animate-pulse")} 
                style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDelay: `${i * 0.5}s` }} />
         ))}
      </div>

      <div className="container">
        <div className="flex flex-col items-center text-center mb-8 md:mb-16 space-y-4">
          <div className="flex items-center gap-6 md:gap-12">
            <div className="hidden md:block w-32 h-px bg-burnished/40 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-burnished" />
            </div>
            <h2 className="text-4xl md:text-7xl font-serif font-medium tracking-tighter text-text-primary">How it works</h2>
            <div className="hidden md:block w-32 h-px bg-burnished/40 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-burnished" />
            </div>
          </div>
          <p className="text-heritage font-serif italic text-lg md:text-xl opacity-80">Book your wedding service in 3 easy steps</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-24 max-w-7xl mx-auto">
          {/* Left: Steps */}
          <div ref={stepsRef} className="steps-container flex flex-col basis-1/2 space-y-4 relative">
            {/* Connecting Line (Dotted) */}
            <div className="absolute left-[21px] md:left-[27px] top-6 bottom-6 w-px border-l-2 border-dotted border-burnished/20" />
            {/* Progress Line (Solid Maroon) */}
            <div className="step-progress-line absolute left-[21px] md:left-[27px] top-6 bottom-6 w-[3px] bg-heritage origin-top scale-y-0 z-0" />
            
            {steps.map((step, i) => (
              <div 
                key={i} 
                className="step-item relative pl-16 md:pl-28 py-4 transition-all duration-1000"
              >
                {/* Number Circle */}
                <div className="step-number absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center text-lg md:text-2xl font-serif italic transition-all duration-700 z-10 border bg-white text-burnished border-burnished/20">
                  {i + 1}
                </div>
                
                <div className="step-content space-y-2">
                  <h3 className="text-xl md:text-4xl font-serif font-bold tracking-tight transition-all duration-700 leading-none text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-lg italic font-light font-serif">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Circular Illustration Container */}
          <div className="relative basis-1/2 w-full flex items-center justify-center">
            <div className="floating-image-container relative w-[280px] h-[280px] md:w-[450px] md:h-[450px]">
              {/* Background Flourish Pattern */}
              <div className="absolute inset-0 opacity-10 scale-150 animate-[spin_80s_linear_infinite]">
                 <svg viewBox="0 0 200 200" className="w-full h-full text-burnished">
                    <defs>
                      <path id="petal" d="M100,20 Q130,60 100,100 Q70,60 100,20" />
                    </defs>
                    {[...Array(12)].map((_, i) => (
                      <use key={i} href="#petal" fill="currentColor" transform={`rotate(${i * 30} 100 100)`} />
                    ))}
                 </svg>
              </div>

              {/* Main Circle */}
              <div className="absolute inset-0 rounded-full border-[12px] border-white shadow-[0_30px_100px_rgba(0,0,0,0.1)] overflow-hidden bg-white p-2 md:p-4">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-canvas">
                  <div className="step-image-inner absolute inset-0 w-full h-full transition-transform duration-1000 ease-expo">
                    {steps.map((step, i) => (
                      <div key={i} className="w-full h-full relative">
                        <Image 
                          src={step.image} 
                          alt={step.title} 
                          fill 
                          className="object-cover" 
                          sizes="(max-width: 768px) 320px, 550px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-heritage/20 to-transparent" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Corner Flourishes */}
              <div className="absolute -top-10 -left-10 w-32 h-32 text-burnished opacity-20 rotate-[-15deg]">
                 <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M10,90 Q10,10 90,10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="10" cy="90" r="2" fill="currentColor" />
                    <circle cx="90" cy="10" r="2" fill="currentColor" />
                 </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-20 md:mt-32 space-y-12">
          <Magnetic strength={0.2}>
            <a 
              href={getGenericWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-16 md:h-20 px-12 md:px-20 text-[10px] md:text-[11px] bg-[#9B224E] text-white hover:bg-[#801b40] shadow-[0_20px_50px_rgba(155,34,78,0.3)] transition-all hover:scale-105 rounded-full tracking-[0.3em] md:tracking-[0.5em] font-bold border-0 flex items-center justify-center uppercase"
            >
              Start my wedding planning
            </a>
          </Magnetic>
          
          <div className="flex items-center gap-4 opacity-40">
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
        <section id="hero" className="relative h-screen flex items-center overflow-hidden" data-bg="var(--color-canvas)">
          <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10 pointer-events-none" />
          
          <div className="absolute inset-0 z-0">
            {heroImages.map((img, i) => {
              if (i !== 0 && !isMounted) return null;
              return (
                <div key={img} className={cn("absolute inset-0 transition-opacity duration-[3000ms] ease-in-out", i === currentHeroIndex ? "opacity-100" : "opacity-0")}>
                  <Image src={img} alt="Event" fill className="object-cover brightness-[0.7] scale-110 animate-[ken-burns_40s_ease-in-out_infinite_alternate]" priority={i === 0} sizes="100vw" />
                </div>
              );
            })}
          </div>

          <div className="container relative z-20 text-center flex flex-col items-center">
            <div className="hero-badge flex flex-col items-center gap-3 mb-8">
              <span className="text-[10px] font-mono text-white/90 uppercase tracking-[0.8em] small-caps">Premium Event Planners</span>
              <div className="h-10 w-[1px] bg-burnished/60" />
            </div>
            
            <h1 className="hero-title text-4xl md:text-[4.4rem] lg:text-[5.2rem] font-serif font-medium tracking-tight text-white leading-[1.1] drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] max-w-5xl">
              <span className="block header-fade">We Design Events That</span>
              <span className="block header-fade text-burnished italic font-light">People Never Forget</span>
            </h1>

            <p className="hero-desc text-base md:text-xl text-white/90 max-w-2xl leading-relaxed font-sans font-light mt-8 mb-12 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
              From luxury weddings to corporate experiences — we plan, design & execute seamlessly.
            </p>

            <div className="hero-btns flex flex-col sm:flex-row items-center gap-6">
              <Magnetic strength={0.2}>
                <Link href="/contact">
                  <Button size="lg" className="h-16 px-16 text-[10px] border-0 shadow-2xl transition-all hover:scale-105" rightIcon={<ArrowRight size={16} />}>
                    Plan Your Event
                  </Button>
                </Link>
              </Magnetic>
              <Magnetic strength={0.1}>
                <Link href="/gallery">
                  <Button variant="outline" size="lg" className="h-16 px-16 text-[10px] border-white/60 !text-white hover:bg-white hover:!text-text-primary transition-all">
                    View Our Work
                  </Button>
                </Link>
              </Magnetic>
            </div>
          </div>
        </section>

        {/* 2. Trust Strip */}
        <section className="bg-heritage pt-12 pb-10 relative z-30 overflow-hidden border-y border-white/5">
          <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.08)_0%,_transparent_70%)] pointer-events-none" />
          <BackgroundFlourish type="architectural" className="bottom-[-20%] right-[-5%] w-64 h-64 text-white/5 rotate-12" parallaxSpeed={0.02} />

          <div className="container relative z-10">
            <div className="grid grid-cols-3 gap-4 md:gap-12">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex flex-col items-center text-center group">
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center text-white/80 group-hover:bg-burnished group-hover:text-white transition-all duration-1000 border border-white/10 group-hover:border-burnished/50 shadow-2xl mb-3 md:mb-5 relative">
                     <div className="absolute inset-0 rounded-full bg-white/5 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-0 transition-all duration-1000" />
                     <div className="scale-50 md:scale-75">
                        {i === 0 && <Sparkles size={18} />}
                        {i === 1 && <Users size={18} />}
                        {i === 2 && <Star size={18} />}
                     </div>
                   </div>
                   <div className="flex flex-col items-center">
                      <span className="text-2xl md:text-4xl lg:text-5xl font-serif text-white italic tracking-tighter leading-none font-bold">
                        <Counter value={stat.value} />
                      </span>
                      <div className="h-px w-4 md:w-8 bg-burnished/40 my-2 md:my-3 group-hover:w-12 transition-all duration-1000" />
                      <span className="text-[7px] md:text-[10px] font-sans uppercase tracking-[0.2em] md:tracking-[0.4em] text-white/70 group-hover:text-white transition-colors font-black">
                        {stat.label}
                      </span>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* 3. Recent Work (Portfolio) */}
        <section id="gallery" className="py-12 md:py-16 bg-canvas" data-bg="var(--color-canvas)">
          <div className="container space-y-16">
            <div className="text-center space-y-4 fade-up">
              <TextReveal text="Our Recent Work" className="text-4xl md:text-7xl font-serif font-medium tracking-tighter" />
            </div>
            <Gallery items={galleryItems} aspectRatio="aspect-[16/10]" />
            <div className="flex justify-center pt-8">
              <Link href="/gallery">
                <Button className="h-16 px-16 text-[10px] shadow-lg hover:scale-105">View All Projects</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Services Section */}
        <section id="services" className="py-16 bg-surface relative overflow-hidden border-t border-linen/40" data-bg="var(--color-surface)">
          <div className="container space-y-16">
            <div className="flex flex-col items-center text-center space-y-4 fade-up relative z-10">
              <TextReveal text="Our Services" className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-text-primary tracking-tighter" />
              <p className="text-base text-text-secondary font-sans font-light max-w-xl leading-relaxed">
                From luxury weddings to corporate experiences — we plan, design & execute seamlessly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {[
                { title: 'Luxury Weddings', desc: 'Luxury wedding planning that reflects your unique love story.', img: '/decor-1.jpg' },
                { title: 'Corporate Events', desc: 'Professional event management for high-stakes business experiences.', img: '/decor-4.jpg' },
                { title: 'Social Events', desc: 'Intimate and grand celebrations for life\'s most precious moments.', img: '/hero-7.jpg' },
              ].map((service, i) => (                <div key={i} className="bg-white p-8 space-y-6 group hover:-translate-y-2 transition-all duration-700 flex flex-col items-center text-center shadow-sm hover:shadow-xl rounded-2xl border border-linen/20">
                  <div className="aspect-square w-full rounded-xl overflow-hidden mb-4">
                    <Image src={service.img} alt={service.title} width={600} height={600} className="object-cover h-full w-full grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-serif font-bold text-text-primary italic">{service.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed font-light">{service.desc}</p>
                    <Link href="/services" className="inline-block mt-4 text-[10px] uppercase tracking-[0.4em] font-bold text-heritage border-b border-heritage/20 pb-1 hover:border-heritage transition-all small-caps">Learn More</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Why Are We Better? */}
        <section id="why-are-we-better" className="py-20 bg-[#F9FBF9] relative overflow-hidden border-t border-linen/30 shadow-[0_-20px_50px_rgba(0,0,0,0.02)]" data-bg="#F9FBF9">
          <div className="absolute top-0 left-0 w-full h-12 bg-canvas/30 backdrop-blur-sm -translate-y-full" />
          
          <div className="container space-y-12 relative z-10">
            <div className="flex flex-col items-center text-center space-y-4 fade-up">
              <TextReveal text="Why are we better?" className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-text-primary tracking-tighter" />
              <p className="text-base text-text-secondary font-sans font-light max-w-xl leading-relaxed">
                Because we bring our years of experience in planning your wedding.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Exclusive Deals', 
                  desc: 'Best deals made only for you tailored to your preferences.', 
                  icon: <Gift size={40} strokeWidth={1} />,
                  accent: 'bg-orange-50 text-orange-400'
                },
                { 
                  title: 'Expert Insights', 
                  desc: 'Our wedding experts know how to craft the best for you.', 
                  icon: <Lightbulb size={40} strokeWidth={1} />,
                  accent: 'bg-yellow-50 text-yellow-400'
                },
                { 
                  title: 'Stress-free Experience', 
                  desc: "From venue recce to last second of your wedding, we'll be with you.", 
                  icon: <Sparkles size={40} strokeWidth={1} />,
                  accent: 'bg-purple-50 text-purple-400'
                },
              ].map((item, i) => (
                <div key={i} className="bg-white p-12 space-y-8 fade-up group hover:-translate-y-2 transition-all duration-700 flex flex-col items-center text-center shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] rounded-[2.5rem] border border-linen/10 relative overflow-hidden">
                  <div className={cn("w-24 h-24 rounded-full flex items-center justify-center transition-transform duration-700 group-hover:scale-110", item.accent)}>
                    {item.icon}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-text-primary">{item.title}</h3>
                    <p className="text-base text-text-secondary font-sans font-light leading-relaxed px-2">{item.desc}</p>
                  </div>
                  
                  {/* Subtle Decoration */}
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-transparent via-heritage/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CTA Strip (MID CTA) */}
        <section className="bg-heritage py-16 relative overflow-hidden border-y border-white/5">
          <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />
          <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white italic tracking-tight">Ready to Plan Your Event?</h2>
              <p className="text-white/70 font-serif italic text-lg md:text-xl max-w-xl">
                Let&apos;s turn your vision into an extraordinary reality. Connect with our concierge team to start your journey.
              </p>
            </div>
            <Link href="/contact">
              <Button size="lg" className="h-16 px-16 text-[10px] bg-burnished text-white hover:bg-burnished-light transition-all shadow-2xl border-0 hover:scale-105">
                Plan Your Event
              </Button>
            </Link>
          </div>
        </section>

        {/* 7. How We Work */}
        <HowItWorks />

        {/* 8. Testimonials */}
        <section id="testimonials" className="py-20 bg-surface border-y border-linen/30 relative overflow-hidden" data-bg="var(--color-surface)">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.05)_0%,_transparent_70%)] pointer-events-none" />
          <BackgroundFlourish type="floral" className="top-[-10%] left-[-5%] w-96 h-96 text-heritage/5 -rotate-12" parallaxSpeed={0.03} />
          
          <div className="container relative z-10 space-y-16">
            <div className="flex flex-col items-center text-center space-y-4 fade-up">
              <TextReveal text="Clients" className="text-4xl md:text-7xl font-serif font-medium text-text-primary tracking-tighter" />
              <p className="text-lg font-serif italic font-light text-text-secondary max-w-xl mx-auto">
                What they say about their bespoke event experiences.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto fade-up">
              <div className="overflow-hidden min-h-[500px] flex items-center relative">
                {testimonials.map((t, i) => (
                  <div 
                    key={t.id} 
                    className={cn(
                      "w-full transition-all duration-1000 ease-expo absolute inset-0 flex flex-col items-center justify-center text-center space-y-8",
                      i === currentTestimonial ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-20 pointer-events-none"
                    )}
                  >
                    <div className="w-1 h-1 rounded-full bg-heritage/40 mb-2" />

                    <div className="flex gap-1.5 text-burnished">
                      {[...Array(5)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}
                    </div>
                    
                    <p className="text-2xl md:text-4xl lg:text-5xl font-serif italic text-text-primary leading-[1.3] tracking-tight max-w-3xl">
                      &quot;{t.content}&quot;
                    </p>

                    <div className="relative w-10 h-10 flex items-center justify-center my-4">
                      <div className="absolute inset-0 border border-linen rounded-full scale-75 opacity-40" />
                      <div className="w-1 h-1 bg-heritage rounded-full" />
                    </div>

                    <div className="flex flex-col items-center gap-6">
                      <div className="w-24 h-24 rounded-full overflow-hidden border border-linen/30 shadow-xl relative">
                        <Image 
                          src={t.avatar} 
                          alt={t.author} 
                          width={96} 
                          height={96} 
                          className="object-cover w-full h-full" 
                        />
                      </div>
                      
                      <div className="relative flex items-center justify-center w-full min-w-[300px]">
                        <button 
                          onClick={(e) => { e.stopPropagation(); prevTestimonial(); }}
                          className="absolute left-0 p-4 text-text-primary/40 hover:text-heritage transition-colors duration-500"
                          aria-label="Previous"
                        >
                          <ChevronLeft size={20} strokeWidth={1} />
                        </button>

                        <div className="space-y-1.5 px-16">
                          <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-text-primary">{t.author}</h4>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-heritage font-bold">{t.event}</p>
                        </div>

                        <button 
                          onClick={(e) => { e.stopPropagation(); nextTestimonial(); }}
                          className="absolute right-0 p-4 text-text-primary/40 hover:text-heritage transition-colors duration-500"
                          aria-label="Next"
                        >
                          <ChevronRight size={20} strokeWidth={1} />
                        </button>
                      </div>

                      <div className="flex gap-2 pt-2">
                        {testimonials.map((_, dotIdx) => (
                          <div 
                            key={dotIdx}
                            className={cn(
                              "h-[2px] transition-all duration-1000 ease-expo rounded-full",
                              dotIdx === currentTestimonial ? "w-8 bg-heritage" : "w-2 bg-linen"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 9. Instagram Section */}
        <section className="py-16 bg-canvas" data-bg="var(--color-canvas)">
          <div className="container space-y-16">
            <div className="text-center space-y-4 fade-up">
              <span className="text-[10px] font-mono text-heritage/60 uppercase tracking-[0.6em] small-caps">Social</span>
              <h2 className="text-4xl md:text-7xl font-serif font-medium tracking-tighter">See Our Events Live</h2>
              <p className="text-base text-text-secondary max-w-md mx-auto">Follow our journey and real-time event moments.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer">
                  <Image src={`/hero-${i}.jpg`} alt="Instagram post" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-heritage/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <InstagramIcon className="text-white w-8 h-8" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Final CTA */}
        <section id="cta" className="relative py-20 bg-heritage overflow-hidden" data-bg="var(--color-heritage)">
          <div className="absolute inset-0 z-0 opacity-10">
             <Image src="/hero10.jpg" alt="Background" fill className="object-cover" />
          </div>
          
          <div className="container relative z-10 text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-7xl font-serif font-medium tracking-tighter text-white leading-[0.9]">
                Let&apos;s Create Something <br/><span className="italic font-light text-burnished">Unforgettable</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/80 font-serif italic font-light leading-relaxed max-w-2xl mx-auto">
                Let&apos;s plan your perfect event.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Magnetic strength={0.2}>
                <Link href="/contact">
                  <Button size="lg" className="h-20 px-20 text-[11px] bg-white text-heritage hover:bg-linen shadow-2xl transition-all hover:scale-105" rightIcon={<ArrowRight size={20} />}>
                    Plan Your Event
                  </Button>
                </Link>
              </Magnetic>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
