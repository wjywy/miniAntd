import { Progress } from 'cheesi';
import React from 'react';
const Line_StrokeLinecap = () => {
  return (
    <div style={{ width: '600px', margin: '0 auto' }}>
      <Progress percent={30} strokeLinecap="butt" />
      <Progress percent={30} strokeLinecap="round" />
    </div>
  );
};

export default Line_StrokeLinecap;
