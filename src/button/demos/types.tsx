import { Button } from 'library';
import React from 'react';

export default () => (
  <div>
    <Button type="default">默认按钮</Button>
    <Button type="primary">主按钮</Button>
    <Button type="info">信息按钮</Button>
    <Button type="danger">危险按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="dashed">虚线按钮</Button>
    <Button type="link" href="https://www.baidu.com">
      链接按钮
    </Button>
    <Button type="text">文本按钮</Button>
  </div>
);
