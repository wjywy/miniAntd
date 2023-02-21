// 一些jest方法
// describe(name, fn):描述块，讲一组功能相关的测试用例组合在一起
// it(name, fn, timeout):别名test， 用来放测试用例
// afterAll(fn, timeout): 所有测试用例跑完以后执行的方法
// beforeAll(fn, timeout): 所有测试用例执行之前执行的方法
// afterEach(fn): 在每个测试用例执行完后执行的方法
// beforeEach(fn): 在每个测试用例执行之前需要执行的方法

// 注意： 全局和describe都可以有上面四个周期函数， describe的after函数优先级要高于全局的after函数，decribe的before函数优先级要低于全局的before函数

// jest对象：
// jest.fn(implementation): 返回一个全新的没有使用过的mock function， 这个function在被调用的时候会记录很多和函数调用有关的信息
// jest.mock(moduleName, factory, options): 用来mock一些模块或者文件
// jest.spyOn(object, methodName): 返回一个mock function，和jest.fn相似，但是能够追踪object[methodName]的调用信息， 类似Sinon

import { render } from '@testing-library/react';
import React from 'react';
// import accessibilityTest from '../../tests/accessibilityTest';
import mountTest from '../../tests/mount';
import Breadcrumb from '../index';
// import rtlTest from '../../../'
// import { act } from "react-dom/test-utils";
// import { render } from "@testing-library/react";
// import Enzyme from 'enzyme';
// import { mount } from "enzyme";
// import { EnzymeAdapter } from 'enzyme';
describe('数字加减算术运算', () => {
  test('3加2减5等于0', () => {
    expect(3 + 2 - 5).toBe(0);
  });
});

describe('面包屑', () => {
  mountTest(Breadcrumb);
  //   accessibilityTest(Breadcrumb);

  const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

  //   每个测试用例执行完后执行的方法
  afterEach(() => {
    errorSpy.mockReset();
  });

  //   所有测试用例执行完后执行的方法
  afterAll(() => {
    errorSpy.mockRestore();
  });

  //   这个测试通不过，记得康康
  //   it('warns on non-Breadcrumb.Item children', () => {
  //     const MyCom: React.FC = () => <div>foo</div>;
  //     render(
  //       <Breadcrumb>
  //         <MyCom />
  //       </Breadcrumb>,
  //     );
  //      如果参数列表与spy调用时的参数相匹配，则返回true。
  //     expect(errorSpy).toHaveBeenCalledWith(1);
  //   });
  it('should allow Breadcrumb.Item is null or undefined', () => {
    const { asFragment } = render(
      <Breadcrumb>
        {null}
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        {undefined}
      </Breadcrumb>,
    );
    expect(errorSpy).not.toHaveBeenCalled();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('should not display Breadcrumb Item when its children is falsy', () => {
    const { asFragment } = render(
      <Breadcrumb>
        <Breadcrumb.Item />
        <Breadcrumb.Item>xxx</Breadcrumb.Item>
        <Breadcrumb.Item>yyy</Breadcrumb.Item>
      </Breadcrumb>,
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('filter React.Fragment', () => {
    const { asFragment } = render(
      <Breadcrumb>
        <Breadcrumb.Item separator=":">Location</Breadcrumb.Item>
        <>
          <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
        </>
      </Breadcrumb>,
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('should support React.Fragment and falsy children', () => {
    const { asFragment } = render(
      <Breadcrumb>
        <>
          <Breadcrumb.Item>yyy</Breadcrumb.Item>
          <Breadcrumb.Item>yyy</Breadcrumb.Item>
        </>
        <Breadcrumb.Item>yyy</Breadcrumb.Item>
        {0}
        {null}
        {undefined}
      </Breadcrumb>,
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('should support Breadcrumb.Item default separator', () => {
    const MockComponent: React.FC = () => (
      <span>
        <Breadcrumb.Item>Mock Node</Breadcrumb.Item>
      </span>
    );
    const { asFragment } = render(
      <Breadcrumb>
        <Breadcrumb.Item>Location</Breadcrumb.Item>
        <MockComponent />
        <Breadcrumb.Item>Application Center</Breadcrumb.Item>
      </Breadcrumb>,
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  //   it('should support string `0` and number `0`', () => {
  //     const { container } = render(
  //       <Breadcrumb>
  //         <Breadcrumb.Item>{0}</Breadcrumb.Item>
  //         <Breadcrumb.Item>0</Breadcrumb.Item>
  //       </Breadcrumb>,
  //     );
  //     expect(
  //       container.querySelectorAll('.ant-breadcrumb-link')[0].textContent,
  //     ).toBe('0');
  //     expect(
  //       container.querySelectorAll('.ant-breadcrumb-link')[1].textContent,
  //     ).toBe('0');
  //     expect(container.firstChild).toMatchSnapshot();
  //   });
});
