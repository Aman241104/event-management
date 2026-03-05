'use client';

import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Facebook, Instagram, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/atoms/Logo';
import { Magnetic } from '@/components/atoms/Magnetic';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { label: 'Journal', href: '/' },
    { label: 'Our Story', href: '/about' },
    { label: 'Expertise', href: '/services' },
    { label: 'Archives', href: '/gallery' },
  ];

  const offerings = [
    { label: 'Fine Art Weddings', href: '/services' },
    { label: 'Corporate Summits', href: '/services' },
    { label: 'Entertainment', href: '/services' },
    { label: 'Production Setup', href: '/services' },
  ];

  const socials = [
    { icon: <Instagram size={18} strokeWidth={1.5} />, label: 'Instagram', href: 'https://www.instagram.com/zingblissevents/' },
    { icon: <Linkedin size={18} strokeWidth={1.5} />, label: 'LinkedIn', href: '#' },
    { icon: <Facebook size={18} strokeWidth={1.5} />, label: 'Facebook', href: '#' },
    { icon: <Twitter size={18} strokeWidth={1.5} />, label: 'Twitter', href: '#' },
  ];

  return (
    <footer className="w-full bg-bg-surface pt-32 pb-12 px-8 mt-auto border-t border-border-subtle relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-[0.02]" />
      
      <div className="container mx-auto max-w-[1440px] relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-32">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-12">
            <Magnetic strength={0.1}>
              <Link href="/">
                <Logo />
              </Link>
            </Magnetic>
            <p className="text-base text-text-secondary leading-[2] max-w-sm font-sans font-light">
              Zing Bliss is a fine art event design and production agency. We craft bespoke narratives for the world's most discerning families and organizations.
            </p>
            <div className="flex items-center space-x-10 pt-4">
              {socials.map((social) => (
                <Magnetic key={social.label} strength={0.4}>
                  <a 
                    href={social.href} 
                    target={social.href !== '#' ? "_blank" : undefined}
                    rel={social.href !== '#' ? "noopener noreferrer" : undefined}
                    className="text-text-light hover:text-primary transition-colors duration-500"
                  >
                    {social.icon}
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          {/* Navigation Col */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-text-primary mb-10">The Agency</h4>
            <ul className="space-y-6">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-xs font-sans font-light uppercase tracking-[0.2em] text-text-secondary hover:text-primary transition-colors duration-500">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-text-primary mb-10">Offerings</h4>
            <ul className="space-y-6">
              {offerings.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-xs font-sans font-light uppercase tracking-[0.2em] text-text-secondary hover:text-primary transition-colors duration-500">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-text-primary mb-10">The Edit</h4>
            <p className="text-sm font-sans font-light text-text-secondary mb-10 leading-relaxed">
              Curated inspiration and private venue access delivered to your inbox.
            </p>
            <form className="flex border-b border-border-subtle pb-4 group focus-within:border-primary transition-colors duration-700 relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-transparent border-none outline-none text-sm text-text-primary placeholder:text-text-light font-light tracking-wider"
              />
              <Magnetic strength={0.3}>
                <button type="submit" className="text-text-light group-focus-within:text-primary transition-colors duration-500 p-2">
                  <ArrowRight size={20} strokeWidth={1} />
                </button>
              </Magnetic>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          <p className="text-[9px] font-sans uppercase text-text-light tracking-[0.3em]">
            &copy; {currentYear} Zing Bliss Events. <span className="opacity-50">Private Commission Only.</span>
          </p>
          <div className="flex space-x-12 text-[9px] font-sans uppercase text-text-light tracking-[0.3em]">
            <Link href="/contact" className="hover:text-primary transition-colors duration-500">Legal</Link>
            <Link href="/contact" className="hover:text-primary transition-colors duration-500">Privacy</Link>
            <Link href="/contact" className="hover:text-primary transition-colors duration-500">Press</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
