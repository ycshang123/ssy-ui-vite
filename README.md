
<!--
 * @Author: ycshang
 * @Date: 2023-01-09 16:10:20
 * @LastEditors: ycshang
-->
<br>
<p align="center">
<img src="https://cdn.staticaly.com/gh/ycshang123/image-hosting@master/github_logo.1j9kvv7t60io.webp" style="width:320px;" />
</p>
<p align="center">
  基于 Vite 栈的前端工程化实践
</p>

<p align="center">
<img src="https://img.shields.io/github/license/ycshang123/ssy-ui-vite?color=%23b2ebf2&style=plastic">
<a href="https://codecov.io/github/ycshang123/ssy-ui-vite" >
<img src="https://codecov.io/github/ycshang123/ssy-ui-vite/branch/main/graph/badge.svg?token=8688BWSZCW"/>
</a>
</p>

## Features

# ssy-ui-vite

- 基于 Vue 框架
- 支持 JSX 与 Vue 单文件组件
- Jest + Vue3 plugins实现单元测试
- Eslint + Prettier + Husky 语法检查
- 采用 Rollup 构建
- Vitepress + Vercel 文档网站搭
- 基于Action CI 实现持续集成与交付

## Install

```bash
 npm i ssy-ui-vite
```

## Quick Start

```bash
 import Vue from 'vue'
 import SSYUI from 'ssy-ui'

 const App = {
    template: `
      <SButton color="blue">主要按钮</SButton>
    `,
 };

 createApp(App)
   .use(SSYUI)
   .mount("#app");
```

## Quick Start

如果希望尽快上手，可以访问 [Getting Started](https://ycshang-ui-vite.vercel.app/)

## 欢迎提PR

一起加入项目

