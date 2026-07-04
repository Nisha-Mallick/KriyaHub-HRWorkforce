import { cn } from '../../utils/cn.js';

const STATUS_MAP = {
  present: { label: 'Present', dot: 'bg-success' },
  on_leave: { label: 'On Leave', dot: 'bg-warning' },
  absent: { label: 'Absent', dot: 'bg-danger' },
  pending: { label: 'Pending', dot: 'bg-warning' },
  approved: { label: 'Approved', dot: 'bg-success' },
  rejected: { label: 'Rejected', dot: 'bg-danger' },
};

/**
 * Small dot + label used for attendance / leave status across the app.
 */
export default function StatusChip({ status, className }) {
  const config = STATUS_MAP[status] || { label: status, dot: 'bg-gray-400' };

  return (
    <span className={cn('inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary', className)}>
      <span className={cn('h-2 w-2 rounded-full', config.dot)} aria-hidden="true" />
      {config.label}
    </span>
  );
}
