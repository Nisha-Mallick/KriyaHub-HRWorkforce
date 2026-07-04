import { useMemo, useState } from 'react';
import SearchBar from '../../components/common/SearchBar.jsx';
import EmployeeGrid from '../../components/dashboard/EmployeeGrid.jsx';
import { EMPLOYEES } from '../../data/mockData.js';

export default function DashboardPage() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return EMPLOYEES;
    return EMPLOYEES.filter(
      (emp) => emp.name.toLowerCase().includes(q) || emp.designation.toLowerCase().includes(q) || emp.department.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-lg font-semibold text-text-primary">Employees</h1>
          <p className="text-sm text-text-secondary">Browse your team and open a profile to view details.</p>
        </div>
        <SearchBar value={query} onChange={setQuery} placeholder="Search employees" className="w-full sm:w-72" />
      </div>
      <EmployeeGrid employees={filtered} basePath="/profile" />
    </div>
  );
}
