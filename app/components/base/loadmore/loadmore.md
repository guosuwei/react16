# Loadmore 加载更多

> PS: 加载更多

## 组件引用

```js
import LoadMore from "@components/base/Loadmore";
```

## 组件示例

<!--DemoStart-->

```js
class Demo extends Component {
  render() {
    return (
      <Page transition={true} infiniteLoader={false} ptr={false}>
        <LoadMore loading>加载中...</LoadMore>
        <LoadMore showLine showDot />
        <LoadMore showLine>无数据</LoadMore>
      </Page>
    );
  }
}
```

<!--End-->

## 组件 API

| 属性     | 类型   | 说明         | 默认值 |
| -------- | ------ | ------------ | ------ |
| loading  | `bool` | 加载中       | `-`    |
| showDot  | `bool` | 在中心显示点 | `-`    |
| showLine | `bool` | 显示边线     | `-`    |
