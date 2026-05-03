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
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'SERVICES', href: '/services' },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'CLIENTS', href: '/clients' },
  { label: 'BLOG', href: '/blog' },
  { label: 'CONTACT US', href: '/contact' },
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
          "fixed top-0 w-full z-50 transition-all duration-700 ease-in-out",
          isScrolled 
            ? "bg-heritage/90 backdrop-blur-xl py-2 shadow-[0_10px_50px_rgba(0,0,0,0.4)] border-b border-white/5" 
            : "bg-transparent py-4",
          (isOpen || isSearchOpen) && "bg-transparent backdrop-blur-0 shadow-none"
        )}
      >
        <nav className="container flex items-center justify-between gap-4">
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex justify-start items-center">
            <Magnetic strength={0.05}>
              <Link href="/" onClick={() => setIsOpen(false)} className="relative z-[60] block origin-left">
                <Logo scrolled={isScrolled} variant="navbar" />
              </Link>
            </Magnetic>
          </div>

          {/* Center: Desktop Links */}
          <div className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 flex-grow mx-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Magnetic key={link.label} strength={0.1}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-[9px] xl:text-[10px] font-sans font-bold uppercase tracking-[0.15em] xl:tracking-[0.2em] transition-all duration-500 relative py-2 group/nav whitespace-nowrap",
                      isActive ? "text-[#D4B982]" : (isScrolled ? "text-white" : "text-white/90 hover:text-[#D4B982]")
                    )}
                  >
                    {link.label}
                    <span className={cn(
                      "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#D4B982] transition-all duration-700 shadow-[0_0_8px_rgba(212,185,130,0.8)]",
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover/nav:opacity-50 group-hover/nav:scale-100"
                    )} />
                  </Link>
                </Magnetic>
              );
            })}
          </div>
          
          {/* Right: CTA & Search */}
          <div className="hidden lg:flex items-center justify-end gap-4 xl:gap-6 flex-shrink-0">
            <button 
              onClick={openSearch}
              className="p-1.5 text-white/70 hover:text-[#D4B982] transition-all duration-500 hover:scale-110"
              aria-label="Search"
            >
              <Search size={16} strokeWidth={1.5} />
            </button>
            
            <Magnetic strength={0.2}>
              <Link href="/contact">
                <Button size="sm" className="rounded-none px-5 xl:px-7 h-10 xl:h-11 bg-[#D4B982] hover:bg-white hover:text-black transition-all duration-700 font-bold text-[9px] xl:text-[10px] tracking-[0.2em] border-0 shadow-[0_10px_20px_rgba(212,185,130,0.15)] active:scale-95 group/btn">
                  <span className="relative z-10 whitespace-nowrap">PLAN YOUR EVENT</span>
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
          'fixed inset-0 z-50 w-full h-screen bg-heritage lg:hidden transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] transform overflow-y-auto',
          isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        )}
      >
        <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,185,130,0.08)_0%,_transparent_50%)]" />

        {/* Close Button for Mobile Menu */}
        <div className="absolute top-8 right-8 z-20">
          <button
            onClick={() => setIsOpen(false)}
            className="p-4 text-white hover:text-[#D4B982] transition-colors"
            aria-label="Close Menu"
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <span className="h-px w-6 bg-current translate-y-2 rotate-45" />
              <span className="h-px w-6 bg-current opacity-0" />
              <span className="h-px w-6 bg-current -translate-y-2 -rotate-45" />
            </div>
          </button>
        </div>

        <div className="flex flex-col min-h-full px-10 pt-32 pb-20 justify-between relative z-10">
          <div className="flex flex-col space-y-10">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "group flex items-center justify-between border-b border-white/5 pb-8 transition-all duration-1000",
                  isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${(i + 1) * 80}ms` }}
              >
                <div className="flex items-center gap-8">
                  <span className="text-[11px] font-mono text-[#D4B982]/60 group-hover:text-[#D4B982] transition-colors">0{i + 1}</span>
                  <span className="text-5xl font-serif text-white group-hover:text-[#D4B982] transition-colors font-bold tracking-tight italic">
                    {link.label}
                  </span>
                </div>
                <ArrowRight size={24} className="text-white/20 group-hover:text-[#D4B982] transition-colors group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            ))}
          </div>

          <div className={cn(
            "space-y-12 transition-all duration-1000 delay-500",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="flex flex-col space-y-8 text-center">
              <div className="flex justify-center gap-12 border-y border-white/5 py-8">
                 <button onClick={openSearch} className="text-[11px] font-sans font-bold uppercase tracking-[0.3em] text-white/50 hover:text-[#D4B982] transition-colors flex items-center gap-3">
                   <Search size={18} /> SEARCH
                 </button>
                 <Link href="/quiz" onClick={() => setIsOpen(false)} className="text-[11px] font-sans font-bold uppercase tracking-[0.3em] text-white/50 hover:text-[#D4B982] transition-colors">AESTHETIC QUIZ</Link>
              </div>
              <a href="mailto:hello@zingblissevents.com" className="text-xl font-serif text-white font-bold underline underline-offset-8 decoration-[#D4B982]/20 hover:decoration-[#D4B982] transition-all duration-500 italic">hello@zingblissevents.com</a>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="solid" className="w-full h-18 bg-[#D4B982] text-black font-bold text-[11px] tracking-[0.4em] rounded-none">
                  PLAN YOUR EVENT
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
