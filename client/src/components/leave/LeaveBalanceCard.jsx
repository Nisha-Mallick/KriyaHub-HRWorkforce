import Card from '../common/Card.jsx';

export default function LeaveBalanceCard({ type, available, unit }) {
  return (
    <Card className="flex flex-col gap-1">
      <p className="text-sm font-semibold text-text-primary">{type}</p>
      <p className="text-2xl font-bold text-primary">{available}</p>
      <p className="text-xs text-text-secondary">{unit}</p>
    </Card>
  );
}
