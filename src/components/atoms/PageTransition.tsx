'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (children !== displayChildren) {
      if (isTransitioning) return;
      
      setIsTransitioning(true);
      
      const tl = gsap.timeline({
        onComplete: () => {
          setDisplayChildren(children);
          setIsTransitioning(false);
          
          // Reveal new page
          gsap.to(overlayRef.current, {
            yPercent: -100,
            duration: 1,
            ease: 'expo.inOut',
            delay: 0.2
          });
        }
      });

      // Cover page
      tl.set(overlayRef.current, { yPercent: 100 })
        .to(overlayRef.current, {
          yPercent: 0,
          duration: 1,
          ease: 'expo.inOut'
        });
    }
  }, [children, pathname, displayChildren, isTransitioning]);

  return (
    <>
      <div 
        ref={overlayRef}
        className="fixed inset-0 bg-heritage z-[9999] pointer-events-none translate-y-full"
      >
        <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white font-serif italic text-3xl tracking-widest opacity-20">Zing Bliss</h2>        </div>
      </div>
      <div className={cn(isTransitioning ? "opacity-0" : "opacity-100", "transition-opacity duration-500")}>
        {displayChildren}
      </div>
    </>
  );
}

// Utility function because I can't import it here easily without relative path issues sometimes in my mental model, 
// but I'll use the proper one in the final write.
import { cn } from '@/lib/utils';
