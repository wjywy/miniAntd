import { Breadcrumb } from 'cheesi';
import React from 'react';
// import BreadcrumbItem from '../breadcrumbitem';

// 自定义分隔符
const App = () => (
  <>
    <Breadcrumb separator="<">
      <Breadcrumb.Item href="http://www.baiduyyyyy.com" separator="%">
        Homeless
      </Breadcrumb.Item>
      <Breadcrumb.Item href="http://www.baidu.comyyyyyyyy">
        Leftless
      </Breadcrumb.Item>
      <Breadcrumb.Item href="http://www.baiduyyyyy.com">
        Rightless
      </Breadcrumb.Item>
    </Breadcrumb>
  </>
);
export default App;
