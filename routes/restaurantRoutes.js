const express = require('express');
const addRestaurant = require('../controllers/restaurantControllers')

// userRoutes.js
const express = require('express');

const router = express.Router();

router.post('/restaurantForm',addRestaurant)

module.exports = router;
