import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Facebook, Mail, Instagram, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/atoms/Logo';
import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-bg-surface border-t border-border-subtle pt-32 pb-12 px-8 mt-auto">
      <div className="container mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4 space-y-8">
            <Logo />
            <p className="text-base text-text-moss leading-relaxed max-w-sm font-sans">
              Curating the world's most exclusive events. A high-end agency providing 
              unparalleled fidelity and prestige to every detail.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-text-moss hover:text-secondary transition-colors duration-500">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-text-moss hover:text-secondary transition-colors duration-500">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-text-moss hover:text-secondary transition-colors duration-500">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-text-moss hover:text-secondary transition-colors duration-500">
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-sans font-bold uppercase tracking-[0.1em] text-secondary mb-8">Navigation</h4>
            <ul className="space-y-6">
              <li>
                <Link href="/events" className="text-base font-serif text-text-primary hover:text-secondary transition-colors duration-500">Curated Events</Link>
              </li>
              <li>
                <Link href="/services/corporate" className="text-base font-serif text-text-primary hover:text-secondary transition-colors duration-500">Corporate Galas</Link>
              </li>
              <li>
                <Link href="/services/private" className="text-base font-serif text-text-primary hover:text-secondary transition-colors duration-500">Private Weddings</Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-base font-serif text-text-primary hover:text-secondary transition-colors duration-500">Owner Portal</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-sans font-bold uppercase tracking-[0.1em] text-secondary mb-8">The Agency</h4>
            <ul className="space-y-6">
              <li>
                <Link href="/about" className="text-base font-serif text-text-primary hover:text-secondary transition-colors duration-500">Our Story</Link>
              </li>
              <li>
                <Link href="/careers" className="text-base font-serif text-text-primary hover:text-secondary transition-colors duration-500">Careers</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-base font-serif text-text-primary hover:text-secondary transition-colors duration-500">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-base font-serif text-text-primary hover:text-secondary transition-colors duration-500">Terms of Service</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-sans font-bold uppercase tracking-[0.1em] text-secondary mb-8">The Prestige Newsletter</h4>
            <p className="text-base font-sans text-text-moss mb-8 leading-relaxed">
              Gain exclusive access to private events, luxury venues, and industry insights.
            </p>
            <form className="flex items-end gap-4">
              <div className="flex-1">
                <Input 
                  type="email"
                  placeholder="Enter your email"
                  icon={<Mail size={18} />}
                />
              </div>
              <Button variant="gold" size="icon" className="mb-[1px]">
                <ArrowRight size={20} />
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-[10px] font-sans font-bold uppercase text-text-moss tracking-[0.1em]">
            &copy; {currentYear} PRESTIGE EVENT MANAGEMENT — ALL RIGHTS RESERVED
          </p>
          <div className="flex items-center space-x-8 text-[10px] font-sans font-bold uppercase text-text-moss tracking-[0.1em]">
            <Link href="#" className="hover:text-secondary transition-colors duration-500">Concierge Support</Link>
            <Link href="#" className="hover:text-secondary transition-colors duration-500">Press Kit</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
