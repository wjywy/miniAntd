import { Avatar } from 'cheesi';
import React from 'react';
import AvatarGroup from '../avatarGroup';

export default () => (
  <>
    <div>
      <AvatarGroup row={2}>
        <Avatar text="A"></Avatar>
        <Avatar
          style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
          text="B"
        ></Avatar>
        <Avatar text="C"></Avatar>
        <Avatar src="https://pic4.zhimg.com/80/v2-418aff0cc7cb75d60201a03474f08503_720w.webp"></Avatar>
      </AvatarGroup>
    </div>
    <div>
      <AvatarGroup row={4}>
        <Avatar text="A"></Avatar>
        <Avatar
          style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
          text="B"
        ></Avatar>
        <Avatar text="C"></Avatar>
        <Avatar src="https://pic4.zhimg.com/80/v2-418aff0cc7cb75d60201a03474f08503_720w.webp"></Avatar>
      </AvatarGroup>
    </div>
  </>
);
