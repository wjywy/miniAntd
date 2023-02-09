import React, { useState } from 'react';

interface TableProps {
  headers: string[];
  data: Array<{ [key: string]: any }>;
  sortable?: boolean;
}

const Table: React.FC<TableProps> = ({ headers, data, sortable = false }) => {
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);

  const handleSort = (header: string) => {
    if (sortBy === header) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(header);
      setSortOrder('asc');
    }
  };

  const sortedData = data.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortBy as string] > b[sortBy as string] ? 1 : -1;
    }
    return a[sortBy as string] < b[sortBy as string] ? 1 : -1;
  });

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>
              {sortable ? (
                <button onClick={() => handleSort(header)}>
                  {header} {sortBy === header && (sortOrder === 'asc' ? '⬆️' : '⬇️')}
                </button>
              ) : (
                header
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, index) => (
          <tr key={index}>
            {headers.map((header, headerIndex) => (
              <td key={headerIndex}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
