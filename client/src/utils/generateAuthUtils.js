/**
 * Generates an employee Login ID based on the provided logic:
 * [First 2 letters of Company][First 2 letters of first name + First 2 letters of last name][Year of joining][Serial Number of joining for that year]
 * Example: OIJODO20220001
 * 
 * @param {string} companyName - Name of the company
 * @param {string} firstName - Employee's first name
 * @param {string} lastName - Employee's last name
 * @param {string|number} year - Year of joining
 * @param {number} serial - Serial number for the year
 * @returns {string} The generated Login ID
 */
export function generateLoginId(companyName, firstName, lastName, year, serial) {
  // Helper to get first 2 letters, padded with 'X' if too short, uppercase
  const getPrefix = (str) => {
    if (!str) return 'XX';
    const clean = str.trim().replace(/[^a-zA-Z]/g, '');
    if (clean.length === 0) return 'XX';
    if (clean.length === 1) return (clean + 'X').toUpperCase();
    return clean.substring(0, 2).toUpperCase();
  };

  const compPrefix = getPrefix(companyName);
  const firstPrefix = getPrefix(firstName);
  const lastPrefix = getPrefix(lastName);
  
  // Format year
  const yearStr = (year || new Date().getFullYear()).toString().substring(0, 4);
  
  // Format serial (padded to 4 digits)
  const serialStr = (serial || 1).toString().padStart(4, '0');

  return `${compPrefix}${firstPrefix}${lastPrefix}${yearStr}${serialStr}`;
}

/**
 * Generates a random temporary password for first-time users.
 * @returns {string} Random 8-character alphanumeric password
 */
export function generateTempPassword() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%';
  let password = '';
  for (let i = 0; i < 8; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}
