# KeyBoard 键盘

> PS: 用于 H5 调取客户端键盘交互。

## 文件引入

```js
// 桥接文件
import $native from "@utils/native";
```

## KeyBoard

### JsBridge 接口定义

> PS: 接口定义存放在公共 API 文件中,本项目中文件目录 /app/constants/api.js。

```js
//JsBridge 桥接接口
const native = {
  NATIVE_CODE_SHOWKEYBOARD: "showKeyBoard" //客户端键盘
};
```

### 示例代码

```js
import Input from "@components/base/input";

export default class Demo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      // value值
      inputValue: "",
      // 模拟光标值
      cursorSizeNum: "",
      // 键盘ID
      KeyBoardId: ""
    };
  }
  showKeyBoard = val => {
    let that = this;
    // 关闭模拟输入光标
    this.closeKeyBoardCursor(val);
    // 清空默认数据
    this.setState({
      inputValue: "",
      cursorSizeNum: ""
    });
    // 展示模拟输入光标
    $("#" + val).show();
    $native.callClientForBank(API.NATIVE_CODE_SHOWKEYBOARD, {
      // 键盘类型
      type: "idcard",
      // 输入长度控制
      maxLength: "18",
      // 关闭键盘回调函数，并传入关闭的光标的Id
      cancel: that.cancelKeyBoard.bind(this, val),
      // 获取键盘数据信息
      success: res => {
        let jsons = JSON.parse(res);
        // 数据信息更新至State
        this.setState({
          inputValue: jsons.text,
          cursorSizeNum: jsons.pswLength
        });
        // 重复回调（注:这个方法就等于反复执行本键盘函数来获取持续输入信息）
        showKeyBoard();
      }
    });
  };

  // 关闭模拟输入光标
  closeKeyBoardCursor = val => {
    let KeyBoardId = this.state.KeyBoardId;
    if (KeyBoardId) {
      // 关闭相应KeyBoardId模拟输入光标
      $("#" + KeyBoardId).hide();
      this.setState({
        keyKbHide: val
      });
    } else {
      this.setState({
        keyKbHide: val
      });
    }
  };

  // 关闭键盘后隐藏模拟光标
  cancelKeyBoard = val => {
    $("#" + val).hide();
  };

  //获取身份证号
  setInputValue(val) {
    let that = this;
    that.setState({
      inputValue: val
    });
  }
  render() {
    return (
      <div>
        <Input.Group header="调用示例">
          <Input
            id="keyBoardSample"
            type="idcard"
            placeholder="请输入开户证件号"
            maxLength={18}
            labelNumber={6}
            cursorSize={this.state.cursorSizeNum}
            editable={false}
            onClick={this.showKeyBoard.bind(this, "keyBoardSample")}
            value={this.state.inputValue}
            onChange={this.setInputValue.bind(this)}
            rightExtra="true"
          >
            示例
          </Input>
        </Input.Group>
      </div>
    );
  }
}
```

### API

### 键盘调用参数

| 属性      | 类型       | 说明                                                                                   | 默认值 |
| --------- | ---------- | -------------------------------------------------------------------------------------- | ------ |
| type      | `string`   | 金额键盘`amount`,纯数字键盘`num`,交易密码键盘`tradePsw`,证件键盘`idcard`,密码键盘`pwd` | -      |
| cancel    | `function` | 关键键盘回调函数                                                                       | -      |
| success   | `function` | 成功回调函数                                                                           | -      |
| maxLength | `string`   | 输入长度                                                                               | -      |
| hint      | `string`   | 标题（交易密码键盘专有）                                                               | -      |
| money     | `string`   | 金额（交易密码键盘专有）                                                               | -      |
| cardNum   | `string`   | 卡号（交易密码键盘专有）                                                               | -      |

### 键盘返回参数

| 属性      | 类型     | 说明       | 默认值 |
| --------- | -------- | ---------- | ------ |
| text      | `string` | 占位符     | -      |
| pswText   | `string` | 返回密码值 | -      |
| pswLength | `string` | 密码长度   | -      |
