import { Pencil } from 'lucide-react';
import Avatar from '../common/Avatar.jsx';
import Badge from '../common/Badge.jsx';
import Button from '../common/Button.jsx';

export default function ProfileHeader({ employee, editable = false, onEdit }) {
  return (
    <div className="flex flex-col items-start gap-5 rounded-xl border border-border bg-card p-6 shadow-card sm:flex-row sm:items-center">
      <Avatar name={employee.name} size="xl" color={employee.avatarColor} />
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-lg font-semibold text-text-primary">{employee.name}</h1>
          <Badge variant="primary">{employee.designation}</Badge>
        </div>
        <p className="mt-1 text-sm text-text-secondary">{employee.department}</p>
        <dl className="mt-3 grid grid-cols-2 gap-x-8 gap-y-1 text-xs text-text-secondary sm:grid-cols-3">
          <div>
            <dt className="font-medium text-text-primary">Login ID</dt>
            <dd>{employee.loginId || '—'}</dd>
          </div>
          <div>
            <dt className="font-medium text-text-primary">Manager</dt>
            <dd>{employee.manager || '—'}</dd>
          </div>
          <div>
            <dt className="font-medium text-text-primary">Email</dt>
            <dd className="truncate">{employee.email}</dd>
          </div>
        </dl>
      </div>
      {editable && (
        <Button variant="secondary" icon={Pencil} onClick={onEdit}>
          Edit
        </Button>
      )}
    </div>
  );
}
