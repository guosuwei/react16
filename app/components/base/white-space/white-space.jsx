import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import PureRenderHoc from "../../util/hoc";
import "./style/index.less";

class WhiteSpace extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { size, className, ...others } = this.props;
    const cls = classNames(
      "ryt-whitespace",
      ([`ryt-whitespace-${size}`]: size),
      { [className]: className }
    );

    return <div {...others} className={cls} />;
  }
}

WhiteSpace.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"])
};
WhiteSpace.defaultProps = {
  size: "md"
};
export default PureRenderHoc(WhiteSpace);
