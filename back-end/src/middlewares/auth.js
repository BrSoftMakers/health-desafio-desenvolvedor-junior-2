/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();
const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const token = req.cookies ? req.cookies.token : null;
  if (!token) {
    return res.status(403).send({
      auth: false, message: 'No token provided.',
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).send({
        auth: false,
        message: `Fail to Authenticate: Error ${err}`,
      });
    }
    req.userId = decoded.id;
    next();
  });
}

module.exports = verifyToken;
