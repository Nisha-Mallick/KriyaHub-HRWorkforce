import { Download } from 'lucide-react';
import Card from '../common/Card.jsx';
import Button from '../common/Button.jsx';
import { formatCurrency } from '../../utils/formatters.js';

export default function PayslipCard({ month, netPay, status = 'Generated' }) {
  return (
    <Card className="flex items-center justify-between">
      <div>
        <p className="text-sm font-semibold text-text-primary">{month}</p>
        <p className="text-xs text-text-secondary">
          Net Pay: <span className="font-medium text-text-primary">{formatCurrency(netPay)}</span> · {status}
        </p>
      </div>
      <Button variant="secondary" size="sm" icon={Download}>
        Download
      </Button>
    </Card>
  );
}
