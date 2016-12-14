(function ($, moment, window) {
	'use strict';

    function NotificationView() {
		this.$el = $('#notifications');
		this.template = Handlebars.templates['notificationItem'];
    }

    NotificationView.prototype.showNotification = function(data) {
		var html = this.template(data);
        this.$el.html(html);
    }

    NotificationView.prototype.showErrorNotification = function(text) {
		var data = {
			className: 'error',
			text: 'Error! ' + text
		};

        this.showNotification(data);
    }

    NotificationView.prototype.showRequestNotification = function(searchDates) {
        var startDate = moment(searchDates[0]).format('dddd, MMMM Do YYYY');
        var endDate = moment(searchDates[searchDates.length - 1]).format('dddd, MMMM Do YYYY');

        var text = 'Please wait, requesting flights across all available airlines between ' +
            startDate + ' and ' + endDate + '.';

		var data = { text: text };

        this.showNotification(data);
    }

    NotificationView.prototype.showResultsNotification = function(resultsCount, searchDates) {
        var dayCount = searchDates.length;
		var daysText = searchDates.length > 1 ? 'days' : 'day';

        var text = 'Please see the ' + resultsCount + ' available flights across the ' +
        	dayCount + ' ' + daysText + ' below.'

        this.showSuccessNotification(text);
    }

    NotificationView.prototype.showSuccessNotification = function(text) {
		var data = {
			className: 'success',
			text: 'Success! ' + text
		};

        this.showNotification(data);
    }

    window.application = window.application || {};
    window.application.NotificationView = NotificationView;

})(window.jQuery, window.moment, window);
