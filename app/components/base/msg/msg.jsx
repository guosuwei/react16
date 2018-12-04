import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "../button/index";
// import { Footer, FooterLinks, FooterLink } from "../footer";
import Icon from "../icon/index";
import "./style/index.less";
/**
 * A full notification page to indicate results
 *
 */
class Msg extends Component {
  static propTypes = {
    /**
     * Icon type
     *
     */
    type: PropTypes.string,
    /**
     * Object array of Buttons, require at least `label` property
     *
     */
    buttons: PropTypes.array,
    /**
     * Page Title
     *
     */
    title: PropTypes.string,
    /**
     * Page Description
     *
     */
    message: PropTypes.string,
    /**
     * deprecated property from 0.4.x
     *
     */
    extraHref: PropTypes.string,
    /**
     * deprecated property from 0.4.x
     *
     */
    extraText: PropTypes.string
    /**
     * Footer Element of Page
     *
     */
  };

  static defaultProps = {
    type: "success",
    buttons: []
  };

  _renderButtons() {
    return this.props.buttons.map((button, idx) => {
      const { type, label, ...others } = button;
      return (
        <Button key={idx} {...others} type={type}>
          {label}
        </Button>
      );
    });
  }

  render() {
    const {
      children,
      className,
      type,
      title,
      message,
      extraHref,
      extraText,
      buttons,
      ...others
    } = this.props;
    const cls = classNames("ryt-msg", {
      [className]: className
    });

    return (
      <div className={cls} {...others}>
        <div className="ryt-msg-icon-area">
          <Icon name={type} size="big" />
        </div>
        <div className="ryt-msg-text-area">
          {title ? <h2 className="ryt-msg-title">{title}</h2> : false}
          {message ? <p className="ryt-msg-desc">{message}</p> : false}
          {children}
        </div>
        {buttons ? (
          <div className="ryt-msg-opr-area">
            <Button.Group>{this._renderButtons()}</Button.Group>
          </div>
        ) : (
          false
        )}
      </div>
    );
  }
}

export default Msg;
