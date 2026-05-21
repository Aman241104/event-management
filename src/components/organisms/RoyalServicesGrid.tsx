'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Zap, Sparkles, Music } from 'lucide-react';

import { BackgroundFlourish } from '@/components/atoms/BackgroundFlourish';

const services = [
  {
    id: '01',
    title: 'Weddings & Celebrations',
    description: 'Bespoke luxury weddings and private milestones curated with logistical mastery and creative soul.',
    longDescription: 'From intimate destination weddings to grand milestone celebrations, we handle every detail—venue sourcing, decor orchestration, and concierge-level guest management—ensuring your legacy is beautifully celebrated.',
    image: '/assets/wedding/wedding-2.jpg',
    icon: <Star className="w-5 h-5 md:w-6 md:h-6" />,
    features: ['Destination Weddings', 'Intimate Galas', 'Milestone Anniversaries'],
    href: '/contact'
  },
  {
    id: '02',
    title: 'Corporate Excellence',
    description: 'High-impact professional events designed to elevate your brand’s prestige and message.',
    longDescription: 'We translate your corporate vision into cinematic reality. Whether it is a global summit, a product launch, or an executive retreat, our team ensures flawless execution and strategic alignment with your goals.',
    image: '/assets/corporate/corporate-1.jpg',
    icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
    features: ['Global Summits', 'Brand Activations', 'Product Launches'],
    href: '/contact'
  },
  {
    id: '03',
    title: 'Technical Production',
    description: 'Architectural lighting, stadium-grade acoustics, and immersive stage designs for visionaries.',
    longDescription: 'Our technical infrastructure handles the most complex requirements. We bring precision to every layer—from sound mapping and 3D stage rendering to bespoke lighting physics.',
    image: '/assets/production/production-1.jpg',
    icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6" />,
    features: ['Concert-Grade Audio', 'Bespoke AV Solutions', 'Stage Architecture'],
    href: '/contact'
  },
  {
    id: '04',
    title: 'Talent & Artistry',
    description: 'Curating world-class entertainment, from global headline acts to niche performance artists.',
    longDescription: 'We manage the rhythm of your celebration by sourcing and coordinating premium talent. We handle all performance logistics, artist hospitality, and technical riders for a seamless show.',
    image: '/assets/wedding/wedding-4.jpg',
    icon: <Music className="w-5 h-5 md:w-6 md:h-6" />,
    features: ['Global Talent Sourcing', 'Show Direction', 'Performance Logistics'],
    href: '/contact'
  }
];

export const RoyalServicesGrid = () => {
  return (
    <section className="py-20 md:py-32 bg-[#FDFBF7] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-[#D4B982]/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 opacity-[0.03] pointer-events-none">
        <BackgroundFlourish type="floral" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mb-16 md:mb-24 fade-up">
           <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-px bg-[#D4B982]/40" />
             <span className="text-[10px] md:text-[11px] text-[#D4B982] uppercase tracking-[0.6em] md:tracking-[0.8em] font-bold">CORE EXPERTISE</span>
           </div>
           <h2 className="text-4xl md:text-7xl font-serif text-[#121212] leading-[1.1] md:leading-[1] tracking-tighter">
             Bespoke Solutions for <br />
             <span className="italic font-script text-[#D4B982] lowercase text-5xl md:text-8xl">Every Milestone.</span>
           </h2>
           <p className="mt-8 text-[#525252] text-lg md:text-2xl font-serif italic max-w-2xl leading-relaxed opacity-80 border-l border-[#D4B982]/20 pl-6 md:pl-10">
             Logistical mastery meets creative soul. We curate experiences that transcend the ordinary.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative bg-white border border-[#D4B982]/10 p-8 md:p-12 transition-all duration-700 hover:shadow-[0_40px_100px_rgba(0,0,0,0.05)] fade-up flex flex-col justify-between min-h-[500px] overflow-hidden"
            >
              {/* Gold border reveals on hover */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-[#D4B982] group-hover:w-full transition-all duration-700 delay-100" />
              <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#D4B982] group-hover:w-full transition-all duration-700 delay-100" />
              <div className="absolute top-0 right-0 w-0.5 h-0 bg-[#D4B982] group-hover:h-full transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-[#D4B982] group-hover:h-full transition-all duration-700" />

              {/* Image Reveal on Hover (Desktop) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.07] transition-opacity duration-1000 z-0">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[2000ms]"
                />
              </div>

              <div className="relative z-10 space-y-8 md:space-y-12">
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#D4B982]/20 flex items-center justify-center text-[#D4B982] bg-[#FDFBF7] group-hover:bg-heritage group-hover:text-white transition-all duration-700">
                    {service.icon}
                  </div>
                  <span className="text-[32px] md:text-[40px] font-serif italic text-[#D4B982]/10 group-hover:text-[#D4B982]/20 transition-colors">{service.id}</span>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl md:text-4xl font-serif text-[#121212] tracking-tight">{service.title}</h3>
                  <p className="text-[#525252] text-base md:text-lg leading-relaxed font-light italic border-l border-[#D4B982]/20 pl-6 group-hover:border-[#D4B982] transition-colors duration-700">
                    {service.longDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-3">
                  {service.features.map((feature, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-1.5 border border-[#D4B982]/10 rounded-full text-[9px] md:text-[10px] text-[#D4B982] uppercase tracking-widest font-bold bg-[#D4B982]/5 group-hover:bg-white transition-colors duration-500"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-10 md:pt-16 mt-auto">
                <Link href={service.href} className="inline-flex items-center gap-4 text-[#D4B982] text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] group/link">
                  <span className="relative">
                    ENQUIRE NOW
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4B982] group-hover/link:w-full transition-all duration-500" />
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#D4B982]/20 flex items-center justify-center group-hover/link:bg-[#D4B982] group-hover/link:text-white transition-all duration-500">
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>

              {/* Decorative Corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#D4B982]/20 group-hover:border-transparent transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#D4B982]/20 group-hover:border-transparent transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
