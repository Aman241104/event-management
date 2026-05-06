'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';
import { TextReveal } from '@/components/atoms/TextReveal';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    id: '01',
    label: 'DISCOVERY',
    title: 'The Prelude',
    description: 'We begin by capturing the essence of your vision. Through deep consultation, we uncover the subtle nuances that will make your event uniquely yours.',
    image: '/assets/wedding/wedding-5.jpg'
  },
  {
    id: '02',
    label: 'CONCEPT',
    title: 'The Blueprint',
    description: 'Our designers sculpt a bespoke aesthetic narrative, blending contemporary luxury with timeless elegance to create a visual masterpiece.',
    image: '/assets/corporate/corporate-6.jpg'
  },
  {
    id: '03',
    label: 'CURATION',
    title: 'The Choreography',
    description: 'Precision in every detail. We curate a world-class network of vendors and partners, orchestrating each element into a seamless symphony.',
    image: '/assets/production/production-1.jpg'
  },
  {
    id: '04',
    label: 'PRODUCTION',
    title: 'The Performance',
    description: 'The moment of transformation. Our production team brings the blueprint to life with flawless execution and unwavering attention to detail.',
    image: '/assets/wedding/wedding-7.jpg'
  },
  {
    id: '05',
    label: 'LEGACY',
    title: 'The Encore',
    description: 'Beyond the event itself, we ensure the experience resonates. We create memories that endure as a legacy of celebration.',
    image: '/assets/wedding/wedding-3.jpg'
  }
];

export const HowWeWork = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
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
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });

      // Progress bar and playhead move throughout the entire timeline
      tl.to(progressRef.current, { height: "100%", ease: "none", duration: totalSteps }, 0);
      tl.to(playheadRef.current, { top: "100%", ease: "none", duration: totalSteps }, 0);

      steps.forEach((_, index) => {
        const stepContent = `.step-content-${index}`;
        const stepImage = `.step-image-${index}`;

        const startTime = index;

        // Reveal the step (except the first one which is already visible)
        if (index > 0) {
          tl.fromTo(stepContent, 
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.5 },
            startTime
          );
          tl.fromTo(stepImage,
            { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.1, opacity: 0 },
            { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, opacity: 1, duration: 0.5 },
            startTime
          );
        }

        // Hide the step (except the last one)
        if (index < totalSteps - 1) {
          tl.to(stepContent, {
            opacity: 0,
            y: -50,
            duration: 0.5
          }, startTime + 1); // Starts hiding exactly when the next step starts revealing
          
          tl.to(stepImage, {
            opacity: 0,
            scale: 0.9,
            duration: 0.5
          }, startTime + 1);
        }
      });
    });

    // Mobile Layout (Standard vertical scroll with fade-up)
    mm.add("(max-width: 1023px)", () => {
      steps.forEach((_, index) => {
        gsap.fromTo(`.mobile-step-${index}`,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: `.mobile-step-${index}`,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    });

    // Refresh ScrollTrigger after a short delay to account for dynamic content
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-heritage-dark overflow-hidden z-20"
      id="how-we-work"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 dot-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(179,139,77,0.05)_0%,_transparent_50%)] pointer-events-none" />

      {/* Desktop Layout */}
      <div className="hidden lg:block h-screen w-full">
        <div className="container h-full flex items-center relative">
          
          {/* Progress Thread */}
          <div className="absolute left-10 md:left-16 xl:left-20 top-[20%] bottom-[20%] w-[2px] bg-white/10 rounded-full">
            <div 
              ref={progressRef}
              className="absolute top-0 left-0 w-full h-0 bg-burnished shadow-[0_0_15px_rgba(179,139,77,0.5)] rounded-full" 
            />
            <div 
              ref={playheadRef}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-burnished shadow-[0_0_20px_#B38B4D] z-10"
            />
          </div>

          <div className="grid grid-cols-12 w-full gap-12 xl:gap-16">
            {/* Text Content Area */}
            <div className="col-span-6 lg:col-span-5 pl-16 md:pl-20 xl:pl-24">
              <div className="relative h-96 flex items-center">
                {steps.map((step, index) => (
                  <div 
                    key={step.id}
                    className={cn(
                      "absolute inset-0 flex flex-col justify-center space-y-8",
                      `step-content-${index}`,
                      index === 0 ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-burnished tracking-[0.4em] font-bold">
                        {step.id} / {step.label}
                      </span>
                    </div>
                    
                    <h2 className="text-5xl lg:text-[3.5rem] xl:text-[4rem] font-serif text-white leading-[1.1]">
                      {step.title}
                    </h2>
                    
                    <p className="text-white/90 text-lg max-w-md leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visuals Area */}
            <div className="col-span-7">
              <div className="relative aspect-[4/5] xl:aspect-[16/10] w-full overflow-hidden border border-white/5">
                {steps.map((step, index) => (
                  <div 
                    key={step.id}
                    className={cn(
                      "absolute inset-0",
                      `step-image-${index}`,
                      index === 0 ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                ))}
                
                {/* Frame Overlay */}
                <div className="absolute inset-0 border-[20px] border-heritage-dark z-20" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden py-24 px-6 space-y-24">
        <div className="text-center space-y-4 mb-12">
          <span className="text-[10px] text-burnished uppercase tracking-[0.6em] font-bold">THE JOURNEY</span>
          <h2 className="text-4xl font-serif text-white">How We Work</h2>
          <div className="w-12 h-px bg-burnished/30 mx-auto" />
        </div>

        {steps.map((step, index) => (
          <div 
            key={step.id}
            className={cn("mobile-step-pill space-y-8", `mobile-step-${index}`)}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-white/5">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-heritage-dark/80 backdrop-blur-md px-4 py-2 border border-white/10">
                <span className="text-[10px] font-mono text-burnished tracking-widest font-bold">
                  {step.id}
                </span>
              </div>
            </div>
            
            <div className="space-y-4 px-2">
              <h3 className="text-2xl font-serif text-white tracking-wide">{step.title}</h3>
              <p className="text-white/80 text-[15px] leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
