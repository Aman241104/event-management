'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    id: '01',
    label: 'BRIEFING',
    title: 'The Insight',
    description: 'We begin by understanding your vision in detail, capturing every specific requirement to set the foundation for a perfect event.',
    image: '/assets/wedding/wedding-5.jpg'
  },
  {
    id: '02',
    label: 'PLANNING',
    title: 'The Design',
    description: 'Developing a comprehensive strategy and a visual mood board that brings your concepts to life through intentional design.',
    image: '/assets/corporate/corporate-6.jpg'
  },
  {
    id: '03',
    label: 'CURATION',
    title: 'The Partners',
    description: 'Securing the ideal venue and premium vendors, managing every booking to ensure absolute quality and logistical synergy.',
    image: '/assets/production/production-1.jpg'
  },
  {
    id: '04',
    label: 'EXECUTION',
    title: 'The Event',
    description: 'On-site management where our team orchestrates every detail in real-time, delivering a flawless and cinematic experience.',
    image: '/assets/wedding/wedding-7.jpg'
  },
  {
    id: '05',
    label: 'SUCCESS',
    title: 'The Impact',
    description: 'A perfectly realized event that exceeds expectations, leaving your guests inspired and your milestones beautifully celebrated.',
    image: '/assets/wedding/wedding-3.jpg'
  }
];

