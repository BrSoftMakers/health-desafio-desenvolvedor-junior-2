import sequelize from "../config/dbConnect.js";
import Animal from "../models/Animal.js";

const deletarAnimal = async (req, res) => {
    await sequelize.authenticate();
    const id = req.params.id;
    
    try {
        await Animal.destroy({where: {id: id}})
        res.status(200).send({message: "Deletado com Sucesso"})
    } catch (err) {
        res.status(500).send({message: "Erro ao deletar animal"})
    }
}

export default deletarAnimal;