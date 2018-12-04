import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';
import PureRenderHoc from '../../util/hoc';
import './style/index.less';

class Icon extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {name, size, className, ...others} = this.props;
    const cls = classNames('ryt-icon',
      [`ryt-icon-${size}`]: size,
      `ryt-icon-${name}`,
      {[className]: className});

    return (
      <i {...others} className={cls} />
    );
  }
}

Icon.propTypes = {
  size: PropTypes.oneOf(['xxs','xs','sm','md','l','xl','lg','big'])
};
Icon.defaultProps = {
  size: 'md'
};
export default PureRenderHoc(Icon);