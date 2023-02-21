import { render, screen } from '@testing-library/react';
import React from 'react';
import Table, { Column } from '../table';

type TestData = {
  key: string;
  [key: string]: string | number;
};

const testData: TestData[] = [
  { key: '1', id: 1, name: 'Alice', age: 25 },
  { key: '2', id: 2, name: 'Bob', age: 30 },
  { key: '3', id: 3, name: 'Charlie', age: 35 },
];

const columns: Column[] = [
  { key: 'id', title: 'ID' },
  { key: 'name', title: 'Name' },
  { key: 'age', title: 'Age' },
];

describe('Table component', () => {
  it('renders table with headers and data', () => {
    render(<Table columns={columns} data={testData} />);
    const headers = screen.getAllByRole('columnheader');
    expect(headers).toHaveLength(columns.length);
    columns.forEach((column) => {
      const header = headers.find((h) => h.textContent === column.title);
      expect(header).toBeInTheDocument();
    });
    testData.forEach((row) => {
      columns.forEach((column) => {
        const cell = screen.getByText(String(row[column.key]));
        expect(cell).toBeInTheDocument();
      });
    });
  });

  // it('filters data when searching', () => {
  //   render(<Table columns={columns} data={testData} />);
  //   const searchInput = screen.getByPlaceholderText('Search');
  //   fireEvent.change(searchInput, { target: { value: 'B' } });
  //   testData.forEach((row) => {
  //     const visible = Object.values(row).some((value) =>
  //       String(value).toLowerCase().includes('b'),
  //     );
  //     let expectedPresence = visible
  //       ? 'toBeInTheDocument'
  //       : 'not.toBeInTheDocument';
  //     columns.forEach((column) => {
  //       const cell = screen.getByText(String(row[column.key]));
  //       expect(cell)[expectedPresence]();
  //     });
  //   });
  // });
});
