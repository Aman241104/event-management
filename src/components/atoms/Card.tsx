import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'ghost';
  isHoverable?: boolean;
  sharp?: boolean; // If true, border radius is 0px instead of 32px
}

export function Card({
  className,
  variant = 'default',
  isHoverable = false,
  sharp = false,
  children,
  ...props
}: CardProps) {
  const variants = {
    default: 'bg-canvas border-linen relative before:absolute before:inset-0 before:bg-[url("/grain.png")] before:opacity-5 before:pointer-events-none',
    outline: 'bg-transparent border border-linen',
    ghost: 'bg-transparent border-transparent',
  };

  const hoverable = isHoverable
    ? 'hover:border-burnished hover:-translate-y-1 transition-all duration-500 ease-out'
    : '';

  return (
    <div
      className={cn(
        'border p-8 overflow-hidden noise',
        sharp ? 'rounded-none' : 'rounded-[32px]',
        variants[variant],
        hoverable,
        className
      )}
      {...props}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
