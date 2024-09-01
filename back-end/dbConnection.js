require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const dbURI = process.env.DB_URI; // Get the URI from the environment variable
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to Database');
  } catch (error) {
    console.log('Error connecting to Database:', error);
  }
};

module.exports = connectDB;
