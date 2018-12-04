# Tabs 标签页

> PS: 用于让用户在不同的视图中进行切换。

## 组件引用

```js
import Tabs from "@components/base/tabs";
```

## 组件示例

<!--DemoStart-->

```js
class Demo extends Component {
  callback(key) {
    alert(key);
  }
  render() {
    return (
      <Page transition={true} infiniteLoader={false} ptr={false}>
        <Tabs position="bottom" onChange={this.callback}>
          <Tabs.Panel tab="第一项" key="1">
            第一项内容
          </Tabs.Panel>
          <Tabs.Panel tab="第二项" key="2">
            第二项内容
          </Tabs.Panel>
          <Tabs.Panel tab="第三项" key="3">
            第三项内容
          </Tabs.Panel>
          <Tabs.Panel tab="第四项" key="4">
            第四项内容
          </Tabs.Panel>
        </Tabs>
        <br />
        <Tabs defaultActiveKey="3">
          <Tabs.Panel tab="第一项" key="1">
            第一项内容
          </Tabs.Panel>
          <Tabs.Panel tab="禁用" key="2" disabled>
            第二项内容
          </Tabs.Panel>
          <Tabs.Panel tab="第三项" key="3">
            第三项内容
          </Tabs.Panel>
        </Tabs>
      </Page>
    );
  }
}
```

<!--End-->

## 组件 API

### Tabs

| props            | 类型       | 说明                                           | 默认值 |
| ---------------- | ---------- | ---------------------------------------------- | ------ |
| position         | `string`   | `top` 、`bottom` nav 显示位置                  | `top`  |
| onChange         | `function` | change 事件回调函数，入参为切换的 panel 的 key | -      |
| activeKey        | `string`   | 选中的 panel 的 key                            | -      |
| defaultActiveKey | `string`   | 初始化选中的 panel 的 key                      | -      |

### InkBar.Panel

| props    | 类型              | 说明                   | 默认值  |
| -------- | ----------------- | ---------------------- | ------- |
| key      | `string`          | 当前 panel 唯一 key 值 | -       |
| tab      | `string` or `jsx` | 标签名                 | -       |
| disabled | `boolean`         | 是否禁用此 panel       | `false` |
