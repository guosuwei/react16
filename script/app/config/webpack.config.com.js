//引入所需插件
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const path = require('path');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ManifestPlugin = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const paths = require('./paths');
const pkg = require('../../../package.json');


function resolve(dir) {
  return path.join(__dirname, '..', '..', dir)
}

const commonConfig = {
  mode: 'production',
  entry: {
    components: ["./app/components/index.js"]
  },
  output: {
    path: paths.appDevStatic + '/components/',
    filename: "[name].js",
    chunkFilename: "[name].js",
    publicPath: "/",
    library: '[name]',
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
              name: 'image/[name].[hash:8].[ext]',
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
                name: './image/[name].[hash:8].[ext]',
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

    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    }),
    // 提取CSS样式
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
    }),
    // DLL文件配置
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('../../../manifest.dll.json'),
      name: 'dll'
    }),
    // 生成common公共文件列表
    new webpack.DllPlugin({
      context: __dirname,
      path: 'manifest.com.json',
      name: '[name]',
    }),
    // 清除打包目录
    new CleanWebpackPlugin(paths.appDevStatic + '/components/', {
      root: process.cwd(),
    }),
    // 生成打包文件列表
    new ManifestPlugin({
      fileName: "asset-manifest.json"
    }),

  ],
};

module.exports = commonConfig;