import { Breadcrumb } from 'cheesi';
import React from 'react';
// import BreadcrumbItem from '../breadcrumbitem';

// 自定义分隔符
const App = () => (
  <>
    <Breadcrumb separator="*">
      <Breadcrumb.Item href="http://www.baidu.com">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="http://www.baidu.com">Left</Breadcrumb.Item>
      <Breadcrumb.Item href="http://www.baidu.com">
        {/* <img src="../../../assets/shan.jpg" alt="" /> */}
        Right
      </Breadcrumb.Item>
    </Breadcrumb>
  </>
);
export default App;
