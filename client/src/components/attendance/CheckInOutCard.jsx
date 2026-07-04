import { useState } from 'react';
import { Clock, LogIn, LogOut } from 'lucide-react';
import Card from '../common/Card.jsx';
import Button from '../common/Button.jsx';
import StatusChip from '../common/StatusChip.jsx';

export default function CheckInOutCard() {
  const [status, setStatus] = useState('absent');
  const [checkInTime, setCheckInTime] = useState(null);

  function handleCheckIn() {
    // NOTE: demo-only. Replace with attendanceService.checkIn(employeeId).
    setStatus('present');
    setCheckInTime(new Date());
  }

  function handleCheckOut() {
    // NOTE: demo-only. Replace with attendanceService.checkOut(employeeId).
    setStatus('absent');
    setCheckInTime(null);
  }

  return (
    <Card className="flex flex-col items-center gap-4 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary">
        <Clock className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-semibold text-text-primary">
          {checkInTime
            ? `Checked in at ${checkInTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`
            : 'You are not checked in'}
        </p>
        <StatusChip status={status} className="mt-1 justify-center" />
      </div>
      {status === 'present' ? (
        <Button variant="danger" icon={LogOut} onClick={handleCheckOut} fullWidth>
          Check Out
        </Button>
      ) : (
        <Button variant="success" icon={LogIn} onClick={handleCheckIn} fullWidth>
          Check In
        </Button>
      )}
    </Card>
  );
}
