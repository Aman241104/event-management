'use client';

import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/atoms/Card';
import { cn } from '@/lib/utils';

interface TestimonialItem {
  id: number;
  content: string;
  author: string;
  role: string;
  event: string;
  rating: number;
  avatar: string;
}

interface TestimonialProps {
  testimonial: TestimonialItem;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialProps) {
  return (
    <Card 
      sharp 
      className={cn(
        "bg-transparent border-t border-b border-l-0 border-r-0 border-linen p-12 hover:border-heritage transition-colors duration-700 group",
        className
      )}
    >
      <div className="space-y-12">
        <p className="text-2xl md:text-3xl font-serif leading-relaxed text-text-primary font-light italic">
          &quot;{testimonial.content}&quot;
        </p>
        <div className="flex items-center gap-6">
          <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded-full border border-linen">
            <Image 
              src={testimonial.avatar} 
              alt={testimonial.author} 
              fill
              className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
              sizes="64px"
            />
          </div>
          <div>
            <h4 className="text-lg font-bold font-serif text-burnished">{testimonial.author}</h4>
            <p className="text-sm font-sans tracking-widest uppercase text-heritage">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
