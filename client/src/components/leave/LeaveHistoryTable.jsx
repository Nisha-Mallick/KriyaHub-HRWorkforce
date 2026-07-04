import Table from '../common/Table.jsx';
import StatusChip from '../common/StatusChip.jsx';
import ApproveRejectButtons from './ApproveRejectButtons.jsx';

export default function LeaveHistoryTable({ requests, isLoading, canModerate = false, onApprove, onReject }) {
  const columns = [
    ...(canModerate ? [{ key: 'employee', header: 'Name' }] : []),
    { key: 'startDate', header: 'Start Date' },
    { key: 'endDate', header: 'End Date' },
    { key: 'type', header: 'Time Off Type' },
    {
      key: 'status',
      header: 'Status',
      render: (row) => <StatusChip status={row.status} />,
    },
    ...(canModerate
      ? [
          {
            key: 'actions',
            header: '',
            render: (row) =>
              row.status === 'pending' ? (
                <ApproveRejectButtons onApprove={() => onApprove?.(row.id)} onReject={() => onReject?.(row.id)} />
              ) : null,
          },
        ]
      : []),
  ];

  return <Table columns={columns} data={requests} isLoading={isLoading} rowKey="id" emptyMessage="No time off requests" />;
}
