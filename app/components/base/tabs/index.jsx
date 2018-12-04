import React from "react";
import PropTypes from "prop-types";
import RcTabs from "rc-tabs";
import TabContent from "rc-tabs/lib/TabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";
import PureRenderHoc from "../../util/hoc";
import "./style/index.less";

const prefixCls = "ryt-tabs";
let SegmentTab = props => {
  let {
    animation,
    children,
    position,
    className,
    ...others
  } = props;

  return (
    <RcTabs
      {...others}
      prefixCls={prefixCls}
      tabBarPosition={position}
      allowInkBar={false}
      renderTabBar={() => <ScrollableInkTabBar />}
      renderTabContent={() => <TabContent />}
    >
      {children}
    </RcTabs>
  );
};

SegmentTab.propTypes = {
  animation: PropTypes.bool,
  onChange: PropTypes.func,
  activeKey: PropTypes.string,
  defaultActiveKey: PropTypes.string,
  transitionName: PropTypes.object
};

SegmentTab.defaultProps = {
  position: "top",
  transitionName: {
    backward: "ryt-am-slide-horizontal-backward",
    forward: "ryt-am-slide-horizontal-forward"
  }
};

SegmentTab = PureRenderHoc(SegmentTab);

const Panel = props => {
  return <RcTabs.TabPane {...props} />;
};

Panel.propTypes = {
  tab: PropTypes.string,
  disabled: PropTypes.bool
};

Panel.defaultProps = {
  disabled: false
};

SegmentTab.Panel = PureRenderHoc(Panel);
export default SegmentTab;
