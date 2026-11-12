
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.connection_strin);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.log("MongoDB connection failed:", err.message);
    throw err;
  }
};

module.exports = connectDB;
