import Table from '../common/Table.jsx';
import Avatar from '../common/Avatar.jsx';

const COLUMNS = [
  {
    key: 'employee',
    header: 'Employee',
    render: (row) => (
      <div className="flex items-center gap-2.5">
        <Avatar name={row.employee} size="sm" />
        <span className="font-medium">{row.employee}</span>
      </div>
    ),
  },
  { key: 'checkIn', header: 'Check In' },
  { key: 'checkOut', header: 'Check Out' },
  { key: 'workHours', header: 'Work Hours' },
  { key: 'extraHours', header: 'Extra Hours' },
];

export default function AdminAttendanceTable({ records, isLoading }) {
  return <Table columns={COLUMNS} data={records} isLoading={isLoading} rowKey="employee" emptyMessage="No attendance recorded for this day" />;
}
