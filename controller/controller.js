const task = require('../models/taskmodels')


exports.addTask = async(req,res)=>{
    try{
       
        const {addtask, description}= req.body

        const existingtask = await task.findOne({addtask})

        if(!existingtask){
       return res.status(409).json("task not added")
        }
        else{
            
            const newtask = new task({
       addtask,description
            })

          await newtask.save()

            return res.status(200).json({
        message:"task completed",
        details:newtask
       })
        }
     

    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
    
}

exports.listTask = async(req,res)=>{
 try{
     
    const tasklist = await task.find()

    if(tasklist){
      return res.status(200).json(tasklist)
    }

    else{
        return res.status(404).json("task list not found")
    }
 }
 catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}