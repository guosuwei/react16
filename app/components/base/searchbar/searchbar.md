# Searchbar 搜索栏

> PS: 搜索栏

## 引用组件

```js
import SearchBar from "@components/base/searchbar";
```

## 组件示例

### 尺寸

<!--DemoStart-->

```js
class Demo extends Component {
  state = {
    searchText: "",
    results: []
  };
  handleChange() {
    console.log("onChange");
  }
  render() {
    return (
      <Page transition={true} infiniteLoader={false} ptr={false}>
        <SearchBar
          onChange={this.handleChange.bind(this)}
          defaultValue={this.state.searchText}
          placeholder="查询"
          lang={{
            cancel: "取消"
          }}
        />
      </Page>
    );
  }
}
```

<!--End-->

## 组件 API

| 属性         | 类型     | 说明                                   | 默认值      |
| ------------ | -------- | -------------------------------------- | ----------- |
| autocomplete |          |                                        | `off`       |
| defaultValue | `string` | 搜索栏的默认值                         | -           |
| lang         | `object` |                                        | -           |
| onCancel     | `func`   | 当用户点击取消按钮时触发               | `undefined` |
| onChange     | `func`   | 在输入传递 text 属性上的文本更改时触发 | `undefined` |
| onClear      | `func`   | 当用户点击清除图标时触发               | `undefined` |
| onSubmit     | `func`   | 用户提交时触发（输入操作）             | `undefined` |
| placeholder  | `string` | 默认文本                               | `搜索`      |
| searchName   | `string` | 组件的名称                             | `q`         |
