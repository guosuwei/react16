module.exports = {
  // 报文头
  rspHead: {
    // 状态码
    returnCode: "00000000"
  },
  // 报文体
  rspBody: {
    List: [{
        // 电子回单号
        receiptNum: "0009911",
        // 交易日期
        tradeDate: "2018-09-09",
        // 交易流水号
        serialNum: "00987",
        // 付款账户名称
        payAccountName: "北京融易通信息技术有限公司",
        // 付款账户
        payAccountNum: "6217000000005555",
        // 付款账户开户行
        payAccountBank: "交通银行北京支行",
        // 收款账户名称
        recAccountName: "中国红十字总会",
        // 收款账户
        recAccountNum: "6123872199818812117",
        // 收款账户开户行
        recAccountBank: "中国工商银行",
        // 币种
        currency: "1",
        // 金额
        money: "10000",
        // 渠道
        channel: "1",
        // 记账流水号
        chargeNum: "101008482323423"
      },
      {
        // 电子回单号
        receiptNum: "0009922",
        // 交易日期
        tradeDate: "2018-06-09",
        // 交易流水号
        serialNum: "00567",
        // 付款账户名称
        payAccountName: "北京融易通信息技术有限公司",
        // 付款账户
        payAccountNum: "6217000000009999",
        // 付款账户开户行
        payAccountBank: "交通银行北京支行",
        // 收款账户名称
        recAccountName: "中国红十字总会",
        // 收款账户
        recAccountNum: "6123872199818812777",
        // 收款账户开户行
        recAccountBank: "中国工商银行",
        // 币种
        currency: "1",
        // 金额
        money: "10000",
        // 渠道
        channel: "1",
        // 记账流水号
        chargeNum: "101008482323423"
      }
    ]
  }
}