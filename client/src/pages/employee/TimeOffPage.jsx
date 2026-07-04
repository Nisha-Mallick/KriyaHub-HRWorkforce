import { useState } from 'react';
import { Plus } from 'lucide-react';
import Tabs from '../../components/common/Tabs.jsx';
import Button from '../../components/common/Button.jsx';
import LeaveBalanceCard from '../../components/leave/LeaveBalanceCard.jsx';
import LeaveCalendar from '../../components/leave/LeaveCalendar.jsx';
import LeaveHistoryTable from '../../components/leave/LeaveHistoryTable.jsx';
import LeaveRequestModal from '../../components/leave/LeaveRequestModal.jsx';
import { useDisclosure } from '../../hooks/useDisclosure.js';
import { useAuth } from '../../hooks/useAuth.js';
import { LEAVE_TYPES, LEAVE_REQUESTS } from '../../data/mockData.js';

const TABS = [
  { key: 'time_off', label: 'Time Off' },
  { key: 'allocation', label: 'Allocation' },
];

export default function TimeOffPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('time_off');
  const { isOpen, open, close } = useDisclosure(false);

  const myRequests = LEAVE_REQUESTS.filter((req) => req.employee === user.name);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-lg font-semibold text-text-primary">Time Off</h1>
          <p className="text-sm text-text-secondary">View your balances and request time off.</p>
        </div>
        <Button icon={Plus} onClick={open}>
          New Request
        </Button>
      </div>

      <Tabs tabs={TABS} activeKey={activeTab} onChange={setActiveTab} />

      {activeTab === 'time_off' && (
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {LEAVE_TYPES.map((leave) => (
              <LeaveBalanceCard key={leave.type} {...leave} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <LeaveCalendar markedDates={['2025-10-26']} />
            <div className="rounded-xl border border-border bg-card p-5 shadow-card">
              <h3 className="mb-3 text-sm font-semibold text-text-primary">My Requests</h3>
              <LeaveHistoryTable requests={myRequests} />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'allocation' && (
        <div className="rounded-xl border border-border bg-card p-5 shadow-card">
          <LeaveHistoryTable requests={myRequests} />
        </div>
      )}

      <LeaveRequestModal isOpen={isOpen} onClose={close} employeeName={user.name} />
    </div>
  );
}
