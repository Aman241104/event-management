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
      
      <div className="container mx-auto relative z-10">
        {/* Mad Libs CTA - Hidden on pages that already have a primary CTA */}
        {!hideCTA && (
          <div className="max-w-5xl mx-auto text-center mb-48 space-y-16">
            <div className="flex items-center justify-center gap-6 mb-12">
              <span className="text-[10px] font-mono text-heritage/40 uppercase tracking-[0.5em]">Global Inquiry</span>
              <div className="h-px w-12 bg-linen" />
            </div>
            <p className="text-3xl md:text-5xl text-text-primary font-serif italic font-light leading-relaxed">
              Hello, I&apos;m planning a <span className="border-b border-heritage/30 text-heritage font-medium px-4 inline-block not-italic">bespoke event</span> in <span className="border-b border-heritage/30 text-heritage font-medium px-4 inline-block not-italic">India</span> and I&apos;d love to connect.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 pt-8">
              <Magnetic strength={0.2}>
                <Link href="/contact">
                  <Button size="lg" className="h-20 px-16 text-xl btn-prestige rounded-none font-bold" rightIcon={<ArrowRight size={24} />}>
                    Plan Your Event
                  </Button>
                </Link>
              </Magnetic>
              <a href={getGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-heritage hover:text-text-primary transition-colors flex items-center gap-4 text-xs uppercase tracking-[0.4em] font-bold border-b border-transparent hover:border-text-primary pb-2">
                <MessageCircle size={20} /> Personal Concierge
              </a>
            </div>
          </div>
        )}

        <div className={`grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-32 ${!hideCTA ? 'pt-32 border-t border-linen/50' : ''}`}>
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-12">
            <Magnetic strength={0.05}>
              <Link href="/">
                <Logo />
              </Link>
            </Magnetic>
            <p className="text-sm text-text-secondary leading-[2] max-w-sm font-sans font-light">
              Architects of magic, dedicated to turning life&apos;s special moments into unforgettable experiences with quiet precision.
            </p>
            <div className="flex items-center space-x-10">
              {[
                { icon: <Instagram size={18} />, href: 'https://www.instagram.com/zingblissevents/' },
                { icon: <Twitter size={18} />, href: '#' },
                { icon: <Facebook size={18} />, href: '#' },
                { icon: <Linkedin size={18} />, href: '#' },
              ].map((social, i) => (
                <Magnetic key={i} strength={0.3}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className="text-heritage/60 hover:text-heritage transition-colors duration-500">
                    {social.icon}
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-heritage mb-10">Navigation</h4>
            <ul className="space-y-6">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm font-serif font-bold text-text-primary hover:text-heritage transition-colors duration-500">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusives */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-heritage mb-10">Exclusives</h4>
            <ul className="space-y-6">
              <li>
                <Link href="/vault" className="text-sm font-serif font-bold text-text-primary hover:text-heritage transition-colors duration-500 flex items-center gap-2">
                  Client Vault <span className="text-[8px] font-sans font-bold uppercase tracking-widest text-heritage px-2 py-0.5 border border-heritage/30 rounded-full">Private</span>
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="text-sm font-serif font-bold text-text-primary hover:text-heritage transition-colors duration-500 flex items-center gap-2">
                  Aesthetic Quiz <span className="text-[8px] font-sans font-bold uppercase tracking-widest text-heritage px-2 py-0.5 border border-heritage/30 rounded-full">AI</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-heritage mb-10">Get In Touch</h4>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-heritage shrink-0" />
                <p className="text-sm text-text-secondary leading-relaxed">Bandra West, Mumbai, Maharashtra, India</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-heritage shrink-0" />
                <a href="tel:+919876543210" className="text-sm text-text-primary font-bold">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={18} className="text-heritage shrink-0" />
                <a href="mailto:hello@zingblissevents.com" className="text-sm text-text-primary font-bold">hello@zingblissevents.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-linen flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[11px] font-sans uppercase text-text-secondary tracking-[0.2em]">
            &copy; {currentYear} Zing Bliss Events. <span className="text-heritage">Premier Event Planning.</span>
          </p>
          <div className="flex space-x-12 text-[11px] font-sans uppercase text-text-secondary tracking-[0.2em]">
            <Link href="/contact" className="hover:text-heritage transition-colors">Privacy</Link>
            <Link href="/contact" className="hover:text-heritage transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-heritage transition-colors">Press</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
