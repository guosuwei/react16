import React from "react";
//懒加载
import Bundle from "./lazyload";
//菜单配置
import menuList from "../menu";
//页面配置
//公共说明
import QuickStart from "bundle-loader?lazy&name=quick-start!../pages/explain/quick-start";
import Changelog from "bundle-loader?lazy&name=changelog!../pages/explain/changelog";
/**************** 公共方法 ******************/
import Fetch from "bundle-loader?lazy&name=fetch!../pages/explain/fetch";
import Mock from "bundle-loader?lazy&name=mock!../pages/explain/mock";
import Common from "bundle-loader?lazy&name=common!../pages/explain/common";
/**************** 布局组件 ******************/
import Flex from "bundle-loader?lazy&name=flex!../pages/base/flex";
import WingBlank from "bundle-loader?lazy&name=wing-blank!../pages/base/wing-blank";
import WhiteSpace from "bundle-loader?lazy&name=white-space!../pages/base/white-space";
/**************** 基础组件 ******************/
import Article from "bundle-loader?lazy&name=article!../pages/base/article";
import Badge from "bundle-loader?lazy&name=badge!../pages/base/badge";
import Button from "bundle-loader?lazy&name=button!../pages/base/button";
import Checkbox from "bundle-loader?lazy&name=radio!../pages/base/checkbox";
import Cells from "bundle-loader?lazy&name=cell!../pages/base/cell";
import Input from "bundle-loader?lazy&name=input!../pages/base/input";
import Grid from "bundle-loader?lazy&name=grid!../pages/base/grid";
import InfiniteLoader from "bundle-loader?lazy&name=infiniteloader!../pages/base/infiniteloader";
import Loadmore from "bundle-loader?lazy&name=loadmore!../pages/base/loadmore";
import Loading from "bundle-loader?lazy&name=loading!../pages/base/loading";
import Msg from "bundle-loader?lazy&name=msg!../pages/base/msg";
import Modal from "bundle-loader?lazy&name=modal!../pages/base/modal";
import Page from "bundle-loader?lazy&name=page!../pages/base/page";
import Ptr from "bundle-loader?lazy&name=ptr!../pages/base/ptr";
import Radio from "bundle-loader?lazy&name=radio!../pages/base/radio";
import Searchbar from "bundle-loader?lazy&name=searchbar!../pages/base/searchbar";
import Switch from "bundle-loader?lazy&name=switch!../pages/base/switch";
import Toast from "bundle-loader?lazy&name=toast!../pages/base/toast";
import Tabs from "bundle-loader?lazy&name=tabs!../pages/base/tabs";
import TabBar from "bundle-loader?lazy&name=tab-bar!../pages/base/tab-bar";
/**************** 业务组件 ******************/

/**************** JsBridge 桥接 ******************/
import NativeNavBar from "bundle-loader?lazy&name=NativeNavBar!../pages/JsBridge/NativeNavBar";
import NativeAlert from "bundle-loader?lazy&name=NativeAlert!../pages/JsBridge/NativeAlert";
import NativeLoading from "bundle-loader?lazy&name=NativeLoading!../pages/JsBridge/NativeLoading";
import NativeWebview from "bundle-loader?lazy&name=NativeWebview!../pages/JsBridge/NativeWebview";
import NativeKeyBoard from "bundle-loader?lazy&name=NativeKeyBoard!../pages/JsBridge/NativeKeyBoard";
import NativeURL from "bundle-loader?lazy&name=NativeURL!../pages/JsBridge/NativeURL";
import NativeStoreData from "bundle-loader?lazy&name=NativeStoreData!../pages/JsBridge/NativeStoreData";
import NativeRequest from "bundle-loader?lazy&name=NativeRequest!../pages/JsBridge/NativeRequest";
import GetClientInfo from "bundle-loader?lazy&name=GetClientInfo!../pages/JsBridge/GetClientInfo";
import GetLocation from "bundle-loader?lazy&name=GetLocation!../pages/JsBridge/GetLocation";
import GetAddressBook from "bundle-loader?lazy&name=GetAddressBook!../pages/JsBridge/GetAddressBook";
import GetRandom from "bundle-loader?lazy&name=GetRandom!../pages/JsBridge/GetRandom";
import ScanQRCode from "bundle-loader?lazy&name=ScanQRCode!../pages/JsBridge/ScanQRCode";
import Fingerprint from "bundle-loader?lazy&name=Fingerprint!../pages/JsBridge/Fingerprint";

