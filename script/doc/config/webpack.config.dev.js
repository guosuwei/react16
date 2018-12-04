const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const postcssFlexbugsFixes = require("postcss-flexbugs-fixes");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("@nuxtjs/friendly-errors-webpack-plugin");
const paths = require("./paths");
const pkg = require("../../../package.json");

// 配置----webpack
var devConfig = {
  mode: 'development',
  entry: [
    "babel-polyfill",
    require.resolve('react-hot-loader/patch'),
    require.resolve('webpack-hot-dev-clients/webpackHotDevClient'),
    paths.appIndexJs
  ],
  output: {
    publicPath: '/',
    filename: 'js/[name].js',
  },
  resolve: {
    extensions: [".web.js", ".js", ".json", ".web.jsx", ".jsx", ".tsx"],
    // https://webpack.js.org/configuration/resolve/#resolve-alias
    alias: {
      // API目录
      "@api": paths.appApi,
      // 项目组件目录
      '@components': paths.appComponents,
      // 项目公共方法目录
      "@utils": paths.appUtils,
    },
  },
  module: {
    strictExportPresence: true,
    rules: [{
        // 使用Babel处理JS资源
        test: /\.(js|jsx|tsx)$/,
        loader: require.resolve("babel-loader"),
        include: [paths.docsSrc,paths.appComponents],
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
                  browsers: [
                    ">1%",
                    "last 4 versions",
                    "Firefox ESR",
                    "not ie < 9" // React doesn't support IE8 anyway
                  ],
                  flexbox: "no-2009"
                }),
              ]
            }
          },
          require.resolve('resolve-url-loader'),
          {
            loader:require.resolve("less-loader"),
            options: {
              "modifyVars": {
                "@hd": "1px",
              }
            }
          }
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
      },
      // 配置md文件loader
      {
        test: /\.md$/,
        loader: "raw-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // favicon: paths.appFavicon,
      inject: true,
      template: paths.appDevHtml,
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin(),
  ]
};
module.exports = devConfig;