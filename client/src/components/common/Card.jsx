import { cn } from '../../utils/cn.js';

export default function Card({ children, className, as: Tag = 'div', ...rest }) {
  return (
    <Tag
      className={cn('rounded-xl border border-border bg-card p-5 shadow-card', className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function CardHeader({ title, subtitle, action, className }) {
  return (
    <div className={cn('mb-4 flex items-center justify-between gap-3', className)}>
      <div>
        <h3 className="text-sm font-semibold text-text-primary">{title}</h3>
        {subtitle && <p className="mt-0.5 text-xs text-text-secondary">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
