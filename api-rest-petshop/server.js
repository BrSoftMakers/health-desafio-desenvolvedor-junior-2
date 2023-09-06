import app from "./src/app.js";

const port = process.env.port || 3000;

app.listen(port, console.log(`Servidor iniciado na porta: ${port}`))