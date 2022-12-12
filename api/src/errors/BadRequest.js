const CustomError = require('./CustomError');

class BadRequest extends CustomError {
  constructor(message) {
    super(message, 'BAD_REQUEST');
  }
}

module.exports = BadRequest;
