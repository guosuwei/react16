# Switch 滑动开关

> PS: 在两个互斥对象进行选择，eg：选择开或关

## 引用组件

```js
import Switch from "@components/base/switch";
```

## 组件示例

<!--DemoStart-->

```js
class Demo extends Component {
  render() {
    return (
      <Page transition={true} infiniteLoader={false} ptr={false}>
        <Cell.Group>
          <Switch.SwitchList title="禁用关" switchProps={{ disabled: true }} />
          <Switch.SwitchList
            title="禁用开"
            switchProps={{ disabled: true, value: true }}
          />
          <Switch.SwitchList
            title="默认关"
            switchProps={{ defaultValue: false }}
          />
          <Switch.SwitchList
            title="默认开"
            switchProps={{
              defaultValue: true,
              onChange: arg => {
                console.log(arg);
              }
            }}
          />
        </Cell.Group>
      </Page>
    );
  }
}
```

<!--End-->

## 组件 API

### Switch

| props        | 类型     | 说明                                     | 默认值 |
| ------------ | -------- | ---------------------------------------- | ------ |
| value        | boolean  | 是否选中                                 | -      |
| defaultValue | boolean  | 初始是否选中                             | -      |
| disabled     | boolean  | 是否禁用                                 | false  |
| onChange     | function | change 事件回调函数，入参为(value,event) | -      |
| name         | string   | 同 html 中 name                          | -      |

### Switch.SwitchList

> PS: 其他属性同 Cell

| props       | 类型   | 说明                      | 默认值 |
| ----------- | ------ | ------------------------- | ------ |
| switchProps | object | 多选的属性配置，同 Switch | {}     |



