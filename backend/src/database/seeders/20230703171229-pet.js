'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'pets_db',
      [
        {
          id: 1,
          name: 'Bolinha',
          age: 4,
          species: 'gato',
          breed: 'Siamês',
          unique_indentifier: 'PET-362462',
          owner_id: 1,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          id: 2,
          name: 'Coca Cola',
          age: 5,
          species: 'cachorro',
          breed: 'Labrador',
          unique_indentifier: 'PET-604587',
          owner_id: 2,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          id: 3,
          name: 'Snoopy',
          age: 7,
          species: 'cachorro',
          breed: 'Poodle Bayley',
          unique_indentifier: 'PET-785406',
          owner_id: 3,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {},
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Pet', null, {});
  },
};
