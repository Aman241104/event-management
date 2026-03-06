'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface Section {
  id: string;
  label: string;
}

export function SectionNavigator() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('');

  const sections = useMemo(() => {
    switch (pathname) {
      case '/':
        return [
          { id: 'hero', label: 'Start' },
          { id: 'about', label: 'Agency' },
          { id: 'services', label: 'Pillars' },
          { id: 'event-types', label: 'Expertise' },
          { id: 'stats', label: 'Impact' },
          { id: 'archives', label: 'Portfolio' },
          { id: 'testimonials', label: 'Reviews' },
          { id: 'how-it-works', label: 'Process' },
          { id: 'instagram', label: 'Feed' },
          { id: 'cta', label: 'Contact' },
        ];
      case '/about':
        return [
          { id: 'header', label: 'Story' },
          { id: 'philosophy', label: 'Vision' },
          { id: 'vision', label: 'Mission' },
          { id: 'visionaries', label: 'Architects' },
          { id: 'stats', label: 'Metrics' },
          { id: 'why-choose-us', label: 'The Edge' },
          { id: 'cta', label: 'Begin' },
        ];
      case '/services':
        return [
          { id: 'header', label: 'Offerings' },
          { id: 'list', label: 'Disciplines' },
          { id: 'process', label: 'Journey' },
          { id: 'faq', label: 'FAQ' },
          { id: 'cta', label: 'Inquire' },
        ];
      case '/gallery':
        return [
          { id: 'header', label: 'Gallery' },
          { id: 'highlights', label: 'Featured' },
          { id: 'filter', label: 'Collections' },
          { id: 'grid', label: 'Archives' },
          { id: 'cta', label: 'Booking' },
        ];
      case '/contact':
        return [
          { id: 'header', label: 'Connect' },
          { id: 'content', label: 'Inquiry' },
        ];
      default:
        if (pathname.startsWith('/events/')) {
          return [
            { id: 'header', label: 'Archive' },
            { id: 'image', label: 'Visual' },
            { id: 'content', label: 'Narrative' },
            { id: 'cta', label: 'Legacy' },
          ];
        }
        return [];
    }
  }, [pathname]);

  useEffect(() => {
    if (sections.length === 0) return;

    const observers = sections.map((section) => {
      const el = document.getElementById(section.id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section.id);
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (sections.length === 0) return null;

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden 2xl:flex flex-col gap-6 items-center">
      {sections.map((section) => (
        <button 
          key={section.id}
          onClick={() => scrollTo(section.id)}
          className="group flex items-center gap-4 relative"
        >
          <div className={cn(
            "section-dot",
            activeSection === section.id && "active"
          )} />
          <span className={cn(
            "absolute left-6 text-[8px] uppercase tracking-[0.3em] font-bold transition-all duration-500 opacity-0 -translate-x-2 pointer-events-none whitespace-nowrap",
            activeSection === section.id ? "opacity-40 translate-x-0" : "group-hover:opacity-100 group-hover:translate-x-0"
          )}>
            {section.label}
          </span>
        </button>
      ))}
    </div>
  );
}
