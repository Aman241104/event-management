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
    solid: 'bg-primary/10 text-primary border border-primary/20',
    outline: 'border border-border-subtle text-text-secondary',
    ghost: 'bg-transparent text-text-secondary',
  };

  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-sans font-medium rounded-full",
      variants[variant],
      className
    )}>
      {dot && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
      {children}
    </div>
  );
}
