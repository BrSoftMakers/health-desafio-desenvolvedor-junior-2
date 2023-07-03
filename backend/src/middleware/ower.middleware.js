const { ownerSchema } = require('../schema/owner.schema');

const validateOwner = (req, res, next) => {
  const { error } = ownerSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  next();
};

module.exports = {
  validateOwner,
};
