# WhiteSpace 上下留白

> PS: 布局组件

### 引用组件

```js
import WhiteSpace from "@components/base/white-space";
```

### 组件示例

<!--DemoStart-->

```js
class Demo extends Component {
  render() {
    return (
      <Page transition={true} infiniteLoader={false} ptr={false}>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary">WhiteSpace 上下留白</Button>
          <WhiteSpace size="xs" />
          <Button type="primary">WhiteSpace 上下留白</Button>
          <WhiteSpace size="sm" />
          <Button type="primary">WhiteSpace 上下留白</Button>
          <WhiteSpace size="md" />
          <Button type="primary">WhiteSpace 上下留白</Button>
          <WhiteSpace size="lg" />
          <Button type="primary">WhiteSpace 上下留白</Button>
          <WhiteSpace size="xl" />
          <Button type="primary">WhiteSpace 上下留白</Button>
          <WhiteSpace size="xxl" />
          <Button type="primary">WhiteSpace 上下留白</Button>
        </WingBlank>
      </Page>
    );
  }
}
```

<!--End-->

## API

| 属性 | 说明                                                  | 类型   | 默认值 |
| ---- | ----------------------------------------------------- | ------ | ------ |
| size | 上下留白间距，可选`xs`, `sm`, `md`, `lg`, `xl`, `xxl` | string | `md`   |
