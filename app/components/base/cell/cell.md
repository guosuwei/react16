# Cell 列表

> PS: 用于列表形态展示

## 引用组件

```js
import Cell from "@components/base/cell";
```

## 组件示例

<!--DemoStart-->

```js
class Demo extends Component {
  render() {
    return (
      <Page transition={true} infiniteLoader={false} ptr={false}>
        <Cell.Group header="列表-默认">
          <Cell title="标题" />
          <Cell title="标题" description="描述" />
          <Cell title="标题" subTitle="子标题" />
          <Cell
            title="标题"
            subTitle="子标题"
            description="描述"
            subDescription="子描述"
          />
        </Cell.Group>
        <Cell.Group header="列表-图片">
          <Cell
            title="标题"
            description="描述"
            icon="arrow"
            thumb="http://firefly.cmbc.com.cn/public/imgs/z4MLLFPkZ1/brown.jpg"
          />
          <Cell
            title="标题"
            description={
              <span>
                <img
                  src="http://firefly.cmbc.com.cn/public/imgs/z4MLLFPkZ1/brown.jpg"
                  style={{ width: 32, height: 32, verticalAlign: "middle" }}
                />
              </span>
            }
            icon="arrow"
          />
        </Cell.Group>
        <Cell.Group header="列表-图标">
          <Cell title="图标" description="默认箭头" icon="arrow" />
          <Cell title="图标" description="向上箭头" icon="arrow-up" />
          <Cell title="图标" description="向下箭头" icon="arrow-dn" />
          <Cell title="图标" description="空图标占位" icon />
        </Cell.Group>
        <Cell.Group header="列表-函数">
          <Cell
            title="标题"
            description="描述"
            icon="arrow"
            onTap={() => {
              alert("tap!");
            }}
          />
        </Cell.Group>
        <Cell.Group header="列表-按钮">
          <Cell
            title="标题"
            description={
              <Button type="ghost" size="small">
                按钮
              </Button>
            }
          />
        </Cell.Group>
      </Page>
    );
  }
}
```

<!--End-->

## 组件 API

### Cell

| 属性           | 类型       | 说明                                | 默认值  |
| -------------- | ---------- | ----------------------------------- | ------- |
| title          | `string`   | 列表标题                            | -       |
| subTitle       | `string`   | 列表子标题                          | -       |
| description    | `string`   | 列表描述                            | -       |
| subDescription | `string`   | 列表子描述                          | -       |
| icon           | `string`   | `empty`为空图标占位                 | `empty` |
| thumb          | `string`   | 列表缩略图，`string` 默认为图片 url | -       |
| thumbWidth     | `number`   | 列表缩略图宽                        | -       |
| thumbHeight    | `number`   | 列表缩略图高                        | -       |
| onTap          | `function` | 列表点击事件                        | -       |

### Cell.Group

| 属性   | 类型     | 说明       | 默认值 |
| ------ | -------- | ---------- | ------ |
| header | `string` | 列表组标题 | -      |
