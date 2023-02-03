---
title: Avatar 头像
nav:
  title: '组件'
  path: /components
---
# Avatar 头像

头像用于展示个人信息

## 基本用法
可以设置icon，文本，或者图片

通过设置shape属性来选择方形或圆形

默认背景颜色粉色，字体颜色白色，支持对icon和文本传入style，来设置背景颜色和字体颜色

<code src="./demos/basic.tsx"></code>

## 自适应宽度
自适应宽度，但过长的字符仍然会影响效果

<code src="./demos/size.tsx"></code> 

## 分组

通过AvatarGroup标签来设置一组头像，设置row属性来配置一行最大头像数量
<code src="./demos/group.tsx"></code>