# GetLocation 位置信息

> PS: 用于 H5 获取客户端地理位置信息。

## 文件引入

```js
// 桥接文件
import $native from "@utils/native";
```

## JsBridge 接口定义

> PS: 接口定义存放在公共 API 文件中,本项目中文件目录 /app/constants/api.js。

```js
//JsBridge 桥接接口
const native = {
  NATIVE_CODE_GET_LOCATION: "getLocation" //获取客户端地理信息
};
```

## ClientInfo 客户端信息

### 示例代码

```js
    // 方法
    execute(setInfo) {
       $native.callClientForBank(API.NATIVE_CODE_GET_LOCATION, {
            success: this.successCallBack
        });
    }
    // 返回信息
    successCallBack(res) {
        console.log(JSON.stringify(res));
    }
```

### 返回参数

| 属性    | 类型       | 说明     | 默认值 |
| ------- | ---------- | -------- | ------ |
| success | `function` | 回调函数 | -      |
| lng     | `string`   | 经度     | -      |
| lat     | `function` | 纬度     | -      |
