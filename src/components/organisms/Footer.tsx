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
  const hideCTA = pathname === '/' || pathname === '/services';

  const navigation = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="w-full bg-[#F5F3EF] pt-24 pb-12 relative overflow-hidden border-t border-linen/60">
      <div className="absolute inset-0 dot-pattern opacity-[0.02]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(179,139,77,0.02)_0%,_transparent_40%)] pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-12 mb-24">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-10">
            <Magnetic strength={0.05}>
              <Link href="/">
                <div className="scale-110 origin-left">
                  <Logo scrolled={true} />
                </div>
              </Link>
            </Magnetic>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-[300px] font-serif italic font-light">
              Architects of magic, dedicated to turning life&apos;s special moments into unforgettable experiences with quiet precision and refined energy.
            </p>
            <div className="flex items-center space-x-12 pt-2">
              {[
                { icon: <Instagram size={20} strokeWidth={1} />, href: 'https://www.instagram.com/zingblissevents/' },
                { icon: <Twitter size={20} strokeWidth={1} />, href: '#' },
                { icon: <Facebook size={20} strokeWidth={1} />, href: '#' },
                { icon: <Linkedin size={20} strokeWidth={1} />, href: '#' },
              ].map((social, i) => (
                <Magnetic key={i} strength={0.3}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-burnished hover:scale-110 transition-all duration-500 transform">
                    {social.icon}
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            {/* Quick Links */}
            <div className="space-y-10">
              <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-heritage/60">Quick Links</h4>
              <ul className="space-y-6">
                {navigation.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-[11px] font-sans uppercase tracking-[0.3em] font-bold text-text-primary hover:text-burnished transition-all duration-500">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-10">
              <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-heritage/60">Services</h4>
              <ul className="space-y-6">
                <li>
                  <Link href="/services" className="text-[11px] font-sans uppercase tracking-[0.3em] font-bold text-text-primary hover:text-burnished transition-all duration-500">Luxury Weddings</Link>
                </li>
                <li>
                  <Link href="/services" className="text-[11px] font-sans uppercase tracking-[0.3em] font-bold text-text-primary hover:text-burnished transition-all duration-500">Corporate Events</Link>
                </li>
                <li>
                  <Link href="/services" className="text-[11px] font-sans uppercase tracking-[0.3em] font-bold text-text-primary hover:text-burnished transition-all duration-500">Social Events</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-10">
              <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-heritage/60">Contact</h4>
              <div className="space-y-8">
                <div className="space-y-3">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-heritage/40">Location</p>
                  <p className="text-sm text-text-secondary leading-relaxed font-serif italic">Bandra West, Mumbai, MH <br/> India — 400050</p>
                </div>
                <div className="space-y-3">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-heritage/40">Direct Line</p>
                  <a href="tel:+919876543210" className="text-sm text-text-primary font-bold tracking-tight block hover:text-burnished transition-all hover:translate-x-1 underline decoration-transparent hover:decoration-burnished/30">+91 98765 43210</a>
                </div>
                <div className="space-y-3">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-heritage/40">Correspondence</p>
                  <a href="mailto:hello@zingblissevents.com" className="text-sm text-text-primary font-bold tracking-tight block hover:text-burnished transition-all hover:translate-x-1 underline decoration-transparent hover:decoration-burnished/30">hello@zingblissevents.com</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-linen flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[9px] font-mono uppercase text-text-muted/60 tracking-[0.4em]">
            &copy; {currentYear} Zing Bliss. <span className="text-heritage/40">Fine Art Event Architecture.</span>
          </p>
          <div className="flex items-center space-x-12 text-[9px] font-mono uppercase text-text-muted/60 tracking-[0.4em]">
            <Link href="/contact" className="hover:text-text-primary transition-colors">Privacy</Link>
            <Link href="/contact" className="hover:text-text-primary transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-text-primary transition-colors">Press</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
