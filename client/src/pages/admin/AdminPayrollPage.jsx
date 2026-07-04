import { useMemo, useState } from 'react';
import SearchBar from '../../components/common/SearchBar.jsx';
import Table from '../../components/common/Table.jsx';
import Avatar from '../../components/common/Avatar.jsx';
import { EMPLOYEES, PROFILE_DETAILS } from '../../data/mockData.js';
import { formatCurrency } from '../../utils/formatters.js';

const COLUMNS = [
  {
    key: 'name',
    header: 'Employee',
    render: (row) => (
      <div className="flex items-center gap-2.5">
        <Avatar name={row.name} size="sm" />
        <span className="font-medium">{row.name}</span>
      </div>
    ),
  },
  { key: 'department', header: 'Department' },
  { key: 'monthWage', header: 'Month Wage', render: () => formatCurrency(PROFILE_DETAILS.salaryInfo.monthWage) },
  { key: 'yearlyWage', header: 'Yearly Wage', render: () => formatCurrency(PROFILE_DETAILS.salaryInfo.yearlyWage) },
];

export default function AdminPayrollPage() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () => EMPLOYEES.filter((emp) => emp.name.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-lg font-semibold text-text-primary">Payroll</h1>
          <p className="text-sm text-text-secondary">Salary structure overview for all employees.</p>
        </div>
        <SearchBar value={query} onChange={setQuery} placeholder="Search employees" className="w-full sm:w-72" />
      </div>

      <div className="rounded-xl border border-border bg-card p-5 shadow-card">
        <Table columns={COLUMNS} data={filtered} rowKey="id" />
      </div>
    </div>
  );
}
