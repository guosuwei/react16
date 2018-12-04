//引入所需插件
const webpack = require('webpack');
const path = require('path');
// const loaderUtils = require( 'loader-utils'); // webpack 内部插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const paths = require('./paths');


function resolve(dir) {
  return path.join(__dirname, '..', '..', dir)
}
//公共组件定义
const vendors = ["react", "react-dom", "babel-polyfill", "classnames", "prop-types", "amfe-flexible","scriptjs",];
const dllConfig = {
  mode: 'production',
  entry: {
    dll: vendors
  },
  output: {
    path: paths.appDevStatic + '/public/',
    filename: "[name].js",
    chunkFilename: "[name].js",
    publicPath: "/",
    library: '[name]',
  },
  module: {
    strictExportPresence: true,
    rules: [{
      test: /\.(js|jsx|mjs)$/,
      loader: require.resolve('babel-loader'),
      include: [
        paths.appSrc,
      ],
      options: {
        cacheDirectory: true,
        // 按需加载缩小体积
        plugins: ['babel-plugin-transform-runtime']
      },
    }],
  },
  // 压缩
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
    ]
  },
  plugins: [
    // 生成dll公共文件列表
    new webpack.DllPlugin({
      path: 'manifest.dll.json',
      name: '[name]',
      context: __dirname,
    }),
    // 清除打包目录
    new CleanWebpackPlugin(paths.appDevStatic + '/public/', {
      root: process.cwd(),
    }),
  ],
};
module.exports = dllConfig;