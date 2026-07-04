import { createContext, useMemo, useState } from 'react';
import { CURRENT_USER } from '../data/mockData.js';

/**
 * AuthContext holds the currently authenticated user and role.
 * This is UI-only scaffolding — real session state will come from
 * BetterAuth once the backend is connected.
 */
export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Demo default: signed-in employee so the UI is browsable end-to-end.
  const [user, setUser] = useState(CURRENT_USER);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isAdmin: user?.role === 'admin' || user?.role === 'hr',
      login: (nextUser) => setUser(nextUser),
      logout: () => setUser(null),
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
