import Card, { CardHeader } from '../common/Card.jsx';
import { formatCurrency } from '../../utils/formatters.js';

export default function SalaryComponentsTable({ components, deductions }) {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      <Card>
        <CardHeader title="Earnings" />
        <Rows rows={components} />
      </Card>
      <Card>
        <CardHeader title="Deductions" />
        <Rows rows={deductions} />
      </Card>
    </div>
  );
}

function Rows({ rows }) {
  return (
    <ul className="divide-y divide-border">
      {rows.map((row) => (
        <li key={row.label} className="flex items-center justify-between py-2.5 text-sm">
          <span className="text-text-secondary">{row.label}</span>
          <span className="font-medium text-text-primary">{formatCurrency(row.monthly)}</span>
        </li>
      ))}
    </ul>
  );
}
