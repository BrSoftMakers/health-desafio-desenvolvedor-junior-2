'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
  await queryInterface.bulkInsert('clientes', [{
    nome: 'Jr Gouveia',
    email: 'gouveia@gmail.com',
    contato: '81 99898-9898',
    contato_2: '81 99191-9292',
  }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('clientes', null, {});
  }
};
