import { render } from '@testing-library/react';
import React from 'react';

import Spin from '../';

describe('Spin', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
        <Spin data-testid="Spin"></Spin>
    );
    expect(getByTestId('Spin')).toMatchSnapshot();
  });
});
