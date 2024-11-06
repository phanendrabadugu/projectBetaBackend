const Restaurant = require('../models/restaurantSchema');
// Form submission route for adding new Address with geolocation
const addRestaurant = async (req, res) => {
    const { lat, lng, jobPosts } = req.body;
  
    try {
      const newRestaurant = new Restaurant({
        coordinates: {
          type: 'Point',
          coordinates: [lng, lat], // [longitude, latitude]
        },
        jobPosts,
      });
  
      await newRestaurant.save();
      res.status(201).send('Restaurant added successfully');
    } catch (error) {
      console.error('Error adding restaurant:', error);
      res.status(500).send('Failed to add restaurant');
    }
  };

  module.exports = addRestaurant;