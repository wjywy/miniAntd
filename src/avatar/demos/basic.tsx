import { Avatar } from 'cheesi';
import React from 'react';

export default () => (
  <>
    <Avatar text="T"></Avatar>
    <Avatar
      style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
      text="U"
    ></Avatar>
    <Avatar text="User"></Avatar>
    <Avatar src="https://pic4.zhimg.com/80/v2-418aff0cc7cb75d60201a03474f08503_720w.webp"></Avatar>

    <Avatar text="hello" shape="square"></Avatar>
  </>
);
