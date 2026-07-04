// eslint-disable-next-line no-unused-vars
import apiClient from './apiClient.js';

/**
 * Payroll service placeholders.
 */
export async function getPayrollSummary(_employeeId) {
  throw new Error('payrollService.getPayrollSummary is not implemented yet.');
}

export async function getSalaryComponents(_employeeId) {
  throw new Error('payrollService.getSalaryComponents is not implemented yet.');
}

export async function updateSalaryStructure(_employeeId, _payload) {
  throw new Error('payrollService.updateSalaryStructure is not implemented yet.');
}

export default { getPayrollSummary, getSalaryComponents, updateSalaryStructure };
