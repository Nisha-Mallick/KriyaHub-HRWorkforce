import { Link } from 'react-router-dom';
import Avatar from '../common/Avatar.jsx';
import StatusChip from '../common/StatusChip.jsx';

export default function EmployeeCard({ employee, basePath = '/profile' }) {
  return (
    <Link
      to={`${basePath}/${employee.id}`}
      className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center shadow-card transition-shadow hover:shadow-md focus-ring"
    >
      <Avatar name={employee.name} size="lg" statusDot={employee.status} />
      <div>
        <p className="text-sm font-semibold text-text-primary">{employee.name}</p>
        <p className="text-xs text-text-secondary">{employee.designation}</p>
      </div>
      <StatusChip status={employee.status} />
    </Link>
  );
}
