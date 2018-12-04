import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';

const groupPrefixCls = 'ryt-cells';

const Group = (props) => {
  const {
    header,
    children,
    className,
    ...others
  } = props;
  const cls = classNames({
    [groupPrefixCls]: true,
    [className]:className
  });

  return (
    <div {...others} className={cls}>
      {
        header?<div className={`${groupPrefixCls}-header`}>{header}</div>:null
      }
      <div className={`${groupPrefixCls}-content`}>
        {
          children
        }
      </div>
    </div>
  );
};

Group.propTypes = {
  header: PropTypes.string
};

export default Group;
