'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card } from '@/components/atoms/Card';
import { cn } from '@/lib/utils';
import { ExternalLink, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
  size?: 'small' | 'medium' | 'large';
}

interface GalleryProps {
  items: GalleryItem[];
  className?: string;
}

export function Gallery({ items, className }: GalleryProps) {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const selectedItem = selectedItemIndex !== null ? items[selectedItemIndex] : null;

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % items.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex - 1 + items.length) % items.length);
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItemIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    if (selectedItemIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedItemIndex]);

  return (
    <>
      <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-4", className)}>
        {items.map((item, index) => (
          <div 
            key={item.id} 
            onClick={() => setSelectedItemIndex(index)}
            className={cn(
              "group relative overflow-hidden rounded-3xl cursor-pointer bg-bg-surface",
              item.size === 'large' ? "col-span-2 row-span-2 h-[500px]" : "h-[240px]",
              item.size === 'medium' ? "col-span-2 h-[240px]" : ""
            )}
          >
            <Image 
              src={item.image} 
              alt={item.title} 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-main/90 via-bg-main/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1">{item.category}</span>
              <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
              <div className="flex gap-2">
                <div className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-primary transition-colors">
                  <Maximize2 size={18} />
                </div>
                <div className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-primary transition-colors">
                  <ExternalLink size={18} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-main/95 backdrop-blur-2xl p-4 transition-all duration-300 animate-fade-in"
          onClick={() => setSelectedItemIndex(null)}
        >
          <button 
            className="absolute top-8 right-8 p-3 bg-white/5 text-white hover:bg-primary transition-colors rounded-full z-[110]"
            onClick={() => setSelectedItemIndex(null)}
          >
            <X size={32} />
          </button>

          <button 
            className="absolute left-8 top-1/2 -translate-y-1/2 p-4 bg-white/5 text-white hover:bg-primary transition-colors rounded-full z-[110]"
            onClick={handlePrev}
          >
            <ChevronLeft size={32} />
          </button>

          <button 
            className="absolute right-8 top-1/2 -translate-y-1/2 p-4 bg-white/5 text-white hover:bg-primary transition-colors rounded-full z-[110]"
            onClick={handleNext}
          >
            <ChevronRight size={32} />
          </button>

          <div 
            className="relative max-w-6xl w-full h-full max-h-[85vh] flex flex-col items-center justify-center space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image 
                src={selectedItem.image} 
                alt={selectedItem.title} 
                fill
                className="object-contain rounded-2xl shadow-2xl shadow-primary/10"
                sizes="90vw"
                priority
              />
            </div>
            <div className="text-center space-y-2 pb-4">
              <span className="text-sm font-bold uppercase tracking-widest text-primary">{selectedItem.category}</span>
              <h2 className="text-3xl font-extrabold text-white">{selectedItem.title}</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
