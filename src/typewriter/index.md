---
title: TypeWriter 打字机
nav:
  title: '组件'
  path: /components
---
# TypeWriter 打字机
实现光标闪烁的打字机效果
## 基本使用
<code src= "./demos/base.tsx"></code>

| 参数    | 类型   | 说明                                           | 默认值    |
| ------- | ------ | ---------------------------------------------- | --------- |
| message | string | 展示的消息，'^'表示停顿一拍，'$'表示后退一个字 | undefined |
| timeout | number | 打字机闪烁的间隔，单位毫秒                     | 200       |