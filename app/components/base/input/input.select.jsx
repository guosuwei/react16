import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Common from "@utils/common";
import Tappable from "react-tappable";
import Modal from "../modal";
import Icon from "../icon";
import "./style/index.less";

const defaultFormat = values => {
  return values.join(",");
};

export default class InputClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.placeholder,
      typeValue: this.props.value,
      pickerVisible: ""
    };
  }
  // 选择列表
  showListClickBox = () => {
    let that = this;
    this.setState({
      pickerVisible: true
    });

    Modal.select(
      {
        items: that.props.items,
        close: Common.closeModal,
        closeText: that.props.closeText
      },
      function(key) {
        let typeListItem = that.props.items.map(function(item, i) {
          item.now = "0";
          if (i === key) {
            item.now = "1";
            that.setState({
              type: item.label,
              typeValue: item.value
            });
            that.FatherMethodFn(item.label, item.value);
          }
        });
      }
    );
  };
  // 向父组件传递值并调用方法
  FatherMethodFn(label, val) {
    //transactionId为交易类型,item为账户信息
    this.props.onChange(label, val);
  }
  render() {
    const { props } = this;
    const {
      value,
      title,
      placeholder,
      labelNumber,
      items,
      closeText,
      extraIcon,
      disabled,
      onChange
    } = props;

    // const type = this.getSel() || placeholder;
    const cname = "";
    const defaultInputCls = "ryt-input";
    const labelCls = classNames({
      "ryt-input-label": true,
      [`${defaultInputCls}-label-2`]: labelNumber === 2,
      [`${defaultInputCls}-label-3`]: labelNumber === 3,
      [`${defaultInputCls}-label-4`]: labelNumber === 4,
      [`${defaultInputCls}-label-5`]: labelNumber === 5,
      [`${defaultInputCls}-label-6`]: labelNumber === 6,
      [`${defaultInputCls}-label-7`]: labelNumber === 7
    });

    // 选择/录入框的外层盒子样式
    const boxStyle = {
      display: "flex",
      alignItems: "center",
      width: "100%"
    };

    const cls = classNames({
      "ryt-input-list-item": true,
      "ryt-input-item": true
    });
    return (
      <div className={cls}>
        <Tappable
          style={boxStyle}
          component="label"
          onClick={disabled ? null : this.showListClickBox.bind()}
        >
          <div className={labelCls}>{title}</div>
          <div className="ryt-input-control">
            <div>{this.state.type}</div>
          </div>
          <div className="ryt-input-extra">
            <Icon size="xs" name={extraIcon} />
          </div>
        </Tappable>
      </div>
    );
  }

  //生产版本可以注释掉,用于优化大小
  static propTypes = {
    // value: PropTypes.array,
    // callTest: PropTypes.func,
    onVisibleChange: PropTypes.func,
    visible: PropTypes.bool,
    labelNumber: PropTypes.oneOf([2, 3, 4, 5, 6, 7])
  };

  static defaultProps = {
    format: defaultFormat,
    value: [],
    labelNumber: 4,
    closeText:"取消"
  };
}
