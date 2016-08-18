var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');


router.get('/api/hotel', function (req, res, next) {
	Hotel.findAll()
	.then(function (result) {
		res.send(result);
	})
	.catch (next);
})

router.get('/api/restaurant', function (req, res, next) {
	Restaurant.findAll()
	.then(function (result) {
		res.send(result);
	})
	.catch (next);
})

router.get('/api/activity', function (req, res, next) {
	Activity.findAll()
	.then(function (result) {
		res.send(result);
	})
	.catch (next);
})

module.exports = router;