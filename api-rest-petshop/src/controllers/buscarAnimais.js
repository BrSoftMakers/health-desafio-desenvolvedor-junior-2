import sequelize from "../config/dbConnect.js";
import Animal from "../models/Animal.js";

const buscarAnimais = async (req, res) => {
    await sequelize.authenticate();

    try {
        const animais = await Animal.findAll();
        res.status(200).json(animais);
    } catch (err) {
        res.status(500).send(err)
    }

}

export default buscarAnimais;