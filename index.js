require("dotenv").config()

const express = require("express")
const cors = require("cors")
require("./connecction/connection")
const router = require("./Routes/route")

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("server running at",PORT)
})

