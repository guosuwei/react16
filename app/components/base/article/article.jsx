import React from "react";
import classNames from "classnames";

export default class Article extends React.Component {
  static propTypes = {};

  static defaultProps = {};
  render() {
    const { className, children, ...others } = this.props;
    const cls = classNames({
      "ryt-article": true,
      [className]: className
    });
    return (
      <article className={cls} {...others}>
        {children}
      </article>
    );
  }
}
