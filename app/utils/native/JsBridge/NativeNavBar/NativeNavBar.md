# NativeNavBar 导航栏

> PS: 位于 app 内容区的上方，系统状态栏的下方，并且提供页面中的导航能力。（效果请在客户端查看）

## 文件引入

```js
// 桥接文件
import $native from "@utils/native";
```

## setNavBar

> PS: 设置导航栏标题及左侧和右侧按钮

### 接口定义

> PS: 接口定义存放在公共 API 文件中,本项目中文件目录为 /app/constants/api.js。

```js
// 接口定义
const native = {
  // 设置导航栏标题及左侧和右侧按钮
  NATIVE_CODE_UPDATE_TITLE: "setNavBar"
};
```

### 示例代码

```js
    // 设置
    const setInfo = {
        // 标题
        title: "交易查询",
        // 左侧按钮
        leftButton: {
            exist: "true",
            name: "取消",
            img: "www.1234.com",
            success: this.success()
        },
        // 右侧按钮
        rightButton: {
            exist: "true",
            name: "确定",
            img: "www.1234.com",
            success: this.success()
        },
    };
    //回调方法
    success(){
        console.log("执行回调JS方法")
    }
    // 方法
    execute(setInfo) {
        $native.callClientForUI(API.NATIVE_CODE_UPDATE_TITLE, setInfo);
    }
```

### API

| 属性        | 类型       | 说明             | 默认值 |
| ----------- | ---------- | ---------------- | ------ |
| title       | `string`   | 标题             | -      |
| leftButton  | `object`   | 左侧按钮         | -      |
| rightButton | `object`   | 右侧按钮         | -      |
| exist       | `boolean`  | 按钮是否存在     | `true` |
| name        | `string`   | 按钮名称(必填)   | -      |
| img         | `string`   | 按钮图片下载地址 | -      |
| success     | `function` | 按钮回调 JS      | -      |

## ShowNavgationBar 

> PS: 显示/隐藏导航栏

### 接口定义

> PS: 接口定义存放在公共 API 文件中,本项目中文件目录为 /app/constants/api.js。

```js
// 接口定义
const native = {
  //显示/隐藏客户端标题栏
  NATIVE_CODE_SET_TITLE_VISIBLE: "ShowNavgationBar"
};
```

### 示例代码

```js
    // 方法
    execute(setInfo) {
        $native.callClientForUI(API.NATIVE_CODE_SET_TITLE_VISIBLE, {
            state: "visible",
        });
    }
```

### API

| 属性  | 类型     | 说明                            | 默认值    |
| ----- | -------- | ------------------------------- | --------- |
| state | `string` | 显示`visible` , 隐藏`unvisible` | `visible` |

## showWebviewBackButton

> PS: 导航栏返回按钮,默认只能回退至上一个 H5 页面,如需跳转至其它 H5 页面请使用（setNavBar 中的"leftButton"或"rightButton"）

### 接口定义

> PS: 接口定义存放在公共 API 文件中,本项目中文件目录为 /app/constants/api.js。

```js
// 接口定义
const native = {
  //设置客户端导航栏默认返回按钮
  NATIVE_CODE_SHOW_WEBVIEW_BACKBUTTON: "showWebviewBackButton"
};
```

### 示例代码

```js
    // 方法
    execute(setInfo) {
        $native.callClientForUI(API.NATIVE_CODE_SHOW_WEBVIEW_BACKBUTTON, {
            side: "left",
        });
    }
```

### API

| 属性 | 类型     | 说明                 | 默认值 |
| ---- | -------- | -------------------- | ------ |
| side | `string` | 左`left` , 右`right` | -      |

## showCloseButton 

> PS:导航栏关闭按钮,显示导航栏关闭按钮,通过参数控制左右位置,默认右侧,点击后关闭当前 H5 页面

### 接口定义

> PS: 接口定义存放在公共 API 文件中,本项目中文件目录为 /app/constants/api.js。

```js
// 接口定义
const native = {
  //设置客户端导航栏关闭按钮
  NATIVE_CODE_SHOW_CLOSEBUTTON: "showCloseButton"
};
```

### 示例代码

```js
    // 方法
    execute(setInfo) {
        $native.callClientForUI(API.NATIVE_CODE_SHOW_WEBVIEW_BACKBUTTON, {
            flag: "1",
        });
    }
```

### API

| 属性 | 类型     | 说明                  | 默认值 |
| ---- | -------- | --------------------- | ------ |
| flag | `string` | `1` 显示 , `0` 不显示 | `-`    |

## showRefreshButton 

> PS: 导航栏页面刷新按钮,通过参数控制左右位置,默认右侧,点击后刷新当前 H5 页面

### 接口定义

> PS: 接口定义存放在公共 API 文件中,本项目中文件目录为 /app/constants/api.js。

```js
// 接口定义
const native = {
  //显示导航栏页面刷新按钮,通过参数控制左右位置,默认右侧
  NATIVE_CODE_SHOW_REFRESHBUTTON: "showRefreshButton"
};
```

### 示例代码

```js
    // 方法
    execute(setInfo) {
        $native.callClientForUI(API.NATIVE_CODE_SHOW_REFRESHBUTTON, {
            side: "left",
        });
    }
```

### API

| 属性 | 类型     | 说明                 | 默认值 |
| ---- | -------- | -------------------- | ------ |
| side | `string` | 左`left` , 右`right` | -      |

## showBackButton

> PS: 显示左侧返回按钮,点击后关闭 webview 返回客户端页面

### 接口定义

> PS: 接口定义存放在公共 API 文件中,本项目中文件目录为 /app/constants/api.js。

```js
// 接口定义
const native = {
  //显示左侧返回按钮,点击后关闭 webview 返回客户端页面
  NATIVE_CODE_SHOW_BACK_BUTTON: "showBackButton"
};
```

### 示例代码

```js
    // 方法
    execute(setInfo) {
        $native.callClientForUI(API.NATIVE_CODE_SHOW_BACK_BUTTON, {});
    }
```

### API

| 属性 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| -    | `-`  | -    | -      |
