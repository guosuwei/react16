# TabBar 标签栏

> PS: 位于 APP 底部，方便用户在不同功能模块之间进行快速切换。

## 组件说明

> PS: 用作 APP 的一级分类，数量控制在 3-5 个之间。即使某个 Tab 不可用，也不要禁用或者移除该 Tab。使用 Badge 进行提示更新。

## 组件引用

```js
import TabBar from "@components/base/tab-bar";
```

## 组件示例

<!--DemoStart-->

```js
class Demo extends Component {
  callBack(num) {
    console.log(num);
  }
  render() {
    return (
      <Page transition={true} infiniteLoader={false} ptr={false}>
        <TabBar
          defaultActiveKey="1"
          animation={true}
          onChange={this.callBack.bind(this)}
        >
          <TabBar.Panel
            icon="search"
            hasBadge={true}
            badgeType="dot"
            text="标题"
            key="1"
          >
            <Article>
              <h1>产品与服务1</h1>
              <section>
                <h2 className="title">产品介绍</h2>
                <section>
                  <h3>EMP（企业移动应用开发平台）</h3>
                  <p>
                    <img src="http://www.rytong.com/upload/images/2017/cpfw/img_fw1.png" />
                  </p>
                  <p>
                    覆盖设计、开发、测试、集成、运行、管理移动项目生命周期的更适合金融行业的移动开发平台。灵活支持Native原生接口映射及HTML5开发模式，发挥各自优势，适合不同金融场景。EMP提供更丰富的展示控件、更高效的开发模式、更优秀的用户体验。
                  </p>
                </section>
                <section>
                  <h3>MDAP（移动用户行为大数据分析平台）</h3>
                  <p>
                    <img src="http://www.rytong.com/upload/images/2017/cpfw/img_fw1.png" />
                  </p>
                  <p>
                    多维度采集分析前端用户行为数据，为电子渠道业务分析、体验优化、活动分析、精准营销、渠道质量评估提供有力数据支撑。致力于打造真正适合移动互联网金融的用户行为分析大数据平台。
                  </p>
                </section>
              </section>
            </Article>
          </TabBar.Panel>
          <TabBar.Panel icon="search" text="标题" key="2">
            <Article>
              <h1>产品与服务2</h1>
              <section>
                <h2 className="title">产品介绍</h2>
                <section>
                  <h3>EMP（企业移动应用开发平台）</h3>
                  <p>
                    <img src="http://www.rytong.com/upload/images/2017/cpfw/img_fw1.png" />
                  </p>
                  <p>
                    覆盖设计、开发、测试、集成、运行、管理移动项目生命周期的更适合金融行业的移动开发平台。灵活支持Native原生接口映射及HTML5开发模式，发挥各自优势，适合不同金融场景。EMP提供更丰富的展示控件、更高效的开发模式、更优秀的用户体验。
                  </p>
                </section>
                <section>
                  <h3>MDAP（移动用户行为大数据分析平台）</h3>
                  <p>
                    <img src="http://www.rytong.com/upload/images/2017/cpfw/img_fw1.png" />
                  </p>
                  <p>
                    多维度采集分析前端用户行为数据，为电子渠道业务分析、体验优化、活动分析、精准营销、渠道质量评估提供有力数据支撑。致力于打造真正适合移动互联网金融的用户行为分析大数据平台。
                  </p>
                </section>
              </section>
            </Article>
          </TabBar.Panel>
          <TabBar.Panel icon="search" text="标题" key="3">
            <Article>
              <h1>产品与服务3</h1>
              <section>
                <h2 className="title">产品介绍</h2>
                <section>
                  <h3>EMP（企业移动应用开发平台）</h3>
                  <p>
                    <img src="http://www.rytong.com/upload/images/2017/cpfw/img_fw1.png" />
                  </p>
                  <p>
                    覆盖设计、开发、测试、集成、运行、管理移动项目生命周期的更适合金融行业的移动开发平台。灵活支持Native原生接口映射及HTML5开发模式，发挥各自优势，适合不同金融场景。EMP提供更丰富的展示控件、更高效的开发模式、更优秀的用户体验。
                  </p>
                </section>
                <section>
                  <h3>MDAP（移动用户行为大数据分析平台）</h3>
                  <p>
                    <img src="http://www.rytong.com/upload/images/2017/cpfw/img_fw1.png" />
                  </p>
                  <p>
                    多维度采集分析前端用户行为数据，为电子渠道业务分析、体验优化、活动分析、精准营销、渠道质量评估提供有力数据支撑。致力于打造真正适合移动互联网金融的用户行为分析大数据平台。
                  </p>
                </section>
              </section>
            </Article>
          </TabBar.Panel>
          <TabBar.Panel icon="search" text="标题" key="4">
            <Article>
              <h1>产品与服务4</h1>
              <section>
                <h2 className="title">产品介绍</h2>
                <section>
                  <h3>EMP（企业移动应用开发平台）</h3>
                  <p>
                    <img src="http://www.rytong.com/upload/images/2017/cpfw/img_fw1.png" />
                  </p>
                  <p>
                    覆盖设计、开发、测试、集成、运行、管理移动项目生命周期的更适合金融行业的移动开发平台。灵活支持Native原生接口映射及HTML5开发模式，发挥各自优势，适合不同金融场景。EMP提供更丰富的展示控件、更高效的开发模式、更优秀的用户体验。
                  </p>
                </section>
                <section>
                  <h3>MDAP（移动用户行为大数据分析平台）</h3>
                  <p>
                    <img src="http://www.rytong.com/upload/images/2017/cpfw/img_fw1.png" />
                  </p>
                  <p>
                    多维度采集分析前端用户行为数据，为电子渠道业务分析、体验优化、活动分析、精准营销、渠道质量评估提供有力数据支撑。致力于打造真正适合移动互联网金融的用户行为分析大数据平台。
                  </p>
                </section>
              </section>
            </Article>
          </TabBar.Panel>
          <TabBar.Panel
            tab={
              <div className="ryt-tab-bar-nav-img">
                <img src="http://firefly.cmbc.com.cn/public/imgs/z4MLLFPkZ1/brown.jpg" />
                <p>标题</p>
              </div>
            }
            key="5"
          >
            tab5内容
          </TabBar.Panel>
        </TabBar>
      </Page>
    );
  }
}
```

<!--End-->

## 组件 API

### TabBar

| props            | 类型       | 说明                                           | 默认值 |
| ---------------- | ---------- | ---------------------------------------------- | ------ |
| animation        | `boolean`  | 是否开启动画                                   | `true` |
| onChange         | `function` | change 事件回调函数，入参为切换的 panel 的 key | -      |
| activeKey        | `string`   | 选中的 panel 的 key                            | -      |
| defaultActiveKey | `string`   | 初始化选中的 panel 的 key                      | -      |

### TabBar.Panel

| props       | 类型              | 说明                   | 默认值  |
| ----------- | ----------------- | ---------------------- | ------- |
| key         | `string`          | 当前 panel 唯一 key 值 | -       |
| tab         | `string` or `jsx` | 标签名                 | -       |
| disabled    | `boolean`         | 是否禁用此 panel       | `false` |
| icon        | `string` or `jsx` | icon 名称              | -       |
| text        | `string` or `jsx` | 文字内容               | -       |
| hasBadge    | `boolean`         | 是否有 Badge           | `false` |
| badgeType   | `string`          | 参考 Badge             | -       |
| badgeText   | `string` or `jsx` | 参考 Badge             | -       |
| badgeMaxNum | `boolean`         | 参考 Badge             | `99`    |
