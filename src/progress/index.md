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

## API说明
### 通用
|  参数   | 类型  |  说明  |默认值
|  :----:  | :----:  |:----:  |:----:  |
|  type   | 'line'|'circle'  | 进度条类型 |'line'
|  percent   | number  | 进度条数值 |0
|  format   | (percent?:number)=>React.ReactNode  |  格式化进度数字  |undefined
|  size   | 'default'\|'small'  |  进度条的大小  |'default'
|  strokeWidth   | number  |  进度条的宽度  |6
|  showInfo   | boolean  |  是否显示进度值  |true
|  status   | 'normal'\|'exception'\|'active'\|'success'  |  当前进度的状态  |'normal'

### line型组件
|  参数   | 类型  |  说明  |默认值
|  :----:  | :----:  |:----:  |:----:  |
|  strokeLinecap   | 'butt' | 'square' | 'round'  | 进度条边缘形状 |'butt'
|  trailColor   | string  |  进度条尾部颜色  |undefined
|  steps   | number  | 步骤进度条的步数  |undefined
