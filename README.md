# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

> 使用云开发获取分页数据的疑问：
> 搜索时：怎么获取序列号

```js
// eslint依赖
"babel-eslint": "^10.1.0",
"eslint": "^7.20.0",
"eslint-config-prettier": "^7.2.0",
"eslint-plugin-prettier": "^3.3.1",
"prettier": "^2.2.1"
```

```js
// .eslintrc.js
module.exports = {
    extends: ["prettier", "prettier/standard"],
    //插件
    plugins: ["prettier"],

    //配置解析器
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
    },

    env: {
        //脚本目标的运行环境
        browser: true,
        node: true,
        es6: true,
        commonjs: true,
    },

    //全局变量
    globals: {
        __DEV__: true,
        __WECHAT__: true,
        __ALIPAY__: true,
        App: true,
        Page: true,
        Component: true,
        Behavior: true,
        wx: true,
        getApp: true,
        getCurrentPages: true,
    },

    //规则，只用插件：插件名/规则
    rules: {
        "prettier/prettier": "error",
    },
}
```
