import React from "react";
import PropTypes from "prop-types";
import Dialog from "rc-dialog";
import classNames from "classnames";
import PureRenderHoc from "../../util/hoc";

const Modal = props => {
  let {
    type,
    prefixCls,
    className,
    wrapClassName,
    style,
    bodyStyle,
    maskStyle,
    visible,
    transitionName,
    maskTransitionName,
    closable,
    maskClosable,
    onClose,
    footer,
    fullScreen,
    children,
    ...others
  } = props;

  if (type === "popup") {
    transitionName = "fadeInUp";
    maskTransitionName = "fadeIn";
  }
  if (type === "alert") {
    transitionName = "fadeIn";
    maskTransitionName = "fadeIn";
  }

  if (type === "popup") type = "page";

  const cls = classNames({
    [className]: className,
    [`${prefixCls}-${type}`]: true
  });

  return (
    <Dialog
      {...others}
      prefixCls={prefixCls}
      className={cls}
      wrapClassName={`${
        fullScreen || type === "alert" ? `${prefixCls}-full-screen` : ""
      } ${wrapClassName || ""}`}
      style={style}
      bodyStyle={bodyStyle}
      maskStyle={maskStyle}
      visible={visible}
      transitionName={transitionName}
      maskTransitionName={maskTransitionName}
      closable={closable}
      maskClosable={maskClosable}
      onClose={onClose}
      footer={footer}
    >
      {children}
    </Dialog>
  );
};

Modal.propTypes = {
  type: PropTypes.oneOf(["alert", "popup", "action-sheet"]),
  prefixCls: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  wrapClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  style: PropTypes.object,
  bodyStyle: PropTypes.object,
  maskStyle: PropTypes.object,
  visible: PropTypes.bool,
  transitionName: PropTypes.string,
  maskTransitionName: PropTypes.string,
  closable: PropTypes.bool,
  maskClosable: PropTypes.bool,
  footer: PropTypes.element,
  onClose: PropTypes.func,
  fullScreen: PropTypes.bool
};

Modal.defaultProps = {
  type: "popup",
  prefixCls: "ryt-modal",
  style: {},
  bodyStyle: {},
  maskStyle: {},
  visible: false,
  transitionName: "",
  maskTransitionName: "",
  closable: false,
  maskClosable: false,
  fullScreen: false
};

export default PureRenderHoc(Modal);
