(function (window) {
    'use strict';

    var dateHelper = {};

    dateHelper.getSearchDatesForDate = function(date, numberOfDays) {
        var startDate = moment(date).subtract(numberOfDays, 'd');
        var endDate = moment(date).add(numberOfDays, 'd');
        var today = moment().startOf('day');

        var day = startDate;
        var searchDates = [];

        while (day.isSameOrBefore(endDate)) {
            if (day.isSameOrAfter(today)) {
                searchDates.push(day.format('YYYY-MM-DD'));
            }

            day = day.clone().add(1, 'd');
        }

        return searchDates;
    }

	window.dateHelper = dateHelper;

})(window);
