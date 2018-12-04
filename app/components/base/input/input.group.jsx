import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const groupPrefixCls = "ryt-input-list";

const Group = props => {
  const { header, children, className, ...others } = props;
  const cls = classNames({
    [groupPrefixCls]: true,
    [className]: className
  });

  return (
    <div {...others} className={cls}>
      {header ? (
        <div className={`${groupPrefixCls}-header`}>{header}</div>
      ) : null}
      <div className={`${groupPrefixCls}-body`}>{children}</div>
    </div>
  );
};

Group.propTypes = {
  header: PropTypes.string
};

export default Group;
