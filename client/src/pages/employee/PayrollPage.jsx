import PayrollSummaryCard from '../../components/payroll/PayrollSummaryCard.jsx';
import SalaryComponentsTable from '../../components/payroll/SalaryComponentsTable.jsx';
import PayslipCard from '../../components/payroll/PayslipCard.jsx';
import { PAYROLL_SUMMARY } from '../../data/mockData.js';

export default function PayrollPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-lg font-semibold text-text-primary">Payroll</h1>
        <p className="text-sm text-text-secondary">View your salary structure and past payslips.</p>
      </div>

      <PayrollSummaryCard summary={PAYROLL_SUMMARY} />
      <SalaryComponentsTable components={PAYROLL_SUMMARY.components} deductions={PAYROLL_SUMMARY.deductions} />

      <div className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold text-text-primary">Payslips</h2>
        <PayslipCard month="September 2025" netPay={PAYROLL_SUMMARY.netPay} />
        <PayslipCard month="August 2025" netPay={PAYROLL_SUMMARY.netPay} />
      </div>
    </div>
  );
}
