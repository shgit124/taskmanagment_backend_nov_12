const express = require("express")

const taskController = require("../controller/controller")

const app = express()

const route = express.Router()

route.post("/addtask",taskController.addTask)
route.get("/listTask",taskController.listTask)
route.get("/taskdetail/:id",taskController.gettaskDetailApi)




module.exports = route