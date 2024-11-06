const jobApplication = require('../models/jobApplicationSchema')
const Restaurant = require('../models/restaurantSchema');
// API endpoint to fetch all job applications with populated restaurant details

const studentSearch  = async (req, res) => {
    const { lat, lng, distance } = req.query;
    if (!lat || !lng || !distance) {
      return res.status(400).json({
        message: "lat, lng, and distance query parameters are required",
      });
    }
  
    const maxDistance = parseFloat(distance) * 1000;
  
    try {
      const restaurants = await Restaurant.find({
        coordinates: { // Change from "address.location" to "coordinates"
          $near: {
            $geometry: {
              type: "Point",
              coordinates: [parseFloat(lng), parseFloat(lat)], // Longitude first, then Latitude
            },
            $maxDistance: maxDistance,
          },
        },
      });
  
      res.json(restaurants);
    } catch (err) {
      console.error("Error fetching nearby addresses:", err);
      res.status(500).json({ message: err.message });
    }
  };



  // Job Application submission with selected restaurant reference
const selectedJobApplication =  async (req, res) => {
    const {
      name,
      address,
      howLongLooking,
      contactDetails,
      email,
      callAvailability,
      agreedToPolicy,
      selectedRestaurantId,
      selectedPositions,
    } = req.body;
  
    try {
      // Find the selected restaurant to confirm it exists
      const restaurant = await Restaurant.findById(selectedRestaurantId);
      if (!restaurant) {
        return res.status(404).send("Selected restaurant not found");
      }
  
      const newJobApplication = new jobApplication({
        name,
        address,
        howLongLooking,
        contactDetails,
        email,
        callAvailability,
        agreedToPolicy,
        selectedRestaurantId: restaurant._id, // Save the restaurant ID
        selectedPositions,
      });
  
      await newJobApplication.save();
      res.status(201).send("Job application submitted successfully");
    } catch (error) {
      console.error("Error submitting job application:", error);
      res.status(500).send("Failed to submit job application");
    }
  };
  
  
  
module.exports = {studentSearch,selectedJobApplication}