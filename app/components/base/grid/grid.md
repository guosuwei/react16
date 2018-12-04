# Grid 宫格

> PS: 在水平和垂直方向,将布局切分成若干等大的区块,一般为图标加文字

## 组件引用

```js
import Grid from "@components/base/grid";
```

## 组件示例

<!--DemoStart-->

```js
class Demo extends Component {
  createGridsData = (data, length) => {
    return new Array(length).fill(data);
  };
  fn(n) {
    alert(n);
  }

  render() {
    return (
      <Page transition={true} infiniteLoader={false} ptr={false}>
        <Grid
          data={this.createGridsData(
            {
              text: "融易通",
              icon: <Icon name="success" size="xl" />
            },
            14
          )}
          border={true}
          onTap={(data, index) => {
            this.fn(index + 1);
            this.fn(data);
            console.log(data);
            console.log(index);
          }}
        />
      </Page>
    );
  }
}
```

<!--End-->

## 组件 API

| 属性   | 类型                 | 说明           | 默认值 |
| ------ | -------------------- | -------------- | ------ |
| row    | `number`             | 行数           |        |
| column | `number`             | 列数           | `4`    |
| onTap  | `function(el,index)` | 点击回调       | -      |
| border | `boolean`            | 是否有边框     | -      |
| data   | `array`              | 传入的菜单数据 | -      |

```javascript
//data每一项元素为一个object
{
  icon: 图标; // string or jsx string为img的url
  text: 文字; //string or jsx
  iconStyle: {
  } //图标的style
  textStyle: {
  } //文字的style
  content: 内容; //string or jsx 如果有content这个key值，那么自动忽略icon及text。格内展示位{content}
}
```
