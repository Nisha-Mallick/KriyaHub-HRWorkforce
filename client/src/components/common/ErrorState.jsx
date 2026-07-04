import { AlertTriangle } from 'lucide-react';
import Button from './Button.jsx';
import { cn } from '../../utils/cn.js';

export default function ErrorState({ title = 'Something went wrong', message, onRetry, className }) {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-2 py-12 text-center', className)}>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-danger">
        <AlertTriangle className="h-5 w-5" />
      </div>
      <p className="text-sm font-medium text-text-primary">{title}</p>
      {message && <p className="max-w-xs text-xs text-text-secondary">{message}</p>}
      {onRetry && (
        <Button variant="secondary" size="sm" onClick={onRetry} className="mt-2">
          Try again
        </Button>
      )}
    </div>
  );
}
