import { Switch } from 'cheesi';
import React from 'react';
const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};
export default () => (
  <div
    id="components-switch-demo-shape"
    // style={{ height: '40px', lineHeight: '40px' }}
  >
    <Switch onChange={onChange}></Switch>
    <span>默认大小(中等)</span>
    <br />
    <Switch></Switch>
    <span>小</span>
    <br />
    <Switch></Switch>
    <span>大</span>
    <br />
  </div>
);
