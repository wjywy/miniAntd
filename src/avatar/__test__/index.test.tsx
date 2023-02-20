import { render } from '@testing-library/react';
import React from 'react';
import Avatar from '../avatar';
describe('Avatar', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <div data-testid="Avatar">
        <Avatar text="hello"></Avatar>
        <Avatar text="wow"></Avatar>
        <Avatar
          style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
          text="chessui"
        ></Avatar>
      </div>,
    );
    expect(getByTestId('Avatar')).toMatchSnapshot();
  });
});
