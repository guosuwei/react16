# NativeLoading 加载等待

> PS: 用于H5数据请求期间加载等待提示

## 文件引入

```js
// 桥接文件
import $native from "@utils/native";
```

## setWaitPanel 加载等待

## 接口定义

> PS: 接口定义存放在公共 API 文件中,本项目中文件目录 /app/constants/api.js。

```js
//JsBridge 桥接接口
const native = {
  //setWaitPanel 加载等待提示
  NATIVE_CODE_SET_WAIT_PANEL: "setWaitPanel"
};
```

### 示例代码

```js
    //setWaitPanel 加载等待提示
    execute() {
        $native.callClientForBank(API.NATIVE_CODE_SET_WAIT_PANEL, {
            Status:"1"
        })
    }
```

### API

| 属性   | 类型     | 说明                         | 默认值 |
| ------ | -------- | ---------------------------- | ------ |
| Status | `string` | 显示状态（1：显示、2：关闭） | -      |
