import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, type = 'text', ...props }, ref) => {
    return (
      <div className="w-full space-y-3">
        {label && (
          <label className="text-xs font-bold uppercase tracking-[0.1em] text-text-moss">
            {label}
          </label>
        )}
        <div className="relative group">
          {icon && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 text-text-moss group-focus-within:text-text-primary transition-colors duration-500">
              {icon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              'w-full bg-transparent border-b border-border-subtle p-3 text-base text-text-primary focus:outline-none focus:border-text-primary transition-all duration-500 ease-out placeholder:text-text-primary/50 disabled:opacity-50 rounded-none',
              icon ? 'pl-10' : 'pl-0',
              error ? 'border-red-500 focus:border-red-500' : '',
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && (
          <p className="text-xs text-red-500 uppercase tracking-widest mt-2">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
