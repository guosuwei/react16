import React from "react";
// import { Loading } from "components";

class Loadings extends React.Component {
  render() {
    return (
      <div className="w-doc-loading">☺☺正在加载请稍候♪♪♪</div>
    );
  }
}

export default class Bundle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mod: null
    };
  }

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }
  load(props) {
    this.setState({
      mod: Loadings
    });
    props.load(mod => {
      this.setState({
        mod: mod.default ? mod.default : mod
      });
    });
  }
  render() {
    return this.state.mod ? this.props.children(this.state.mod) : null;
  }
}
