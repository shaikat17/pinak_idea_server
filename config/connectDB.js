require('dotenv').config()
const mongoose = require("mongoose");

// console.log(process.env.mongodb_connection)
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.mongodb_connection);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;