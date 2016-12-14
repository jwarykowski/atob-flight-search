(function ($, arrayHelper, dateHelper, requestHelper, window) {
    'use strict';

    var requestErrorMessage = 'There was an error sending the request, please try again.';

    function handleFormViewSubmit(event) {
        event.preventDefault();

        var data = this.formView.getFormValues();
        var searchDates = dateHelper.getSearchDatesForDate(data.date, this.searchDateRange);

        this.formView.disable();
        this.notificationView.showRequestNotification(searchDates);

        this.removeResults();

        requestHelper.fetchSearch(data, searchDates)
            .then(onRequestSuccess.bind(this, data, searchDates))
            .catch(onRequestError.bind(this));
    }

    function handleTabListViewClick(event) {
        var $element = $(event.target);
        var searchDate;

        if(!$element.is('a.tab')) {
            return;
        }

        searchDate = $element.data('date');
        this.setActiveTab(searchDate);
    }

    function onRequestSuccess(data, searchDates, results) {
        var searchDate = data.date;
        var resultsCount = arrayHelper.getItemCount(results);

        this.notificationView.showResultsNotification(resultsCount, searchDates);
        this.renderResults(searchDate, searchDates, results);
    }

    function onRequestError(error) {
        return this.renderError(error.message);
    }

    function FlightSearchController(searchDateRange, views) {
        this.searchDateRange = searchDateRange;

        this.formView = views.formView;
        this.notificationView = views.notificationView;
        this.tabListView = views.tabListView;
        this.tabsView = views.tabsView;

        this.formView.$el.on('submit', handleFormViewSubmit.bind(this));
        this.tabListView.$el.on('click', handleTabListViewClick.bind(this))
    }

    FlightSearchController.prototype.renderError = function(error) {
        this.formView.enable();
        this.notificationView.showErrorNotification(error);
    }

    FlightSearchController.prototype.renderResults = function(searchDate, searchDates, results) {
        this.formView.enable();
        this.tabListView.render(searchDates);
        this.tabsView.render(searchDates, results);

        this.setActiveTab(searchDate);
    }

    FlightSearchController.prototype.removeResults = function() {
        this.tabListView.remove();
        this.tabsView.remove();
    }

    FlightSearchController.prototype.setActiveTab = function(date) {
        this.tabListView.setActiveItem(date);
        this.tabsView.setActiveTab(date);
    }

    window.application = window.application || {};
	window.application.FlightSearchController = FlightSearchController;

})(window.jQuery, window.arrayHelper, window.dateHelper, window.requestHelper, window);
