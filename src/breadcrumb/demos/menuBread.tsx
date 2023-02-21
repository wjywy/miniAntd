// 提供下拉菜单
import { Breadcrumb } from 'cheesi';
import React from 'react';
// import BreadcrumbItem from '../breadcrumbitem';

const items = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        General
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        Layout
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Navigation
      </a>
    ),
  },
];

const App = () => (
  <>
    <Breadcrumb>
      <Breadcrumb.Item href="http://www.baidu.com" separator="/">
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item
        href="http://www.baidu.com"
        separator="/"
        menu={<>{items}</>}
      >
        Left
      </Breadcrumb.Item>
      <Breadcrumb.Item href="http://www.baidu.com" separator="/">
        {/* <img src="../../../assets/shan.jpg" alt="" /> */}
        Right
      </Breadcrumb.Item>
    </Breadcrumb>
  </>
);
export default App;
