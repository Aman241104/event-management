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
    <footer className="w-full bg-canvas pt-32 pb-12 px-8 mt-auto border-t border-linen relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-[0.02]" />
      
      <div className="container relative z-10">
        {/* Mad Libs CTA - Hidden on pages that already have a primary CTA */}
        {!hideCTA && (
          <div className="max-w-6xl mx-auto text-center mb-48 space-y-20">
            <div className="flex items-center justify-center gap-6 mb-12">
              <span className="text-[10px] font-mono text-burnished uppercase tracking-[0.8em]">CONTINUE THE NARRATIVE</span>
              <div className="h-px w-20 bg-linen/50" />
            </div>
            <p className="text-4xl md:text-6xl text-text-primary font-serif italic font-light leading-relaxed">
              I&apos;m planning an exquisite <span className="border-b border-burnished/40 text-text-primary font-medium px-4 inline-block not-italic">celebration</span> and I&apos;d love to <span className="text-burnished italic">connect.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-16 pt-12">
              <Magnetic strength={0.2}>
                <Link href="/contact">
                  <Button size="lg" className="h-24 px-24 text-[10px] btn-prestige shadow-2xl transition-transform hover:scale-105" rightIcon={<ArrowRight size={20} />}>
                    Inquire Concierge
                  </Button>
                </Link>
              </Magnetic>
              <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-burnished transition-colors flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold">
                <MessageCircle size={20} className="text-heritage" /> Private WhatsApp
              </a>
            </div>
          </div>
        )}

        <div className={`grid grid-cols-1 md:grid-cols-12 gap-24 md:gap-12 mb-32 ${!hideCTA ? 'pt-40 border-t border-linen/30' : ''}`}>
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-12">
            <Magnetic strength={0.05}>
              <Link href="/">
                <Logo />
              </Link>
            </Magnetic>
            <p className="text-[13px] text-text-secondary leading-[2] max-w-sm font-sans font-light">
              Architects of magic, dedicated to turning life&apos;s special moments into unforgettable experiences with quiet precision and refined energy.
            </p>
            <div className="flex items-center space-x-12">
              {[
                { icon: <Instagram size={18} strokeWidth={1.5} />, href: 'https://www.instagram.com/zingblissevents/' },
                { icon: <Twitter size={18} strokeWidth={1.5} />, href: '#' },
                { icon: <Facebook size={18} strokeWidth={1.5} />, href: '#' },
                { icon: <Linkedin size={18} strokeWidth={1.5} />, href: '#' },
              ].map((social, i) => (
                <Magnetic key={i} strength={0.3}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-burnished transition-colors duration-700">
                    {social.icon}
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-burnished mb-12">Archive</h4>
            <ul className="space-y-6">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[11px] font-sans uppercase tracking-widest font-bold text-text-primary hover:text-heritage transition-colors duration-500">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusives */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-burnished mb-12">Exclusives</h4>
            <ul className="space-y-6">
              <li>
                <Link href="/vault" className="text-[11px] font-sans uppercase tracking-widest font-bold text-text-primary hover:text-heritage transition-colors duration-500 flex items-center gap-4 group">
                  Client Vault <span className="text-[7px] font-sans font-bold uppercase tracking-widest text-heritage px-3 py-1 border border-heritage/20 rounded-full group-hover:border-heritage transition-colors">Private</span>
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="text-[11px] font-sans uppercase tracking-widest font-bold text-text-primary hover:text-heritage transition-colors duration-500 flex items-center gap-4 group">
                  Aesthetic Quiz <span className="text-[7px] font-sans font-bold uppercase tracking-widest text-burnished px-3 py-1 border border-burnished/20 rounded-full group-hover:border-burnished transition-colors">AI</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-burnished mb-12">Coordinates</h4>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <MapPin size={16} className="text-heritage shrink-0 mt-1" />
                <p className="text-[13px] text-text-secondary leading-relaxed font-light">Bandra West, Mumbai, MH <br/> India — 400050</p>
              </div>
              <div className="flex items-center gap-6">
                <Phone size={16} className="text-heritage shrink-0" />
                <a href="tel:+919876543210" className="text-[13px] text-text-primary font-bold tracking-tight">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-6">
                <Mail size={16} className="text-heritage shrink-0" />
                <a href="mailto:hello@zingblissevents.com" className="text-[13px] text-text-primary font-bold tracking-tight">hello@zingblissevents.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-16 border-t border-linen/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[9px] font-mono uppercase text-text-muted tracking-[0.4em]">
            &copy; {currentYear} Zing Bliss. <span className="text-burnished">Fine Art Event Architecture.</span>
          </p>
          <div className="flex space-x-12 text-[9px] font-mono uppercase text-text-muted tracking-[0.4em]">
            <Link href="/contact" className="hover:text-text-primary transition-colors">Privacy</Link>
            <Link href="/contact" className="hover:text-text-primary transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-text-primary transition-colors">Press</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
