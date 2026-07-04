import { Outlet } from 'react-router-dom';

import { Users } from 'lucide-react';

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
            <Users className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">KriyaHub<span className="text-primary-500">HR</span></h1>
          <p className="text-sm text-text-secondary">Human Resource Management System</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-8 shadow-card">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
