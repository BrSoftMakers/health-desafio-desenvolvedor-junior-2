import app, { init } from "./app";

const PORT: number = Number(process.env.PORT) || 8080;

init().then(() => {
    app.listen(PORT, () => {
        console.log("Servidor rodando na porta", PORT);
    });
});
