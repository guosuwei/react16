//引入所需插件
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const loaderUtils = require( 'loader-utils'); // webpack 内部插件
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ManifestPlugin = require("webpack-manifest-plugin");
const paths = require('./paths');
const pkg = require('../../../package.json');


function resolve(dir) {
  return path.join(__dirname, '..', '..', dir)
}

// 引入----入口文件
const entrys = require('../../../app/entrys/config/receipt.js');
const entryList = {};
const productionConfig = {
  mode: 'production',
  entry: entryList,
  output: {
    path: paths.appBuildDist,
    publicPath: '../',
    filename: "[name]/index.js",
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
    rules: [ // Process JS with Babel.
      {
        test: /\.(js|jsx|mjs)$/,
        loader: require.resolve('babel-loader'),
        include: [
          paths.appSrc,
        ],
        options: {
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
          // 按需加载缩小体积
          plugins: ['babel-plugin-transform-runtime']
        },
      },
      {
        oneOf: [{
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'static/image/[name].[hash:8].[ext]',
            },
          },
          {
            test: /\.(css|less)$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  // Necessary for external CSS imports to work
                  // https://github.com/facebookincubator/create-react-app/issues/2677
                  ident: 'postcss',
                  plugins: () => [
                    postcssFlexbugsFixes(),
                    // require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        "iOS >= 7", "Android >= 4"
                      ],
                      flexbox: 'no-2009',
                    }),
                    // 设置REM比例值
                    require("postcss-px2rem")({
                      remUnit: 102.4
                    })
                  ],
                },
              },
              require.resolve('less-loader'),
            ],
          },
          {
            test: /w-iconfont\.(eot|ttf|svg)$/,
            use: [{
              loader: require.resolve('file-loader'),
              options: {
                name: './static/[name].[hash:8].[ext]',
              },
            }, ],
          },
          // “file-loader”确保这些资源由WebpackDevServer服务。
          // 当您导入资源时，您将获得（虚拟）文件名。
          // 在生产中，它们将被复制到`build`文件夹。
          // 此加载程序不使用“test”，因此它将捕获所有模块
          {
            // Exclude `js` files to keep "css" loader working as it injects
            // its runtime that would otherwise processed through "file" loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpacks internal loaders.
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            use: [{
              loader: require.resolve('file-loader'),
              options: {
                name: 'static/[name].[hash:8].[ext]',
              },
            }, ],
          },
        ],
      },
    ],
  },
  // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
  optimization: {
    minimizer: [
      new UglifyJsPlugin(
        {
          uglifyOptions: {
            mangle: {
              safari10: true
            }
          },
          sourceMap: false,
          cache: true,
          parallel: true
        }
        ),
      // Compress extracted CSS. We are using this plugin so that possible
      // duplicated CSS from different components can be deduped.
      new OptimizeCSSAssetsPlugin({
        //引入cssnano配置压缩选项
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
          discardComments: {
            removeAll: true
          }
        },
        //是否将插件信息打印到控制台      
        canPrint: true   
      })
    ]
  },
  plugins: [
    // 清除打包目录
    new CleanWebpackPlugin(paths.appBuildDist, {
      root: process.cwd(),
    }),

    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    }),
    // 提取CSS样式
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name]/style.css',
    }),
    // DLL文件配置
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('../../../manifest.dll.json'),
      name: 'dll'
    }),
    // components文件配置
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('../../../manifest.com.json'),
      name: 'components'
    }),
    // 生成打包文件列表
    new ManifestPlugin({
      fileName: "asset-manifest.json"
    }),
    // 文件资源拷贝
    new CopyWebpackPlugin([{
      from: paths.appDevStatic,
      to: paths.appProdStatic
    }])
  ],
};

/**-- 入口文件列表 ------------------------------------------------------------------------**/
let entryName = [];
for (var item in entrys) {
  serverList = [
    entrys[item][0]
  ]
  entryName.push(item);
  entryList[item] = serverList;
}
/**-- html页面入口 ------------------------------------------------------------------------**/
entryName.forEach(function (item) {
  productionConfig.plugins.push(
    new HtmlWebpackPlugin({
      title: "ryt",
      chunks: [item],
      template: paths.appProdHtml,
      filename: item + '/index.html',
      inject: true,
      minify: {
        html5: true,
        useShortDoctype: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        preserveLineBreaks: true,
        removeComments: true,
        keepClosingSlash: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true
      },
      mobile: true,
    }),
  )
})

module.exports = productionConfig;