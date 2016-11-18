const express = require('express');
const router = express.Router();
module.exports = router;

const models = require('./models');
const Hotel = models.Hotel;
const Restaurant = models.Restaurant;
const Activity = models.Activity;
const Place = models.Place;

router.get('/', function (req, res, next) {

	const hotelsAreBeingRead = Hotel.findAll();
	const restaurantsAreBeingRead = Restaurant.findAll();
	const activitiesAreBeingRead = Activity.findAll();

	const gettingAllData = Promise.all([
    hotelsAreBeingRead,
    restaurantsAreBeingRead,
    activitiesAreBeingRead]);

	gettingAllData.then( function (information){
		res.render('index', {
								allHotels: information[0],
								allRestaurants: information[1],
								allActivities: information[2]
							}
		});	
	})
	.catch(next);



    
});