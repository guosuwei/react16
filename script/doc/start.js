/**-- 引入工具 ------------------------------------------------------------------------**
 * 
 * 1.webpack             
 * 2.端口检测             
 * 3.打开浏览器              
 * 4.开发服务  
 * 5.本地IP工具 
 * 6.命令行loading效果  
 * 7.控制台颜色  
 * 8.IDE打开错误页面  
 * 9.webpack配置文件
 * 
 **/

// 1.引入----webpack
const webpack = require("webpack");
// 2.引入----端口检测
const detect = require('detect-port');
// 3.引入----打开浏览器
const openBrowsers = require('open-browsers');
// 4.引入----开发服务
const WebpackDevServer = require('webpack-dev-server');
// 5.引入----本地IP工具
const prepareUrls = require('local-ip-url/prepareUrls');
// 6.引入----命令行loading效果
const load = require('loading-cli');
// 7.引入----控制台颜色
const color = require('colors-cli/toxic');
// 8.引入----IDE打开错误页面
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
// 9.引入----webpack配置文件
const conf = require('./config/webpack.config.dev');

/**-- 配置信息 ------------------------------------------------------------------------**
 * 
 * 1.端口             
 * 2.IP地址             
 * 3.webpack              
 * 4.启动文字描述  
 * 
 **/

// 1.配置----端口
const PORT = 6789;
// 2.配置----IP地址
const HOST = process.env.HOST || "0.0.0.0";
// 3.配置----webpack
const compiler = webpack(conf);
// 4.配置----启动文字描述
const loading = load('正在启动文档开发服务，请稍后♪♪♪'.green).start();
loading.color = 'red';


/**-- 启动信息 ------------------------------------------------------------------------**
 * 
 * 1.端口             
 * 2.IP地址             
 * 3.webpack              
 * 4.说明信息  
 * 5.说明信息----颜色  
 * 
 **/

detect(PORT).then((_port) => {

    // 判断----端口
    if (PORT !== _port) PORT = _port;
    // 配置----协议
    const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
    // 配置----URL
    const urls = prepareUrls({
      protocol,
      host: HOST,
      port: PORT
    });

    // 运行----编译完成之后打印日志
    compiler.hooks.done.tap('done', () => {
      loading.stop();
      console.log(`Dev Server Listening at Local: ${urls.localUrl.green}`);
      console.log(`              On Your Network: ${urls.lanUrl.green}`);

    });

    // 配置----devServer
    const devServer = new WebpackDevServer(compiler, {
      publicPath: conf.output.publicPath,
      hot: true,
      historyApiFallback: true,
      quiet: true,
      // 配置----错误信息
      setup(app) {
        // 打开错误页面
        app.use(errorOverlayMiddleware());
      },
    })
    // 监听----devServer
    devServer.listen(PORT, HOST, (err) => {
      // 判断----打印错误信息
      if (err) {
        return console.log(err);
      }
      // 配置----打开浏览器
      openBrowsers(urls.localUrl);
      // 监听----SIGINT,SIGTERM信号并退出
      ['SIGINT', 'SIGTERM'].forEach((sig) => {
        process.on(sig, () => {
          devServer.close();
          process.exit();
        });
      });
    });
  }) // 打印错误并退出
  .catch(err => {
    if (err && err.message) {
      console.log(err, err.message);
    }
    process.exit(1);
  });