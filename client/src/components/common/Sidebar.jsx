import { NavLink } from 'react-router-dom';
import { cn } from '../../utils/cn.js';

/**
 * Optional secondary sidebar for admin sub-navigation (e.g. Time Off tabs).
 * The primary navigation lives in the top Navbar per the product wireframes.
 */
export default function Sidebar({ items = [], className }) {
  if (!items.length) return null;

  return (
    <aside className={cn('w-full shrink-0 sm:w-48', className)} aria-label="Secondary">
      <nav className="flex flex-col gap-1">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive ? 'bg-primary-50 text-primary' : 'text-text-secondary hover:bg-gray-100'
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
