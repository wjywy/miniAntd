import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Selector from '../select';

const options = [
  { title: 'Option 1', value: '1' },
  { title: 'Option 2', value: '2' },
  { title: 'Option 3', value: '3' },
];

test('renders default value', () => {
  render(<Selector defaultValue="Select an option" options={options} />);
  expect(screen.getByText('Select an option')).toBeInTheDocument();
});

test('opens dropdown when clicked', () => {
  render(<Selector defaultValue="Select an option" options={options} />);
  const select = screen.getByText('Select an option');
  fireEvent.click(select);
  expect(screen.getByText('Option 1')).toBeInTheDocument();
  expect(screen.getByText('Option 2')).toBeInTheDocument();
  expect(screen.getByText('Option 3')).toBeInTheDocument();
});

test('selects an option from the dropdown', () => {
  render(<Selector defaultValue="Select an option" options={options} />);
  const select = screen.getByText('Select an option');
  fireEvent.click(select);
  const option2 = screen.getByText('Option 2');
  fireEvent.click(option2);
  expect(screen.getByText('Option 2')).toBeInTheDocument();
  expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
  expect(screen.queryByText('Option 3')).not.toBeInTheDocument();
});