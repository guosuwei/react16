import isMobile from "./mobile-check";

const native = function () {
  const ua = navigator.userAgent || navigator.vendor || this.opera;
  const os = (function () {
    if (isMobile()) {
      if (ua.indexOf("Android") > -1 || ua.indexOf("Linux") > -1)
        return "android";
      else if (!!ua.match(/(i[^;]+\;(U;)? CPU.+Mac OS X)/)) return "ios";
    }
    return "unknown";
  })();

  const iosBridge = (function () {
    let x5 = (window.x5 = {
      commandQueue: [],
      commandQueueFlushing: false,
      resources: {
        base: !0
      }
    });
    x5.callbackId = 0;
    x5.callbacks = {};
    x5.callbackStatus = {
      NO_RESULT: 0,
      OK: 1,
      CLASS_NOT_FOUND_EXCEPTION: 2,
      ILLEGAL_ACCESS_EXCEPTION: 3,
      INSTANTIATION_EXCEPTION: 4,
      MALFORMED_URL_EXCEPTION: 5,
      IO_EXCEPTION: 6,
      INVALID_ACTION: 7,
      JSON_EXCEPTION: 8,
      ERROR: 9
    };

    x5.createBridge = function () {
      var bridge = document.createElement("iframe");
      bridge.setAttribute("style", "display:none;");
      bridge.setAttribute("height", "0px");
      bridge.setAttribute("width", "0px");
      bridge.setAttribute("frameborder", "0");
      document.documentElement.appendChild(bridge);
      return bridge;
    };

    x5.exec = function (service, action, options) {
      var command = {
        className: service,
        methodName: action,
        options: {}
      };

      for (var i = 0; i < options.length; ++i) {
        var arg = options[i];

        if (arg == undefined || arg == null) {
          continue;
        } else if (typeof arg == "object") {
          command.options = arg;
        }
      }

      x5.commandQueue.push(JSON.stringify(command));
      if (x5.commandQueue.length == 1 && !x5.commandQueueFlushing) {
        if (!x5.bridge) {
          x5.bridge = x5.createBridge();
        }
        x5.bridge.src = "mszx:" + service + ":" + action;
      }
    };

    // 浏览器调用接口
    x5.getAndClearQueuedCommands = function () {
      var json = JSON.stringify(x5.commandQueue);
      x5.commandQueue = [];
      return json;
    };

    return x5;
  })();

  const makeCallback = function (params) {
    for (var key in params) {
      const item = params[key];
      if (typeof item == "function") {
        const rnd = Math.random()
          .toString(36)
          .substr(2);
        const callbackName = `callback_${rnd}`;
        window[callbackName] = (function (fn, callbackName) {
          return function (res) {
            fn(res);
            window[callbackName] = null;
          };
        })(item, callbackName);
        params[key] = callbackName;
      } else if (typeof item == "object") {
        params[key] = makeCallback(item);
      }
    }
    return params;
  };

  const callClient = function (action, param, className) {
    param = makeCallback(param);

    if (os == "ios") {
      var data = {
        1: action,
        2: param
      };
      iosBridge.exec("demoid", "executeJSCode_JSDict_", [data]);
    } else if (os == "android") {
      window[className][action](JSON.stringify(param));
    }
  };

  return {
    callClientForUI(action, param) {
      callClient(action, param, "InteractJsForUI");
    },
    callClientForComm(action, param) {
      callClient(action, param, "InteractJsForComm");
    },
    callClientForBank(action, param) {
      callClient(action, param, "InteractJsForBank");
    }
  };
};

export default native();