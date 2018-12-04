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
  loadingHandle = () => {
    Loading.message("加载中...");
    setTimeout(function() {
      Loading.hide();
    }, 3000);
  };
  render() {
    return (
      <Page transition={true} infiniteLoader={false} ptr={false}>
        <WingBlank>
          <WhiteSpace />
          <Button onTap={this.loadingHandle} type="default-dot">
            loading,自动关闭
          </Button>
        </WingBlank>
      </Page>
    );
  }
}
```

<!--End-->

## 组件 API

| 属性    | 类型              | 说明     | 默认值 |
| ------- | ----------------- | -------- | ------ |
| content | `string` or `jsx` | 文字内容 | -      |

### Loading.hide()

> PS: 销毁、关闭 Loading 组件。
