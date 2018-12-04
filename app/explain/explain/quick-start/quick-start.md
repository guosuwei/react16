# 快速上手

> PS: 本组件库是基于 react 前端框架开发,请遵守本工程的相关开发规范进行前端开发,并将项目中所开发的优秀组件添加、更新到本组件库。

## 安装依赖

```js
// 项目根目录运行以下命令
# npm install
```

> PS: **请通过 npm 安装**,尽量不要使用 cnpm,因为有时会出现插件无法加载的情况。

## 运行命令

```js
// 启动APP开发服务
# npm start
// APP打包
# npm run build
// 启动文档开发服务
# npm run doc
// 文档打包
# npm run build:doc
// 公共资源打包
# npm run dll
// 启动MOCK服务
# npm run mock
```

> PS: **端口** doc 项目地址 http://127.0.0.1:6789 app 项目地址 http://127.0.0.1:9999

## 文件目录

```bash
├── app                 # app项目工程开发目录
├── dist/app            # app打包生成文件目录
├── dist/doc            # 文档打包生成文件目录
├── docs                # 文档项目工程文档目录
├── script              # 启动、webpack配置目录  
├── script/app          # app配置目录
├── script/doc          # 文档配置目录
├── .babelrc            # babel 配置文件（隐藏文件）
├── package.json
└── postcss.config.js   # 样式配置文件
```
## 依赖插件

> PS: 特殊依赖插件说明

| 插件名称 | 版本号 | 生产/开发 | 说明|
| ---------------------- | ------ | --------- | ------------------------- |
| babel-runtime          | -      | 生产      | 减小库和工具包的体积,避免 babel 编译的工具函数在每个模块里重复出现|
| bundle-loader          | -      | 开发      | SPA 页面懒加载插件|