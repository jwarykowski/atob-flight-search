(function ($, Handlebars, window) {
	'use strict';

	function createTabListElements(searchDates) {
        var view = this;

		return searchDates.map(function(date) {
            var data = { date: date };
            return view.template(data);
		});
	}

    function TabListView() {
        this.$el = $('ul#tabList');
        this.template = Handlebars.templates['tabListItem'];
    }

	TabListView.prototype.remove = function(requestedDate, searchDates) {
		this.$el.empty();
    }

    TabListView.prototype.render = function(searchDates) {
		var $tabListItems = createTabListElements.bind(this, searchDates);

		this.$el.html($tabListItems);
    }

	TabListView.prototype.setActiveItem =  function(date) {
		this.$el.find('a.tab').removeClass('active').filter(function() {
    		return ($(this).data('date') === date);
  		}).addClass('active');
	}

    window.application = window.application || {};
    window.application.TabListView = TabListView;

})(window.jQuery, window.Handlebars, window);
