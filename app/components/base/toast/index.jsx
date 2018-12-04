import React from "react";
import Notification from "rc-notification";
import "./style/index.less";
import Icon from "../icon";

let instance = null;
// 默认秒数
const DEFAULT_DURATION = 3;

// 默认类型
const iconType = {
  loading: "loading",
  success: "success",
  warning: "warning",
  tips: "tips",
  error: "error"
};

const notice = (content, type, duration = DEFAULT_DURATION, callback) => {
  const prefixCls = "ryt-toast";
  if (typeof duration === "function") {
    callback = duration;
    duration = DEFAULT_DURATION;
  }
  Notification.newInstance(
    {
      prefixCls,
      style: {
        top: 0,
        left: 0
      }
    },
    n => (instance = n)
  );
  instance.notice({
    content: (
      <div className={`ryt-toast-wrap`}>
        {!!iconType[type] && <Icon name={`${type}-white`} size="xl" />}
        <div>{content}</div>
      </div>
    ),
    duration,

    onClose: () => {
      instance.destroy();
      instance = null;
      callback && callback();
    }
  });
};

const topNotice = (content, type, duration = DEFAULT_DURATION, callback) => {
  // function close(key) {
  //   instance.destroy(key);
  // }
  // const key = Date.now();
  const prefixCls = "ryt-toptips";
  if (typeof duration === "function") {
    callback = duration;
    duration = DEFAULT_DURATION;
  }
  Notification.newInstance(
    {
      prefixCls,
      style: {
        top: 0,
        left: 0
      }
    },
    n => (instance = n)
  );
  instance.notice({
    content: (
      // <div className={`ryt-toptips-${type}`} onClick={close.bind(key)}>
      <div className={`ryt-toptips-${type}`}>
        {!!iconType[type] && <Icon name={`${type}-white`} size="xs" />}
        <div>{content}</div>
      </div>
    ),
    duration,
    closable: true,
    onClose: () => {
      instance.destroy();
      instance = null;
      callback && callback();
    }
  });
};

export default {
  // Toast
  loading: (content, duration = null, callback) => {
    if (typeof duration === "function") {
      callback = duration;
      duration = null;
    }
    notice(content, "loading", duration, callback);
  },
  success: (content, duration, callback) => {
    notice(content, "success", duration, callback);
  },
  error: (content, duration, callback) => {
    notice(content, "error", duration, callback);
  },
  tips: (content, duration, callback) => {
    notice(content, "tips", duration, callback);
  },
  info: (content, duration, callback) => {
    notice(content, "info", duration, callback);
  },
  // TopTips
  topTips: (content, duration, callback) => {
    topNotice(content, "tips", duration, callback);
  },
  topSuccess: (content, duration, callback) => {
    topNotice(content, "success", duration, callback);
  },
  topError: (content, duration, callback) => {
    topNotice(content, "error", duration, callback);
  },
  topWarning: (content, duration, callback) => {
    topNotice(content, "warning", duration, callback);
  },
  hide: () => {
    !!instance && instance.destroy();
    instance = null;
    console.log("hide");
  }
};
