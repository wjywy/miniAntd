import React, { useState } from 'react';
import type { MenuProps } from 'cheesi';
import { Menu } from 'cheesi';

const items: MenuProps['items'] = [
  {
    label: '导航1',
    key: 'mail',
  },
  {
    label: '导航2',
    key: 'app',
    disabled: true,
  },
  {
    label: '导航3',
    key: 'SubMenu',
    children: [
      {
        type: 'group',
        label: '项目',
        children: [
          {
            label: '子项1',
            key: 'setting:1',
          },
          {
            label: '子项2',
            key: 'setting:2',
          },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default App;