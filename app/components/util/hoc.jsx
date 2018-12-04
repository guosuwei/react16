import React, { PureComponent } from "react";
import shallowEqual from "fbjs/lib/shallowEqual";

const shouldComponentUpdate = function(nextProps, nextState) {
  return (
    !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState)
  );
};

const PureRenderHoc = Comp => {
  Comp.prototype.shouldComponentUpdate = shouldComponentUpdate;
  return Comp;
};

const TransitionPageHoc = Comp => {
  class WrapperComp extends PureComponent {
    componentWillUnmount() {
      this.getDOMNode().display = "none";
    }
    render() {
      return <Comp {...this.props} />;
    }
  }
  return WrapperComp;
};

export { PureRenderHoc as default, TransitionPageHoc };
