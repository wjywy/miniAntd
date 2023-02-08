import { Breadcrumb } from 'cheesi';
import React from 'react';
import BreadcrumbItem from '../breadcrumbitem';

// 自定义分隔符
const App = () => (
  <>
    <Breadcrumb separator="<">
      <BreadcrumbItem href="http://www.baiduyyyyy.com" separator="%">
        Homeless
      </BreadcrumbItem>
      <BreadcrumbItem href="http://www.baidu.comyyyyyyyy">
        Leftless
      </BreadcrumbItem>
      <BreadcrumbItem href="http://www.baiduyyyyy.com">
        Rightless
      </BreadcrumbItem>
    </Breadcrumb>
  </>
);
export default App;
