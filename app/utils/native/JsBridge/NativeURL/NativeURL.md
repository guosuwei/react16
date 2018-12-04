# NativeURL 链接

> PS: 用于 H5 操作客户端页面跳转。

## 文件引入

```js
// 桥接文件
import $native from "@utils/native";
```

## isLogin

> PS: 用于 H5 获取用户是否登录。

### JsBridge 接口定义

> PS: 接口定义存放在公共 API 文件中,本项目中文件目录 /app/constants/api.js。

```js
//JsBridge 桥接接口
const native = {
    NATIVE_CODE_IS_LOGIN: "isLogin" //登录
};
```

### 示例代码

```js
    // 方法
    execute() {
        $native.callClientForBank(API.NATIVE_CODE_IS_LOGIN, {
            success: this.successCallBack
        });
    }
    //返回信息
    successCallBack(res) {
        console.log(res)
    }
```

### 返回值

| 属性 | 类型     | 说明               | 默认值 |
| ---- | -------- | ------------------ | ------ |
| res  | `string` | `1登录`、`0未登录` | -      |
| success   | `function` | 回调函数                  | -      |

## toLogin

> PS: 用于 H5 跳转至客户端登录界面。

### JsBridge 接口定义

> PS: 接口定义存放在公共 API 文件中,本项目中文件目录 /app/constants/api.js。

```js
//JsBridge 桥接接口
const native = {
    NATIVE_CODE_TO_LOGIN: "toLogin" //登录
};
```

### 示例代码

```js
// 方法
execute() {
    $native.callClientForBank(API.NATIVE_CODE_TO_LOGIN, {});
}
```

### API

| 属性 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| -    | `-`  | `-`  | -      |

## loadNewPage

> PS: 用于 H5 跨页面URL跳转。

### JsBridge 接口定义

> PS: 接口定义存放在公共 API 文件中,本项目中文件目录 /app/constants/api.js。

```js
//JsBridge 桥接接口
const native = {
    NATIVE_CODE_LOADNEWPAGE: "loadNewPage" //登录
};
```

### 示例代码

```js
// 方法
execute() {
    $native.callClientForBank(API.NATIVE_CODE_LOADNEWPAGE, {
        pageUrl: "index.html"
    });
}
```

### API

| 属性    | 类型     | 说明         | 默认值 |
| ------- | -------- | ------------ | ------ |
| pageUrl | `string` | 设置跳转 URL | -      |
