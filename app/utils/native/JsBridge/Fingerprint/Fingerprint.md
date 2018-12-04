# Fingerprint 指纹

> PS: 用于 H5 与调用客户端指纹。

## 文件引入

```js
// 桥接文件
import $native from "@utils/native";
```

## toFingerprintVerify

> PS:指纹验证

## JsBridge 接口定义

> PS: 接口定义存放在公共 API 文件中,本项目中文件目录 /app/constants/api.js。

```js
//JsBridge 桥接接口
const native = {
  //指纹验证
  NATIVE_CODE_TO_FINGERPRINT_VERIFY: "toFingerprintVerify"
};
```

### 示例代码

```js
    // 调指纹验证接口功能
    toFingerprintVerify() {
        $native.callClientForBank(API.NATIVE_CODE_TO_FINGERPRINT_VERIFY, {
            success: this.successCallBack
        })
    }

    // 返回信息
    successCallBack(res) {
        console.log(JSON.stringify(res));
    }
```

### 返回参数

| 属性      | 类型       | 说明                      | 默认值 |
| --------- | ---------- | ------------------------- | ------ |
| success   | `function` | 回调函数                  | -      |
| isSupport | `string`   | (1:验证成功、0：验证失败) | -      |
| errorMsg  | `string`   | 不支持原因                | -      |
