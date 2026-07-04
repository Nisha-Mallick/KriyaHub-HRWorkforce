import { Search } from 'lucide-react';
import { cn } from '../../utils/cn.js';

export default function SearchBar({ value, onChange, placeholder = 'Search', className }) {
  return (
    <div className={cn('relative', className)}>
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" aria-hidden="true" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full rounded-xl border border-border bg-white py-2 pl-9 pr-3 text-sm text-text-primary placeholder:text-text-secondary focus-ring focus-visible:border-primary-400"
      />
    </div>
  );
}
