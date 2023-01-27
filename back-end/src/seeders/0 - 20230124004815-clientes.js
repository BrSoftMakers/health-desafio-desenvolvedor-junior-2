/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('clientes', [{
      nome: 'Jr Gouveia',
      email: 'gouveia@gmail.com',
      contato: '81 99898-9898',
      contato_2: '81 99191-9292',
    },
    {
      nome: 'Isis Gouveia',
      email: 'isis@gmail.com',
      contato: '81 99123-9898',
      contato_2: '81 99191-9292',
    },
    {
      nome: 'Brian Felipe',
      email: 'brian@gmail.com',
      contato: '81 99128-9898',
      contato_2: '81 99191-9292',
    },
    {
      nome: 'Rael Benício',
      email: 'rael@gmail.com',
      contato: '81 91125-9898',
      contato_2: '81 99191-9292',
    },

    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('clientes', null, {});
  },
};
