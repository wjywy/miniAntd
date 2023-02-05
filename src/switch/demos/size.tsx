import { Switch } from 'cheesi';
import React from 'react';
const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};
export default () => (
  <>
    <Switch onChange={onChange} disabled={false}></Switch>
    <div>开关</div>
  </>
);
