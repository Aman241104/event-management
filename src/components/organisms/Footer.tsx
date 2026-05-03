'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Twitter, Linkedin, Facebook, Instagram, Mail, Phone, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import { Logo } from '@/components/atoms/Logo';
import { Magnetic } from '@/components/atoms/Magnetic';
import { Button } from '@/components/atoms/Button';
import { getGenericWhatsAppLink } from '@/lib/whatsapp';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const navigation = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="w-full bg-[#05100a] pt-32 pb-12 relative overflow-hidden border-t border-white/5">
      {/* Background Textures */}
      <div className="absolute inset-0 dot-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(179,139,77,0.05)_0%,_transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(42,77,55,0.05)_0%,_transparent_50%)] pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-12 mb-32">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-12">
            <Magnetic strength={0.05}>
              <Link href="/" className="inline-block">
                <div className="origin-left scale-110">
                  <Logo scrolled={true} variant="footer" />
                </div>
              </Link>
            </Magnetic>
            
            <div className="space-y-8 max-w-[380px]">
              <p className="text-base md:text-lg text-white/60 leading-relaxed font-serif italic font-light">
                Architects of magic, dedicated to turning life&apos;s special moments into unforgettable experiences with quiet precision and refined energy.
              </p>
              
              <div className="flex items-center space-x-10 pt-4">
                {[
                  { icon: <Instagram size={20} strokeWidth={1} />, href: 'https://www.instagram.com/zingblissevents/' },
                  { icon: <Twitter size={20} strokeWidth={1} />, href: '#' },
                  { icon: <Facebook size={20} strokeWidth={1} />, href: '#' },
                  { icon: <Linkedin size={20} strokeWidth={1} />, href: '#' },
                ].map((social, i) => (
                  <Magnetic key={i} strength={0.3}>
                    <a 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white/40 hover:text-[#D4B982] hover:scale-125 transition-all duration-500 transform block"
                    >
                      {social.icon}
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-8">
            {/* Quick Links */}
            <div className="space-y-12">
              <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.6em] text-[#D4B982] flex items-center gap-3">
                <div className="w-1.5 h-1.5 rotate-45 border border-[#D4B982]/40 bg-[#D4B982]/10" />
                Explore
              </h4>
              <ul className="space-y-6">
                {navigation.map((item) => (
                  <li key={item.label}>
                    <Link 
                      href={item.href} 
                      className="text-[12px] font-sans uppercase tracking-[0.3em] font-bold text-white/70 hover:text-[#D4B982] transition-all duration-500 hover:pl-2 block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-12">
              <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.6em] text-[#D4B982] flex items-center gap-3">
                <div className="w-1.5 h-1.5 rotate-45 border border-[#D4B982]/40 bg-[#D4B982]/10" />
                Offerings
              </h4>
              <ul className="space-y-6">
                {[
                  'Luxury Weddings',
                  'Corporate Events',
                  'Social Celebrations',
                  'Event Production'
                ].map((service) => (
                  <li key={service}>
                    <Link 
                      href="/services" 
                      className="text-[12px] font-sans uppercase tracking-[0.3em] font-bold text-white/70 hover:text-[#D4B982] transition-all duration-500 hover:pl-2 block"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.6em] text-[#D4B982] flex items-center gap-3">
                <div className="w-1.5 h-1.5 rotate-45 border border-[#D4B982]/40 bg-[#D4B982]/10" />
                Concierge
              </h4>
              <div className="space-y-10">
                <div className="space-y-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/30">Location</p>
                  <p className="text-sm text-white/60 leading-relaxed font-serif italic">
                    Bandra West, Mumbai, MH <br/> India — 400050
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/30">Direct Line</p>
                  <a 
                    href="tel:+919876543210" 
                    className="text-base text-white hover:text-[#D4B982] transition-all duration-500 font-serif italic"
                  >
                    +91 98765 43210
                  </a>
                </div>
                <div className="space-y-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/30">Correspondence</p>
                  <a 
                    href="mailto:hello@zingblissevents.com" 
                    className="text-base text-white hover:text-[#D4B982] transition-all duration-500 font-serif italic underline decoration-white/10 underline-offset-8 hover:decoration-[#D4B982]/40"
                  >
                    hello@zingblissevents.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
            <p className="text-[10px] font-mono uppercase text-white/20 tracking-[0.5em]">
              &copy; {currentYear} Zing Bliss
            </p>
            <div className="w-1.5 h-1.5 rotate-45 border border-white/10 hidden md:block" />
            <p className="text-[10px] font-mono uppercase text-[#D4B982]/40 tracking-[0.5em]">
              Fine Art Event Architecture
            </p>
          </div>
          
          <div className="flex items-center space-x-12 text-[10px] font-mono uppercase text-white/20 tracking-[0.5em]">
            <Link href="/contact" className="hover:text-white transition-colors duration-500">Privacy</Link>
            <Link href="/contact" className="hover:text-white transition-colors duration-500">Terms</Link>
            <Link href="/contact" className="hover:text-white transition-colors duration-500">Press</Link>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4B982]/20 to-transparent" />
    </footer>
  );
}
