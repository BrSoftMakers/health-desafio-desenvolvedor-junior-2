const express = require("express")
const cors = require("cors")
const petRoutes = require("./petRoutes")

const app = express()

app.use(cors())
app.use(express.json())
app.use(petRoutes)

app.get("/health", (req, res) =>{
    return res.json("up");
});

app.listen(3333, ()=> console.log("Server up in 3333"))
