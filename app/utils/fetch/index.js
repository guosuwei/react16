// 引入node命令行输出颜色
import color from "colors-cli/safe";
// 引入必要资源
import React from "react";
import API from "@api/api";
import {type} from "os";
import Common from "@utils/common";

/**--------------------------------------------------------------------=====
 * 声明全局fetch  
 **/

const fetch = window.fetch;

/**--------------------------------------------------------------------=====
 * 连接模式设置--开始  
 * 优先级为 1.mock  2.remote 3.连接客户端,mock与remote均为false时，为连接客户端模式
 * 1.mock 模拟模式 
 * 2.remote 直连模式
 * 3.客户端模式 （mock与remote均为false时，为连接客户端）
 **/

const mock = true; // 1.mock 模拟模式

const remote = false; // 2.remote 直连模式

const remoteUrl = "http://192.168.1.1:8088/"; // 2.remote 直连模式（地址）

/**--------------------------------------------------------------------=====
 * 连接模式设置--开始  
 * 优先级为 1.mock  2.remote 3.连接客户端,mock与remote均为false时，为连接客户端模式
 * 1.mock 模拟模式 
 * 2.remote 直连模式
 * 3.客户端模式 （mock与remote均为false时，为连接客户端）
 **/

const status = function (response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  // throw new fetchError(API.AJAX_NET_ERROR, response.statusText);
};
const json = function (response) {
  return response.json();
};
const jsonForClient = function (respone) {
  return JSON.parse(respone);
};
const successOrNotWithHandle = function (transId, success, failed) {
  return function (json) {
    const res = json;
    // let returnCode = res.rspHead.returnCode;
    // 超时处理
    // let returnMsg = res.rspHead.returnMsg;

    //如果是登录交易报此类错误跳转至登录页面
    // if (
    //   returnCode === API.SESSION_TIMEOUT ||
    //   returnCode === API.NOT_LOGIN ||
    //   returnCode === API.MESSAGE_KEY_INVALID
    // ) {
    //   let flag = API.WITHOUTLOGIN.indexOf(transId);
    //   //包含
    //   if (flag > -1) {
    //   } else {
    //     //不包含
    //     if (returnCode !== API.NOT_LOGIN) {
    //       returnMsg = "登录超时，请重新登录";
    //     }
    //     //退出
    //     $native.callClientForBank(API.NATIVE_CODE_LOGOUT, {});

    //     let alertDict = {
    //       title: "信息提示",
    //       msg: returnMsg,
    //       cancel_text: "取消",
    //       cancel: () => {
    //         $native.callClientForBank(API.NATIVE_CODE_TO_GOBACK, {});
    //       },
    //       success_text: "重新登录",
    //       success: () => {
    //         $native.callClientForBank(API.NATIVE_CODE_TO_LOGIN, {});
    //       }
    //     };
    //     // Common.showAppDialogAlert(alertDict);
    //     return;
    //   }
    // }

    if (!res.errmsg && !res.jsonError && !res._RejMessage) {
      if (success && typeof success === "function") {
        success(res);
      } else {
        return res;
      }
    } else {
      let error = res.errmsg ?
        res.errmsg :
        res.jsonError ?
        res.jsonError :
        res._RejMessage ?
        res._RejMessage :
        "error";
      error = Array.isArray(error) ? error : [error];
      const errMsg = error
        .map(err => (err._exceptionMessage ? err._exceptionMessage : err))
        .join(",");
      let errorType = API.AJAX_BUSINESS_ERROR;
      if (
        res.errtype === API.AJAX_ERROR_FORCE_OUT ||
        error[0]._exceptionMessageCode === API.AJAX_ERROR_LOG_TIMEOUT ||
        error[0]._exceptionMessageCode === API.AJAX_ERROR_FORCE_OUT
      ) {
        errorType = API.AJAX_LOGIN_TIMEOUT_ERROR;
      }
      if (
        res.errtype === API.AJAX_SYS_MAINTAIN ||
        error[0]._exceptionMessageCode === API.AJAX_SYS_MAINTAIN
      ) {
        errorType = API.AJAX_SYS_MAINTAIN;
      }
      if (
        res.errtype === API.AJAX_SMS_WRONG ||
        res.errtype === API.AJAX_SMS_NOT_GET ||
        res.errtype === API.AJAX_SMS_FORMAT_ERROR ||
        res.errtype === API.AJAX_SMS_ERROR ||
        res.errtype === API.AJAX_SMS_TIME_OUT ||
        error[0]._exceptionMessageCode === API.AJAX_SMS_WRONG ||
        error[0]._exceptionMessageCode === API.AJAX_SMS_NOT_GET ||
        error[0]._exceptionMessageCode === API.AJAX_SMS_ERROR ||
        error[0]._exceptionMessageCode === API.AJAX_SMS_TIME_OUT ||
        error[0]._exceptionMessageCode === API.AJAX_SMS_FORMAT_ERROR
      ) {
        errorType = res.errtype || error[0]._exceptionMessageCode;
      }
      if (failed && typeof failed === "function") {
        failed(fetchError(errorType, errMsg));
      } else {
        throw new fetchError(errorType, errMsg);
      }
    }
  };
};

/**--------------------------------------------------------------------=====
 * mock 模拟模式  
 * 1.reqHead    (报文头)
 * 2.data       (报文体)
 * 3.success    (成功回调)
 * 4.failed     (失败回调)
 **/
const mockFetch = function (transId, {
  reqHead,
  data,
  success,
  failed
}) {
  var timeoutAlert = setTimeout(function () {}, 1000);
  Common.log("☺☺☺☺☺☺☺☺☺☺☺☺ Mock数据 ☺☺☺☺☺☺☺☺☺☺☺☺");
  const url = `${transId}`;
  const body = {
    reqHead,
    data
  };
  return fetch("/mock/" + url, {
      // 报文模式设置
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body),
      credentials: "include"
    })
    .then(status)
    .then(json)
    .then(function (res) {
      clearTimeout(timeoutAlert);
      return res;
    })
    .then(successOrNotWithHandle(transId, success, failed));
};

/**--------------------------------------------------------------------=====
 * remote 直连模式 
 * 1.reqHead    (报文头)
 * 2.data       (报文体)
 * 3.success    (成功回调)
 * 4.failed     (失败回调)
 **/
const remoteFetch = function (transId, {
  reqHead,
  data,
  success,
  failed
}) {
  Common.log("☺☺☺☺☺☺☺☺☺☺☺☺ 直连数据 ☺☺☺☺☺☺☺☺☺☺☺☺");
  const url = `${transId}`;
  const reqBody = data;
  const body = {
    reqHead,
    reqBody
  };
  console.log(body);
  return fetch(remoteUrl + url, {
      // 报文模式设置
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then(status)
    .then(json)
    .then(function (res) {
      return res;
    })
    .then(successOrNotWithHandle(transId, success, failed));
};

/**--------------------------------------------------------------------=====
 * 默认方式 
 * 1.reqHead     (报文头)
 * 2.data        (报文体)
 * 3.success     (成功回调)
 * 4.failed      (失败回调)
 * 5.loadingFlag (加载等待)
 * 6.encrypted   (是否加密（1加密、0不加密）)
 **/
const $fetch = function (
  transId, {
    reqHead = {},
    data = {},
    success,
    failed
  } = {},
  loadingFlag = true,
  encrypted = true
) {
  const params = {
    reqHead,
    data,
    success,
    failed,
    loadingFlag,
    encrypted
  };
  return mock ? mockFetch(transId, params) : remote ? remoteFetch(transId, params) : null;
};

export default $fetch;