import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import AuthLayout from '../layouts/AuthLayout.jsx';
import DashboardLayout from '../layouts/DashboardLayout.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import Loader from '../components/common/Loader.jsx';

// Lazy loaded pages for performance optimization
const LandingPage = lazy(() => import('../pages/LandingPage.jsx'));

// Auth Pages
const LoginPage = lazy(() => import('../pages/auth/LoginPage.jsx'));
const SignupPage = lazy(() => import('../pages/auth/SignupPage.jsx'));
const ForgotPasswordPage = lazy(() => import('../pages/auth/ForgotPasswordPage.jsx'));

// Employee Pages
const DashboardPage = lazy(() => import('../pages/employee/DashboardPage.jsx'));
const ProfilePage = lazy(() => import('../pages/employee/ProfilePage.jsx'));
const AttendancePage = lazy(() => import('../pages/employee/AttendancePage.jsx'));
const PayrollPage = lazy(() => import('../pages/employee/PayrollPage.jsx'));
const TimeOffPage = lazy(() => import('../pages/employee/TimeOffPage.jsx'));

// Admin Pages
const AdminDashboardPage = lazy(() => import('../pages/admin/AdminDashboardPage.jsx'));
const AdminAttendancePage = lazy(() => import('../pages/admin/AdminAttendancePage.jsx'));
const AdminTimeOffPage = lazy(() => import('../pages/admin/AdminTimeOffPage.jsx'));
const AdminPayrollPage = lazy(() => import('../pages/admin/AdminPayrollPage.jsx'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div className="h-screen w-screen flex items-center justify-center bg-background"><Loader /></div>}>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Auth */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Route>

        {/* Employee */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="/attendance" element={<AttendancePage />} />
            <Route path="/payroll" element={<PayrollPage />} />
            <Route path="/time-off" element={<TimeOffPage />} />
          </Route>
        </Route>

        {/* Admin / HR */}
        <Route element={<ProtectedRoute requireAdmin />}>
          <Route element={<DashboardLayout />}>
            <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
            <Route path="/admin/employees/:id" element={<ProfilePage />} />
            <Route path="/admin/attendance" element={<AdminAttendancePage />} />
            <Route path="/admin/time-off" element={<AdminTimeOffPage />} />
            <Route path="/admin/payroll" element={<AdminPayrollPage />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
