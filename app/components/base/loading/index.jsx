import React from "react";
import Notification from "rc-notification";
import "./style/index.less";
import Icon from "../icon";

let instance = null;

// 默认类型
const loading = (content) => {
  const prefixCls = "ryt-loading";
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
      <div className={`ryt-loading-wrap`}>
        <Icon name="loading" size="lg" />
        {content ? <div>{content}</div> : null}
      </div>
    ),
    duration:100000000000
  });
};
export default {
  message: (content) => {
    loading(content);
  },
  hide: () => {
    !!instance && instance.destroy();
    instance = null;
  }
};
