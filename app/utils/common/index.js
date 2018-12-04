import React from "react";
import ReactDOM from "react-dom";
// 公共方法
import API from "@api/api";
import $native from "@utils/native";
import DateFormat from "./dateFormat";

// 组件引用
import Modal from "@components/base/modal";
import Loading from "@components/base/loading";
import Toast from "@components/base/toast";

// 全局调用名称为 Common.方法名
class Common extends React.Component {
  /**--------------------------------------------------------------------=====
   * OS类型
   * 1.模式、设备     Common.isOS();
   * 2.设备类型     Common.isOSType();
   **/
  // 1.模式、设备
  static isOS() {
    if (process.env.NODE_ENV == "development") {
      return true;
    } else if (process.env.NODE_ENV == "production") {
      return false;
    }
    // let appMode = $native.callClientForBank(API.NATIVE_CODE_GET_CLIENT_INFO, {
    //   success: (res) => {
    //     alert(JSON.stringify(res.appMode));
    //   }
    // })
    // if (process.env.NODE_ENV == "development") {
    //   if (appMode) {
    //     return true
    //   } else {
    //     return false
    //   }
    // } else if (process.env.NODE_ENV == "production") {
    //   return true
    // }
  }
  // 2.设备类型
  static isOSType() {
    let appMode = $native.callClientForBank(API.NATIVE_CODE_GET_CLIENT_INFO, {
      success: res => {
        alert(JSON.stringify(res.appMode));
      }
    });
    if (this.judgeEmpty(appMode)) {
      return appMode;
    } else {
      return "pc";
    }
  }
  /**--------------------------------------------------------------------=====
   * 公共URL跳转方法
   * 1.url     Common.setUrl(url)
   **/
  // 1.url
  static setUrl(url) {
    if (this.isOS()) {
      // url = url.split("/")[0] + ".html"
      window.location.href = url;
    } else {
      $native.callClientForUI(API.NATIVE_CODE_LOADNEWPAGE, {
        pageUrl: url
      });
      
    }
  }
  /**--------------------------------------------------------------------=====
   * 公共校验方法
   * 1.卡号               Common.cardNumber()
   * 2.密码、短信验证码     Common.PasswordSmsNumber()
   * 3.是否为空            Common.judgeEmpty()
   * 4.特殊字符            Common.inputRegExp()
   * 5.手机号              Common.phoneNumber()
   * 6.判断ios/android     Common.phoneType()
   * 7.金额输入             Common.moneyType()
   * 8.身份证不合法          Common.validateIDCard()
   **/
  // 1.卡号
  static cardNumber(n) {
    if (this.judgeEmpty(n) || n.length < 10 || n.length > 20) {
      return true;
    }
  }

  // 2.密码、短信验证码
  static PasswordSmsNumber(n) {
    if (this.judgeEmpty(n) || n.length < 6) {
      return true;
    }
  }

  // 3.是否为空
  static judgeEmpty(n) {
    if (n === "" || n === null || n === undefined) {
      return true;
    }
  }

  // 4.特殊字符
  static inputRegExp(n) {
    let pattern = new RegExp(
      "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_]"
    );
    if (pattern.test(n)) {
      return true;
    }
  }

  // 5.特殊字符
  static inputRegExpLoose(n) {
    let pattern = new RegExp("[`@#$^&*()=|{}\\[\\].<>/~@#（）——|{}【】]");
    if (pattern.test(n)) {
      return true;
    }
  }

  // 6.手机号
  static phoneNumber(n) {
    //  let pattern = new RegExp("/^1[3|4|5|7|8|9]\d{9}$/");
    if (!/^1\d{10}$/.test(n) || n.length < 11) {
      return true;
    }
  }

  // 7.金额输入
  static moneyType(n) {
    let reg = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
    if (n.split(".")[0].length > 12 || !reg.test(n)) {
      return true;
    }
  }

  // 8.身份证不合法
  static validateIDCard(code) {
    var city = {
      11: "北京",
      12: "天津",
      13: "河北",
      14: "山西",
      15: "内蒙古",
      21: "辽宁",
      22: "吉林",
      23: "黑龙江 ",
      31: "上海",
      32: "江苏",
      33: "浙江",
      34: "安徽",
      35: "福建",
      36: "江西",
      37: "山东",
      41: "河南",
      42: "湖北 ",
      43: "湖南",
      44: "广东",
      45: "广西",
      46: "海南",
      50: "重庆",
      51: "四川",
      52: "贵州",
      53: "云南",
      54: "西藏 ",
      61: "陕西",
      62: "甘肃",
      63: "青海",
      64: "宁夏",
      65: "新疆",
      71: "台湾",
      81: "香港",
      82: "澳门",
      91: "国外 "
    };
    var tip = "";
    var pass = true;

    if (
      !code ||
      !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(
        code
      )
    ) {
      tip = "身份证号格式错误";
      pass = false;
    } else if (!city[code.substr(0, 2)]) {
      tip = "地址编码错误";
      pass = false;
    } else {
      //18位身份证需要验证最后一位校验位
      if (code.length == 18) {
        code = code.split("");
        //∑(ai×Wi)(mod 11)
        //加权因子
        var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        //校验位
        var parity = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
        var sum = 0;
        var ai = 0;
        var wi = 0;
        for (var i = 0; i < 17; i++) {
          ai = code[i];
          wi = factor[i];
          sum += ai * wi;
        }
        var last = parity[sum % 11];
        if (parity[sum % 11] != code[17]) {
          tip = "校验位错误";
          pass = false;
        }
      }
    }
    // if(!pass){alert(tip)} ;
    return pass;
  }

