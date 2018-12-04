# Form 表单

> PS: 用于接受单行文本输入。

## 组件引用

```js
import Input from "@components/base/input";
```

## 组件示例

<!--DemoStart-->

```js
//证件类型
class Demo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      /*证件类型value*/
      documentTypeNowval: "10100"
    };
  }
  onExtraClick() {
    alert("我是onExtraClick方法");
  }
  //获取证件类型value
  documentTypeNowCalues(val, label) {
    let that = this;
    that.setState({
      documentTypeNowval: label
    });
  }
  render() {
    let test = [
      {
        label: "居民身份证",
        value: "10100"
      },

      {
        label: "户口簿",
        value: "10300"
      },
      {
        label: "护照",
        value: "10400"
      },
      {
        label: "军官证",
        value: "10502"
      },
      {
        label: "士兵证",
        value: "10501"
      },
      {
        label: "港澳居民来往内地通行证",
        value: "10701"
      },
      {
        label: "台湾居民来往内地通行证",
        value: "10702"
      },
      {
        label: "临时身份证",
        value: "10200"
      },
      {
        label: "外国人永久居留证",
        value: "10800"
      },
      {
        label: "警官证",
        value: "10602"
      },
      {
        label: "武警士兵证",
        value: "10601"
      },
      {
        label: "文职干部证",
        value: "10503"
      },
      {
        label: "其他证件",
        value: "99999"
      },
      {
        label: "驾驶证",
        value: "11000"
      }
    ];
    return (
      <Page transition={true} infiniteLoader={false} ptr={false}>
        <Input.Group header="基础表单">
          <Input labelNumber={4} placeholder="请输入姓名">
            默认
          </Input>
          <Input type="money" labelNumber={4} placeholder="请输入金额">
            金额
          </Input>
          <Input type="number" labelNumber={4} placeholder="请输入数字">
            数字
          </Input>
          <Input
            type="bankCard"
            labelNumber={4}
            placeholder="请输入卡号"
            extra="1111"
          >
            卡号
          </Input>

          <Input type="phone" labelNumber={4} placeholder="请输入手机号">
            手机
          </Input>

          <Input type="password" labelNumber={4} placeholder="请输入密码">
            密码
          </Input>
        </Input.Group>
        <Input.Group header="多行文本">
          <Input.Textarea
            placeholder="请输入文本,限制50个文字"
            rows="3"
            maxTextLength={50}
          />
        </Input.Group>
        <Input.Group header="选择">
          <Input.Select
            labelNumber={4}
            placeholder="居民身份证"
            title="选择"
            items={test}
            onChange={this.documentTypeNowCalues.bind(this)}
            value={this.state.documentTypeNowval}
            data={test}
            extraIcon="arrow"
          />
        </Input.Group>
        <Input.Group header="右侧定义">
          <Input labelNumber={4} placeholder="请输入" extraText="元">
            文字
          </Input>
          <Input
            labelNumber={4}
            placeholder="请输入"
            extraIcon="search"
            onExtraClick={this.onExtraClick}
          >
            图标
          </Input>
          <Input
            labelNumber={4}
            placeholder="请输入"
            extraButton="warning"
            extraButtonName="按钮"
            onExtraClick={this.onExtraClick}
          >
            按钮
          </Input>
        </Input.Group>
        <Input.Group header="文字方向">
          <Input labelNumber={4} placeholder="请输入">
            默认
          </Input>
          <Input
            labelTextAlign="center"
            textAlign="center"
            labelNumber={4}
            placeholder="请输入"
          >
            居中
          </Input>
          <Input
            labelTextAlign="right"
            textAlign="right"
            labelNumber={4}
            placeholder="请输入"
          >
            居右
          </Input>
        </Input.Group>
      </Page>
    );
  }
}
```

<!--End-->

## 组件 API

### 默认

| 属性         | 类型                                                                  | 说明                        | 默认值  |
| ------------ | --------------------------------------------------------------------- | --------------------------- | ------- |
| type         | `string`（可选 `name`,`text`,`bankCard`,`phone`,`number`,`password`） | 输入文本类型                | `text`  |
| value        | `string`                                                              | 文本框内容值                | -       |
| defaultValue | `string`                                                              | 文本框默认值                | -       |
| placeholder  | `string`                                                              | 占位文本，在没有内容时显示  | -       |
| labelNumber  | `number`(可选 `2`, `3`, `4`, `5`, `6`, `7`)                           | 标题字数，用于 input 框对齐 | `4`     |
| maxTextLength    | `number`                                                              | input 最大长度限制          | -       |
| editable     | `bool`                                                                | 是否允许修改                | `true`  |
| disabled     | `bool`                                                                | 是否禁止文本框              | `false` |
| onChange     | `function`                                                            | 内容变化时回调函数          | -       |
| onBlur       | `function`                                                            | input 失去焦点回调          | -       |
| onFocus      | `function`                                                            | input 获取焦点回调          | -       |
| error        | `bool`                                                                | 启用报错样式                | `false` |
| onErrorClick | `function`                                                            | 点击报错 icon 触发的回调    | -       |

### 其它

| 属性            | 类型       | 说明                                       | 默认值 |
| --------------- | ---------- | ------------------------------------------ | ------ |
| cursorSize      | `string`   | 调用非系统键盘时控制光标显示移动           | `-`    |
| extraText       | `string`   | 右侧说明文字                               | `-`    |
| extraIcon       | `string`   | 参数值为 icon 样式                         | `-`    |
| extraButton     | `string`   | 参数值为 button 样式                       | `-`    |
| extraButtonName | `string`   | 参数值为 button 名称                       | `-`    |
| onExtraClick    | `function` | 为右侧 `extraIcon`,`extraButton`, 添加方法 | `-`    |

### 文字方向

| 属性           | 类型                          | 说明                 | 默认值 |
| -------------- | ----------------------------- | -------------------- | ------ |
| labelTextAlign | 可选`left`, `center`, `right` | 标题文字对齐方式     | `left` |
| textAlign      | 可选`left`, `center`, `right` | input 框文字对齐方式 | `left` |

### 选择

| 属性      | 类型     | 说明               | 默认值 |
| --------- | -------- | ------------------ | ------ |
| items     | `array`  | 选择列表数据       | `-`    |
| value     | `string` | 类型参数           | `-`    |
| closeText | `string` | 取消、关闭文字描述 | `取消` |
| disabled  | `string` | 是否禁止           | `-`    |

### 多行文本

| 属性        | 类型     | 说明                       | 默认值 |
| ----------- | -------- | -------------------------- | ------ |
| placeholder | `string` | 占位文本，在没有内容时显示 | `-`    |
| rows        | `string` | 文本行数                   | `-`    |
| maxTextLength   | `number` | 最大字符数                 | `-`    |

### 组

| 属性   | 类型     | 说明       | 默认值 |
| ------ | -------- | ---------- | ------ |
| header | `string` | 列表组标题 | `-`    |
