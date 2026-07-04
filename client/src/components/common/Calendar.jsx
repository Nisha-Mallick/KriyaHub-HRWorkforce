import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn.js';

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

/**
 * Generic month calendar grid.
 * markedDates: array of 'YYYY-MM-DD' strings to highlight.
 */
export default function Calendar({ markedDates = [], initialDate = new Date(), onSelectDate }) {
  const [cursor, setCursor] = useState(new Date(initialDate.getFullYear(), initialDate.getMonth(), 1));

  const days = useMemo(() => {
    const year = cursor.getFullYear();
    const month = cursor.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < firstDay; i += 1) cells.push(null);
    for (let d = 1; d <= daysInMonth; d += 1) cells.push(d);
    return cells;
  }, [cursor]);

  function toKey(day) {
    const y = cursor.getFullYear();
    const m = String(cursor.getMonth() + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  return (
    <div className="rounded-xl border border-border bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          aria-label="Previous month"
          onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))}
          className="rounded-lg p-1.5 text-text-secondary hover:bg-gray-100 focus-ring"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="text-sm font-semibold text-text-primary">
          {cursor.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </span>
        <button
          type="button"
          aria-label="Next month"
          onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))}
          className="rounded-lg p-1.5 text-text-secondary hover:bg-gray-100 focus-ring"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs text-text-secondary">
        {WEEKDAYS.map((wd) => (
          <span key={wd} className="py-1 font-medium">
            {wd}
          </span>
        ))}
        {days.map((day, idx) => {
          if (!day) return <span key={`empty-${idx}`} />;
          const key = toKey(day);
          const isMarked = markedDates.includes(key);
          return (
            <button
              key={key}
              type="button"
              onClick={() => onSelectDate?.(key)}
              className={cn(
                'mx-auto flex h-7 w-7 items-center justify-center rounded-full text-xs text-text-primary hover:bg-gray-100 focus-ring',
                isMarked && 'bg-primary text-white hover:bg-primary-600'
              )}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
