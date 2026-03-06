'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/atoms/Logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/atoms/Button';
import { Magnetic } from '@/components/atoms/Magnetic';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <header className={cn(
        "fixed top-0 w-full z-50 transition-all duration-1000 ease-in-out border-b",
        scrolled ? "bg-bg-main/90 backdrop-blur-md border-border-gold py-2" : "bg-transparent border-transparent py-6",
        isOpen && "border-transparent bg-transparent backdrop-blur-0"
      )}>
        <nav className="container mx-auto px-6 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <Magnetic strength={0.1}>
            <Link href="/" onClick={() => setIsOpen(false)} className="relative z-[60]">
              <Logo />
            </Link>
          </Magnetic>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Magnetic key={link.label} strength={0.2}>
                <Link
                  href={link.href}
                  className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-text-secondary hover:text-secondary transition-colors duration-500 relative group py-2"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-secondary transition-all duration-500 group-hover:w-full" />
                </Link>
              </Magnetic>
            ))}
            <Magnetic strength={0.3}>
              <Link href="/contact">
                <Button variant="solid" size="sm" className="btn-royal rounded-none px-8">
                  Plan Event
                </Button>
              </Link>
            </Magnetic>
          </div>

          {/* Mobile Toggle */}
          <Magnetic strength={0.5}>
            <button
              className="md:hidden relative z-[60] p-4 text-text-primary hover:text-secondary transition-colors focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
            </button>
          </Magnetic>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 w-full h-screen bg-bg-main md:hidden transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] transform',
          isOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
        
        <div className="flex flex-col h-full px-8 pt-32 pb-12 justify-between relative z-10">
          <div className="flex flex-col space-y-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "group flex items-center gap-8 transition-all duration-1000",
                  isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <span className="text-[10px] font-mono text-secondary group-hover:text-white transition-colors">0{i + 1}</span>
                <span className="text-5xl font-serif text-text-primary group-hover:text-secondary transition-colors font-bold tracking-tight">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <div className={cn(
            "space-y-12 transition-all duration-1000 delay-500",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="w-full h-px bg-border-gold" />
            <div className="flex flex-col space-y-8 text-center">
              <p className="text-[9px] font-sans font-bold uppercase tracking-[0.5em] text-secondary">Zing Bliss Events</p>
              <a href="mailto:hello@zingblissevents.com" className="text-2xl font-serif text-text-primary font-bold underline underline-offset-8 decoration-secondary/20 hover:decoration-secondary transition-all duration-500">hello@zingblissevents.com</a>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="solid" className="w-full h-20 btn-royal font-bold">
                  Start Planning
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
