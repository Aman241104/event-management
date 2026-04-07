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
}

export function Gallery({ items, className, hasCursorLabel = true }: GalleryProps) {
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
      <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6", className)}>
        {items.map((item, index) => {
          return (
            <div 
              key={item.id} 
              onClick={() => setSelectedItemIndex(index)}
              className={cn(
                "group relative cursor-pointer transition-all duration-1000 aspect-[4/5] overflow-hidden rounded-2xl",
                "hover:scale-[1.02] hover:shadow-2xl"
              )}
              data-cursor={hasCursorLabel ? "VIEW" : undefined}
            >
              <div className="absolute inset-0 z-0">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  className="object-cover transition-transform duration-[10s] group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Dark Overlay with Content */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out z-10 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-burnished mb-2 block">{item.category}</span>
                  <h4 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">{item.title}</h4>
                  {item.location && (
                    <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/60">{item.location}</p>
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
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-primary tracking-tight italic">{selectedItem.title}</h2>
              <div className="w-16 h-px bg-heritage/20 mx-auto mt-4" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
