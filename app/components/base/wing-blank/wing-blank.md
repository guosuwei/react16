# WingBlank 左右留白

> PS: 布局组件

### 引用组件

```js
import WingBlank from "@components/base/wing-blank";
```

### 组件示例

<!--DemoStart-->

```js
class Demo extends Component {
  render() {
    return (
      <Page transition={true} infiniteLoader={false} ptr={false}>
      <WhiteSpace />
        <WingBlank size="lg">
          <Button type="primary">WingBlank 左右留白</Button>
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank>
          <Button type="primary">WingBlank 左右留白</Button>
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="sm">
          <Button type="primary">WingBlank 左右留白</Button>
        </WingBlank>
      </Page>
    );
  }
}
```

<!--End-->

## API

| 属性 | 说明                               | 类型   | 默认值 |
| ---- | ---------------------------------- | ------ | ------ |
| size | 左右留白的间距，可选`sm`,`md`,`lg` | string | `md`   |
