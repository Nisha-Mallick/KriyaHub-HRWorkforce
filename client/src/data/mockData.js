/**
 * ---------------------------------------------------------------
 * MOCK DATA — DEMO ONLY
 * This is the single file that stands in for backend data during
 * the hackathon. Delete this file and swap the imports in
 * pages/components for the real service calls once the
 * Node.js + Express + MySQL backend is connected.
 * ---------------------------------------------------------------
 */

export const CURRENT_USER = {
  id: 'EMP-2026-0001',
  loginId: 'CO2026DS0001',
  name: 'Diya Sharma',
  role: 'employee',
  designation: 'Product Designer',
  department: 'Design',
  manager: 'Aarav Mehta',
  email: 'diya.sharma@kriyahub.com',
  avatarColor: '#714B67',
};

export const ADMIN_USER = {
  id: 'EMP-2026-0002',
  loginId: 'CO2026AM0002',
  name: 'Aarav Mehta',
  role: 'admin',
  designation: 'HR Manager',
  department: 'Human Resources',
  manager: '-',
  email: 'aarav.mehta@kriyahub.com',
  avatarColor: '#5B3C53',
};

export const EMPLOYEES = [
  { id: 'EMP-0001', name: 'Diya Sharma', designation: 'Product Designer', department: 'Design', status: 'present', email: 'diya.sharma@kriyahub.com' },
  { id: 'EMP-0002', name: 'Aarav Mehta', designation: 'HR Manager', department: 'Human Resources', status: 'present', email: 'aarav.mehta@kriyahub.com' },
  { id: 'EMP-0003', name: 'Kabir Rao', designation: 'Backend Engineer', department: 'Engineering', status: 'on_leave', email: 'kabir.rao@kriyahub.com' },
  { id: 'EMP-0004', name: 'Ishita Verma', designation: 'Frontend Engineer', department: 'Engineering', status: 'present', email: 'ishita.verma@kriyahub.com' },
  { id: 'EMP-0005', name: 'Vivaan Nair', designation: 'QA Engineer', department: 'Engineering', status: 'absent', email: 'vivaan.nair@kriyahub.com' },
  { id: 'EMP-0006', name: 'Ananya Iyer', designation: 'Marketing Lead', department: 'Marketing', status: 'present', email: 'ananya.iyer@kriyahub.com' },
  { id: 'EMP-0007', name: 'Reyansh Gupta', designation: 'Sales Executive', department: 'Sales', status: 'present', email: 'reyansh.gupta@kriyahub.com' },
  { id: 'EMP-0008', name: 'Myra Kapoor', designation: 'Finance Analyst', department: 'Finance', status: 'on_leave', email: 'myra.kapoor@kriyahub.com' },
  { id: 'EMP-0009', name: 'Arjun Malhotra', designation: 'DevOps Engineer', department: 'Engineering', status: 'present', email: 'arjun.malhotra@kriyahub.com' },
];

export const PROFILE_DETAILS = {
  about:
    'Lorem ipsum is simply dummy text of the printing and typesetting industry. Diya has been leading design for the core product suite and enjoys mentoring junior designers.',
  whatILoveAboutMyJob:
    'Lorem ipsum is simply dummy text of the printing and typesetting industry, and has been the standard dummy text ever since.',
  interestsAndHobbies:
    'Lorem ipsum is simply dummy text of the printing and typesetting industry, used here as placeholder copy for the demo profile.',
  skills: ['Figma', 'Design Systems', 'User Research', 'Prototyping'],
  certifications: ['Google UX Design Certificate', 'HFI CUA'],
  privateInfo: {
    address: '221B, Residency Road, Bengaluru, KA',
    personalEmail: 'diya.personal@gmail.com',
    phone: '+91 98765 43210',
    bankName: 'HDFC Bank',
    accountNumber: 'XXXX XXXX 4521',
    ifscCode: 'HDFC0001234',
    emergencyContact: '+91 91234 56789',
    dateOfBirth: '14 Mar 1996',
    dateOfJoining: '05 Jan 2026',
  },
  salaryInfo: {
    wageType: 'Fixed Wage',
    monthWage: 50000,
    yearlyWage: 600000,
    workingDaysPerWeek: 5,
    workingHoursPerDay: 8,
    components: [
      { label: 'Basic Salary', monthly: 25000, percent: 50 },
      { label: 'House Rent Allowance', monthly: 10000, percent: 20 },
      { label: 'Standard Allowance', monthly: 4166, percent: 8.33 },
      { label: 'Total Travel Allowance', monthly: 1600, percent: 3.2 },
    ],
    deductions: [
      { label: 'Provident Fund (PF) Contribution', monthly: 3000, percent: 6 },
      { label: 'Professional Tax', monthly: 200, percent: 0.4 },
    ],
  },
};

export const ATTENDANCE_RECORDS = [
  { date: '23/10/2025', day: 'Thu', checkIn: '10:00', checkOut: '19:00', workHours: '09:00', extraHours: '01:00' },
  { date: '24/10/2025', day: 'Fri', checkIn: '10:00', checkOut: '19:00', workHours: '09:00', extraHours: '01:00' },
  { date: '25/10/2025', day: 'Sat', checkIn: '-', checkOut: '-', workHours: '00:00', extraHours: '00:00' },
  { date: '27/10/2025', day: 'Mon', checkIn: '09:55', checkOut: '18:50', workHours: '08:55', extraHours: '00:55' },
  { date: '28/10/2025', day: 'Tue', checkIn: '10:05', checkOut: '19:10', workHours: '09:05', extraHours: '01:05' },
];

export const LEAVE_TYPES = [
  { type: 'Paid Time off', available: 24, unit: 'Days Available' },
  { type: 'Sick Leave', available: 9, unit: 'Days Available' },
];

export const LEAVE_REQUESTS = [
  { id: 'LR-001', employee: 'Diya Sharma', startDate: '26/10/2025', endDate: '26/10/2025', type: 'Paid Time off', status: 'pending' },
  { id: 'LR-002', employee: 'Kabir Rao', startDate: '18/10/2025', endDate: '20/10/2025', type: 'Sick Leave', status: 'approved' },
  { id: 'LR-003', employee: 'Myra Kapoor', startDate: '02/11/2025', endDate: '03/11/2025', type: 'Unpaid Leaves', status: 'rejected' },
];

export const PAYROLL_SUMMARY = {
  monthWage: 50000,
  yearlyWage: 600000,
  netPay: 46800,
  daysPayable: 30,
  components: PROFILE_DETAILS.salaryInfo.components,
  deductions: PROFILE_DETAILS.salaryInfo.deductions,
};
