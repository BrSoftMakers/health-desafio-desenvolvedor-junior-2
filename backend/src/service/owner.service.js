const { Owner } = require('../database/models');
const { errorBase } = require('../utils/error-base');

const createOwner = async ({ fullName, phone, document }) => {
  const ownerExists = await Owner.findOne({ where: { document } });
  if (ownerExists) {
    throw errorBase('Owner already exists', 409);
  }

  return await Owner.create({ fullName, phone, document });
};

const getOwnerByDocument = async (document) => {
  const owner = await Owner.findOne({ where: { document }, include: ['pets'] });
  if (!owner) {
    throw errorBase('Owner not found', 404);
  }
  return owner;
};

module.exports = {
  createOwner,
  getOwnerByDocument,
};
