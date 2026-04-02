import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'solid' | 'outline' | 'ghost';
  dot?: boolean;
  className?: string;
}

export function Badge({ children, variant = 'solid', dot, className }: BadgeProps) {
  const variants = {
    solid: 'bg-heritage/10 text-heritage-dark border border-heritage/20',
    outline: 'border border-linen text-text-secondary',
    ghost: 'bg-transparent text-text-secondary',
  };

  return (
    <div className={cn(
      "inline-flex items-center gap-1.5 px-3 py-1 text-[9px] uppercase tracking-[0.15em] font-sans font-bold rounded-full",
      variants[variant],
      className
    )}>
      {dot && <div className="w-1 h-1 rounded-full bg-heritage/60" />}
      {children}
    </div>
  );
}
