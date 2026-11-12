const mongoose = require("mongoose")

mongoose.connect(process.env.connection_string).then((res)=>{
    console.log("mongodb connectd")
}).catch((err)=>{
    console.log(err)
})