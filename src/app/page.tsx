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
  { value: '500+', label: 'Events Planned' },
  { value: '100%', label: 'Happy Clients' },
  { value: '25+', label: 'Cities Visited' },
  { value: '15+', label: 'Years Experience' },
];

const testimonials = [
  { id: 1, content: "Zing Bliss made our wedding dream come true. Everything was perfect and stress-free.", author: "Anjali & Rahul", event: "Palace Wedding", avatar: "/hero-1.jpg" },
  { id: 2, content: "The team is professional and very creative. They handled our corporate gala with amazing care.", author: "Vikram S.", event: "Tech Summit", avatar: "/hero-2.jpg" },
  { id: 3, content: "Simply the best. They focus on the little things that make a big difference.", author: "Sonia M.", event: "Birthday Celebration", avatar: "/hero-3.jpg" },
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
        <SVGSpine height="6000px" viewBox="0 0 20 6000" pathD="M 10 0 L 10 6000" className="opacity-[0.05]" />
        
        <BackgroundFlourish type="floral" className="top-[5%] left-[5%] w-64 h-64 text-heritage/5" parallaxSpeed={0.05} />
        <BackgroundFlourish type="architectural" className="top-[15%] right-[2%] w-96 h-96 text-heritage/5" parallaxSpeed={0.08} />

        {/* 1. Hero Section */}
        <section id="hero" className="relative h-screen flex items-center overflow-hidden" data-bg="var(--color-canvas)">
          <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10 pointer-events-none" />
          
          <div className="absolute inset-0 z-0">
            {heroImages.map((img, i) => (
              <div key={img} className={cn("absolute inset-0 transition-opacity duration-[3000ms] ease-in-out", i === currentHeroIndex ? "opacity-100" : "opacity-0")}>
                <Image src={img} alt="Event" fill className="object-cover brightness-[0.7] scale-110 animate-[ken-burns_40s_ease-in-out_infinite_alternate]" priority={i === 0} sizes="100vw" />
              </div>
            ))}
          </div>

          <div className="container relative z-20 text-center flex flex-col items-center">
            <div className="hero-badge flex flex-col items-center gap-3 mb-8">
              <span className="text-[10px] font-mono text-white/90 uppercase tracking-[0.8em] small-caps">Premium Event Planners</span>
              <div className="h-10 w-[1px] bg-burnished/60" />
            </div>
            
            <h1 className="hero-title text-5xl md:text-[5.5rem] lg:text-[6.5rem] font-serif font-medium tracking-tight text-white leading-[1.1] drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] max-w-5xl">
              <span className="block header-fade">We Design Events That</span>
              <span className="block header-fade text-burnished italic font-light">People Never Forget</span>
            </h1>

            <p className="hero-desc text-base md:text-xl text-white/90 max-w-2xl leading-relaxed font-sans font-light mt-8 mb-12 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
              From luxury weddings to corporate experiences — we plan, design & execute seamlessly.
            </p>

            <div className="hero-btns flex flex-col sm:flex-row items-center gap-6">
              <Magnetic strength={0.2}>
                <Link href="/contact">
                  <Button size="lg" className="h-16 px-16 text-[10px] bg-heritage hover:bg-heritage-dark text-white border-0 shadow-2xl transition-all hover:scale-105" rightIcon={<ArrowRight size={16} />}>
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
        <section className="bg-white border-y border-linen/30 py-16 relative z-30">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-around items-center gap-12 md:gap-4">
              {[
                { label: 'Events Executed', value: '100+', icon: <Zap size={16} /> },
                { label: 'Happy Clients', value: '100+', icon: <Heart size={16} /> },
                { label: 'Years Experience', value: '10+', icon: <Star size={16} /> },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6 group">
                   <div className="w-12 h-12 rounded-full bg-heritage-soft flex items-center justify-center text-heritage group-hover:bg-heritage group-hover:text-white transition-all duration-700">
                     {stat.icon}
                   </div>
                   <div className="flex flex-col">
                      <span className="text-3xl md:text-4xl font-serif text-text-primary italic">
                        {stat.value}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-text-muted mt-1">
                        {stat.label}
                      </span>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Recent Work (Portfolio) */}
        <section id="gallery" className="py-32 bg-canvas" data-bg="var(--color-canvas)">
          <div className="container space-y-16">
            <div className="text-center space-y-4 fade-up">
              <span className="text-[10px] font-mono text-heritage/60 uppercase tracking-[0.6em] small-caps">Our Portfolio</span>
              <TextReveal text="Recent Work" className="text-5xl md:text-8xl font-serif font-medium tracking-tighter" />
            </div>
            <Gallery items={galleryItems} />
            <div className="flex justify-center pt-8">
              <Link href="/gallery">
                <Button variant="outline" className="btn-outline-prestige h-16 px-16 text-[10px] border-linen hover:border-heritage">View All Projects</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Services Section */}
        <section id="services" className="py-32 bg-surface relative overflow-hidden" data-bg="var(--color-surface)">
          <div className="container space-y-16">
            <div className="flex flex-col items-center text-center space-y-4 fade-up relative z-10">
              <span className="text-[10px] font-mono text-heritage uppercase tracking-[0.6em] small-caps">Expertise</span>
              <TextReveal text="Our Services" className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-text-primary tracking-tighter" />
              <p className="text-base text-text-secondary font-sans font-light max-w-xl leading-relaxed">
                From luxury weddings to corporate experiences — we plan, design & execute seamlessly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {[
                { title: 'Weddings', desc: 'Luxury wedding planning that reflects your unique love story.', img: '/decor-1.jpg' },
                { title: 'Corporate', desc: 'Professional event management for high-stakes business experiences.', img: '/decor-2.jpg' },
                { title: 'Social Events', desc: 'Intimate and grand celebrations for life\'s most precious moments.', img: '/decor-3.jpg' },
              ].map((service, i) => (
                <div key={i} className="bg-white p-8 space-y-6 group hover:-translate-y-2 transition-all duration-700 flex flex-col items-center text-center shadow-sm hover:shadow-xl rounded-2xl border border-linen/20">
                  <div className="aspect-square w-full rounded-xl overflow-hidden mb-4">
                    <Image src={service.img} alt={service.title} width={600} height={600} className="object-cover h-full w-full grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-serif font-bold text-text-primary italic">{service.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed font-light">{service.desc}</p>
                    <Link href="/services" className="inline-block mt-4 text-[10px] uppercase tracking-[0.4em] font-bold text-heritage border-b border-heritage/20 pb-1 hover:border-heritage transition-all small-caps">Learn More</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Why Choose Us */}
        <section id="why-choose-us" className="py-32 bg-canvas relative overflow-hidden" data-bg="var(--color-canvas)">
          <div className="container space-y-24 relative z-10">
            <div className="flex flex-col items-center text-center space-y-4 fade-up">
              <span className="text-[10px] font-mono text-heritage/60 uppercase tracking-[0.6em] small-caps">Excellence</span>
              <TextReveal text="Why Choose Us" className="text-5xl md:text-8xl font-serif font-medium text-text-primary tracking-tighter" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { title: 'End-to-End Management', desc: 'We handle every detail from the first spark of an idea to the final cleanup.', icon: <Sparkles size={24} /> },
                { title: 'On-Time Execution', desc: 'Precision timing and flawless logistics are the hallmarks of our service.', icon: <Zap size={24} /> },
                { title: 'Custom Event Experiences', desc: 'No two events are alike. We build bespoke experiences tailored to you.', icon: <Heart size={24} /> },
                { title: 'Experienced Team', desc: 'Over a decade of expertise in managing complex and high-profile events.', icon: <Users size={24} /> },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-8 fade-up group">
                  <div className="w-20 h-20 rounded-2xl bg-white shadow-sm border border-linen/50 flex items-center justify-center text-heritage group-hover:bg-heritage group-hover:text-white transition-all duration-700">
                    {item.icon}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif font-bold text-text-primary italic group-hover:text-heritage transition-colors">{item.title}</h3>
                    <p className="text-sm text-text-secondary font-light leading-relaxed max-w-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CTA Strip (MID CTA) */}
        <section className="bg-surface border-y border-linen/30 py-16 relative overflow-hidden">
          <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="text-3xl md:text-5xl font-serif text-text-primary italic">Ready to Plan Your Event?</h2>
            <Link href="/contact">
              <Button size="lg" className="h-14 px-12 text-[10px] bg-heritage text-white hover:bg-heritage-dark transition-colors shadow-xl">
                Plan Your Event
              </Button>
            </Link>
          </div>
        </section>

        {/* 7. How We Work */}
        <section id="process" className="py-32 bg-canvas relative overflow-hidden" data-bg="var(--color-canvas)">
          <div className="container space-y-24 relative z-10">
            <div className="flex flex-col items-center text-center space-y-4 fade-up">
              <span className="text-[10px] font-mono text-heritage/60 uppercase tracking-[0.6em] small-caps">Methodology</span>
              <TextReveal text="How We Work" className="text-5xl md:text-7xl font-serif font-medium tracking-tighter" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: 'Understand Your Vision', desc: 'We start by listening to your dreams and goals for the event.' },
                { title: 'Plan & Design', desc: 'Our team crafts a detailed blueprint and aesthetic direction.' },
                { title: 'Execute Seamlessly', desc: 'We manage all vendors and logistics with surgical precision.' },
                { title: 'Deliver Memorable Experience', desc: 'You and your guests enjoy an unforgettable celebration.' },
              ].map((step, i) => (
                <div key={i} className="space-y-6 group fade-up flex flex-col items-center text-center">
                  <div className="text-4xl font-serif italic text-heritage font-bold group-hover:scale-110 transition-transform duration-700">0{i+1}</div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-serif font-medium text-text-primary italic">{step.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed font-light">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Testimonials */}
        <section id="testimonials" className="py-24 bg-surface border-y border-linen/30" data-bg="var(--color-surface)">
          <div className="container space-y-16">
            <div className="flex flex-col items-center text-center space-y-4 fade-up">
              <span className="text-[10px] font-mono text-heritage/60 uppercase tracking-[0.6em] small-caps">Testimonials</span>
              <TextReveal text="Happy Clients" className="text-5xl md:text-8xl font-serif font-medium text-text-primary tracking-tighter" />
              <p className="text-lg font-serif italic font-light text-text-secondary max-w-xl mx-auto">
                "They made our wedding stress-free and unforgettable."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div key={t.id} className="bg-white p-10 space-y-6 hover:shadow-xl transition-all duration-700 rounded-2xl border border-linen/10">
                  <div className="flex gap-1 text-heritage/40">
                    {[...Array(5)].map((_, i) => <Star key={i} size={8} fill="currentColor" />)}
                  </div>
                  <p className="text-base text-text-primary font-serif italic leading-relaxed">"{t.content}"</p>
                  <div className="flex items-center gap-3 pt-6 border-t border-linen/30">
                    <div className="w-12 h-12 rounded-xl overflow-hidden grayscale opacity-70">
                      <Image src={t.avatar} alt={t.author} width={48} height={48} className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-primary">{t.author}</h4>
                      <p className="text-[9px] uppercase tracking-[0.1em] text-text-muted mt-0.5">{t.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Instagram Section */}
        <section className="py-24 bg-canvas" data-bg="var(--color-canvas)">
          <div className="container space-y-16">
            <div className="text-center space-y-4 fade-up">
              <span className="text-[10px] font-mono text-heritage/60 uppercase tracking-[0.6em] small-caps">Social</span>
              <h2 className="text-5xl md:text-8xl font-serif font-medium tracking-tighter">See Our Events Live</h2>
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
        <section id="cta" className="relative py-32 bg-heritage overflow-hidden" data-bg="var(--color-heritage)">
          <div className="absolute inset-0 z-0 opacity-10">
             <Image src="/hero10.jpg" alt="Background" fill className="object-cover" />
          </div>
          
          <div className="container relative z-10 text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-8xl font-serif font-medium tracking-tighter text-white leading-[0.9]">
                Let's Create Something <br/><span className="italic font-light text-burnished">Unforgettable</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/80 font-serif italic font-light leading-relaxed max-w-2xl mx-auto">
                Get in touch and let's plan your perfect event.
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
