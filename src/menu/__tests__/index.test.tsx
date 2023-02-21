import { render } from '@testing-library/react';
import React from 'react';
import Menu from '../index';

const { SubMenu } = Menu;

describe('Menu', () => {
  it('should accept defaultOpenKeys in mode inline', () => {
    const { container } = render(
      <Menu defaultOpenKeys={['1']} mode="inline">
        <SubMenu key="1" title="submenu1">
          <Menu.Item key="submenu1">Option 1</Menu.Item>
          <Menu.Item key="submenu2">Option 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="2">menu2</Menu.Item>
      </Menu>,
    );

    expect(
      container.querySelector('.cheesi-menu-submenu-open')?.querySelector('.cheesi-menu-submenu-title')
        ?.textContent,
    ).toEqual('submenu1');
  });

  it('If has select nested submenu item ,the menu items on the grandfather level should be highlight', () => {
    const { container } = render(
      <Menu defaultSelectedKeys={['1-3-2']} mode="vertical">
        <SubMenu key="1" title="submenu1">
          <Menu.Item key="1-1">Option 1</Menu.Item>
          <Menu.Item key="1-2">Option 2</Menu.Item>
          <SubMenu key="1-3" title="submenu1-3">
            <Menu.Item key="1-3-1">Option 3</Menu.Item>
            <Menu.Item key="1-3-2">Option 4</Menu.Item>
          </SubMenu>
        </SubMenu>
        <Menu.Item key="2">menu2</Menu.Item>
      </Menu>,
    );
    expect(container.querySelectorAll('li.cheesi-menu-submenu-selected').length).toBe(1);
  });
});
