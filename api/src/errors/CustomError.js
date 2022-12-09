const { StatusCodes } = require('http-status-codes');

class CustomError extends Error {
  constructor(message, code) {
    super();
    this.name = code;
    this.code = StatusCodes[code];
    this.message = message;
  }
}

module.exports = CustomError;
