'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'owners_db',
      [
        {
          id: 1,
          full_name: 'Pedron Silva',
          document: '12345678910',
          phone: '11999998888',
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          id: 2,
          full_name: 'Pedron Silva',
          document: '12345678911',
          phone: '11999997777',
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          id: 3,
          full_name: 'Pedron Silva',
          document: '12345678912',
          phone: '11999995555',
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {},
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Owner', null, {});
  },
};