  /*************************************************************************
   * 公共返回结果方法
   * 1.函数     Common.toast()
   * 2.类型     “amount”:金额键盘，“num”:纯数字键盘，“numAndChar”:数字字母组合键盘，“pwd”:密码键盘
   **/
  static returnResult(n) {
    switch (n) {
      // 成功结果
      case "00000000":
        return true;
        break;
    }
  }

  static messageResult(n) {
    switch (n) {
      // 验证短信错误
      case API.MESSAGE_ERROR:
        return true;
        break;
    }
  }

  static enciperResult(n) {
    switch (n) {
      // 验证密错误
      case API.ENCIPHER_ERROR:
        return true;
        break;
    }
  }

  /**--------------------------------------------------------------------=====
   * 公共格式化方法
   * 1.卡号              Common.setAccountNum()
   * 2.手机号             Common.setPhoneNumFour()
   * 3.金额              Common.setMoneyFormat()
   * 4.数字去除多余的0     Common.setNumberFormat()   例: '0001.12000'->'1.12'
   **/
  // 卡号 中间四位为星号
  static setAccountNum(cardNum, starsMore) {
    let cardnumnew = "";
    if (typeof cardNum !== "string") {
      cardNum = cardNum + "";
    }
    let cardnumstr = cardNum;
    let cardnumarr = cardNum.split("");

    cardnumstr = cardnumstr.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1 "); //四位数字一组，以空格分割
    cardnumnew = cardnumstr.replace(/^(.{10})(.{4})(.*)$/, "$1 **** $3");

    return cardnumnew;
  }

  // 卡号 四位空格
  static setAccountNumForSpace(cardNum) {
    if (typeof cardNum !== "string") {
      cardNum = cardNum + "";
    }
    let cardnumstr = cardNum;
    cardnumstr = cardnumstr.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1 "); //四位数字一组，以空格分割
    return cardnumstr;
  }

  // 卡号  前四位 中间四个星  后四位
  static setAccountNumTwo(cardNum, starsMore) {
    let cardnumnew = "";
    if (typeof cardNum !== "string") {
      cardNum = cardNum + "";
    }
    let cardnumstr = cardNum;
    let cardnumarr = cardNum.split("");
    let cardnumstr2 = cardnumarr
      .reverse()
      .slice(0, 4)
      .reverse()
      .join("");
    cardnumnew =
      cardnumstr.slice(0, 4) +
      (starsMore ? " **** **** " : " **** ") +
      cardnumstr2;
    return cardnumnew;
  }

  // 手机号
  static setPhoneNumFour(phoneNum) {
    let phoneNumnew = "";
    if (typeof phoneNum !== "string") {
      phoneNum = phoneNum + "";
    }
    let phonenumarr = phoneNum.split("");
    phoneNumnew = phonenumarr
      .reverse()
      .slice(0, 4)
      .reverse()
      .join("");
    return phoneNumnew;
  }

  // 通讯录手机号格式化
  static setPhoneNum(phoneNum) {
    let phoneNumnew = "";
    if (typeof phoneNum !== "string") {
      phoneNum = phoneNum + "";
    }
    let phonenumarr = phoneNum.replace(/-/g, "").replace("+86", "");

    return phonenumarr;
  }

  // 金额
  static setMoneyFormat(money) {
    let moneynew = "";
    if (typeof money !== "string") {
      money = money + "";
    }
    let moneyarr = money.split(".");

    let moneyarr0 = moneyarr[0].split("").reverse();
    let moneyarr0new = [];
    for (let i = 0; i < moneyarr0.length; i++) {
      let flag = i % 3;
      moneyarr0new.push(moneyarr0[i]);
      if (flag === 2) {
        moneyarr0new.push(",");
      }
    }
    let moneyarr0re = moneyarr0new.reverse();
    if (moneyarr0re[0] === ",") {
      moneyarr0re.splice(0, 1);
    }
    if (moneyarr.length === 1) {
      moneynew = moneyarr0re.join("") + ".00";
    } else {
      moneynew = moneyarr0re.join("") + "." + moneyarr[1];
    }

    return moneynew;
  }

