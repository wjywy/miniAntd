---
title: Progress 进度条
nav:
  title: '组件'
  path: /components
---
# Progress 进度条

展示操作的当前进度。

## line型进度条
### 基本使用
line型进度条最基本使用。
<code src="./demos/line-base.tsx"></code>

### 小型进度条
适合在狭窄地区使用
<code src="./demos/line-small.tsx"></code>

### 进度条状态
进度条可以设置不同状态
<code src="./demos/line-status.tsx"></code>

### 进度条边缘形状
圆形，方形可选。默认圆形。
<code src="./demos/line-strokeLinecap.tsx"></code>

### 进度条步骤
steps仅当type==='line'生效。
<code src="./demos/line-step.tsx"></code>

## circle型进度条
circle型进度条在rc-progress库基础上封装。
### 基本使用
<code src="./demos/circle-base.tsx"></code>

### 进度条边缘形状
同line型，可设round和butt。
<code src="./demos/circle-strokeLineCap.tsx"></code>

### 进度条状态
进度条可以设置不同状态
<code src="./demos/circle-status.tsx"></code>