const OwnerService = require('../service/owner.service');

const createOwner = async (req, res, next) => {
  try {
    const { fullName, phone, document } = req.body;
    const owner = await OwnerService.createOwner({ fullName, phone, document });
    return res.status(201).json(owner);
  } catch (error) {
    if (!error.status) {
      return res.status(500).json({ statusCode: 500, message: error.message });
    }
    return res
      .status(error.status)
      .json({ statusCode: error.status, message: error.message });
  }
};

const getOwnerByDocument = async (req, res) => {
  try {
    const { document } = req.body;
    const owner = await OwnerService.getOwnerByDocument(document);
    return res.status(200).json(owner);
  } catch (error) {
    if (!error.status) {
      return res.status(500).json({ statusCode: 500, message: error.message });
    }
    return res
      .status(error.status)
      .json({ statusCode: error.status, message: error.message });
  }
};
module.exports = {
  createOwner,
  getOwnerByDocument,
};
