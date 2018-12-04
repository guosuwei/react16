# Button 按钮

> PS: 点击后会触发一个操作。

## 组件引用

```js
import Button from "@components/base/button";
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
          <span>类型</span>
          <WhiteSpace />
          <div>
            <Button>默认</Button>
            <Button type="default-dot">默认-虚线</Button>
            <Button disabled>默认 disabled</Button>
            <Button type="ghost">幽灵</Button>
            <Button type="ghost-dot">幽灵-虚线</Button>
            <Button type="ghost" disabled>
              幽灵 disabled
            </Button>
            <Button type="link">文字链接</Button>
            <Button type="primary">主要</Button>
            <Button type="primary" disabled>
              主要 disabled
            </Button>
            <Button type="warning">警告</Button>
            <Button type="warning" disabled>
              警告 disabled
            </Button>
          </div>
          <WhiteSpace />
          <span>尺寸</span>
          <WhiteSpace />
          <div>
            <Button type="primary" inline>
              默认按钮
            </Button>
            <Button type="warning" inline size="small">
              小按钮
            </Button>
          </div>
          <WhiteSpace />
          <span>图标</span>
          <WhiteSpace />
          <div>
            <Button.Group>
              <Button type="default-dot" icon="search">
                搜索
              </Button>
              <Button type="default-dot" icon="loading">
                搜索中...
              </Button>
              <Button type="default-dot" icon="arrow">
                加载中...
              </Button>
            </Button.Group>
          </div>
          <WhiteSpace />
          <span>inline</span>
          <WhiteSpace />
          <div>
            <Button inline type="primary">
              primary inline
            </Button>
            <Button inline size="small" type="primary">
              primary inline small
            </Button>
            <Button inline type="warning">
              warn inline
            </Button>
            <Button inline size="small" type="warning">
              warn inline small
            </Button>
          </div>
          <div>
            <WhiteSpace />
            <span>横向分组</span>
            <WhiteSpace />
            <Button.Group horizon>
              <Button type="warning">按钮1</Button>
              <Button type="warning">按钮2</Button>
              <Button type="warning">按钮3</Button>
              <Button type="warning">按钮4</Button>
            </Button.Group>
            <WhiteSpace />
            <span>纵向分组</span>
            <WhiteSpace />
            <Button.Group>
              <Button type="primary">按钮1</Button>
              <Button type="ghost">按钮2</Button>
            </Button.Group>
            <WhiteSpace />
          </div>
        </WingBlank>
      </Page>
    );
  }
}
```

<!--End-->

## 组件 API

### Button

| 属性     | 类型       | 说明                                                                             | 默认值    |
| -------- | ---------- | -------------------------------------------------------------------------------- | --------- |
| type     | `string`   | 按钮类型(`default`,`default-dot`,`ghost`,`ghost-dot`,`link`,`primary`,`warning`) | `default` |
| size     | `string`   | 按钮大小(`small`,`default`)                                                      | `default` |
| disabled | `boolean`  | 是否禁用                                                                         | `false`   |
| inline   | `boolean`  | 是否是行内按钮，宽度由按钮文字长度决定                                           | `false`   |
| icon     | `string`   | 图标样式                                                                         | -         |
| onTap    | `function` | 按钮点击函数                                                                     | -         |

### Button.Group

| 属性    | 类型      | 说明         | 默认值  |
| ------- | --------- | ------------ | ------- |
| horizon | `boolean` | 是否水平展开 | `false` |
