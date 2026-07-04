import axios from 'axios';

/**
 * Shared Axios instance. Base URL and auth headers will be wired up
 * once the Node.js + Express + BetterAuth backend is available.
 */
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
