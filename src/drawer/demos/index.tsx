import Button from 'cheesi/button';
import React, { useState } from 'react';
import Drawer, { Placement } from '../drawer';

const App = () => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<Placement>('left');
  const openDrawer = () => {
    setOpen(true);
  };
  const closeDrawer = () => {
    setOpen(false);
  };
  const choosePosition = (e: any) => {
    setPosition(e.target.value);
  };
  return (
    <>
      <form>
        <label>
          <input
            type="radio"
            value={'left'}
            name="drawer"
            onClick={choosePosition}
          />
          left
        </label>
        <label>
          <input
            type="radio"
            value={'right'}
            name="drawer"
            onClick={choosePosition}
          />
          right
        </label>
      </form>
      <Button type="primary" onClick={openDrawer}>
        open
      </Button>
      <Drawer onClose={closeDrawer} open={open} pushState={position} />
    </>
  );
};
export default App;
