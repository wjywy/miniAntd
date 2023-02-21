import React from 'react';
import Table from '../table';

const columns = [
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'age',
    title: 'Age',
  },
  {
    key: 'email',
    title: 'Email',
  },
];

const data = [
  {
    key: '1',
    name: 'John Doe',
    age: 28,
    email: 'john.doe@example.com',
  },
  {
    key: '2',
    name: 'Jane Smith',
    age: 35,
    email: 'jane.smith@example.com',
  },
  {
    key: '3',
    name: 'Bob Johnson',
    age: 42,
    email: 'bob.johnson@example.com',
  },
  {
    key: '4',
    name: 'John Doe',
    age: 28,
    email: 'john.doe@example.com',
  },
  {
    key: '5',
    name: 'Jane Smith',
    age: 35,
    email: 'jane.smith@example.com',
  },
  {
    key: '6',
    name: 'Bob Johnson',
    age: 42,
    email: 'bob.johnson@example.com',
  },
  {
    key: '7',
    name: 'John Doe',
    age: 28,
    email: 'john.doe@example.com',
  },
  {
    key: '8',
    name: 'Jane Smith',
    age: 35,
    email: 'jane.smith@example.com',
  },
  {
    key: '9',
    name: 'Bob Johnson',
    age: 42,
    email: 'bob.johnson@example.com',
  },
];
export default () => <Table columns={columns} data={data}></Table>;
