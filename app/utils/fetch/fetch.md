# Fetch 请求

> PS: 用于 H5 数据交互请求

## 引用

```js
import $Fetch from "@utils/fetch";
```

## Fetch 配置

> PS: fetch 提供 3 种连接方式（1、mock 数据）（2、remote 直连）（3、桥接客户端）

### 文件位置

> PS: **app/utils/fetch/index.js**

```js
/**--------------------------------------------------------------------=====
 * 连接模式设置--开始
 * 优先级为 1.mock  2.remote 3.连接客户端,mock与remote均为false时，为连接客户端模式
 * 1.mock 模拟模式
 * 2.remote 直连模式
 * 3.客户端模式 （mock与remote均为false时，为连接客户端）
 **/

// 1.mock 模拟模式
const mock = true;

// 2.remote 直连模式
const remote = false;

// 2.remote 模式（地址）
const remoteUrl = "http://192.168.1.1:8088/";
```

## Fetch 使用

### 示例

```js
execute (){
    // url为接口地址
    $Fetch(url, {
        //上送报文头
        reqHead: {
            //场景编码
            sceneCode: "AC07",
            //步骤编码(根据相应步骤填写字段（1,2,3,4）)
            stepCode: "1",
            //交易类型 1：查询类交易 2：账务类交易 3：管理类交易 4: 授权类交易 原生需映射，HTML异步请求需赋值
            tradeType: "1",
            //交易标识 1-主，2-副
            flag: "2",
            //服务接口版本号 1.0.0
            serviceVersion: "1.0.0"
        },
        // 上送报文体
        data: {
            name: "李",
            age: "20",
        }
    }).then((res) => {
        // 接口返回处理
        Common.log(JSON.stringify(res));
    });
}
```
