import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Tappable from "react-tappable";
import Icon from "../icon";
const cellPrefixCls = "ryt-cell";

let Cell = props => {
  let {
    thumb,
    thumbWidth,
    thumbHeight,
    title,
    subTitle,
    description,
    subDescription,
    onTap,
    className,
    icon,
    iconTitle,
    checkbox,
    radio,
    ...others
  } = props;

  if (icon && typeof icon === "boolean") {
    icon = "empty";
  }
  const cls = classNames({
    [cellPrefixCls]: true,
    [className]: className
  });

  return (
    <Tappable {...others} className={cls} onTap={onTap} component="label">
      {thumb ? (
        <div className={`${cellPrefixCls}-thumb`}>
          {React.isValidElement(thumb) ? (
            thumb
          ) : (
            <img
              src={thumb}
              alt="img"
              style={{ height: thumbHeight, width: thumbWidth }}
            />
          )}
        </div>
      ) : null}
      {checkbox ? (
          <div className={`${cellPrefixCls}-content-checkbox`}>
            {checkbox}
          </div>
        ) : null}
      <div className={`${cellPrefixCls}-content`}>
        {title || subTitle ? (
          <div className={`${cellPrefixCls}-content-title-area`}>
            <div className={`${cellPrefixCls}-content-title`}>{title}</div>
            <div className={`${cellPrefixCls}-content-title-sub`}>
              {subTitle}
            </div>
          </div>
        ) : null}
        {description || subDescription ? (
          <div className={`${cellPrefixCls}-content-description-area`}>
            <div className={`${cellPrefixCls}-content-description`}>
              {description}
            </div>
            <div className={`${cellPrefixCls}-content-description-sub`}>
              {subDescription}
            </div>
          </div>
        ) : null}
        {radio ? (
          <div className={`${cellPrefixCls}-content-radio`}>
            {radio}
          </div>
        ) : null}
      </div>
      {icon ? <Icon size="xxs" name={icon} /> : null}
    </Tappable>
  );
};

Cell.propTypes = {
  thumb: PropTypes.any,
  thumbWidth: PropTypes.number,
  thumbHeight: PropTypes.number,
  title: PropTypes.any,
  subTitle: PropTypes.any,
  description: PropTypes.any,
  subDescription: PropTypes.any,
  icon: PropTypes.any,
  onTap: PropTypes.func,
};

export default Cell;
