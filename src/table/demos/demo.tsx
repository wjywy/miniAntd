import React from 'react';
import Table from '../table';

const data = [
  { name: 'cyh', age: 20, sex: 'male' },
  { name: 'cyh', age: 20, sex: 'male' },
  { name: 'cyh', age: 20, sex: 'male' },
];

const header=['name','age','sex']
export default () => <Table headers={header} data={data}></Table>;
