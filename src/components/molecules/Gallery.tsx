'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
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

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % items.length);
    }
  }, [selectedItemIndex, items.length]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex - 1 + items.length) % items.length);
    }
  }, [selectedItemIndex, items.length]);

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
  }, [selectedItemIndex, handleNext, handlePrev]);

  return (
    <>
      <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-4", className)}>
        {items.map((item, index) => (
          <div 
            key={item.id} 
            onClick={() => setSelectedItemIndex(index)}
            className={cn(
              "group relative overflow-hidden bg-bg-surface cursor-pointer",
              item.size === 'large' ? "col-span-2 row-span-2 h-[500px]" : "h-[240px]",
              item.size === 'medium' ? "col-span-2 h-[240px]" : ""
            )}
          >
            <Image 
              src={item.image} 
              alt={item.title} 
              fill
              className="object-cover transition-transform duration-[10s] group-hover:scale-110 grayscale-[0.3]"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-center items-center p-6 text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-secondary mb-3">{item.category}</span>
              <h4 className="text-2xl font-serif font-light text-text-primary mb-6">{item.title}</h4>
              <div className="flex gap-4">
                <div className="p-3 border border-border-subtle rounded-full text-text-primary hover:bg-primary hover:text-white transition-colors duration-500">
                  <Maximize2 size={16} strokeWidth={1} />
                </div>
                <div className="p-3 border border-border-subtle rounded-full text-text-primary hover:bg-primary hover:text-white transition-colors duration-500">
                  <ExternalLink size={16} strokeWidth={1} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-xl p-4 transition-all duration-500 animate-fade-in"
          onClick={() => setSelectedItemIndex(null)}
        >
          <button 
            className="absolute top-8 right-8 p-3 text-text-primary hover:text-primary transition-colors z-[110]"
            onClick={() => setSelectedItemIndex(null)}
          >
            <X size={32} strokeWidth={1} />
          </button>

          <button 
            className="absolute left-8 top-1/2 -translate-y-1/2 p-4 text-text-primary hover:text-primary transition-colors z-[110]"
            onClick={handlePrev}
          >
            <ChevronLeft size={32} strokeWidth={1} />
          </button>

          <button 
            className="absolute right-8 top-1/2 -translate-y-1/2 p-4 text-text-primary hover:text-primary transition-colors z-[110]"
            onClick={handleNext}
          >
            <ChevronRight size={32} strokeWidth={1} />
          </button>

          <div 
            className="relative max-w-5xl w-full h-full max-h-[80vh] flex flex-col items-center justify-center space-y-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image 
                src={selectedItem.image} 
                alt={selectedItem.title} 
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
            <div className="text-center space-y-3 pb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-secondary">{selectedItem.category}</span>
              <h2 className="text-4xl font-serif font-light text-text-primary">{selectedItem.title}</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