export const HowWeWork = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const playheadRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const totalSteps = steps.length;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${totalSteps * 100}%`,
          pin: true,
          scrub: 1.5,
          invalidateOnRefresh: true,
        }
      });

      // Progress bar and playhead move throughout the entire timeline
      tl.to(progressRef.current, { height: "100%", ease: "none", duration: totalSteps }, 0);
      tl.to(playheadRef.current, { top: "100%", ease: "none", duration: totalSteps }, 0);
      
      // Parallax for ghost text
      tl.to(".ghost-process-text", { xPercent: -20, ease: "none", duration: totalSteps }, 0);

      steps.forEach((_, index) => {
        const stepContent = `.step-content-${index}`;
        const stepImage = `.step-image-${index}`;
        const stepLabel = `.step-label-${index}`;

        const startTime = index;

        // Reveal the step (except the first one which is already visible)
        if (index > 0) {
          tl.fromTo(stepContent, 
            { autoAlpha: 0, y: 100 },
            { autoAlpha: 1, y: 0, duration: 0.8, ease: "expo.out" },
            startTime - 0.2 // Overlap with previous step hiding
          );
          tl.fromTo(stepLabel,
            { autoAlpha: 0, x: -30 },
            { autoAlpha: 1, x: 0, duration: 0.5 },
            startTime
          );
          tl.fromTo(stepImage,
            { clipPath: 'inset(20% 20% 20% 20%)', scale: 1.3, autoAlpha: 0 },
            { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, autoAlpha: 1, duration: 1, ease: "expo.out" },
            startTime - 0.2
          );
        }

        // Hide the step (except the last one)
        if (index < totalSteps - 1) {
          tl.to(stepContent, {
            autoAlpha: 0,
            y: -100,
            duration: 0.6,
            ease: "expo.in"
          }, startTime + 0.6); // Slightly later hide for more overlap
          
          tl.to(stepImage, {
            autoAlpha: 0,
            scale: 0.9,
            duration: 0.6,
            ease: "expo.in"
          }, startTime + 0.6);
        }
      });
    });

    // Mobile Layout (Horizontal Scroll)
    mm.add("(max-width: 1023px)", () => {
      gsap.utils.toArray<HTMLElement>('.mobile-scroll-step').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-[#05100a] overflow-hidden z-20 rounded-t-[3rem] md:rounded-t-[6rem] -mt-16"
      id="how-we-work"
    >
      {/* 1. Immersive Background Elements */}
      <div className="absolute inset-0 dot-pattern opacity-[0.05] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(212,185,130,0.08)_0%,_transparent_50%)] pointer-events-none" />
      
      {/* Ghost Background Title */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full select-none pointer-events-none overflow-hidden whitespace-nowrap opacity-[0.03] z-0">
        <span className="text-[25vw] font-serif italic text-white leading-none tracking-tighter block ghost-process-text">The Process</span>
      </div>

      {/* 2. Section Header - Editorial Style */}
      <div className="absolute top-10 lg:top-20 left-0 w-full z-30 pointer-events-none">
        <div className="container">
          <div className="flex flex-col items-center lg:items-start space-y-3 md:space-y-4">
             <div className="flex items-center gap-4">
               <div className="w-8 h-px bg-[#D4B982]/40" />
               <span className="text-[9px] md:text-[10px] text-[#D4B982] uppercase tracking-[0.6em] md:tracking-[0.8em] font-bold">THE METHODOLOGY</span>
             </div>
             <h2 className="text-3xl lg:text-7xl font-serif text-white tracking-tight">
               Path to <span className="italic font-script text-[#D4B982] lowercase text-5xl lg:text-8xl">Perfection</span>
             </h2>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block h-screen w-full relative">
        <div className="container h-full flex items-center pt-32 lg:pt-40 relative z-10">
          
          {/* 3. The Connecting Spine - Refined */}
          <div className="absolute left-10 md:left-16 xl:left-24 top-[25%] bottom-[25%] w-px bg-white/5 rounded-full">
            <div 
              ref={progressRef}
              className="absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-[#D4B982]/20 via-[#D4B982] to-[#D4B982]/20 shadow-[0_0_20px_rgba(212,185,130,0.4)]" 
            />
            {/* Ambient Playhead Light */}
            <div 
              ref={playheadRef}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#D4B982] shadow-[0_0_30px_#D4B982] z-10 border-4 border-[#05100a]"
            >
              <div className="absolute inset-0 rounded-full animate-ping bg-[#D4B982]/40" />
            </div>

            {/* Static Step Dots */}
            {steps.map((_, i) => (
              <div 
                key={i}
                className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/10"
                style={{ top: `${(i / (steps.length - 1)) * 100}%` }}
              />
            ))}
          </div>

          <div className="grid grid-cols-12 w-full gap-12 xl:gap-20 items-center">
            {/* Text Content Area */}
            <div className="col-span-7 lg:col-span-6 pl-20 md:pl-28 xl:pl-36">
              <div className="relative h-[300px] flex items-center">
                {steps.map((step, index) => (
                  <div 
                    key={step.id}
                    className={cn(
                      "absolute inset-0 flex flex-col justify-center space-y-10",
                      `step-content-${index}`,
                      index === 0 ? "visible opacity-100" : "invisible opacity-0"
                    )}
                  >
                    <div className={cn("flex items-center gap-6", `step-label-${index}`)}>
                       <span className="text-[14px] font-mono text-[#D4B982] font-bold tracking-[0.4em]">
                         {step.id}
                       </span>
                       <div className="w-12 h-px bg-[#D4B982]/30" />
                       <span className="text-[10px] font-mono text-white/40 tracking-[0.6em] uppercase">
                         {step.label}
                       </span>
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-5xl lg:text-6xl xl:text-7xl font-serif text-white leading-[1] tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-white/60 text-lg xl:text-xl max-w-md leading-relaxed font-light italic border-l border-[#D4B982]/20 pl-8">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visuals Area - "Lens" Frame */}
            <div className="col-span-5 lg:col-span-6">
              <div className="relative aspect-[16/10] w-full overflow-hidden shadow-2xl border border-white/5 bg-heritage/20 backdrop-blur-sm group">
                {steps.map((step, index) => (
                  <div 
                    key={step.id}
                    className={cn(
                      "absolute inset-0",
                      `step-image-${index}`,
                      index === 0 ? "visible opacity-100" : "invisible opacity-0"
                    )}
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent opacity-60" />
                  </div>
                ))}
                
                {/* Modern Lens Frame Overlay */}
                <div className="absolute inset-0 pointer-events-none border border-white/10 mix-blend-overlay z-20" />
                <div className="absolute inset-8 pointer-events-none border border-[#D4B982]/10 z-20" />
                
                {/* Corners */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#D4B982]/40 z-30" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#D4B982]/40 z-30" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Clean Vertical List */}
      <div className="lg:hidden pt-36 pb-16 px-6 space-y-16 relative z-10">
        {steps.map((step, index) => (
          <div 
            key={step.id}
            className="mobile-scroll-step space-y-6"
          >
            <div className="relative">
              <div className="relative aspect-[16/9] w-full overflow-hidden border border-white/10 shadow-2xl rounded-xl">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <div className="absolute -top-3 -right-1 bg-[#121212] px-3 py-1 border-l-2 border-[#D4B982] shadow-2xl">
                <span className="text-[9px] font-mono text-white tracking-[0.3em] font-bold">
                  {step.id}
                </span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="space-y-0.5">
                <span className="text-[9px] text-[#D4B982] font-mono tracking-[0.3em] uppercase">{step.label}</span>
                <h3 className="text-2xl font-serif text-white tracking-wide">{step.title}</h3>
              </div>
              <p className="text-white/60 text-xs leading-relaxed font-light italic border-l border-[#D4B982]/20 pl-4">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
