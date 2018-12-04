import React from "react";
import ReactDOM from "react-dom";
import prism from "prismjs";
import marked from "marked";
import Canvas from "./canvas";

export default class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
    };
    this.components = new Map();
  }
  componentWillMount() {
    this.renderMarkdown(this.getPagePathName(), this.getPageName());
    this.renderDOM();
  }
  componentDidUpdate() {
    this.renderDOM();
  }
  renderDOM() {
    for (const [id, component] of this.components) {
      this.div = document.getElementById(id);
      if (this.div instanceof HTMLElement) {
        ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.div));
        ReactDOM.render(component, this.div, () => {
          prism.highlightAll();
        });
      }
    }
    prism.highlightAll();
  }
  renderMarkdown(pathNames, fileName) {
    let pathName = pathNames.match(/\/(\S*)\//)[1];
    if (fileName == "mock" ) {
      return import (`../../../app/${fileName}/${fileName}.md`).then(
        module => {
          this.setState({
            markdown: module
          });
        }
      );
    } else if (fileName == "fetch") {
      return import (`../../../app/utils/${fileName}/${fileName}.md`).then(
        module => {
          this.setState({
            markdown: module
          });
        }
      );
    } else if (fileName == "common") {
      return import (`../../../app/utils/${fileName}/${fileName}.md`).then(
        module => {
          this.setState({
            markdown: module
          });
        }
      );
    } else if (pathName == "explain") {
      return import (`../../../app/explain/${pathName}/${fileName}/${fileName}.md`).then(
        module => {
          this.setState({
            markdown: module
          });
        }
      );
    } else if (pathName == "JsBridge") {
      return import (`../../../app/utils/native/${pathName}/${fileName}/${fileName}.md`).then(
        module => {
          this.setState({
            markdown: module
          });
        }
      );
    } else {
      return import (`../../../app/components/${pathName}/${fileName}/${fileName}.md`).then(
        module => {
          this.setState({
            markdown: module
          });
        }
      );
      
    }
  }
  getPagePathName() {
    const routes = window.location.hash.match(/(?:\/(.+))?(\/(.+)\?|\/(.+))/);
    if (routes) {
      return routes[0];
    }
    return "/explain/quick-start";
  }
  getPageName() {
    const routes = window.location.hash.match(/(?:\/(.+))?(\/(.+)\?|\/(.+))/);
    if (routes) {
      return routes[3] || routes[4];
    }
    return "quick-start";
  }
  render() {
    const {
      markdown
    } = this.state;

    let prefixCls = "w-docs";
    if (typeof markdown === "string") {
      
      this.components.clear();
      const html = marked(
        markdown.replace(
          /<!--\s?DemoStart\s?-->([^]+?)<!--\s?End\s?-->/g,
          (match, p1, offset) => {
            const id = offset.toString(36);
            this.components.set(
              id,
              React.createElement(
                Canvas,
                Object.assign({
                    name: this.getPageName()
                  },
                  this.props
                ),
                p1
              )
            );
            return `<div id=${id}></div>`;
          }
        )
      );
      return ( <div>
        <div className = {`${prefixCls}-content-warpper`} dangerouslySetInnerHTML = { { __html: html }}
        /> 
          <div className = {`${prefixCls}-docinfo`} > 北京融易通信息技术有限公司 <br/>
          <a href = "mailto:yang.ming@rytong.com" rel = "noopener noreferrer"> 反馈建议 </a> </div>
        </div>
      );
    } 
     else {
      return <span/> ;
    }
  }
}