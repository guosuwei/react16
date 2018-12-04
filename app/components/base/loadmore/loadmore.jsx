import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "../icon";
import "./style/index.less";

/**
 * Loadmore Indicators.
 *
 */
const LoadMore = props => {
  const { className, children, loading, showLine, showDot, ...others } = props;
  const cls = classNames({
    "ryt-loadmore": true,
    "ryt-loadmore-line": showLine,
    "ryt-loadmore-dot": showDot,
    [className]: className
  });

  return (
    <div className={cls} {...others}>
      {loading ? <Icon name="loading" /> : false}
      <div className="ryt-loadmore-tips">{children}</div>
    </div>
  );
};

LoadMore.propTypes = {
  /**
   * display laoding spinner
   *
   */
  loading: PropTypes.bool,
  /**
   * display side lines
   *
   */
  showLine: PropTypes.bool,
  /**
   * display dot in the center
   *
   */
  showDot: PropTypes.bool
};

LoadMore.defaultProps = {
  loading: false,
  showLine: false,
  showDot: false
};

export default LoadMore;
