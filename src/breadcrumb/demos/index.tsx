import { Breadcrumb } from 'cheesi';
import React from 'react';
import BreadcrumbItem from '../breadcrumbitem';

const App = () => (
  <>
    <Breadcrumb>
      <BreadcrumbItem href="http://www.baidu.com">Home</BreadcrumbItem>
      <BreadcrumbItem href="http://www.baidu.com">Left</BreadcrumbItem>
      <BreadcrumbItem href="http://www.baidu.com">
        {/* <img src="../../../assets/shan.jpg" alt="" /> */}
        Right
      </BreadcrumbItem>
    </Breadcrumb>
  </>
);
export default App;
