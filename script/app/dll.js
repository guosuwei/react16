const webpack = require('webpack');

const load = require('loading-cli');
const color = require('colors-cli/toxic');
const conf = require('./config/webpack.config.dll');


const loading = load('Compiler is running...'.green).start();
loading.color = 'green';

const compiler = webpack(conf);
compiler.run((err, stats) => {
  
  loading.stop();
  
  // 官方输出参数
  // https://webpack.js.org/configuration/stats/
  // https://github.com/webpack/webpack/issues/538#issuecomment-59586196
  if (stats) {
    console.log(stats.toString({
      colors: true,
      children: false,
      chunks: false,
      modules: false,
    }));
  }
});