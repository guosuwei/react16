import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * ryt wrapper for textarea
 *
 */
export default class TextArea extends Component {
  static propTypes = {
    /**
     * display word counter
     *
     */
    showCounter: PropTypes.bool,
    /**
     * max character allow for textarea
     *
     */
    maxTextLength: PropTypes.number,
    defaultValue: PropTypes.string
  };

  static defaultProps = {
    showCounter: true,
    defaultValue: undefined
  };

  state = {
    textCounter: this.props.defaultValue ? this.props.defaultValue.length : 0
  };

  handleChange(e) {
    this.setState({ textCounter: e.target.value.length });

    //forward event to props if any
    if (this.props.onChange) this.props.onChange(e);
  }

  render() {
    const {
      className,
      children,
      showCounter,
      maxTextLength,
      onChange,
      ...others
    } = this.props;
    const cls = classNames({
      "ryt-textarea": true,
      [className]: className
    });
    const clsInput = classNames({
      "ryt-input-list-item": true,
      "ryt-input-textarea": true
    });
    return (
      <div className={clsInput}>
        <textarea
          className={cls}
          maxLength={maxTextLength}
          onChange={this.handleChange.bind(this)}
          {...others}
        >
          {children}
        </textarea>
        {showCounter ? (
          <div className="ryt-textarea-counter">
            <span>{this.state.textCounter}</span>
            {maxTextLength ? "/" + maxTextLength : false}
          </div>
        ) : (
          false
        )}
      </div>
    );
  }
}
