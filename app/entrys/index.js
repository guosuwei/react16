var fs = require('fs');
var path = require('path')
var entryPath = path.join(__dirname, './config');

var entryList = {};

fs.readdirSync(entryPath).forEach(function (file) {
    var entryFile = require("./config/" + file)
    for (i in entryFile) {
        entryList[i] = entryFile[i];
    }
})

// 全部打包
module.exports = entryList;
// 单个打包
// module.exports = {
//     'home': ['./app/pages/home/index.tmpl.jsx'],
// };