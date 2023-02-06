import { Progress } from 'cheesi';
import React from 'react';
const Line_Base = () => {
  return (
    <div style={{ width: '600px', margin: '0 auto' }}>
      <Progress percent={30} />
    </div>
  );
};

export default Line_Base;
