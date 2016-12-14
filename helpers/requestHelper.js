const fetch = require('node-fetch');

const baseApiUrl = 'http://node.locomote.com/code-task';

function fetchData(path) {
    return fetch(`${baseApiUrl}/${path}`).then(handleResponse);
}

function fetchFlightForRoute(date, route) {
    const { airlineCode, originCode, destinationCode } = route;
    return fetchData(`flight_search/${airlineCode}?date=${date}&from=${originCode}&to=${destinationCode}`);
}

function handleNoAirportResults(cityName, results) {
    if (!results.length) {
        throw Error(`No airports for ${cityName}, please try again.`);
    }

    return results;
}

function handleResponse(response) {
    if (!response.ok) {
        return response.text().then(function(text) {
            throw Error(text || response.statusText);
        });
    }

    return response.json();
}

var requestHelper = {};

requestHelper.fetchAirlines = function() {
    return fetchData('airlines');
}

requestHelper.fetchAirports = function(cityName) {
    return fetchData(`airports?q=${cityName}`)
        .then(handleNoAirportResults.bind(null, cityName));
}

requestHelper.fetchAirportCodesAndAirlines = function(origin, destination) {
    return Promise.all([this.fetchAirports(origin), this.fetchAirports(destination),  this.fetchAirlines()]);
}

requestHelper.fetchFlightsForRoutes = function(date, routes) {
    return Promise.all(routes.map(fetchFlightForRoute.bind(null, date)))
}

requestHelper.generateRoutes = function(results) {
    const [originAirports, destinationAirports, airlines] = results;
    const routes = [];

    originAirports.forEach(function(originAirport) {
        destinationAirports.forEach(function(destinationAirport) {
            airlines.forEach(function(airline) {
                routes.push({
                    airlineCode: airline.code,
                    originCode: originAirport.airportCode,
                    destinationCode: destinationAirport.airportCode
                });
            });
        });
    });

    return routes;
}

module.exports = requestHelper;
