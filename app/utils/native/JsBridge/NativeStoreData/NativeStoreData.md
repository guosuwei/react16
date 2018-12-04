# NativeStoreData 数据存储

> PS: 用于 H5 向 Native 存储临时或公共数据。

## 文件引入

```js
// 桥接文件
import $native from "@utils/native";
```

## storeData 数据存储

### JsBridge 接口定义

> PS: 接口定义存放在公共 API 文件中,本项目中文件目录 /app/constants/api.js。

```js
//JsBridge 桥接接口
const native = {
  //用于 H5 向 Native 存储临时或公共数据。
  NATIVE_CODE_STOREDATA: "storeData" //
};
```

### 示例代码

```js
     // 方法
    execute() {
        $native.callClientForBank(API.NATIVE_CODE_STOREDATA, {
            params:{
                name:"张国栋",
                age:"20"
            },
            success: this.successCallBack
        });
    }
    //返回信息
    successCallBack(res) {
       console.log(JSON.stringify(res));
    }
```

### API

| 属性    | 类型       | 说明                                                  | 默认值 |
| ------- | ---------- | ----------------------------------------------------- | ------ |
| params  | `object`   | 存储数据                                              | -      |
| success | `function` | 回调函数（有回调函数字段表示取数据， 没有表示存数据） | -      |
