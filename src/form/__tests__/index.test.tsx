import * as React from 'react';

import { render } from '@testing-library/react';
import Form from '../';
import Input from '../../input';
import mountTest from '../../tests/mount';

describe('Form', () => {
  mountTest(Form);

  it('no Style on Form', () => {
    // 应该form和item都没样式
    const onChange = jest.fn();

    const { container } = render(
      <Form noStyle={true}>
        <Form.Item
          name="test"
          initialValue="bamboo"
          rules={[{ required: true }]}
        >
          <Input onChange={onChange} />
        </Form.Item>
      </Form>,
    );
    expect(container.querySelectorAll('.ci-form-item').length).toBe(0);
    expect(container.querySelectorAll('.ci-form').length).toBe(0);
  });

  it('no Style on Form.Item', () => {
    // 应该form和item都没样式
    const onChange = jest.fn();

    const { container } = render(
      <Form>
        <Form.Item
          name="test"
          noStyle={true}
          initialValue="bamboo"
          rules={[{ required: true }]}
        >
          <Input onChange={onChange} />
        </Form.Item>
      </Form>,
    );
    expect(container.querySelectorAll('.ci-form-item').length).toBe(0);
    expect(container.querySelectorAll('.ci-form').length > 0).toBeTruthy();
  });

  it('show require icon when required is true or rules contain required', () => {
    const onChange = jest.fn();
    const { container, rerender } = render(
      <Form>
        <Form.Item
          name="test"
          initialValue="bamboo"
          rules={[{ required: true }]}
        >
          <Input onChange={onChange} />
        </Form.Item>
      </Form>,
    );
    expect(
      container.querySelectorAll('.ci-form-item-label-required').length > 0,
    ).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
    rerender(
      <Form>
        <Form.Item name="test" initialValue="bamboo" required={true}>
          <Input onChange={onChange} />
        </Form.Item>
      </Form>,
    );
    expect(
      container.querySelectorAll('.ci-form-item-label-required').length > 0,
    ).toBeTruthy();
  });

  it('show different size', () => {
    const onChange = jest.fn();
    const { container, rerender } = render(
      <Form size="small">
        <Form.Item
          name="test"
          initialValue="bamboo"
          rules={[{ required: true }]}
        >
          <Input onChange={onChange} />
        </Form.Item>
      </Form>,
    );
    expect(container.firstChild).toMatchSnapshot();

    rerender(
      <Form size="large">
        <Form.Item
          name="test"
          initialValue="bamboo"
          rules={[{ required: true }]}
        >
          <Input onChange={onChange} />
        </Form.Item>
      </Form>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
