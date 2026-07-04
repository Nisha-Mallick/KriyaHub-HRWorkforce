import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../common/Button.jsx';

export default function AttendanceDateNav({ label, onPrev, onNext, view, onViewChange }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" icon={ChevronLeft} aria-label="Previous period" onClick={onPrev} />
        <span className="text-sm font-semibold text-text-primary">{label}</span>
        <Button variant="ghost" size="sm" icon={ChevronRight} aria-label="Next period" onClick={onNext} />
      </div>
      {onViewChange && (
        <div className="flex overflow-hidden rounded-lg border border-border">
          {['Date', 'Day'].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => onViewChange(option)}
              className={`px-3 py-1.5 text-xs font-medium ${
                view === option ? 'bg-primary text-white' : 'bg-white text-text-secondary hover:bg-gray-50'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
