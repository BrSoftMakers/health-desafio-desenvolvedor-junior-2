import express from "express";
import animais from "./routes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Tudo Ok!"})
    })

    app.use(
        express.json(),
        animais
    )
}

export default routes;