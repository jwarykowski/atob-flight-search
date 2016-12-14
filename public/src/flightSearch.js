(function () {
    'use strict';

    function FlightSearch(options) {
        var searchDateRange = options.searchDateRange;

        var views = {
            formView: new application.FormView(),
            notificationView: new application.NotificationView(),
            tabListView: new application.TabListView(),
            tabsView: new application.TabsView()
        };

    	this.controller = new application.FlightSearchController(searchDateRange, views);
    }

    var flightSearch = new FlightSearch({searchDateRange: 2});
})();
