const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    addtask:{
        type:String,
        requird:true

    },
    description:{
         type:String,
        requird:true
    }
})


const  task = mongoose.model("task",taskSchema)

module.exports= task