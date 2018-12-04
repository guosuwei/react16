# Badge 徽标

> PS: 用于提醒用户有更新或者提示用户（图标右上角小红点，数字或文字）

## 组件引用

```js
import Badge from "@components/base/badge";
```

## 组件示例

<!--DemoStart-->

```js
class Demo extends Component {
  render() {
    return (
      <Page transition={true} infiniteLoader={false} ptr={false}>
        <WingBlank>
          <WhiteSpace />
          <WhiteSpace />
          <span>圆点</span>
          <WhiteSpace />
          <WhiteSpace />
          <Badge>
            <div style={{ width: 60, height: 60, backgroundColor: "#ccc" }} />
          </Badge>
          <WhiteSpace />
          <WhiteSpace />
          <WhiteSpace />
          <WhiteSpace />
          <span>数字</span>
          <WhiteSpace />
          <WhiteSpace />
          <Badge type="text" text={10}>
            <div style={{ width: 60, height: 60, backgroundColor: "#ccc" }} />
          </Badge>
          <WhiteSpace />
          <WhiteSpace />
          <WhiteSpace />
          <WhiteSpace />
          <span>文字</span>
          <WhiteSpace />
          <WhiteSpace />
          <Badge type="text" text="small" small>
            <div style={{ width: 60, height: 60, backgroundColor: "#ccc" }} />
          </Badge>
        </WingBlank>
      </Page>
    );
  }
}
```

<!--End-->


## 组件 API

| 属性   | 类型             | 说明                    | 默认值 |
| ------ | ---------------- | ----------------------- | ------ |
| type   | string           | 徽标类型（dot or text） | dot    |
| text   | string or number | 徽标展示文字            | -      |
| small  | boolean          | 小号徽标                | false  |
| maxNum | number           | 如果是数字的最大值      | 99     |
| show   | boolean          | 是否显示                | true   |
