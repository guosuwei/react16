# ScanQRCode 二维码

> PS: 用于 H5 与调用客户端二维码。

## 文件引入

```js
// 桥接文件
import $native from "@utils/native";
```

## ScanQRCode

### JsBridge 接口定义

> PS: 接口定义存放在公共 API 文件中,本项目中文件目录 /app/constants/api.js。

```js
//JsBridge 桥接接口
const native = {
  //扫描二维码
  NATIVE_CODE_SCAN_QRCODE: "scanQRCode"
};
```

### 示例代码

```js
    //二维码识别
    scanQRCode() {
        $native.callClientForUI(API.NATIVE_CODE_SCAN_QRCODE, {
            success: this.successCallBack
        })
    }
    //扫描结果回调函数
    successCallBack(res) {
        console.log(JSON.stringify(res));
    }
```

### API

| 属性    | 类型       | 说明     | 默认值 |
| ------- | ---------- | -------- | ------ |
| success | `function` | 回调函数 | -      |
