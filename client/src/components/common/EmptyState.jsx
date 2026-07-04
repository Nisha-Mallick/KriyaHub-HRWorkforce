import { Inbox } from 'lucide-react';
import { cn } from '../../utils/cn.js';

export default function EmptyState({ icon: Icon = Inbox, title = 'Nothing here yet', message, action, className }) {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-2 py-12 text-center', className)}>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-text-secondary">
        <Icon className="h-5 w-5" />
      </div>
      <p className="text-sm font-medium text-text-primary">{title}</p>
      {message && <p className="max-w-xs text-xs text-text-secondary">{message}</p>}
      {action}
    </div>
  );
}
