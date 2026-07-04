// eslint-disable-next-line no-unused-vars
import apiClient from './apiClient.js';

/**
 * Auth service placeholders.
 * Actual implementation will call the BetterAuth-backed Express endpoints.
 */
export async function login(_credentials) {
  // TODO: integrate with POST /api/auth/login
  throw new Error('authService.login is not implemented yet.');
}

export async function signup(_payload) {
  // TODO: integrate with POST /api/auth/signup (HR/Admin only)
  throw new Error('authService.signup is not implemented yet.');
}

export async function forgotPassword(_email) {
  // TODO: integrate with POST /api/auth/forgot-password
  throw new Error('authService.forgotPassword is not implemented yet.');
}

export async function logout() {
  // TODO: integrate with POST /api/auth/logout
  throw new Error('authService.logout is not implemented yet.');
}

export async function getSession() {
  // TODO: integrate with GET /api/auth/session
  throw new Error('authService.getSession is not implemented yet.');
}

export default { login, signup, forgotPassword, logout, getSession };