const getLang = key => {
  const map = menuList;
  return key.split(".").reduce((a, b) => {
    const parent = map[a];
    if (b) {
      return (parent || {})[b];
    }
    return parent;
  });
};
const asyncComponent = comp => props => {
  return (
    <Bundle load={comp}>
      {About => {
        return (
          <About
            locale={{
              show: getLang("markdown.show"),
              hide: getLang("markdown.hide")
            }}
            {...props}
          />
        );
      }}
    </Bundle>
  );
};

const routes = {
  documents: [
    {
      path: "/explain/quick-start",
      exact: true,
      component: asyncComponent(QuickStart)
    },
    { path: "/explain/changelog", component: asyncComponent(Changelog) }
  ],
  components: {
    Layout: [
      { path: "/base/flex", component: asyncComponent(Flex) },
      { path: "/base/wing-blank", component: asyncComponent(WingBlank) },
      { path: "/base/white-space", component: asyncComponent(WhiteSpace) }
    ],
    Common: [
      { path: "/explain/fetch", component: asyncComponent(Fetch) },
      { path: "/explain/mock", component: asyncComponent(Mock) },
      { path: "/explain/common", component: asyncComponent(Common) },
    ],
    Basic: [
      { path: "/base/article", component: asyncComponent(Article) },
      { path: "/base/badge", component: asyncComponent(Badge) },
      { path: "/base/button", component: asyncComponent(Button) },
      { path: "/base/checkbox", component: asyncComponent(Checkbox) },
      { path: "/base/cell", component: asyncComponent(Cells) },
      { path: "/base/input", component: asyncComponent(Input) },
      { path: "/base/grid", component: asyncComponent(Grid) },
      {
        path: "/base/infiniteloader",
        component: asyncComponent(InfiniteLoader)
      },
      { path: "/base/loadmore", component: asyncComponent(Loadmore) },
      { path: "/base/loading", component: asyncComponent(Loading) },
      { path: "/base/modal", component: asyncComponent(Modal) },
      { path: "/base/msg", component: asyncComponent(Msg) },
      { path: "/base/page", component: asyncComponent(Page) },
      { path: "/base/ptr", component: asyncComponent(Ptr) },
      { path: "/base/radio", component: asyncComponent(Radio) },
      { path: "/base/searchbar", component: asyncComponent(Searchbar) },
      { path: "/base/switch", component: asyncComponent(Switch) },
      { path: "/base/toast", component: asyncComponent(Toast) },
      { path: "/base/tabs", component: asyncComponent(Tabs) },
      { path: "/base/tab-bar", component: asyncComponent(TabBar) }
    ],
    Business: [
     
    ],
    JsBridge: [
      { path: "/JsBridge/NativeNavBar", component: asyncComponent(NativeNavBar) },
      { path: "/JsBridge/NativeAlert", component: asyncComponent(NativeAlert) },
      { path: "/JsBridge/NativeLoading", component: asyncComponent(NativeLoading) },
      { path: "/JsBridge/NativeWebview", component: asyncComponent(NativeWebview) },
      { path: "/JsBridge/NativeKeyBoard", component: asyncComponent(NativeKeyBoard) },
      { path: "/JsBridge/NativeURL", component: asyncComponent(NativeURL) },
      { path: "/JsBridge/NativeStoreData", component: asyncComponent(NativeStoreData) },
      { path: "/JsBridge/NativeRequest", component: asyncComponent(NativeRequest) },
      { path: "/JsBridge/GetClientInfo", component: asyncComponent(GetClientInfo) },
      { path: "/JsBridge/GetLocation", component: asyncComponent(GetLocation) },
      { path: "/JsBridge/GetAddressBook", component: asyncComponent(GetAddressBook) },
      { path: "/JsBridge/GetRandom", component: asyncComponent(GetRandom) },
      { path: "/JsBridge/ScanQRCode", component: asyncComponent(ScanQRCode) },
      { path: "/JsBridge/Fingerprint", component: asyncComponent(Fingerprint) },
    ]
  },
  redirect: [
    //重定向到 quick start 页面
    { path: "", redirect: "/explain/quick-start" }
  ]
};
export { routes, getLang };
