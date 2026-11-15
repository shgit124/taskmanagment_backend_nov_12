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

        const newtask = new tasks({
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

exports.gettaskDetailApi = async(req,res)=>{

    const {id}=req.params
    try{

        const existingtask = await tasks.findById(id)
        if(existingtask){

            return res.status(200).json({
                message:"task already added",
                result:existingtask
            })
        }

        else{
            return res.status(409).json("task not founded")
        }

    } catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

exports.updateTask = async (req, res) => {
    try {
        console.log("UPDATE API CALLED")

        const { id } = req.params

        console.log("ID:", id)
        console.log("BODY:", req.body)

        const response = await tasks.findById(id)

        console.log("FOUND TASK:", response)

        if (!response) {
            return res.status(404).json({
                message: "Task ID not found in MongoDB"
            })
        }

        const updatedTask = await tasks.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        )

        return res.status(200).json({
            message: "Task updated successfully",
            result: updatedTask
        })

    } catch (err) {
        console.log("ERROR:", err.message)

        return res.status(500).json({
            message: err.message
        })
    }
}

exports.taskDelete = async(req,res)=>{
    try{
         const {id}=req.params

         const existingtask = await tasks.findByIdAndDelete(id)

         if(!existingtask){

            return res.status(404).json({
                message:"task not found"
            })
         }

       return res.status(200).json({
    message: "Task deleted successfully",
    result: existingtask
})

    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }

}