import 'babel-polyfill'
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import $script from "scriptjs";
import "amfe-flexible";

// Business function
import ReceiptDetail from "./index.jsx";

// import registerServiceWorker from "./registerServiceWorker";
// Brower Type
import type from "@utils/native/mobile-brower-type";

let dependencies = [];

//promise polyfill
if (!window.Promise) {
  dependencies.push("es6-promise.auto.min.js");
}
//fastclick solve 300ms in ios
if (type === "ios") {
  dependencies.push("fastclick.1.0.6.min.js");
}


const runApp = function() {
  setTimeout(() => {
    ReactDOM.render(
      <AppContainer>
        <ReceiptDetail/>
      </AppContainer>,
      document.getElementById("app")
    );
  }, 50);
};

if (dependencies.length > 0) {
  if (process.env.NODE_ENV == "development") {
    $script.path("../app/static/polyfill/");
  } else if (process.env.NODE_ENV == "production") {
    $script.path("../static/polyfill/");
  }
  $script(dependencies, function() {
    if (window.Fastclick) {
      window.FastClick.attach(document.body);
    }
    if (window.IntlPolyfill) {
      window.Intl = IntlPolyfill;
    }
    runApp();
  });
} else {
  runApp();
}
//Service Worker是在后台运行的一个线程，可以用来处理离线缓存、消息推送、后台自动更新等任务。
// registerServiceWorker();
