'use client';

import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Facebook, Instagram, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from '@/components/atoms/Logo';
import { Button } from '@/components/atoms/Button';
import { Magnetic } from '@/components/atoms/Magnetic';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="w-full bg-bg-main pt-32 pb-12 px-8 mt-auto border-t border-border-gold relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-[0.02]" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-32">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-12">
            <Magnetic strength={0.1}>
              <Link href="/">
                <Logo />
              </Link>
            </Magnetic>
            <p className="text-base text-text-secondary leading-[2] max-w-sm font-sans font-light">
              Zing Bliss Events is dedicated to turning life&apos;s special moments into unforgettable experiences with creativity, precision, and professionalism.
            </p>
            <div className="flex items-center space-x-8">
              {[
                { icon: <Instagram size={20} />, href: 'https://www.instagram.com/zingblissevents/' },
                { icon: <Twitter size={20} />, href: '#' },
                { icon: <Facebook size={20} />, href: '#' },
                { icon: <Linkedin size={20} />, href: '#' },
              ].map((social, i) => (
                <Magnetic key={i} strength={0.4}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors duration-500">
                    {social.icon}
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-secondary mb-10">Navigation</h4>
            <ul className="space-y-6">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm font-serif font-bold text-text-primary hover:text-secondary transition-colors duration-500">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-secondary mb-10">Get In Touch</h4>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-secondary shrink-0" />
                <p className="text-sm text-text-secondary leading-relaxed">Bandra West, Mumbai, Maharashtra, India</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-secondary shrink-0" />
                <a href="tel:+919876543210" className="text-sm text-text-primary font-bold">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={18} className="text-secondary shrink-0" />
                <a href="mailto:hello@zingblissevents.com" className="text-sm text-text-primary font-bold">hello@zingblissevents.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border-gold flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] font-sans uppercase text-text-secondary tracking-[0.2em]">
            &copy; {currentYear} Zing Bliss Events. <span className="text-secondary">Premier Event Planning.</span>
          </p>
          <div className="flex space-x-12 text-[10px] font-sans uppercase text-text-secondary tracking-[0.2em]">
            <Link href="/contact" className="hover:text-secondary transition-colors">Privacy</Link>
            <Link href="/contact" className="hover:text-secondary transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-secondary transition-colors">Press</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
