---
nav:
  title: 指南

---

## 什么是 cheesi

cheesi，发音同cheese**奶酪**，是一款为react开发的组件库，为开发者提供更轻量、简洁的组件库选择。使用tsx编写逻辑，less编写样式，dumi2编写文档站，jest+ts-jest+react-testing-library单元测试。

## 开始使用
### 下载安装

```shell
npm install cheesi
# 或者
yarn add cheesi
```

### 如何引入
请务必注意，cheesi目前没有实现按需引入样式，所以请用户**手动导入全局样式**

```js
import {Button} from "cheesi"
import "cheesi/dist/index.css"
```

把Button换成需要的组件。

## 问题反馈

如果在使用过程中发现任何问题，欢迎在 GitHub Issues 进行反馈：https://github.com/wjywy/miniAntd/issues