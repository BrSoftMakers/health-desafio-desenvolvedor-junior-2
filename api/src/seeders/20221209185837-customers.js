/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'customers',
    [
      {
        name: 'Camilla Bastos',
        phone: '(79) 9 9926-2730',
      },
      {
        name: 'Lorena Lany',
        phone: '(79) 9 8116-2425',
      },
    ],
    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('customers', null, {}),
};
