// 与路由结合在一起
import { Breadcrumb } from 'cheesi';
import React from 'react';
// import BreadcrumbItem from '../breadcrumbitem';

// type Record<K extends keyof any, T> = {
//   [P in K]: T;
// };
// const breadcrumb: Record<string, string> = {
//   '/apps': 'application',
//   '/apps/1': 'appliction',
//   '/apps/2': 'appliction',
//   '/apps/3': 'appliction',
// };
const App = () => (
  <>
    <Breadcrumb>
      <Breadcrumb.Item href="http://www.baidu.com" separator="/">
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="http://www.baidu.com" separator="/">
        Left
      </Breadcrumb.Item>
      <Breadcrumb.Item href="http://www.baidu.com" separator="/">
        Right
      </Breadcrumb.Item>
    </Breadcrumb>
  </>
);
export default App;
