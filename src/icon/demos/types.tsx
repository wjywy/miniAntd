import { Icon } from 'cheesi';
import React from 'react';

const demo = () => {
  alert('这是你可以设置的函数');
};
export default () => (
  <div>
    <Icon name="add" size="16"></Icon>
    <Icon name="add-circle" onClick={demo}></Icon>
    <Icon name="arrow-up-circle"></Icon>
    <Icon name="arrow-down"></Icon>
    <Icon name="bad"></Icon>
    <Icon name="download"></Icon>
    <Icon name="edit"></Icon>
    <Icon name="favorite"></Icon>
    <Icon name="fabulous"></Icon>
    <Icon name="error"></Icon>
    <Icon name="cry"></Icon>
  </div>
);
