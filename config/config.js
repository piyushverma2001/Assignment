require("dotenv").config(); // Load environment variables from .env file

module.exports = {
  PORT: process.env.PORT || 5000, // Port number for the server

  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase", // MongoDB connection URI

  JWT_SECRET: process.env.JWT_SECRET || "your_jwt_secret", // Secret key for JWT signing
};
