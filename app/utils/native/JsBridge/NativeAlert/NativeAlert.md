# NativeAlert 弹框

> PS: 用于 H5 与客户端进行交互。

## 文件引入

```js
// 桥接文件
import $native from "@utils/native";
```

## 接口定义

> PS: 接口定义存放在公共 API 文件中,本项目中文件目录为 /app/constants/api.js。

```js
// 接口定义
const native = {
  NATIVE_CODE_SET_ALERT_INFO: "setAlertInfo"
};
```

## NativeAlert 弹框

### 示例代码

```js
    // 设置
    const setInfo = {
        title: "标题",
        msg: "内容",
        cancel_text: "取消",
        cancel: this.cancel,
        success_text: "确认",
        success: this.success
    };
    cancel(){
        console.log("执行取消方法")
    }
    success(){
        console.log("执行确定方法")
    }
    // 方法
    execute(setInfo) {
        $native.callClientForUI(API.NATIVE_CODE_SET_ALERT_INFO, setInfo);
    }
```

### API

| 属性         | 类型       | 说明                   | 默认值 |
| ------------ | ---------- | ---------------------- | ------ |
| title        | `string`   | 弹出框标题             | -      |
| msg          | `string`   | 弹出框内容             | -      |
| cancel_text  | `string`   | 弹出框取消按钮文本     | -      |
| cancel       | `function` | 弹出框取消按钮回调函数 | -      |
| success_text | `string`   | 弹出框确定按钮文本     | -      |
| success      | `function` | 弹出框确定按钮回调函数 | -      |
