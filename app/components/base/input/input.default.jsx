import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import PureRenderHoc from "../../util/hoc";
import noop from "../../util/noop.js";
import Button from "../button";
import Icon from "../icon";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: this.props.placeholder,
      isError: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      "placeholder" in nextProps &&
      this.state.placeholder !== nextProps.placeholder
    ) {
      this.setState({
        placeholder: nextProps.placeholder
      });
    }
  }
  onInput = e => {
    let me = this;
    let value = e.target.value;
    let value1 = value.replace(/[^0-9]/g, "");
    if (value1.length > me.props.maxTextLength) {
      value1 = value1.slice(0, me.props.maxTextLength);
    }
    e.target.value = value1;
  };

  onInputChange = e => {
    let me = this;
    let value = e.target.value;
    switch (me.props.type) {
      case "bankCard": //银行卡格式化
        let value4 = value.replace(/[^0-9\s]/g, "");
        e.target.value = value4;
        break;
      case "idcard": //数字加X/x
        let value5 = value.replace(
          /[^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x]/g,
          ""
        );
        e.target.value = value5;
        break;
      case "name": //字母加汉字
        e.target.value = value.replace(/[^A-Za-z\u4e00-\u9fa5]+/g, "");
        break;
      case "username": //字母加数字
        e.target.value = value.replace(/[^A-Za-z0-9]+/g, "");
        break;
      default:
        break;
    }
    if (value == "") {
      me.setState({
        isError: false
      });
    }
    me.props.onChange(value);
  };

  onBlurChange = () => {
    // Common.inputBlur();
  };

  render() {
    //参数
    const {
      type,
      value,
      defaultValue,
      name,
      editable,
      onClick,
      disabled,
      children,
      cursor,
      labelNumber,
      maxTextLength,
      onFocus,
      onExtraClick,
      textAlign,
      labelTextAlign,
      extraText,
      extraIcon,
      extraButton,
      extraButtonName,
      id
    } = this.props;

    let valueProps = value !== undefined ? { value } : { defaultValue };
    const { placeholder } = this.state;

    let inputType = "text";
    let moneyType = "";
    let inputPattern = "";
    switch (type) {
      case "bankCard":
        inputType = "number";
        break;
      case "money":
        moneyType = "元";
        break;
      case "number":
        inputType = "number";
        // inputPattern = '^\d+\.?\d{0,2}$';
        break;
      case "password":
        inputType = "password";
        break;
      case "idcard":
        inputType = "idcard";
        break;
      case "name":
        inputType = "name";
        break;
      case "username":
        inputType = "username";
        break;
      default:
        break;
    }
    const defaultInputCls = "ryt-input";
    const cls = classNames({
      "ryt-input-list-item": true,
      "ryt-input-item": true,
      "ryt-input-error": this.state.isError
    });

    const labelCls = classNames({
      "ryt-input-label": true,
      [`${defaultInputCls}-label-2`]: labelNumber === 2,
      [`${defaultInputCls}-label-3`]: labelNumber === 3,
      [`${defaultInputCls}-label-4`]: labelNumber === 4,
      [`${defaultInputCls}-label-5`]: labelNumber === 5,
      [`${defaultInputCls}-label-6`]: labelNumber === 6,
      [`${defaultInputCls}-label-7`]: labelNumber === 7
    });

    const inputCls = classNames({
      "ryt-input-control": true
    });

    //模板
    return (
      <div className={cls}>
        {children ? (
          <div className={labelCls} style={{ textAlign: labelTextAlign }}>
            {children}
          </div>
        ) : null}
        <div className={inputCls}>
          <input
            {...valueProps}
            style={{ textAlign }}
            type={inputType}
            maxLength={maxTextLength}
            name={name}
            placeholder={placeholder}
            onChange={this.onInputChange}
            onInput={inputType == "number" ? this.onInput : null}
            onBlur={this.onBlurChange}
            onFocus={onFocus}
            readOnly={!editable}
            onClick={onClick}
            disabled={disabled}
            pattern={inputPattern}
            value={value}
          />
          {cursor ? (
            <div
              id={id}
              className="ryt-input-cursor"
              style={{
                left: this.props.cursorSize * 0.21 + "rem",
                display: "none"
              }}
            />
          ) : null}
        </div>
        {moneyType !== " " ? (
          <div className="ryt-input-text">{moneyType}</div>
        ) : null}
        {extraText ? (
          <div className="ryt-input-text" onClick={onExtraClick}>
            {extraText}
          </div>
        ) : null}
        {extraIcon ? (
          <div className="ryt-input-extra" onClick={onExtraClick}>
            <Icon size="sm" name={extraIcon} />
          </div>
        ) : null}
        {extraButton ? (
          <div className="ryt-input-extra">
            <Button type={extraButton} inline size="small" onClick={onExtraClick}>
              {extraButtonName}
            </Button>
          </div>
        ) : null}
      </div>
    );
  }

  //生产版本可以注释掉,用于优化大小
  static propTypes = {
    type: PropTypes.oneOf([
      "text",
      "bankCard",
      "money",
      "password",
      "number",
      "idcard",
      "name",
      "username",
      "cursorSize",
      "phone"
    ]),
    labelNumber: PropTypes.oneOf([2, 3, 4, 5, 6, 7]),
    textAlign: PropTypes.oneOf(["left", "center", "right"])
  };

  static defaultProps = {
    prefixCls: "ryt-input",
    cellPrefixCls: "ryt-cell",
    type: "text",
    name: "",
    defaultValue: "",
    editable: true,
    disabled: false,
    placeholder: "",
    clear: false,
    cursor: true,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    onClick: noop,
    extra: "",
    onExtraClick: noop,
    error: false,
    onErrorClick: noop,
    labelNumber: 4,
    labelTextAlign: "left",
    textAlign: "left",
    moneyType: "",
    extraButton: false,
    maxTextLength:100
  };
}

Input = PureRenderHoc(Input);

export default Input;
