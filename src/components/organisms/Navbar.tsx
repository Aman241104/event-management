'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ArrowRight } from 'lucide-react';
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      <header className={cn(
        "fixed top-0 w-full z-50 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] border-b",
        isScrolled ? "bg-canvas/90 backdrop-blur-md border-linen/30 py-3 shadow-[0_1px_10px_rgba(0,0,0,0.01)]" : "bg-transparent border-transparent py-6",
        (isOpen || isSearchOpen) && "border-transparent bg-transparent backdrop-blur-0"
      )}>
        <nav className="container flex items-center justify-between">
          <Magnetic strength={0.05}>
            <Link href="/" onClick={() => setIsOpen(false)} className="relative z-[60]">
              <Logo scrolled={isScrolled} />
            </Link>
          </Magnetic>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Magnetic key={link.label} strength={0.1}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-[9px] font-sans font-bold uppercase tracking-[0.4em] transition-colors duration-700 relative group py-1.5",
                    isScrolled ? "text-text-secondary hover:text-heritage" : "text-white/90 hover:text-heritage-light"
                  )}
                >
                  {link.label}
                  <span 
                    className={cn(
                      "absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-1000 cubic-bezier(0.19,1,0.22,1) group-hover:w-full",
                      isScrolled ? "bg-heritage/40" : "bg-white/60"
                    )} 
                  />
                </Link>
              </Magnetic>
            ))}
            
            <div className="flex items-center space-x-10 pl-10 border-l border-linen/30">
              <Magnetic strength={0.2}>
                <button 
                  onClick={openSearch}
                  className={cn(
                    "transition-colors duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] flex items-center gap-3 group relative overflow-hidden py-1.5",
                    isScrolled ? "text-text-secondary hover:text-heritage" : "text-white/90 hover:text-heritage-light"
                  )}
                  aria-label="Search"
                >
                  <Search size={14} strokeWidth={1} className="group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                  <span className="text-[8px] font-bold uppercase tracking-widest translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]">Search</span>
                </button>
              </Magnetic>

              <Magnetic strength={0.2}>
                <Link href="/contact">
                  <Button size="sm" className={cn(
                    "rounded-none px-10 h-12 transition-all duration-1000 font-bold text-[9px] tracking-[0.2em] border-0 shadow-lg hover:scale-105",
                    !isScrolled && "shadow-white/10"
                  )}>
                    BOOK CONSULTATION
                  </Button>
                </Link>
              </Magnetic>
            </div>
          </div>

          {/* Mobile Right Side */}
          <div className="flex items-center space-x-1 lg:hidden relative z-[60]">
            <button 
              onClick={openSearch}
              className={cn(
                "p-3 transition-colors",
                isScrolled ? "text-text-primary hover:text-heritage" : "text-white hover:text-burnished"
              )}
              aria-label="Search"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            
            <button
              className={cn(
                "p-3 focus:outline-none transition-colors",
                isScrolled ? "text-text-primary hover:text-heritage" : "text-white hover:text-burnished"
              )}
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
            >
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span className={cn("h-px bg-current transition-all duration-500", isOpen ? "w-6 translate-y-2 rotate-45" : "w-6")} />
                <span className={cn("h-px bg-current transition-all duration-500", isOpen ? "opacity-0" : "w-4")} />
                <span className={cn("h-px bg-current transition-all duration-500", isOpen ? "w-6 -translate-y-2 -rotate-45" : "w-2")} />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 w-full h-screen bg-canvas lg:hidden transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] transform',
          isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        )}
      >
        <div className="absolute inset-0 dot-pattern opacity-[0.03]" />

        <div className="flex flex-col h-full px-8 pt-40 pb-12 justify-between relative z-10">
          <div className="flex flex-col space-y-10">
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
            "space-y-12 transition-all duration-1000 delay-500",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="flex flex-col space-y-8 text-center">
              <div className="flex justify-center gap-12 border-y border-linen py-8">
                 <button onClick={openSearch} className="text-[11px] font-sans font-bold uppercase tracking-widest text-text-secondary hover:text-heritage transition-colors flex items-center gap-2">
                   <Search size={16} /> Search
                 </button>
                 <Link href="/quiz" onClick={() => setIsOpen(false)} className="text-[11px] font-sans font-bold uppercase tracking-widest text-text-secondary hover:text-heritage transition-colors">Aesthetic Quiz</Link>
              </div>
              <a href="mailto:hello@zingblissevents.com" className="text-xl font-serif text-text-primary font-bold underline underline-offset-8 decoration-heritage/20 hover:decoration-heritage transition-all duration-500">hello@zingblissevents.com</a>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="solid" className="w-full h-20 btn-prestige font-bold text-sm tracking-[0.3em]">
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
