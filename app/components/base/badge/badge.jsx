import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import PureRenderHoc from "../../util/hoc";
import "./style/index.less";

const prefixCls = "ryt-badge";

const Badge = props => {
  const {
    className,
    children,
    type,
    text,
    maxNum,
    small,
    show,
    ...others
  } = props;
  const cls = classNames({
    [`${prefixCls}`]: true,
    [`${prefixCls}-small`]: small,
    [`${prefixCls}-no-children`]: !children,
    [`${prefixCls}-hidden`]: !show,
    [className]: className
  });

  const renderText = function(text, maxNum) {
    const parseText = parseInt(text);
    if (typeof parseText === "number" && parseText.toString() !== "NaN") {
      return maxNum
        ? parseText > maxNum
          ? maxNum + "+"
          : parseText
        : parseText;
    } else {
      return text;
    }
  };

  return (
    <div className={cls} {...others}>
      {children}
      <div className={`${prefixCls}-area ${prefixCls}-${type} `}>
        {type === "text" ? renderText(text, maxNum) : null}
      </div>
    </div>
  );
};

Badge.propTypes = {
  type: PropTypes.oneOf(["dot", "text"]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  small: PropTypes.bool,
  maxNum: PropTypes.number,
  show: PropTypes.bool
};

Badge.defaultProps = {
  type: "dot",
  small: false,
  maxNum: 99,
  show: true
};

export default PureRenderHoc(Badge);
