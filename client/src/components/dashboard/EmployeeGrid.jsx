import EmptyState from '../common/EmptyState.jsx';
import EmployeeCard from './EmployeeCard.jsx';

export default function EmployeeGrid({ employees, basePath }) {
  if (!employees.length) {
    return <EmptyState title="No employees found" message="Try adjusting your search." />;
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} basePath={basePath} />
      ))}
    </div>
  );
}
