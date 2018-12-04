# Infiniteloader 滚动加载

> PS: UI 元素的小状态描述符。

## 引用组件

```js
import InfiniteLoader from "@components/base/Infiniteloader";
```

## 组件示例

### 尺寸

<!--DemoStart-->

```js
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [...Array(20).keys()]
    };
  }

  render() {
    return (
      <Page transition={true} infiniteLoader={false} ptr={false}>
        <InfiniteLoader
          onLoadMore={(resolve, finish) => {
            //mock request
            setTimeout(() => {
              if (this.state.items.length > 22) {
                finish();
              } else {
                this.setState(
                  {
                    items: this.state.items.concat([this.state.items.length])
                  },
                  () => resolve()
                );
              }
            }, 1000);
          }}
        >
          <Cell.Group header="滚动加载">
            {this.state.items.map((item, i) => {
              console.log(item, i);
              return (
                <Cell
                  title={item}
                  key={i}
                  description="默认箭头"
                  icon="arrow"
                />
              );
            })}
          </Cell.Group>
        </InfiniteLoader>
      </Page>
    );
  }
}
```

<!--End-->

## 组件 API

| 属性              | 类型     | 说明                                           | 默认值 |
| ----------------- | -------- | ---------------------------------------------- | ------ |
| disable           | `bool`   | 禁用加载程序                                   | `-`    |
| height            | `string` | 容器的高度，使用字符串'10px'                   | `100%` |
| loaderDefaultIcon | `object` | 当没有更多内容时，用于默认加载器的元素（图标） | `-`    |
| loaderLoadingIcon | `object` | 用于加载加载程序的元素（图标）                 | `-`    |
| onLoadMore        | `func`   | 当请求更多内容时回调，传递解析函数并完成功能   | `-`    |
| onScroll          | `func`   | 回滚时用户滚动内容，传递事件                   | `-`    |
| onScrollEnd       | `func`   | 当用户没有滚动 150ms 时回调                    | `-`    |
| triggerPercent    | `number` | number 75 scrollTop 触发加载的百分比           | `-`    |
