import sequelize from "../config/dbConnect.js";
import Animal from "../models/Animal.js";

const cadastrarAnimal = async (req, res) => {
    await sequelize.authenticate();

    try {
        await Animal.create(req.body)
        res.status(201).send({message: "Cadastrado com sucesso"})
    } catch (err) {
        res.status(500).send({message: err})
    }
}

export default cadastrarAnimal;