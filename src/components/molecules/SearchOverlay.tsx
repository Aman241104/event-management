'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, Search as SearchIcon, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const quickLinks = [
  { label: 'Royal Palace Wedding', href: '/events/1' },
  { label: 'Corporate Gala Summit', href: '/events/2' },
  { label: 'Private Villa Party', href: '/events/3' },
  { label: 'Gallery Archive', href: '/gallery' },
];

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 500);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div
      aria-hidden={!isOpen}
      className={cn(
        "fixed inset-0 z-[100] w-full h-screen bg-canvas/98 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)]",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="absolute inset-0 dot-pattern opacity-[0.03] pointer-events-none" />
      
      <button
        onClick={onClose}
        className="absolute top-8 right-8 p-4 text-heritage hover:text-text-primary transition-all duration-500 z-[110] group"
        aria-label="Close Search"
      >
        <X size={32} strokeWidth={1} className="group-hover:rotate-90 transition-transform duration-500" />
      </button>

      <div className="container h-full flex flex-col justify-center max-w-5xl relative z-10">
        <div className={cn(
          "space-y-16 transition-all duration-1000 delay-300 transform",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <div className="relative group">
            <SearchIcon className="absolute left-0 top-1/2 -translate-y-1/2 text-heritage opacity-40 group-focus-within:opacity-100 transition-opacity w-6 h-6 md:w-8 md:h-8" strokeWidth={1} />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent border-b border-linen py-6 md:py-8 pl-10 md:pl-14 text-2xl md:text-6xl font-serif text-text-primary placeholder:text-text-secondary/20 outline-none focus:border-heritage transition-all duration-700"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-6 md:space-y-10">
              <h3 className="text-[10px] md:text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-heritage/50">Quick Suggestions</h3>
              <div className="flex flex-col gap-4 md:gap-6">
                {quickLinks.map((link, i) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={onClose}
                    className="text-xl md:text-3xl font-serif text-text-primary hover:text-heritage transition-all duration-500 flex items-center justify-between group border-b border-linen/30 pb-3 md:pb-4"
                  >
                    <span className="flex items-center gap-4 md:gap-6">
                      <span className="text-[9px] md:text-[10px] font-mono text-heritage/30">0{i+1}</span>
                      {link.label}
                    </span>
                    <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 w-5 h-5 md:w-6 md:h-6" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-6 md:space-y-10">
              <h3 className="text-[10px] md:text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-heritage/50">Collections</h3>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {['Weddings', 'Corporate', 'Birthdays', 'Private', 'Festivals'].map((cat) => (
                  <Link
                    key={cat}
                    href={`/gallery?category=${cat}`}
                    onClick={onClose}
                    className="px-6 md:px-8 py-3 md:py-4 border border-linen text-[10px] md:text-[11px] uppercase tracking-widest font-bold text-text-secondary hover:border-heritage hover:text-heritage hover:bg-surface transition-all duration-500"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
