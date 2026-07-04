import { useMemo, useState } from 'react';
import { Users, UserCheck, UserX, CalendarClock } from 'lucide-react';
import SearchBar from '../../components/common/SearchBar.jsx';
import Button from '../../components/common/Button.jsx';
import EmployeeGrid from '../../components/dashboard/EmployeeGrid.jsx';
import StatCard from '../../components/dashboard/StatCard.jsx';
import { EMPLOYEES } from '../../data/mockData.js';

export default function AdminDashboardPage() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return EMPLOYEES;
    return EMPLOYEES.filter(
      (emp) => emp.name.toLowerCase().includes(q) || emp.designation.toLowerCase().includes(q) || emp.department.toLowerCase().includes(q)
    );
  }, [query]);

  const stats = useMemo(
    () => ({
      total: EMPLOYEES.length,
      present: EMPLOYEES.filter((e) => e.status === 'present').length,
      onLeave: EMPLOYEES.filter((e) => e.status === 'on_leave').length,
      absent: EMPLOYEES.filter((e) => e.status === 'absent').length,
    }),
    []
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Total Employees" value={stats.total} icon={Users} accent="primary" />
        <StatCard label="Present Today" value={stats.present} icon={UserCheck} accent="success" />
        <StatCard label="On Leave" value={stats.onLeave} icon={CalendarClock} accent="warning" />
        <StatCard label="Absent" value={stats.absent} icon={UserX} accent="info" />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-lg font-semibold text-text-primary">Employees</h1>
          <p className="text-sm text-text-secondary">Manage your organization's employees.</p>
        </div>
        <div className="flex w-full gap-3 sm:w-auto">
          <SearchBar value={query} onChange={setQuery} placeholder="Search employees" className="flex-1 sm:w-72" />
          <Button>Add Employee</Button>
        </div>
      </div>

      <EmployeeGrid employees={filtered} basePath="/admin/employees" />
    </div>
  );
}
