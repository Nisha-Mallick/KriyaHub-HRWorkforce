import { forwardRef } from 'react';
import { cn } from '../../utils/cn.js';

const Input = forwardRef(function Input(
  { label, error, hint, icon: Icon, id, className, containerClassName, ...rest },
  ref
) {
  const inputId = id || rest.name;

  return (
    <div className={cn('flex flex-col gap-1.5', containerClassName)}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-text-primary">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && <Icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" aria-hidden="true" />}
        <input
          id={inputId}
          ref={ref}
          className={cn(
            'w-full rounded-xl border border-border bg-white px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-secondary',
            'transition-colors focus-ring focus-visible:border-primary-400',
            Icon && 'pl-9',
            error && 'border-danger focus-visible:ring-red-300',
            className
          )}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
          {...rest}
        />
      </div>
      {error && (
        <span id={`${inputId}-error`} className="text-xs text-danger">
          {error}
        </span>
      )}
      {!error && hint && (
        <span id={`${inputId}-hint`} className="text-xs text-text-secondary">
          {hint}
        </span>
      )}
    </div>
  );
});

export default Input;
