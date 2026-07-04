import { useState } from 'react';
import Tabs from '../../components/common/Tabs.jsx';
import SearchBar from '../../components/common/SearchBar.jsx';
import LeaveHistoryTable from '../../components/leave/LeaveHistoryTable.jsx';
import { LEAVE_REQUESTS } from '../../data/mockData.js';

const TABS = [
  { key: 'time_off', label: 'Time Off' },
  { key: 'allocation', label: 'Allocation' },
];

export default function AdminTimeOffPage() {
  const [activeTab, setActiveTab] = useState('time_off');
  const [query, setQuery] = useState('');
  const [requests, setRequests] = useState(LEAVE_REQUESTS);

  const filtered = requests.filter((req) => req.employee.toLowerCase().includes(query.toLowerCase()));

  function handleApprove(id) {
    // NOTE: demo-only. Replace with leaveService.approveLeave(id).
    setRequests((prev) => prev.map((req) => (req.id === id ? { ...req, status: 'approved' } : req)));
  }

  function handleReject(id) {
    // NOTE: demo-only. Replace with leaveService.rejectLeave(id).
    setRequests((prev) => prev.map((req) => (req.id === id ? { ...req, status: 'rejected' } : req)));
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-lg font-semibold text-text-primary">Time Off</h1>
        <p className="text-sm text-text-secondary">Review and action time off requests for all employees.</p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Tabs tabs={TABS} activeKey={activeTab} onChange={setActiveTab} />
        <SearchBar value={query} onChange={setQuery} placeholder="Search employees" className="w-full sm:w-64" />
      </div>

      <div className="rounded-xl border border-border bg-card p-5 shadow-card">
        <LeaveHistoryTable requests={filtered} canModerate onApprove={handleApprove} onReject={handleReject} />
      </div>
    </div>
  );
}
