import React from "react";
import PropTypes from "prop-types";
import Tappable from "react-tappable";
import classNames from "classnames";
import debounce from "lodash/debounce";
import Icon from "../icon";

const Button = props => {
  const {
    type,
    size,
    disabled,
    active,
    className,
    inline,
    onTap,
    icon,
    children,
    debounced,
    ...others
  } = props;
  const cls = classNames("ryt-button", {
    [`ryt-button-${type}`]: type,
    "ryt-button-active": active,
    "ryt-button-small": size === "small",
    "ryt-button-inline": inline,
    "ryt-button-icon": icon,
    "ryt-button-disabled": disabled,
    [className]: className
  });
  return (
    <Tappable
      {...others}
      onTap={disabled ? null : debounced ? debounce(onTap, 500) : onTap}
      className={cls}
      disabled={disabled}
      component="div"
    >
      {icon ? <Icon name={icon} size="md" /> : null}
      <span>{children}</span>
    </Tappable>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["default","default-dot","primary", "ghost", "ghost-dot","link", "warning"]),
  size: PropTypes.oneOf(["small", "default"]),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
  className: PropTypes.string,
  onTap: PropTypes.func
};

Button.defaultProps = {
  type: 'default',
  size: "default",
  inline: false,
  disabled: false
};

export default Button;
