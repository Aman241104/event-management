'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

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
              "group relative overflow-hidden bg-surface cursor-pointer",
              item.size === 'large' ? "col-span-2 row-span-2 h-[350px] md:h-[500px]" : "h-[180px] md:h-[240px]",
              item.size === 'medium' ? "col-span-2 h-[180px] md:h-[240px]" : ""
            )}
          >
            <Image 
              src={item.image} 
              alt={item.title} 
              fill
              className="object-cover transition-transform duration-[10s] group-hover:scale-110 grayscale-[0.3]"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-heritage/80 opacity-0 lg:group-hover:opacity-100 transition-all duration-700 flex flex-col justify-center items-center p-8 text-center backdrop-blur-sm transform translate-y-4 lg:group-hover:translate-y-0 pointer-events-none lg:pointer-events-auto">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-canvas/60 mb-4 transform translate-y-4 opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-700 delay-100">{item.category}</span>
              <h4 className="text-2xl md:text-3xl font-serif font-bold text-canvas mb-8 transform translate-y-4 opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-700 delay-200">{item.title}</h4>
              <div className="transform translate-y-4 opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-700 delay-300">
                <div className="p-4 border border-canvas/20 rounded-none text-canvas hover:bg-canvas hover:text-heritage transition-all duration-500">
                  <Maximize2 className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-canvas/98 backdrop-blur-2xl p-4 transition-all duration-500"
          onClick={() => setSelectedItemIndex(null)}
        >
          <div className="absolute inset-0 dot-pattern opacity-[0.05]" />
          
          <button 
            className="absolute top-8 right-8 p-3 text-heritage hover:text-text-primary transition-colors z-[110]"
            onClick={() => setSelectedItemIndex(null)}
          >
            <X size={40} strokeWidth={1} />
          </button>

          <button 
            className="absolute left-8 top-1/2 -translate-y-1/2 p-4 text-heritage/40 hover:text-heritage transition-colors z-[110]"
            onClick={handlePrev}
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>

          <button 
            className="absolute right-8 top-1/2 -translate-y-1/2 p-4 text-heritage/40 hover:text-heritage transition-colors z-[110]"
            onClick={handleNext}
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>

          <div 
            className="relative max-w-6xl w-full h-[70vh] flex flex-col items-center justify-center space-y-12"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full arch-mask border border-linen overflow-hidden">
              <Image 
                src={selectedItem.image} 
                alt={selectedItem.title} 
                fill
                className="object-cover"
                sizes="90vw"
                priority
              />
            </div>
            <div className="text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.5em] text-heritage">{selectedItem.category}</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-text-primary tracking-tight">{selectedItem.title}</h2>
              <div className="w-24 h-px bg-linen mx-auto mt-6" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
