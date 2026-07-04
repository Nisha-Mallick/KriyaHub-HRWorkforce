export function formatCurrency(value, currency = '₹') {
  if (value === null || value === undefined) return '-';
  return `${currency}${Number(value).toLocaleString('en-IN')}`;
}

export function formatDate(date, options = { day: '2-digit', month: 'short', year: 'numeric' }) {
  if (!date) return '-';
  return new Date(date).toLocaleDateString('en-GB', options);
}

export function getInitials(name = '') {
  return name
    .split(' ')
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}
