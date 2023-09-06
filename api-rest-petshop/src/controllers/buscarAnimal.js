import sequelize from "../config/dbConnect.js";
import Animal from "../models/Animal.js";

const buscarAnimal = async (req, res) => {
    await sequelize.authenticate();

    const id = req.params.id;
    const animal = await Animal.findByPk(id);
    res.status(200).send(animal)
}

export default buscarAnimal;