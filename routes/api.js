const express = require('express');

const arrayHelper = require('../helpers/arrayHelper');
const requestHelper = require('../helpers/requestHelper');

const router = new express.Router();

function onRequestSuccess(results) {
    this.status(200).json(results);
}

function onRequestError(error) {
    if (error && error.message) {
        return this.status(400).send(error.message)
    }

    this.status(400).send();
}

router.get('/airlines', (req, res) => {
    requestHelper.fetchAirlines()
        .then(requestSuccess.bind(res))
        .catch(requestError.bind(res));
});

router.get('/airports', (req, res) => {
    const cityName = req.query.cityName;

    requestHelper.fetchAirports(cityName)
        .then(requestSuccess.bind(res))
        .catch(requestError.bind(res));
});

router.post('/search', (req, res) => {
    const {
        date,
        origin,
        destination
    } = req.body;
    const sortKey = 'price';

    return requestHelper.fetchAirportCodesAndAirlines(origin, destination)
        .then(requestHelper.generateRoutes)
        .then(requestHelper.fetchFlightsForRoutes.bind(null, date))
        .then(arrayHelper.flattenArrays)
        .then(arrayHelper.orderBy.bind(null, sortKey))
        .then(onRequestSuccess.bind(res))
        .catch(onRequestError.bind(res));
});

module.exports = router;
