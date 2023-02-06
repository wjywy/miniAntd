import { Progress } from 'cheesi';
import React from 'react';
const Line_Status = () => {
  return (
    <div style={{ width: '600px', margin: '0 auto' }}>
      <Progress percent={30} status="active" />
      <Progress percent={30} status="exception" />
      <Progress percent={30} status="success" />
    </div>
  );
};

export default Line_Status;
