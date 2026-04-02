'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  as?: 'input' | 'select' | 'textarea';
  options?: { label: string; value: string }[];
}

export const Input = forwardRef<HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement, InputProps>(
  ({ className, label, error, icon, type = 'text', as = 'input', options, children, ...props }, ref) => {
    const Component = as as React.ElementType;
    
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="text-[9px] font-bold uppercase tracking-[0.4em] text-heritage/50">
            {label}
          </label>
        )}
        <div className="relative group">
          {icon && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 text-heritage group-focus-within:text-text-primary transition-colors duration-500">
              {icon}
            </div>
          )}
          
          <Component
            type={as === 'input' ? type : undefined}
            className={cn(
              'w-full bg-transparent border-b border-linen py-3 text-sm text-text-primary focus:outline-none focus:border-heritage transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] placeholder:text-text-secondary/20 disabled:opacity-50 rounded-none appearance-none',
              icon ? 'pl-8' : 'pl-0',
              as === 'textarea' ? 'min-h-[100px] resize-none' : '',
              error ? 'border-red-500 focus:border-red-500' : '',
              className
            )}
            ref={ref}
            {...props}
          >
            {as === 'select' && options ? (
              options.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-canvas text-text-primary text-sm">
                  {opt.label}
                </option>
              ))
            ) : children}
          </Component>

          {as === 'select' && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-heritage/30 group-focus-within:text-heritage transition-colors duration-500">
              <ChevronDown size={14} strokeWidth={1.5} />
            </div>
          )}
        </div>
        {error && (
          <p className="text-[10px] text-red-500 uppercase tracking-widest mt-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
