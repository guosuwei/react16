# PullToRefresh 下拉刷新

> PS: 拉取容器使用户能够拉取容器并刷新其内容。(效果请用移动端查看)

## 组件引用

```js
import PullToRefresh from "@components/base/ptr";
```

## 组件示例

<!--DemoStart-->

```js
class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  }

  render() {
    return (
      <Page transition={true} infiniteLoader={false} ptr={false}>
        <div
          style={{
            height: "300px",
            background: "#fff"
          }}
        >
          <PullToRefresh
            onRefresh={resolve => {
              //mock add item after 1s and then resolve
              setTimeout(() => {
                this.setState(
                  {
                    items: this.state.items.concat([
                      this.state.items.length + 1
                    ])
                  },
                  () => resolve()
                );
              }, 1000);
            }}
          >
            <Cell.Group header="List with link">
              {this.state.items.map((item, i) => {
                return <Cell title={item} key={i} icon="arrow" />;
              })}
            </Cell.Group>
          </PullToRefresh>
        </div>
        <br />

        <div
          style={{
            height: "300px",
            background: "#fff"
          }}
        >
          <PullToRefresh
            loaderDefaultIcon={progress => {
              let style = {
                transform: `rotate(-${progress * 5}deg)`
              };
              return (
                <div style={{ flex: 1, padding: "5px" }}>
                  <img
                    src="http://www.rytong.com/upload/images/2017/chenggonganli/nonghang.jpg"
                    width="40px"
                    style={style}
                  />
                </div>
              );
            }}
            loaderLoadingIcon={
              <div
                style={{
                  flex: 1,
                  padding: "5px"
                }}
              >
                <img
                  src="http://www.rytong.com/upload/images/2017/chenggonganli/nonghang.jpg"
                  width="40px"
                  style={{
                    animation: "0.4s spin infinite linear"
                  }}
                />
              </div>
            }
            onRefresh={resolve => {
              //mock add item after 1s and then resolve
              setTimeout(() => {
                this.setState(
                  {
                    items: this.state.items.concat([
                      this.state.items.length + 1
                    ])
                  },
                  () => resolve()
                );
              }, 1000);
            }}
          >
            <Cell.Group header="Moment Loader Example">
              {this.state.items.map((item, i) => {
                return <Cell title={item} key={i} icon="arrow" />;
              })}
            </Cell.Group>
          </PullToRefresh>
        </div>
      </Page>
    );
  }
}
```

<!--End-->

## 组件 API

| 属性              | 类型     | 说明                                           | 默认值  |
| ----------------- | -------- | ---------------------------------------------- | ------- |
| disable           | `bool`   | 禁用加载程序                                   | `false` |
| height            | `string` | 容器的高度，使用字符串`10px`，默认为`100％`    | `100%`  |
| loaderDefaultIcon | `func`   | 元素（图标）为默认加载器，功能需要通过下拉进程 | `true`  |
| loaderHeight      | `number` | 加载的高度                                     | `100`   |
| loaderLoadingIcon | `any`    | 用于加载加载程序的元素（图标）                 | `true`  |
| onRefresh         | `func`   | 刷新请求时回调，传递解析函数                   | `true`  |
