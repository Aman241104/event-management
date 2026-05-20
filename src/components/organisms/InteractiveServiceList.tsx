'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const services = [
  {
    id: '01',
    title: 'WEDDING PRODUCTION',
    category: 'Celebrations',
    image: '/hero-2.jpg',
    href: '/contact'
  },
  {
    id: '02',
    title: 'CORPORATE EXCELLENCE',
    category: 'Professional',
    image: '/hero-1.jpg',
    href: '/contact'
  },
  {
    id: '03',
    title: 'PRIVATE MILESTONES',
    category: 'Intimate',
    image: '/private-celebrations.jpg',
    href: '/contact'
  },
  {
    id: '04',
    title: 'FULL-SCALE PRODUCTION',
    category: 'Technical',
    image: '/event-production.jpg',
    href: '/contact'
  }
];

export const InteractiveServiceList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    // Initial state
    gsap.set(imageRefs.current, { opacity: 0, scale: 1.1 });
    gsap.set(imageRefs.current[0], { opacity: 1, scale: 1 });
  }, { scope: containerRef });

  const handleHover = (index: number) => {
    if (index === activeIndex) return;
    
    const prevIndex = activeIndex;
    setActiveIndex(index);

    // Animate out previous image
    gsap.to(imageRefs.current[prevIndex], {
      opacity: 0,
      scale: 1.1,
      duration: 0.8,
      ease: "power2.inOut"
    });

    // Animate in new image
    gsap.fromTo(imageRefs.current[index], 
      { opacity: 0, scale: 1.1 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out"
      }
    );
  };

  return (
    <section ref={containerRef} className="py-12 md:py-20 bg-[#FDFBF7] relative overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* 1. Left: The Interactive List */}
          <div className="w-full lg:w-3/5 space-y-2">
            <div className="mb-4 space-y-2">
               <div className="flex items-center gap-4">
                 <div className="w-10 h-px bg-[#D4B982]/40" />
                 <span className="text-[10px] md:text-[11px] text-[#D4B982] uppercase tracking-[0.6em] md:tracking-[0.8em] font-bold">CORE SOLUTIONS</span>
               </div>
               <h2 className="text-3xl md:text-5xl font-serif text-[#121212] tracking-tight">Professional Services</h2>
            </div>

            <div className="divide-y divide-[#D4B982]/10">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  className="group relative"
                  onMouseEnter={() => handleHover(index)}
                >
                  <Link href={service.href} className="block py-3 md:py-6 outline-none">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                         <div className="flex items-center gap-3">
                           <span className="text-[11px] font-mono text-[#D4B982]/60 group-hover:text-[#D4B982] transition-colors">{service.id}</span>
                           <span className="text-[8px] text-[#525252]/40 uppercase tracking-[0.3em] font-bold group-hover:text-[#D4B982]/60 transition-colors">/ {service.category}</span>
                         </div>
                         <h3 className={cn(
                           "text-xl md:text-3xl lg:text-4xl font-serif transition-all duration-700 tracking-tight",
                           activeIndex === index ? "text-[#121212] translate-x-3" : "text-[#121212]/50"
                         )}>
                           {service.title}
                         </h3>
                      </div>
                      
                      <div className={cn(
                        "w-10 h-10 rounded-full border border-[#D4B982]/20 flex items-center justify-center transition-all duration-700",
                        activeIndex === index ? "bg-[#D4B982] border-[#D4B982] rotate-0" : "opacity-0 -rotate-45"
                      )}>
                        <ArrowUpRight size={18} className="text-white" />
                      </div>
                    </div>
                  </Link>

                  {/* Mobile Preview Image (visible only on small screens) */}
                  <div className="lg:hidden h-0 group-hover:h-40 overflow-hidden transition-all duration-500 rounded-lg">
                     <div className="relative h-full w-full">
                        <Image src={service.image} alt={service.title} fill className="object-cover" />
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Right: The Image Frame (Desktop Only) */}
          <div className="hidden lg:block w-2/5 sticky top-1/4 h-[400px]">
             <div className="relative h-full w-full overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border border-[#D4B982]/10 group">
                {services.map((service, index) => (
                  <div 
                    key={`img-${service.id}`}
                    ref={el => { imageRefs.current[index] = el; }}
                    className="absolute inset-0"
                  >
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000" />
                  </div>
                ))}

                {/* Decorative Elements */}
                <div className="absolute inset-0 pointer-events-none border-[20px] border-[#FDFBF7] z-20" />
                <div className="absolute inset-6 pointer-events-none border border-[#D4B982]/20 z-20" />
                
                {/* Overlay Text hint */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
                   <span className="text-[9px] text-white/60 uppercase tracking-[0.4em] font-bold">PREVIEW</span>
                   <div className="w-12 h-px bg-white/20" />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
