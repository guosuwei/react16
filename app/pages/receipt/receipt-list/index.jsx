import React, { Component } from "react";
// 引入公共文件
// import { $Api, $Fetch, $Native, $Common } from "@utils/index";
import  $Api  from "@api/api";
import  $Fetch  from "@utils/fetch/";
import  $Native   from "@utils/native";
import  $Common  from "@utils/common";

// 引入基础组件
import Button from "@components/base/button";
// 引入业务子组件
import ReceiptList from "./sub-unit/index";

export default class receiptList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      // 回单列表
      receiptList: [
        {
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
      ],
      // 打印列表
      printList: []
    };
  }
  // 初始化生命周期
  componentDidMount() {
    // alert("1111")
    // $Native.callClientForUI($Api.NATIVE_CODE_UPDATE_TITLE, {
    //   title: "回单打印111",
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
  getData() {
    // 获取数据
    $Fetch($Api.API_QUERY_RECEIPT_LIST, {
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
      data: {}
    }).then(res => {
      $Common.log(res);
      if ($Common.returnResult(res.rspHead.returnCode)) {
        this.setState({
          receiptList: res.rspBody.List
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
  submitData = (state, orderNum) => {
    // 设置URL
    let url = "receipt-detail/index.html#receiptID=";
    // let url = "receipt-detail.html#receiptID=";
    // 指定数组state
    let arr = this.state.printList.slice();
    // 删除数组元素方法
    Array.prototype.remove = function(val) {
      let index = this.indexOf(val);
      if (index > -1) {
        this.splice(index, 1);
      }
    };
    if (state !== true) {
      // 将回单号添加到数组
      arr.push(url + orderNum);
    } else if (state == true) {
      // 将回单号从数组中删除
      arr.remove(url + orderNum);
    }
    // 更新打印列表
    this.setState({ printList: arr });
  };
  // 提交打印
  submit = () => {
    let that = this;
    $Common.log(that.state.printList.join(","));
    let printlist = that.state.printList.join(",");
    $Native.callClientForUI($Api.NATIVE_CODE_SET_PRINT_LIST, {
      url: printlist
    });
    // let alertDict = {
    //   title: "信息提示",
    //   msg: "printlist",
    //   success_text: "确认",
    // };
    // $Common.dialog(alertDict);
  };
  render() {
    const that = this;
    const { receiptList } = that.state;
    return (
      <div>
        <div className="ryt-receipt-title">
          <div>可打印回单</div>
          <div>
            已选中
            <span>{this.state.printList.length}</span>份
          </div>
        </div>
        <div className="ryt-receipt">
          {receiptList.map(function(item, index) {
            return (
              <ReceiptList
                // 电子回单号
                key={index}
                receiptNum={item.receiptNum}
                // 交易日期
                tradeDate={item.tradeDate}
                // 交易流水号
                serialNum={item.serialNum}
                // 付款账户名称
                payAccountName={item.payAccountName}
                // 付款账户
                payAccountNum={item.payAccountNum}
                // 付款账户开户行
                payAccountBank={item.payAccountBank}
                // 收款账户名称
                recAccountName={item.recAccountName}
                // 收款账户
                recAccountNum={item.recAccountNum}
                // 收款账户开户行
                recAccountBank={item.recAccountBank}
                // 金额
                money={item.money}
                // 回调方法
                MethodFn={that.submitData}
              />
            );
          })}
        </div>
        <div className="ryt-receipt-button">
          <Button
            type="primary"
            onTap={this.submit}
            disabled={this.state.printList.length == 0}
          >
            打印
          </Button>
        </div>
      </div>
    );
  }
}
