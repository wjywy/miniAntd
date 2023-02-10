---
title: input 输入框
nav:
  title: '组件'
  path: /components
---

# input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装

何时使用

1. 需要用户输入表单域内容时
2. 提供组合型输入框，带搜索的输入框，还可以进行大小选择

## 基本使用

<code src="./demos/index.tsx"></code>

## 三种大小

我们为输入框定义了三种尺寸的大小，高度分别为 40px、32px、24px
<code src="./demos/sizeInput.tsx"></code>

## 添加状态

使用 status 为 input 添加状态， 可选 error 或者 warning
<code src="./demos/statusInput.tsx"></code>

## 无边框

<code src="./demos/borderInput.tsx"></code>

## 基础文本域

限定字符的最大长度，可能加上表情后有错误
<code src="./demos/areaInput.tsx"></code>

## 自适应文本框高度

<code src="./demos/heiAreaInput.tsx"></code>
