import { Wallet, CalendarDays, TrendingUp } from 'lucide-react';
import StatCard from '../dashboard/StatCard.jsx';
import { formatCurrency } from '../../utils/formatters.js';

export default function PayrollSummaryCard({ summary }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <StatCard label="Net Monthly Pay" value={formatCurrency(summary.netPay)} icon={Wallet} accent="primary" />
      <StatCard label="Yearly Wage" value={formatCurrency(summary.yearlyWage)} icon={TrendingUp} accent="success" />
      <StatCard label="Payable Days" value={summary.daysPayable} icon={CalendarDays} accent="info" />
    </div>
  );
}
