'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import { Logo } from '@/components/atoms/Logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/atoms/Button';

const navLinks = [
  { label: 'Events', href: '/events' },
  { label: 'Services', href: '/services/corporate' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Admin', href: '/admin/events/new' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-500 ease-out bg-bg-main/80 backdrop-blur-xl border-b border-border-subtle">
      <nav className="container mx-auto px-8 h-24 flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-16">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-sm font-bold uppercase tracking-[0.1em] transition-all duration-300 relative group text-text-primary"
              )}
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link href="/admin/events/new">
            <Button variant="gold" size="sm" className="gap-2 uppercase tracking-widest text-xs">
              <Sparkles size={14} /> New Event
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-text-primary hover:text-secondary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 top-24 z-40 w-full h-[calc(100vh-6rem)] bg-bg-main/95 backdrop-blur-2xl md:hidden transition-all duration-500 transform',
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col px-8 py-12 space-y-8 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center justify-between py-6 border-b border-border-subtle/50 group text-3xl font-serif font-bold transition-colors text-text-primary"
              )}
            >
              {link.label}
              <ChevronRight className="text-border-subtle group-hover:text-secondary transition-transform duration-500 group-hover:translate-x-2" />
            </Link>
          ))}
          <div className="pt-12 pb-20">
            <Link href="/admin/events/new" onClick={() => setIsOpen(false)}>
              <Button variant="gold" className="w-full h-16 text-lg font-serif gap-2">
                <Sparkles size={20} /> Create New Event
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
