import { Alert } from 'cheesi';
import React from 'react';

export default () => (
  <div>
    <Alert description="简单警示"></Alert>
    <Alert description="成功警示" type='success'></Alert>
    <Alert description="信息警示" type='info'></Alert>
    <Alert description="警告警示" type='warning'></Alert>
    <Alert description="危险危险危险危险！！！！" type='danger'></Alert>
  </div>
);
