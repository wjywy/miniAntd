// 与路由结合在一起
import { Breadcrumb } from 'cheesi';
import React from 'react';
import BreadcrumbItem from '../breadcrumbitem';

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
      <BreadcrumbItem href="http://www.baidu.com" separator="/">
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="http://www.baidu.com" separator="/">
        Left
      </BreadcrumbItem>
      <BreadcrumbItem href="http://www.baidu.com" separator="/">
        Right
      </BreadcrumbItem>
    </Breadcrumb>
  </>
);
export default App;
