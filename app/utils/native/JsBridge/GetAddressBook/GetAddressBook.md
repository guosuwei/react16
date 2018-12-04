# GetAddressBook 通讯录

> PS: 用于 H5 获取客户端通讯录联系人信息。

## 文件引入

```js
// 桥接文件
import $native from "@utils/native";
```

## GetAddressBook

### JsBridge 接口定义

> PS: 接口定义存放在公共 API 文件中,本项目中文件目录 /app/constants/api.js。

```js
//JsBridge 桥接接口
const native = {
  //打开通讯录
  NATIVE_CODE_GET_ADDRESSBOOK: "getAddressBook"
};
```

### 示例代码

```js
    // 方法
    execute(setInfo) {
        $native.callClientForBank(API.NATIVE_CODE_GET_ADDRESSBOOK, {
            success: this.successCallBack
        });
    }
    // 返回信息
    successCallBack(res) {
        console.log(JSON.stringify(res));
    }
```

### 返回参数

| 属性        | 类型       | 说明       | 默认值 |
| ----------- | ---------- | ---------- | ------ |
| success     | `function` | 回调函数   | -      |
| phoneName   | `string`   | 联系人姓名 | -      |
| phoneNumber | `string`   | 联系人号码 | -      |
