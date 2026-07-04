import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bell, LogOut, User } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth.js';
import { useDisclosure } from '../../hooks/useDisclosure.js';
import { useClickOutside } from '../../hooks/useClickOutside.js';
import { NAV_ITEMS, ADMIN_NAV_ITEMS } from '../../utils/constants.js';
import { cn } from '../../utils/cn.js';
import Avatar from './Avatar.jsx';
import AuthModal from '../auth/AuthModal.jsx';

export default function Navbar() {
  const { user, isAdmin, logout } = useAuth();
  const { isOpen, toggle, close } = useDisclosure(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const menuRef = useRef(null);
  useClickOutside(menuRef, close);

  const navItems = isAdmin ? ADMIN_NAV_ITEMS : NAV_ITEMS;
  const profilePath = isAdmin ? '/admin/dashboard' : '/profile';

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">K</span>
          <span className="hidden text-base font-semibold text-text-primary sm:inline">KriyaHub</span>
        </NavLink>

        <nav className="hidden flex-1 items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'rounded-lg px-3.5 py-2 text-sm font-medium transition-colors focus-ring',
                  isActive ? 'bg-primary-50 text-primary' : 'text-text-secondary hover:bg-gray-100 hover:text-text-primary'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <button
            type="button"
            aria-label="Notifications"
            className="rounded-full p-2 text-text-secondary hover:bg-gray-100 focus-ring"
          >
            <Bell className="h-5 w-5" />
          </button>

          <div className="relative" ref={menuRef}>
            {user ? (
              <>
                <button
                  type="button"
                  onClick={toggle}
                  aria-haspopup="menu"
                  aria-expanded={isOpen}
                  className="flex items-center gap-2 rounded-full focus-ring p-1 hover:bg-gray-100 transition-colors"
                >
                  <Avatar name={user?.name} src={user?.avatarUrl} color={user?.avatarColor} size="sm" statusDot="present" />
                  <span className="hidden text-sm font-medium text-text-primary sm:block pr-2">
                    {user?.name}
                  </span>
                </button>

                {isOpen && (
                  <div
                    role="menu"
                    className="absolute right-0 mt-2 w-48 rounded-xl border border-border bg-card p-1.5 shadow-card"
                  >
                    <NavLink
                      to={profilePath}
                      onClick={close}
                      role="menuitem"
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-text-primary hover:bg-gray-100"
                    >
                      <User className="h-4 w-4" /> My Profile
                    </NavLink>
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        close();
                        logout();
                      }}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-danger hover:bg-red-50"
                    >
                      <LogOut className="h-4 w-4" /> Log Out
                    </button>
                  </div>
                )}
              </>
            ) : (
              <button
                type="button"
                onClick={() => setIsAuthModalOpen(true)}
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600 focus-ring"
              >
                Sign In / Sign Up
              </button>
            )}
          </div>
        </div>
      </div>

      <nav className="flex items-center gap-1 overflow-x-auto border-t border-border px-4 py-2 md:hidden" aria-label="Primary mobile">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                'whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium',
                isActive ? 'bg-primary-50 text-primary' : 'text-text-secondary'
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </header>
  );
}
