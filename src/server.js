const express = require("express")

const app = express()

app.use(express.json())

app.get("/pegar", (req, res) => {

    return res.json("servidor online");

}); 

app.listen(3333, () => console.log("Servidor online na porta 3333"))