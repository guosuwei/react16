const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const postcssFlexbugsFixes = require("postcss-flexbugs-fixes");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("@nuxtjs/friendly-errors-webpack-plugin");
const paths = require("./paths");
const pkg = require("../../../package.json");

// 引入----入口文件
const entrys = require("../../../app/entrys/index.js");
const entryList = {};

const devConfig = {
  // 配置----模式
  mode: "development",
  // 配置----入口
  entry: entryList,
  // 配置----出口
  output: {
    publicPath: "/",
    filename: "js/[name].js",
  },
  resolve: {
    extensions: [".web.js", ".js", ".json", ".web.jsx", ".jsx", ".tsx"],
    // https://webpack.js.org/configuration/resolve/#resolve-alias
    alias: {
      // API目录
      "@api": paths.appApi,
      // 项目组件目录
      "@components": paths.appComponents,
      // 项目公共方法目录
      "@utils": paths.appUtils
    }
  },
  module: {
    strictExportPresence: true,
    rules: [{
        // 使用Babel处理JS资源
        test: /\.(js|jsx|tsx)$/,
        include: [paths.appSrc, paths.appComponents],
        loader: require.resolve("babel-loader"),
        options: {
          // 这是webpack的“babel-loader”（不是Babel本身）的一个功能。
          // 它启用缓存结果./node_modules/.cache/babel-loader/
          // 用于更快重建的目录。
          cacheDirectory: true
        }
      },
      {
        //样式资源处理
        test: /\.(css|less)$/,
        use: [
          require.resolve("style-loader"),
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1
            }
          },
          {
            loader: require.resolve("postcss-loader"),
            options: {
              ident: "postcss",
              plugins: () => [
                require("postcss-flexbugs-fixes"),
                autoprefixer({
                  browsers: ["iOS >= 7", "Android >= 4"],
                  flexbox: "no-2009"
                }),
                // 设置REM比例值
                require("postcss-px2rem")({
                  remUnit: 102.4
                })
              ]
            }
          },
          require.resolve("resolve-url-loader"),
          require.resolve("less-loader")
        ]
      },
      {
        //图片资源处理
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve("url-loader"),
        options: {
          limit: 10000,
          name: "static/media/[name].[hash:8].[ext]"
        }
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   // favicon: paths.appFavicon,
    //   inject: true,
    //   template: paths.appDevHtml,
    // }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin()
  ]
};

/**-- 入口文件列表 ------------------------------------------------------------------------**/
let entryName = [];
for (var item in entrys) {
  serverList = [
    "babel-polyfill",
    require.resolve("react-hot-loader/patch"),
    require.resolve("react-dev-utils/webpackHotDevClient"),
    entrys[item][0]
  ];
  entryName.push(item);
  entryList[item] = serverList;
}
/**-- html页面入口 ------------------------------------------------------------------------**/
entryName.forEach(function (item) {
  devConfig.plugins.push(
    new HtmlWebpackPlugin({
      title: "ryt",
      template: paths.appDevHtml,
      filename: item + ".html",
      chunks: [item],
      inject: true,
      //压缩HTML配置-移除属性的引号等优化
      minify: {
        removeAttributeQuotes: true
      },
      hash: true
    })
  );
});

module.exports = devConfig;