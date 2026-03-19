import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  className,
  variant = 'solid',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const variants = {
    solid: 'btn-prestige',
    outline: 'btn-outline-prestige',
    ghost: 'bg-transparent text-text-secondary hover:text-text-primary',
  };

  const sizes = {
    sm: 'px-6 py-3 text-[11px]',
    md: 'px-8 py-4 text-[11px]',
    lg: 'px-12 py-5 text-xs',
    icon: 'p-3',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center transition-colors duration-500 ease-out font-sans uppercase tracking-[0.2em] font-medium rounded-none disabled:opacity-50 disabled:pointer-events-none',
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
