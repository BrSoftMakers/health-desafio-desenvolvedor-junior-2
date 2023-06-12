const { Sequelize } = require('sequelize')
const config = require('./config/config')

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
    host: config.development.host,
    dialect: config.development.dialect
})

sequelize.authenticate().then(() => {
    console.log('Conexão com o banco de dados realizada com sucesso!')
}).catch((error) => {
    console.log(error)
})

module.exports = sequelize