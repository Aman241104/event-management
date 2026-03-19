'use client';

import React, { useState, useEffect } from 'react';
import { VolumeX } from 'lucide-react';
import { Magnetic } from './Magnetic';

export function AudioToggle() {
  const [isMuted, setIsMuted] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <Magnetic strength={0.3}>
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="fixed bottom-24 md:bottom-8 left-8 z-50 flex items-center justify-center w-12 h-12 rounded-full border border-linen bg-surface/80 backdrop-blur-md text-heritage hover:border-heritage transition-colors duration-500 shadow-sm group"
        aria-label={isMuted ? "Unmute Ambient Sound" : "Mute Ambient Sound"}
      >
        {isMuted ? (
          <VolumeX size={16} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
        ) : (
          <div className="flex items-center gap-[2px]">
            <span className="w-[2px] h-3 bg-heritage animate-[sound-wave_1s_ease-in-out_infinite]" />
            <span className="w-[2px] h-4 bg-heritage animate-[sound-wave_1.2s_ease-in-out_infinite_0.2s]" />
            <span className="w-[2px] h-2 bg-heritage animate-[sound-wave_0.8s_ease-in-out_infinite_0.4s]" />
          </div>
        )}
      </button>
    </Magnetic>
  );
}
