import React, { useState } from 'react';

export interface Column {
  key: string;
  title: string;
}

export interface Record {
  key: string;
  [key: string]: any;
}

export interface Props {
  columns: Column[];
  data: Record[];
}

const Table: React.FC<Props> = ({ columns, data }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSelectRow = (record: Record) => {
    const keys = [...selectedRowKeys];
    const index = keys.indexOf(record.key);
    if (index === -1) {
      keys.push(record.key);
    } else {
      keys.splice(index, 1);
    }
    setSelectedRowKeys(keys);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const getFilteredData = () => {
    if (!searchQuery) {
      return data;
    }
    return data.filter((record) => {
      for (const column of columns) {
        const value = record[column.key].toString();
        if (value.toLowerCase().includes(searchQuery.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
  };

  const getTableHead = () => {
    return (
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.title}</th>
          ))}
        </tr>
      </thead>
    );
  };

  const getTableBody = () => {
    const filteredData = getFilteredData();
    return (
      <tbody>
        {filteredData.map((record) => (
          <tr
            key={record.key}
            className={selectedRowKeys.includes(record.key) ? 'selected' : ''}
            onClick={() => handleSelectRow(record)}
          >
            {columns.map((column) => (
              <td key={`${record.key}-${column.key}`}>{record[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <div className="TableContainer">
      <div className="SearchContainer">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <table className="Table">
        {getTableHead()}
        {getTableBody()}
      </table>
    </div>
  );
};

export default Table;
