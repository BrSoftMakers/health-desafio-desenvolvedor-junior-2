const { StatusCodes } = require('http-status-codes');

const errorHandler = (err, _req, res, _next) => {
  const { code, message } = err;

  return res.status(code || StatusCodes.INTERNAL_SERVER_ERROR).json({ message });
};

module.exports = errorHandler;
