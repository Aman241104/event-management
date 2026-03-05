import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'gold' | 'emerald' | 'outline' | 'ivory';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
}

export function Badge({
  className,
  variant = 'gold',
  size = 'md',
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    gold: 'bg-secondary/10 text-secondary border-secondary/20',
    emerald: 'bg-primary/20 text-text-moss border-primary/30',
    outline: 'bg-transparent border border-border-subtle text-text-moss',
    ivory: 'bg-text-primary text-bg-main border-transparent',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-3 py-1 text-[11px] tracking-[0.1em]',
    lg: 'px-4 py-1.5 text-[12px] tracking-[0.1em]',
  };

  const dots = {
    gold: 'bg-secondary',
    emerald: 'bg-primary',
    outline: 'bg-text-moss',
    ivory: 'bg-bg-main',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center font-sans font-bold uppercase tracking-wider rounded-none sm:rounded-[2px] border',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            'mr-2 h-1.5 w-1.5 rounded-full ring-1 ring-white/10 animate-pulse',
            dots[variant]
          )}
        />
      )}
      {children}
    </div>
  );
}
