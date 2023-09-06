import sequelize from "../config/dbConnect.js";
import Animal from "../models/Animal.js";

const editarAnimal = async (req, res) => {
    await sequelize.authenticate();
    const id = req.params.id;

    try {
        await Animal.update(req.body, {where: {id: id}})
        res.status(200).send({message: "Atualizado com Sucesso"})
    } catch (err) {
        res.status(500).send({message: err})
    }
}

export default editarAnimal;