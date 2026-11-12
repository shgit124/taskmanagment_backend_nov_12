const mongoose = require("mongoose")

mongoose.connect(process.env.connectiom_string).then((res)=>{
    console.log("mongodb connectd")
}).catch((err)=>{
    console.log(err)
})