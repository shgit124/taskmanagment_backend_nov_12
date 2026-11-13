// require("dotenv").config()

// const express = require("express")
// const cors = require("cors")
// require("./connecction/connection")
// const router = require("./Routes/route")

// const app = express()

// app.use(cors())
// app.use(express.json())
// app.use(router)
// const PORT = process.env.PORT || 3000;

// app.listen(PORT,()=>{
//     console.log("server running at",PORT)
// })



require("dotenv").config()

const express = require("express")
const cors = require("cors")
const connectDB = require("./connecction/connection")
const router = require("./Routes/route")

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

const PORT = process.env.PORT || 3000

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server running at", PORT)
    })
}).catch(() => {
    console.log("Server not started because database connection failed")
})


