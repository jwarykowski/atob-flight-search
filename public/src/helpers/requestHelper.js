(function(window) {
    'use strict';

    var noResultsMesssage = 'No results returned from search, please try again.';
    var responseErrorMessage = 'Error returned from search, please try again.';

    function getSearchOptions(origin, destination, date) {
        return {
            method: 'POST',
            body: JSON.stringify({
                date: date,
                origin: origin,
                destination: destination
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }

    function fetchSearchForDate(origin, destination, date) {
        var options = getSearchOptions(origin, destination, date);

        return fetch('api/search', options).then(handleResponse);
    }

    function fetchSearchForDates(origin, destination, searchDates) {
        return Promise.all(searchDates.map(fetchSearchForDate.bind(null, origin, destination)));
    }

    function handleNoResults(results) {
        if (!results.length) {
            throw Error(noResultsMesssage);
        }

        return results;
    }

    function handleResponse(response) {
        if (!response.ok) {
            return response.text().then(function(text) {
                throw Error(text || responseErrorMessage);
            });
        }

        return response.json();
    }

    var requestHelper = {};

    requestHelper.fetchSearch = function(data, searchDates) {
        return fetchSearchForDates(data.origin, data.destination, searchDates)
            .then(handleNoResults);
    }

    window.requestHelper = requestHelper;

})(window);
