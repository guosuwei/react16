import React, { Component } from "react";
// 引入公共文件
import { $Api, $Fetch, $Native, $Common } from "@utils/index";

// 引入样式
import "./style/index.less";

export default class receiptDetail extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      receiptDetail: {
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
        chargeNum: "101008482323423",
        // 客户附言
        abstractCustomer: "手机转账",
        // 银行附言
        abstractBank: "手机转账",
      },
      receiptId: ""
    };
  }
  // 初始化生命周期
  componentDidMount() {
    // $Native.callClientForUI($Api.NATIVE_CODE_UPDATE_TITLE, {
    //   title: "回单打印",
    //   leftButton: {
    //     exist: "true",
    //     closeFlag: "false"
    //   }
    // });
    // 返回首页
    // $Native.callClientForUI($Api.NATIVE_CODE_SHOW_BACK_BUTTON, {});
    // 获取数据
    // this.getData();
  }
  // 获取数据
  getData(n) {
    // 获取URL参数
    $Common.log("获取URL参数ID为(" + $Common.getUrl("receiptID") + ")");
    // 获取数据
    $Fetch($Api.API_QUERY_RECEIPT_DETAIL, {
      //默认固定上送报文
      reqHead: {
        //场景编码
        sceneCode: "IN01",
        //步骤编码(根据相应步骤填写字段（1,2,3,4）)
        stepCode: "1",
        //交易类型 1：查询类交易 2：账务类交易 3：管理类交易 4: 授权类交易 原生需映射，HTML异步请求需赋值
        tradeType: "1",
        //交易标识 1-主，2-副
        flag: "1",
        //服务接口版本号 1.0.0
        serviceVersion: "1.0.0"
      },
      // 交易上送报文
      data: {
        receiptId:$Common.getUrl("receiptID")
      }
    }).then(res => {
      $Common.log(res);
      if ($Common.returnResult(res.rspHead.returnCode)) {
        this.setState({
          receiptDetail: res.rspBody.Detail
        });
      } else {
        let alertDict = {
          title: "信息提示",
          msg: res.rspHead.returnMsg,
          success_text: "确认",
          success: () => {
            $native.callClientForUI($Api.NATIVE_CODE_SHOW_BACK_BUTTON, {});
          }
        };
        $Common.showAppDialogAlert(alertDict);
      }
    });
  }
  render() {
    let that = this;
    // 渠道类型转换
    let channelFlag = that.state.receiptDetail.channel;
    if (channelFlag == 1) {
      that.state.receiptDetail.channel = "手机银行";
    }
    // 币种类型转换
    let currencyFlag = that.state.receiptDetail.currency;
    if (currencyFlag == 1) {
      that.state.receiptDetail.currency = "人民币";
    }
    return (
      <div>
        <div className="receipt-detail">
          <div className="receipt-detail-title">
            <div />
            <div>电子银行业务回单（付款）</div>
          </div>
          <div className="receipt-detail-info">
            <div>
              <div>
                <span>交易日期</span>
                <span>{this.state.receiptDetail.tradeDate}</span>
              </div>
              <div>
                <span>交易流水号</span>
                <span>{this.state.receiptDetail.serialNum}</span>
              </div>
            </div>
            <div>
              <div>
                <span>付款名称</span>
                <span>{this.state.receiptDetail.payAccountName}</span>
              </div>
              <div>
                <span>收款名称</span>
                <span>{this.state.receiptDetail.recAccountName}</span>
              </div>
            </div>
            <div>
              <div>
                <span>付款账号</span>
                <span>{this.state.receiptDetail.payAccountNum}</span>
              </div>
              <div>
                <span>收款账号</span>
                <span>{this.state.receiptDetail.recAccountNum}</span>
              </div>
            </div>
            <div>
              <div>
                <span>付款开户行</span>
                <span>{this.state.receiptDetail.payAccountBank}</span>
              </div>
              <div>
                <span>收款开户行</span>
                <span>{this.state.receiptDetail.recAccountBank}</span>
              </div>
            </div>
            <div>
              <div>
                <span>币种</span>
                <span>{this.state.receiptDetail.currency}</span>
              </div>
              <div>
                <span>金额</span>
                <span>
                  {$Common.setMoneyFormat(this.state.receiptDetail.money)}
                </span>
              </div>
            </div>
            <div>
              <div>
                <span>渠道</span>
                <span>{this.state.receiptDetail.channel}</span>
              </div>
              <div>
                <span>记账流水号</span>
                <span>{this.state.receiptDetail.chargeNum}</span>
              </div>
            </div>
            <div>
              <div>
                <span>客户附言</span>
                <span>{this.state.receiptDetail.abstractCustomer}</span>
              </div>
              <div>
                <span>银行附言</span>
                <span>{this.state.receiptDetail.abstractBank}</span>
              </div>
            </div>
          </div>
          <div className="receipt-detail-tips">
            提示：防伪电子业务专用章与带有红色印油的实物章具备同等效力
          </div>
          <div className="receipt-detail-other">
            <div>
              <p>登录号： 13910203131</p>
              <p>客户验证码：80012313293002932892</p>
            </div>
            <div>
              <p>网点编号： 13910203131</p>
              <p>柜员号：80012313293002932892</p>
            </div>
            <div>
              <p>打印状态： 正常</p>
              <p>打印日期：2018-09-20 09:35:03</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
