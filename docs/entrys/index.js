import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import marked from "marked";
import prism from "prismjs";
import transform from "babel-standalone";
import Markdown from "../libs/markdown/index.js";
import Canvas from "../libs/markdown/canvas.js";

//路由配置
import Router from "../Router/Router";
//样式引入
import "../style/base.less";
import "../style/index.less";
render(
  <AppContainer>
    <Router />
  </AppContainer>,
  document.getElementById("app")
);
if (module.hot) {
  module.hot.accept("../Router/Router", () => {
    const Router = require("../Router/Router").default;
    render(
      <AppContainer>
        <Router />
      </AppContainer>,
      document.getElementById("app")
    );
  });
}
