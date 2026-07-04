import { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../common/Avatar.jsx';
import StatusChip from '../common/StatusChip.jsx';
import { useAuth } from '../../hooks/useAuth.js';
import EmployeePopupModal from './EmployeePopupModal.jsx';

export default function EmployeeCard({ employee, basePath = '/profile' }) {
  const { isAdmin } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const content = (
    <>
      <Avatar name={employee.name} size="lg" statusDot={employee.status} />
      <div>
        <p className="text-sm font-semibold text-text-primary">{employee.name}</p>
        <p className="text-xs text-text-secondary">{employee.designation}</p>
      </div>
      <StatusChip status={employee.status} />
    </>
  );

  if (isAdmin) {
    return (
      <Link
        to={`${basePath}/${employee.id}`}
        className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center shadow-card transition-shadow hover:shadow-md focus-ring"
      >
        {content}
      </Link>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center shadow-card transition-shadow hover:shadow-md focus-ring"
      >
        {content}
      </button>
      {isModalOpen && (
        <EmployeePopupModal employee={employee} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}
