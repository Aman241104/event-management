import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import gsap from 'gsap';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  magnetic?: boolean;
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
  magnetic = false,
  ...props
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!magnetic || !buttonRef.current) return;

    const el = buttonRef.current;
    
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      gsap.to(el, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.5,
        ease: 'power3.out'
      });
    };

    const onMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
      });
    };

    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);

    return () => {
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [magnetic]);

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
      ref={buttonRef}
      className={cn(
        'inline-flex items-center justify-center transition-all duration-700 ease-expo font-sans uppercase tracking-[0.2em] font-medium rounded-none disabled:opacity-50 disabled:pointer-events-none transform-gpu',
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
        <span className="flex items-center">
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </span>
      )}
    </button>
  );
}
