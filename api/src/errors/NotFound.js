const CustomError = require('./CustomError');

class NotFound extends CustomError {
  constructor(message) {
    super(message, 'NOT_FOUND');
  }
}

module.exports = NotFound;
