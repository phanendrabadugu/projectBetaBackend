const mongoose = require('mongoose');
// MongoDB connection
const uri = process.env.DATABASE_URL;

const ConnectDB = async () => {
  try {
    await mongoose.connect(uri)
      .then(() => console.log("MongoDB connected successfully"))
      .catch((err) => {
        console.error("MongoDB connection error:", err);
        process.exit(1);
      });
  } catch (error) {
    
  }
};

module.exports = ConnectDB;
