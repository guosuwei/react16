# Common 公共方法封装

> PS: 用于常用的公共方法封装

## 引用

```js
import Common from "@utils/common/";
```

## 系统识别

> PS: 识别当前系统类型、模式

```js
Common.isOS();
// 校验 1.前系统及模式
// 返回 true
Common.isOSType();
// 校验 1.识别当前系统类型
// 返回 "ios","ad","pc"
```

## 页面跳转

> PS: H5 页面跳转方法 **根据当前终端做响应,浏览器模式(H5 方法）客户端模式(native 方法）**

### URL

```js
Common.setUrl(url);
// url 为所需跳转的地址
```

## 校验

> PS: 公共校验方法

### 卡号

```js
Common.cardNumber();
// 校验 1.是否为(空) 2.长度(10-20)位之间
// 返回 true
```

### 是否为空

```js
Common.judgeEmpty();
// 校验 1.是否为(空)
// 返回 true
```

### 密码、短信验证码

```js
Common.PasswordSmsNumber();
// 校验 1.是否为(空) 2.长度(6)位
// 返回 true
```

### 特殊字符

```js
Common.inputRegExp();
// 校验 1.是否(包含) [`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_]
// 返回 true
Common.inputRegExpLoose();
// 校验 1.是否(包含) [`@#$^&*()=|{}\\[\\].<>/~@#（）——|{}【】]
// 返回 true
```

### 手机号

```js
Common.phoneNumber();
// 校验 1.是否为(手机号) 2.长度(11)位
// 返回 true
```

### 金额

```js
Common.moneyType();
// 校验 1.是否为(数字) 2.长度(小于12)位
// 返回 true
```

### 身份证

```js
Common.validateIDCard();
// 校验 1.长度(18)位 2.格式
// 返回 1.正确(pass=true) 2.错误(pass=错误信息)
```

## 格式化

> PS: 用于卡号、手机号、金额等格式化方法

### 卡号

```js
Common.setAccountNum();
// 格式 1.每四位加空格 + 中间四位转化为星号
// 示例 8888 **** 8888
Common.setAccountNumForSpace();
// 格式 1.每四位加空格
// 示例 8888 8888 8888 8888
```

### 手机号

```js
Common.setAccountNum();
// 格式 1.保留前后4位 2.每四位加空格 3.中间转化为星号
// 示例 1234567812345678 格式化为 1234 **** 5678
Common.setPhoneNum();
// (注:用于客户端返回信息格式化)
// 格式 1.去除 "-" "+86"
// 示例 +86-139-1234-5678 格式化为 13912345678
```

### 金额

```js
Common.setMoneyFormat();
// 示例 10000 格式化为 10,000.00
```

### 当前日期

```js
// 上送需要的格式
Common.getCurrentDate(formatStr);
// 校验 1.是否为(数字) 2.长度(小于12)位
// 返回 1.正确(pass=true) 2.错误(pass=错误信息)
```

### 格式化日期

```js
Common.getDateFormat(date, formatStr);
// 上送需要的格式
// 校验 1.是否为(数字) 2.长度(小于12)位
// 返回 1.正确(pass=true) 2.错误(pass=错误信息)
```

### 数字去除多余的 0

```js
Common.moneyType();
// 校验 1.是否为(数字) 2.长度(小于12)位
// 返回 1.正确(pass=true) 2.错误(pass=错误信息)
```

## dialog

> PS: 弹出提示框, **根据当前终端做响应,浏览器模式(H5 方法）客户端模式(native 方法）**

```js
// 设置
let setInfo = {
  //标题
  title: "alert标题",
  //内容
  msg: "alert内容",
  //取消按钮名称
  cancel_text: "取消",
  //取消按钮回调方法
  cancel: this.cancel,
  //确认按钮名称
  success_text: "确认",
  //确认按钮回调方法
  success: this.success
};
// 方法
Common.dialog(setInfo);
```

## loading

> PS: 加载提示 **根据当前终端做响应,浏览器模式(H5 方法）客户端模式(native 方法）**

```js
//设置状态 1 显示 0 关闭
let state = "1";
//文字描述（仅限H5）
let info = "加载中...";
Common.loading(state, info);
```

## toast

> PS: 用于文章内容展示

```js
```

## session 本地存储

> PS: session 本地存储

### 添加

```js
Common.addSessionData(key, dataStr);
// 添加 session本地存储 名称(key) 数据(dataStr)
```

### 接收

```js
Common.getSessionData(key);
// 接收 session本地存储 名称(key)
```

### 清除

```js
Common.removeSessionData(key);
// 清除 session本地存储 名称(key)
```

### 清除并返回值

```js
Common.removeSessionDataReturn(key);
// 清除 session本地存储 名称(key) 并返回
```

## URL参数获取
> PS: 用于用于截取URL中传参
```js
Common.getUrl(n);
// 示例 http://localhost:9999/receipt-list.html&receiptID=123124451 
// Common.getUrl(receiptID); 返回 123124451
```

## log 打印

> PS: 用于打印控制台 log

```js
Common.log();
// 打印控制台log
```
