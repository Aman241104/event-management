import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'emerald' | 'whatsapp' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  className,
  variant = 'gold',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const variants = {
    gold: 'bg-secondary text-bg-main font-serif font-bold hover:bg-accent-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]',
    emerald: 'bg-primary text-text-primary hover:bg-bg-surface border border-primary',
    whatsapp: 'bg-[#22C55E] text-white hover:bg-[#16a34a]',
    outline: 'bg-transparent border border-secondary text-secondary hover:bg-secondary/10',
    ghost: 'bg-transparent text-text-secondary hover:text-secondary hover:bg-secondary/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-10 py-4 text-base tracking-wide',
    icon: 'p-3',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-none sm:rounded-[4px] transition-all duration-500 ease-out active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
      )}
    </button>
  );
}
