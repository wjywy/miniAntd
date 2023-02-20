import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import Switch from '../';

describe('Switch', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <div data-testid="switch">
        <Switch></Switch>
      </div>,
    );
    expect(getByTestId('switch')).toMatchSnapshot();
  });

  it('should be false and then be true', () => {
    let f = false;
    const mockCallback = (flag: boolean) => {
      f = flag; //预期是通过回调函数拿到返回值
    };
    const { getByTestId } = render(
      <Switch data-testid="switch" onChange={mockCallback} />,
    );
    const sw = getByTestId('switch');
    fireEvent.click(sw);
    expect(f).toBeFalsy(); //第一次点击状态应该变为false

    fireEvent.click(sw);
    expect(f).toBeTruthy(); //第二次点击状态应该变为true
  });
});
