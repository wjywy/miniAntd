---
title: Form 表单
nav:
  title: '组件'
  path: /components
---
# Form 表单

Form组件，基于rc-field-form做了一些简单封装。

## 基本使用
<code src= "./demos/base.tsx"></code>

## 是否必需
必需项会添加'*'号标识，如果不需要请设置```hideRequired```为true
<code src="./demos/required.tsx"></code>

## 是否需要样式
用户可以选择```Form.Item```是否需要默认样式
<code src="./demos/noStyle.tsx"></code>
用户名有样式，密码无样式

## 布局方式
form有三种布局可选择。
<code src="./demos/layout-vertical.tsx"></code>
<code src="./demos/layout-inline.tsx"></code>

## size
form 设置字体大小
<code src="./demos/size-small.tsx"></code>
<code src="./demos/size-large.tsx"></code>

## 是否需要冒号
可以通过在Form的colon指定是否需要冒号。默认有冒号。
<code src="./demos/colon.tsx"></code>
