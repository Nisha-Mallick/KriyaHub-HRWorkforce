import { X } from 'lucide-react';
import { PROFILE_DETAILS } from '../../data/mockData.js';
import Avatar from '../common/Avatar.jsx';
import Badge from '../common/Badge.jsx';

export default function EmployeePopupModal({ employee, onClose }) {
  // In a real backend, these would come from the employee object directly.
  // For now, we use the mock PROFILE_DETAILS for demonstration.
  const { about, skills, certifications } = PROFILE_DETAILS;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-card shadow-2xl transition-all duration-300">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute right-4 top-4 rounded-full p-1.5 text-text-secondary hover:bg-gray-100 hover:text-text-primary transition-colors focus-ring"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-8 text-left">
          <div className="flex items-center gap-4 mb-6">
            <Avatar name={employee.name} size="lg" statusDot={employee.status} />
            <div>
              <h2 className="text-xl font-semibold text-text-primary">{employee.name}</h2>
              <p className="text-sm text-text-secondary mb-1">{employee.designation}</p>
              <Badge variant="primary">{employee.department}</Badge>
            </div>
          </div>

          <div className="space-y-4 text-sm text-text-secondary">
            <div>
              <h3 className="font-medium text-text-primary mb-1">Employee ID</h3>
              <p>{employee.id || 'N/A'}</p>
            </div>

            <div>
              <h3 className="font-medium text-text-primary mb-1">Bio</h3>
              <p className="leading-relaxed">{about}</p>
            </div>

            <div>
              <h3 className="font-medium text-text-primary mb-1">Skills</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {skills.map((skill, idx) => (
                  <span key={idx} className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium text-text-primary mb-1">Certificates</h3>
              <ul className="list-disc list-inside space-y-1">
                {certifications.map((cert, idx) => (
                  <li key={idx}>{cert}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
