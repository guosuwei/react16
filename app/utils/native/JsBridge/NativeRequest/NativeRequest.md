# NativeRequest 网络请求

> PS: 用于 H5 数据上送下收。

## 文件引入

```js
// 桥接文件
import $native from "@utils/native";
```

## request

## JsBridge 接口定义

> PS: 接口定义存放在公共 API 文件中,本项目中文件目录 /app/constants/api.js。

```js
// JsBridge 桥接接口
const native = {
  // 网络请求
  NATIVE_CODE_REQUEST: "request"
};
```

### 示例代码

```js
    // 网络请求
    let url ="FetchPostDemo";

    execute (url, {
        loadingFlag=true,
        encrypted="1",
        success=this.successCallBack,
        failed=this.failedCallBack,
    }) {
    body = {
        //上送报文头
        reqHead = {
            serviceVersion = "1.0.0";
        },
        //上送报文体
        data = {
            name = "hao";
        }
    };
    successCallBack(){
        console.log("成功回调");
    }
    failedCallBack(){
        console.log("失败回调");
    }
```

### API

| 属性        | 类型       | 说明                                                | 默认值 |
| ----------- | ---------- | --------------------------------------------------- | ------ |
| url         | `string`   | 请求接口名称                                        | -      |
| encrypted   | `string`   | 是否加解密（`1加密`、`0不加密`）                    | -      |
| success     | `function` | 成功回调函数                                        | -      |
| failed      | `function` | 失败回调函数                                        | -      |
| loadingFlag | `boolean`  | 是否显示 loading 遮罩 （`true`显示、`false`不显示） | -      |
| body        | `object`   | 报文内容                                            | -      |
