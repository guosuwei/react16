# Webview 操作

> PS: 用于 H5 调取客户端 Webview 操作。

## 文件引入

```js
// 桥接文件
import $native from "@utils/native";
```

## goBack

> PS:关闭 webview 返回客户端页面

### JsBridge 接口定义

> PS: 接口定义存放在公共 API 文件中,本项目中文件目录 /app/constants/api.js。

```js
//JsBridge 桥接接口
const native = {
  //返回（关闭webview返回客户端页面）
  NATIVE_CODE_TO_GOBACK: "goBack"
};
```

### 示例代码

```js
    // 刷新webview
    execute() {
        $native.callClientForBank(API.NATIVE_CODE_TO_GOBACK, {})
    }
```

### API

| 属性 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| -    | `-`  | -    | -      |

## webviewBack

> PS:页面返回,逐级回退 H5 页面

### JsBridge 接口定义

> PS: 接口定义存放在公共 API 文件中,本项目中文件目录 /app/constants/api.js。

```js
//JsBridge 桥接接口
const native = {
  //页面返回 (逐级回退 H5 页面)
  NATIVE_CODE_WEBVIEWBACK: "webviewBack"
};
```

### 示例代码

```js
    // 刷新webview
    execute() {
        $native.callClientForBank(API.NATIVE_CODE_WEBVIEWBACK, {})
    }
```

### API

| 属性 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| -    | `-`  | -    | -      |

## refreshWebview

> PS:刷新当前 webview 页面

### JsBridge 接口定义

> PS: 接口定义存放在公共 API 文件中,本项目中文件目录 /app/constants/api.js。

```js
//JsBridge 桥接接口
const native = {
  //刷新当前 webview 页面
  NATIVE_CODE_REFRESHWEBVIEW: "refreshWebview"
};
```

### 示例代码

```js
    // 刷新webview
    execute() {
        $native.callClientForBank(API.NATIVE_CODE_REFRESHWEBVIEW, {})
    }
```

### API

| 属性 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| -    | `-`  | -    | -      |
