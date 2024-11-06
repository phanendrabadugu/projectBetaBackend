const mongoose = require("mongoose");
// Define JobApplication schema and model
const jobApplicationSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      address: { type: String, required: true },
      howLongLooking: { type: String, required: true },
      contactDetails: { type: String, required: true },
      email: { type: String, required: true },
      callAvailability: { type: String, required: true },
      agreedToPolicy: { type: Boolean, required: true },
      selectedRestaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address", // Ensure this ref is correctly set to Address
        required: true,
      },
      selectedPositions: { type: [String], required: true },
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("JobApplication", jobApplicationSchema);
  