const OwnerService = require('../service/owner.service');

const createOwner = async (req, res, next) => {
  try {
    const { fullName, phone } = req.body;
    const owner = await OwnerService.createOwner({ fullName, phone });
    res.status(201).json(owner);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOwner,
};
