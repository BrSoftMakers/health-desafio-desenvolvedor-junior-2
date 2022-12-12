/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'customers',
    [
      {
        name: 'Cliente Um',
        phone: '(79) 9 9999-9999',
      },
      {
        name: 'Cliente Dois',
        phone: '(79) 8888-8888',
      },
    ],
    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('customers', null, {}),
};
