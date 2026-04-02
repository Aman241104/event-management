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
  { id: 1, title: 'Royal Palace Wedding', category: 'Weddings', image: '/decor-1.jpg', size: 'large' as const },
  { id: 2, title: 'Elegant Gala Design', category: 'Design', image: '/decor-2.jpg', size: 'tall' as const },
  { id: 3, title: 'Traditional Celebration', category: 'Weddings', image: '/decor-3.jpg', size: 'medium' as const },
  { id: 4, title: 'Modern Event Decor', category: 'Production', image: '/decor-4.jpg', size: 'medium' as const },
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
    <main ref={mainRef} className="min-h-screen bg-canvas flex flex-col overflow-x-hidden relative transition-colors duration-1000 pb-16">
      <div ref={containerRef} className="relative w-full">
        <FloatingDecor />
        <SVGSpine height="6000px" viewBox="0 0 20 6000" pathD="M 10 0 L 10 6000" className="opacity-[0.05]" />
        
        <BackgroundFlourish type="floral" className="top-[5%] left-[5%] w-64 h-64 text-heritage/5" parallaxSpeed={0.05} />
        <BackgroundFlourish type="architectural" className="top-[15%] right-[2%] w-96 h-96 text-heritage/5" parallaxSpeed={0.08} />

        {/* 1. Hero Section */}
        <section id="hero" className="relative h-[85vh] flex items-center overflow-hidden" data-bg="var(--color-canvas)">
          <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10 pointer-events-none" />
          
          <div className="absolute inset-0 z-0">
            {heroImages.map((img, i) => (
              <div key={img} className={cn("absolute inset-0 transition-opacity duration-[3000ms] ease-in-out", i === currentHeroIndex ? "opacity-100" : "opacity-0")}>
                <Image src={img} alt="Event" fill className="object-cover brightness-[0.85] scale-110 animate-[ken-burns_40s_ease-in-out_infinite_alternate]" priority={i === 0} sizes="100vw" />
              </div>
            ))}
          </div>

          <div className="container relative z-20 text-center flex flex-col items-center">
            <div className="hero-badge flex flex-col items-center gap-3 mb-6">
              <span className="text-[9px] font-mono text-white/80 uppercase tracking-[0.8em] small-caps">Since 2026</span>
              <div className="h-6 w-[1px] bg-white/40" />
            </div>
            
            <h1 className="hero-title text-5xl md:text-[7rem] lg:text-[8rem] font-serif font-medium tracking-tight text-white leading-[0.9] drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
              <span className="block header-fade">Beautiful</span>
              <span className="block header-fade text-burnished italic font-light my-2">Events.</span>
              <span className="block header-fade text-4xl md:text-6xl font-sans tracking-[0.2em] font-light mt-4 uppercase">Simple & Elegant.</span>
            </h1>

            <p className="hero-desc text-base md:text-lg text-white max-w-xl leading-relaxed font-sans font-light mt-8 mb-10 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] opacity-90">
              We plan luxury events with care and creativity, making every detail perfect for you.
            </p>

            <div className="hero-btns flex flex-col sm:flex-row items-center gap-8">
              <Magnetic strength={0.2}>
                <Link href="/contact">
                  <Button size="lg" className="h-16 px-16 text-[9px] btn-prestige bg-white text-text-primary hover:bg-heritage hover:text-white border-0 shadow-2xl transition-transform hover:scale-105" rightIcon={<ArrowRight size={16} />}>
                    Plan Your Event
                  </Button>
                </Link>
              </Magnetic>
              <Link href="/gallery" className="text-[9px] uppercase tracking-[0.6em] text-white border-b border-white/20 pb-1 hover:border-burnished transition-all font-bold">
                View Gallery
              </Link>
            </div>
          </div>
        </section>

        <FloatingMetric label="Our Goal" value="Perfect Moments" className="top-[95vh] left-[15%]" />

        {/* 2. About Preview */}
        <section id="about" className="pt-8 pb-12 bg-canvas relative overflow-hidden" data-bg="var(--color-canvas)">
          <div className="container flex flex-col items-center relative z-10">
            <div className="max-w-4xl text-center space-y-6 mb-12 fade-up">
              <div className="space-y-2">
                <span className="text-[9px] font-mono text-heritage/60 uppercase tracking-[0.6em] small-caps">01 / OUR STORY</span>
                <TextReveal text="Real Moments." className="text-5xl md:text-8xl font-serif font-medium text-text-primary tracking-tighter" />
              </div>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-sans font-light max-w-2xl mx-auto">
                We believe true luxury is simple. We focus on real emotions and careful planning to create moments you will always remember.
              </p>
              <div className="pt-4">
                <Link href="/about" className="group inline-flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-linen flex items-center justify-center group-hover:bg-heritage group-hover:text-canvas transition-all duration-700">
                    <MoveRight className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-700" />
                  </div>
                  <span className="uppercase tracking-[0.4em] text-[9px] font-bold text-text-primary">Read More</span>
                </Link>
              </div>
            </div>
            
            <div className="w-full max-w-5xl relative fade-up">
              <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden arch-mask shadow-sm bg-surface">
                <Image src="/hero-9.jpg" alt="Event Decor" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* 3. Services Section */}
        <section id="services" className="py-12 bg-heritage-soft/30 relative overflow-hidden" data-bg="var(--color-heritage-soft)">
          <div className="container space-y-12">
            <div className="flex flex-col items-center text-center space-y-4 fade-up relative z-10">
              <span className="text-[9px] font-mono text-heritage uppercase tracking-[0.6em] small-caps">02 / EXPERTISE</span>
              <TextReveal text="Simple Planning." className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-text-primary tracking-tighter" />
              <p className="text-sm text-text-secondary font-sans font-light max-w-md leading-relaxed">
                We make planning easy and calm, handling every detail so you can enjoy your celebration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-heritage/5 border border-heritage/5 relative z-10">
              {[
                { title: 'Planning', desc: 'We manage everything so you can relax.', img: '/decor-1.jpg' },
                { title: 'Design', desc: 'Beautiful spaces created just for you.', img: '/decor-2.jpg' },
                { title: 'Execution', desc: 'We make sure everything works perfectly.', img: '/decor-3.jpg' },
              ].map((service, i) => (
                <div key={i} className="bg-canvas p-8 space-y-6 group hover:bg-white transition-all duration-700 flex flex-col items-center text-center border border-transparent hover:border-heritage/10">
                  <div className="aspect-[4/5] w-full overflow-hidden arch-mask shadow-sm">
                    <Image src={service.img} alt={service.title} width={600} height={800} className="object-cover h-full w-full grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000" />
                  </div>
                  <div className="space-y-2 flex flex-col items-center">
                    <h3 className="text-xl font-serif font-bold text-text-primary italic">{service.title}</h3>
                    <p className="text-[12px] text-text-secondary leading-relaxed font-light">{service.desc}</p>
                    <Link href="/services" className="mt-2 text-[8px] uppercase tracking-[0.4em] font-bold text-heritage border-b border-heritage/10 pb-1 hover:border-heritage transition-all small-caps">Learn More</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Specialization */}
        <section id="specialization" className="py-12 bg-canvas relative overflow-hidden" data-bg="var(--color-canvas)">
          <div className="container space-y-12 relative z-10">
            <div className="flex flex-col items-center text-center space-y-4 fade-up">
              <span className="text-[9px] font-mono text-heritage/60 uppercase tracking-[0.6em] small-caps">03 / EVENTS</span>
              <TextReveal text="Your Special Day." className="text-5xl md:text-8xl font-serif font-medium text-text-primary tracking-tighter" />
              <p className="text-sm text-text-secondary font-sans font-light max-w-md leading-relaxed">
                From grand weddings to small parties, we bring the same care and elegance to every event.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventTypes.map((type, i) => (
                <div key={i} className="group relative aspect-square overflow-hidden cursor-pointer bg-surface arch-mask shadow-sm">
                  <Image src={type.image} alt={type.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-heritage/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute inset-x-4 bottom-4 p-6 bg-canvas/90 backdrop-blur-md border border-linen translate-y-2 group-hover:translate-y-0 transition-transform duration-700 flex flex-col items-center text-center">
                    <span className="text-heritage/70 mb-2">{type.icon}</span>
                    <h4 className="text-xl font-serif font-bold text-text-primary italic">{type.title}</h4>
                    <p className="text-[11px] text-text-secondary font-light mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700">{type.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Statistics */}
        <section id="stats" className="py-16 bg-heritage relative overflow-hidden" data-bg="var(--color-heritage)">
          <div className="container relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center fade-up">
              {stats.map((stat, i) => (
                <div key={stat.label} className="space-y-2">
                  <div className="text-4xl md:text-6xl font-serif font-medium text-canvas italic">{stat.value}</div>
                  <div className="text-[8px] uppercase tracking-[0.4em] text-canvas/50 font-bold small-caps">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Gallery */}
        <section id="gallery" className="py-12 bg-canvas" data-bg="var(--color-canvas)">
          <div className="container space-y-12">
            <div className="text-center space-y-2 fade-up">
              <span className="text-[9px] font-mono text-heritage/60 uppercase tracking-[0.6em] small-caps">04 / ARCHIVE</span>
              <TextReveal text="Recent Work" className="text-5xl md:text-8xl font-serif font-medium tracking-tighter" />
            </div>
            <Gallery items={galleryItems} />
            <div className="flex justify-center pt-8">
              <Link href="/gallery">
                <Button variant="outline" className="btn-outline-prestige h-14 px-12 text-[9px] border-linen hover:border-heritage">See All Work</Button>
              </Link>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* 7. Testimonials */}
        <section id="testimonials" className="py-12 bg-surface border-y border-linen/30" data-bg="var(--color-surface)">
          <div className="container space-y-12">
            <div className="flex flex-col items-center text-center space-y-4 fade-up">
              <span className="text-[9px] font-mono text-heritage/60 uppercase tracking-[0.6em] small-caps">05 / VOICES</span>
              <TextReveal text="Happy Clients." className="text-5xl md:text-8xl font-serif font-medium text-text-primary tracking-tighter" />
              <p className="text-lg font-serif italic font-light text-text-secondary max-w-xl mx-auto">
                "Our goal is to make sure your celebration is a beautiful memory for you and every guest."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-heritage/10 border border-heritage/10">
              {testimonials.map((t) => (
                <div key={t.id} className="bg-canvas p-10 space-y-6 hover:bg-white transition-colors duration-700">
                  <div className="flex gap-1 text-heritage/40">
                    {[...Array(5)].map((_, i) => <Star key={i} size={8} fill="currentColor" />)}
                  </div>
                  <p className="text-base text-text-primary font-serif italic leading-relaxed">"{t.content}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-heritage/5">
                    <div className="w-10 h-10 rounded-full overflow-hidden grayscale opacity-70">
                      <Image src={t.avatar} alt={t.author} width={40} height={40} className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-primary">{t.author}</h4>
                      <p className="text-[8px] uppercase tracking-[0.1em] text-text-muted mt-0.5">{t.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Process */}
        <section id="process" className="py-12 bg-canvas relative overflow-hidden" data-bg="var(--color-canvas)">
          <div className="container space-y-12 relative z-10">
            <div className="flex flex-col items-center text-center space-y-4 fade-up">
              <span className="text-[9px] font-mono text-heritage/60 uppercase tracking-[0.6em] small-caps">06 / METHOD</span>
              <TextReveal text="How We Work." className="text-5xl md:text-7xl font-serif font-medium tracking-tighter" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="space-y-4 group fade-up flex flex-col items-center text-center">
                  <div className="text-[9px] font-mono text-text-muted mb-2 tracking-widest uppercase small-caps">Step / 0{i+1}</div>
                  <div className="w-12 h-12 rounded-full bg-heritage-soft border border-heritage/10 flex items-center justify-center text-heritage group-hover:bg-heritage group-hover:text-canvas transition-all duration-700">
                    {step.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-medium text-text-primary italic">{step.title}</h3>
                    <p className="text-[12px] text-text-secondary leading-relaxed font-light max-w-[180px]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Final CTA */}
        <section id="cta" className="relative py-16 bg-canvas overflow-hidden" data-bg="var(--color-canvas)">
          <div className="absolute inset-0 z-0">
             <Image src="/hero10.jpg" alt="Background" fill className="object-cover opacity-[0.02] grayscale" />
          </div>
          
          <div className="container relative z-10 text-center space-y-10">
            <div className="space-y-4">
              <span className="text-[9px] font-mono text-heritage/60 uppercase tracking-[0.8em] small-caps">COMMENCE</span>
              <h2 className="text-6xl md:text-9xl font-serif font-medium tracking-tighter text-text-primary leading-[0.85]">
                Start Your <br/><span className="text-heritage italic font-light">Story.</span>
              </h2>
            </div>

            <div className="max-w-2xl mx-auto space-y-8">
              <p className="text-lg md:text-xl text-text-secondary font-serif italic font-light leading-relaxed">
                Talk to us today to see how we can make your next big event perfect.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <Magnetic strength={0.2}>
                  <Link href="/contact">
                    <Button size="lg" className="h-16 px-16 text-[9px] btn-prestige shadow-2xl" rightIcon={<ArrowRight size={18} />}>
                      Book Now
                    </Button>
                  </Link>
                </Magnetic>
                <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-heritage transition-colors flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.4em] small-caps">
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
