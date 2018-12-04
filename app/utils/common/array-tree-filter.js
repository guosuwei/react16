//树的遍历filter,组合成数组
//Cascader  以及picker组件使用
function arrayTreeFilter(data, filterFn, options) {
    options = options || {};
    options.childrenKeyName = options.childrenKeyName || 'children';
    var children = data || [];
    var result = [];
    var level = 0;
    var foundItem;
    do {
        var foundItem = children.filter(function (item) {
            return filterFn(item, level);
        })[0];
        if (!foundItem) {
            break;
        }
        result.push(foundItem);
        children = foundItem[options.childrenKeyName] || [];
        level += 1;
    } while (children.length > 0);
    return result;
}

module.exports = arrayTreeFilter;
