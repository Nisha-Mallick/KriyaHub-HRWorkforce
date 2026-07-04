import { cn } from '../../utils/cn.js';
import { getInitials } from '../../utils/formatters.js';

const SIZE_CLASSES = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-16 w-16 text-lg',
  xl: 'h-24 w-24 text-2xl',
};

export default function Avatar({ name, src, size = 'md', color = '#714B67', statusDot, className }) {
  return (
    <div className={cn('relative inline-flex shrink-0', className)}>
      {src ? (
        <img
          src={src}
          alt={name}
          className={cn('rounded-full object-cover', SIZE_CLASSES[size])}
        />
      ) : (
        <div
          className={cn('flex items-center justify-center rounded-full font-semibold text-white', SIZE_CLASSES[size])}
          style={{ backgroundColor: color }}
          aria-label={name}
        >
          {getInitials(name)}
        </div>
      )}
      {statusDot && (
        <span
          className={cn(
            'absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full ring-2 ring-white',
            statusDot === 'present' && 'bg-success',
            statusDot === 'on_leave' && 'bg-warning',
            statusDot === 'absent' && 'bg-danger'
          )}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
