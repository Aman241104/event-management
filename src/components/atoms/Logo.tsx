import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center space-x-3 cursor-pointer group">
      <div className="w-8 h-8 border border-secondary flex items-center justify-center transition-transform duration-700 group-hover:rotate-45">
        <div className="w-3 h-3 bg-secondary rounded-full" />
      </div>
      <span className="text-xl font-serif font-bold tracking-widest text-text-primary uppercase">
        Prestige<span className="text-secondary">.</span>
      </span>
    </div>
  );
}
