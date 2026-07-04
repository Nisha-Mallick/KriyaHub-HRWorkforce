import { useState } from 'react';
import AdminAttendanceTable from '../../components/attendance/AdminAttendanceTable.jsx';
import AttendanceDateNav from '../../components/attendance/AttendanceDateNav.jsx';
import SearchBar from '../../components/common/SearchBar.jsx';
import { EMPLOYEES, ATTENDANCE_RECORDS } from '../../data/mockData.js';

const TODAY_RECORDS = EMPLOYEES.slice(0, 5).map((emp, idx) => ({
  employee: emp.name,
  checkIn: ATTENDANCE_RECORDS[idx % ATTENDANCE_RECORDS.length].checkIn,
  checkOut: ATTENDANCE_RECORDS[idx % ATTENDANCE_RECORDS.length].checkOut,
  workHours: ATTENDANCE_RECORDS[idx % ATTENDANCE_RECORDS.length].workHours,
  extraHours: ATTENDANCE_RECORDS[idx % ATTENDANCE_RECORDS.length].extraHours,
}));

export default function AdminAttendancePage() {
  const [query, setQuery] = useState('');
  const filtered = TODAY_RECORDS.filter((r) => r.employee.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-lg font-semibold text-text-primary">Attendance</h1>
          <p className="text-sm text-text-secondary">Attendance of all employees present today.</p>
        </div>
        <SearchBar value={query} onChange={setQuery} placeholder="Search employees" className="w-full sm:w-72" />
      </div>

      <div className="rounded-xl border border-border bg-card p-5 shadow-card">
        <AttendanceDateNav label="23 October 2025" onPrev={() => {}} onNext={() => {}} />
        <div className="mt-4">
          <AdminAttendanceTable records={filtered} />
        </div>
      </div>
    </div>
  );
}
