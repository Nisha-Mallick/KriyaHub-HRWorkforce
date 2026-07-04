import { cn } from '../../utils/cn.js';
import Loader from './Loader.jsx';
import EmptyState from './EmptyState.jsx';

/**
 * Generic table component.
 * columns: [{ key, header, render?(row), className? }]
 */
export default function Table({ columns, data = [], isLoading, emptyMessage = 'No records found', rowKey = 'id' }) {
  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <Loader />
      </div>
    );
  }

  if (!data.length) {
    return <EmptyState message={emptyMessage} />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border">
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className={cn('whitespace-nowrap px-4 py-3 font-medium text-text-secondary', col.className)}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row[rowKey]} className="border-b border-border last:border-0 hover:bg-gray-50">
              {columns.map((col) => (
                <td key={col.key} className={cn('whitespace-nowrap px-4 py-3.5 text-text-primary', col.className)}>
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
