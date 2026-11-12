const express = require("express")

const taskController = require("../controller/controller")

const app = express()

const route = express.Router()

route.post("/addtask",taskController.addTask)
route.get("/listTask",taskController.listTask)





module.exports = route