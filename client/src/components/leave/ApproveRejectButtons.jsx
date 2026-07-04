import { Check, X } from 'lucide-react';
import Button from '../common/Button.jsx';

export default function ApproveRejectButtons({ onApprove, onReject }) {
  return (
    <div className="flex items-center gap-2">
      <Button size="sm" variant="success" icon={Check} onClick={onApprove} aria-label="Approve request" />
      <Button size="sm" variant="danger" icon={X} onClick={onReject} aria-label="Reject request" />
    </div>
  );
}
