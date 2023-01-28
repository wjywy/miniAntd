import { Button, Switch } from 'cheesi';
import React, { useState } from 'react';
const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

function DisableDemo() {
  const [check, setCheck] = useState(true);
  return (
    <div id="components-switch-demo-shape">
      <Switch onChange={onChange} disabled={check}></Switch>
      <div>禁用</div>
      <Button onClick={() => setCheck(!check)}>是否禁用</Button>
    </div>
  );
}
export default DisableDemo;
