import React from "react";
import classNames from "classnames";
import PureRenderHoc from "../../util/hoc";

const prefixCls = "ryt-switch";

const Switch = props => {
  const {
    disabled,
    name,
    value,
    defaultValue,
    onChange,
    className,
    onClic,
    styleColo,
    ...others
  } = props;

  const cls = classNames({
    [prefixCls]: true,
    [`${prefixCls}-disabled`]: disabled,
    [className]: className
  });

  const changeHandle = e => {
    let value = e.target.checked;
    onChange && onChange(value, e);
    e.stopPropagation();
  };

  return (
    <input
      {...others}
      type="checkbox"
      name={name}
      className={cls}
      checked={value}
      defaultChecked={defaultValue}
      onChange={changeHandle}
      style={styleColo}
      {...(disabled ? { disabled: "true" } : "")}
    />
  );
};
export default PureRenderHoc(Switch);
