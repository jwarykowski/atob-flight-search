(function (window) {
    'use strict';

    var arrayHelper = {};

    arrayHelper.getItemCount = function(results) {
        return results.reduce(function(memo, result) {
            return result.length;
        }, 0);
    }

	window.arrayHelper = arrayHelper;

})(window);
