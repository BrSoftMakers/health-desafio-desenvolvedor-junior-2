const Animal = require('../models/Animal')

// Ação para exibir a lista de animais
exports.listAnimals = async (req, res) => {
    try{
        const animals = await Animal.findAll()
        res.json( animals )
    } catch (error) {
        console.log(error)
        res.status(500).json('Erro ao listar animais!')
    }
}

// Ação para exibir os detalhes de um animal específico
exports.listAnimalById = async (req, res) => {
    try{
        const { id } = req.params
        const animal = await Animal.findByPk(id)
        if(!animal) throw new Error('Animal não encontrado!')

        res.json(animal)
    } catch (error) {
        console.log(error)
        res.status(500).json('Erro ao listar animal!')
    }
}

// Ação para criar um animal
exports.createAnimal = async (req, res) => {
    try{
        console.log("resultado: ", req.body)
        const { nome, idade, tipo, raca, nome_dono, telefone_dono } = req.body

        // const createdAt = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear()
        await Animal.create({ nome, idade, tipo, raca, nome_dono, telefone_dono })
        res.status(200).json('Animal criado com sucesso!')
    } catch (error) {
        console.log(error)
        res.status(500).json('Erro ao criar animal!')
    }
}

// Ação para atualizar um animal
exports.updateAnimal = async (req, res) => {
    try {
        const { id } = req.params
        const { nome, idade, tipo, raca, nome_dono, telefone_dono } = req.body
        const animal = await Animal.findByPk(id)
        if(!animal) throw new Error('Animal não encontrado!')

        await animal.update({ nome, idade, tipo, raca, nome_dono, telefone_dono })
        res.status(200).json('Animal atualizado com sucesso!')
    } catch (error) {
        console.log(error)
        res.status(500).json('Erro ao atualizar animal!')
    }
}


exports.deleteAnimal = async (req, res) => {
    try {
        const id = req.params.id
        // const animal = await Animal.findByPk(id)
        const animal = await Animal.destroy({ where: { id:id } })
        // if (!animal) throw new Error('Animal não encontrado!')

        // await animal.destroy()
    } catch (error) {
        console.log(error)
        res.status(500).send('Erro ao deletar animal!')
    }
}

