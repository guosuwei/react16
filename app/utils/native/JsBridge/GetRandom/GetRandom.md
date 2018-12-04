# GetRandom 随机数

> PS: 用于 H5 与客户端进行交互。

## 文件引入

```js
// 桥接文件
import $native from "@utils/native";
```

## GetRandom

### JsBridge 接口定义

> PS: 接口定义存放在公共 API 文件中,本项目中文件目录 /app/constants/api.js。

```js
//JsBridge 桥接接口
const native = {
  //随机数
  NATIVE_CODE_IS_GET_RANDOM: "getRandom"
};
```

### 示例代码

```js
    // 方法
    execute(setInfo) {
        $native.callClientForBank(API.NATIVE_CODE_IS_GET_RANDOM, {
            success: this.successCallBack
        });
    }
    // 返回信息
    successCallBack(res) {
        console.log(res)
    }
```

### API

| 属性    | 类型       | 说明                                | 默认值 |
| ------- | ---------- | ----------------------------------- | ------ |
| success | `function` | 回调函数(返回参数 1：成功、0：失败) | -      |
