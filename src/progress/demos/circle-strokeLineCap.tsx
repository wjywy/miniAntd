import { Progress } from 'cheesi';
import React from 'react';
const Circle_StrokeLinecap = () => {
  return (
    <div
      style={{
        width: '600px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Progress percent={30} type="circle" strokeLinecap="butt" />
      <Progress percent={50} type="circle" strokeLinecap="round" />
    </div>
  );
};

export default Circle_StrokeLinecap;
