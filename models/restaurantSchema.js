// Define Address schema and model
const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  coordinates: {
    type: {
      type: String,
      enum: ["Point"], // Specify this is a 2D point
      default: "Point",
    },
    coordinates: {
      type: [Number],
      required: true, // Latitude and longitude
    },
  },
  jobPosts: {
    cuisine: { type: Number, default: 0 },
    delivery: { type: Number, default: 0 },
    receptionist: { type: Number, default: 0 },
  },
});

restaurantSchema.index({ coordinates: "2dsphere" }); // Create 2dsphere index for geospatial queries

module.exports = mongoose.model("Restaurant", restaurantSchema);
