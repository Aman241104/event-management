'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
  location?: string;
  size?: 'small' | 'medium' | 'large' | 'tall';
}

interface GalleryProps {
  items: GalleryItem[];
  className?: string;
  hasCursorLabel?: boolean;
  aspectRatio?: string;
}

export function Gallery({ items, className, hasCursorLabel = true, aspectRatio = "aspect-[4/5]" }: GalleryProps) {
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
      <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6", className)}>
        {items.map((item, index) => {
          return (
            <div 
              key={item.id} 
              onClick={() => setSelectedItemIndex(index)}
              className={cn(
                "group relative cursor-pointer transition-all duration-500 overflow-hidden rounded-2xl shadow-md",
                aspectRatio,
                "hover:shadow-xl"
              )}
              data-cursor={hasCursorLabel ? "VIEW" : undefined}
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  className="object-cover brightness-[0.9] transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Permanent Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              {/* Overlay darkening on hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-15" />

              {/* Text Content - Always Visible */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8">
                <div className="space-y-1 transform group-hover:-translate-y-1 transition-transform duration-500">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-burnished block">{item.category}</span>
                  <h4 className="text-xl md:text-2xl font-serif font-medium text-white leading-tight">{item.title}</h4>
                  {item.location && (
                    <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/50">{item.location}</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-canvas/98 backdrop-blur-2xl p-4 md:p-12 transition-all duration-500"
          onClick={() => setSelectedItemIndex(null)}
        >
          <div className="absolute inset-0 dot-pattern opacity-[0.03] invert" />
          
          <button 
            className="absolute top-8 right-8 p-3 text-heritage hover:text-text-primary transition-colors z-[110] bg-canvas/50 rounded-full backdrop-blur-sm"
            onClick={() => setSelectedItemIndex(null)}
          >
            <X size={24} strokeWidth={1} />
          </button>

          <button 
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-heritage/30 hover:text-heritage transition-colors z-[110]"
            onClick={handlePrev}
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>

          <button 
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-heritage/30 hover:text-heritage transition-colors z-[110]"
            onClick={handleNext}
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>

          <div 
            className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center space-y-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh] frame-arch-luxury overflow-hidden shadow-2xl p-4">
              <div className="image-container">
                <Image 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  fill
                  className="object-cover"
                  sizes="90vw"
                  priority
                />
              </div>
            </div>
            <div className="text-center space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-heritage/60">{selectedItem.category}</span>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-text-primary tracking-tight italic">{selectedItem.title}</h2>
              <div className="w-16 h-px bg-heritage/20 mx-auto mt-4" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
