module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Pets',
      [{
        nome: 'rex', 
        idade: 10,
        eGatoOuCachorro: 'Cachorro', 
        raca: 'Bulldog',
        nomeDoDono: 'Ana', 
        telefoneDeContato: '(31)90542-6402',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'mel', 
        idade: 4,
        eGatoOuCachorro: 'Gato', 
        raca: 'Ashera',
        nomeDoDono: 'Felipe', 
        telefoneDeContato: '(31)99205-0273',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'akamaru', 
        idade: 2,
        eGatoOuCachorro: 'Cachorro', 
        raca: 'Pinscher',
        nomeDoDono: 'Carla', 
        telefoneDeContato: '(31)98305-1273',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'reginaldo', 
        idade: 14,
        eGatoOuCachorro: 'Gato', 
        raca: 'Siamês',
        nomeDoDono: 'Mateus', 
        telefoneDeContato: '(31)99231-0773',
        createdAt: new Date(),
        updatedAt: new Date(),
      },  ], { timestamps: true });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Pets', null, {});
  },
};