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

const productionConfig = {
  mode: 'production',
  entry: {
    'vendors': ['react', 'react-dom', 'react-router-dom'],
    'libs': [
      path.resolve(process.cwd(), 'docs/libs/markdown/index.js'),
      path.resolve(process.cwd(), 'docs/libs/markdown/canvas.js')
    ],
    'marked': ['marked'],
    'prismjs': ['prismjs'],
    'app': [
      "babel-polyfill",
      paths.appIndexJs
    ],
    'components': paths.readSrcSync(paths.appComponents),
    'babelstandalone': ['babel-standalone'],
  },
  output: {
    path: paths.appBuildDist,
    // 生成的JS文件名（带有嵌套文件夹）。
    // 将有一个主要的bundle，每个异步块有一个文件。
    // 我们目前没有宣传代码分割，但Webpack支持它。
    filename: "js/[name].[chunkhash:8].js",
    chunkFilename: "js/[name].[chunkhash:8].js",
    // 从主页推断出“公共路径”（如/或/ my-project）。
    publicPath: "./",
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
        test: /\.(js|jsx|tsx)$/,
        loader: require.resolve('babel-loader'),
        include: [
          paths.docsSrc, paths.appComponents
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
        oneOf: [
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
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9', // React doesn't support IE8 anyway
                      ],
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
              {
                loader: require.resolve("less-loader"),
                options: {
                  "modifyVars": {
                    "@hd": "1px",
                  }
                }
              }
            ],
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
          {
            test: /\.md$/,
            loader: 'raw-loader'
          },
        ],
      },
    ],
  },
  // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          mangle: {
            safari10: true
          }
        },
        sourceMap: false,
        cache: true,
        parallel: true
      }),
      // Compress extracted CSS. We are using this plugin so that possible
      // duplicated CSS from different components can be deduped.
      new OptimizeCSSAssetsPlugin()
    ]
  },
  plugins: [
    // 清除打包目录
    new CleanWebpackPlugin(paths.appBuildDist, {
      root: process.cwd(),
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appProdHtml,
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
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].[contenthash:8].css",
    }),
    // 打包文件列表
    new ManifestPlugin({
      fileName: "asset-manifest.json"
    }),
  ],
};
module.exports = productionConfig;