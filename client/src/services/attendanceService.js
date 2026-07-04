// eslint-disable-next-line no-unused-vars
import apiClient from './apiClient.js';

/**
 * Attendance service placeholders.
 */
export async function checkIn(_employeeId) {
  throw new Error('attendanceService.checkIn is not implemented yet.');
}

export async function checkOut(_employeeId) {
  throw new Error('attendanceService.checkOut is not implemented yet.');
}

export async function getAttendanceByEmployee(_employeeId, _range) {
  throw new Error('attendanceService.getAttendanceByEmployee is not implemented yet.');
}

export async function getAllAttendance(_range) {
  throw new Error('attendanceService.getAllAttendance is not implemented yet.');
}

export default { checkIn, checkOut, getAttendanceByEmployee, getAllAttendance };
