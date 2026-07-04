import { useState } from 'react';
import CheckInOutCard from '../../components/attendance/CheckInOutCard.jsx';
import AttendanceTable from '../../components/attendance/AttendanceTable.jsx';
import AttendanceDateNav from '../../components/attendance/AttendanceDateNav.jsx';
import { ATTENDANCE_RECORDS } from '../../data/mockData.js';

export default function AttendancePage() {
  const [view, setView] = useState('Date');

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-lg font-semibold text-text-primary">Attendance</h1>
        <p className="text-sm text-text-secondary">Mark your attendance and review your working hours.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <CheckInOutCard />
        <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5 shadow-card lg:col-span-3">
          <AttendanceDateNav label="October 2025" view={view} onViewChange={setView} onPrev={() => {}} onNext={() => {}} />
          <AttendanceTable records={ATTENDANCE_RECORDS} />
        </div>
      </div>
    </div>
  );
}
