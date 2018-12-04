import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Tappable from "react-tappable";
// 公共方法
import $Common from "@utils/common";
// 样式
import "./style/index.less";

export default class ReceiptList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false
    };
  }

  // 向父组件传递值并调用方法
  FatherMethodFn = orderNum => {
    this.props.MethodFn(this.state.check, orderNum);
    this.setState({
      check: !this.state.check
    });
  };

  render() {
    const { props } = this;
    let {
      // 电子回单号
      receiptNum,
      // 交易日期
      tradeDate,
      // 交易流水号
      serialNum,
      // 付款账户名称
      payAccountName,
      // 付款账户
      payAccountNum,
      // 付款账户开户行
      payAccountBank,
      // 收款账户名称
      recAccountName,
      // 收款账户
      recAccountNum,
      // 收款账户开户行
      recAccountBank,
      // 币种
      currency,
      // 金额
      money,
      // 渠道
      channel,
      // 记账流水号
      chargeNum,
      // 编号
      index,
      // 回调方法
      MethodFn
    } = props;

    // 设置样式
    const receiptPrefixCls = classNames(`ryt-receipt-list`, {
      [`ryt-receipt-list-check`]: this.state.check
    });

    return (
      <Tappable
        onClick={this.FatherMethodFn.bind(this, receiptNum)}
        component="div"
        className={receiptPrefixCls}
      >
        <div className="ryt-receipt-list-num">
          电子回单号:{receiptNum}
        </div>
        <div className="ryt-receipt-list-info">
          <div className="info">
            <div>
              <p>付款方</p>
              <span>{payAccountName}</span>
              <div>{$Common.setAccountNum(payAccountNum)}</div>
              <p>{payAccountBank}</p>
            </div>
            <div className="info-arrow">
              <span>{tradeDate}</span>
              <p>{$Common.setMoneyFormat(money)} 元</p>
            </div>
            <div>
              <p>收款方</p>
              <span>{recAccountName}</span>
              <div>{$Common.setAccountNum(recAccountNum)}</div>
              <p>{recAccountBank}</p>
            </div>
          </div>
          <div className="check">
            <i />
          </div>
        </div>
      </Tappable>
    );
  }
}
