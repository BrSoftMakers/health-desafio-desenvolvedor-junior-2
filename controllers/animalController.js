const Animal = require('../models/Animal')

// Ação para exibir a lista de animais
exports.listAnimals = async (req, res) => {
    try{
        const animals = await Animal.findAll()
        res.render('animalList', { animals })
    } catch (error) {
        console.log(error)
        res.status(500).send('Erro ao listar animais!')
    }
}

// Ação para exibir os detalhes de um animal específico
exports.listAnimalById = async (req, res) => {
    try{
        const { id } = req.params
        const animal = await Animal.findByPk(id)
        if(!animal) throw new Error('Animal não encontrado!')

        res.render('animalDetails', { animal })
    } catch (error) {
        console.log(error)
        res.status(500).send('Erro ao listar animal!')
    }
}

// Ação para exibir o formulário de criação de animal
exports.showCreateForm = (req, res) => {
    res.render('createAnimal')
}

// Ação para criar um animal
exports.createAnimal = async (req, res) => {
    try{
        const { nome, idade, tipo, raca, nome_dono, telefone_dono } = req.body
        await Animal.create({ nome, idade, tipo, raca, nome_dono, telefone_dono })
        res.redirect('/animais')
    } catch (error) {
        console.log(error)
        res.status(500).send('Erro ao criar animal!')
    }
}

// Ação para exibir o formulário de atualização de animal
exports.showUpdateForm = async (req, res) => {
    try{
        const { id } = req.params
        const animal = await Animal.findByPk(id)
        if(!animal) throw new Error('Animal não encontrado!')

        res.render('updateAnimal', { animal })
    } catch (error) {
        console.log(error)
        res.status(500).send('Erro ao atualizar animal!')
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
        res.redirect('/animais')
    } catch (error) {
        console.log(error)
        res.status(500).send('Erro ao atualizar animal!')
    }
}


exports.deleteAnimal = async (req, res) => {
    try {
        const { id } = req.params
        const animal = await Animal.findByPk(id)
        if (!animal) throw new Error('Animal não encontrado!')

        await animal.destroy()
        res.redirect('/animais')
    } catch (error) {
        console.log(error)
        res.status(500).send('Erro ao deletar animal!')
    }
}

