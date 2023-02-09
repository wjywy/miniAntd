import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import mountTest from '../../tests/mount';

import Button from '../';

describe('Button', () => {
  mountTest(Button);
  it('should render correctly', () => {
    const { getByTestId } = render(
      <div data-testid="button">
        <Button>default</Button>
        <Button type="primary">primary</Button>
        <Button type="info">info</Button>
        <Button type="warning">warning</Button>
        <Button type="danger">danger</Button>
        <Button type="dashed">dashed</Button>
        <Button type="text">text</Button>
      </div>,
    );
    expect(getByTestId('button')).toMatchSnapshot();
  });

  it('should call onClick when clicked', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Button data-testid="button" onClick={onClick} />,
    );
    const btn = getByTestId('button');
    fireEvent.click(btn);
    expect(onClick).toBeCalled();
    expect(onClick).toBeCalledTimes(1);
  });

  it('should render a link tag when type equals link and href is provided', () => {
    const { getByTestId } = render(
      <Button data-testid="button" type="link" href="https://www.baidu.com">
        Link
      </Button>,
    );
    const element = getByTestId('button');
    expect(element.tagName).toEqual('A');
    expect(element.classList.contains('l-btn')).toBe(true);
    expect(element.classList.contains('l-btn-link')).toBe(true);
  });

  it('should render different sizes correctly', () => {
    const { getByTestId } = render(
      <div data-testid="button_size">
        <Button type="primary" size="lg">
          lg
        </Button>
        <Button type="primary" size="md">
          md
        </Button>
        <Button type="primary" size="sm">
          sm
        </Button>
      </div>,
    );
    const element = getByTestId('button_size');
    expect(element).toMatchSnapshot();
  });

  it('should render disabled button correctly', () => {
    const fn = jest.fn();
    const { getByTestId } = render(
      <Button disabled onClick={fn} data-testid="button_disabled">
        disabled
      </Button>,
    );
    const element = getByTestId('button_disabled');
    expect(element).toHaveAttribute('disabled');
    fireEvent.click(element);
    expect(fn).not.toHaveBeenCalled();
  });

  it('should not render as link button when href is undefined', async () => {
    const { container } = render(
      <Button type="link" href={undefined} data-testid="button_link_nohref">
        button
      </Button>,
    );
    expect(container.querySelector('a')).toBeNull();
    expect(container.querySelector('button')).not.toBeNull();
  });
});
