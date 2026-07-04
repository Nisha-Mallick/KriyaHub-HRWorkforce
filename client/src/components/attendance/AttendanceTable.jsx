import Table from '../common/Table.jsx';

const COLUMNS = [
  { key: 'date', header: 'Date' },
  { key: 'checkIn', header: 'Check In' },
  { key: 'checkOut', header: 'Check Out' },
  { key: 'workHours', header: 'Work Hours' },
  { key: 'extraHours', header: 'Extra Hours' },
];

export default function AttendanceTable({ records, isLoading }) {
  return <Table columns={COLUMNS} data={records} isLoading={isLoading} rowKey="date" emptyMessage="No attendance records for this period" />;
}
