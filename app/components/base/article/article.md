# Article 文章

> PS: 用于文章内容展示

## 组件引用

```js
import Article from "components/base/article";
```

## 组件示例

<!--DemoStart-->

```js
class Demo extends Component {
  render() {
    return (
      <Page transition={true} infiniteLoader={false} ptr={false}>
      <Article>
        <h1>产品与服务</h1>
        <section>
          <h2 className="title">产品介绍</h2>
          <section>
            <h3>EMP（企业移动应用开发平台）</h3>
            <p>
              <img
                src="http://www.rytong.com/upload/images/2017/cpfw/img_fw1.png"
              />
            </p>
            <p>
              覆盖设计、开发、测试、集成、运行、管理移动项目生命周期的更适合金融行业的移动开发平台。灵活支持Native原生接口映射及HTML5开发模式，发挥各自优势，适合不同金融场景。EMP提供更丰富的展示控件、更高效的开发模式、更优秀的用户体验。
            </p>
          </section>
          <section>
            <h3>MDAP（移动用户行为大数据分析平台）</h3>
            <p>
              <img
                src="http://www.rytong.com/upload/images/2017/cpfw/img_fw1.png"
              />
            </p>
            <p>
              多维度采集分析前端用户行为数据，为电子渠道业务分析、体验优化、活动分析、精准营销、渠道质量评估提供有力数据支撑。致力于打造真正适合移动互联网金融的用户行为分析大数据平台。
            </p>
          </section>
        </section>
      </Article>
      </Page>
    );
  }
}
```

<!--End-->

## 组件 API

| 属性 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| -    | -    | -    | -      |
