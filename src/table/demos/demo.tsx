import React from 'react';
import Table from '../table';

const data = [
  { name: 'cyh', age: 18, sex: 'male' },
  { name: 'cyh', age: 19, sex: 'male' },
  { name: 'cyh', age: 20, sex: 'male' },
];

const header=['name','age','sex']
export default () => <Table headers={header} data={data} sortable={true}></Table>;
