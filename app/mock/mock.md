# Mock 数据

> PS: 用于提供模拟数据以便前后端分离开发

## 启动mock服务

> PS: 每次更改MOCK数据后需重启MOCK服务方可生效。

```js
# npm run mock // 启动MOCK服务
```

## mock服务配置

### 文件位置

> PS: **app/mock/server.js** MOCK 数据路由配置,数据文件定义.

```js
// 定义mock数据文件
const FetchPostDemo = require("./FetchDemo/FetchPostDemo.js");

// 创建mock数据路由
router.post("/mock/FetchPostDemo", async (ctx, next) => {
  ctx.response.body = FetchPostDemo;
});
```
## mock数据格式

```js
module.exports = {
  // 报文头
  rspHead: {
    // 状态码
    returnCode: "00000000"
  },
  // 报文体
  rspBody: {
    // 本金
    principal: "12121212",
    // 定期开户日
    openDate: "12445555",
    // 余额
    balance: "12345",
    // 支取日期
    drawDate: "2018-12-12",
    // 利息 
    interest: "2",
    // 利息税
    interestTax: "22"
  }
}
```
