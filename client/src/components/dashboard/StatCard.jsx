import { cn } from '../../utils/cn.js';

export default function StatCard({ label, value, icon: Icon, accent = 'primary', className }) {
  const accentClasses = {
    primary: 'bg-primary-50 text-primary',
    success: 'bg-green-50 text-success',
    warning: 'bg-amber-50 text-warning',
    info: 'bg-blue-50 text-info',
  }[accent];

  return (
    <div className={cn('flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-card', className)}>
      {Icon && (
        <div className={cn('flex h-10 w-10 items-center justify-center rounded-xl', accentClasses)}>
          <Icon className="h-5 w-5" />
        </div>
      )}
      <div>
        <p className="text-xs text-text-secondary">{label}</p>
        <p className="text-xl font-semibold text-text-primary">{value}</p>
      </div>
    </div>
  );
}
