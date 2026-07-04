import { Routes, Route, Navigate } from 'react-router-dom';

import AuthLayout from '../layouts/AuthLayout.jsx';
import DashboardLayout from '../layouts/DashboardLayout.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

import LoginPage from '../pages/auth/LoginPage.jsx';
import SignupPage from '../pages/auth/SignupPage.jsx';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage.jsx';

import DashboardPage from '../pages/employee/DashboardPage.jsx';
import ProfilePage from '../pages/employee/ProfilePage.jsx';
import AttendancePage from '../pages/employee/AttendancePage.jsx';
import PayrollPage from '../pages/employee/PayrollPage.jsx';
import TimeOffPage from '../pages/employee/TimeOffPage.jsx';

import AdminDashboardPage from '../pages/admin/AdminDashboardPage.jsx';
import AdminAttendancePage from '../pages/admin/AdminAttendancePage.jsx';
import AdminTimeOffPage from '../pages/admin/AdminTimeOffPage.jsx';
import AdminPayrollPage from '../pages/admin/AdminPayrollPage.jsx';

export default function AppRoutes() {
  return (
    <Routes>
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

      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
