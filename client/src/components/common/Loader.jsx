import { cn } from '../../utils/cn.js';

export default function Loader({ label = 'Loading', size = 'md', className }) {
  const sizeClass = { sm: 'h-4 w-4', md: 'h-6 w-6', lg: 'h-10 w-10' }[size];

  return (
    <div className={cn('flex flex-col items-center gap-2 text-text-secondary', className)} role="status">
      <span className={cn('animate-spin rounded-full border-2 border-primary-200 border-t-primary', sizeClass)} />
      <span className="text-xs">{label}</span>
    </div>
  );
}
