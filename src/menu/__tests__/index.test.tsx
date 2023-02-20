import { render } from '@testing-library/react';
import React from 'react';
import Menu from '../index';
import type { MenuProps } from '../index';
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('组件1', 'sub1', null, [
    getItem('子组件组1', 'g1', null, [getItem('组件项1', '1'), getItem('组件项2', '2')], 'group'),
    getItem('子组件组2', 'g2', null, [getItem('组件项3', '3'), getItem('组件项4', '4')], 'group'),
  ]),

  getItem('组件2', 'sub2', null, [
    getItem('组件项5', '5'),
    getItem('组件项6', '6'),
    getItem('子组件3', 'sub3', null, [getItem('组件项7', '7')]),
  ]),

  getItem('组件组', 'grp', null, [getItem('组件项8', '8'), getItem('组件项9', '9')], 'group'),
];

const { SubMenu } = Menu;

describe('Menu', () => {

  it('should render correctly', () => {
    const { getByTestId } = render(    
    <Menu
      data-testid="menu"
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />);
    expect(getByTestId('menu')).toMatchSnapshot();
  });

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
