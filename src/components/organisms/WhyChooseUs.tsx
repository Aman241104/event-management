'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextReveal } from '@/components/atoms/TextReveal';
import { Card } from '@/components/atoms/Card';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const REASONS = [
  {
    title: "Strategic Precision",
    description: "Meticulous attention to detail in every ledger, ensuring absolute accuracy for your fiscal records.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Wealth Optimization",
    description: "Data-driven insights tailored to maximize your fiscal performance and sustainable growth.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "Regulatory Mastery",
    description: "Navigating complex compliance landscapes with ease, keeping your operations seamless.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "Transparent Ethics",
    description: "Unwavering commitment to integrity, providing full fiscal clarity in everything we do.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 3v1M12 11c0-3.517 1.009-6.799 2.753-9.571m3.44 2.04l-.054.09A10.003 10.003 0 0112 21v-1m0 0c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z" />
      </svg>
    )
  },
  {
    title: "Future-Proofing",
    description: "Anticipating market shifts and policy changes to protect and enhance your long-term assets.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 7v5l3 3" />
      </svg>
    )
  },
  {
    title: "Concierge Support",
    description: "Direct access to senior advisors, offering personalized guidance whenever you need it most.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  }
];

export function WhyChooseUs() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.children;
    if (!cards) return;

    gsap.fromTo(cards, 
      { 
        y: 40, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
        }
      }
    );
  }, []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-heritage text-canvas">
      {/* Background Refinement - Subtle Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(179,139,77,0.12),transparent_70%)]" />
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32">
          <span className="small-caps text-burnished mb-6 block tracking-[0.4em] text-[10px]">
            The Prestige Standard
          </span>
          <TextReveal 
            text="Excellence in Fiscal Stewardship"
            as="h2"
            className="text-4xl md:text-5xl lg:text-7xl mb-8 text-white leading-[1.1]"
          />
          <div className="w-24 h-[1px] bg-burnished/30 mx-auto mb-8" />
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-sans font-light leading-relaxed">
            We provide institutional-grade financial oversight with the meticulous care of a private family office.
          </p>
        </div>

        {/* Card Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {REASONS.map((reason, index) => (
            <Card 
              key={index}
              variant="default"
              className="bg-heritage-dark/40 border-white/5 hover:border-burnished/30 transition-all duration-700 group backdrop-blur-sm"
              isHoverable
            >
              <div className="relative z-10">
                {/* Icon Container */}
                <div className="mb-8 text-burnished/60 group-hover:text-burnished group-hover:scale-110 transition-all duration-700 ease-out origin-left">
                  {reason.icon}
                </div>
                
                <h3 className="text-xl md:text-2xl mb-4 text-white font-serif group-hover:text-burnished-light transition-colors duration-500">
                  {reason.title}
                </h3>
                <p className="text-white/40 group-hover:text-white/70 transition-colors duration-500 leading-relaxed text-sm md:text-base">
                  {reason.description}
                </p>

                {/* Subtle Hover Glow Effect */}
                <div className="absolute -inset-8 bg-burnished/0 group-hover:bg-burnished/[0.02] blur-3xl rounded-full transition-all duration-1000 -z-10" />
              </div>
              
              {/* Subtle Line Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-burnished/30 group-hover:w-full transition-all duration-1000 ease-in-out" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
