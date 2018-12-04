import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';
const Item = props => {
  let { className, size, children, style, ...others } = props;
  const cls = classNames("ryt-flex-item", {
    [className]: className
  });
  !style && (style = {});
  !style.width && (style.flex = size);
  return (
    <div {...others} className={cls} style={style}>
      {children}
    </div>
  );
};

Item.defaultProps = {
  size: 1
};

Item.PropsType = {
  size: PropTypes.number
};

export default Item;
