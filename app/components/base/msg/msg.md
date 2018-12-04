# Msg 结果信息

> PS: 在页面中组织图标、文字等内容，向用户反馈操作结果。

## 引用组件

```js
import Msg from "@components/base/msg";
```

## 组件示例

### 尺寸

<!--DemoStart-->

```js
class Demo extends Component {
  confirm() {
    alert("提交成功！");
  }
  return() {
    alert("返回页面！");
  }
  render() {
    return (
      <Page transition={true} infiniteLoader={false} ptr={false}>
        <WingBlank size="lg">
          <Msg
            type="success"
            title="提交成功"
            message="我们已经收到你的反馈,感谢您的支持！"
            buttons={[
              {
                type: "primary",
                label: "确定",
                onClick: this.confirm
              },
              {
                type: "ghost-dot",
                label: "返回",
                onClick: this.return
              }
            ]}
          />
        </WingBlank>
      </Page>
    );
  }
}
```

<!--End-->

## 组件 API

| 属性    | 类型     | 说明                                                                     | 默认值    |
| ------- | -------- | ------------------------------------------------------------------------ | --------- |
| type    | `string` | 图标类型 `success`,`error`,`tips`,`warning`                              | `success` |
| title   | `string` | 标题                                                                     | `-`       |
| message | `string` | message 文案                                                             | `-`       |
| buttons | `array`  | `type`按钮类型、`label`按钮文字`onClick`按钮回调函数,至少需要 label 属性 | `-`       |
