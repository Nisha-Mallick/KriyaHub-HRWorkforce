export const ROLES = {
  ADMIN: 'admin',
  HR: 'hr',
  EMPLOYEE: 'employee',
};

export const ATTENDANCE_STATUS = {
  PRESENT: 'present',
  ON_LEAVE: 'on_leave',
  ABSENT: 'absent',
};

export const ATTENDANCE_STATUS_COLOR = {
  [ATTENDANCE_STATUS.PRESENT]: 'bg-success',
  [ATTENDANCE_STATUS.ON_LEAVE]: 'bg-warning',
  [ATTENDANCE_STATUS.ABSENT]: 'bg-danger',
};

export const TIME_OFF_TYPES = {
  PAID_TIME_OFF: 'Paid Time off',
  SICK_LEAVE: 'Sick Leave',
  UNPAID_LEAVE: 'Unpaid Leaves',
};

export const TIME_OFF_STATUS = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
};

export const NAV_ITEMS = [
  { label: 'Employees', path: '/dashboard' },
  { label: 'Attendance', path: '/attendance' },
  { label: 'Time Off', path: '/time-off' },
];

export const ADMIN_NAV_ITEMS = [
  { label: 'Employees', path: '/admin/dashboard' },
  { label: 'Attendance', path: '/admin/attendance' },
  { label: 'Time Off', path: '/admin/time-off' },
  { label: 'Payroll', path: '/admin/payroll' },
];
