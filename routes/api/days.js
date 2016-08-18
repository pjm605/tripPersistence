var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Day = require('../../models/day');

router.get('/api/days', function (req, res, next) {
	Day.findAll({
		include: [{all: true}]
	})
	.then (function (result) {
		res.send(result)
	})
	.catch(next);
})

router.post('/api/days/:id', function (req, res, next) {

	Day.findOrCreate({
		where: {
			number: req.params.id
		}
	})
	.then (function (day) {
		res.send("Success")
	})
	.catch(next)

})

router.get('/api/days/:id', function (req, res, next) {
		Day.findOne({
			where: {
				number: req.params.id
			}
		})
	.then (function (result) {
		res.send(result)
	})
	.catch(next);
})

router.delete('/api/days/:id', function (req, res, next) {

})






module.exports = router;