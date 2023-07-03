const { petSchema } = require('../schema/pet.schema');

const validatePet = (req, res, next) => {
  const { error } = petSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  next();
};

module.exports = {
  validatePet,
};
