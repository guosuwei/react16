# Radio 单选框

> PS: 单选框

## 组件引用

```js
import Radio from "@components/base/radio";
```

## 组件示例

<!--DemoStart-->

```js
class Demo extends Component {
  changeHandle = checked => {
    console.log(checked);
  };
  render() {
    return (
      <Page transition={true} infiniteLoader={false} ptr={false}>
        <Cell.Group>
          <Radio.RadioList
            title="未选 禁用"
            radioProps={{ disabled: true }}
            onTap={arg => {
              console.log(arg);
            }}
          />
          <Radio.RadioList
            title="选中 禁用"
            radioProps={{ disabled: true, value: true }}
          />
          <Radio.RadioList
            title="未选"
            onTap={arg => {
              console.log(arg);
            }}
            radioProps={{ name: "1" }}
          />
          <Radio.RadioList
            title="选中"
            radioProps={{ defaultValue: true, name: "1" }}
            onTap={arg => {
              console.log(arg);
            }}
          />
        </Cell.Group>
        <WingBlank>
          <WhiteSpace size="md" />
          组
          <Radio.Group
            onChange={key => {
              console.log(key);
            }}
            defaultActiveKey="0"
          >
            <Radio key="0" />
            <Radio key="1" />
          </Radio.Group>
        </WingBlank>
        <WingBlank>
          <WhiteSpace size="md" />
          禁用
          <WhiteSpace size="md" />
          <Radio defaultValue={true} onChange={this.changeHandle} disabled />
          <WhiteSpace size="md" />
          选择
          <WhiteSpace size="md" />
          <Radio onChange={this.changeHandle} name="radio1" />
          <Radio onChange={this.changeHandle} name="radio1" />
          
        </WingBlank>
      </Page>
    );
  }
}
```

<!--End-->

## API

### Radio

| props        | 类型     | 说明                                     | 默认值 |
| ----------- | ------- | --------------------------------------- | ----- |
| value        | boolean  | 是否选中                                 | -      |
| defaultValue | boolean  | 初始是否选中                             | -      |
| disabled     | boolean  | 是否禁用                                 | false  |
| onChange     | function | change 事件回调函数，入参为(value,event) | -      |
| name         | string   | 同 html 中 name                          | -      |

### Radio.Group

| props            | 类型     | 说明                                     | 默认值 |
| --------------- | ------- | --------------------------------------- | ----- |
| defaultActiveKey | string   | 初始选中的 key 值                        | -      |
| onChange         | function | change 事件回调函数，入参为选中的 key 值 | -      |

### Radio.RadioList

> PS :其他属性同 Cell

| props      | 类型     | 说明                                     | 默认值 |
| --------- | ------- | --------------------------------------- | ----- |
| radioProps | object   | 单选的属性配置，同 Radio                 | {}     |
| onTap      | function | change 事件回调函数，入参为(value,event) | -      |
