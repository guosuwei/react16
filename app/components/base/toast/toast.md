# Toast 轻提示

> PS: 一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。

## 组件引用

```js
import Toast from "@components/base/toast";
```

## 组件示例

<!--DemoStart-->

```js
class Demo extends Component {
  //Toast 提示
  infoHandle = () => {
    Toast.info("操作成功!");
  };
  successHandle = () => {
    Toast.success("操作成功!", function() {
      alert("成功后回调");
    });
  };
  errorHandle = () => {
    Toast.error("操作失败!");
  };

  tipsHandle = () => {
    Toast.tips("请输入必要信息!");
  };

  loadingHandle = () => {
    Toast.loading("正在读取请稍后...", 3, function() {
      Toast.info("读取成功!");
    });
  };

  loadingHandle1 = () => {
    Toast.loading("正在读取请稍后...");
    setTimeout(function() {
      Toast.hide();
    }, 3000);
  };
  //Toast 顶提示
  tipsHandleTop = () => {
    Toast.topTips("普通信息提示", function() {
      alert("成功后回调");
    });
  };
  successHandleTop = () => {
    Toast.topSuccess("成功信息提示", function() {
      alert("成功后回调");
    });
  };
  errorHandleTop = () => {
    Toast.topError("错误信息提示", function() {
      alert("成功后回调");
    });
  };
  warningHandleTop = () => {
    Toast.topWarning("警告信息提示", function() {
      alert("成功后回调");
    });
  };
  loadingHandleTop = () => {
    Toast.topSuccess("操作成功主动关闭");
    setTimeout(function() {
      Toast.hide();
    }, 3000);
  };
  render() {
    return (
      <Page transition={true} infiniteLoader={false} ptr={false}>
        <WingBlank>
          <WhiteSpace />
          <span>Toast 居中</span>
          <WhiteSpace />
          <Button onTap={this.infoHandle} type="ghost-dot">
            info
          </Button>
          <WhiteSpace />
          <Button onTap={this.successHandle} type="ghost">
            success
          </Button>
          <WhiteSpace />
          <Button onTap={this.errorHandle} type="primary">
            error
          </Button>
          <WhiteSpace />
          <Button onTap={this.tipsHandle.bind()} type="warning">
            tips
          </Button>
          <WhiteSpace />
          <Button onTap={this.loadingHandle} type="default-dot">
            loading,自动关闭
          </Button>
          <WhiteSpace />
          <Button onTap={this.loadingHandle1} type="default-dot">
            loading,主动关闭
          </Button>
          <WhiteSpace />
          <span>Toast 居顶</span>
          <WhiteSpace />
          <Button onTap={this.tipsHandleTop} type="ghost">
            tips
          </Button>
          <WhiteSpace />
          <Button onTap={this.successHandleTop} type="primary">
            success
          </Button>
          <WhiteSpace />
          <Button onTap={this.errorHandleTop} type="warning">
            error
          </Button>
          <WhiteSpace />
          <Button onTap={this.warningHandleTop} type="warning">
            warning
          </Button>
          <WhiteSpace />
          <Button onTap={this.loadingHandleTop} type="ghost-dot">
            主动关闭
          </Button>
        </WingBlank>
      </Page>
    );
  }
}
```

<!--End-->

## 组件 API

> PS: 顶提示显示时没有全屏遮罩。

| 属性     | 类型              | 说明               | 默认值 |
| -------- | ----------------- | ------------------ | ------ |
| content  | `string` or `jsx` | 提示内容           | -      |
| duration | `number`          | 延迟关闭时间       | `3`    |
| onClose  | `function`        | 提示关闭时调用函数 | -      |

### Toast.loading(content, duration, onClose)

loading 时 duration 默认为 null，需手动关闭

### Toast.hide()

销毁
