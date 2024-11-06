const express = require('express');
const addRestaurant = require('../controllers/restaurantControllers')


const router = express.Router();

router.post('/restaurantForm',addRestaurant)

module.exports = router;
