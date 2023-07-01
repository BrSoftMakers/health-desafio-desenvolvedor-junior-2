const { Owner } = require('../database/models');

const createOwner = async ({ fullName, phone }) => {
  return await Owner.create({ fullName, phone });
};

module.exports = {
  createOwner,
};
