const path = require("path"); // 引入node path函数
const fs = require("fs"); // 引入node fs函数
/*
 * 获取文件路径
 * appDirectory当前目录 process.cwd()返回进程的当前目录（绝对路径）
 */

const appDirectory = fs.realpathSync(process.cwd());

// 将相对路径转为绝对路径。
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// 判断是否为目录
function isDir(_path) {
  return exists(_path) && fs.statSync(_path).isDirectory();
}

// 检查指定路径的文件或者目录是否存在
function exists(_path) {
  return fs.existsSync(_path);
}

// 返回 UI 组件库所有路径的 Array
// 这些路径用于Webpack配置中
function readSrcSync(filepath, ret) {
  ret = ret || [];
  let files = fs.readdirSync(filepath);
  for (var i = 0; i < files.length; i++) {
    let curPath = path.resolve(filepath, files[i]);
    if (isDir(curPath)) {
      if (files[i] !== 'style' && files[i] !== 'font' && files[i] !== '__test__') {
        readSrcSync(curPath, ret);
      }
    } else if (/\.(js)$/.test(files[i])) {
      ret.push(curPath);
    }
  }
  return ret;
}

module.exports = {

  /** ------ 开发 -------------------------------------------- **/
  docsSrc: resolveApp("docs"),
  appSrc: resolveApp("app"),
  /** ------ 入口 -------------------------------------------- **/
  appIndexJs: resolveApp("docs/entrys/index.js"),

  /** ------ HTML -------------------------------------------- **/
  // 开发
  appDevHtml: resolveApp("docs/entrys/index.html"),
  // 生产
  appProdHtml: resolveApp("docs/entrys/index.html"),

  /** ------ 打包 -------------------------------------------- **/
  // 生产
  appBuildDist: resolveApp("dist/docs/"),

  /** ------ 全局 -------------------------------------------- **/
  // 公共
  appUtils: resolveApp("app/utils"),
  // API
  appApi: resolveApp("app/constants"),
  // 组件
  appComponents: resolveApp("app/components"),

  /** ------ 资源 -------------------------------------------- **/
  // 开发
  appDevStatic: resolveApp("app/static/"),
  // 生产
  appProdStatic: resolveApp("dist/app/static/"),

  // 组件库所有路径的 Array
  readSrcSync,
};