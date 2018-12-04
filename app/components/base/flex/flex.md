# Flex 布局

> PS: 布局时使用,弹性布局

## 组件引用

```js
import Flex from "@components/base/flex";
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
          <div>
            <p>基本</p>
            <Flex>
              <Button type="primary">示例文本</Button>
              <Button type="primary">示例文本</Button>
            </Flex>
            <p>纵向</p>
            <Flex direction="column">
              <Button type="warning">示例文本</Button>
              <Button type="warning">示例文本</Button>
            </Flex>
            <p>比例大小</p>
            <Flex>
              <Flex.Item size={2}>
                <Button type="primary">示例文本</Button>
              </Flex.Item>
              <Flex.Item>
                <Button type="primary">示例文本</Button>
              </Flex.Item>
            </Flex>
            <p>某个item固定大小</p>
            <Flex>
              <Flex.Item style={{ width: 70 }}>
                <Button type="warning">示例文本</Button>
              </Flex.Item>
              <Flex.Item>
                <Button type="warning">示例文本</Button>
              </Flex.Item>
              <Flex.Item>
                <Button type="warning">示例文本</Button>
              </Flex.Item>
            </Flex>
            <p>9个small button, 默认不换行</p>
            <Flex>
              <Button type="primary" size="small">
                示例文本
              </Button>
              <Button type="primary" size="small">
                示例文本
              </Button>
              <Button type="primary" size="small">
                示例文本
              </Button>
              <Button type="primary" size="small">
                示例文本
              </Button>
              <Button type="primary" size="small">
                示例文本
              </Button>
              <Button type="primary" size="small">
                示例文本
              </Button>
              <Button type="primary" size="small">
                示例文本
              </Button>
              <Button type="primary" size="small">
                示例文本
              </Button>
              <Button type="primary" size="small">
                示例文本
              </Button>
            </Flex>
            <p>9个small button, 换行</p>
            <Flex wrap="wrap">
              <Button type="warning" size="small">
                示例文本
              </Button>
              <Button type="warning" size="small">
                示例文本
              </Button>
              <Button type="warning" size="small">
                示例文本
              </Button>
              <Button type="warning" size="small">
                示例文本
              </Button>
              <Button type="warning" size="small">
                示例文本
              </Button>
              <Button type="warning" size="small">
                示例文本
              </Button>
              <Button type="warning" size="small">
                示例文本
              </Button>
              <Button type="warning" size="small">
                示例文本
              </Button>
              <Button type="warning" size="small">
                示例文本
              </Button>
            </Flex>
            <p>start: 左对齐</p>
            <Flex>
              <Button type="primary" size="small">
                示例文本
              </Button>
              <Button type="primary" size="small">
                示例文本
              </Button>
              <Button type="primary" size="small">
                示例文本
              </Button>
            </Flex>
            <p>end: 右对齐</p>
            <Flex justify="end">
              <Button type="warning" size="small">
                示例文本
              </Button>
              <Button type="warning" size="small">
                示例文本
              </Button>
              <Button type="warning" size="small">
                示例文本
              </Button>
            </Flex>
            <p>center: 居中</p>
            <Flex justify="center">
              <Button type="primary" size="small">
                示例文本
              </Button>
              <Button type="primary" size="small">
                示例文本
              </Button>
              <Button type="primary" size="small">
                示例文本
              </Button>
            </Flex>
            <p>between: 两端对齐</p>
            <Flex justify="between">
              <Button type="warning" size="small">
                示例文本
              </Button>
              <Button type="warning" size="small">
                示例文本
              </Button>
              <Button type="warning" size="small">
                示例文本
              </Button>
            </Flex>
            <p>around: 间隔对齐</p>
            <Flex justify="around">
              <Button type="primary" size="small">
                示例文本
              </Button>
              <Button type="primary" size="small">
                示例文本
              </Button>
              <Button type="primary" size="small">
                示例文本
              </Button>
            </Flex>
            <p>start(默认): 交叉轴起点对齐</p>
            <Flex>
              <Button type="warning">示例文本</Button>
              <Button type="warning" size="small">
                示例文本
              </Button>
            </Flex>
            <p>end: 交叉轴终点对齐</p>
            <Flex align="end">
              <Button type="primary">示例文本</Button>
              <Button type="primary" size="small">
                示例文本
              </Button>
            </Flex>
            <p>center: 交叉轴中点对齐</p>
            <Flex align="center">
              <Button type="warning">示例文本</Button>
              <Button type="warning" size="small">
                示例文本
              </Button>
            </Flex>
            <p>baseline: 第一行文字基线</p>
            <Flex align="baseline">
              <Button type="primary">示例文本</Button>
              <Button type="primary" size="small">
                示例文本
              </Button>
            </Flex>
            <p>stretch: 拉伸对齐</p>
            <Flex align="stretch">
              <Button type="warning">示例文本</Button>
              <Button type="warning" size="small">
                示例文本
              </Button>
            </Flex>
            <p>9个small button, 默认不换行</p>
            <Flex>
              <Button type="primary" size="small">
                示例文本
              </Button>
              <Button type="primary" size="small">
                示例文本
              </Button>
              <Button type="primary" size="small">
                示例文本
              </Button>
              <Button type="primary" size="small">
                示例文本
              </Button>
              <Button type="primary" size="small">
                示例文本
              </Button>
              <Button type="primary" size="small">
                示例文本
              </Button>
              <Button type="primary" size="small">
                示例文本
              </Button>
              <Button type="primary" size="small">
                示例文本
              </Button>
              <Button type="primary" size="small">
                示例文本
              </Button>
            </Flex>
            <p>9个small button, 换行</p>
            <Flex wrap="wrap">
              <Button type="warning" size="small">
                示例文本
              </Button>
              <Button type="warning" size="small">
                示例文本
              </Button>
              <Button type="warning" size="small">
                示例文本
              </Button>
              <Button type="warning" size="small">
                示例文本
              </Button>
              <Button type="warning" size="small">
                示例文本
              </Button>
              <Button type="warning" size="small">
                示例文本
              </Button>
              <Button type="warning" size="small">
                示例文本
              </Button>
              <Button type="warning" size="small">
                示例文本
              </Button>
              <Button type="warning" size="small">
                示例文本
              </Button>
            </Flex>
          </div>
          <WhiteSpace />
        </WingBlank>
      </Page>
    );
  }
}
```

<!--End-->

## 组件 API

### Flex

| 属性      | 类型     | 说明                                                                                                                                       | 默认值   |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| direction | `string` | `row`（水平方向，起点在左端), `row-reverse`（水平方向，起点在右端), `column`（垂直方向，起点在上沿), column-reverse（垂直方向，起点在下沿) | `row`    |
| wrap      | `string` | `nowrap`（不换行）, `wrap`（换行，第一行在上方）, `wrap-reverse`（换行，第一行在下方）                                                     | `nowrap` |
| justify   | `string` | 主轴对齐方式：`start`, `end`, `center`, `between`, `around`                                                                                | `start`  |
| align     | `string` | 交叉轴对齐：`start`, `end`, `baseline`, `center`, `stretch`                                                                                | `start`  |

### Flex.Item

| 属性 | 类型     | 说明                      | 默认值 |
| ---- | -------- | ------------------------- | ------ |
| size | `number` | Flex 布局下元素的比例大小 | `1`    |
