import React from "react";
import classNames from "classnames";
import PureRenderHOC from "../../util/hoc";

const prefixCls = "ryt-checkbox";

const Checkbox = props => {
  const {
    disabled,
    name,
    value,
    defaultValue,
    onChange,
    className,
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
      {...(disabled ? { disabled: "true" } : "")}
    />
  );
};
export default PureRenderHOC(Checkbox);
