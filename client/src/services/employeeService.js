// eslint-disable-next-line no-unused-vars
import apiClient from './apiClient.js';

/**
 * Employee service placeholders.
 * Wire these to the Employees module endpoints once available.
 */
export async function getEmployees(_params) {
  throw new Error('employeeService.getEmployees is not implemented yet.');
}

export async function getEmployeeById(_id) {
  throw new Error('employeeService.getEmployeeById is not implemented yet.');
}

export async function updateEmployee(_id, _payload) {
  throw new Error('employeeService.updateEmployee is not implemented yet.');
}

export async function createEmployee(_payload) {
  throw new Error('employeeService.createEmployee is not implemented yet.');
}

export default { getEmployees, getEmployeeById, updateEmployee, createEmployee };
