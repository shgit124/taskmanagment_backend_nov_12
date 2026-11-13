const tasks = require('../models/taskmodels')


exports.addTask = async (req, res) => {
    try {

        console.log("Request body:", req.body)

        const { addtask, description } = req.body

        if (!addtask || !description) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }

        const existingtask = await tasks.findOne({ addtask })

        if (existingtask) {
            return res.status(409).json({
                message: "Task already added"
            })
        }

        const newtask = new task({
            addtask,
            description
        })

        await newtask.save()

        return res.status(201).json({
            message: "Task added successfully",
            details: newtask
        })

    } catch (err) {

        console.log("ADD TASK ERROR:", err.message)

        return res.status(500).json({
            message: err.message
        })
    }
}

exports.listTask = async(req,res)=>{
 try{
     
    const tasklist = await tasks.find()

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