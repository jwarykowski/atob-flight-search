var arrayHelper = {};

arrayHelper.flattenArrays = function(results) {
    return results.reduce((memo, array) => memo.concat(array), []);
}

arrayHelper.orderBy = function(key, results) {
    return results.sort(function(a, b) {
        if (a[key] < b[key]) {
            return -1;
        }
        if (a[key] > b[key]) {
            return 1;
        }

        return 0;
    });
}

module.exports = arrayHelper;
