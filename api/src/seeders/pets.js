/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'pets',
    [
      {
        name: 'Nick',
        age: 13,
        species: 'dog',
        breed: 'Yorkshire',
        owner_id: 1,
      },
      {
        name: 'Titena',
        age: 2,
        species: 'cat',
        breed: 'Siamês',
        owner_id: 2,
      },
    ],
    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('pets', null, {}),
};
