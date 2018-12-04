import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/TabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";
import PureRenderHoc from "../../util/hoc";
import Icon from "../icon/index";
import Badge from "../badge/index";
import "./style/index.less";

const prefixCls = "ryt-tab-bar";
let TabBar = props => {
  let { animation, children,  className, ...others } = props;
  
  const cls = classNames({
    [`${prefixCls}-animation`]: animation,
    [className]: className
  });

  return (
    <Tabs
      {...others}
      className={cls}
      prefixCls={prefixCls}
      renderTabBar={() => <ScrollableInkTabBar />}
      renderTabContent={() => <TabContent />}
    >
      {children.map(child => {
        const props = child.props;
        const {
          tab,
          text,
          icon,
          content,
          children,
          hasBadge,
          badgeType,
          badgeText,
          badgeMaxNum,
          ...others
        } = props;
        const tabContent = (
          <div
            className={`${prefixCls}-item ${
              hasBadge ? "" : `${prefixCls}-no-badge`
            }`}
          >
            <Badge type={badgeType} text={badgeText} maxNum={badgeMaxNum} small>
              {tab ? (
                tab
              ) : (
                <div className={`${prefixCls}-icon`}>
                  {React.isValidElement(icon) ? icon : <Icon name={icon} />}
                  {<p>{text}</p>}
                </div>
              )}
            </Badge>
          </div>
        );
        return (
          <TabPane tab={tabContent} {...others} key={child.key}>
            {children}
          </TabPane>
        );
      })}
    </Tabs>
  );
};

TabBar.propTypes = {
  animation: PropTypes.bool,
  onChange: PropTypes.func,
  activeKey: PropTypes.string,
  defaultActiveKey: PropTypes.string,
};

TabBar.defaultProps = {
  animation: true,
};

TabBar = PureRenderHoc(TabBar);

const Panel = props => {
  const { children, ...others } = props;
  return <div {...others}>{children}</div>;
};

Panel.propTypes = {
  key: PropTypes.string.isRequired,
  tab: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
  disabled: PropTypes.bool,
  icon: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
  text: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
  content: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
  hasBadge: PropTypes.bool,
  badgeType: PropTypes.string,
  badgeText: PropTypes.oneOfType[(PropTypes.number, PropTypes.string)],
  badgeMaxNum: PropTypes.number
};

Panel.defaultProps = {
  disabled: false,
  hasBadge: false
};
TabBar = PureRenderHoc(TabBar);
TabBar.Panel = PureRenderHoc(TabPane);
export default TabBar;
