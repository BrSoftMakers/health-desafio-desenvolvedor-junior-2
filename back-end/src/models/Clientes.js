module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('cliente', {
        id:
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: DataTypes.STRING,
        email: DataTypes.INTEGER,
        contato: DataTypes.STRING,
        contato_2: DataTypes.INTEGER,
    }, {
        tableName: 'clientes',
        timestamps: false,
    });

    Cliente.associate = (models) => {
        Cliente.hasMany(models.pet, {
            foreignKey: 'id',
            as: 'pet_id',
        });
    };

    return Cliente;
};