  // 获取当前日期（上送需要的格式）
  static getCurrentDate(formatStr) {
    let currentDate = DateFormat.date(new Date().getTime(), formatStr);
    return currentDate;
  }

  // 获取格式化日期（上送需要的格式）
  static getDateFormat(date, formatStr) {
    let currentDate = DateFormat.date(date, formatStr);
    return currentDate;
  }

  // 数字去除多余的0
  static setNumberFormat(str, decimalNum) {
    let val = Number(str)
      .toFixed(Number(decimalNum) == NaN ? 2 : Number(decimalNum) || 2)
      .toString();
    return val;
  }

  /**--------------------------------------------------------------------=====
   * dialog对话框
   * 1.dialog弹框（类型判断H5+APP）   Common.dialog()
   * 2.隐藏H5弹框                 Common.hideDialog()
   **/

  /* Common.dialog()组件字段说明
     {
       title: "alert标题",
       msg: "alert内容",
       cancel_text: "取消",
       cancel: this.cancel,
       success_text: "确认",
       success: this.success
     }
  */

  // dialog弹框
  static dialog(n) {
    if (this.isOS) {
      $native.callClientForUI(API.NATIVE_CODE_SET_ALERT_INFO, n);
    } else {
      let setInfo = {
        title: n.title || "信息提示",
        msg: n.msg
      };
      let button = [];
      n.cancel_text
        ? button.push({
            text: n.cancel_text,
            onTap: n.cancel || this.closeModal
          })
        : null;
      n.success_text
        ? button.push({
            text: n.success_text,
            onTap: n.success || this.closeModal
          })
        : null;
      Modal.alert(setInfo, button);
    }
  }
  // 隐藏H5弹框
  static hideDialog() {
    if (this.dialog) {
      document.body.removeChild(this.dialog);
      this.dialog = null;
    }
  }
  /**--------------------------------------------------------------------=====
   * loading对话框
   * 1.loading（类型判断H5+APP）   Common.loading()
   **/

  // loading 开启
  static loading(n, t) {
    if (this.isOS) {
      $native.callClientForBank(API.NATIVE_CODE_SET_WAIT_PANEL, {
        Status: n
      });
    } else {
      if (n == "1") {
        Loading.message(t || "加载中...");
      } else {
        Loading.hide();
      }
    }
  }
  /**--------------------------------------------------------------------=====
   * 模态框关闭
   * 1.关闭modal
   * 2.关闭picker
   **/
  // 1.关闭modal
  static closeModal() {
    let containerId = "divModal";
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
    document
      .getElementById(containerId)
      .parentNode.removeChild(document.getElementById(containerId));
  }
  // 2.关闭picker
  static closePicker() {
    let containerId = "mbankPicker";
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
    document
      .getElementById(containerId)
      .parentNode.removeChild(document.getElementById(containerId));
  }

  /**--------------------------------------------------------------------=====
   * 页面刷公共方法
   * 1.页面刷新 Common.bindPageRefresh.bind(this)
   * 2.页面去除所有输入框的焦点 Common.inputBlur()
   **/
  // 页面刷新
  static bindPageRefresh() {
    $("input").on("blur", function() {
      setTimeout(function() {
        window.scrollTo(0, 0);
      }, 500);
    });
    $("textarea").on("blur", function() {
      setTimeout(function() {
        window.scrollTo(0, 0);
      }, 500);
    });
  }

  // 页面去除所有输入框的焦点
  static inputBlur() {
    $("input").blur();
  }
  /**--------------------------------------------------------------------=====
   * session 公共方法
   * 1.添加 Common.addSessionData(key, dataStr)
   * 2.接收 Common.getSessionData(key)
   * 3.清除 Common.removeSessionData(n)
   * 4.清除并返回值 Common.removeSessionDataReturn(key)
   **/
  // 1.添加
  static addSessionData(key, dataStr) {
    if (typeof dataStr !== "object") {
      sessionStorage.setItem(key, dataStr);
    }
  }

  // 2.接收
  static getSessionData(key) {
    return sessionStorage.getItem(key);
  }

  // 3.清除
  static removeSessionData(n) {
    sessionStorage.removeItem(n);
  }

  // 4.清除并返回
  static removeSessionDataReturn(key) {
    return sessionStorage.removeItem(key);
  }
  /**--------------------------------------------------------------------=====
   * URL参数获取
   * 1.获取参数     Common.getUrl(n)
   **/
  static getUrl(n) {
    var reg = new RegExp("(^|#)" + n + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return decodeURI(r[2]);
    return null; //返回参数值
  }
  /**--------------------------------------------------------------------=====
   * log 控制台打印
   * 1.打印     Common.log()
   **/
  static log(n) {
    if (this.isOS()) {
      console.log(n);
    }
  }
}

export default Common;
