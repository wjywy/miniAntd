import React from 'react';
import type { MenuProps } from 'cheesi';
import { Menu } from 'cheesi';

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

const App: React.FC = () => {
  return (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default App;
