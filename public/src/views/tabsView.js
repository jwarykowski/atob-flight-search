(function ($, Handlebars, window) {
	'use strict';

	function createTabElements(searchDates, results) {
        var view = this;

		return searchDates.map(function(date, index) {
            var flightData = results[index].map(function(flight) {
                return getFlightData(flight);
            });

            return view.template({ date: date, flights: flightData });
		});
	}

	function getFlightData(flight) {
		return {
            airlineName: flight.airline.name,
            distance: numeral(flight.distance).format('0.0a'),
            destinationCityName: flight.finish.cityName,
            destinationCode: flight.finish.airportCode,
            destinationCountryCode: flight.finish.countryCode,
            destinationDateTime: moment(flight.finish.dateTime).format('HH:mmA'),
            durationMin: numeral(flight.durationMin).format('00:00:00'),
            flightNum: flight.flightNum,
            originCityName: flight.start.cityName,
            originCode: flight.start.airportCode,
            originCountryCode: flight.start.countryCode,
            originDateTime: moment(flight.start.dateTime).format('HH:mmA'),
            plane: flight.plane.shortName,
            price: numeral(flight.price).format('$0,0.00')
        };
	}

    function TabsView() {
        this.$el = $('#tabs');
        this.template = Handlebars.templates['tabItem'];
    }

	TabsView.prototype.remove = function(requestedDate, searchDates) {
		this.$el.empty();
    }

    TabsView.prototype.render = function(searchDates, results) {
		var $tabItems = createTabElements.bind(this, searchDates, results);
		this.$el.html($tabItems);
    }

    TabsView.prototype.setActiveTab =  function(date) {
		this.$el.find('div.panel').hide().filter(function() {
    		return ($(this).data('date') === date);
  		}).show();
	}

	Handlebars.registerPartial('flightItem', Handlebars.templates['flightItem']);

    window.application = window.application || {};
    window.application.TabsView = TabsView;

})(window.jQuery, window.Handlebars, window);
