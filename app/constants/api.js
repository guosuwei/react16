// 接口返回码
const errorcode = {
  SESSION_TIMEOUT: 'CCOE0009',
  MESSAGE_KEY_INVALID: 'CCOE0149',
  NOT_LOGIN: 'CCOE0150',
  MESSAGE_ERROR: 'CCOE0154',
  ENCIPHER_ERROR: 'CCOE0155',
};

//回单交易接口
const receipt = {
  // 回单列表
  API_QUERY_RECEIPT_LIST: 'ReceiptList',
  // 回单详情
  API_QUERY_RECEIPT_DETAIL: 'ReceiptDetail',
};

//JsBridge 桥接接口
const native = {
  NATIVE_CODE_SET_PRINT_LIST: 'printList', //打印接口
  NATIVE_CODE_SET_ALERT_INFO: 'setAlertInfo', //客户端弹框
  NATIVE_CODE_UPDATE_TITLE: 'setNavBar', //客户端标题栏
  NATIVE_CODE_SET_TITLE_VISIBLE: 'ShowNavgationBar', //显示隐藏客户端标题
  NATIVE_CODE_SHOW_WEBVIEW_BACKBUTTON: 'showWebviewBackButton', //设置客户端导航栏默认返回按钮
  NATIVE_CODE_SHOW_CLOSEBUTTON: 'showCloseButton', //设置客户端导航栏关闭按钮
  NATIVE_CODE_SHOW_BACK_BUTTON: 'showBackButton', //返回首页
  NATIVE_CODE_SET_WAIT_PANEL: 'setWaitPanel', //等待层显示隐藏
  NATIVE_CODE_IS_SUPPORT_NFC: 'isSupportNFC', //是否支持NFC
  NATIVE_CODE_TONFC: 'toNFC', // NFC
  NATIVE_CODE_IS_SUPPORT_FINGERPRINT: 'isSupportFingerprintVerify', //是否支持指纹
  NATIVE_CODE_TO_FINGERPRINT_VERIFY: 'toFingerprintVerify', //调指纹验证接口功能
  NATIVE_CODE_ENCRYPTRQBODY: 'encryptRqbody', //aes加密
  NATIVE_CODE_DECRYPTRQBODY: 'decryptRqbody', //aes解密
  NATIVE_CODE_RSAENCRYPTDATA: 'rsaEncryptData', //ras加密
  NATIVE_CODE_SHOWKEYBOARD: 'showKeyBoard', //调用客户端键盘
  NATIVE_CODE_TO_LOGIN: 'toLogin', //登录
  NATIVE_CODE_TO_GOBACK: 'goBack', //返回
  NATIVE_CODE_CLOSE: 'close', //关闭
  NATIVE_CODE_SELECTPIC: 'selectPic', //关闭
  NATIVE_CODE_SCAN_QRCODE: 'scanQRCode', //扫描二维码
  NATIVE_CODE_SHAREWEB: 'shareWeb', //分享
  NATIVE_CODE_GET_CLIENT_INFO: 'getClientInfo', //获取客户端信息
  NATIVE_CODE_GET_LOCATION: 'getLocation', //获取位置信息
  NATIVE_CODE_SET_NAVGATIONBAR: 'setNavgationBar', //设置导航栏
  NATIVE_CODE_WEBVIEWBACK: 'webviewBack', //后退
  NATIVE_CODE_REFRESHWEBVIEW: 'refreshWebview', //刷新
  NATIVE_CODE_GET_ADDRESSBOOK: 'getAddressBook', //打开通讯录
  NATIVE_CODE_OPEN_PDF: 'openPDF'
};

//session命名存放
const session = {
  SESSION_ACCOUNT_DATA: 'mbankAccountList', // 账户信息
};

//输出
export default Object.assign({}, errorcode, native, session, receipt);