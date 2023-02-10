import { Breadcrumb } from 'cheesi';
import React from 'react';
// import BreadcrumbItem from '../breadcrumbitem';

const App = () => (
  <>
    <Breadcrumb>
      {/* <div>hahahah</div> */}
      {/* {undefined} */}
      {/* <Breadcrumb.Item /> */}
      {/* {0} */}
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
