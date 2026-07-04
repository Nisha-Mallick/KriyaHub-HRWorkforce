import Card, { CardHeader } from '../common/Card.jsx';
import { formatCurrency } from '../../utils/formatters.js';

/**
 * Salary Info tab — visible to Admin/HR only.
 * Access control (hiding this tab for regular employees) is enforced by
 * the parent ProfilePage based on the current user's role.
 */
export default function SalaryInfoTab({ salaryInfo }) {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
      <div className="flex flex-col gap-5 lg:col-span-2">
        <Card>
          <CardHeader title="Salary Structure" subtitle={salaryInfo.wageType} />
          <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <SummaryStat label="Month Wage" value={formatCurrency(salaryInfo.monthWage)} />
            <SummaryStat label="Yearly Wage" value={formatCurrency(salaryInfo.yearlyWage)} />
            <SummaryStat label="Working Days / Week" value={salaryInfo.workingDaysPerWeek} />
            <SummaryStat label="Working Hours / Day" value={salaryInfo.workingHoursPerDay} />
          </div>

          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-text-secondary">
            Salary Components
          </h4>
          <ComponentTable rows={salaryInfo.components} />

          <h4 className="mb-2 mt-5 text-xs font-semibold uppercase tracking-wide text-text-secondary">
            Deductions
          </h4>
          <ComponentTable rows={salaryInfo.deductions} />
        </Card>
      </div>

      <Card className="h-fit">
        <CardHeader title="Important" />
        <div className="space-y-3 text-xs leading-relaxed text-text-secondary">
          <p>
            The Salary Information tab lets you define and manage salary structure details for an
            employee, including wage type, working schedule, and salary components.
          </p>
          <p>Salary components are calculated automatically based on the employee's defined wage.</p>
          <p className="font-medium text-text-primary">Example</p>
          <p>If wage = ₹50,000 and Basic = 50% of wage, then Basic = ₹25,000.</p>
          <p>If HRA = 20% of Basic, then HRA = ₹12,500.</p>
        </div>
      </Card>
    </div>
  );
}

function SummaryStat({ label, value }) {
  return (
    <div className="rounded-lg bg-gray-50 px-3 py-2.5">
      <p className="text-[11px] text-text-secondary">{label}</p>
      <p className="text-sm font-semibold text-text-primary">{value}</p>
    </div>
  );
}

function ComponentTable({ rows }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-2 font-medium text-text-secondary">Component</th>
            <th className="px-3 py-2 font-medium text-text-secondary">Monthly</th>
            <th className="px-3 py-2 font-medium text-text-secondary">%</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-t border-border">
              <td className="px-3 py-2.5 text-text-primary">{row.label}</td>
              <td className="px-3 py-2.5 text-text-primary">{formatCurrency(row.monthly)}</td>
              <td className="px-3 py-2.5 text-text-secondary">{row.percent}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
