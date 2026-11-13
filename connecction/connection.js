
// const mongoose = require("mongoose");

// mongoose.connect(process.env.connection_string).then((res)=>{
//   console.log("mongodb connected with server")
// }).catch((err)=>{
//   console.log("mongodb connection failed")
// })



require("dotenv").config()
const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.connection_string)
        console.log("MongoDB connected successfully")
    } catch (err) {
        console.log("MongoDB connection failed:", err)
        throw err
    }
}

module.exports = connectDB
