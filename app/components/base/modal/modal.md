# Modal 模态框

> PS: 模态框。弹窗提示用户，获得用户反馈。弹窗提示用户， 标题简明，alert 多于二个按钮建议用 actionsheet，希望用户点击的按钮一般放置在左侧。

## 引用组件

```js
import Modal from "@components/base/modal";
```

## 组件示例

### 尺寸

<!--DemoStart-->

```js
class Demo extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      modalVisible1: false,
      modalVisible2: false
    };
  }

  modalHandle = () => {
    let modalVisible = !this.state.modalVisible;
    this.setState({ modalVisible });
  };

  modalHandle1 = () => {
    let modalVisible1 = !this.state.modalVisible1;
    this.setState({ modalVisible1 });
  };

  modalHandle2 = () => {
    let modalVisible2 = !this.state.modalVisible2;
    this.setState({ modalVisible2 });
  };
  alertHandle = () => {
    let setInfo = {
      title: "习近平妙喻科技强国",
      msg:
        "科技兴则民族兴，科技强则国家强。”党的十八大以来，习近平总书记曾多次发表重要讲话，阐述了他对科技与强国关系的深刻洞察，其中很多生动形象的比喻让人印象深刻。央视网特进行梳理，邀您一同学习领悟总书记小比喻背后蕴含的大方略。"
    };
    let button = [{ text: "确认", onTap: this.confirm }, { text: "取消" }];
    Modal.dialog(setInfo, button);
  };
  confirm() {
    alert("确认调用函数");
  }
  actionsheetHandle = () => {
    let setInfo = {
      items: [
        "第一项",
        "第二项",
        "第三项",
        "第四项",
        "第五项",
        "第六项",
        "取消"
      ],
      titleText: "标题",
      cancelIndex: 6
    };
    let callback = function(key) {
      console.log(key);
    };
    Modal.actionsheet(setInfo, callback);
  };
  render() {
    return (
      <Page transition={true} infiniteLoader={false} ptr={false}>
        <WingBlank>
          <WhiteSpace />
          <div>
            <p>popup 形式</p>
            <Button type="ghost-dot" onTap={this.modalHandle}>
              点我开启
            </Button>
            <Modal visible={this.state.modalVisible}>
              <Button type="primary" onTap={this.modalHandle}>
                点我关闭
              </Button>
            </Modal>
            <WhiteSpace />
            <p>alert形式</p>
            <Button type="warning" onTap={this.modalHandle1}>
              点我开启
            </Button>
            <Modal visible={this.state.modalVisible1} type="alert">
              <Button type="warning" onTap={this.modalHandle1}>
                点我关闭
              </Button>
            </Modal>
            <WhiteSpace />
            <p>全屏 形式</p>
            <Button type="ghost-dot" onTap={this.modalHandle2}>
              点我开启
            </Button>
            <Modal visible={this.state.modalVisible2} fullScreen>
              <Button type="primary" onTap={this.modalHandle2}>
                点我关闭
              </Button>
            </Modal>
            <WhiteSpace />
            <p>Dialog 形式</p>
            <Button type="warning" onTap={this.alertHandle}>
              点我开启
            </Button>
            <WhiteSpace />
            <p>ActionSheet 形式</p>
            <Button type="ghost-dot" onTap={this.actionsheetHandle}>
              点我开启
            </Button>
          </div>
        </WingBlank>
      </Page>
    );
  }
}
```

<!--End-->

## 组件 API

### Modal

> PS:动作面板函数

| 属性       | 类型     | 说明                           | 默认值 |
| ---------- | -------- | ------------------------------ | ------ |
| type       | string   | 模态框类型（popup, alert）     | popup  |
| fullScreen | boolean  | 是否全屏，alert 模式强制不全屏 | false  |
| onClose    | function | 模态框关闭时调用函数           | -      |
| visible    | boolean  | 是否可见                       | false  |

### Modal.alert

> PS 弹框函数

```javascript
/**
 *content为弹框内容，必需
 *items为弹框的动作按钮数组，非必须，Array类型，每项格式为
 *	{
 *		text: '按钮名称', //string or jsx
 *		onTap: func, //function 按钮点击的回调函数
 *	}
 *当items元素内容大于2个，按钮竖直排列
 */
Modal.alert(content, items);
```

### Modal.actionsheeta

> PS:动作面板函数

```javascript
/**
 *options动作面板配置，必须。
 *items为弹框的动作按钮数组，非必须，Array类型，每项格式为
 *	{
 *		items: [...args], //数组内容可为string or jsx, 表示动作面板每个动作条显示，必需
 *		titleText: 'title', //动作面板标题
 *		cancelIndex: number, //number, 取消按钮在items中的index，非必需
 *	}
 *callback动作面板点击回调，入参为点击的动作条在items中的index
 */
Modal.actionsheet(options, callback);
```
