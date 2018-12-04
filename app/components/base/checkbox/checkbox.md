# Checkbox 多选框

> PS: 用于列表形态展示

## 组件引用

```js
import Checkbox from "@components/base/checkbox";
```

## 组件示例

<!--DemoStart-->

```js
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      checked1: true
    };
  }

  changeHandle = checked => {
    this.setState({ checked });
  };
  changeHandle1 = checked1 => {
    this.setState({ checked1 });
  };
  render() {
    return (
      <Page transition={true} infiniteLoader={false} ptr={false}>
        <Cell.Group>
          <Checkbox.CheckboxList
            title="未选 禁用"
            checkboxProps={{ disabled: true }}
          />
          <Checkbox.CheckboxList
            title="选中 禁用"
            checkboxProps={{ disabled: true, value: true }}
          />
          <Checkbox.CheckboxList
            title="未选"
            onTap={checked => {
              console.log(checked);
            }}
          />
          <Checkbox.CheckboxList
            title="选中"
            checkboxProps={{ defaultValue: true }}
          />
        </Cell.Group>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Checkbox
            value={true}
            onChange={this.changeHandle}
            disabled
          />
        </WingBlank>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Checkbox onChange={this.changeHandle} />
        </WingBlank>
        <WhiteSpace size="md" />
        <Checkbox.Agree>
          是否同意<a style={{ color: "#2db7f5" }}>《信用支付服务合同信用支付服务合同信用支付服务合同》</a>
        </Checkbox.Agree>
        <WhiteSpace size="md" />
        <Checkbox.Agree
          value={this.state.checked1}
          onChange={this.changeHandle1}
        >
          是否同意<a style={{ color: "#2db7f5" }}>《信用支付服务合同信用支付服务合同信用支付服务合同》</a>
        </Checkbox.Agree>
      </Page>
    );
  }
}
```

<!--End-->

## API

### Checkbox

| props        | 类型       | 说明                                     | 默认值  |
| :----------- | :--------- | :--------------------------------------- | :------ |
| value        | `boolean`  | 是否选中                                 | -       |
| defaultValue | `boolean`  | 初始是否选中                             | -       |
| disabled     | `boolean`  | 是否禁用                                 | `false` |
| onChange     | `function` | change 事件回调函数，入参为(value,event) | -       |
| name         | `string`   | 同 html 中 name                          | -       |

### Checkbox.Agree

> PS: 同 Checkbox

### Checkbox.CheckboxList

> PS: 其他属性同 Cell

| props         | 类型       | 说明                                     | 默认值 |
| :------------ | :--------- | :--------------------------------------- | :----- |
| checkboxProps | `object`   | 多选的属性配置，同 Checkbox              | {}     |
| onTap         | `function` | change 事件回调函数，入参为(value,event) | -      |
