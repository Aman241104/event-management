'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
import { Logo } from '@/components/atoms/Logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/atoms/Button';
import { Magnetic } from '@/components/atoms/Magnetic';
import { SearchOverlay } from '@/components/molecules/SearchOverlay';

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'SERVICES', href: '/services' },
  { label: 'PORTFOLIO', href: '/portfolio' },
  { label: 'CONTACT US', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const scrollThreshold = 10; // Minimum scroll distance to trigger hide/show

  // Reset navbar position on route change
  useEffect(() => {
    if (headerRef.current) {
      gsap.to(headerRef.current, { yPercent: 0, duration: 0.5, ease: 'power3.out', overwrite: true });
    }
    setIsOpen(false);
    setIsSearchOpen(false);
    lastScrollY.current = window.scrollY;
  }, [pathname]);

  // Optimize scroll handling with ScrollTrigger instead of manual scroll listener
  useEffect(() => {
    let showAnim = gsap.from(headerRef.current, { 
      yPercent: -100,
      paused: true,
      duration: 0.4,
      ease: "power2.out"
    }).progress(1);

    const st = ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        const isCurrentlyScrolled = self.scroll() > 50;
        
        // Only update state if it actually changed to prevent React re-renders on every tick
        setScrolled((prev) => {
          if (prev !== isCurrentlyScrolled) return isCurrentlyScrolled;
          return prev;
        });

        // Hide on scroll down, show on scroll up
        if (!isOpen && !isSearchOpen) {
          if (self.direction === -1) {
            showAnim.play();
          } else if (self.direction === 1 && self.scroll() > 200) {
            showAnim.reverse();
          }
        }
      }
    });

    return () => st.kill();
  }, [isOpen, isSearchOpen]);

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
          "fixed top-0 w-full z-50 transition-[background-color,padding,border-color,box-shadow] duration-700 ease-in-out",
          isScrolled 
            ? "bg-heritage/95 py-2 shadow-[0_10px_50px_rgba(0,0,0,0.4)] border-b border-white/5" 
            : "bg-transparent py-4",
          (isOpen || isSearchOpen) && "bg-transparent shadow-none"
        )}
      >
        <nav className="container flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start items-center">
            <Magnetic strength={0.05}>
              <Link href="/" onClick={() => setIsOpen(false)} className="relative z-[60] block origin-left">
                <Logo scrolled={isScrolled} variant="navbar" />
              </Link>
            </Magnetic>
          </div>

          {/* Center: Desktop Links */}
          <div className="hidden lg:flex items-center justify-center gap-4 xl:gap-8 mx-4">
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
          <div className="flex-1 hidden lg:flex items-center justify-end gap-4 xl:gap-6">
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

        <div className="flex flex-col min-h-full px-10 pt-24 pb-20 justify-between relative z-10">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "group flex items-center justify-between border-b border-white/5 pb-6 transition-all duration-1000",
                  isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${(i + 1) * 80}ms` }}
              >
                <div className="flex items-center gap-8">
                  <span className="text-[11px] font-mono text-[#D4B982]/60 group-hover:text-[#D4B982] transition-colors">0{i + 1}</span>
                  <span className="text-3xl font-serif text-white group-hover:text-[#D4B982] transition-colors font-bold tracking-tight italic">
                    {link.label}
                  </span>
                </div>
                <ArrowRight size={24} className="text-white/20 group-hover:text-[#D4B982] transition-colors group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            ))}
          </div>

          <div className={cn(
            "space-y-12 transition-all duration-1000 delay-500 mt-auto",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="flex flex-col space-y-8 text-center">
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
