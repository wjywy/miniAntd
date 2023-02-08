// import { Button } from 'cheesi';
import { Input } from 'cheesi';
import React from 'react';

export default () => {
  const changeHandle = () => {
    console.log('wuwuwuuw');
  };
  return (
    <>
      <Input placeholder="wujiayu" onChange={changeHandle}></Input>
    </>
  );
};
