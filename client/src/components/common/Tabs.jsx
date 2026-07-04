import { cn } from '../../utils/cn.js';

/**
 * tabs: [{ key, label }]
 */
export default function Tabs({ tabs, activeKey, onChange, className }) {
  return (
    <div className={cn('flex items-center gap-1 border-b border-border', className)} role="tablist">
      {tabs.map((tab) => {
        const isActive = tab.key === activeKey;
        return (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.key)}
            className={cn(
              'relative px-4 py-2.5 text-sm font-medium transition-colors focus-ring rounded-t-lg',
              isActive ? 'text-primary' : 'text-text-secondary hover:text-text-primary'
            )}
          >
            {tab.label}
            {isActive && <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary" />}
          </button>
        );
      })}
    </div>
  );
}
