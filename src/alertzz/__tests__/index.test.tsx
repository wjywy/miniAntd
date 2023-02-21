import {  render } from '@testing-library/react';
import React from 'react';

import Alert from '..';

describe('Alert', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <div data-testid="alert">
        <Alert>default</Alert>
        <Alert type="primary">primary</Alert>
        <Alert type="info">info</Alert>
        <Alert type="warning">warning</Alert>
        <Alert type="danger">danger</Alert>
      </div>,
    );
    expect(getByTestId('alert')).toMatchSnapshot();
  });


});
