import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center gap-2 text-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
            K
          </span>
          <h1 className="text-lg font-semibold text-text-primary">KriyaHub</h1>
          <p className="text-sm text-text-secondary">Human Resource Management System</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-8 shadow-card">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
