/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('pets', [{
      nome: 'Kate',
      idade: 5,
      especie: 'cachorro',
      id_tutor: 1,
    },
    {
      nome: 'Monica',
      idade: 3,
      especie: 'gato',
      id_tutor: 2,
    },
    {
      nome: 'Chandler',
      idade: 2,
      especie: 'gato',
      id_tutor: 3,
    },

    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('pets', null, {});
  },
};
