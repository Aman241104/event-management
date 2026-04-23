'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { Logo } from '@/components/atoms/Logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/atoms/Button';
import { Magnetic } from '@/components/atoms/Magnetic';
import { SearchOverlay } from '@/components/molecules/SearchOverlay';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      
      if (headerRef.current) {
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          // Scrolling down
          gsap.to(headerRef.current, { yPercent: -100, duration: 0.5, ease: 'power3.inOut' });
        } else {
          // Scrolling up
          gsap.to(headerRef.current, { yPercent: 0, duration: 0.5, ease: 'power3.out' });
        }
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, isSearchOpen]);

  const toggleMobileMenu = () => setIsOpen(!isOpen);
  const openSearch = () => {
    setIsOpen(false);
    setIsSearchOpen(true);
  };

  const isScrolled = scrolled || !isHome;

  return (
    <>
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <header 
        ref={headerRef}
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b",
          isScrolled 
            ? "bg-black/40 backdrop-blur-sm border-white/5 py-3 shadow-none" 
            : "bg-transparent border-transparent py-6",
          (isOpen || isSearchOpen) && "bg-transparent backdrop-blur-0 border-transparent shadow-none"
        )}
      >
        <nav className="container flex items-center justify-between gap-6">
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start items-center">
            <Magnetic strength={0.05}>
              <Link href="/" onClick={() => setIsOpen(false)} className="relative z-[60] block origin-left">
                <Logo scrolled={false} />
              </Link>
            </Magnetic>
          </div>

          {/* Center: Desktop Links */}
          <div className="hidden lg:flex items-center justify-center gap-7 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Magnetic key={link.label} strength={0.1}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-[9px] font-sans font-semibold uppercase tracking-[0.4em] transition-all duration-300 relative py-1 border-b",
                      isActive ? "text-burnished border-burnished/20" : "text-white hover:text-burnished border-transparent hover:border-burnished/10"
                    )}
                  >
                    {link.label}
                  </Link>
                </Magnetic>
              );
            })}
          </div>
          
          {/* Right: Search & CTA */}
          <div className="hidden lg:flex items-center justify-end gap-6 flex-1">
            <Magnetic strength={0.2}>
              <button 
                onClick={openSearch}
                className="text-white/70 hover:text-white transition-opacity duration-300 p-1"
                aria-label="Search"
              >
                <Search size={16} strokeWidth={1.5} />
              </button>
            </Magnetic>

            <Magnetic strength={0.2}>
              <Link href="/contact">
                <Button size="sm" className="rounded-full px-7 h-10 bg-gradient-to-r from-heritage to-[#2A4D37] text-white transition-all duration-300 font-bold text-[8px] tracking-[0.2em] border-0 shadow-md hover:scale-[1.04] hover:shadow-lg active:scale-95">
                  BOOK CONSULTATION
                </Button>
              </Link>
            </Magnetic>
          </div>

          {/* Mobile Right Side */}
          <div className="flex items-center space-x-1 lg:hidden relative z-[60]">
            <button 
              onClick={openSearch}
              className="p-2 text-white hover:text-burnished transition-colors"
              aria-label="Search"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            
            <button
              className="p-2 text-white focus:outline-none transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
            >
              <div className="w-6 flex flex-col items-end gap-1">
                <span className={cn("h-px bg-current transition-all duration-500", isOpen ? "w-6 translate-y-1.5 rotate-45" : "w-6")} />
                <span className={cn("h-px bg-current transition-all duration-500", isOpen ? "opacity-0" : "w-4")} />
                <span className={cn("h-px bg-current transition-all duration-500", isOpen ? "w-6 -translate-y-1.5 -rotate-45" : "w-2")} />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 w-full h-screen bg-canvas lg:hidden transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] transform overflow-y-auto',
          isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        )}
      >
        <div className="absolute inset-0 dot-pattern opacity-[0.03]" />

        {/* Close Button for Mobile Menu */}
        <div className="absolute top-6 right-6 z-20">
          <button
            onClick={() => setIsOpen(false)}
            className="p-4 text-text-primary hover:text-heritage transition-colors"
            aria-label="Close Menu"
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <span className="h-px w-6 bg-current translate-y-2 rotate-45" />
              <span className="h-px w-6 bg-current opacity-0" />
              <span className="h-px w-6 bg-current -translate-y-2 -rotate-45" />
            </div>
          </button>
        </div>

        <div className="flex flex-col min-h-full px-8 pt-24 pb-20 justify-between relative z-10">
          <div className="flex flex-col space-y-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "group flex items-center justify-between border-b border-linen/30 pb-6 transition-all duration-1000",
                  isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="flex items-center gap-8">
                  <span className="text-[11px] font-mono text-heritage group-hover:text-black transition-colors">0{i + 1}</span>
                  <span className="text-4xl font-serif text-text-primary group-hover:text-heritage transition-colors font-bold tracking-tight">
                    {link.label}
                  </span>
                </div>
                <ArrowRight size={24} className="text-linen group-hover:text-heritage transition-colors" />
              </Link>
            ))}
          </div>

          <div className={cn(
            "space-y-8 transition-all duration-1000 delay-500",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="flex flex-col space-y-6 text-center">
              <div className="flex justify-center gap-12 border-y border-linen py-6">
                 <button onClick={openSearch} className="text-[11px] font-sans font-bold uppercase tracking-widest text-text-secondary hover:text-heritage transition-colors flex items-center gap-2">
                   <Search size={16} /> Search
                 </button>
                 <Link href="/quiz" onClick={() => setIsOpen(false)} className="text-[11px] font-sans font-bold uppercase tracking-widest text-text-secondary hover:text-heritage transition-colors">Aesthetic Quiz</Link>
              </div>
              <a href="mailto:hello@zingblissevents.com" className="text-lg font-serif text-text-primary font-bold underline underline-offset-8 decoration-heritage/20 hover:decoration-heritage transition-all duration-500">hello@zingblissevents.com</a>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="solid" className="w-full h-16 btn-prestige font-bold text-[10px] tracking-[0.3em]">
                  BOOK CONSULTATION
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
