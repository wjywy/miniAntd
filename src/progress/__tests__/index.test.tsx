import { render } from '@testing-library/react';
import * as React from 'react';
import mountTest from '../../tests/mount';
import { default as Progress } from '../index';

describe('Progress', () => {
  mountTest(Progress);

  it('render normal progress', () => {
    const { container: wrapper } = render(<Progress status="normal" />);
    expect(wrapper.firstChild).toMatchSnapshot();
  });

  it('should render different sizes correctly', () => {
    const { getByTestId } = render(
      <div data-testid="progress-size">
        <Progress size="small"></Progress>
        <Progress size="default"></Progress>
      </div>,
    );
    expect(getByTestId('progress-size')).toMatchSnapshot();
  });

  it('render trailColor progress', () => {
    const { container: wrapper } = render(<Progress trailColor="#ffffff" />);
    expect(wrapper.firstChild).toMatchSnapshot();
  });

  it('should render correct status', () => {
    const { container, rerender } = render(
      <Progress percent={100} status="success" />,
    );
    expect(container.querySelectorAll('.ci-pg-status-success')).toHaveLength(1);
    rerender(<Progress percent={50} status="active" />);
    expect(container.querySelectorAll('.ci-pg-status-active')).toHaveLength(1);
    rerender(<Progress percent={50} status="exception" />);
    expect(container.querySelectorAll('.ci-pg-status-exception')).toHaveLength(
      1,
    );
  });

  it('should render correct strokeLinecap', () => {
    const { container, rerender } = render(
      <Progress type="circle" percent={50} strokeLinecap="butt" />,
    );
    expect(container.firstChild).toMatchSnapshot();
    rerender(<Progress type="circle" percent={50} strokeLinecap="round" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render stroke color', () => {
    const { container, rerender } = render(
      <Progress type="circle" percent={50} strokeColor="red" />,
    );
    expect(container.firstChild).toMatchSnapshot();
    rerender(<Progress strokeColor="red" percent={50} type="line" />);
    expect(container.firstChild).toMatchSnapshot();
    rerender(
      <Progress
        strokeColor="red"
        percent={50}
        type="circle"
        status="success"
      />,
    );
    expect(container.firstChild).toMatchSnapshot();
    rerender(
      <Progress
        strokeColor="red"
        percent={50}
        type="circle"
        status="exception"
      />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render trail color', () => {
    const { container, rerender } = render(
      <Progress type="circle" percent={50} trailColor="red" />,
    );
    expect(container.firstChild).toMatchSnapshot();
    rerender(<Progress trailColor="red" percent={50} type="line" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render steps while steps exist', () => {
    const { container } = render(<Progress steps={3} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
