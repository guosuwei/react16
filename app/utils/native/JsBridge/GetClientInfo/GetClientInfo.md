# GetClientInfo 客户端信息

> PS: 用于 H5 获取客户端信息。

## 文件引入

```js
// 桥接文件
import $native from "@utils/native";
```

## getClientInfo

### JsBridge 接口定义

> PS: 接口定义存放在公共 API 文件中,本项目中文件目录 /app/constants/api.js。

```js
//JsBridge 桥接接口
const native = {
  NATIVE_CODE_GET_CLIENT_INFO: "getClientInfo" //获取客户端信息
};
```

### 示例代码

```js
    // 方法
    execute() {
        $native.callClientForBank(API.NATIVE_CODE_GET_CLIENT_INFO, {
            success: this.successCallBack
        });
    }
    //返回信息
    successCallBack(res) {
        console.log(JSON.stringify(res));
    }
```

### 返回参数

| 属性          | 类型       | 说明                                                  | 默认值 |
| ------------- | ---------- | ----------------------------------------------------- | ------ |
| appVersion    | `string`   | 应用版本号                                            | -      |
| ip            | `string`   | IP 地址                                               | -      |
| osType        | `string`   | 自定义类型（iPhone 或者 iPad）                        | -      |
| iOSVersion    | `string`   | 系统版本号                                            | -      |
| appIdentifier | `string`   | 应用标识                                              | -      |
| deviceName    | `string`   | 设备名                                                | -      |
| appModel      | `string`   | appModel：设备 model（e.g. @"iPhone", @"iPod touch"） | -      |
| success       | `function` | 回调函数                                              | -      |
