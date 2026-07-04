// eslint-disable-next-line no-unused-vars
import apiClient from './apiClient.js';

/**
 * Time Off / Leave service placeholders.
 */
export async function getLeaveRequests(_params) {
  throw new Error('leaveService.getLeaveRequests is not implemented yet.');
}

export async function requestLeave(_payload) {
  throw new Error('leaveService.requestLeave is not implemented yet.');
}

export async function approveLeave(_id) {
  throw new Error('leaveService.approveLeave is not implemented yet.');
}

export async function rejectLeave(_id) {
  throw new Error('leaveService.rejectLeave is not implemented yet.');
}

export default { getLeaveRequests, requestLeave, approveLeave, rejectLeave };
