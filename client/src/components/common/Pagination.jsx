import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn.js';

export default function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <nav className="flex items-center justify-between gap-4 pt-4" aria-label="Pagination">
      <button
        type="button"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-sm text-text-secondary hover:bg-gray-100 disabled:opacity-40 focus-ring"
      >
        <ChevronLeft className="h-4 w-4" /> Prev
      </button>
      <span className="text-xs text-text-secondary">
        Page {page} of {totalPages}
      </span>
      <button
        type="button"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className={cn(
          'inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-sm text-text-secondary hover:bg-gray-100 disabled:opacity-40 focus-ring'
        )}
      >
        Next <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}
