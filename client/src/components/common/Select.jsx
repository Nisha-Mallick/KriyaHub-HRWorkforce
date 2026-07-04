import { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn.js';

const Select = forwardRef(function Select(
  { label, error, options = [], placeholder = 'Select', id, className, containerClassName, ...rest },
  ref
) {
  const selectId = id || rest.name;

  return (
    <div className={cn('flex flex-col gap-1.5', containerClassName)}>
      {label && (
        <label htmlFor={selectId} className="text-sm font-medium text-text-primary">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          ref={ref}
          className={cn(
            'w-full appearance-none rounded-xl border border-border bg-white px-3.5 py-2.5 pr-9 text-sm text-text-primary',
            'transition-colors focus-ring focus-visible:border-primary-400',
            error && 'border-danger focus-visible:ring-red-300',
            className
          )}
          {...rest}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
      </div>
      {error && <span className="text-xs text-danger">{error}</span>}
    </div>
  );
});

export default Select;
