import { Progress } from 'cheesi';
import React from 'react';
const Circle_Status = () => {
  return (
    <div
      style={{
        width: '600px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Progress percent={30} type="circle" status="active" />
      <Progress percent={30} type="circle" status="exception" />
      <Progress percent={30} type="circle" status="success" />
    </div>
  );
};

export default Circle_Status;
